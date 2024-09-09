import React from "react";

function Dropdown() {
  return (
    <div className="w-[160px] h-[37px]">
      <label for="sort">Sort by</label>
      <select name="sort" id="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    </div>
  );
}

export default Dropdown;
