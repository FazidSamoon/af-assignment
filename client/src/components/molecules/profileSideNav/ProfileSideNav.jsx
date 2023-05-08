import React from 'react';

const navItems = [
  {
    name: 'Education',
    path: '/education',
  },
  {
    name: 'Food',
    path: '/food',
  },
  {
    name: 'Healthcare',
    path: '/healthcare',
  },
  {
    name: 'Employment',
    path: '/employment',
  },
];

const ProfileSideNav = ({ setSelectedMenu }) => {
  return (
    <div className="bg-secondary-color w-1/4 text-white flex flex-col h-screen items-center py-11">
      <span className="text-3xl font-bold">Profile</span>
      <div className="flex flex-col mt-5 text-xl">
        {navItems.map((item, index) => (
          <span
            className="my-3"
            id={index}
            key={index}
            onClick={() => setSelectedMenu(item.name)}
          >
            {item.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProfileSideNav;
