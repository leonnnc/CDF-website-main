import { BANNER_SLIDES } from '@modules/banner-slider/data/slider.data';
import BannerSliderStyles from '@ui/banner-slider/styles/banner-slider.module.scss';
import { Swiper } from '@ui/swiper/components/Swiper';
import { SwiperSlide } from '@ui/swiper/components/SwiperSlide';
import clsx from 'clsx';

import { BannerSliderItem } from './BannerSliderItem';
import { ScrollIndicator } from './ScrollIndicator';

export function BannerSlider() {
  return (
    <div className="relative">
      <Swiper
        className={clsx(BannerSliderStyles.main)}
        arrowLeftClass={clsx(BannerSliderStyles.prev, 'hidden md:flex')}
        arrowRightClass={clsx(BannerSliderStyles.next, 'hidden md:flex')}
        paginationClass="xl:hidden"
        loop
        arrow
        autoplay
        pagination
      >
        {BANNER_SLIDES.map((slide) => {
          return (
            <SwiperSlide
              key={slide.alt}
              className="relative w-full h-full"
            >
              <BannerSliderItem item={slide} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <ScrollIndicator />
    </div>
  );
}
