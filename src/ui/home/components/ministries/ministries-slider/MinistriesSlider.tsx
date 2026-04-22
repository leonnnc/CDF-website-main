'use client';

import { MinistriesSliderDesktop } from './ministries-slider-desktop/MinistriesSliderDesktop';
import { MinistriesSliderMobile } from './ministries-slider-mobile/MinistriesSliderMobile';

export default function MinistriesSlider() {
  return (
    <>
      <MinistriesSliderDesktop className="hidden lg:block" />
      <MinistriesSliderMobile className="lg:hidden" />
    </>
  );
}
