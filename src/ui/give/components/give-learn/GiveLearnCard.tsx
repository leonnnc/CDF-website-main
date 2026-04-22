import { GiveLearnVideo } from '@modules/give/interfaces/give-learn.interface';
import clsx from 'clsx';

import GiveLearnCardDetail from './GiveLearnCardDetail';

export function GiveLearnCard({ item, isFeatured, className }: Props) {
  const { title, description, url, date, duration } = item;

  return (
    <article
      className={clsx(
        className,
        {
          'p-8 col-span-full': isFeatured,
          'p-4': !isFeatured,
        },
        'bg-neutral-100/[0.06] rounded-2xl backdrop-blur-xl'
      )}
    >
      {isFeatured && (
        <div className="mb-8">
          <h3 className="h3">{title}</h3>
          <p>{description}</p>
        </div>
      )}
      <div
        className={clsx({ 'mb-8': isFeatured, 'mb-4': !isFeatured }, 'rounded-lg overflow-hidden')}
      >
        <iframe
          src={url}
          width="560"
          height="314"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          className="w-full h-auto aspect-video"
        />
      </div>
      {!isFeatured && (
        <div className="mb-4">
          <h3 className="text-bigger font-semibold">{title}</h3>
        </div>
      )}
      <div className="flex items-center gap-8 text-neutral-300 text-small ">
        {isFeatured && <GiveLearnCardDetail type="date" value={date} />}
        <GiveLearnCardDetail type="duration" value={duration} />
      </div>
    </article>
  );
}

type Props = {
  item: GiveLearnVideo;
  isFeatured?: boolean;
  className?: string;
};
