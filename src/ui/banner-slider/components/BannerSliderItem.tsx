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
    <div
      className="w-full h-full overflow-hidden"
      style={{ cursor: link ? 'pointer' : 'default' }}
      onClick={handleOnClick}
    >
      <Image
        src={image}
        alt={alt}
        className="w-full h-full object-cover pointer-events-none"
        fill
        priority
        sizes="100vw"
      />
    </div>
  );
}

type Props = {
  item: BannerSlide;
};
