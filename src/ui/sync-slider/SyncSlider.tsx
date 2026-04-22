'use client';

import { Sync } from '@egjs/flicking-plugins';
import Flicking from '@egjs/react-flicking';
import { isArrayEmpty } from '@modules/shared/helpers/array.helper';
import {
  SyncSliderItem,
  SyncSliderPanel,
  SyncSliderThumbnail,
} from '@modules/sync-slider/interfaces/sync-slider.interface';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

import { SyncSliderPanels } from './SyncSliderPanels';
import { SyncSliderThumbnails } from './SyncSliderThumbnails';

export function SyncSlider({ items, className, thumbnailOptions, panelOptions }: Props) {
  const slider = useRef<Flicking>(null);
  const preview = useRef<Flicking>(null);

  const [plugins, setPlugins] = useState<Sync[]>([]);

  useEffect(() => {
    if (!slider.current || !preview.current) return;

    setPlugins([
      new Sync({
        type: 'index',
        synchronizedFlickingOptions: [
          {
            flicking: slider.current,
            isSlidable: true,
          },
          {
            flicking: preview.current,
            isClickable: true,
            activeClass: '!opacity-100',
          },
        ],
      }),
    ]);
  }, []);

  if (isArrayEmpty(items)) return null;

  return (
    <div className={clsx(className)}>
      <SyncSliderPanels ref={slider} items={items} plugins={plugins} options={panelOptions} />
      <SyncSliderThumbnails ref={preview} items={items} options={thumbnailOptions} />
    </div>
  );
}

type Props = {
  items: SyncSliderItem[];
  thumbnailOptions?: SyncSliderThumbnail;
  panelOptions?: SyncSliderPanel;
  className?: string;
};
