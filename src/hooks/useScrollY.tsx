import { useSyncExternalStore } from "react";

const getServerSnapshot = (): number => 0;

function useScrollY() {
  const subscribe = (handleScrollChange: () => void) => {
    window.addEventListener("scroll", handleScrollChange);

    return () => window.removeEventListener("scroll", handleScrollChange);
  };

  const getSnapshot = (): number => window.scrollY;

  const scrollY = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  return scrollY;
}

export { getServerSnapshot, useScrollY };
