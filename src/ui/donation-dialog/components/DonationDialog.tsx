import { DonationViewsProvider } from '@modules/donation-dialog/contexts/DonationViews.context';
import { Dialog } from '@ui/dialog/components/Dialog';

import { DonationVerse } from './donation-quote/DonationQuote';
import { DonationViewPrev } from './donation-view/DonationViewPrev';
import DonationViews from './donation-view/DonationViews';
import { DonationWarning } from './DonationWarning';

export function DonationDialog({ trigger }: Props) {
  return (
    <Dialog trigger={trigger}>
      <div className="mb-6 md:mb-8">
        <DonationViewsProvider>
          <DonationViewPrev />
          <DonationViews />
          <DonationWarning />
        </DonationViewsProvider>
      </div>
      <DonationVerse />
    </Dialog>
  );
}

type Props = {
  trigger: JSX.Element;
};
