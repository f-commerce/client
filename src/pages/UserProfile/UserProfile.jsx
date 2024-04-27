import React from 'react';

const UserProfile = ({ userToken }) => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-3xl font-semibold mb-4">¡Bienvenido Usuario, tu token es: {userToken}!</h1>
        <p className="text-gray-700">Es genial tenerte aquí.</p>
        {/* Agrega más contenido o funcionalidad según sea necesario */}
      </div>
    </div>
  );
};

export default UserProfile;
