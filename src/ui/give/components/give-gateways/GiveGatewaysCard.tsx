import GiveAccountsTabsStyles from '@ui/give/styles/give-gateways/give-gateways-card.module.scss';
import clsx from 'clsx';
import { ReactNode } from 'react';

const CARD_DECORATION = [
  GiveAccountsTabsStyles.decorationYellow,
  GiveAccountsTabsStyles.decorationGreen,
  GiveAccountsTabsStyles.decorationDouble,
];

export function GiveGatewaysCard({ children, decoration = 0, className }: Props) {
  const decorationClass =
    CARD_DECORATION[decoration % CARD_DECORATION.length] || CARD_DECORATION[0];

  return (
    <div
      className={clsx(
        GiveAccountsTabsStyles.main,
        decorationClass,
        className,
        'relative rounded-2xl overflow-hidden'
      )}
    >
      <div className="bg-primary-900/50 p-4 md:p-8 backdrop-blur-xl w-full h-full">{children}</div>
    </div>
  );
}

type Props = {
  children: ReactNode;
  className?: string;
  decoration?: number;
};
