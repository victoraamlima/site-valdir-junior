import { useSyncExternalStore } from "react";

export default function useScrollY() {
  const subscribe = (handleScrollChange: () => void) => {
    window.addEventListener("scroll", handleScrollChange);
    
    return () => window.removeEventListener("scroll", handleScrollChange);
  };

  const getSnapshot = () => window.scrollY;
  const getServerSnapshot = () => 0;

  const scrollY = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  return scrollY;
}
