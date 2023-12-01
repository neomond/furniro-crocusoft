import { FC, useState } from "react";
import AnimatedDiv from "../animations/AnimatedDiv";

const AuthPage: FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  return (
    <section className="bg-cover h-screen bg-fixed bg-no-repeat bg-center flex items-start pt-[5%] justify-center text-black bg-[url(/primaryHero.svg)]">
      <AnimatedDiv className="bg-[#FFF3E3] lg:w-5/12 w-full py-[32px] mr-0  flex flex-col items-center justify-center rounded-md">
        {/* Auth form container */}
        <div className="p-12 bg-white shadow-md rounded-lg w-full max-w-lg ">
          {/* Tabs for toggling between login and signup */}
          <div className="flex justify-around mb-9">
            <button
              className={`font-medium text-xl font-Poppins pb-2 ${
                isLogin ? "border-b-2 border-[#B88E2F]" : ""
              }`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              className={`font-medium text-xl font-Poppins pb-2 ${
                !isLogin ? "border-b-2 border-[#B88E2F]" : ""
              }`}
              onClick={() => setIsLogin(false)}
            >
              Signup
            </button>
          </div>

          {/* Auth form */}
          <div>
            {isLogin ? (
              // Login form
              <form>
                <input
                  type="text"
                  placeholder="Name"
                  className="font-Poppins block w-full border p-4 rounded mb-4 text-sm"
                />
                <input
                  type="text"
                  placeholder="Username"
                  className="font-Poppins block w-full border p-4 rounded mb-4 text-sm"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className=" font-Poppins block w-full border p-4 rounded mb-4 text-sm"
                />
                <button className="bg-[#B88E2F] mt-[94px] font-Poppins uppercase font-medium text-lg w-full py-2 cursor-pointer text-white border-0 rounded">
                  Login
                </button>
              </form>
            ) : (
              // Signup form
              <form>
                <input
                  type="text"
                  placeholder="Name"
                  className="font-Poppins block w-full border p-4 rounded mb-4 text-sm"
                />
                <input
                  type="text"
                  placeholder="Username"
                  className="font-Poppins block w-full border p-4 rounded mb-4 text-sm"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="font-Poppins block w-full border p-4 rounded mb-4 text-sm"
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="font-Poppins block w-full border p-4 rounded mb-4 text-sm"
                />
                <button className="bg-[#B88E2F] mt-6 font-Poppins uppercase font-medium text-lg w-full py-2 cursor-pointer text-white border-0 rounded">
                  Signup
                </button>
              </form>
            )}
          </div>
        </div>
      </AnimatedDiv>
    </section>
  );
};

export default AuthPage;
