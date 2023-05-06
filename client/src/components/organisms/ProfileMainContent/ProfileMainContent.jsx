import React from "react";
import EduManagement from "../EduManagement/EduManagement";
import FoodManagement from "../FoodManagement/FoodManagement";

const ProfileMainContent = ({ selectedMenu }) => {
  return (
    <div className="w-full">
      {selectedMenu === "Education" ? <EduManagement /> : <FoodManagement />}
    </div>
  );
};

export default ProfileMainContent;
