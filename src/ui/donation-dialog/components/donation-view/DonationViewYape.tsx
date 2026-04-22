import { DialogTitle } from '@ui/shadcn/components/Dialog';

import { DonationQr } from '../donation-gateway/DonationQr';

export function DonationViewYape() {
  return (
    <div>
      <DialogTitle>Yape</DialogTitle>
      <DonationQr
        qrCode="/images/donation-dialog/yape-qr.webp"
        accountOwner="Joel Fernando Julca Sobrino"
      />
    </div>
  );
}
