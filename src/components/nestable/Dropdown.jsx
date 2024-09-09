"use client";
import React, { useRef, useEffect, useState } from "react";
import { storyblokEditable } from "@storyblok/react";

function Dropdown({ blok }) {
  const selectRef = useRef(null);
  const [selectWidth, setSelectWidth] = useState("auto");

  const updateSelectWidth = () => {
    const selectElement = selectRef.current;
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const tempSpan = document.createElement("span");
    tempSpan.style.visibility = "hidden";
    tempSpan.style.fontWeight = "bold";
    tempSpan.style.fontSize = "14px";
    tempSpan.style.lineHeight = "6px";
    tempSpan.textContent = selectedOption.text;
    document.body.appendChild(tempSpan);
    const width = tempSpan.offsetWidth + 28;
    setSelectWidth(`${width}px`);
    document.body.removeChild(tempSpan);
  };

  useEffect(() => {
    updateSelectWidth();
  }, []);


  return (
    <div
      {...storyblokEditable(blok)}
      className="border-[#1C275A] border-[1px] h-[37px] w-max flex"
    >
      <div className="flex items-center mx-[13px]">
        <label
          htmlFor="sort"
          className="text-text_secondary text-[13px] leading-6 whitespace-nowrap mr-2"
        >
          {blok.label}
        </label>
        <select
          name="sort"
          id="sort"
          ref={selectRef}
          className="font-bold text-[14px] leading-6 text-text_primary pr-2 bg-transparent outline-none"
          style={{ width: selectWidth }}
          onChange={updateSelectWidth}
        >
          {blok.options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Dropdown;
