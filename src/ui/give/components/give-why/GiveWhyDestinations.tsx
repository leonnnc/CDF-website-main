import { GIVE_WHY_DESTINATIONS } from '@modules/give/data/give-why.data';
import GiveWhyDestinationsStyles from '@ui/give/styles/give-why/give-why-destinations.module.scss';
import clsx from 'clsx';

import { GiveWhyDestinationItem } from './GiveWhyDestinationItem';

export function GiveWhyDestinations() {
  return (
    <div className={clsx(GiveWhyDestinationsStyles.main, 'relative grid md:grid-cols-2')}>
      {GIVE_WHY_DESTINATIONS.map((item) => {
        return <GiveWhyDestinationItem key={item.id} item={item} />;
      })}
    </div>
  );
}
