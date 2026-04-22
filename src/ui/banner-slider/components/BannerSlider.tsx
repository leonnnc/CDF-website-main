import { BANNER_SLIDES } from '@modules/banner-slider/data/slider.data';
import BannerSliderStyles from '@ui/banner-slider/styles/banner-slider.module.scss';
import { Swiper } from '@ui/swiper/components/Swiper';
import { SwiperSlide } from '@ui/swiper/components/SwiperSlide';
import clsx from 'clsx';

import { BannerSliderItem } from './BannerSliderItem';

export function BannerSlider() {
  return (
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
            className="w-full flex items-center justify-center px-2 md:px-4 xl:px-0"
          >
            <BannerSliderItem item={slide} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
