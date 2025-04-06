"use client";

import dashboard_icon from "../../../../public/dashboard_icon.svg";
import Image from "next/image";
import Link from "next/link";

const DashBoardLink = () => {
  return (
    <div className="flex gap-3.5">
      <Image src={dashboard_icon} alt="dashboard-icon" width={18} height={18} />
      <Link
        href="/dashboard"
        className="font-jakarta text-base text-[#fafafa] font-medium"
      >
        Dashboard
      </Link>
    </div>
  );
};

export default DashBoardLink;
