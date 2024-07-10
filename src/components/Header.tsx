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
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <img
            src="./assets/images/logo-whatsapp.png"
            alt="logo do whatsapp"
            className="w-20 max-xl:w-16"
          />
        </a>

        <a href="http://" target="_blank" rel="noopener noreferrer">
          <img
            src="./assets/images/logo-instagram.png"
            alt="logo do instagram"
            className="w-20 max-xl:w-16"
          />
        </a>
      </div>
    </header>
  );
}
