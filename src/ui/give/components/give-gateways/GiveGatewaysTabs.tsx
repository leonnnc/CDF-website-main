import { GIVE_ACCOUNTS } from '@modules/give/data/give-accounts.data';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@ui/shadcn/components/tabs';
import clsx from 'clsx';

import { GiveGatewaysAccount } from './GiveGatewaysAccount';
import { GiveGatewaysCard } from './GiveGatewaysCard';

export function GiveGatewaysTabs({ className }: Props) {
  return (
    <Tabs defaultValue={GIVE_ACCOUNTS[0].id} className={clsx(className)}>
      <div className="flex justify-center">
        <TabsList className="gap-6 p-2 bg-primary-900 rounded-full border border-primary-600 mb-8 md:mb-16">
          {GIVE_ACCOUNTS.map((account) => {
            const { bank } = account;

            return (
              <TabsTrigger
                key={account.id}
                value={account.id}
                className={clsx(
                  'rounded-full border border-transparent',
                  'data-[state=active]:bg-primary-300/20 data-[state=active]:border-primary-300 font-semibold'
                )}
              >
                {bank}
              </TabsTrigger>
            );
          })}
        </TabsList>
      </div>
      {GIVE_ACCOUNTS.map((account) => {
        const { accounts } = account;

        return (
          <TabsContent key={account.id} value={account.id} className="w-full">
            <div className="grid md:grid-cols-2 gap-6">
              {accounts.map((item, index) => {
                return (
                  <GiveGatewaysCard key={item.id} decoration={index % 3}>
                    <GiveGatewaysAccount item={item} />
                  </GiveGatewaysCard>
                );
              })}
            </div>
          </TabsContent>
        );
      })}
    </Tabs>
  );
}

type Props = {
  className?: string;
};
