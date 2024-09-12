import React from "react";

const Info = ({ blok }) => {
  return (
    <div className="container flex flex-col items-center w-3/5">
      <div>
        <p className="text-h2 font-semibold mb-8 mt-28">{blok.title}</p>
      </div>
      <div className="text-p1 text-fill_secondary">
        <p className="mb-4">{blok.first_text}</p>
        <p className="mb-4">{blok.second_text}</p>
        <p className="mb-4">{blok.third_text}</p>
        <p className="mb-4">{blok.fourth_text}</p>
        <p className="mb-4">{blok.fifth_text}</p>
      </div>
    </div>
  );
};

export default Info;
