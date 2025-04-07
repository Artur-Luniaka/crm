"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Home | CRM";
  }, []);

  return (
    <div
      className="w-full min-h-screen flex justify-center items-center flex-col"
      style={{
        background: `radial-gradient(circle at 20% 30%, #FFFFFF, transparent 40%),
                     radial-gradient(circle at 80% 20%, #D9F99D, transparent 50%),
                     radial-gradient(circle at 50% 70%, #E9D5FF, transparent 60%),
                     radial-gradient(circle at 90% 90%, #D9F99D, transparent 50%),
                     radial-gradient(circle at 10% 80%, #E9D5FF, transparent 40%)`,
        backgroundColor: "#E9D5FF",
      }}
    >
      <h1 className="font-jakarta text-5xl mb-8 font-semibold">
        Welcome to CRM
      </h1>
      <div className="flex gap-6">
        <Link
          className="flex font-jakarta font-medium text-xl text-[#fafafa] bg-[#111827] py-2.5 px-5 rounded-[4px]"
          href="/dashboard"
        >
          Dashboard
        </Link>
        <Link
          className="flex font-jakarta font-medium text-xl text-[#fafafa] bg-[#111827] py-2.5 px-5 rounded-[4px]"
          href="/companies"
        >
          Companies
        </Link>
      </div>
    </div>
  );
}
