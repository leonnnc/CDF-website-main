import { WarningIcon } from '@icons/outline';
import { AlertType } from '@modules/shared/interfaces/alert.inferface';
import clsx from 'clsx';
import { ReactNode } from 'react';

export function Alert({ children, type = AlertType.INFO, className }: Props) {
  const isWarning = type === AlertType.WARNING;

  return (
    <div
      role="alert"
      className={clsx(
        {
          'bg-yellow-100 border-yellow-700 dark:bg-yellow-800/40 dark:border-yellow-700': isWarning,
        },
        className,
        'flex gap-2 p-4 rounded-2xl border text-smaller md:text-normal'
      )}
    >
      {isWarning && (
        <WarningIcon
          height="32"
          width="32"
          className="text-yellow-400 shrink-0 h-5 w-5 md:h-8 md:w-8"
        />
      )}
      <p>{children}</p>
    </div>
  );
}

type Props = {
  children: ReactNode;
  type?: AlertType;
  className?: string;
};
