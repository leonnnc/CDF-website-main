import { EventDetails } from '@modules/home/interfaces/event.interface';
import clsx from 'clsx';

export function EventsCardDetails({ details, className }: Props) {
  const { ministry, date } = details;

  return (
    <div className={clsx(className, 'flex items-center gap-2.5 text-smaller lg:text-small')}>
      <p className="text-green-600 dark:text-yellow-200 font-semibold">{ministry}</p>
      <div className="w-px h-3 bg-neutral-600/50 dark:bg-neutral-300/60" />
      <p className="dark:text-neutral-300">{date}</p>
    </div>
  );
}

type Props = {
  details: EventDetails;
  className?: string;
};
