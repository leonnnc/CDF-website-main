import { MinistryPanel } from '@/modules/home/interfaces/ministries-panel.interface';

import { MinistriesPanelMobileContent } from './MinistriesPanelMobileContent';

export function MinistriesPanelMobile({ item }: Props) {
  const { link } = item;

  if (link) {
    return (
      <a href={link} rel="noopener noreferrer" target="_blank">
        <MinistriesPanelMobileContent item={item} />
      </a>
    );
  }

  return <MinistriesPanelMobileContent item={item} />;
}

type Props = {
  item: MinistryPanel;
};
