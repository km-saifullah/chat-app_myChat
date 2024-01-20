import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Image from "../../utils/Image";
import SignUpBanner from "../../assets/signup_banner.png";
import InputField from "../../utils/InputField";
import Button from "../../utils/Button";
import AuthToggle from "../../utils/AuthToggle";
import Error from "../../components/error/Error";
import {
  validateConfirmPassword,
  validateEmail,
  validateName,
  validatePassword,
} from "../../validation/validation";

const SignUp = () => {
  const [passShow, setPassShow] = useState(false);
  const [confirmPassShow, setConfirmPassShow] = useState(false);
  const [registerUser, setRegisterUser] = useState({
    email: "",
    fullName: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({
    mailError: "",
    nameError: "",
    passwordError: "",
    confirmPasswordError: "",
  });

  // handle input fields
  const handleInput = (e) => {
    let signUpInfo = { ...registerUser };
    signUpInfo[e.target.name] = e.target.value;
    setRegisterUser(signUpInfo);
  };

  // handle signup click
  const handleSignUp = (e) => {
    const emailError = validateEmail(registerUser.email);
    const fullNameError = validateName(registerUser.fullName);
    const passError = validatePassword(registerUser.password);
    const confirmPassError = validateConfirmPassword(
      registerUser.password,
      registerUser.confirmPassword
    );
    setError({
      ...error,
      mailError: emailError,
      nameError: fullNameError,
      passwordError: passError,
      confirmPasswordError: confirmPassError,
    });
    console.log(registerUser);
    setRegisterUser({
      email: "",
      fullName: "",
      password: "",
      confirmPassword: "",
    });
  };

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
            <div className="flex flex-col gap-[15px]">
              <InputField
                type="email"
                name="email"
                value={registerUser.email}
                placeholder="Enter Email"
                onChange={handleInput}
              />
              <div
                className="w-[368px]"
                style={{ paddingTop: error.mailError ? "10px" : "0px" }}
              >
                {error.mailError ? <Error errorMsg={error.mailError} /> : null}
              </div>
              <InputField
                type="text"
                name="fullName"
                value={registerUser.fullName}
                placeholder="Enter Your Name"
                onChange={handleInput}
              />
              <div
                className="w-[368px]"
                style={{ paddingTop: error.nameError ? "10px" : "0px" }}
              >
                {error.nameError ? <Error errorMsg={error.nameError} /> : null}
              </div>
              <div className="relative py-2">
                <InputField
                  type={passShow ? "text" : "password"}
                  name="password"
                  value={registerUser.password}
                  placeholder="Enter Password"
                  onChange={handleInput}
                />
                <div
                  className="w-[368px]"
                  style={{ paddingTop: error.passwordError ? "10px" : "0px" }}
                >
                  {error.passwordError ? (
                    <Error errorMsg={error.passwordError} />
                  ) : null}
                </div>
                <div>
                  <button
                    className="absolute right-[152px] top-[18px]"
                    onClick={() => setPassShow(!passShow)}
                  >
                    {passShow ? <FaEye /> : <FaEyeSlash />}
                  </button>
                </div>
              </div>
              <div className="relative py-2">
                <InputField
                  type={confirmPassShow ? "text" : "password"}
                  name="confirmPassword"
                  value={registerUser.confirmPassword}
                  placeholder="Confirm Password"
                  onChange={handleInput}
                />
                <div
                  className="w-[368px]"
                  style={{
                    paddingTop: error.confirmPasswordError ? "10px" : "0px",
                  }}
                >
                  {error.confirmPasswordError ? (
                    <Error errorMsg={error.confirmPasswordError} />
                  ) : null}
                </div>
                <div>
                  <button
                    className="absolute right-[152px] top-[18px]"
                    onClick={() => setConfirmPassShow(!confirmPassShow)}
                  >
                    {confirmPassShow ? <FaEye /> : <FaEyeSlash />}
                  </button>
                </div>
              </div>
              <Button title="Sign Up" onClick={handleSignUp} />
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
