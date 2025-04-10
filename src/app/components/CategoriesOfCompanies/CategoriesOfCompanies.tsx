"use client";

import categories from "@/fakeAPI/categoriesOfCompanies.json";

const CategoriesOfCompanies = () => {
  return (
    <div className="flex flex-col p-5 w-[652px] bg-[#f3f4f6] rounded-[4px]">
      <h2 className="font-jakarta font-medium text-xl text-[#111827] mb-5">
        Categories of companies
      </h2>
      <ul className="flex flex-wrap gap-3">
        {categories.map((item, index) => (
          <li
            key={item.id}
            className="flex flex-col w-[144px] bg-[#111827] px-3 pt-[22px] rounded-[4px] relative"
          >
            <span className="flex absolute top-[14px] w-4 h-0.5 bg-[#fafafa] rounded-[20px]"></span>
            <p className="font-jakarta font-normal text-sm text-[#fafafa] mb-1">
              {item.name}
            </p>
            <p
              className={`font-jakarta font-semibold text-6xl text-end ${
                index % 2 === 0 ? "text-[#e9d5ff]" : "text-[#d9f99d]"
              }`}
            >
              {item.products}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesOfCompanies;
