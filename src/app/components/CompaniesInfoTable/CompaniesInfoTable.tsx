"use client";

import info from "@/fakeAPI/companiesInfo.json";
import icon from "../../../../public/company_icon.svg";
import check_icon from "../../../../public/check.svg";
import x_icon from "../../../../public/x-mark-red.svg";
import Image from "next/image";

enum Status {
  Active = "Active",
  NotActive = "Not active",
  Pending = "Pending",
  Suspended = "Suspended",
}

enum Promotion {
  Yes = "Yes",
  No = "No",
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
      <div className="flex justify-between mb-5 px-2">
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
            <div className="flex flex-shrink-0 flex-grow-0 w-[60px]">
              <p
                className="font-jakarta font-medium text-xs"
                style={{
                  color: `${randomColor}`,
                }}
              >
                {item.Category}
              </p>
            </div>
            <div className="flex items-center justify-center gap-4 flex-shrink-0 flex-grow-0 w-[220px]">
              <Image src={icon} alt="company logo" width={32} height={32} />
              <p className="font-jakarta font-medium text-sm">{item.Company}</p>
            </div>
            {Status.Active === item.Status && (
              <div className="flex justify-center items-center gap-2 py-1 px-3 bg-[#dcfce7] rounded-[28px] flex-shrink-0 flex-grow-0 w-[120px]">
                <div className="w-1 h-1 rounded-full bg-[#15803d]" />
                <p className="font-jakarta font-medium text-sm text-[#15803d]">
                  {item.Status}
                </p>
              </div>
            )}
            {Status.NotActive === item.Status && (
              <div className="flex justify-center items-center gap-2 py-1 px-3 bg-[#fee2e2] rounded-[28px] flex-shrink-0 flex-grow-0 w-[120px]">
                <div className="w-1 h-1 rounded-full bg-[#b91c1c]" />
                <p className="font-jakarta font-medium text-sm text-[#b91c1c]">
                  {item.Status}
                </p>
              </div>
            )}
            {Status.Pending === item.Status && (
              <div className="flex justify-center items-center gap-2 py-1 px-3 bg-[#ffedd5] rounded-[28px] flex-shrink-0 flex-grow-0 w-[120px]">
                <div className="w-1 h-1 rounded-full bg-[#c2410c]" />
                <p className="font-jakarta font-medium text-sm text-[#c2410c]">
                  {item.Status}
                </p>
              </div>
            )}
            {Status.Suspended === item.Status && (
              <div className="flex justify-center items-center gap-2 py-1 px-3 bg-[#dbeafe] rounded-[28px] flex-shrink-0 flex-grow-0 w-[120px]">
                <div className="w-1 h-1 rounded-full bg-[#1d4ed8]" />
                <p className="font-jakarta font-medium text-sm text-[#1d4ed8]">
                  {item.Status}
                </p>
              </div>
            )}
            {Promotion.Yes === item.Promotion && (
              <div className="flex gap-1 flex-shrink-0 flex-grow-0 w-[100px]">
                <Image src={check_icon} alt="check icon" />
                <p className="font-jakarta font-medium text-sm text-[#15803d]">
                  {item.Promotion}
                </p>
              </div>
            )}
            {Promotion.No === item.Promotion && (
              <div className="flex gap-1 flex-shrink-0 flex-grow-0 w-[100px]">
                <Image src={x_icon} alt="check icon" />
                <p className="font-jakarta font-medium text-sm text-[#b91c1c]">
                  {item.Promotion}
                </p>
              </div>
            )}
            <div className="flex flex-shrink-0 flex-grow-0 w-[60px]">
              <p className="font-jakarta font-medium text-sm">{item.Country}</p>
            </div>
            <div className="flex flex-shrink-0 flex-grow-0">
              <p className="font-jakarta font-medium text-sm">
                {item.JoinedDate}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompaniesInfoTable;
