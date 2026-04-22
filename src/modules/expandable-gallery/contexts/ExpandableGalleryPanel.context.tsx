import { createContext, ReactNode, useContext } from 'react';

const ExpandableGalleryPanelContext = createContext({} as State);

export function ExpandableGalleryPanelProvider({
  children,
  isActive,
  pauseGallery,
  resumeGallery,
}: Props) {
  return (
    <ExpandableGalleryPanelContext.Provider value={{ isActive, pauseGallery, resumeGallery }}>
      {children}
    </ExpandableGalleryPanelContext.Provider>
  );
}

export function useExpandableGalleryPanelContext() {
  return useContext(ExpandableGalleryPanelContext);
}

type Props = {
  children: ReactNode;
  isActive: boolean;
  pauseGallery: () => void;
  resumeGallery: () => void;
};

type State = {
  isActive: boolean;
  pauseGallery: () => void;
  resumeGallery: () => void;
};
