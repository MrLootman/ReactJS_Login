import { NavLink } from "react-router-dom";
// import { useState } from "react";
// import Spinner from "./Spinner";

export default function RegistrationForm() {
  // ? Tu pourras utiliser cette variable d'état si tu veux déclencher une animation lors du submit
  // const [loading, setLoading] = useState(false);

  /* 
    Met en place la fonction handleSubmit.
    Cette fonction doit envoyer les informations renseignées dans le formulaire
    vers le backend, à la route http://localhost:3310/api/users
  */

  return (
    <section className="registration-form">
      <div aria-label="Horizontal band giving a shadow effect between the image and the form." />
      <form>
        <label htmlFor="registration-firstname">
          {/* Firstname */}
          <input
            placeholder="Your firstname"
            id="registration-firstname"
            name="firstname"
            type="text"
            autoComplete="off"
          />
        </label>
        <label htmlFor="registration-email">
          {/* Email */}
          <input
            placeholder="Your email"
            id="registration-email"
            name="email"
            type="text"
            autoComplete="off"
          />
        </label>
        <label htmlFor="registration-password" title="Your password">
          {/* Password */}
          <input
            id="registration-password"
            name="password"
            type="password"
            placeholder="Your password"
            autoComplete="off"
          />
        </label>
        <button type="submit">Envoyer</button>
      </form>
      <NavLink to="/" aria-label="Message de création de compte">
        <strong>Vous avez déjà un compte ?</strong>
      </NavLink>
    </section>
  );
}
