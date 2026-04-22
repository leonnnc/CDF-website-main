import { DonationBankAcccount } from '@modules/donation-dialog/interfaces/donation-bank-account.interface';
import clsx from 'clsx';

import { DonationBankAccountNumber } from './DonationBankAccountNumber';

export default function DonationBankAccount({ account }: Props) {
  const { accountNumber, cci, type } = account;

  return (
    <article
      className={clsx(
        'p-3 md:p-4 rounded-2xl text-small md:text-normal bg-primary-200/10 text-neutral-800',
        'dark:bg-primary-700 dark:text-neutral-100'
      )}
    >
      <p className={clsx('font-semibold text-primary-400 mb-4', 'dark:text-yellow-200')}>{type}</p>
      <div className="flex flex-col gap-3">
        <DonationBankAccountNumber accountNumber={accountNumber} />
        {cci && (
          <div className="flex gap-2">
            <p>CCI:</p>
            <DonationBankAccountNumber accountNumber={cci} />
          </div>
        )}
      </div>
    </article>
  );
}

type Props = {
  account: DonationBankAcccount;
};
