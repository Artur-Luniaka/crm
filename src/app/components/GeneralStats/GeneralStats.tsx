"use client";

import React from "react";
import stats from "../../../fakeAPI/generalStats.json";

const GeneralStats = () => {
  return (
    <div className="w-full mb-5">
      <ul className="flex gap-5">
        <li
          className="w-[268px] p-7 rounded-[4px] relative"
          style={{
            background: `radial-gradient(circle at 20% 30%, #FFFFFF, transparent 40%),
                 radial-gradient(circle at 80% 20%, #D9F99D, transparent 50%),
                 radial-gradient(circle at 50% 70%, #E9D5FF, transparent 60%),
                 radial-gradient(circle at 90% 90%, #D9F99D, transparent 50%),
                 radial-gradient(circle at 10% 80%, #E9D5FF, transparent 40%)`,
            backgroundColor: "#E9D5FF",
          }}
        >
          <p className="font-jakarta text-xs text-[#111827] font-normal mb-5 ml-2">
            Total promotions
          </p>
          <span className="absolute top-[35px] left-[15px] w-4 h-0.5 bg-[#111827] rounded-[20px]"></span>
          <p className="font-jakarta text-6xl font-semibold text-[#111827]">
            {stats.totalPromotions}
          </p>
        </li>
        <li
          className="w-[268px] h-[152px] p-7 rounded-[4px] relative"
          style={{
            background: `radial-gradient(circle at 20% 30%, #FFFFFF, transparent 40%),
                 radial-gradient(circle at 80% 20%, #D9F99D, transparent 50%),
                 radial-gradient(circle at 50% 70%, #E9D5FF, transparent 60%),
                 radial-gradient(circle at 90% 90%, #D9F99D, transparent 50%),
                 radial-gradient(circle at 10% 80%, #E9D5FF, transparent 40%)`,
            backgroundColor: "#E9D5FF",
          }}
        >
          <p className="font-jakarta text-xs text-[#111827] font-normal mb-5 ml-2">
            Total category
          </p>
          <span className="absolute top-[35px] left-[15px] w-4 h-0.5 bg-[#111827] rounded-[20px]"></span>
          <p className="font-jakarta text-6xl font-semibold text-[#111827]">
            {stats.totalCategories}
          </p>
        </li>
        <li
          className="w-[268px] h-[152px] p-7 rounded-[4px] relative"
          style={{
            background: `radial-gradient(circle at 20% 30%, #FFFFFF, transparent 40%),
                 radial-gradient(circle at 80% 20%, #D9F99D, transparent 50%),
                 radial-gradient(circle at 50% 70%, #E9D5FF, transparent 60%),
                 radial-gradient(circle at 90% 90%, #D9F99D, transparent 50%),
                 radial-gradient(circle at 10% 80%, #E9D5FF, transparent 40%)`,
            backgroundColor: "#E9D5FF",
          }}
        >
          <p className="font-jakarta text-xs text-[#111827] font-normal mb-5 ml-2">
            New companies
          </p>
          <span className="absolute top-[35px] left-[15px] w-4 h-0.5 bg-[#111827] rounded-[20px]"></span>
          <p className="font-jakarta text-6xl font-semibold text-[#111827]">
            {stats.newCompanies}
          </p>
        </li>
        <li
          className="w-[268px] h-[152px] p-7 rounded-[4px] relative"
          style={{
            background: `radial-gradient(circle at 20% 30%, #FFFFFF, transparent 40%),
                 radial-gradient(circle at 80% 20%, #D9F99D, transparent 50%),
                 radial-gradient(circle at 50% 70%, #E9D5FF, transparent 60%),
                 radial-gradient(circle at 90% 90%, #D9F99D, transparent 50%),
                 radial-gradient(circle at 10% 80%, #E9D5FF, transparent 40%)`,
            backgroundColor: "#E9D5FF",
          }}
        >
          <p className="font-jakarta text-xs text-[#111827] font-normal mb-5 ml-2">
            Total active companies
          </p>
          <span className="absolute top-[35px] left-[15px] w-4 h-0.5 bg-[#111827] rounded-[20px]"></span>
          <p className="font-jakarta text-6xl font-semibold text-[#111827]">
            {stats.totalActiveCompanies}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default GeneralStats;
