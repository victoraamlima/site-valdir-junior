export default function Video() {
  return (
    <iframe
      width="100%"
      height="calc(100vw * (315 / 560))"
      src="https://www.youtube.com/embed/vAkFfc_clMY?si=wpvMkDOPJNQ1RvAJ"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className="h-9-16"
    ></iframe>
  );
}
