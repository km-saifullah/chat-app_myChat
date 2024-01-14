import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Image from "../../utils/Image";
import SignInBanner from "../../assets/signin_banner.jpg";
import GoogleIcon from "../../assets/google_icon.svg";
import Button from "../../utils/Button";
import AuthToggle from "../../utils/AuthToggle";
import ForgotPassword from "../../utils/ForgotPassword";

const SiginIn = () => {
  const [passShow, setPassShow] = useState(false);

  const handleSignin = () => {
    console.log("Clicked");
  };

  return (
    <section>
      <div className=" container mx-auto">
        <div className="flex items-center justify-between ">
          <div>
            <h2 className="text-headingColor text-[35px] font-bold leading-[auto] font-nunito">
              Login to your account!
            </h2>
            <div className="py-7">
              <button className="px-8 py-6 flex items-center gap-x-2 w-[220px] rounded-[10px] border border-[#03014C] text-[#03014C] text-[14px] font-semibold">
                <Image
                  className="max-w-[20px]"
                  img={GoogleIcon}
                  altText="Google Icon"
                />
                Login With Google
              </button>
            </div>
            <div className="flex flex-col gap-[34px]">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-secondary text-[14px] font-normal font-openSans">
                    Email Address
                  </span>
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Youraddres@email.com"
                  className="input input-bordered input-primary text-headingColor font-openSans font-semibold text-4 w-[368px]"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-secondary text-[14px] font-normal font-openSans">
                    Password
                  </span>
                </div>
                <div className="relative">
                  <input
                    type={passShow ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    className=" input input-bordered input-primary text-headingColor font-openSans font-semibold text-4 w-[368px]"
                  />
                  <div>
                    <button
                      className="absolute right-[-30px] top-[18px]"
                      onClick={() => setPassShow(!passShow)}
                    >
                      {passShow ? <FaEye /> : <FaEyeSlash />}
                    </button>
                  </div>
                </div>
              </label>
              <Button
                title="Sign In"
                className="w-[320px]"
                onClick={handleSignin}
              />
              <AuthToggle title="Sign Up" routeLink="/signup" />
              <ForgotPassword />
            </div>
          </div>
          <div className="w-[683px] h-[100vh] overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              img={SignInBanner}
              altText="Signin Banner"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SiginIn;

//
//
