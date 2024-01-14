import React from "react";
import Image from "../../utils/Image";
import SignUpBanner from "../../assets/signup_banner.png";
import InputField from "../../utils/InputField";
import Button from "../../utils/Button";
import AuthToggle from "../../utils/AuthToggle";

const SignUp = () => {
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
              <InputField type="password" placeholder="Enter Password" />
              <Button className="" title="Sign Up" />
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
