import AboutCardStyles from '@ui/home/styles/about/about-card.module.scss';
import clsx from 'clsx';

import { AboutFeature } from '@/modules/home/interfaces/about-card.interface';

export function AboutCard({ item, className }: Props) {
  const { title, description, icon: Icon } = item;

  return (
    <article
      className={clsx(
        className,
        AboutCardStyles.main,
        'relative p-8 rounded-3xl bg-white/40 overflow-hidden max-w-96 lg:p-12',
        'dark:border dark:border-neutral-300/15'
      )}
    >
      <Icon
        className={clsx(
          AboutCardStyles.background,
          'absolute -bottom-16 -right-14 w-80 h-auto text-primary-800',
          'dark:text-primary-100'
        )}
      />
      <div className="relative">
        <div
          className={clsx(
            AboutCardStyles.icon,
            'flex items-center justify-center h-12 w-12 lg:h-16 lg:w-16 text-primary-400 rounded-full mb-8',
            'dark:bg-primary-100 dark:text-primary-800'
          )}
        >
          <Icon height="32" width="32" className="lg:w-10 lg:h-10" />
        </div>
        <p
          className={clsx(
            'text-h4 text-neutral-800 mb-4 font-montserrant font-bold',
            'dark:text-neutral-100'
          )}
        >
          {title}
        </p>
        <p className={clsx('text-neutral-700', 'dark:text-neutral-300')}>{description}</p>
      </div>
    </article>
  );
}

type Props = {
  item: AboutFeature;
  className?: string;
};
