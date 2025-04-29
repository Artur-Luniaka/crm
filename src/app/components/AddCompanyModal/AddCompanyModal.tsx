"use client";
import React, { useId } from "react";
import Modal from "../Modal/Modal";
import { Field, Form, Formik } from "formik";

type CloseModalProp = {
  setIsOpen: () => void;
};

type initialValuesProps = {
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
  const initialValues: initialValuesProps = {
    logo: "",
    status: "",
    country: "",
    name: "",
    category: "",
    joinedData: date,
    description: "",
  };

  const logoId = useId();
  const nameId = useId();
  const statusId = useId();
  const countryId = useId();
  const categoryId = useId();
  const joinedDataId = useId();
  const descriptionId = useId();

  return (
    <Modal setIsOpen={setIsOpen}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
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
                <Field
                  type="text"
                  id={logoId}
                  name="logo"
                  className="outline-none w-[176px] h-[176px] rounded-full bg-[#ffffff] border border-[#0f172a]"
                />
              </span>
              <div className="flex flex-col">
                <span className="flex flex-col gap-2 mb-5">
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
                </span>
                <span className="flex flex-col gap-2">
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
                </span>
              </div>
            </div>
            <div className="flex gap-7 mb-10">
              <div className="flex flex-col">
                <span className="flex flex-col gap-2 mb-5">
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
                </span>
                <span className="flex flex-col gap-2">
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
                <span className="flex flex-col gap-2 mb-5">
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
