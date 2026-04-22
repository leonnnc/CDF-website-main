import { ReactNode } from 'react';

export type HeaderItem = {
  id: string;
  content: ReactNode;
  icon: ReactNode;
  link: string;
};
