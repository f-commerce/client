import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth debe estar dentro de un AuthProvider al ser instanciado.");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);


  const signinContext = async (user) => {
    try {
    const res = await fetch("http://localhost:4000/api/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    console.log("VERIFICAR USUARIO LOGUEADO:", user);
    console.log("ESTADO DE LA RESPUESTA del login de la cuenta:", res);
    if (res.ok) {
      const userToken = await res.json();
      console.log("Usuario logueado correctamente su token es:", userToken);
      // Construir el mensaje para mostrar en la alerta con el token  descompuesto
      const { token, message } = userToken;
const alertMessage = `Usuario logueado correctamente ✅\nToken: ${token}\nMensaje: ${message}`;
alert(alertMessage);
setUser(true);
      // Guardar el token en el localStorage
      localStorage.setItem("accessToken", userToken);
      return res; // OJOOOO Aquí devolvemos la respuesta
    } else {
      console.error("Error en el login de la cuenta:", res.statusText);
      alert("No tienes permisos de usuario ❌");

    }
  } catch (error) {
    
    console.error("Error en la solicitud de login:", error);


  }
  };
  
  const adminSigninContext = async (user) => {
    try {
    const res = await fetch("http://localhost:4000/api/auth/admin/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    console.log("VERIFICAR ADMINISTRADOR LOGUEADO:", user);
    console.log("ESTADO DE LA RESPUESTA del login ADMINISTRADOR sudo su es:", res);
    if (res.ok) {
      const userToken = await res.json();
      console.log("Administrador logueado correctamente su token es:", userToken);
      // Construir el mensaje para mostrar en la alerta con el token  descompuesto
      const { token, message } = userToken;
const alertMessage = `Administrador logueado correctamente ✅\nToken: ${token}\nMensaje: ${message}`;
alert(alertMessage);
setUser(true);
      // Guardar el token en el localStorage
      localStorage.setItem("accessToken", userToken);
      return res; // OJOOOO Aquí devolvemos la respuesta
    } else {
      console.error("Error en el login sudo su de la cuenta:", res.statusText);
      alert("No tienes permisos de Administrador ❌");

    }
  } catch (error) {
    
    console.error("Error en la solicitud de login:", error);


  }
  };

  const signupContext = async (user) => {
    try {
      const res = await fetch("http://localhost:4000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log("Usuario registrado correctamente con datos:", user);
      console.log("Respuesta de la creación de cuenta:", res);
      if (res.ok) {
        const userToken = await res.json();
        console.log("Usuario registrado correctamente su token es:", userToken);
      
        

       
        localStorage.setItem("accessToken", userToken);
        setUser(true); //OJO POR VERIFICAR
      
        return res; // Aquí devolvemos la respuesta
  
      } else {
        console.error("Error en la creación de la cuenta:", res.statusText);
        // Manejar el mensaje de error
      }
    } catch (error) {
      console.error("Error en la solicitud de creación de cuenta:", error);
      // Manejar el mensaje de error
    }
  };

  const signoutContext = async () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ signinContext, adminSigninContext, signupContext, signoutContext }}
    >
      {children}
    </AuthContext.Provider>
  );
};
