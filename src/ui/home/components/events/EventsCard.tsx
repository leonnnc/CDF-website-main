import { Event } from '@modules/home/interfaces/event.interface';

import { EventsCardDetails } from './EventsCardDetails';

export default function EventsCard({ event }: Props) {
  const { title, details } = event;

  return (
    <article className="cursor-pointer py-6 px-4 lg:p-8 bg-primary-100/10 hover:bg-primary-200/15 transition-colors dark:bg-primary-800/40 dark:hover:bg-primary-800">
      <EventsCardDetails details={details} className="mb-2" />
      <h2 className="text-bigger lg:text-h4 font-bold font-montserrant text-neutral-800 line-clamp-2 dark:text-neutral-100">
        {title}
      </h2>
    </article>
  );
}

type Props = {
  event: Event;
};
