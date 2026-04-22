'use client';

import { copyTextToClipboard } from '@modules/shared/helpers/clipboard.helper';
import { CheckCircleIcon, CopyIcon } from '@ui/shared/components/icon/outline';
import clsx from 'clsx';
import { useState } from 'react';

export function GiveGatewaysAccountNumber({ title, accountNumber, className }: Props) {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const rawAccountNumber = accountNumber.replace(/-/g, '');

  async function handleCopy() {
    const isInClipboard = await copyTextToClipboard(rawAccountNumber);

    if (!isInClipboard) return;

    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1000);
  }

  return (
    <div className={clsx(className)}>
      <p className="text-smaller md:text-small text-neutral-400">{title}:</p>
      <div className="flex items-center gap-2">
        <p className="font-semibold">{accountNumber}</p>
        <button onClick={() => handleCopy()} className="text-yellow-300">
          {!isCopied && <CopyIcon height="24" width="24" />}
          {isCopied && (
            <span className="flex items-center gap-1">
              <CheckCircleIcon height="24" width="24" />
              <span className="text-small">¡Copiado!</span>
            </span>
          )}
        </button>
      </div>
    </div>
  );
}

type Props = {
  title: string;
  accountNumber: string;
  className?: string;
};
