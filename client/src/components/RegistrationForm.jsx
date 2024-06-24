import { useState } from "react";
import { NavLink } from "react-router-dom";
import { emailValidation, passwordValidation } from "../services/validation";
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
  const [isFirstname, setIsFirstname] = useState(true);
  const [isEmail, setIsEmail] = useState(true);
  const [isPassword, setIsPassword] = useState(true);

  const handleFetch = async (data) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) console.info("YES");
      else {
        const { message } = await response.json();
        console.error(message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (event) => {
    try {
      event.preventDefault();
      const firstname = event.target.firstname.value;

      const email = event.target.email.value;
      const isEmailValid = emailValidation(email);

      const password = event.target.password.value;
      const isPasswordValid = passwordValidation(password);

      setIsFirstname(() => firstname.length > 0);
      setIsEmail(() => isEmailValid);
      setIsPassword(() => isPasswordValid);

      if (!isEmailValid || !isPasswordValid || !firstname.length) {
        if (!isEmailValid) setIsEmail(() => false);
        if (!isPasswordValid) setIsPassword(() => false);
        if (!firstname.length) setIsFirstname(() => false);
      } else {
        handleFetch({ firstname, email, password });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="registration-form">
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
            onFocus={() => setIsFirstname(true)}
            style={{ borderColor: isFirstname ? "black" : "red" }}
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
            onFocus={() => setIsEmail(true)}
            style={{ borderColor: isEmail ? "black" : "red" }}
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
            onFocus={() => setIsPassword(true)}
            style={{ borderColor: isPassword ? "black" : "red" }}
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
