'use client';

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';

import { DonationView } from '../interfaces/donation-view.interface';

const DonationViewsContext = createContext({} as State);

export function DonationViewsProvider({ children }: Props) {
  const [view, setView] = useState<DonationView>(DonationView.MAIN);

  return (
    <DonationViewsContext.Provider value={{ view, setView }}>
      {children}
    </DonationViewsContext.Provider>
  );
}

export function useDontaionViewsContext() {
  return useContext(DonationViewsContext);
}

type Props = {
  children: ReactNode;
};

type State = {
  view: DonationView;
  setView: Dispatch<SetStateAction<DonationView>>;
};
