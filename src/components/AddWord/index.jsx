import React from 'react'
import s from "./style.module.css";

export default function AddWord({addNewWord}) {

  const onSubmit = (event) => {
    event.preventDefault();
    const { word, translate } = event.target;

    addNewWord(word.value, translate.value);

    word.value = "";
    translate.value = "";
  };

  return (
    <div>
      <form className={s.form} onSubmit={onSubmit}>
        <input type="text" name='word' placeholder='word' required/>
        <input type="text" name='translate' placeholder='translate' required/>
        <button>Add word</button>
      </form>
    </div>
  )
}
