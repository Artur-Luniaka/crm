"use client";
import Image from "next/image";
import React from "react";
import close_btn from "../../../../public/x-mark.svg";

type ModalProp = {
  children: React.ReactNode;
  setIsOpen: () => void;
};

const Modal = ({ children, setIsOpen }: ModalProp) => {
  return (
    <div className="fixed top-0 left-0 flex justify-center items-center h-[100vh] w-full bg-black/60">
      <div className="bg-[#f3f4f6] rounded-lg p-7">
        <button onClick={setIsOpen}>
          <Image src={close_btn} alt="close button" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
