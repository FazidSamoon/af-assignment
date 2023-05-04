import ProfileSideNav from "@/components/molecules/profileSideNav/ProfileSideNav";
import React, { useState } from "react";
import ProfileMainContent from "../ProfileMainContent/ProfileMainContent";

const ProfileContent = () => {
    const [selectedMenu, setSelectedMenu] = useState("Education");
  return (
    <div className="flex px-8 sm:px-10 lg-px-16 flex-row">
      <div className="container mx-auto flex flex-row w-full">
        <ProfileSideNav setSelectedMenu = {setSelectedMenu}/>
        <ProfileMainContent selectedMenu = {selectedMenu}/>
      </div>
    </div>
  );
};

export default ProfileContent;
