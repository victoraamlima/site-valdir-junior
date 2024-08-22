import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-center py-16 px-3 relative items-center max-2md:flex-col max-2md:gap-4 max-2md:text-center">
      <div className="ml-20 max-2md:ml-0">
        <h1 className="text-7xl font-bold text-lime-700 max-xl:text-5xl">
          Valdir Junior
        </h1>
        <h2 className="ml-20 text-5xl font-light max-xl:text-3xl max-2md:ml-0">
          Consultor Independente
        </h2>
      </div>

      <div className="absolute left-16 flex gap-5 max-xl:left-12 max-2md:static">
        <a
          href="https://wa.link/hvz4yq"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/assets/images/logo-whatsapp.png"
            alt="logo do whatsapp"
            width={798}
            height={802}
            className="w-20 h-20 max-xl:w-16 max-xl:h-16"
            priority
          />
        </a>

        <a
          href="https://www.instagram.com/evs.shakeup/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/assets/images/logo-instagram.png"
            alt="logo do instagram"
            width={964}
            height={968}
            className="w-20 max-xl:w-16"
            priority
          />
        </a>
      </div>
    </header>
  );
}
