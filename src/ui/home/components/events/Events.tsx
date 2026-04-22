'use client';
import { EVENTS } from '@modules/home/data/events.data';
import { cn } from '@modules/shadcn/helpers/shadcn.helper';
import { Dialog } from '@ui/dialog/components/Dialog';
import { Section } from '@ui/shared/components/section/Section';

import { EventsBubble } from './EventsBubble';
import EventsCard from './EventsCard';
import { EventsCardFeatured } from './EventsCardFeatured';

// TODO: Add see all event button
export function Events() {
  const nextEvent = EVENTS[0];
  const upcomingEvents = EVENTS.slice(1);

  return (
    <Section id="eventos" className="relative">
      <EventsBubble className="absolute bottom-0 translate-y-[95%] -translate-x-1/4" />
      <div className="relative max-w-wrapper px-4 mx-auto">
        <p className="text-bigger text-neutral-400 font-montserrant font-semibold mb-1 text-center">
          Ven y participa de
        </p>
        <h2 className="text-h3 lg:text-h1 font-bold font-montserrant text-neutral-900 dark:text-neutral-100 mb-12 md:mb-16 text-center">
          Nuestros eventos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <EventsCardFeatured event={nextEvent} />
          <div>
            <div className="flex justify-between">
              <p className="text-bigger lg:text-h4 font-bold mb-4 lg:mb-8 dark:text-neutral-300">
                Próximos eventos
              </p>
              {/* <Link
                href="#"
                className="text-primary-400 text-smaller lg:text-small font-semibold dark:text-yellow-300"
              >
                Ver todos
              </Link> */}
            </div>
            <div className="rounded-lg md:rounded-3xl overflow-hidden">
              {upcomingEvents.map((event) => {
                return (
                  <Dialog
                    key={event.id}
                    trigger={
                      <div>
                        <EventsCard event={event} />
                      </div>
                    }
                    className="md:p-0"
                    title={event.title}
                    isHiddenTitle
                  >
                    <EventsCardFeatured
                      event={event}
                      className={cn('border-none bg-transparent', 'dark:bg-transparent')}
                    />
                  </Dialog>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
