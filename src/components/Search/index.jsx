import React from "react";
import s from "./style.module.css";

export default function Search({ search_handler }) {
  const onChange = (event) => {
    search_handler(event.target.value);
  };
  return (
    <div className={s.search}>
      <input type="text" onChange={onChange} placeholder="Search..." />
    </div>
  );
}
