"use client";
import React from "react";

const DashBoardStatsBox = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="w-full p-10">{children}</div>;
};

export default DashBoardStatsBox;
