import React from "react";
import s from "./style.module.css";

export default function Word({
  id,
  deleteWord,
  state_word,
  word,
  translate,
  changeWord,
  color,
}) {
  const result = state_word ? word : translate;

  return (
    <div className={s.card} style={{ backgroundColor: color }}>
      <p onClick={() => changeWord(id)}>{result}</p>
      <button className={s.del_btn} onClick={() => deleteWord(id)}></button>
    </div>
  );
}
