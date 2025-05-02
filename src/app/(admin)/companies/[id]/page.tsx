"use client";

import AboutCompany from "@/app/components/AboutCompany/AboutCompany";
import AboutCompanyBox from "@/app/components/AboutCompanyBox/AboutCompanyBox";
import Header from "@/app/components/Header/Header";
import ManageBlock from "@/app/components/ManageBlock/ManageBlock";
import { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    document.title = "Companies | CRM";
  }, []);

  return (
    <>
      <Header />
      <ManageBlock />
      <AboutCompanyBox>
        <AboutCompany />
      </AboutCompanyBox>
    </>
  );
};

export default Page;
