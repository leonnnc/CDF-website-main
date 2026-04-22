import AboutStyles from '@ui/home/styles/about/about.module.scss';
import { Section } from '@ui/shared/components/section/Section';
import clsx from 'clsx';

import { ABOUT_CHURCH, ABOUT_MISSION, ABOUT_VALUES } from '@/modules/home/data/about-card.data';

import { AboutBubble } from './AboutBubble';
import { AboutCard } from './AboutCard';

export function About() {
  return (
    <Section id="nosotros" className="relative z-1">
      <div className="relative max-w-wrapper px-4 mx-auto">
        <AboutBubble className="absolute -top-0 -right-28 lg:-top-36 lg:-right-72" />
        <div className="relative">
          <div className="flex flex-col items-center text-center mb-12">
            <h1 className="text-bigger text-neutral-400 font-montserrant font-semibold mb-1">
              Catedral de Fe
            </h1>
            <h2 className="h3 md:text-h1 mb-4 md:mb-6">Una iglesia para ti y tu familia</h2>
            <p className={clsx(AboutStyles.description)}>
              Te damos la bienvenida a nuestra iglesia, anhelando que puedas conocer más a Dios,
              disfrutar de una relación con Él, caminar en los planes que Dios tiene para tu vida y
              ser de bendición para tu familia y para todos los que te rodean. Estamos felices de
              tenerte entre nosotros y deseamos que seas parte de esta gran familia de fe.
            </p>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap items-start justify-center gap-8">
            <AboutCard item={ABOUT_VALUES} />
            <AboutCard className="lg:mt-16" item={ABOUT_CHURCH} />
            <AboutCard item={ABOUT_MISSION} />
          </div>
        </div>
      </div>
    </Section>
  );
}
