import { HEADER_ITEMS } from '@modules/header/data/item.data';
import HeaderStyles from '@ui/header/styles/header.module.scss';
import { LogoIcon } from '@ui/shared/components/icon/solid';
import clsx from 'clsx';
import Link from 'next/link';

import { HeaderGiveButton } from '../HeaderGiveButton';
import { ThemeSwitch } from '../theme-switch/ThemeSwitch';
import { HeaderDesktopItem } from './HeaderDesktopItem';

export function HeaderDesktop() {
  return (
    <header
      className={clsx(
        HeaderStyles.main,
        'hidden lg:flex fixed top-6 items-center left-1/2 -translate-x-1/2 text-primary-800 dark:bg-primary-600/40 dark:text-neutral-100 gap-20 py-4 px-16 rounded-3xl z-10'
      )}
    >
      <Link href="/">
        <LogoIcon height="64" width="64" />
      </Link>
      <nav className="flex items-center gap-10">
        {HEADER_ITEMS.map((item) => (
          <HeaderDesktopItem key={item.id} item={item} />
        ))}
        <ThemeSwitch />
      </nav>
      <HeaderGiveButton />
    </header>
  );
}
