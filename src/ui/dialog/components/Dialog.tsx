import { cn } from '@modules/shadcn/helpers/shadcn.helper';
import DialogStyles from '@ui/dialog/styles/dialog.module.scss';
import {
  Dialog as ShadcnDialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@ui/shadcn/components/Dialog';
import clsx from 'clsx';
import { ReactNode } from 'react';

export function Dialog({ children, trigger, title, className, isHiddenTitle }: Props) {
  return (
    <ShadcnDialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className={clsx(DialogStyles.content, className)}>
        {title && (
          <DialogTitle
            className={cn({
              hidden: isHiddenTitle,
            })}
          >
            {title}
          </DialogTitle>
        )}
        {children}
      </DialogContent>
    </ShadcnDialog>
  );
}

type Props = {
  children: ReactNode;
  trigger: JSX.Element;
  title?: string;
  className?: string;
  isHiddenTitle?: boolean;
};
