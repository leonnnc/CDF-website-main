'use client';

import { Theme } from '@modules/shared/interfaces/theme.interface';
import { useTheme } from 'next-themes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ThemSwitchIcon } from './ThemSwitchIcon';

export function ThemeSwitch() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { setTheme, resolvedTheme } = useTheme();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function handleTheme() {
    if (resolvedTheme === Theme.LIGHT) {
      setTheme(Theme.DARK);

      return;
    }

    setTheme(Theme.LIGHT);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isDark = resolvedTheme === Theme.DARK;

  setTheme(Theme.DARK);

  return null;

  // TODO: Enable switching theme when page /give is ready with light mode support
  // return (
  //   <button className="relative h-5 w-5 md:h-6 md:w-6" onClick={handleTheme}>
  //     <ThemSwitchIcon isDark={isDark} className="absolute inset-0 h-full w-full" />
  //   </button>
  // );
}
