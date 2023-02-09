import React, { useEffect, useState } from "react";
import AddWord from "../AddWord";
import Word from "../Word";
import s from "./style.module.css";

export default function App() {
  const [words, setWords] = useState(null);

  useEffect(() => {
    const words_list = JSON.parse(localStorage.getItem("words")) ?? [];
    setWords(words_list);
  }, []);

  useEffect(() => {
    localStorage.setItem("words", JSON.stringify(words));
  }, [words]);

  const addNewWord = (word, translate) => {
    const newWord = {
      id: Date.now(),
      word,
      translate,
      show: true,
      state_word: true,
      color: "#" + (Math.random().toString(16) + "000000").substring(2, 8).toUpperCase()
    };
    setWords([...words, newWord]);
  };

  const deleteWord = (_id) => {
    setWords((pre) => pre.filter(({ id }) => id !== _id));
  };

  const changeWord = (_id) => {
    const target = words.find(({ id }) => id === _id);
    target.state_word = !target.state_word;
    setWords([...words]);
  };

  function render() {
    if (words === null) {
      return <p>Loading...</p>;
    }

    if (words.length === 0) {
      return <p>Add new words!</p>;
    } else {
      return words
        .filter(({ show }) => show)
        .map((word) => (
          <Word
            key={word.id}
            {...word}
            deleteWord={deleteWord}
            changeWord={changeWord}
          />
        ));
    }
  }

  return (
    <div className={s.container}>
      <div>
        <AddWord addNewWord={addNewWord} />
      </div>
      <div className={s.cards_container}>{render()}</div>
    </div>
  );
}
