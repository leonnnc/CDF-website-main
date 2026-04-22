'use client';
import { useDontaionViewsContext } from '@modules/donation-dialog/contexts/DonationViews.context';
import { DonationView } from '@modules/donation-dialog/interfaces/donation-view.interface';

import { DonationViewBBVA } from './DonationViewBBVA';
import { DonationViewBcp } from './DonationViewBcp';
import { DonationViewInterbank } from './DonationViewInterbank';
import { DonationViewMain } from './DonationViewMain';
import { DonationViewYape } from './DonationViewYape';

export default function DonationViews() {
  const { view } = useDontaionViewsContext();

  if (view === DonationView.MAIN) {
    return <DonationViewMain />;
  }

  if (view === DonationView.INTERBANK) {
    return <DonationViewInterbank />;
  }

  if (view === DonationView.BBVA) {
    return <DonationViewBBVA />;
  }

  if (view === DonationView.YAPE) {
    return <DonationViewYape />;
  }

  return <DonationViewBcp />;
}
