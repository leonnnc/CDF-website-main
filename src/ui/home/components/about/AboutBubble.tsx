import AboutBubbleStyles from '@ui/home/styles/about/about-bubble.module.scss';
import clsx from 'clsx';

export function AboutBubble({ className }: Props) {
  return (
    <div
      className={clsx(
        className,
        AboutBubbleStyles.main,
        'h-96 aspect-square opacity-30 pointer-events-none',
        'dark:opacity-100'
      )}
    />
  );
}

type Props = {
  className?: string;
};
