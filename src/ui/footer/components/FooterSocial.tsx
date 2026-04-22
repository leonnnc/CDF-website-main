import { cn } from '@modules/shadcn/helpers/shadcn.helper';
import { IconProps } from '@modules/shared/interfaces/icon.interface';
import React from 'react';

export default function FooterSocial({ link, icon: Icon, className, socialName }: Props) {
  return (
    <a
      href={link}
      className={cn(
        className,
        'text-primary-500 dark:text-neutral-200 hover:scale-110 transition-transform'
      )}
      rel="noreferrer noopener"
      target="_blank"
      aria-label={`Ir a ${socialName}`}
    >
      <Icon height="20" width="20" className="h-10 w-10 lg:h-14 lg:w-14" />
    </a>
  );
}

type Props = {
  socialName: string;
  link: string;
  icon: ({ ...rest }: IconProps) => JSX.Element;
  className?: string;
};
