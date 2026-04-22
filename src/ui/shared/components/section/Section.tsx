import clsx from 'clsx';
import { HTMLAttributes } from 'react';

export function Section({ className, ...rest }: Props) {
  return <section className={clsx(className, 'py-20 md:py-28')} {...rest} />;
}

type Props = {
  className?: string;
} & HTMLAttributes<HTMLElement>;
