'use client';

import { isDateBeforeNow } from '@modules/shared/libs/date.lib';
import clsx from 'clsx';

export function CourseCardBadge({ date }: Props) {
  const isStarted = isDateBeforeNow(date);

  return (
    <div
      role="status"
      className={clsx(
        {
          'bg-primary-100 text-primary-400 border-primary-300 dark:text-primary-500': !isStarted,
          'bg-green-200 text-green-700 border-green-600 dark:bg-green-300 dark:text-green-800':
            isStarted,
        },
        'absolute top-0 left-4 -translate-y-2/3 md:-translate-y-1/2 text-smaller font-semibold border px-2 rounded-2xl'
      )}
    >
      {!isStarted && 'Inscríbete'}
      {isStarted && 'En curso'}
    </div>
  );
}

type Props = {
  date: string;
};
