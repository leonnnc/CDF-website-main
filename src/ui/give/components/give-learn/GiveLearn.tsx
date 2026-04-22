import { CubesIcon, SportBaseballIcon } from '@icons/solid';
import GiveLearnStyles from '@ui/give/styles/give-learn/give-learn.module.scss';
import { Section } from '@ui/shared/components/section/Section';
import clsx from 'clsx';

import { GIVE_LEARN_VIDEOS } from '@/modules/give/data/give-learn.data';

import { GiveLearnCard } from './GiveLearnCard';

export function GiveLearn() {
  const featuredVideo = GIVE_LEARN_VIDEOS[0];

  return (
    <Section className={clsx(GiveLearnStyles.main)}>
      <div className="relative max-w-wrapper px-4 mx-auto">
        <div className={clsx(GiveLearnStyles.ball, 'absolute bottom-0 left-0')}>
          <SportBaseballIcon fill="#7F38D2" height="140" width="140" />
        </div>
        <div className={clsx(GiveLearnStyles.cubes, 'absolute right-0 bottom-1/2')}>
          <CubesIcon fill="#4ADE80" height="160" width="160" className="rotate-45" />
        </div>
        <h2 className="text-h3 lg:h2 font-bold mb-12 lg:mb-16 text-center">Conoce más sobre DAR</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <GiveLearnCard className="hidden md:block" item={featuredVideo} isFeatured />
          {GIVE_LEARN_VIDEOS.map((item, index) => (
            <GiveLearnCard
              key={item.id}
              item={item}
              className={clsx({ 'md:hidden': index == 0 })}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
