import EduMainHeading from "@/components/molecules/EducationSection/EduMainHeading";
import EduAid from "@/components/molecules/eduAid/EduAid";
import EduBlogs from "@/components/molecules/eduBlogs/EduBlogs";
import EduEvents from "@/components/molecules/eduEvents/EduEvents";
import React from "react";

const EducationSection = () => {
  return (
    <div className="flex px-8 sm:px-10 lg-px-16">
      <div className="container mx-auto">
        <EduMainHeading />
        <EduBlogs />
        <EduEvents />
        <EduAid />
      </div>
    </div>
  );
};

export default EducationSection;
