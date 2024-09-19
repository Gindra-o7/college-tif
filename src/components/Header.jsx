import React from "react";

const Header = () => {
  return (
    <>
      <header className="top-2 right-2 left-2 z-[40] items-center justify-between px-24 h-24 custom-border-lg md:flex md:fixed bg-primary border-ownBlack hidden">
        <div className="px-4 py-2">
          <h1 className="text-2xl font-bold text-ownWhite font-tech">
            <a href="#">CollegeTIF</a>
          </h1>
        </div>
        <nav className="flex justify-between w-[60%] h-auto">
          {/* Menu */}
          <ul className="flex items-center justify-center gap-8 text-base font-semibold text-ownWhite border-secondary font-trap">
            <li>
              <a
                href="#"
                className="relative py-2
      after:content-[''] after:scale-x-0 after:h-[3px] after:inline-block after:absolute after:bottom-0 after:bg-secondary after:transition-all after:duration-[400ms]
      hover:after:scale-x-100 after:inset-x-0 hover:transition-all hover:duration-[400ms]"
              >
                Kursus
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative py-2
      after:content-[''] after:scale-x-0 after:h-[3px] after:inline-block after:absolute after:bottom-0 after:bg-secondary after:transition-all after:duration-[400ms]
      hover:after:scale-x-100 after:inset-x-0 hover:transition-all hover:duration-[400ms]"
              >
                Artikel
              </a>
            </li>
          </ul>

          {/* CTA */}
          <ul className="flex items-center justify-center gap-2 text-sm font-bold border-secondary font-trap">
            <li>
              <a
                className="inline-block px-4 w-28 py-2 text-center bg-white custom-border text-primary hover:border-b-[6px] hover:rounded-xl active:border-r-[5px] active:border-b-[5px] hover:border-r-[6px]"
                href="#"
              >
                Masuk
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block px-4 w-28 py-2 text-center bg-secondary custom-border text-ownWhite hover:border-b-[6px] hover:rounded-xl active:border-r-[5px] active:border-b-[5px] hover:border-r-[6px]"
              >
                Daftar
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
