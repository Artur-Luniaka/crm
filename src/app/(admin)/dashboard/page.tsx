"use client";

import CategoriesOfCompanies from "@/app/components/CategoriesOfCompanies/CategoriesOfCompanies";
import CountriesOfCompanies from "@/app/components/CountriesOfCompanies/CountriesOfCompanies";
import DashBoardStatsBox from "@/app/components/DashBoardStatsBox/DashBoardStatsBox";
import GeneralStats from "@/app/components/GeneralStats/GeneralStats";
import Header from "@/app/components/Header/Header";
import Promotions from "@/app/components/Promotions/Promotions";
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
        <div className="flex gap-5 mb-5">
          <SalesDetails />
          <CategoriesOfCompanies />
        </div>
        <div className="flex gap-5">
          <CountriesOfCompanies />
          <Promotions />
        </div>
      </DashBoardStatsBox>
    </>
  );
};

export default Page;
