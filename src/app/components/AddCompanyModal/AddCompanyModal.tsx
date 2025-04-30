"use client";
import React, { useId, useState } from "react";
import Modal from "../Modal/Modal";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import upload_icon from "../../../../public/upload-icon.svg";
import Image from "next/image";
import * as yup from "yup";

type CloseModalProp = {
  setIsOpen: () => void;
};

type InitialValuesProps = {
  logo?: string | null;
  status: string;
  country: string;
  name: string;
  category: string;
  joinedData: string;
  description: string;
};

const date = new Intl.DateTimeFormat("ru-RU").format(new Date());

const AddCompanyModal = ({ setIsOpen }: CloseModalProp) => {
  const [imageUrl, setImageUrl] = useState<string>("");

  const initialValues: InitialValuesProps = {
    logo: "",
    status: "",
    country: "",
    name: "",
    category: "",
    joinedData: date,
    description: "",
  };

  const validationForm = yup.object({
    status: yup
      .string()
      .min(3, "Too Short!")
      .max(10, "So Long!")
      .required("Please, enter status!"),
    country: yup
      .string()
      .min(3, "Too Short!")
      .max(20, "So Long!")
      .required("Please, enter country!"),
    name: yup
      .string()
      .min(3, "Too Short!")
      .max(30, "So Long!")
      .required("Please, enter name!"),
    category: yup
      .string()
      .min(3, "Too Short!")
      .max(15, "So Long!")
      .required("Please, enter category!"),
    description: yup
      .string()
      .min(3, "Too Short!")
      .max(30, "So Long!")
      .required("Please, enter description!"),
  });

  const logoId = useId();
  const nameId = useId();
  const statusId = useId();
  const countryId = useId();
  const categoryId = useId();
  const joinedDataId = useId();
  const descriptionId = useId();

  const handleForm = (
    values: InitialValuesProps,
    actions: FormikHelpers<InitialValuesProps>
  ) => {
    console.log(values);
    actions.resetForm();
    setIsOpen();
    setTimeout(() => {
      alert("Your data successfully sended");
    }, 1000);
  };

  const handleUpload = () => {
    const randomParam = Math.floor(Math.random() * 10000);
    setImageUrl(`https://picsum.photos/seed/${randomParam}/800/600`);
  };

  return (
    <Modal setIsOpen={setIsOpen}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleForm}
        validationSchema={validationForm}
      >
        <Form>
          <h2 className="font-jakarta font-semibold text-xl text-[#111827] mb-10">
            Add new company
          </h2>
          <div className="flex flex-col">
            <div className="flex mb-5">
              <span className="flex gap-5 mr-[100px]">
                <label
                  htmlFor={logoId}
                  className="font-jakarta font-normal text-base text-[#111827]"
                >
                  Logo
                </label>
                <span className="flex justify-center items-center outline-none w-[176px] h-[176px] rounded-full bg-[#ffffff] border border-[#0f172a]">
                  <Field
                    type="text"
                    id={logoId}
                    name="logo"
                    className="hidden"
                  />
                  {!imageUrl ? (
                    <Image
                      src={upload_icon}
                      alt="upload photo icon"
                      className="cursor-pointer"
                      onClick={handleUpload}
                    />
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={imageUrl}
                      alt="company logo"
                      className="rounded-full w-[176px] h-[176px] object-cover"
                    />
                  )}
                </span>
              </span>
              <div className="flex flex-col">
                <span className="flex flex-col gap-2 mb-5 relative">
                  <label
                    htmlFor={nameId}
                    className="font-jakarta font-normal text-base text-[#111827]"
                  >
                    Name
                  </label>
                  <Field
                    type="text"
                    id={nameId}
                    name="name"
                    className="outline-none w-[308px] p-3 rounded-[4px] border border-gray-300 shadow-md placeholder:font-jakarta placeholder:font-normal placeholder:text-sm text-[#6b7280]"
                    placeholder="Name"
                  />
                  <ErrorMessage
                    name="name"
                    component="span"
                    className="absolute bottom-[-22px] left-0 font-jakarta font-normal text-sm text-[red]"
                  />
                </span>
                <span className="flex flex-col gap-2 relative">
                  <label
                    htmlFor={categoryId}
                    className="font-jakarta font-normal text-base text-[#111827]"
                  >
                    Category
                  </label>
                  <Field
                    type="text"
                    id={categoryId}
                    name="category"
                    className="outline-none w-[308px] p-3 rounded-[4px] border border-gray-300 shadow-md placeholder:font-jakarta placeholder:font-normal placeholder:text-sm text-[#6b7280]"
                    placeholder="Category"
                  />
                  <ErrorMessage
                    name="category"
                    component="span"
                    className="absolute bottom-[-22px] left-0 font-jakarta font-normal text-sm text-[red]"
                  />
                </span>
              </div>
            </div>
            <div className="flex gap-7 mb-10">
              <div className="flex flex-col">
                <span className="flex flex-col gap-2 mb-5 relative">
                  <label
                    htmlFor={statusId}
                    className="font-jakarta font-normal text-base text-[#111827]"
                  >
                    Status
                  </label>
                  <Field
                    type="text"
                    id={statusId}
                    name="status"
                    className="outline-none w-[308px] p-3 rounded-[4px] border border-gray-300 shadow-md placeholder:font-jakarta placeholder:font-normal placeholder:text-sm text-[#6b7280]"
                    placeholder="Status"
                  />
                  <ErrorMessage
                    name="status"
                    component="span"
                    className="absolute bottom-[-22px] left-0 font-jakarta font-normal text-sm text-[red]"
                  />
                </span>
                <span className="flex flex-col gap-2 relative">
                  <label
                    htmlFor={countryId}
                    className="font-jakarta font-normal text-base text-[#111827]"
                  >
                    Country
                  </label>
                  <Field
                    type="text"
                    id={countryId}
                    name="country"
                    className="outline-none w-[308px] p-3 rounded-[4px] border border-gray-300 shadow-md placeholder:font-jakarta placeholder:font-normal placeholder:text-sm text-[#6b7280]"
                    placeholder="Country"
                  />
                  <ErrorMessage
                    name="country"
                    component="span"
                    className="absolute bottom-[-22px] left-0 font-jakarta font-normal text-sm text-[red]"
                  />
                </span>
              </div>
              <div className="flex flex-col">
                <span className="flex flex-col gap-2 mb-5">
                  <label
                    htmlFor={joinedDataId}
                    className="font-jakarta font-normal text-base text-[#111827]"
                  >
                    Joined date
                  </label>
                  <Field
                    type="text"
                    id={joinedDataId}
                    name="joinedData"
                    className="outline-none w-[308px] p-3 rounded-[4px] border border-gray-300 shadow-md placeholder:font-jakarta placeholder:font-normal placeholder:text-sm text-[#6b7280]"
                    placeholder="dd.mm.yyyy"
                  />
                </span>
                <span className="flex flex-col gap-2 mb-5 relative">
                  <label
                    htmlFor={descriptionId}
                    className="font-jakarta font-normal text-base text-[#111827]"
                  >
                    Description
                  </label>
                  <Field
                    type="text"
                    id={descriptionId}
                    name="description"
                    className="outline-none w-[308px] p-3 rounded-[4px] border border-gray-300 shadow-md placeholder:font-jakarta placeholder:font-normal placeholder:text-sm text-[#6b7280]"
                    placeholder="Description"
                  />
                  <ErrorMessage
                    name="description"
                    component="span"
                    className="absolute bottom-[-22px] left-0 font-jakarta font-normal text-sm text-[red]"
                  />
                </span>
              </div>
            </div>
            <button
              type="submit"
              className="flex justify-center items-center py-2.5 rounded-[4px] bg-[#111827] font-jakarta font-medium text-base text-[#fafafa]"
            >
              Add company
            </button>
          </div>
        </Form>
      </Formik>
    </Modal>
  );
};

export default AddCompanyModal;
