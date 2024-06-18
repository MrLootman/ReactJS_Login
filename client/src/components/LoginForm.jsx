// import { useState } from "react"
// import ConfirmModal from "./ConfirmModal";
import { NavLink } from "react-router-dom";

export default function LoginForm() {
  return (
    <section className="login-page_section_form">
      <div aria-label="Horizontal band giving a shadow effect between the image and the form." />
      <span>Bienvenue !</span>
      <form>
        <label htmlFor="login-email">
          {/* Email */}
          <input
            placeholder="Your email"
            id="login-email"
            name="email"
            autoComplete="off"
          />
        </label>
        <label htmlFor="login-password" title="Your password">
          {/* Password */}
          <input
            id="login-password"
            name="password"
            type="password"
            placeholder="Your password"
            autoComplete="off"
          />
        </label>
        <button type="button">Envoyer</button>
      </form>
      <NavLink to="/register" aria-label="Message de création de compte">
        <strong>Créez votre compte</strong>
      </NavLink>
    </section>
  );
}

// expected status 200
// to Be 404
