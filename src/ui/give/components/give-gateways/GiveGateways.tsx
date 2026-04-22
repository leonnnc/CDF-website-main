import { Section } from '@ui/shared/components/section/Section';

import { GiveGatewaysTabs } from './GiveGatewaysTabs';
import { GiveGatewaysWarning } from './GiveGatewaysWarning';
import { GiveGatewaysYape } from './GiveGatewaysYape';

export function GiveGateways() {
  return (
    <Section id="dar" className="bg-primary-200/10">
      <div className="max-w-wrapper px-4 mx-auto">
        <h2 className="text-h3 lg:h2 font-bold mb-6 text-center">
          Contribuye a la obra de Dios hoy
        </h2>
        <p className="text-center mb-12 md:mb-16">
          Tu generosidad hace posible que continuemos compartiendo el evangelio y sirviendo a
          nuestra comunidad. Cada ofrenda, sin importar su tamaño, es una semilla sembrada en el
          Reino de Dios.
        </p>
        <div className="flex flex-col gap-6 md:gap-12">
          <GiveGatewaysTabs />
          <GiveGatewaysWarning />
          <GiveGatewaysYape />
        </div>
      </div>
    </Section>
  );
}
