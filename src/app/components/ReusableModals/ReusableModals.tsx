"use client";

import { usePathname } from "next/navigation";
import AddCompanyForm from "../AddCompanyForm/AddCompanyForm";
import Modal from "../Modal/Modal";

type CloseModalProp = {
  setIsOpen: () => void;
};

const ReusableModals = ({ setIsOpen }: CloseModalProp) => {
  const pathname = usePathname();

  const handleModal = () => {
    if (pathname === "/companies")
      return <AddCompanyForm setIsOpen={setIsOpen} />;
  };

  return <Modal setIsOpen={setIsOpen}>{handleModal()}</Modal>;
};

export default ReusableModals;
