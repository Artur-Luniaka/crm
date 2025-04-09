"use client";

import DashBoardStatsBox from "@/app/components/DashBoardStatsBox/DashBoardStatsBox";
import GeneralStats from "@/app/components/GeneralStats/GeneralStats";
import Header from "@/app/components/Header/Header";
import SalesDetails from "@/app/components/SalesDetails/SalesDetails";
import { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    document.title = "Dashboard | CRM";
  }, []);

  return (
    <>
      <Header />
      <DashBoardStatsBox>
        <GeneralStats />
        <SalesDetails />
      </DashBoardStatsBox>
    </>
  );
};

export default Page;
