import { Event } from '@modules/home/interfaces/event.interface';

import { strapiGet } from '../lib/strapi.lib';

type StrapiEvent = {
  id: number;
  documentId: string;
  title: string;
  description: string;
  ministry: string;
  date: string;
  image: { url: string } | null;
  link: string | null;
  isRegistrationLink: boolean;
};

export async function getEvents(): Promise<Event[]> {
  try {
    const res = await strapiGet<StrapiEvent[]>('events', {
      populate: 'image',
      'sort': 'createdAt:desc',
    });

    return res.data.map((item) => ({
      id: String(item.documentId),
      title: item.title,
      description: item.description,
      details: {
        ministry: item.ministry,
        date: item.date,
      },
      image: item.image
        ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${item.image.url}`
        : '/images/home/events/fallback-event.webp',
      link: item.link ?? undefined,
      isRegistrationLink: item.isRegistrationLink,
    }));
  } catch {
    return [];
  }
}
