import { createCourseMessage } from '@modules/home/helpers/course.helper';
import { Course } from '@modules/home/interfaces/course.interface';
import { ArrowRightIcon } from '@ui/shared/components/icon/outline';
import clsx from 'clsx';
import Image from 'next/image';

import { CourseCardBadge } from './CourseCardBadge';
import { CourseCardDate } from './CourseCardDate';

export function CourseCard({ course }: Props) {
  const { title, description, teacher, startDate } = course;

  const whatsappMessage = createCourseMessage(title);

  return (
    <article className="relative">
      <div
        className={clsx(
          'relative h-full p-4 lg:p-8 pr-24 lg:pr-28 bg-neutral-100/50 border border-neutral-300/50 rounded-3xl overflow-hidden hover:bg-primary-100/15 transition-colors',
          'dark:bg-neutral-100/10 border-neutral-300/15 dark:hover:bg-neutral-100/15'
        )}
      >
        <div className="flex flex-col gap-4 lg:gap-6 justify-between h-full">
          <div>
            <h3
              className={clsx(
                'text-bigger font-semibold text-neutral-900 lg:h4 mb-2',
                'dark:text-neutral-100'
              )}
            >
              {title}
            </h3>
            <p className="text-smaller lg:text-small line-clamp-3 mb-2">{description}</p>
            <CourseCardDate date={startDate} />
          </div>
          <a
            className={clsx(
              'flex items-center gap-2 font-semibold text-primary-400 text-smaller',
              'dark:text-yellow-300'
            )}
            href={`https://api.whatsapp.com/send?phone=51912415445&text=${whatsappMessage}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            Más información
            <span className="h-4 w-4 bg-primary-400 dark:bg-yellow-300 text-white rounded-full grid place-items-center dark:text-primary-900">
              <ArrowRightIcon height="14" width="14" />
            </span>
          </a>
        </div>
        <Image
          className="absolute bottom-0 right-0 w-20 lg:w-32"
          src={teacher.image}
          alt={teacher.name}
          width={200}
          height={200}
        />
      </div>
      <CourseCardBadge date={startDate} />
    </article>
  );
}

type Props = {
  course: Course;
};
