"use client";

import Image from "next/image";
import user_photo from "../../../../public/AboutMobTab.webp";

const UserData = () => {
  return (
    <div className="flex items-center gap-3 relative">
      <span className="absolute w-11 top-1/2 left-[-36px] border border-gray-300 rotate-90"></span>
      <Image
        className="rounded-full shrink-0 w-11 h-11 object-cover object-top"
        src={user_photo}
        alt="user-photo"
      />
      <div className="flex flex-col">
        <h3 className="font-jakarta text-[15px] font-semibold text-[#111827]">
          Sma11 Genius
        </h3>
        <a
          className="font-jakarta text-sm font-light text-[#111827]"
          href="mailto:artur01049718@gmail.com"
        >
          artur01049718@gmail.com
        </a>
      </div>
    </div>
  );
};

export default UserData;
