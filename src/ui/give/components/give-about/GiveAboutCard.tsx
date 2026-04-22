import clsx from 'clsx';

export function GiveAboutCard({ item, className }: Props) {
  const { title, description, verse } = item;
  const { text, reference } = verse;

  return (
    <div className={clsx(className, 'relative rounded-2xl overflow-hidden')}>
      <div className="h-full bg-neutral-100/[0.06] backdrop-blur-xl p-4 md:p-8">
        <h3 className="text-bigger lg:h4 font-bold mb-4 lg:mb-6">{title}</h3>
        <p className="mb-4 text-small lg:text-normal">{description}</p>
        <figure className="bg-primary-900/50 text-smaller md:text-small rounded-2xl p-4">
          <blockquote className="text-neutral-400 italic mb-1">{text}</blockquote>
          <figcaption className="text-yellow-300 font-semibold">{reference}</figcaption>
        </figure>
      </div>
    </div>
  );
}

type Props = {
  item: {
    title: string;
    description: string;
    verse: {
      text: string;
      reference: string;
    };
  };
  className?: string;
};
