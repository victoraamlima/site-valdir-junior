interface InfoIconType {
  key: number;
  icon: {
    img: string;
    text: string;
  };
}

export default function InfoIcon({ icon }: InfoIconType) {
  return (
    <div className="flex items-center gap-4 max-w-[50%] max-lg:max-w-full max-2md:flex-col max-2md:px-5">
      <img
        src={icon.img}
        alt="icon"
        className="w-20 h-20 max-2xl:w-16 max-2xl:h-16 max-2md:w-14 max-2md:h-14 max-md:w-7 max-md:h-7"
      />
      <p className="max-2xl:text-sm">{icon.text}</p>
    </div>
  );
}
