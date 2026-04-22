import { BCP_ACCOUNTS } from '@modules/donation-dialog/data/donation-bank-account.data';
import { DialogTitle } from '@ui/shadcn/components/Dialog';

import { DonationMethodBank } from '../donation-gateway/DonationBank';

export function DonationViewBcp() {
  return (
    <div>
      <DialogTitle>Cuentas BCP</DialogTitle>
      <DonationMethodBank accounts={BCP_ACCOUNTS} />
    </div>
  );
}
