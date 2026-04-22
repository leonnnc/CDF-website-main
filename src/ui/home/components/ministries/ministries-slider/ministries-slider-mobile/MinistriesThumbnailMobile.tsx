import Image from 'next/image';

export function MinistriesThumbnailMobile({ image }: Props) {
  return (
    <span className="inline-block align-middle border-4 border-primary-300 rounded-full overflow-hidden h-12 w-12">
      <Image src={image} alt="ministerio" height="40" width="40" className="h-full w-full" />
    </span>
  );
}

type Props = {
  image: string;
};
