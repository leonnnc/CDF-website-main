'use client';

import { useExpandableGalleryPanelContext } from '@modules/expandable-gallery/contexts/ExpandableGalleryPanel.context';
import ExpandableGalleryPanelStyles from '@ui/expandable-gallery/styles/expandable-gallery-panel.module.scss';
import clsx from 'clsx';
import { ReactNode } from 'react';

export function ExpandableGalleryPanel({ children, className }: Props) {
  const { isActive, pauseGallery, resumeGallery } = useExpandableGalleryPanelContext();

  return (
    <div
      className={clsx(
        className,
        {
          [`${ExpandableGalleryPanelStyles.main} w-0`]: !isActive,
          'rounded-3xl w-full': isActive,
        },
        'transition-all duration-1000 overflow-hidden min-w-28'
      )}
      onMouseOver={pauseGallery}
      onMouseLeave={resumeGallery}
    >
      {children}
    </div>
  );
}

type Props = {
  children: ReactNode;
  className?: string;
};
