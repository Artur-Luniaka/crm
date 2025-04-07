"use client";

import Header from "@/app/components/Header/Header";
import { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    document.title = "Companies | CRM";
  }, []);

  return (
    <>
      <Header />
    </>
  );
};

export default Page;
