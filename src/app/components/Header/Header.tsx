"use client";

import { usePathname } from "next/navigation";
import UserData from "../UserData/UserData";
import companyName from "@/fakeAPI/companiesInfo.json";

const Header = () => {
  const pathname = usePathname();

  const company = companyName.find(
    (item) => item.Company === "Costco Wholesale"
  );

  const handlePageTitle = () => {
    if (pathname === "/dashboard") return "Dashboard";
    if (pathname === "/companies") return "Companies";
    if (pathname !== "/dashboard" && "/companies") return `${company?.Company}`;
  };

  return (
    <div className="flex justify-between py-6 pl-10 pr-7 border-b border-gray-300 min-w-[1200px] mr-auto">
      <h1 className="font-jakarta text-3xl text-[#111827] font-semibold">
        {handlePageTitle()}
      </h1>
      <UserData />
    </div>
  );
};

export default Header;
