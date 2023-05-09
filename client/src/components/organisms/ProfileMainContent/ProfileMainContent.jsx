import React from "react";
import EduManagement from "../EduManagement/EduManagement";
import FoodManagement from "../FoodManagement/FoodManagement";
import HealthcareManagement from '../HealthcareManagement/HealthcareManagement';

const ProfileMainContent = ({ selectedMenu }) => {
  return (
    <div className="w-full">
      {selectedMenu === 'Education' && <EduManagement />}
      {selectedMenu === 'Food' && <FoodManagement />}
      {selectedMenu === 'Healthcare' && <HealthcareManagement />}
    </div>
  );
};

export default ProfileMainContent;
