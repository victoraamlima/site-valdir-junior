import { useSyncExternalStore } from "react";

export default function useWindowWidth() {
  const subscribe = (handleResize: () => void) => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  };

  const getSnapshot = () => window.innerWidth;
  const getServerSnapshot = () => 0;

  const windowWidth = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  return windowWidth;
}
