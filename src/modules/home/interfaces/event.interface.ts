import { ReactNode } from 'react';

export type Event = {
  id: string;
  title: string;
  description: ReactNode;
  image?: string;
  details: EventDetails;
  link?: string;
  isRegistrationLink?: boolean;
};

export type EventDetails = {
  ministry: string;
  date: string;
};
