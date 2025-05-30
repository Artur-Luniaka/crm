"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import close_btn from "../../../../public/x-mark-black.svg";

type ModalProp = {
  children: React.ReactNode;
  setIsOpen: () => void;
};

const Modal = ({ children, setIsOpen }: ModalProp) => {
  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen();
      }
    };

    window.addEventListener("keydown", listener);

    return () => window.removeEventListener("keydown", listener);
  }, [setIsOpen]);

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed top-0 left-0 flex justify-center items-center h-[100vh] w-full z-20 bg-black/60"
      onClick={setIsOpen}
    >
      <div
        className="bg-[#f3f4f6] rounded-lg p-7 relative"
        onClick={handleModalClick}
      >
        <button onClick={setIsOpen} className="absolute top-3 right-3">
          <Image src={close_btn} alt="close button" width={20} height={20} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
