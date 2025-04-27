"use client";
import React from "react";
import Modal from "../Modal/Modal";

type CloseModalProp = {
  setIsOpen: () => void;
};

const AddCompanyModal = ({ setIsOpen }: CloseModalProp) => {
  return (
    <Modal setIsOpen={setIsOpen}>
      <h1>Hello, World!</h1>
    </Modal>
  );
};

export default AddCompanyModal;
