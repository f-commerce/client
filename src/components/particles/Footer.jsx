import React from "react";
import { Link } from "react-router-dom";
import { FbIcon, IgIcon, LnkdIcon, XIcon } from "../../assets/icons";

const Footer = () => {
  return (
    <footer className="justify-between items-center bottom-0 w-full py-10 px-8 text-sm font-dark bg-black mt-60">
    <div className="mx-auto px-4">
      <div className="flex items-center justify-center">
        <ul className="flex items-center gap-3">
          <li>
            <FbIcon className="text-pink-500" /> {/* Color para Facebook */}
          </li>
          <li>
            <IgIcon className="text-pink-500" /> {/* Color para Instagram */}
          </li>
          <li>
            <LnkdIcon className="text-blue-700" /> {/* Color para LinkedIn */}
          </li>
          <li>
            <XIcon className="text-yellow-500" />{" "}
            {/* Color para otra red social */}
          </li>
        </ul>

        {/* Texto con símbolo de copyright */}
        <div className="text-blue-700 text-lg mx-auto flex items-right">
          <span>Pruebas proteccion de rutas 🔬 -------- 🔬 -------- ➡</span>
        </div>

        {/* Enlace de contacto */}
        <div className="text-center ml-auto">
          <Link
            to="/user-profile"
            className="text-white hover:text-red-700 text-lg"
          >
            Perfil de usuario
          </Link>
          </div>
          <div className="text-center ml-auto">
          <Link
            to="/admin/dashboard"
            className="text-white hover:text-red-700 text-lg"
          >
            Admin Dashboard
          </Link>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
