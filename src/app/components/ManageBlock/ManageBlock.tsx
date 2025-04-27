"use client";

import Image from "next/image";
import loop from "../../../../public/loop_icon.svg";
import { useState } from "react";
import AddCompanyModal from "../AddCompanyModal/AddCompanyModal";

const ManageBlock = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between mb-8 px-10 pt-10">
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="w-[455px] rounded-[4px] bg-transparent border border-[#d1d5db] p-3 pr-6 outline-none placeholder:font-jakarta placeholder:font-medium placeholder:text-sm placeholder:text-[#637381]"
        />
        <Image
          src={loop}
          alt="loop icon"
          width={20}
          height={20}
          className="absolute top-3.5 right-[7px] cursor-pointer"
        />
      </div>
      <button
        className="flex w-[148px] h-11 py-2.5 px-5 bg-[#111827] rounded-[4px] outline-none font-jakarta font-medium text-base text-[#fafafa]"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Add company
      </button>
      {isOpen && (
        <AddCompanyModal
          setIsOpen={() => {
            setIsOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default ManageBlock;
