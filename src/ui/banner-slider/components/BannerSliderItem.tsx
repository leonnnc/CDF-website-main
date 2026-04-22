'use client';

import { BannerSlide } from '@modules/banner-slider/interface/slide.interface';
import { getIsExternalUrl } from '@modules/shared/helpers/link.helper';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export function BannerSliderItem({ item }: Props) {
  const { alt, image, link } = item;
  const router = useRouter();

  const isExternalUrl = getIsExternalUrl(link);

  const handleOnClick = () => {
    if (!link) return;

    if (isExternalUrl) {
      window.open(link, '_blank', 'noopener,noreferrer');
      return;
    }

    router.push(link);
  };

  return (
    <div className="w-full overflow-hidden mt-16" onClick={handleOnClick}>
      <Image
        src={image}
        alt={alt}
        className="h-full w-full object-cover relative pointer-events-none"
        width="1920"
        height="700"
      />
    </div>
  );
}

type Props = {
  item: BannerSlide;
};
