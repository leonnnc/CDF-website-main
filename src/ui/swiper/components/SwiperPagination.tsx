import clsx from 'clsx';

export function SwiperPagination({ className }: Props) {
  return (
    <div
      className={clsx(
        className,
        'flicking-pagination absolute left-1/2 -translate-x-1/2 bottom-2 sm:bottom-4 flex gap-4 z-1 bg-primary-800/40 p-1 rounded-full'
      )}
    />
  );
}

type Props = {
  className?: string;
};
