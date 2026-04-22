import { HeaderItem } from '@modules/header/interfaces/item.interface';
import Link from 'next/link';

export function HeaderDesktopItem({ item }: Props) {
  const { content, link } = item;

  return (
    <Link href={link} className="font-medium text-bigger">
      {content}
    </Link>
  );
}

type Props = {
  item: HeaderItem;
};
