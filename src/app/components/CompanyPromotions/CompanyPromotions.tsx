"use client";

import React, { useEffect, useState } from "react";

const CompanyPromotions = () => {
  const [imageUrl, setImageUrl] = useState<string>("");

  useEffect(() => {
    const handleUpload = () => {
      const randomParam = Math.floor(Math.random() * 10000);
      setImageUrl(`https://picsum.photos/seed/${randomParam}/800/600`);
    };
    handleUpload();
  }, []);

  return (
    <div className="flex flex-wrap gap-5">
      <div>
        <span className="flex w-[268px] h-[160px] bg-[#d9d9d9] rounded-[4px] relative">
          <span className="w-[52px] h-[52px] bg-[#111827] rounded-br-full absolute top-0 left-0">
            <p className="font-jakarta font-bold text-xs text-[#d9f99d] pt-3 text-center">
              -20%
            </p>
          </span>
          {imageUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={imageUrl}
              alt="promotion image"
              width={268}
              height={160}
              className="rounded-[4px]"
            />
          )}
        </span>
        <span className="flex flex-col gap-3 w-[268px] p-5 bg-[#f3f4f6] rounded-b-[4px]">
          <p className="font-jakarta font-semibold text-base text-[#111827]">
            Discount on this product
          </p>
          <p className="font-jakarta font-normal text-sm text-[#111827]">
            Jorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </span>
      </div>
      <div>
        <span className="flex w-[268px] h-[160px] bg-[#d9d9d9] rounded-[4px] relative">
          <span className="w-[52px] h-[52px] bg-[#111827] rounded-br-full absolute top-0 left-0">
            <p className="font-jakarta font-bold text-xs text-[#d9f99d] pt-3 text-center">
              -20%
            </p>
          </span>
          {imageUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={imageUrl}
              alt="promotion image"
              width={268}
              height={160}
              className="rounded-[4px]"
            />
          )}
        </span>
        <span className="flex flex-col gap-3 w-[268px] p-5 bg-[#f3f4f6] rounded-b-[4px]">
          <p className="font-jakarta font-semibold text-base text-[#111827]">
            Discount on this product
          </p>
          <p className="font-jakarta font-normal text-sm text-[#111827]">
            Jorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </span>
      </div>
      <div>
        <span className="flex w-[268px] h-[160px] bg-[#d9d9d9] rounded-[4px] relative">
          <span className="w-[52px] h-[52px] bg-[#111827] rounded-br-full absolute top-0 left-0">
            <p className="font-jakarta font-bold text-xs text-[#d9f99d] pt-3 text-center">
              -20%
            </p>
          </span>
          {imageUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={imageUrl}
              alt="promotion image"
              width={268}
              height={160}
              className="rounded-[4px]"
            />
          )}
        </span>
        <span className="flex flex-col gap-3 w-[268px] p-5 bg-[#f3f4f6] rounded-b-[4px]">
          <p className="font-jakarta font-semibold text-base text-[#111827]">
            Discount on this product
          </p>
          <p className="font-jakarta font-normal text-sm text-[#111827]">
            Jorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </span>
      </div>
      <div>
        <span className="flex w-[268px] h-[160px] bg-[#d9d9d9] rounded-[4px] relative">
          <span className="w-[52px] h-[52px] bg-[#111827] rounded-br-full absolute top-0 left-0">
            <p className="font-jakarta font-bold text-xs text-[#d9f99d] pt-3 text-center">
              -20%
            </p>
          </span>
          {imageUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={imageUrl}
              alt="promotion image"
              width={268}
              height={160}
              className="rounded-[4px]"
            />
          )}
        </span>
        <span className="flex flex-col gap-3 w-[268px] p-5 bg-[#f3f4f6] rounded-b-[4px]">
          <p className="font-jakarta font-semibold text-base text-[#111827]">
            Discount on this product
          </p>
          <p className="font-jakarta font-normal text-sm text-[#111827]">
            Jorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </span>
      </div>
      <div>
        <span className="flex w-[268px] h-[160px] bg-[#d9d9d9] rounded-[4px] relative">
          <span className="w-[52px] h-[52px] bg-[#111827] rounded-br-full absolute top-0 left-0">
            <p className="font-jakarta font-bold text-xs text-[#d9f99d] pt-3 text-center">
              -20%
            </p>
          </span>
          {imageUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={imageUrl}
              alt="promotion image"
              width={268}
              height={160}
              className="rounded-[4px]"
            />
          )}
        </span>
        <span className="flex flex-col gap-3 w-[268px] p-5 bg-[#f3f4f6] rounded-b-[4px]">
          <p className="font-jakarta font-semibold text-base text-[#111827]">
            Discount on this product
          </p>
          <p className="font-jakarta font-normal text-sm text-[#111827]">
            Jorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </span>
      </div>
      <div>
        <span className="flex w-[268px] h-[160px] bg-[#d9d9d9] rounded-[4px] relative">
          <span className="w-[52px] h-[52px] bg-[#111827] rounded-br-full absolute top-0 left-0">
            <p className="font-jakarta font-bold text-xs text-[#d9f99d] pt-3 text-center">
              -20%
            </p>
          </span>
          {imageUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={imageUrl}
              alt="promotion image"
              width={268}
              height={160}
              className="rounded-[4px]"
            />
          )}
        </span>
        <span className="flex flex-col gap-3 w-[268px] p-5 bg-[#f3f4f6] rounded-b-[4px]">
          <p className="font-jakarta font-semibold text-base text-[#111827]">
            Discount on this product
          </p>
          <p className="font-jakarta font-normal text-sm text-[#111827]">
            Jorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </span>
      </div>
    </div>
  );
};

export default CompanyPromotions;
