export type BibleQuote = {
  book: string;
  chapter: number;
  verses: BibleVerse[];
  link: string;
};

export type BibleVerse = {
  verse: number;
  text: string;
};
