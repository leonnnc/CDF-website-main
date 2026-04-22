import { Arrow, AutoPlay, Pagination } from '@egjs/flicking-plugins';
import {
  renderSwiperActiveBullet,
  renderSwiperBullet,
} from '@modules/swiper/helpers/pagination.helper';

export function swiperAutoplay() {
  return new AutoPlay({
    duration: 2000,
    direction: 'NEXT',
    stopOnHover: true,
  });
}

export function swiperArrow() {
  return new Arrow();
}

export function swiperPagination() {
  return new Pagination({
    type: 'bullet',
    renderBullet: renderSwiperBullet,
    renderActiveBullet: renderSwiperActiveBullet,
  });
}
