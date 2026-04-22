import Flicking, { Plugin } from '@egjs/react-flicking';
import {
  SyncSliderItem,
  SyncSliderPanel,
} from '@modules/sync-slider/interfaces/sync-slider.interface';
import { Swiper } from '@ui/swiper/components/Swiper';
import { SwiperSlide } from '@ui/swiper/components/SwiperSlide';
import clsx from 'clsx';
import React from 'react';

function SliderPanels({ items, plugins, options = {} }: Props, ref?: React.Ref<Flicking>) {
  const { panelsContainerClass, panelsSliderClass } = options;

  return (
    <Swiper
      ref={ref}
      slidesContainerClass={clsx(panelsContainerClass)}
      className={clsx(panelsSliderClass)}
      plugins={plugins}
      autoplay
    >
      {items.map((item) => {
        const { id, panel } = item;

        return (
          <SwiperSlide key={id} className="w-full">
            {panel}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

type Props = {
  plugins: Plugin[];
  items: SyncSliderItem[];
  options?: SyncSliderPanel;
};

export const SyncSliderPanels = React.forwardRef(SliderPanels);
