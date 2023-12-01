import { FC, useState } from "react";

const CheckoutLayout: FC = () => {
  const [selectedOption, setSelectedOption] = useState("directBankTransfer");

  return (
    <section className="max-w-[1290px] mx-auto py-16">
      {/* Main Wrapper */}
      <div>
        {/* Subwrapper */}
        <div className="mx-3">
          <h2 className="font-Poppins font-semibold text-4xl">
            Billing details
          </h2>
          <form className="max-w-full my-10 flex flex-col lg:flex-row justify-between">
            {/* Left Container */}
            <div>
              <div className="flex flex-wrap -mx-2 mb-6">
                <div className="w-full md:w-1/2 px-2 mb-6">
                  <label
                    className="block uppercase tracking-wide  text-base font-medium mb-5"
                    htmlFor="first-name"
                  >
                    First Name
                  </label>
                  <input
                    className="appearance-none block w-full h-[65px]  text-[#9F9F9F] border border-[#9F9F9F] rounded-xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="first-name"
                    type="text"
                    //   placeholder="First Name"
                  />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-6">
                  <label
                    className="block uppercase tracking-wide  text-base font-medium mb-5"
                    htmlFor="last-name"
                  >
                    Last Name
                  </label>
                  <input
                    className="appearance-none block w-full h-[65px]  text-[#9F9F9F] border border-[#9F9F9F] rounded-xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="last-name"
                    type="text"
                    //   placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="mb-12">
                <label
                  className="block uppercase tracking-wide  text-base font-medium mb-5"
                  htmlFor="company"
                >
                  Company Name (Optional)
                </label>
                <input
                  className="appearance-none block w-full h-[65px] text-[#9F9F9F] border border-[#9F9F9F] rounded-xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="company"
                  type="text"
                  // placeholder=""
                />
              </div>
              <div className="mb-12">
                <label
                  className="block uppercase tracking-wide  text-base font-medium mb-5"
                  htmlFor="country"
                >
                  Country / Region
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full h-[65px]  border border-[#9F9F9F] text-[#9F9F9F] py-3 px-4 pr-8 rounded-xl leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="country"
                  >
                    <option>Azerbaijan</option>
                    <option>India</option>
                    <option>United States</option>
                    <option>United Kingdom</option>
                    {/* Add other countries as needed */}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#9F9F9F]">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5.516 7.548c0.436-0.446 1.045-0.481 1.576 0l3.908 3.747 3.908-3.747c0.531-0.481 1.141-0.446 1.576 0 0.436 0.445 0.408 1.197 0 1.615l-4.695 4.502c-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.787-0.335l-4.695-4.502c-0.408-0.418-0.436-1.17 0-1.615z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mb-12">
                <label
                  className="block uppercase tracking-wide  text-base font-medium mb-5"
                  htmlFor="company"
                >
                  Street address
                </label>
                <input
                  className="appearance-none block w-full h-[65px] text-[#9F9F9F] border border-[#9F9F9F] rounded-xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="company"
                  type="text"
                  // placeholder=""
                />
              </div>
              <div className="mb-12">
                <label
                  className="block uppercase tracking-wide  text-base font-medium mb-5"
                  htmlFor="company"
                >
                  Town / City
                </label>
                <input
                  className="appearance-none block w-full h-[65px] text-[#9F9F9F] border border-[#9F9F9F] rounded-xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="company"
                  type="text"
                  // placeholder=""
                />
              </div>
              <div className="mb-12">
                <label
                  className="block uppercase tracking-wide  text-base font-medium mb-5"
                  htmlFor="country"
                >
                  Province
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full h-[65px]  border border-[#9F9F9F] text-[#9F9F9F] py-3 px-4 pr-8 rounded-xl leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="country"
                  >
                    <option>Azerbaijan</option>
                    <option>India</option>
                    <option>United States</option>
                    <option>United Kingdom</option>
                    {/* Add other countries as needed */}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#9F9F9F]">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5.516 7.548c0.436-0.446 1.045-0.481 1.576 0l3.908 3.747 3.908-3.747c0.531-0.481 1.141-0.446 1.576 0 0.436 0.445 0.408 1.197 0 1.615l-4.695 4.502c-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.787-0.335l-4.695-4.502c-0.408-0.418-0.436-1.17 0-1.615z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mb-12">
                <label
                  className="block uppercase tracking-wide  text-base font-medium mb-5"
                  htmlFor="company"
                >
                  ZIP code
                </label>
                <input
                  className="appearance-none block w-full h-[65px] text-[#9F9F9F] border border-[#9F9F9F] rounded-xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="company"
                  type="text"
                  // placeholder=""
                />
              </div>
              <div className="mb-12">
                <label
                  className="block uppercase tracking-wide text-base font-medium mb-5"
                  htmlFor="company"
                >
                  Phone
                </label>
                <input
                  className="appearance-none block w-full h-[65px] text-[#9F9F9F] border border-[#9F9F9F] rounded-xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="company"
                  type="text"
                  // placeholder=""
                />
              </div>
              <div className="mb-12">
                <label
                  className="block uppercase tracking-wide  text-base font-medium mb-2"
                  htmlFor="email-address"
                >
                  Email address
                </label>
                <input
                  className="appearance-none block w-full h-[65px] text-[#9F9F9F] border border-[#9F9F9F] rounded-xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email-address"
                  type="email"
                  placeholder="test@example.com"
                />
              </div>
              <div className="mb-12">
                <label
                  className="block uppercase tracking-wide  text-base font-medium mb-2"
                  htmlFor="additional-information"
                >
                  Additional information
                </label>
                <textarea
                  className="appearance-none block w-full  text-[#9F9F9F] border border-[#9F9F9F] rounded-xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="additional-information"
                  placeholder="Anything we should know?"
                  rows={4}
                ></textarea>
              </div>
            </div>
            {/* Right container */}
            <div className="max-w-full sm:px-4 lg:px-9 space-y-4">
              <div className="flex flex-row justify-between sm:space-x-5 lg:space-x-40">
                <p className="font-Poppins text-2xl font-medium">Product</p>
                <p className="font-Poppins text-2xl font-medium">Subtotal</p>
              </div>
              <div className="flex flex-row w-full justify-between  sm:space-x-4 lg:space-x-60">
                <p className="font-Poppins text-base font-normal text-[#9F9F9F]">
                  Asgaard sofa <span className="text-[#000]">x 1</span>
                </p>

                <p className="font-Poppins text-base font-normal">
                  Rs. 250,000.00
                </p>
              </div>
              <div className="flex flex-row justify-between  sm:space-x-4 lg:space-x-60">
                <p className="font-Poppins text-base font-normal">Subtotal</p>
                <p className="font-Poppins text-base font-normal">
                  Rs. 250,000.00
                </p>
              </div>
              <div className="flex flex-row justify-between  sm:space-x-4 lg:space-x-60 border-b pb-9">
                <p className="font-Poppins text-base font-normal">Total</p>
                <p className="font-Poppins text-2xl font-medium text-[#B88E2F]">
                  Rs. 250,000.00
                </p>
              </div>
              <div className="space-y-2 pb-10">
                <div className="flex items-center ">
                  <input
                    id="directBankTransfer"
                    type="radio"
                    name="paymentMethod"
                    value="directBankTransfer"
                    checked={selectedOption === "directBankTransfer"}
                    onChange={() => setSelectedOption("directBankTransfer")}
                    className="text-[#000] border-gray-300 focus:ring-[#000] h-4 w-4"
                  />
                  <label
                    htmlFor="directBankTransfer"
                    className="ml-3 font-Poppins block text-base font-normal"
                  >
                    Direct Bank Transfer
                  </label>
                </div>
                <p className="text-[#9F9F9F] text-base font-Poppins font-light max-w-[600px] pb-9">
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </p>
                <div className="flex items-center">
                  <input
                    id="cashOnDelivery"
                    type="radio"
                    name="paymentMethod"
                    value="cashOnDelivery"
                    checked={selectedOption === "cashOnDelivery"}
                    onChange={() => setSelectedOption("cashOnDelivery")}
                    className="text-[#000] border-gray-300 focus:ring-[#000] h-4 w-4"
                  />
                  <label
                    htmlFor="cashOnDelivery"
                    className="ml-3 font-Poppins block text-base font-normal"
                  >
                    Cash On Delivery
                  </label>
                </div>
                <p className="text-base font-Poppins font-light max-w-[600px]">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our{" "}
                  <a
                    href="/privacy-policy"
                    className="text-[#000] hover:text-[#000]"
                  >
                    privacy policy
                  </a>
                  .
                </p>
              </div>
              <button className="text-sm hover:bg-[#9F9F9F] border block mx-auto font-Poppins lg:text-xl font-normal px-[50px] lg:px-[100px] py-4 rounded-xl">
                Place order
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CheckoutLayout;
