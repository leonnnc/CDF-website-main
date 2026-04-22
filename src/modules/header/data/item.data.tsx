import { HeaderItem } from '@modules/header/interfaces/item.interface';
import {
  CalendarIcon,
  ChurchIcon,
  CommunityIcon,
  MicrophoneIcon,
} from '@ui/shared/components/icon/outline';

export const HEADER_ITEMS: HeaderItem[] = [
  {
    id: 'nosotros',
    content: 'Nosotros',
    icon: <ChurchIcon />,
    link: '/#nosotros',
  },
  {
    id: 'ministerios',
    content: 'Ministerios',
    icon: <CommunityIcon />,
    link: '/#ministerios',
  },
  {
    id: 'eventos',
    content: 'Eventos',
    icon: <CalendarIcon />,
    link: '/#eventos',
  },
  {
    id: 'podcast',
    content: 'Podcast',
    icon: <MicrophoneIcon />,
    link: '/#podcast',
  },
];
