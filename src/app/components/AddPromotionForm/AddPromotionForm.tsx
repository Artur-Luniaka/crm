"use client";

import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import Image from "next/image";
import { useId, useState } from "react";
import * as yup from "yup";
import upload_icon from "../../../../public/upload-icon.svg";

type InitialValuesProps = {
  title: string;
  description: string;
  discount: string;
  logo?: string | null;
};

type CloseModalProp = {
  setIsOpen: () => void;
};

const AddPromotionForm = ({ setIsOpen }: CloseModalProp) => {
  const [imageUrl, setImageUrl] = useState<string>("");

  const initialValues: InitialValuesProps = {
    title: "",
    description: "",
    discount: "",
    logo: "",
  };

  const validationForm = yup.object({
    title: yup
      .string()
      .min(3, "Too Short!")
      .max(20, "So Long!")
      .required("Please, enter title!"),
    description: yup
      .string()
      .min(3, "Too Short!")
      .max(30, "So Long!")
      .required("Please, enter description!"),
    discount: yup
      .string()
      .min(1, "Too Short!")
      .max(5, "So Long!")
      .required("Please, enter discount!"),
  });

  const titleId = useId();
  const descriptionId = useId();
  const discountId = useId();
  const logoId = useId();

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
    <Formik
      initialValues={initialValues}
      validationSchema={validationForm}
      onSubmit={handleForm}
    >
      <Form>
        <h2 className="font-jakarta font-semibold text-xl text-[#111827] mb-7">
          Add promotion
        </h2>
        <span className="flex flex-col gap-2 mb-5 relative">
          <label
            htmlFor={titleId}
            className="font-jakarta font-normal text-base text-[#111827]"
          >
            Title
          </label>
          <Field
            type="text"
            id={titleId}
            name="title"
            className="outline-none w-[308px] p-3 rounded-[4px] border border-gray-300 shadow-md placeholder:font-jakarta placeholder:font-normal placeholder:text-sm text-[#6b7280]"
            placeholder="Title"
          />
          <ErrorMessage
            name="title"
            component="span"
            className="absolute bottom-[-22px] left-0 font-jakarta font-normal text-sm text-[red]"
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
        <span className="flex flex-col gap-2 mb-5 relative">
          <label
            htmlFor={discountId}
            className="font-jakarta font-normal text-base text-[#111827]"
          >
            Discount amount
          </label>
          <Field
            type="text"
            id={discountId}
            name="discount"
            className="outline-none w-[308px] p-3 rounded-[4px] border border-gray-300 shadow-md placeholder:font-jakarta placeholder:font-normal placeholder:text-sm text-[#6b7280]"
            placeholder="-40%"
          />
          <ErrorMessage
            name="discount"
            component="span"
            className="absolute bottom-[-22px] left-0 font-jakarta font-normal text-sm text-[red]"
          />
        </span>
        <span className="flex flex-col gap-5]">
          <label
            htmlFor={logoId}
            className="font-jakarta font-normal text-base text-[#111827] mb-2"
          >
            Image
          </label>
          <span className="flex justify-center items-center outline-none w-[308px] h-[184px] rounded-[4px] bg-[#ffffff] border border-[#0f172a] mb-5">
            <Field type="text" id={logoId} name="logo" className="hidden" />
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
                className="rounded-[4px] w-[308px] h-[184px] object-cover"
              />
            )}
          </span>
        </span>
        <button
          type="submit"
          className="flex justify-center items-center w-full py-2.5 rounded-[4px] bg-[#111827] font-jakarta font-medium text-base text-[#fafafa] mx-auto"
        >
          Add promotion
        </button>
      </Form>
    </Formik>
  );
};

export default AddPromotionForm;
