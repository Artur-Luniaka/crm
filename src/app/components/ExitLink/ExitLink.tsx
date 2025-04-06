"use client";

import Link from "next/link";
import exit_icon from "../../../../public/exit_icon.svg";
import Image from "next/image";

const ExitLink = () => {
  return (
    <div className="flex gap-2 mx-auto">
      <Image src={exit_icon} alt="exit-icon" width={18} height={18} />
      <Link
        href="/"
        className="font-jakarta text-base text-[#fafafa] font-medium"
      >
        Exit
      </Link>
    </div>
  );
};

export default ExitLink;
