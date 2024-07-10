import { useEffect, useState } from "react";
import {useWindowWidth} from "./useWindowWidth";

export default function useElementTop(elementId: string): number {
  const [scrollYPopupBtn, setScrollYPopupBtn] = useState<number>(0);

  const windowWidth = useWindowWidth();

  useEffect(() => {
    const element: HTMLElement | null = document.getElementById(elementId);
    const elementTop: number = element ? element.offsetTop : 0;
    setScrollYPopupBtn(elementTop);
  }, [windowWidth]);

  return scrollYPopupBtn;
}
