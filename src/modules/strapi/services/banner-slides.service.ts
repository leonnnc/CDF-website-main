import { BannerSlide } from '@modules/banner-slider/interface/slide.interface';

import { strapiGet } from '../lib/strapi.lib';

type StrapiBannerSlide = {
  documentId: string;
  alt: string;
  image: { url: string } | null;
  link: string | null;
  order: number;
};

export async function getBannerSlides(): Promise<BannerSlide[]> {
  try {
    const res = await strapiGet<StrapiBannerSlide[]>('banner-slides', {
      populate: 'image',
      'sort': 'order:asc',
    });

    return res.data
      .filter((item) => item.image !== null)
      .map((item) => ({
        alt: item.alt,
        image: `${process.env.NEXT_PUBLIC_STRAPI_URL}${item.image!.url}`,
        link: item.link ?? undefined,
      }));
  } catch {
    return [];
  }
}
