import { memo, useEffect, useState } from "react";
import Spinner from "../spinner/index";
import { Data } from "./types";

function Definition(props: { inputWord: string }) {
  const { inputWord } = props;

  const [definition, setDefinition] = useState<Data>();
  const [isLoading, setIsloading] = useState(false);
  const [isMount, setIsMount] = useState(false);

  useEffect(() => {
    setIsMount(true);
  }, []);

  useEffect(() => {
    if (isMount) {
      setIsloading(true);
      setDefinition(undefined);

      const url = `/api?word=${inputWord}`;
      const getDataDebouncing = setTimeout(async () => {
        try {
          const response = await fetch(url);

          if (response.ok) {
            const json = await response.json();
            const data = json?.data?.data[0] as Data;
            setDefinition(data);
          }
        } catch (e) {
          console.error(e);
        } finally {
          setIsloading(false);
        }
      }, 500);

      return () => clearTimeout(getDataDebouncing);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputWord]);

  return <>{isLoading ? <Spinner /> : JSON.stringify(definition)}</>;
}
export default memo(Definition);
