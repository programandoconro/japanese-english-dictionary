export type Data = {
  slug: string;
  is_common: boolean;
  tags: string[];
  jlpt: string[];
  japanese: [{ word: string; reading: string }, { reading: string }];
  senses: Senses[];
  attribution: {
    jmdict: boolean;
    jmnedict: boolean;
    dbpedia: string;
  };
};

type Senses = {
  english_definitions: string[];
  parts_of_speech: string[];
  links: string[];
  tags: string[];
  restrictions: string[];
  see_also: string[];
  antonyms: string[];
  source: string[];
  info: string[];
};
