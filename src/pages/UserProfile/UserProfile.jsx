import React from 'react';

const UserProfile = ({ userToken }) => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-3xl font-semibold mb-4">¡Bienvenido Usuario, tu token es: {userToken}!</h1>
        <p className="text-gray-700">Es genial tenerte aquí.</p>
        <h2 className="text-2xl font-semibold mt-4">Tu perfil</h2>
        <p className="text-gray-700">Aquí puedes ver tu información de perfil.</p>

        <div className="mt-8">
          <h3 className="text-xl font-semibold">Nombre: {userToken}</h3>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Apellido: {
            userToken
          }</h3>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-semibold">Nombre de usuario: {
            userToken
          }</h3>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Email: {
            userToken
          }</h3>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Teléfono: {
            userToken
          }</h3>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Contraseña: {
            userToken
          }</h3>
        </div>
        
      </div>
    </div>
  );
};

export default UserProfile;
