import { useRouter } from 'next/router';
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
    name: 'Employement',
    path: '/employement',
  },
];

const ProfileSideNav = ({ setSelectedMenu }) => {
  const router = useRouter();

  const LogoutHandle = () => {
    localStorage.removeItem('user');
    router.push('/');
  };

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
        <button
          className="absolute bottom-10 bg-white text-zinc-800 rounded-lg px-6 py-2"
          onClick={LogoutHandle}
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default ProfileSideNav;
