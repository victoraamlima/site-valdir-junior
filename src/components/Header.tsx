import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-center py-16 px-3 relative items-center max-2md:py-3 max-2md:gap-0 max-2md:text-center">
      <div className="flex-center flex-col ml-20 max-2md:ml-0">
        <Image
          src="/assets/images/herbalife-logo.png"
          alt="logo do instagram"
          width={3808}
          height={776}
          className="w-60 mb-3 max-2md:w-36"
          priority
        />

        <h1 className="text-7xl font-bold text-lime-700 max-xl:text-5xl max-2md:text-3xl">
          Valdir Júnior
        </h1>

        <h2 className="ml-20 text-5xl font-light max-xl:text-3xl max-2md:ml-0 max-2md:text-xl">
          Consultor Independente
        </h2>
      </div>

      <div className="absolute left-16 flex gap-5 max-xl:left-12 max-2md:left-4 max-2md:flex-col max-2md:gap-3" >
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
            className="w-20 h-20 max-xl:w-12 max-xl:h-12"
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
            className="w-20 max-xl:w-12"
            priority
          />
        </a>
      </div>
    </header>
  );
}
