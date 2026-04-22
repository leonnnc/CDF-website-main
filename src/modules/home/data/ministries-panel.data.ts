import { MinistryPanel } from '../interfaces/ministries-panel.interface';

export const MINISTRY_PANEL_VIDA_KIDS: MinistryPanel = {
  image: '/images/home/ministries/panel-vida-kids.webp',
  logo: '/images/home/ministries/logo-vida-kids.webp',
  title: 'Vida kids',
  description: 'En Vida Kids tus niños aprenden a conocer a Jesús y su infinito amor.',
  link: 'https://www.instagram.com/vidakids.cdf/',
  schedules: ['Domingo de 11am a 1pm'],
};

export const MINISTRY_PANEL_DNS: MinistryPanel = {
  image: '/images/home/ministries/panel-dns.webp',
  logo: '/images/home/ministries/logo-dns.webp',
  title: 'DNS',
  description: 'Adolescentes de Catedral de Fe',
  link: 'https://www.instagram.com/dns.adolescentescdf/',
  schedules: ['Sábado de 3:30pm a 5:30pm'],
};

export const MINISTRY_PANEL_DYNAMIS: MinistryPanel = {
  image: '/images/home/ministries/panel-dynamis.webp',
  logo: '/images/home/ministries/logo-dynamis.webp',
  title: 'Dynamis',
  description: 'Ministerio de jóvenes',
  link: 'https://www.instagram.com/dynamiscdf/',
  schedules: ['Sábado de 7:30pm a 9:00pm'],
};

export const MINISTRY_PANEL_LIFE: MinistryPanel = {
  image: '/images/home/ministries/panel-life.webp',
  logo: '/images/home/ministries/logo-life.webp',
  title: 'Life',
  description: 'Ministerio de jóvenes adultos',
  link: 'https://www.instagram.com/lifecdf/',
  schedules: ['Sábado de 6pm a 7:30pm'],
};

export const MINISTRY_PANEL_MATRIMONIOS: MinistryPanel = {
  image: '/images/home/ministries/panel-marriages.webp',
  logo: '/images/home/ministries/logo-marriages.webp',
  title: 'Matrimonios',
  description: 'Ministerio segun el tiempo de casados',
};

export const MINISTRY_PANELS: MinistryPanel[] = [
  MINISTRY_PANEL_VIDA_KIDS,
  MINISTRY_PANEL_DNS,
  MINISTRY_PANEL_DYNAMIS,
  MINISTRY_PANEL_LIFE,
  MINISTRY_PANEL_MATRIMONIOS,
];
