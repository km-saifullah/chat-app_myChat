import React from "react";
import Image from "../../utils/Image";
import SignUpBanner from "../../assets/signup_banner.png";

const SignUp = () => {
  return (
    <section className="">
      <div className="container mx-auto">
        <div className="flex items-center justify-between ">
          <div className="">
            <h2 className="text-headingColor text-[35px]">
              Get started with easily register
            </h2>
            <p>Free register and you can enjoy it</p>
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
