"use client";
import { memo, useState } from "react";
import Definition from "../components/definition/index";
import Input from "../components/input/index";

function Dictionary() {
  const [inputWord, setInputWord] = useState<string>("");

  return (
    <>
      <Input setInputWord={setInputWord} />
      <Definition inputWord={inputWord}/>
    </>

  );
}
export default memo(Dictionary)
