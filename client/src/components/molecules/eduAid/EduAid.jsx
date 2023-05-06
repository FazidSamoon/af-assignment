import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

const EduAid = () => {
  return (
    <div className="flex flex-col bg-secondary-color py-10 px-6 items-center justify-center my-14">
      <span className="text-2xl font-bold text-white">Ask for our help</span>
      <span className="text-2xl font-bold text-white">
        We are here to help you
      </span>

      <Link href={"/contact-us/edu"}>
        <div className="mt-8 flex items-center justify-center">
          <span className="text-xl font-semibold text-white">Contact us</span>
          <FiArrowRight className="text-white ml-5 text-lg" />
        </div>
      </Link>
    </div>
  );
};

export default EduAid;
