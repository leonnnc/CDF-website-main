import { LogoIcon } from '@ui/shared/components/icon/solid';
import Link from 'next/link';

import { HeaderGiveButton } from '../HeaderGiveButton';
import { ThemeSwitch } from '../theme-switch/ThemeSwitch';
import { HeaderMobileMenu } from './HeaderMobileMenu';

export function HeaderMobile() {
  return (
    <>
      <header className="z-10 flex lg:hidden fixed top-0 w-full justify-between items-center text-primary-800 dark:text-neutral-100 px-4 pt-4">
        <Link href="/">
          <LogoIcon
            className="md:w-14 md:h-14 bg-neutral-100 dark:bg-transparent rounded-full"
            height="40"
            width="40"
          />
        </Link>
        <div className="flex items-center gap-4">
          <ThemeSwitch />
          <HeaderGiveButton />
        </div>
      </header>
      <HeaderMobileMenu />
    </>
  );
}
