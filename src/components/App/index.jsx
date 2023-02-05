import React, { useState } from "react";
import AddWord from "../AddWord";

export default function App() {
  const [words, setWords] = useState(null);

  const addNewWord = (word, translate) => {
    const newWord = {
      id: Date.now(),
      word,
      translate,
      show: true,
    };

    setWords([...words, newWord]);
  };

  return (
    <div>
      <AddWord addNewWord={addNewWord} />
    </div>
  );
}
