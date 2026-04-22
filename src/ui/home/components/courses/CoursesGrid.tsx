import { COURSES } from '@modules/home/data/courses.data';

import { CourseCard } from './course-card/CourseCard';

export function CoursesGrid() {
  const courses = COURSES.slice(0, 6);

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {courses.map((course) => {
        return <CourseCard key={course.id} course={course} />;
      })}
    </div>
  );
}
