import { Course } from '@modules/home/interfaces/course.interface';

import { strapiGet } from '../lib/strapi.lib';

type StrapiCourse = {
  documentId: string;
  title: string;
  description: string;
  teacherName: string;
  teacherImage: { url: string } | null;
  startDate: string;
  url: string;
};

export async function getCourses(): Promise<Course[]> {
  try {
    const res = await strapiGet<StrapiCourse[]>('courses', {
      populate: 'teacherImage',
      'sort': 'startDate:asc',
    });

    return res.data.map((item) => ({
      id: item.documentId,
      title: item.title,
      description: item.description,
      teacher: {
        name: item.teacherName,
        image: item.teacherImage
          ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${item.teacherImage.url}`
          : '',
      },
      startDate: item.startDate,
      url: item.url,
    }));
  } catch {
    return [];
  }
}
