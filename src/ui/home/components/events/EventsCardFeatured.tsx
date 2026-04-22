import { Event } from '@modules/home/interfaces/event.interface';
import { cn } from '@modules/shadcn/helpers/shadcn.helper';
import { ArrowRightIcon } from '@ui/shared/components/icon/outline';
import Image from 'next/image';

import { EventsCardDetails } from './EventsCardDetails';

export function EventsCardFeatured({ event, className }: Props) {
  const { title, description, image, link, details, isRegistrationLink } = event;

  const poster = image || '/images/home/events/fallback-event.webp';

  return (
    <article
      className={cn(
        'p-4 lg:p-8 rounded-2xl lg:rounded-3xl border border-neutral-300/30 dark:border-neutral-300/15 bg-neutral-200/40 dark:bg-primary-500/10 h-max',
        className
      )}
    >
      <div className="rounded-2xl overflow-hidden mb-4 lg:mb-6">
        <Image
          src={poster}
          alt={title}
          width="400"
          height="200"
          className="w-full h-full object-cover"
        />
      </div>
      <EventsCardDetails details={details} className="mb-4 lg:mb-6" />
      <h2 className="text-bigger lg:text-h3 font-bold font-montserrant text-neutral-800 dark:text-neutral-100 mb-6">
        {title}
      </h2>
      <p className="text-smaller lg:text-small mb-4 lg:mb-6 dark:text-neutral-300">{description}</p>
      {link && (
        <a
          href={link}
          className="flex items-center gap-2 font-semibold text-primary-400 dark:text-yellow-300"
          rel="noopener noreferrer"
          target="_blank"
        >
          {isRegistrationLink ? 'Registrarse' : 'Ver más'}
          <span className="h-4 w-4 bg-primary-400 dark:bg-yellow-300 text-white rounded-full grid place-items-center dark:text-primary-900">
            <ArrowRightIcon height="14" width="14" />
          </span>
        </a>
      )}
    </article>
  );
}

type Props = {
  event: Event;
  className?: string;
};
