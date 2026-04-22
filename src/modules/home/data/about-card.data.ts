import { BalanceIcon, BrowserIcon, ChurchIcon } from '@/ui/shared/components/icon/outline';

import { AboutFeature } from '../interfaces/about-card.interface';

export const ABOUT_VALUES: AboutFeature = {
  title: 'Visión',
  description:
    'Ser una iglesia que impacta a la sociedad con el mensaje del amor de Dios y la manifestación del poder del Espíritu Santo.',
  icon: BalanceIcon,
};

export const ABOUT_CHURCH: AboutFeature = {
  title: 'Nuestra iglesia',
  description:
    'Somos una iglesia donde la presencia de Dios se manifiesta, su amor te llena, te transforma y te bendice a ti y a toda tu familia.',
  icon: ChurchIcon,
};

export const ABOUT_MISSION: AboutFeature = {
  title: 'Misión',
  description:
    'Guiar familias a Cristo por el Espíritu Santo y su palabra. para que cumplan el propósito de Dios en la iglesia y la sociedad.',
  icon: BrowserIcon,
};
