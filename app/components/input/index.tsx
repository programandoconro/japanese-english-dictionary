function Input(props: { setInputWord: (w: string) => void }) {
  const { setInputWord } = props;

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputWord(e.target.value);
  };

  return <input onChange={handleInput} className="bg-white text-black" />;
}

export default Input;
