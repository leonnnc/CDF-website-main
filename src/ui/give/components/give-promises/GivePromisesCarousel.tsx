import { GIVE_PROMISES } from '@modules/give/data/give-promises.data';
import GivePromisesCarouselStyles from '@ui/give/styles/give-promises/give-promises-carousel.module.scss';
import { InfinityScroll } from '@ui/infinity-scroll/components/InfinityScroll';
import clsx from 'clsx';

import { GivePromisesCarouselItem } from './GivePromisesCarouselItem';

export function GivePromisesCarousel() {
  return (
    <InfinityScroll
      gap={32}
      time={50}
      className={clsx(GivePromisesCarouselStyles.main, 'py-3 items-center')}
    >
      {GIVE_PROMISES.map((item) => {
        return (
          <GivePromisesCarouselItem
            key={`${item.book}-${item.chapter}`}
            quote={item}
            className={clsx(GivePromisesCarouselStyles.item)}
          />
        );
      })}
    </InfinityScroll>
  );
}
