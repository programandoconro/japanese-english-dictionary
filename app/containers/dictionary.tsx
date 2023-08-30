"use client";
import { memo, useState } from "react";
import Definition from "../components/definition/index";
import Input from "../components/input/index";

function Dictionary() {
  const [inputWord, setInputWord] = useState<string>("");

  return (
    <div className="grid">
      <Input inputWord={inputWord} setInputWord={setInputWord} />
      <Definition inputWord={inputWord} />
    </div>
  );
}

export default memo(Dictionary);
