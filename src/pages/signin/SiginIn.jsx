import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Image from "../../utils/Image";
import SignInBanner from "../../assets/signin_banner.jpg";
import GoogleIcon from "../../assets/google_icon.svg";
import Button from "../../utils/Button";
import AuthToggle from "../../utils/AuthToggle";
import ForgotPassword from "../../utils/ForgotPassword";
import { validateEmail, validatePassword } from "../../validation/validation";
import Error from "../../components/error/Error";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../db/firebaseConfig";
import { useNavigate } from "react-router-dom";

const SiginIn = () => {
  const [passShow, setPassShow] = useState(false);
  const navigate = useNavigate();
  const [signedUser, setSignedUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    mailError: "",
    passwordError: "",
  });

  // handle input fields
  const handleInput = (e) => {
    const loginInfo = { ...signedUser };
    loginInfo[e.target.name] = e.target.value;
    setSignedUser(loginInfo);
  };

  // handle signin click
  const handleSignin = () => {
    let emailError = validateEmail(signedUser.email);
    let passError = validatePassword(signedUser.password);
    setError({ ...error, mailError: emailError, passwordError: passError });
    // signin user with password and email
    if (!error.mailError && !error.passwordError) {
      signInWithEmailAndPassword(auth, signedUser.email, signedUser.password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          navigate("/home");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          if (errorCode == "auth/invalid-credential") {
            setError({
              passwordError: "Please Enter Correct Email and Password!",
            });
          }
        });
    }

    setSignedUser({ email: "", password: "" });
  };

  return (
    <section>
      <div className=" container mx-auto">
        <div className="flex items-center justify-between">
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
                  value={signedUser.email}
                  onChange={handleInput}
                  placeholder="Youraddres@email.com"
                  className="input input-bordered input-primary text-headingColor font-openSans font-semibold text-4 w-[368px]"
                />
                <div
                  className="w-[368px]"
                  style={{ paddingTop: error.mailError ? "10px" : "0px" }}
                >
                  {error.mailError ? (
                    <Error errorMsg={error.mailError} />
                  ) : null}
                </div>
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
                    value={signedUser.password}
                    onChange={handleInput}
                    placeholder="Enter your password"
                    className=" input input-bordered input-primary text-headingColor font-openSans font-semibold text-4 w-[368px]"
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
