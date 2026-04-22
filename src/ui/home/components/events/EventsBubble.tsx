import EventsBubbleStyles from '@ui/home/styles/events/events-bubble.module.scss';
import clsx from 'clsx';

export function EventsBubble({ className }: Props) {
  return (
    <div
      className={clsx(
        className,
        EventsBubbleStyles.main,
        'h-96 aspect-square opacity-30 pointer-events-none',
        'dark:opacity-100'
      )}
    />
  );
}

type Props = {
  className?: string;
};
