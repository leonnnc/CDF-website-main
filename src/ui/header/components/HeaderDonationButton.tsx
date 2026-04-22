import { DonationDialog } from '@ui/donation-dialog/components/DonationDialog';
import { Button } from '@ui/shared/components/button';

export function HeaderDonationButton() {
  return (
    <DonationDialog
      trigger={
        <Button className="button-small px-5 md:py-2 md:px-8 md:text-normal bg-yellow-300 dark:bg-yellow-300 transition-transform text-yellow-900 uppercase">
          Dar
        </Button>
      }
    />
  );
}
