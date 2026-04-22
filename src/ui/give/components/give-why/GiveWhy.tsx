import { Section } from '@ui/shared/components/section/Section';

import { GiveWhyBanner } from './GiveWhyBanner';
import { GiveWhyDestinations } from './GiveWhyDestinations';

export function GiveWhy() {
  return (
    <Section className="bg-primary-200/10">
      <div className="max-w-wrapper px-4 mx-auto">
        <h2 className="text-h3 lg:h2 font-bold mb-12 lg:mb-16 text-center">¿Por qué dar?</h2>
        <div className="flex flex-col gap-12 md:gap-16">
          <GiveWhyBanner />
          <GiveWhyDestinations />
        </div>
      </div>
    </Section>
  );
}
