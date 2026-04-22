import { HeaderItem } from '@modules/header/interfaces/item.interface';
import Link from 'next/link';

export function HeaderMobileMenuItem({ item }: Props) {
  const { icon, content, link } = item;

  return (
    <Link href={link} className="flex flex-col items-center text-tiny md:text-smaller font-medium">
      {icon}
      {content}
    </Link>
  );
}

type Props = {
  item: HeaderItem;
};
