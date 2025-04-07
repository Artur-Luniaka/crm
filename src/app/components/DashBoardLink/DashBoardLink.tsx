"use client";

import dashboard_icon from "../../../../public/dashboard_icon.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashBoardLink = () => {
  const pathname = usePathname();

  return (
    <div className="flex gap-3.5 relative">
      <Image src={dashboard_icon} alt="dashboard-icon" width={18} height={18} />
      <Link
        href="/dashboard"
        className="font-jakarta text-base text-[#fafafa] font-medium"
      >
        Dashboard
      </Link>
      {pathname === "/dashboard" && (
        <span className="flex absolute top-[-4px] right-[-12px] h-9 w-1 rounded-sm border bg-purple-200"></span>
      )}
    </div>
  );
};

export default DashBoardLink;
