import { Section } from '@ui/shared/components/section/Section';

import { GivePromisesCarousel } from './GivePromisesCarousel';

export function GivePromises() {
  return (
    <Section>
      <div className="max-w-wrapper px-4 mx-auto">
        <h2 className="text-h3 lg:h2 font-bold mb-12 lg:mb-16 text-center">
          Promesas para los que dan
        </h2>
        <GivePromisesCarousel />
      </div>
    </Section>
  );
}
