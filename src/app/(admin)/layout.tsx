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
      <aside className="fixed left-0 top-0 flex flex-col justify-between w-[240px] h-screen bg-[#111827] px-4 py-8">
        <div>
          <AsideLogo />
          <AsideNavLinksBox />
        </div>
        <ExitLink />
      </aside>
      <div className="w-full ml-[240px]">{children}</div>
    </div>
  );
};

export default layout;
