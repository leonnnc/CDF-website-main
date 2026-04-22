import MinistriesStyles from '@ui/home/styles/ministries/ministries.module.scss';
import { Section } from '@ui/shared/components/section/Section';
import clsx from 'clsx';

import MinistriesSlider from './ministries-slider/MinistriesSlider';

// TODO: Add "find my ministry" function
export function Ministries() {
  return (
    <Section id="ministerios" className="flex justify-center">
      <div className="flex flex-col items-center gap-12 md:gap-16 max-w-wrapper px-4 w-full">
        <div className="flex flex-col items-center text-center">
          <p className="text-bigger text-neutral-400 font-montserrant font-semibold mb-1">
            Catedral de Fe
          </p>
          <h2 className="h3 md:text-h1 mb-4 md:mb-6">Ministerios</h2>
          <p className={clsx(MinistriesStyles.description, 'mb-8 md:mb-0')}>
            Sabemos que cada etapa de la vida es única, por eso, tenemos grupos que se adaptan a
            cada edad. Desde los más pequeños hasta los adultos mayores, cada miembro de la familia
            encontrará un lugar donde sentirse valorado y apoyado.
          </p>
          {/* <Button
            className="flex-row-reverse md:hidden"
            icon={<SearchIcon height="14" width="14" className="md:h-6 md:w-6" />}
          >
            Descubrir mi ministerio
          </Button> */}
        </div>
        <MinistriesSlider />
        {/* <Button
          className="flex-row-reverse hidden md:flex"
          icon={<SearchIcon height="14" width="14" className="md:h-6 md:w-6" />}
        >
          Descubrir mi ministerio
        </Button> */}
      </div>
    </Section>
  );
}
