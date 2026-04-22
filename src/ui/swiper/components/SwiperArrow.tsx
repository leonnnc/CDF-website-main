import { ArrowLeftIcon, ArrowRightIcon } from '@icons/outline';
import { cn } from '@modules/shadcn/helpers/shadcn.helper';

import { SwiperArrowDirection } from '@/modules/swiper/interfaces/swiper-arrow.interface';

export function SwiperArrow({ direction, className }: Props) {
  const isPrev = direction === SwiperArrowDirection.PREV;

  return (
    <button
      className={cn(
        {
          'flicking-arrow-prev left-1/2': isPrev,
          'flicking-arrow-next right-1/2': !isPrev,
        },
        'absolute top-1/2 -translate-y-1/2 flex items-center justify-center h-14 w-14 border border-neutral-500 text-neutral-500 z-1 rounded-full',
        'dark: border-neutral-300 text-neutral-300',
        className
      )}
    >
      {isPrev && <ArrowLeftIcon />}
      {!isPrev && <ArrowRightIcon />}
    </button>
  );
}

type Props = {
  direction: SwiperArrowDirection;
  className?: string;
};
