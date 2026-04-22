import CoursesSectionStyles from '@ui/home/styles/courses/courses-section.module.scss';
import { ButtonLink } from '@ui/shared/components/button/ButtonLink';
import { SearchIcon } from '@ui/shared/components/icon/outline';
import { Section } from '@ui/shared/components/section/Section';
import clsx from 'clsx';

import { CoursesGrid } from './CoursesGrid';

export function CoursesSection() {
  return (
    <Section className="relative">
      <div className="max-w-[1416px] px-4 mx-auto">
        <div className="mb-16">
          <h2 className="text-h3 md:text-h1 text-center font-bold font-montserrant text-neutral-900 dark:text-neutral-100 mb-4">
            Nuestros cursos
          </h2>
          <p className={clsx(CoursesSectionStyles.description, 'text-center mx-auto')}>
            Ahora que eres parte de nuestra familia, te invitamos a conocer los diferentes cursos
            que tenemos para que crezcas en fe.
          </p>
        </div>
        <div className="flex flex-col gap-16 items-center">
          <CoursesGrid />
          <ButtonLink
            href="/courses"
            className="flex-row-reverse"
            icon={<SearchIcon height="14" width="14" className="md:h-6 md:w-6" />}
          >
            Ver todas las escuelas
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
