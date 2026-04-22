import { GiveAcccount } from '@modules/give/interfaces/give-account.interface';

import { GiveGatewaysAccountNumber } from './GIveGatewaysAccountNumber';

export function GiveGatewaysAccount({ item }: Props) {
  const { type, accountNumber, cci } = item;

  return (
    <div>
      <p className="text-bigger md:text-h4 font-bold mb-4 md:mb-8">{type}</p>
      <div className="flex flex-col gap-4">
        {accountNumber && (
          <GiveGatewaysAccountNumber title="Número de cuenta" accountNumber={accountNumber} />
        )}
        {cci && <GiveGatewaysAccountNumber title="CCI" accountNumber={cci} />}
      </div>
    </div>
  );
}

type Props = {
  item: GiveAcccount;
};
