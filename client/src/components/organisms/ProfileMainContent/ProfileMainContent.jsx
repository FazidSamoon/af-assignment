import React from 'react';
import EduManagement from '../EduManagement/EduManagement';
import FoodManagement from '../FoodManagement/FoodManagement';
import EmployementManagement from '../EmployementManagement/EmployementManagement';

const ProfileMainContent = ({ selectedMenu }) => {
  return (
    <div>
      {selectedMenu === 'Education' && <EduManagement />}
      {selectedMenu === 'Food' && <FoodManagement />}
      {selectedMenu === 'Employment' && <EmployementManagement />}
    </div>
  );
};

export default ProfileMainContent;
