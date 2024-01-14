import React from "react";
import InputField from "./InputField";
import Button from "./Button";

const ForgotPassword = () => {
  return (
    <div className="">
      <label
        htmlFor="my_modal_6"
        className="btn flex font-openSans text-[14px] font-semibold text-headingColor border-2 border-purple-400"
      >
        Forgot Password?
      </label>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-lg pb-4 font-poppins font-normal">
            Enter Your Email Address
          </h3>
          <div className="flex flex-col gap-y-4">
            <InputField
              type="email"
              placeholder="youremail@gmail.com"
              className="font-nunito font-medium text-headingColor "
            />
            <button className="btn btn-primary w-[120px] font-openSans text-[14px] font-medium text-whiteColor">
              Send Email
            </button>
          </div>
          <div className="modal-action">
            <label htmlFor="my_modal_6" className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
