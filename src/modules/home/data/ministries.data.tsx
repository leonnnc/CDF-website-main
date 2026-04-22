import { SyncSliderItem } from '@modules/sync-slider/interfaces/sync-slider.interface';

import { MinistriesPanelMobile } from '@/ui/home/components/ministries/ministries-slider/ministries-slider-mobile/MinistriesPanelMobile';
import { MinistriesThumbnailMobile } from '@/ui/home/components/ministries/ministries-slider/ministries-slider-mobile/MinistriesThumbnailMobile';

import {
  MINISTRY_PANEL_DNS,
  MINISTRY_PANEL_DYNAMIS,
  MINISTRY_PANEL_LIFE,
  MINISTRY_PANEL_MATRIMONIOS,
  MINISTRY_PANEL_VIDA_KIDS,
} from './ministries-panel.data';

export const MINISTRIES_SLIDES: SyncSliderItem[] = [
  {
    id: 'vida-kids',
    panel: <MinistriesPanelMobile item={MINISTRY_PANEL_VIDA_KIDS} />,
    thumbnail: <MinistriesThumbnailMobile image="/images/home/ministries/logo-vida-kids.webp" />,
  },
  {
    id: 'dns',
    panel: <MinistriesPanelMobile item={MINISTRY_PANEL_DNS} />,
    thumbnail: <MinistriesThumbnailMobile image="/images/home/ministries/logo-dns.webp" />,
  },
  {
    id: 'dynamis',
    panel: <MinistriesPanelMobile item={MINISTRY_PANEL_DYNAMIS} />,
    thumbnail: <MinistriesThumbnailMobile image="/images/home/ministries/logo-dynamis.webp" />,
  },
  {
    id: 'life',
    panel: <MinistriesPanelMobile item={MINISTRY_PANEL_LIFE} />,
    thumbnail: <MinistriesThumbnailMobile image="/images/home/ministries/logo-life.webp" />,
  },
  {
    id: 'otro',
    panel: <MinistriesPanelMobile item={MINISTRY_PANEL_MATRIMONIOS} />,
    thumbnail: <MinistriesThumbnailMobile image="/images/home/ministries/logo-marriages.webp" />,
  },
];
