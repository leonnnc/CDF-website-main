import HeaderStyles from '@ui/header/styles/header.module.scss';
import HeaderMobileMenuStyles from '@ui/header/styles/header-mobile-menu.module.scss';
import clsx from 'clsx';

import { HEADER_ITEMS } from '@/modules/header/data/item.data';

import { HeaderMobileMenuItem } from './HeaderMobileMenuItem';

export function HeaderMobileMenu() {
  return (
    <div
      className={clsx(
        HeaderMobileMenuStyles.main,
        'z-10 block lg:hidden fixed w-full bottom-6 px-4 left-1/2 -translate-x-1/2'
      )}
    >
      <nav
        className={clsx(
          HeaderStyles.main,
          'flex justify-between gap-2 text-primary-800 dark:text-neutral-100 rounded-full py-2.5 px-6'
        )}
      >
        {HEADER_ITEMS.map((item) => (
          <HeaderMobileMenuItem key={item.id} item={item} />
        ))}
      </nav>
    </div>
  );
}
