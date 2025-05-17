import { type FunctionComponent, useState } from "react";
import "./Contacto.css";

interface ContactoProps {}

const Contacto: FunctionComponent<ContactoProps> = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: "" }));
    setSubmitStatus("idle");
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "El correo es requerido";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Correo no válido";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://formspree.io/f/mgvkdlpl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          _replyto: formData.email,
          message: formData.message,
          _subject: "Nuevo mensaje desde tu portfolio",
          _recipient: "marioge44@gmail.com"
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errorData = await response.json();
        console.error("Error de Formspree:", errorData);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error de red:", error);
      setSubmitStatus("error");
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
            rows={5}
            className={`form-textarea ${errors.message ? 'input-error' : ''}`}
            disabled={isSubmitting}
          />
          {errors.message && <p className="error-message">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="submit-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Enviando...
            </span>
          ) : "Enviar Mensaje"}
        </button>

        {submitStatus === "success" && (
          <p className="submit-status success mt-4">
            ✔️ Mensaje enviado con éxito
          </p>
        )}

        {submitStatus === "error" && (
          <p className="submit-status error mt-4">
            ❌ Error al enviar el mensaje. Por favor inténtalo nuevamente.
          </p>
        )}
      </form>
    </section>
  );
};

export default Contacto;