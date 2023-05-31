const emailValidation = (URL) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(URL);
};

export const validaciones = (name, value) => {
  switch (name) {
    case "name":
      if (!value) {
        return "El nombre es requerido";
      } else if (value.length > 30) {
        return "El nombre no puede tener mas de 18 caracteres";
      }
      break;
    case "email":
      if (!value) {
        return "El mail es requerido";
      } else if (!emailValidation(value) && value !== "")
        return "Ingresá un formato válido de eMail";
      break;
    case "telefono":
      if (!value) {
        return "El telefono es requerido";
      } else if (value.length > 10) {
        return "El telefono debe comenzar sin 0 y sin 15";
      }
      break;
    case "mensaje":
      if (!value) {
        return "Tenes que escribir algo :D";
      }
      break;
    default:
      break;
  }
  return "";
};

export const validateForm = (error, inputValidacion) => {
  return (
    !error.name &&
    inputValidacion.name.length &&
    !error.email &&
    inputValidacion.email.length &&
    !error.telefono &&
    inputValidacion.telefono.length &&
    !error.mensaje &&
    inputValidacion.mensaje.length
  );
};
