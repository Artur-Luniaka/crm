"use client";

import { usePathname } from "next/navigation";
import AddCompanyForm from "../AddCompanyForm/AddCompanyForm";
import Modal from "../Modal/Modal";
import AddPromotionForm from "../AddPromotionForm/AddPromotionForm";

type CloseModalProp = {
  setIsOpen: () => void;
};

const ReusableModals = ({ setIsOpen }: CloseModalProp) => {
  const pathname = usePathname();

  const handleModal = () => {
    if (pathname === "/companies")
      return <AddCompanyForm setIsOpen={setIsOpen} />;
    if (pathname !== "/companies")
      return <AddPromotionForm setIsOpen={setIsOpen} />;
  };

  return <Modal setIsOpen={setIsOpen}>{handleModal()}</Modal>;
};

export default ReusableModals;
