import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Image from "../../utils/Image";
import SignUpBanner from "../../assets/signup_banner.png";
import InputField from "../../utils/InputField";
import Button from "../../utils/Button";
import AuthToggle from "../../utils/AuthToggle";

const SignUp = () => {
  const [passShow, setPassShow] = useState(false);
  return (
    <section className="">
      <div className="container mx-auto">
        <div className="flex items-center justify-between ">
          <div className="">
            <h2 className="text-headingColor text-[35px] font-bold leading-[auto] font-nunito">
              Get started with easily register
            </h2>
            <p className="text-blackColor font-normal text-[20px] font-nunito leading-[auto] pt-3 pb-9">
              Free register and you can enjoy it
            </p>
            <div className="flex flex-col gap-[34px]">
              <InputField type="email" placeholder="Enter Email" />
              <InputField type="text" placeholder="Enter Your Name" />
              <div className="relative">
                <InputField
                  type={passShow ? "password" : "text"}
                  placeholder="Enter Password"
                />
                <div>
                  <button
                    className="absolute right-[152px] top-[18px]"
                    onClick={() => setPassShow(!passShow)}
                  >
                    {passShow ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
              <Button title="Sign Up" />
              <AuthToggle title="Sign In" routeLink="/" />
            </div>
          </div>
          <div className="w-[683px] h-[100vh] overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              img={SignUpBanner}
              altText="Signup Banner"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
