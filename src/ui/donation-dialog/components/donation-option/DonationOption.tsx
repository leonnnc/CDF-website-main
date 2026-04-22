'use client';

import { useDontaionViewsContext } from '@modules/donation-dialog/contexts/DonationViews.context';
import { DonationView } from '@modules/donation-dialog/interfaces/donation-view.interface';
import { ButtonType } from '@modules/shared/interfaces/button.interface';
import { Button } from '@ui/shared/components/button';

export default function DonationOption({ viewToShow, text }: Props) {
  const { setView } = useDontaionViewsContext();

  return (
    <Button
      onClick={() => setView(viewToShow)}
      variant={ButtonType.GHOST}
      className="button-ghost py-2"
    >
      {text}
    </Button>
  );
}

type Props = {
  viewToShow: DonationView;
  text: string;
};
