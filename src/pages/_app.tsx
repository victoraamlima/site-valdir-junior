import "@/styles/globals.css";
import { fontType } from "@/types/listType";
import { getBaseUrl } from "@/utils/getBaseUrl";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const fonts: Array<fontType> = [
    {
      id: 1,
      family: "HerbalifeNatural",
      url: "/assets/fonts/HerbalifeNatural-Bold.otf",
      weight: "700",
      format: "otf",
      style: "normal",
    },
    {
      id: 2,
      family: "HerbalifeNatural",
      url: "/assets/fonts/HerbalifeNatural-Light.woff2",
      weight: "300",
      format: "woff2",
      style: "normal",
    },
    {
      id: 3,
      family: "HerbalifeNatural",
      url: "/assets/fonts/HerbalifeNatural-Medium.woff2",
      weight: "500",
      format: "woff2",
      style: "normal",
    },
    {
      id: 4,
      family: "HerbalifeNatural",
      url: "/public/assets/fonts/HerbalifeNatural-Regular.otf",
      weight: "normal",
      format: "otf",
      style: "normal",
    },
    {
      id: 5,
      family: "HerbalifeWalsheimGT-Rg",
      url: "/assets/fonts/HerbalifeWalsheimGT-Rg.woff2",
      weight: "normal",
      format: "woff2",
      style: "normal",
    },
  ];

  function buildFontFace(font: fontType) {
    return `
    @font-face {
      font-family: "${font.family}";
      src: url(${getBaseUrl(font.url)}) format("${font.format}");
      font-weight: ${font.weight};
      font-style: ${font.style};
    }
  `;
  }

  return (
    <>
      <style jsx global>
        {`
          ${fonts.map((font) => buildFontFace(font)).join("\n")}
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
