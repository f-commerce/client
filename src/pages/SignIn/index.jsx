import React, { useState } from "react";
import { useForm } from "react-hook-form";
// import ReCAPTCHA from "react-google-recaptcha";
import validator from "validator";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Header from "../../components/particles/Header";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // const [captchaToken, setCaptchaToken] = useState("");
  const { signinContext } = useAuth();
  const navigate = useNavigate();

  const validateForm = (data) => {
    const errors = {};

    if (validator.isEmpty(data.email.trim())) {
      errors.email = "El email es requerido";
    } else if (!validator.isEmail(data.email)) {
      errors.email = "Formato de email inválido";
    } else if (!validator.isLength(data.email, { max: 100 })) {
      errors.email = "El email debe tener máximo 100 caracteres";
    }

    if (validator.isEmpty(data.password.trim())) {
      errors.password = "La contraseña es requerida";
    } else if (!validator.isLength(data.password, { max: 100 })) {
      errors.password = "La contraseña debe tener máximo 100 caracteres";
    }

    return errors;
  };

  // const handleCaptchaChange = (token) => {
  //   setCaptchaToken(token);
  // };

  

  const onSubmitHandler = async (data) => {
    const formData = { ...data };
    console.log("Formulario enviado:", formData);
    // Validar el formulario
    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      console.error("Errores de validación:", errors);

      return;
    }
    // if (captchaToken === "") {
    //   alert("Por favor, completa la verificación reCAPTCHA.");
    //   return;
    // }
    try {
      const response = await signinContext(formData);
      console.log("Respuesta de la LOGIN:", response);

      if (response.ok) {
        // Redirigir al usuario después de una creación exitosa
        navigate("/user-profile");
      } else if (response.status === 400) {
        const responseData = await response.json();
        const { message } = responseData;
        console.error("Error en la creación de la cuenta:", message);
      } else {
        console.error(
          "Error en la creación de la cuenta. Por favor, intenta nuevamente."
        );
      }
    } catch (error) {
      console.error("Error en la solicitud de creación de cuenta:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center gap-4 mt-10">
        <h1 className="font-medium text-xl text-center w-80 mb-6">
          Iniciar Sesión!
        </h1>
        <form
          className="flex flex-col gap-4 w-80"
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <input
            type="text"
            name="botField"
            placeholder="Eres un bot?"
            style={{
              display: "block",
              backgroundColor: "red",
            }}
            tabIndex="-1"
            autoComplete="off"
            {...register("botField")}
          />
          {errors.botField && (
            <div style={{ color: "red", margin: "auto" }}>
              {errors.botField.message}
            </div>
          )}
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-light text-sm">
              Tu email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="hi@helloworld.com"
              className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
              {...register("email")}
            />
            {errors.email && (
              <div style={{ color: "red" }}>{errors.email.message}</div>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="font-light text-sm">
              Tu contraseña:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="******"
              className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
              {...register("password")}
            />
            {errors.password && (
              <div style={{ color: "red" }}>{errors.password.message}</div>
            )}
          </div>
          {/* <ReCAPTCHA
            sitekey="6LcPH8EpAAAAAFZ9ZDbmwsM4GXzWVRHl5U_xjdPb"
            onChange={handleCaptchaChange}
          /> */}
          <button
            className="bg-black text-white w-full rounded-lg py-3"
            type="submit"
          >
            Iniciar Sesión
          </button>
        </form>
        <div className="flex flex-col w-80">
          <Link to="/register" className="text-black">
            ¿No tienes una cuenta? Crear una cuenta
          </Link>
        </div>
        <div className="my-2"></div>
        <div className="flex flex-col w-80">
          <Link to="/admin/login" className="text-black">
            ¿Eres Administrador? Crear una cuenta o intenta hackearnos 😏
          </Link>
        </div>
      </div>
    </>
  );
}

export { SignIn };
