'use client';

import { ExpandableGalleryPanelProvider } from '@modules/expandable-gallery/contexts/ExpandableGalleryPanel.context';
import clsx from 'clsx';
import { ReactElement, useEffect, useRef, useState } from 'react';

export function ExpandableGallery({ children, className, duration = 2000 }: Props) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const pauseTimeout = useRef<NodeJS.Timeout | null>(null);

  function pauseGallery(index: number) {
    if (pauseTimeout.current) return;

    setIsPaused(true);

    pauseTimeout.current = setTimeout(() => {
      setActiveIndex(index);
    }, 1000);
  }

  function resumeGallery() {
    setIsPaused(false);

    if (!pauseTimeout.current) return;

    clearTimeout(pauseTimeout.current);
    pauseTimeout.current = null;
  }

  useEffect(
    function changeActiveIndex() {
      if (isPaused) {
        return;
      }

      const timer = setInterval(() => {
        setActiveIndex((index) => (index + 1) % children.length);
      }, duration);

      return () => {
        clearInterval(timer);
      };
    },
    [children, duration, isPaused]
  );

  return (
    <div className={clsx(className, 'flex gap-12')}>
      {children.map((child, index) => {
        const isActive = activeIndex === index;

        return (
          <ExpandableGalleryPanelProvider
            key={`gallery-panel-${index}`}
            isActive={isActive}
            pauseGallery={() => pauseGallery(index)}
            resumeGallery={resumeGallery}
          >
            {child}
          </ExpandableGalleryPanelProvider>
        );
      })}
    </div>
  );
}

type Props = {
  children: ReactElement[];
  duration?: number;
  className?: string;
};
