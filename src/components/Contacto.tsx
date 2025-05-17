import { type FunctionComponent, useState } from "react";
import "./Contacto.css"; // Importa el archivo de estilos

interface ContactoProps {}

const Contacto: FunctionComponent<ContactoProps> = () => {
  // Estados para los campos del formulario
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Estados para errores de validación
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Estado para el mensaje de éxito/error del envío
  const [submitMessage, setSubmitMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // Para deshabilitar el botón

  // Manejador de cambios en los inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Limpia el error al empezar a escribir
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
    setSubmitMessage(""); // Limpia mensaje de envío al cambiar input
  };

  // Función de validación (muy básica)
  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido.";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "El correo electrónico es requerido.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El correo electrónico no es válido.";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Manejador del envío del formulario
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Evita el comportamiento predeterminado del formulario

    if (!validateForm()) {
      return; // Si la validación falla, no continúa
    }

    setIsSubmitting(true);
    setSubmitMessage(""); // Limpia mensajes anteriores

    try {
      // --- Aquí es donde integrarías tu servicio de backend o de terceros ---
      // Ejemplo con un fetch (necesitarías un endpoint real):
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });

      // if (response.ok) {
      //   setSubmitMessage("¡Mensaje enviado con éxito! Te responderé pronto.");
      //   setFormData({ name: "", email: "", message: "" }); // Limpia el formulario
      // } else {
      //   setSubmitMessage("Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.");
      // }

      // Simulación de envío exitoso para demostración:
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simula un retraso de red
      setSubmitMessage("¡Mensaje enviado con éxito! Te responderé pronto.");
      setFormData({ name: "", email: "", message: "" }); // Limpia el formulario

    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setSubmitMessage("Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="contacto-section">
      <h2 className="contacto-title">Contacto</h2>
      <p className="contacto-subtitle">¿Tienes alguna pregunta o quieres colaborar? ¡Envíame un mensaje!</p>

      <form onSubmit={handleSubmit} className="contacto-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`form-input ${errors.name ? 'input-error' : ''}`}
            disabled={isSubmitting}
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`form-input ${errors.email ? 'input-error' : ''}`}
            disabled={isSubmitting}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5} // Número de filas visibles
            className={`form-textarea ${errors.message ? 'input-error' : ''}`}
            disabled={isSubmitting}
          />
          {errors.message && <p className="error-message">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="submit-button"
          disabled={isSubmitting} // Deshabilita el botón mientras se envía
        >
          {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
        </button>

        {submitMessage && (
          <p className={`submit-status ${submitMessage.includes("éxito") ? 'success' : 'failure'}`}>
            {submitMessage}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contacto;