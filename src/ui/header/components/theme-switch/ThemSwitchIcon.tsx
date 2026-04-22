import { useMounted } from '@modules/shared/hooks/useMounted';
import { MoonIcon, SunIcon } from '@ui/shared/components/icon/outline';
import clsx from 'clsx';

export function ThemSwitchIcon({ isDark, className }: Props) {
  const { isMounted } = useMounted();

  if (!isDark || !isMounted) {
    return <SunIcon className={clsx(className)} />;
  }

  return <MoonIcon className={clsx(className)} />;
}

type Props = {
  isDark: boolean;
  className?: string;
};
