"use client";

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
    </>
  );
};

export default Page;
