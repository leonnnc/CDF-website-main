import { formatDate } from '@modules/shared/libs/date.lib';
import clsx from 'clsx';

import { CalendarIcon } from '@/ui/shared/components/icon/outline';

export function CourseCardDate({ date }: Props) {
  const startDate = formatDate(date, 'MMMM DD, YYYY');

  return (
    <time
      className={clsx(
        'flex items-center gap-1 text-small text-yellow-500 capitalize',
        'dark:text-yellow-100'
      )}
    >
      <CalendarIcon height="16" width="16" className="h-4 w-4 -mt-0.5" />
      {startDate}
    </time>
  );
}

type Props = {
  date: string;
};
