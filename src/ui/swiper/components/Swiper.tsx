'use client';

import '@egjs/react-flicking/dist/flicking.css';

import Flicking, { Plugin, ViewportSlot } from '@egjs/react-flicking';
import { cn } from '@modules/shadcn/helpers/shadcn.helper';
import { SwiperArrowDirection } from '@modules/swiper/interfaces/swiper-arrow.interface';
import React, { ReactNode } from 'react';

import {
  swiperArrow,
  swiperAutoplay,
  swiperPagination,
} from '@/modules/swiper/helpers/swiper.helper';

import { SwiperArrow } from './SwiperArrow';
import { SwiperPagination } from './SwiperPagination';

function SwiperAdapter(
  {
    children,
    className,
    autoplay,
    arrow,
    pagination,
    arrowLeftClass,
    arrowRightClass,
    paginationClass,
    plugins,
    bound,
    loop,
    slidesContainerClass,
    panelsPerView = -1,
  }: Props,
  ref: React.Ref<Flicking>
) {
  const pluginSetup = plugins ? plugins : [];

  if (autoplay) {
    pluginSetup.push(swiperAutoplay());
  }

  if (arrow) {
    pluginSetup.push(swiperArrow());
  }

  if (pagination) {
    pluginSetup.push(swiperPagination());
  }

  return (
    <Flicking
      ref={ref}
      align="prev"
      circular={loop}
      plugins={pluginSetup}
      className={cn('relative', className)}
      bound={bound}
      cameraClass={cn(slidesContainerClass)}
      panelsPerView={panelsPerView}
    >
      {children}
      <ViewportSlot>
        {arrow && (
          <>
            <SwiperArrow direction={SwiperArrowDirection.PREV} className={arrowLeftClass} />
            <SwiperArrow direction={SwiperArrowDirection.NEXT} className={arrowRightClass} />
          </>
        )}
        {pagination && <SwiperPagination className={paginationClass} />}
      </ViewportSlot>
    </Flicking>
  );
}

export const Swiper = React.forwardRef(SwiperAdapter);

type Props = {
  children: ReactNode;
  className?: string;
  arrowLeftClass?: string;
  arrowRightClass?: string;
  autoplay?: boolean;
  arrow?: boolean;
  pagination?: boolean;
  paginationClass?: string;
  plugins?: Plugin[];
  bound?: boolean;
  loop?: boolean;
  slidesContainerClass?: string;
  panelsPerView?: number;
};
