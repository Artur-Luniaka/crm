"use client";

import Image from "next/image";
import companies_icon from "../../../../public/companies_icon.svg";
import Link from "next/link";

const CompaniesLink = () => {
  return (
    <div className="flex gap-3.5">
      <Image src={companies_icon} alt="companies-icon" width={18} height={18} />
      <Link
        href="/companies"
        className="font-jakarta text-base text-[#fafafa] font-medium"
      >
        Companies
      </Link>
    </div>
  );
};

export default CompaniesLink;
