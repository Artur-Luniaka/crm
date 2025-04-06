"use client";
import Image from "next/image";
import aside_logo from "../../../../public/aside_logo.svg";

const AsideLogo = () => {
  return (
    <Image
      className="mx-auto mb-[77px]"
      src={aside_logo}
      alt="Aside logo"
      width={121}
      height={25}
    />
  );
};

export default AsideLogo;
