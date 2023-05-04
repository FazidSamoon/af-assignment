import React from "react";
import EduManagement from "../EduManagement/EduManagement";
import FoodManagement from "../FoodManagement/FoodManagement";

const ProfileMainContent = ({ selectedMenu }) => {
  return (
    <div>
      {selectedMenu === "Education" ? <EduManagement /> : <FoodManagement />}
    </div>
  );
};

export default ProfileMainContent;
