import LoginImage from "../components/LoginImage";
import RegistrationForm from "../components/RegistrationForm";

function RegistrationPage() {
  return (
    <main className="registration-page">
      <section className="registration-page_section">
        <LoginImage />
        <RegistrationForm />
      </section>
    </main>
  );
}

export default RegistrationPage;
