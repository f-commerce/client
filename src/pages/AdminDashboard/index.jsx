import React, { useState, useEffect } from 'react';
import axios from 'axios';


const API_BASE_URL = 'http://localhost:4000/api';



const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/security/logs`);
        const data = await response.json();
        console.log('Data:', data); // Verifica los datos que obtienes
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
  
    fetchUsers();
  }, []);

  // Función para eliminar un usuario
  const deleteUser = async (userId) => {
    try {
      await axios.delete(`/api/users/${userId}`);
      // Actualizar la lista de usuarios después de la eliminación
      setUsers(users.filter(user => user.id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Panel de Administración</h1>
      
      {/* Tabla de usuarios */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Usuarios</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Nombre</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td className="border px-4 py-2">{user.id}</td>
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">
                  <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded" onClick={() => deleteUser(user.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Visualización de datos de inicio de sesión y registro */}
      <div>
        <h2 className="text-xl font-bold mb-4">Datos de Login y Registro</h2>
        {/* Aquí puedes incluir componentes adicionales para visualizar datos relacionados con el inicio de sesión y registro */}
      </div>

      {/* Seguridad cibernética */}
      <div>
        <h2 className="text-xl font-bold mb-4">Seguridad Cibernética</h2>
        {/* Aquí puedes incluir componentes adicionales relacionados con la seguridad cibernética */}
      </div>
    </div>
  );
};

export  { AdminDashboard };
