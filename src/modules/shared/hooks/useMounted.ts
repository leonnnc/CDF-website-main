import { useEffect, useState } from 'react';

export function useMounted() {
  const [isMounted, setIsMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return { isMounted };
}
