import { MINISTRY_PANELS } from '@modules/home/data/ministries-panel.data';
import { ExpandableGallery } from '@ui/expandable-gallery/components/ExpandableGallery';
import { ExpandableGalleryPanel } from '@ui/expandable-gallery/components/ExpandableGalleryPanel';
import MinistriesSliderDesktopStyles from '@ui/home/styles/ministries/ministries-slider-desktop/ministries-slider-desktop.module.scss';
import clsx from 'clsx';

import { MinistriesPanelDesktop } from './MinistriesPanelDesktop';

export function MinistriesSliderDesktop({ className }: Props) {
  return (
    <div className={clsx(className, MinistriesSliderDesktopStyles.main, 'w-full')}>
      <ExpandableGallery className="h-full">
        {MINISTRY_PANELS.map((item) => {
          return (
            <ExpandableGalleryPanel key={item.title}>
              {item.link && (
                <a href={item.link} rel="noopener noreferrer" target="_blank">
                  <MinistriesPanelDesktop item={item} />
                </a>
              )}
              {!item.link && <MinistriesPanelDesktop item={item} />}
            </ExpandableGalleryPanel>
          );
        })}
      </ExpandableGallery>
    </div>
  );
}

type Props = {
  className?: string;
};
