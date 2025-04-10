"use client";

import countries from "@/fakeAPI/countriesOfCompanies.json";
import world_map from "../../../../public/world_map.svg";
import Image from "next/image";

const CountriesOfCompanies = () => {
  return (
    <div className="flex flex-col w-[556px] bg-[#f3f4f6] p-5 rounded-[4px]">
      <h2 className="font-jakarta font-medium text-xl text-[#111827] mb-5">
        Countries of companies
      </h2>
      <div className="flex justify-between gap-2">
        <ul className="flex flex-col justify-end gap-2">
          {countries.map((item) => (
            <li key={item.id} className="relative">
              <span className="absolute top-1.5 -left-1 w-2 h-2 bg-[#e9d5ff] rounded-full"></span>
              <p className="font-jakarta font-medium text-sm text-[#111827] pl-3">
                {item.country} - {item.companies}
              </p>
            </li>
          ))}
        </ul>
        <Image src={world_map} alt="world map" />
      </div>
    </div>
  );
};

export default CountriesOfCompanies;
