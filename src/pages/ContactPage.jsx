import { useState } from "react";

const emptyForm = {
  name: "",
  email: "",
  message: ""
};

function validateForm(values) {
  const nextErrors = {};

  if (!values.name.trim()) {
    nextErrors.name = "Escribe tu nombre.";
  }

  if (!values.email.trim()) {
    nextErrors.email = "Escribe tu correo electrónico.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    nextErrors.email = "Escribe un correo válido.";
  }

  if (!values.message.trim()) {
    nextErrors.message = "Escribe un mensaje.";
  } else if (values.message.trim().length < 10) {
    nextErrors.message = "El mensaje debe tener al menos 10 caracteres.";
  }

  return nextErrors;
}

export function ContactPage() {
  const [formValues, setFormValues] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues((current) => ({
      ...current,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validateForm(formValues);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatusMessage("Revisa los campos marcados antes de enviar el formulario.");
      return;
    }

    setStatusMessage("Formulario enviado correctamente. Gracias por tu mensaje.");
    setFormValues(emptyForm);
    setErrors({});
  };

  return (
    <div className="page-stack">
      <section className="section-panel page-intro">
        <p className="eyebrow">Contacto</p>
        <h1>Página de contacto</h1>
        <p className="lead page-lead">
          Formulario accesible con campos obligatorios, validación por texto y
          mensajes dinámicos preparados para lectores de pantalla.
        </p>
      </section>

      <section className="section-panel">
        <div className="contact-grid">
          <div className="contact-copy">
            <h2>Envía un mensaje</h2>
            <p className="section-text">
              Todos los campos son obligatorios. El formulario se puede usar
              solo con teclado y los errores aparecen escritos, no solo en rojo.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="field-group">
              <label htmlFor="name">Nombre</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formValues.name}
                onChange={handleChange}
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name ? (
                <p className="field-error" id="name-error">
                  {errors.name}
                </p>
              ) : null}
            </div>

            <div className="field-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formValues.email}
                onChange={handleChange}
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email ? (
                <p className="field-error" id="email-error">
                  {errors.email}
                </p>
              ) : null}
            </div>

            <div className="field-group">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formValues.message}
                onChange={handleChange}
                aria-invalid={errors.message ? "true" : "false"}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message ? (
                <p className="field-error" id="message-error">
                  {errors.message}
                </p>
              ) : null}
            </div>

            <div className="status-box" aria-live="polite" role="status">
              {statusMessage}
            </div>

            <button className="button button-primary" type="submit">
              Enviar
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
