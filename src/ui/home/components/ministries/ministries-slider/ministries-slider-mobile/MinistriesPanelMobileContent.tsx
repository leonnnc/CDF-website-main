import { MinistryPanel } from '@modules/home/interfaces/ministries-panel.interface';
import MinistriesPanelMobileContentStyles from '@ui/home/styles/ministries/ministries-mobile-slider/ministries-panel-mobile-content.module.scss';
import clsx from 'clsx';
import Image from 'next/image';
import { CSSProperties } from 'react';

import MinistriesSliderSchedules from '../MinistriesSliderSchedules';

export function MinistriesPanelMobileContent({ item }: Props) {
  const { image, logo, title, description, schedules } = item;

  return (
    <div
      style={
        {
          '--panel-background': `url(${image})`,
        } as CSSProperties
      }
      className={clsx(
        MinistriesPanelMobileContentStyles.main,
        'flex items-end aspect-picture w-full p-6'
      )}
    >
      <div className="flex items-end gap-4">
        <div className="rounded-full overflow-hidden border">
          <Image src={logo} alt="ministerio" height="40" width="40" />
        </div>
        <div className="flex flex-col gap-1 text-left">
          <p className="text-neutral-100 text-bigger font-semibold font-montserrant">{title}</p>
          <p className="text-neutral-200 text-smaller">{description}</p>
          {schedules && <MinistriesSliderSchedules schedules={schedules} />}
        </div>
      </div>
    </div>
  );
}

type Props = {
  item: MinistryPanel;
};
