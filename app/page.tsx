"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [inputWord, setInputWord] = useState("");
  const [definition, setDefinition] = useState<string | undefined>("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputWord(e.target.value);
  };
  useEffect(() => {
    const url = `http://localhost:3000/api?word=${inputWord}`;
    const getDataDebouncing = setTimeout(async () => {
      try {
        const response = await fetch(url);

        if (response.ok) {
          const json = await response.json();
          const data = json?.data?.data[0];
          setDefinition(data);
        }
      } catch (e) {
        console.error(e);
      }
    }, 500);
    return () => clearTimeout(getDataDebouncing);
  }, [inputWord]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-white">
      <input
        value={inputWord}
        onChange={handleInput}
        className="bg-white text-black"
      />

      {JSON.stringify(definition)}
    </main>
  );
}
