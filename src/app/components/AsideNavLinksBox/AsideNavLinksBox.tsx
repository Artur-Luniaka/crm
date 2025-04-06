"use client";

import CompaniesLink from "../CompaniesLink/CompaniesLink";
import DashBoardLink from "../DashBoardLink/DashBoardLink";

const AsideNavLinksBox = () => {
  return (
    <div className="flex flex-col gap-7">
      <DashBoardLink />
      <CompaniesLink />
    </div>
  );
};

export default AsideNavLinksBox;
