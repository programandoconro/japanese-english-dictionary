import { memo, useEffect, useState } from "react";
import Spinner from "../spinner/index";
import { Data } from "./types";
import InfoCard from "./info-card";

function Definition(props: { inputWord: string }) {
  const { inputWord } = props;

  const [definition, setDefinition] = useState<Data>();
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    if (inputWord) {
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

      return () => {
        clearTimeout(getDataDebouncing);
        setIsloading(false);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputWord]);

  const getAllDefinitions = (arr: string[]) => {
    let definitions = "";
    arr.forEach((def) => {
      definitions = definitions ? definitions + ", " + def : def;
    });
    return definitions;
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        definition && (
          <InfoCard
            englishDefinition={getAllDefinitions(
              definition?.senses[0].english_definitions
            )}
            japaneseDefinition={definition?.japanese[0].word}
            jlptLevel={getAllDefinitions(definition?.jlpt)}
          />
        )
      )}
    </>
  );
}
export default memo(Definition);
