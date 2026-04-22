import { copyTextToClipboard } from '@modules/shared/helpers/clipboard.helper';
import { CheckCircleIcon, CopyIcon } from '@ui/shared/components/icon/outline';
import { useState } from 'react';

export function DonationBankAccountNumber({ accountNumber }: Props) {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const rawAccountNumber = accountNumber.replace(/-/g, '');

  async function handleCopy() {
    const isInClipboard = await copyTextToClipboard(rawAccountNumber);

    if (!isInClipboard) return;

    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1000);
  }

  return (
    <div className="flex items-center gap-2">
      <p>{accountNumber}</p>
      <button onClick={() => handleCopy()}>
        {!isCopied && <CopyIcon height="24" width="24" />}
        {isCopied && (
          <span className="flex items-center gap-1">
            <CheckCircleIcon height="24" width="24" />
            <span>Copiado</span>
          </span>
        )}
      </button>
    </div>
  );
}

type Props = {
  accountNumber: string;
};
