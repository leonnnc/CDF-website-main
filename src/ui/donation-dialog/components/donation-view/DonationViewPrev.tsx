'use client';

import { useDontaionViewsContext } from '@modules/donation-dialog/contexts/DonationViews.context';
import { DonationView } from '@modules/donation-dialog/interfaces/donation-view.interface';
import { ArrowLeftIcon } from '@ui/shared/components/icon/outline';

export function DonationViewPrev() {
  const { view, setView } = useDontaionViewsContext();

  if (view === DonationView.MAIN) return null;

  return (
    <button
      className="absolute top-4 left-4 flex items-center gap-0.5"
      onClick={() => setView(DonationView.MAIN)}
    >
      <ArrowLeftIcon height="16" width="16" /> Volver
    </button>
  );
}
