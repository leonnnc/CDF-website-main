'use client';

import { CAFE_Y_GRACIA_PLAYLIST } from '@modules/home/data/podcast.data';
import dynamic from 'next/dynamic';

const PlaylistSlider = dynamic(
  () => import('@ui/playlist-slider/components/PlaylistSlider').then((mod) => mod.PlaylistSlider),
  {
    ssr: false,
  }
);

export default function PodcastSlider() {
  return <PlaylistSlider items={CAFE_Y_GRACIA_PLAYLIST} />;
}
