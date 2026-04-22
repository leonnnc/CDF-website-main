import Flicking from '@egjs/react-flicking';
import {
  SyncSliderItem,
  SyncSliderThumbnail,
} from '@modules/sync-slider/interfaces/sync-slider.interface';
import { Swiper } from '@ui/swiper/components/Swiper';
import { SwiperSlide } from '@ui/swiper/components/SwiperSlide';
import clsx from 'clsx';
import React from 'react';

function SliderThumbnails({ items, options = {} }: Props, ref?: React.Ref<Flicking>) {
  const { thumbnailsContainerClass } = options;

  return (
    <Swiper ref={ref} bound={true} slidesContainerClass={clsx(thumbnailsContainerClass)}>
      {items.map((item) => {
        const { id, thumbnail } = item;

        return (
          <SwiperSlide key={id} as="button" className="opacity-40">
            {thumbnail}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

type Props = {
  items: SyncSliderItem[];
  options?: SyncSliderThumbnail;
};

export const SyncSliderThumbnails = React.forwardRef(SliderThumbnails);
