import { IconProps } from '@modules/shared/interfaces/icon.interface';

export type AboutFeature = {
  title: string;
  description: string;
  icon: ({ ...rest }: IconProps) => JSX.Element;
};
