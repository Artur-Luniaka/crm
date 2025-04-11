"use client";

import CompaniesInfoBox from "@/app/components/CompaniesInfoBox/CompaniesInfoBox";
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
      <CompaniesInfoBox>
        <h1>Hello</h1>
      </CompaniesInfoBox>
    </>
  );
};

export default Page;
