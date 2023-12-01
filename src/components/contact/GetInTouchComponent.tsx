import locationIcon from "../../assets/icons/locationIcon.svg";
import phoneIcon from "../../assets/icons/phoneIcon.svg";
import timeIcon from "../../assets/icons/timeIcon.svg";
import { useFormik } from "formik";
import contactValidationSchema from "../../validation/contactValidation";
import Swal from "sweetalert2";
import { FormValues } from "../../types/FormTypes";
import { FC } from "react";
import AnimatedDiv from "../../animations/AnimatedDiv";

const GetInTouchComponent: FC = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: contactValidationSchema,
    onSubmit: (values, { resetForm }) => {
      Swal.fire({
        title: "Success!",
        text: "Your message has been sent.",
        icon: "success",
        confirmButtonText: "Continue",
      }).then((result) => {
        if (result.isConfirmed) {
          resetForm();
        }
      });
      console.log(values);
    },
  });
  return (
    <section className="pt-[100px] pb-[37px] px-4 sm:px-2 flex flex-col items-center lg:items-start">
      <div className="max-w-[1290px] mx-auto px-4 sm:px-2 flex flex-col items-center gap-3 h-100">
        <h2 className="font-semibold text-xl sm:text-base md:text-base lg:text-3xl tracking-wider font-Poppins">
          Get In Touch With Us
        </h2>
        <p className="text-center text-[#9F9F9F] text-xs sm:text-sm md:text-base lg:text-lg font-Poppins font-light w-[80%] sm:w-[70%] lg:w-[55%] pt-2">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>

        <AnimatedDiv className="pt-4 sm:pt-6 md:pt-8 lg:pt-[140px] pb-6 flex flex-col-reverse sm:flex-col md:flex-col lg:flex-row justify-center w-full">
          {/* Contact information */}
          <div className="flex flex-col gap-4 sm:gap-3 md:gap-8 lg:gap-[42px] lg:mt-2 pt-6 w-full lg:w-auto">
            <div className="flex flex-col sm:flex-row sm:gap-[20px] lg:items-start sm:items-center">
              <img
                src={locationIcon}
                alt="Location Icon"
                className="w-[23px] h-[23px] sm:w-[30px] sm:h-[30px]"
              />
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-Poppins font-medium pb-1">
                  Address
                </h3>
                <p className="text-sm sm:text-base w-[50%] md:text-lg font-Poppins font-normal">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-[20px] lg:items-start sm:items-center">
              <img
                src={phoneIcon}
                alt="Phone Icon"
                className="w-[30px] h-[30px] sm:w-[30px] sm:h-[30px]"
              />
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-Poppins font-medium pb-1">
                  Phone
                </h3>
                <p className="text-sm sm:text-base  md:text-lg font-Poppins font-normal">
                  Mobile: +(84) 546-6789
                </p>
                <p className="text-sm sm:text-base  md:text-lg font-Poppins font-normal">
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-[20px] lg:items-start sm:items-center">
              <img
                src={timeIcon}
                alt="Time Icon"
                className="w-[23px] h-[23px] sm:w-[30px] sm:h-[30px]"
              />
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-Poppins font-medium pb-1">
                  Working Time
                </h3>
                <p className="text-sm sm:text-base md:text-lg font-Poppins font-normal">
                  Monday-Friday: 9:00 - 22:00
                </p>
                <p className="text-sm sm:text-base md:text-lg font-Poppins font-normal">
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>
          {/* Contact form */}
          <div className="flex flex-col justify-end w-full lg:w-[50%] mt-10 lg:mt-0">
            <form onSubmit={formik.handleSubmit} className="space-y-[36px]">
              <div>
                <label
                  htmlFor="name"
                  className="text-base font-Poppins font-semibold"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  className="w-full py-[26px] px-[29px] border border-gray-300 rounded-xl mt-[22px] focus:border-teal focus:outline-none focus:ring-0"
                  placeholder="Abc"
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-red-500 pt-2 text-sm">
                    {formik.errors.name}
                  </div>
                ) : null}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-base font-Poppins font-semibold"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="w-full py-[26px] px-[29px] border border-gray-300 rounded-xl mt-[22px] focus:border-teal focus:outline-none focus:ring-0"
                  placeholder="Abc@def.com"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 pt-2 text-sm">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="text-base font-Poppins font-semibold"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.subject}
                  className="w-full py-[26px] px-[29px] border border-gray-300 rounded-xl mt-[22px] focus:border-teal focus:outline-none focus:ring-0"
                  placeholder="This is an optional"
                />
                {formik.touched.subject && formik.errors.subject ? (
                  <div className="text-red-500 pt-2 text-sm">
                    {formik.errors.subject}
                  </div>
                ) : null}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="text-base font-Poppins font-semibold"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  className="w-full py-[26px] px-[29px] border border-gray-300 rounded-xl mt-[22px] focus:border-teal focus:outline-none focus:ring-0"
                  rows={4}
                  placeholder="Hi! I’d like to ask about"
                ></textarea>
                {formik.touched.message && formik.errors.message ? (
                  <div className="text-red-500 pt-2 text-sm">
                    {formik.errors.message}
                  </div>
                ) : null}
              </div>
              <button
                type="submit"
                className="px-[90px]  py-[13px] bg-[#B88E2F]  text-white p-2 rounded hover:bg-yellow-500"
              >
                Submit
              </button>
            </form>
          </div>
        </AnimatedDiv>
      </div>
    </section>
  );
};

export default GetInTouchComponent;
