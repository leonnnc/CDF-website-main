import { IconProps } from '@modules/shared/interfaces/icon.interface';
import { ReactNode } from 'react';

export function FooterContact({ icon: Icon, children }: Props) {
  return (
    <div className="flex items-center gap-2 text-primary-500 dark:text-neutral-200">
      <Icon height="16" width="16" className="h-4 w-4 md:h-5 md:w-5" />
      <p>{children}</p>
    </div>
  );
}

type Props = {
  children: ReactNode;
  icon: ({ ...rest }: IconProps) => JSX.Element;
};
