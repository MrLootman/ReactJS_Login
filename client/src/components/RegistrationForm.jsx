// import { useState } from "react"
// import ConfirmModal from "./ConfirmModal";
import { NavLink } from "react-router-dom";

export default function RegistrationForm() {
  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    fetch("http://localhost:3310/api/users", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => console.warn(res))
      .catch((err) => console.error(err));

    // const data = {
    //   firstName: formData.get("firstname"),
    //   email: formData.get("email"),
    //   password: formData.get("password"),
    // };

    // console.warn(data);
  }

  return (
    <section className="registration-page_section_form">
      <div aria-label="Horizontal band giving a shadow effect between the image and the form." />
      <form onSubmit={handleSubmit}>
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
      <NavLink to="/register" aria-label="Message de création de compte">
        <strong>Créez votre compte</strong>
      </NavLink>
    </section>
  );
}
