import { getQuoteVerses } from '@modules/donation-dialog/helpers/quote.helper';
import { BibleQuote } from '@modules/shared/interfaces/bible-quote';
import clsx from 'clsx';

export function GivePromisesCarouselItem({ quote, className }: Props) {
  const { book, chapter, verses, link } = quote;
  const quoteVerses = getQuoteVerses(verses);

  return (
    <a href={link} className={clsx(className, 'w-80')} target="_blank" rel="noopener noreferrer">
      <article className="rounded-lg md:rounded-2xl p-4 md:p-8 bg-primary-800 border border-primary-500">
        <figure>
          <blockquote className="italic mb-2">
            "
            {verses.map((item) => {
              const { text, verse } = item;

              return <span key={verse}>{text}</span>;
            })}
            "
          </blockquote>
          <figcaption className="text-small text-yellow-300 font-semibold">
            {book} {chapter}:{quoteVerses}
          </figcaption>
        </figure>
      </article>
    </a>
  );
}

type Props = {
  quote: BibleQuote;
  className?: string;
};
