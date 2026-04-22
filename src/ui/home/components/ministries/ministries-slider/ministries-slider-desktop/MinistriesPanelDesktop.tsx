import { useExpandableGalleryPanelContext } from '@modules/expandable-gallery/contexts/ExpandableGalleryPanel.context';
import { MinistryPanel } from '@modules/home/interfaces/ministries-panel.interface';
import MinistriesPanelDesktopStyles from '@ui/home/styles/ministries/ministries-slider-desktop/ministries-panel-desktop.module.scss';
import clsx from 'clsx';
import Image from 'next/image';
import { CSSProperties } from 'react';

import MinistriesSliderSchedules from '../MinistriesSliderSchedules';

export function MinistriesPanelDesktop({ item }: Props) {
  const { image, title, description, logo, schedules } = item;
  const { isActive } = useExpandableGalleryPanelContext();

  return (
    <div
      style={{ '--panel-background': `url(${image})` } as CSSProperties}
      className={clsx(
        MinistriesPanelDesktopStyles.main,
        'relative flex items-end justify-center h-full'
      )}
    >
      <div
        className={clsx(
          MinistriesPanelDesktopStyles.content,
          'absolute left-0 bottom-0 flex items-end gap-4'
        )}
      >
        <div className="rounded-full overflow-hidden border-4 border-primary-200 dark:border-neutral-100 shrink-0 h-16 w-16">
          <Image src={logo} alt="ministerio" height="56" width="56" />
        </div>
        <div
          className={clsx(
            {
              'opacity-100 translate-y-0': isActive,
              'opacity-0 translate-y-4': !isActive,
            },
            'flex flex-col gap-1 min-w-64 transition-all delay-300 duration-300'
          )}
        >
          <p className="text-neutral-100 text-bigger font-semibold font-montserrant">{title}</p>
          <p className="text-neutral-200 text-small">{description}</p>
          {schedules && <MinistriesSliderSchedules schedules={schedules} />}
        </div>
      </div>
    </div>
  );
}

type Props = {
  item: MinistryPanel;
};
