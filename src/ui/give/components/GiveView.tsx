import { GiveAbout } from './give-about/GiveAbout';
import { GiveGateways } from './give-gateways/GiveGateways';
import { GiveHero } from './give-hero/GiveHero';
import { GiveLearn } from './give-learn/GiveLearn';
import { GivePromises } from './give-promises/GivePromises';
import { GiveWhy } from './give-why/GiveWhy';

export function GiveView() {
  return (
    <main>
      <GiveHero />
      <GiveAbout />
      <GiveWhy />
      <GiveLearn />
      <GiveGateways />
      <GivePromises />
    </main>
  );
}
