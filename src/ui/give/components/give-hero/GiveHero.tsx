import 'animate.css';

import { CubesIcon, SportBaseballIcon } from '@icons/solid';
import GiveHeroStyles from '@ui/give/styles/give-hero/give-hero.module.scss';
import { ButtonLink } from '@ui/shared/components/button/ButtonLink';
import { Section } from '@ui/shared/components/section/Section';
import clsx from 'clsx';

export function GiveHero() {
  return (
    <Section className={clsx(GiveHeroStyles.main, 'flex justify-center')}>
      <div className="relative flex justify-center text-center max-w-wrapper px-4 w-full">
        <div
          className={clsx(
            GiveHeroStyles.ball,
            'absolute bottom-0 md:top-1/3 left-0 md:-left-8 -translate-x-full'
          )}
        >
          <SportBaseballIcon
            fill="#7F38D2"
            height="60"
            width="60"
            className="animate__animated animate__fadeIn"
          />
        </div>
        <div className={clsx(GiveHeroStyles.cubes, 'absolute right-0 bottom-1/2 md:bottom-1/3')}>
          <CubesIcon
            fill="#4ADE80"
            height="80"
            width="80"
            className="animate__animated animate__fadeIn"
          />
        </div>
        <div className={clsx(GiveHeroStyles.circle, 'absolute left-0 top-0 ')}>
          <div className="h-20 w-20 md:h-40 md:w-40 rounded-full bg-yellow-400 animate__animated animate__fadeIn" />
        </div>
        <div className={clsx(GiveHeroStyles.content, 'flex flex-col items-center')}>
          <h1 className="h3 md:h1 mb-6 animate__animated animate__fadeInUp">
            Dar es un acto de adoración
          </h1>
          <p
            className={clsx(
              GiveHeroStyles.description,
              'mb-14 animate__animated animate__fadeInUp'
            )}
          >
            Descubre los principios bíblicos sobre la generosidad y cómo tu ofrenda contribuye a la
            obra de Dios
          </p>
          <ButtonLink
            href="/dar#dar"
            className={clsx(
              GiveHeroStyles.button,
              '!bg-yellow-300 text-yellow-900',
              'animate__animated animate__fadeInUp'
            )}
          >
            Dar ahora
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
