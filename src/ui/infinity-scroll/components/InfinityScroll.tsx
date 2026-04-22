import InfinityScrollStyles from '@ui/infinity-scroll/styles/infinity-scroll.module.scss';
import clsx from 'clsx';
import { Children, cloneElement, CSSProperties, isValidElement, ReactNode } from 'react';

export function InfinityScroll({ children, time = 10, gap = 16, className }: Props) {
  const childArray = Children.toArray(children);
  const duplicated = childArray.map((child, index) =>
    isValidElement(child) ? cloneElement(child, { key: `duplicate-${index}` }) : child
  );

  return (
    <div
      style={{ '--time': `${time}s`, '--gap': `${gap}px` } as CSSProperties}
      className={clsx(InfinityScrollStyles.main, className)}
    >
      <div className={InfinityScrollStyles.scroller}>
        {children}
        {duplicated}
      </div>
    </div>
  );
}

type Props = {
  children: ReactNode;
  time?: number;
  gap?: number;
  className?: string;
};
