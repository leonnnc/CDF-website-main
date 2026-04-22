import PodcastSectionStyles from '@ui/home/styles/podcast/podcast-section.module.scss';
import { Section } from '@ui/shared/components/section/Section';
import clsx from 'clsx';

import PodcastSlider from './PodcastSlider';

export function PodcastSection() {
  return (
    <Section id="podcast" className="relative pb-0">
      <div className="max-w-wrapper px-4 mx-auto overflow-hidden pb-16">
        <div
          className={clsx(PodcastSectionStyles.about, 'text-center md:text-left mb-24 md:mb-16')}
        >
          <p className="text-bigger text-neutral-400 font-montserrant font-semibold mb-1">
            Nuestros devocionales
          </p>
          <h2 className="h3 lg:h1 mb-6">Café y gracia</h2>
          <p>
            Un podcast donde cada episodio es una invitación a crecer espiritualmente mientras
            disfrutamos de una taza de café y compartimos momentos de conexión con Dios.
          </p>
        </div>
        <PodcastSlider />
      </div>
    </Section>
  );
}
