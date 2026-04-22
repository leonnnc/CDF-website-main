import { ReactNode } from 'react';

export type SyncSliderItem = {
  id: string;
  panel: ReactNode;
  thumbnail: ReactNode;
};

export type SyncSliderThumbnail = {
  thumbnailsContainerClass?: string;
};

export type SyncSliderPanel = {
  panelsSliderClass?: string;
  panelsContainerClass?: string;
};
