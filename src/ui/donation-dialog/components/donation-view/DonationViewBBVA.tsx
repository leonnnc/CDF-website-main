import { BBVA_ACCOUNTS } from '@modules/donation-dialog/data/donation-bank-account.data';
import { DialogTitle } from '@ui/shadcn/components/Dialog';

import { DonationMethodBank } from '../donation-gateway/DonationBank';

export function DonationViewBBVA() {
  return (
    <div>
      <DialogTitle>Cuentas BBVA</DialogTitle>
      <DonationMethodBank accounts={BBVA_ACCOUNTS} />
    </div>
  );
}
