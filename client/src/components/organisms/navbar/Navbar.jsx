import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { TiThMenu } from "react-icons/ti";
import Link from "next/link";
import Button from "@/components/atoms/Button/Button";

const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Education",
    path: "/education",
  },
  {
    name: "Food",
    path: "/food",
  },
  {
    name: "Healthcare",
    path: "/healthcare",
  },
  {
    name: "Employement",
    path: "/employement",
  },
];

const Navbar = () => {
  const [burgerNav, setBurgerNav] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Home");
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUser(JSON.parse(localStorage?.getItem("user")));
    }
  }, []);
  
  return (
    <div className="flex">
      <div className="container mx-auto flex items-center ">
        <div className="flex flex-row items-center">
          <Image src={"/logo.png"} alt="logo" height={100} width={100} />
          <span className="font-bold text-xl text-secondary-color">
            <span className="text-primary-color">CHARITY</span> LIFE
          </span>
        </div>
        <div className="hidden lg:flex items-center w-full justify-end">
          {navItems.map((item, index) => {
            return (
              <Link href={item.path} key={index} className="mx-8">
                <span
                  key={index}
                  className={`${
                    item.name === selectedItem
                      ? "text-primary-color"
                      : "text-[#3E3E3E]"
                  } font-medium`}
                  onClick={() => setSelectedItem(item.name)}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}

          {!user ? (
            <>
              <Link href="/login">
                <Button text="Login" />
              </Link>

              <Link href="/signup" className="mx-1">
                <Button text="Signup" />
              </Link>
            </>
          ) : (
            <Link href="/profile">
              <Button text="Profile" />
            </Link>
          )}
        </div>

        <TiThMenu
          className={`${
            !burgerNav ? "flex" : "hidden"
          } lg:hidden h-8 w-8 right-0 fixed mr-8 text-primary-color`}
          onClick={() => setBurgerNav(true)}
        />
      </div>

      <div>
        <nav
          className={`${
            burgerNav ? "pointer-events-auto" : "pointer-events-none opacity-0"
          } bg-primary-color backdrop-blur-lg h-full w-full flex flex-col items-center justify-between py-4 fixed top-0 z-50 left-0 transition-all ease-in-out duration-300`}
        >
          <AiOutlineClose
            className="fixed top-0 right-0 h-9 w-9 text-black mt-2 mr-8 lg:hidden cursor-pointer"
            onClick={() => setBurgerNav(false)}
          />
          <div>
            {navItems.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full my-5 flex flex-col  items-center"
                >
                  <a className="" href={item.path}>
                    <span
                      className={`${
                        item.name === selectedItem
                          ? "text-white"
                          : "text-[#3E3E3E]"
                      } font-medium text-2xl`}
                      onClick={() => setSelectedItem(item.name)}
                    >
                      {item.name}
                    </span>
                  </a>
                </div>
              );
            })}
          </div>

          {!user ? (
            <div className="flex flex-row">
              <Link href="/login">
                <Button text="Login" fullWidth={true} />
              </Link>

              <Link href="/signup" className="mx-1">
                <Button text="Signup" fullWidth={true} />
              </Link>
            </div>
          ) : (
            <Link href="/profile">
              <Button text="Profile" fullWidth={true} />
            </Link>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
