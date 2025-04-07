"use client";

import Image from "next/image";
import companies_icon from "../../../../public/companies_icon.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CompaniesLink = () => {
  const pathname = usePathname();

  return (
    <div className="flex gap-3.5 relative">
      <Image src={companies_icon} alt="companies-icon" width={18} height={18} />
      <Link
        href="/companies"
        className="font-jakarta text-base text-[#fafafa] font-medium"
      >
        Companies
      </Link>
      {pathname === "/companies" && (
        <span className="flex absolute top-[-4px] right-[-12px] h-9 w-1 rounded-sm border bg-purple-200"></span>
      )}
    </div>
  );
};

export default CompaniesLink;
