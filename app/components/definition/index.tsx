import { memo, useEffect, useState } from "react";
import Spinner from "../spinner/index";

function Definition(props: {inputWord: string}) {
  const { inputWord } = props;

  const [definition, setDefinition] = useState<string>();
  const [isLoading, setIsloading] = useState(false);
  const [isMount, setIsMount] = useState(false)

  useEffect(()=>{
    setIsMount(true)
  },[])

  useEffect(() => {
    if(isMount){
      setIsloading(true);
      setDefinition(undefined);

      const url = `/api?word=${inputWord}`;
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
        } finally{
          setIsloading(false)
        }
      }, 500);

      return () => clearTimeout(getDataDebouncing);


    }
  }, [inputWord]);

  return (
    <>
      {isLoading ? <Spinner /> :JSON.stringify(definition)}
    </>
  );
}
export default memo(Definition);