import {
  MOBILE_PANEL_OPTIONS,
  MOBILE_THUMBNAIL_OPTIONS,
} from '@modules/home/constants/ministries-slider-mobile.constant';
import { MINISTRIES_SLIDES } from '@modules/home/data/ministries.data';
import MinistriesSliderMobileStyles from '@ui/home/styles/ministries/ministries-mobile-slider/ministries-slider-mobile.module.scss';
import { SyncSlider } from '@ui/sync-slider/SyncSlider';
import clsx from 'clsx';
import React from 'react';

export function MinistriesSliderMobile({ className }: Props) {
  return (
    <div className={clsx(className, MinistriesSliderMobileStyles.main, 'w-full')}>
      <SyncSlider
        items={MINISTRIES_SLIDES}
        thumbnailOptions={MOBILE_THUMBNAIL_OPTIONS}
        panelOptions={MOBILE_PANEL_OPTIONS}
        className="flex flex-col gap-8 w-full"
      />
    </div>
  );
}

type Props = {
  className?: string;
};
