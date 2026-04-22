'use client';

import { ButtonLink } from '@ui/shared/components/button/ButtonLink';
import { usePathname } from 'next/navigation';

export function HeaderGiveButton() {
  const pathname = usePathname();
  const isGivePage = pathname === '/dar';

  return (
    <ButtonLink
      href={isGivePage ? '/dar#dar' : '/dar'}
      className="button-small px-5 md:py-2 md:px-8 md:text-normal bg-yellow-300 dark:bg-yellow-300 transition-transform text-yellow-900 uppercase"
    >
      Dar
    </ButtonLink>
  );
}
