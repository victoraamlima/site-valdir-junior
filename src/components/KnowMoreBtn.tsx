export default function KnowMoreBtn({ popUp }: { popUp?: boolean }) {
  const popUpCss: React.CSSProperties = {
    position: "fixed",
    width: "20rem",
    textAlign: "center",
    right: "1.25rem",
    bottom: "1.25rem",
    zIndex: 10,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    border: "1px solid #065f46",
  };

  return (
    <a
      href="https://wa.link/hvz4yq"
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-lime-700 text-white text-3xl pt-[24px] pb-[15px] px-16 w-full rounded-lg text-nowrap max-2md:text-xl max-2md:w-min max-2md:pt-[20px] max-2md:pb-[11px] max-sm:px-10 `}
      style={popUp ? popUpCss : undefined}
    >
      Saiba Mais
    </a>
  );
}
