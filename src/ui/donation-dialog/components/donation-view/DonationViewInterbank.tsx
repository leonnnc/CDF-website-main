import { INTERBANK_ACCOUNTS } from '@modules/donation-dialog/data/donation-bank-account.data';
import { DialogTitle } from '@ui/shadcn/components/Dialog';

import { DonationMethodBank } from '../donation-gateway/DonationBank';

export function DonationViewInterbank() {
  return (
    <div>
      <DialogTitle>Cuentas Interbank</DialogTitle>
      <DonationMethodBank accounts={INTERBANK_ACCOUNTS} />
    </div>
  );
}
