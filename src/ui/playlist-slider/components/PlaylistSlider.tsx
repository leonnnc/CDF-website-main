'use client';

import { PlaylistItem } from '@modules/playlist-slider/interfaces/playlist.interface';
import { cn } from '@modules/shadcn/helpers/shadcn.helper';
import { MEDIA_QUERY } from '@modules/shared/constants/media-query.constant';
import { Swiper } from '@ui/swiper/components/Swiper';
import { SwiperSlide } from '@ui/swiper/components/SwiperSlide';
import { useMediaQuery } from '@uidotdev/usehooks';
import { useEffect, useState } from 'react';

import { PlaylistSliderItem } from './PlaylistSliderItem';

export function PlaylistSlider({ items }: Props) {
  const [panelsPerView, setPanelsPerView] = useState(4);

  const controlClass = '-top-8 md:-top-16 -translate-y-full h-8 w-8 md:h-14 md:w-14';

  const isSmallDevice = useMediaQuery(MEDIA_QUERY.SM);
  const isLargeDevice = useMediaQuery(MEDIA_QUERY.LG);

  useEffect(() => {
    if (isLargeDevice) {
      setPanelsPerView(4);
      return;
    }

    if (isSmallDevice) {
      setPanelsPerView(3);
      return;
    }

    setPanelsPerView(2);
  }, [isSmallDevice, isLargeDevice]);

  return (
    <Swiper
      className="!overflow-visible"
      arrowLeftClass={cn(controlClass, 'left-auto right-0 mr-4 md:mr-6 -translate-x-full')}
      arrowRightClass={cn(controlClass, 'right-0')}
      panelsPerView={panelsPerView}
      arrow
    >
      {items.map((slide) => {
        return (
          <SwiperSlide key={slide.id} className="mr-4">
            <PlaylistSliderItem item={slide} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

type Props = {
  items: PlaylistItem[];
};
