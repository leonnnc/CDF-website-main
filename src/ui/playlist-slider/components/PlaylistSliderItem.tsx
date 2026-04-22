import { FALLBACK_PLAYLIST_ITEM_POSTER } from '@modules/playlist-slider/constants/playlist.constant';
import { PlaylistItem } from '@modules/playlist-slider/interfaces/playlist.interface';
import PlaylistSliderItemStyles from '@ui/playlist-slider/styles/playlist-slider-item.module.scss';
import { MusicNoteIcon } from '@ui/shared/components/icon/outline';
import { PlayIcon } from '@ui/shared/components/icon/solid';
import clsx from 'clsx';
import Image from 'next/image';
import { CSSProperties } from 'react';

import { cn } from '@/modules/shadcn/helpers/shadcn.helper';

export function PlaylistSliderItem({ item }: Props) {
  const { id, title, image, artists, url } = item;

  const poster = image || FALLBACK_PLAYLIST_ITEM_POSTER;

  return (
    <a href={url} rel="noreferrer noopener" target="_blank">
      <article
        className={clsx(
          PlaylistSliderItemStyles.main,
          'flex items-end p-4 rounded-3xl overflow-hidden aspect-[3/4] bg-cover bg-center mb-6'
        )}
        aria-labelledby={`item-title-${id}`}
        style={{ '--background-image': `url(${poster})` } as CSSProperties}
      >
        <div className="flex flex-col">
          <div className="text-neutral-100 mb-1 md:mb-6 self-end">
            <PlayIcon height="56" width="56" className="h-11 w-11 md:h-14 md:w-14" />
          </div>
          <p className="text-normal font-semibold leading-normal lg:text-h4 font-montserrant text-neutral-100 mb-2 md:mb-4">
            {title}
          </p>
          <div className="flex items-center gap-1 text-neutral-300">
            <MusicNoteIcon />
            <p className="text-smaller md:text-small line-clamp-1">{artists}</p>
          </div>
        </div>
      </article>
      <div className={cn('w-full h-4 rounded-lg opacity-60 blur-lg', 'dark:opacity-30')}>
        <Image
          src={poster}
          alt="Poster de video"
          width="160"
          height="16"
          className="h-full w-full object-cover"
        />
      </div>
    </a>
  );
}

type Props = {
  item: PlaylistItem;
};
