"use client";

import info from "@/fakeAPI/companiesInfo.json";
import icon from "../../../../public/company_icon.svg";
import Image from "next/image";

enum Status {
  Active = "Active",
  NotActive = "Not active",
  Pending = "Pending",
  Suspended = "Suspended",
}

const colors = [
  "#fb923c",
  "#60a5fa",
  "#fb7185",
  "#34d399",
  "#c084fc",
  "#1d4ed8",
];

const randomColor = colors[Math.floor(Math.random() * colors.length)];

const CompaniesInfoTable = () => {
  return (
    <div>
      <div className="flex justify-between mb-5 px-3">
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
            style={{
              borderLeft: `4px solid ${randomColor}`,
            }}
          >
            <p
              className="font-jakarta font-medium text-xs"
              style={{
                color: `${randomColor}`,
              }}
            >
              {item.Category}
            </p>
            <span className="flex items-center justify-center gap-4">
              <Image src={icon} alt="company logo" width={32} height={32} />
              <p className="font-jakarta font-medium text-sm">{item.Company}</p>
            </span>
            {Status.Active === item.Status && (
              <span className="flex justify-center items-center gap-2 py-1 px-3.5 bg-[#dcfce7] rounded-[28px]">
                <div className="w-1 h-1 rounded-full bg-[#15803d]" />
                <p className="font-jakarta font-medium text-sm text-[#15803d]">
                  {item.Status}
                </p>
              </span>
            )}
            {Status.NotActive === item.Status && (
              <span className="flex justify-center items-center gap-2 py-1 px-3.5 bg-[#fee2e2] rounded-[28px]">
                <div className="w-1 h-1 rounded-full bg-[#b91c1c]" />
                <p className="font-jakarta font-medium text-sm text-[#b91c1c]">
                  {item.Status}
                </p>
              </span>
            )}
            {Status.Pending === item.Status && (
              <span className="flex justify-center items-center gap-2 py-1 px-3.5 bg-[#ffedd5] rounded-[28px]">
                <div className="w-1 h-1 rounded-full bg-[#c2410c]" />
                <p className="font-jakarta font-medium text-sm text-[#c2410c]">
                  {item.Status}
                </p>
              </span>
            )}
            {Status.Suspended === item.Status && (
              <span className="flex justify-center items-center gap-2 py-1 px-3.5 bg-[#dbeafe] rounded-[28px]">
                <div className="w-1 h-1 rounded-full bg-[#1d4ed8]" />
                <p className="font-jakarta font-medium text-sm text-[#1d4ed8]">
                  {item.Status}
                </p>
              </span>
            )}
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
