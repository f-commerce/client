import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" bg-black flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[15vh] z-50">
      <nav className="top-0 xl:static flex-1 flex flex-row xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-50 ">
        <Link to="/" className="text-white hover:text-lime-700 text-lg">
          Home
        </Link>
        <Link to="/register" className="text-white hover:text-lime-700 text-lg">
          Registrarse
        </Link>
        <Link to="/contact" className="text-white hover:text-lime-700 text-lg">
          Contacto
        </Link>

        <Link to="/login" className="text-white hover:text-lime-700 text-lg">
          Iniciar sesión
        </Link>
        <Link
          to="/admin/login"
          className="text-white hover:text-red-700 text-lg"
        >
          Admin
        </Link>
      </nav>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden text-2xl p-2"
      ></button>
    </header>
  );
};

export default Header;
