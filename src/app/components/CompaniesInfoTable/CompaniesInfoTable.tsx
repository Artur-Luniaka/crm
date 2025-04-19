"use client";

import info from "@/fakeAPI/companiesInfo.json";
import icon from "../../../../public/company_icon.svg";
import Image from "next/image";

const CompaniesInfoTable = () => {
  return (
    <div>
      <div className="flex justify-between mb-5">
        <h2 className="font-jakarta font-light text-sm text-[#111827]">
          Category
        </h2>
        <h2 className="font-jakarta font-light text-sm text-[#111827] mr-[140px]">
          Company
        </h2>
        <h2 className="font-jakarta font-light text-sm text-[#111827]">
          Status
        </h2>
        <h2 className="font-jakarta font-light text-sm text-[#111827]">
          Promotion
        </h2>
        <h2 className="font-jakarta font-light text-sm text-[#111827]">
          Country
        </h2>
        <h2 className="font-jakarta font-light text-sm text-[#111827]">
          Joined data
        </h2>
      </div>
      <ul>
        {info.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center mb-2 last:mb-0 bg-[#fafafa] py-5 px-3 rounded-[4px]"
          >
            <p className="font-jakarta font-medium text-xs">{item.Category}</p>
            <span className="flex items-center justify-center gap-4">
              <Image src={icon} alt="company logo" width={32} height={32} />
              <p className="font-jakarta font-medium text-sm">{item.Company}</p>
            </span>
            <p className="font-jakarta font-medium text-sm">{item.Status}</p>
            <p className="font-jakarta font-medium text-sm">{item.Promotion}</p>
            <p className="font-jakarta font-medium text-sm">{item.Country}</p>
            <p className="font-jakarta font-medium text-sm">
              {item.JoinedDate}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompaniesInfoTable;
