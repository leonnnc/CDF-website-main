import clsx from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';

import { ButtonType } from '@/modules/shared/interfaces/button.interface';

export function Button({ icon, variant = ButtonType.NORMAL, className, ...rest }: Props) {
  const { children } = rest;

  return (
    <button className={clsx(className, variant)} {...rest}>
      {children}
      {icon}
    </button>
  );
}

type Props = {
  icon?: ReactNode;
  variant?: ButtonType;
} & ButtonHTMLAttributes<HTMLButtonElement>;
