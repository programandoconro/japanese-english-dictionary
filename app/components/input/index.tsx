function Input(props: {
  inputWord: string;
  setInputWord: (w: string) => void;
}) {
  const { setInputWord, inputWord } = props;

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputWord(e.target.value);
  };

  return (
    <input
      value={inputWord}
      onChange={handleInput}
      className="bg-white text-black"
    />
  );
}

export default Input;
