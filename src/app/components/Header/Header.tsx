"use client";

import { usePathname } from "next/navigation";
import UserData from "../UserData/UserData";

const Header = () => {
  const pathname = usePathname();

  const handlePageTitle = () => {
    if (pathname === "/dashboard") return "Dashboard";
    if (pathname === "/companies") return "Companies";
  };

  return (
    <div className="flex justify-between py-6 pl-10 pr-7 border border-gray-300">
      <h1 className="font-jakarta text-3xl text-[#111827] font-semibold">
        {handlePageTitle()}
      </h1>
      <UserData />
    </div>
  );
};

export default Header;
