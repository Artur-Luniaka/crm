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

const randomItem = info[Math.floor(Math.random() * info.length)];

const AboutCompany = () => {
  return (
    <div className="flex">
      <div className="flex flex-col gap-5">
        <span className="flex flex-col items-center gap-5 p-7 rounded-[4px] w-[268px] bg-[#111827]">
          <Image src={icon} alt="company logo" width={80} height={80} />
          <h3 className="font-jakarta font-semibold text-base text-[#fafafa]">
            {randomItem.Company}
          </h3>
          {Status.Active === randomItem.Status && (
            <div className="flex justify-center items-center gap-2 py-1 px-3 bg-[#dcfce7] rounded-[28px] flex-shrink-0 flex-grow-0 w-[120px]">
              <div className="w-1 h-1 rounded-full bg-[#15803d]" />
              <p className="font-jakarta font-medium text-sm text-[#15803d]">
                {randomItem.Status}
              </p>
            </div>
          )}
          {Status.NotActive === randomItem.Status && (
            <div className="flex justify-center items-center gap-2 py-1 px-3 bg-[#fee2e2] rounded-[28px] flex-shrink-0 flex-grow-0 w-[120px]">
              <div className="w-1 h-1 rounded-full bg-[#b91c1c]" />
              <p className="font-jakarta font-medium text-sm text-[#b91c1c]">
                {randomItem.Status}
              </p>
            </div>
          )}
          {Status.Pending === randomItem.Status && (
            <div className="flex justify-center items-center gap-2 py-1 px-3 bg-[#ffedd5] rounded-[28px] flex-shrink-0 flex-grow-0 w-[120px]">
              <div className="w-1 h-1 rounded-full bg-[#c2410c]" />
              <p className="font-jakarta font-medium text-sm text-[#c2410c]">
                {randomItem.Status}
              </p>
            </div>
          )}
          {Status.Suspended === randomItem.Status && (
            <div className="flex justify-center items-center gap-2 py-1 px-3 bg-[#dbeafe] rounded-[28px] flex-shrink-0 flex-grow-0 w-[120px]">
              <div className="w-1 h-1 rounded-full bg-[#1d4ed8]" />
              <p className="font-jakarta font-medium text-sm text-[#1d4ed8]">
                {randomItem.Status}
              </p>
            </div>
          )}
        </span>
        <span className="flex flex-col p-5 w-[268px] bg-[#f3f4f6]">
          <h3 className="font-jakarta font-semibold text-xl text-[#111827] mb-5">
            About Company
          </h3>
          <span className="flex flex-col gap-3 mb-14 relative">
            <p className="font-jakarta font-normal text-base text-[#111827]">
              Category: {randomItem.Category}
            </p>
            <p className="font-jakarta font-normal text-base text-[#111827]">
              Country: {randomItem.Country}
            </p>
            <p className="font-jakarta font-normal text-base text-[#111827]">
              Joined data: {randomItem.JoinedDate}
            </p>
            <span className="w-[228px] border border-[#d1d5db] absolute -bottom-8" />
          </span>
          <p className="font-jakarta font-normal text-base text-[#111827]">
            Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
        </span>
      </div>
    </div>
  );
};

export default AboutCompany;
