import React from 'react';
import EduManagement from '../EduManagement/EduManagement';
import FoodManagement from '../FoodManagement/FoodManagement';
import HealthcareManagement from '../HealthcareManagement/HealthcareManagement';
import EmployementManagement from '../EmployementManagement/EmployementManagement';

const ProfileMainContent = ({ selectedMenu }) => {
  return (
    <div>
      {selectedMenu === 'Education' && <EduManagement />}
      {selectedMenu === 'Food' && <FoodManagement />}
      {selectedMenu === 'Healthcare' && <HealthcareManagement />}
      {selectedMenu === 'Employement' && <EmployementManagement />}
    </div>
  );
};

export default ProfileMainContent;
