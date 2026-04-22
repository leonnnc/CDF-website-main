import { ButtonType } from '@modules/shared/interfaces/button.interface';
import clsx from 'clsx';
import Link from 'next/link';
import { ReactNode } from 'react';

export function ButtonLink({ icon, variant = ButtonType.NORMAL, className, ...rest }: Props) {
  const { children } = rest;

  return (
    <Link className={clsx(className, variant)} {...rest}>
      {children}
      {icon}
    </Link>
  );
}

type Props = {
  icon?: ReactNode;
  variant?: ButtonType;
} & React.ComponentProps<typeof Link>;
