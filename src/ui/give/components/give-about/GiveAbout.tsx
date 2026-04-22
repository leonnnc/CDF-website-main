'use client';

import { GIVE_ABOUT_VERSE } from '@modules/give/data/give-about.data';
import GiveAboutStyles from '@ui/give/styles/give-about/give-about.module.scss';
import { Section } from '@ui/shared/components/section/Section';
import { useIntersectionObserver } from '@uidotdev/usehooks';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

import { GiveAboutCard } from './GiveAboutCard';

export function GiveAbout() {
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const hasBeenShown = useRef<boolean>(false);
  const [ref, entry] = useIntersectionObserver({
    threshold: 0.2,
    root: null,
  });

  useEffect(() => {
    if (!entry?.isIntersecting || hasBeenShown.current) return;

    hasBeenShown.current = true;

    setHasAnimated(true);
  }, [entry]);

  return (
    <Section className="flex justify-center">
      <div className="max-w-wrapper px-4 mx-auto">
        <h2
          className={clsx(
            { 'animate__animated animate__fadeInUp': hasAnimated },
            'text-h3 lg:h2 font-bold mb-12 lg:mb-16 text-center opacity-0'
          )}
        >
          Principios Bíblicos sobre el Dar
        </h2>
        <div
          ref={ref}
          className={clsx(
            { [GiveAboutStyles.cardsContainer]: hasAnimated },
            'grid md:grid-cols-9 gap-4 lg:gap-6'
          )}
        >
          {GIVE_ABOUT_VERSE.map((item) => {
            return (
              <GiveAboutCard
                key={item.id}
                item={item}
                className={clsx(
                  GiveAboutStyles.card,
                  item.className,
                  'opacity-0 transition-all duration-500'
                )}
              />
            );
          })}
        </div>
      </div>
    </Section>
  );
}
