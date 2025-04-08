"use client";
import React from "react";
import AsideLogo from "../components/AsideLogo/AsideLogo";
import AsideNavLinksBox from "../components/AsideNavLinksBox/AsideNavLinksBox";
import ExitLink from "../components/ExitLink/ExitLink";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex">
      <aside className="flex flex-col justify-between min-w-[240px] h-[100vh] bg-[#111827] px-4 py-8">
        <div>
          <AsideLogo />
          <AsideNavLinksBox />
        </div>
        <ExitLink />
      </aside>
      <div className="min-w-[1200px] w-full">{children}</div>
    </div>
  );
};

export default layout;
