import { useSyncExternalStore } from "react";

const getServerSnapshot = (): number => 0;

function useWindowWidth() {
  const subscribe = (handleResize: () => void) => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  };

  const getSnapshot = (): number => window.innerWidth;

  const windowWidth = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  return windowWidth;
}

export { useWindowWidth, getServerSnapshot };
