"use client";

import Image from "next/image";
import sales from "../../../fakeAPI/salesDetails.json";
import icon from "../../../../public/company_icon.svg";

const SalesDetails = () => {
  return (
    <div className="flex flex-col w-[460px] bg-[#f3f4f6] rounded-[4px]">
      <h2 className="font-jakarta font-medium text-xl text-[#111827] my-5 ml-5">
        Sales details
      </h2>
      <table className="min-w-full border-separate border-spacing-0 text-left">
        <thead>
          <tr>
            <th className="font-jakarta bg-[#111827] text-[#fff] py-1.5 pl-5 rounded-tl-[4px] text-xs font-normal">
              Company
            </th>
            <th className="font-jakarta bg-[#e9d5ff] text-[#111827] py-1.5 text-xs font-normal text-center">
              Sold
            </th>
            <th className="font-jakarta bg-[#d9f99d] py-1.5 text-xs font-normal text-center rounded-tr-md">
              Income
            </th>
          </tr>
        </thead>
        <tbody>
          {sales.map((item) => (
            <tr key={item.id} className="odd:bg-[#fff]">
              <td className="flex items-center gap-2 font-jakarta text-sm font-normal py-2 pl-[19px]">
                <Image src={icon} alt={item.name} width={20} height={20} />
                {item.name}
              </td>
              <td className="font-jakarta text-sm font-normal text-center">
                {item.sold}
              </td>
              <td className="font-jakarta text-sm font-normal text-center">
                {item.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesDetails;
