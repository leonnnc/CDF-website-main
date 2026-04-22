import { DonationView } from '@modules/donation-dialog/interfaces/donation-view.interface';
import { isTimeInRangeOnDay } from '@modules/shared/helpers/date.helper';
import { DialogTitle } from '@ui/shadcn/components/Dialog';

import DonationOption from '../donation-option/DonationOption';

export function DonationViewMain() {
  const isInDynamis = isTimeInRangeOnDay({ day: 6, startAt: 19, endAt: 22 });

  return (
    <div>
      <DialogTitle>¿Cómo deseas dar?</DialogTitle>
      <div className="flex flex-col gap-4">
        {isInDynamis && <DonationOption text="Yape" viewToShow={DonationView.YAPE} />}
        <DonationOption text="BCP" viewToShow={DonationView.BCP} />
        <DonationOption text="Interbank" viewToShow={DonationView.INTERBANK} />
        <DonationOption text="BBVA" viewToShow={DonationView.BBVA} />
      </div>
    </div>
  );
}
