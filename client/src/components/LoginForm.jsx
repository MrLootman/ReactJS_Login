import { useState } from "react";
import { NavLink } from "react-router-dom";
import { emailValidation, passwordValidation } from "../services/validation";

export default function LoginForm() {
  const [isEmail, setIsEmail] = useState(true);
  const [isPassword, setIsPassword] = useState(true);

  const handleFetch = async (data) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // credentials: 'include',
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      setIsEmail(() => false);
      setIsPassword(() => false);
    } else {
      const res = await response.json();
      localStorage.setItem("token", res.token);
      console.info("Logged", res);
    }
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const email = event.target.email.value;
      const isEmailValid = emailValidation(email);

      const password = event.target.password.value;
      const isPasswordValid = passwordValidation(password);

      setIsEmail(() => isEmailValid);
      setIsPassword(() => isPasswordValid);

      if (isEmailValid && isPasswordValid) {
        await handleFetch({ email, password });
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <section className="login-form">
      <div aria-label="Horizontal band giving a shadow effect between the image and the form." />
      <span id="welcome">Bienvenue !</span>
      <form onSubmit={handleSubmit}>
        <label htmlFor="login-email">
          {/* Email */}
          <input
            placeholder="Your email"
            id="login-email"
            name="email"
            autoComplete="off"
            onFocus={() => !isEmail && setIsEmail(true)}
            style={{ borderColor: isEmail ? "black" : "red" }}
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
            onFocus={() => !isPassword && setIsPassword(true)}
            style={{ borderColor: isPassword ? "black" : "red" }}
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
