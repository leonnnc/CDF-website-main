import { DonationBankAcccount } from '@modules/donation-dialog/interfaces/donation-bank-account.interface';
import clsx from 'clsx';

import DonationBankAccount from './DonationBankAccount';

export function DonationMethodBank({ accounts, className }: Props) {
  return (
    <div className={clsx(className, 'flex flex-col gap-4')}>
      {accounts.map((account) => {
        return <DonationBankAccount key={account.id} account={account} />;
      })}
    </div>
  );
}

type Props = {
  accounts: DonationBankAcccount[];
  className?: string;
};
