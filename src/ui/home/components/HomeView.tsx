import { BannerSlider } from '@ui/banner-slider/components/BannerSlider';

import { About } from './about/About';
import { Events } from './events/Events';
import { Ministries } from './ministries/Ministries';
import { PodcastSection } from './podcast/PodcastSection';

export function HomeView() {
  return (
    <main>
      <BannerSlider />
      <About />
      <Ministries />
      <Events />
      <PodcastSection />
    </main>
  );
}
