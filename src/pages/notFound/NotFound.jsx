import React from "react";
import Image from "../../utils/Image";
import errorImage from "../../assets/not_found.svg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="py-4 h-[100vh] flex items-center justify-center">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-x-4 ">
          <div className="w-[40%]">
            <Image img={errorImage} altText="Not Found Page Image" />
          </div>
          <div className="flex items-center justify-center flex-col gap-y-2">
            <h2 className="font-opensans text-[45px] font-extrabold	text-[#222222]">
              Opps Page Not Found!
            </h2>
            <p className="py-2 font-poppins text-[20px] font-normal text-textColor">
              The page you'r looking for does not seem to exist.
            </p>
            <Link to="/">
              <button className="bg-btn-bg py-4 px-5 text-white text-[20px] font-semibold font-nunito rounded-[8px]">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
