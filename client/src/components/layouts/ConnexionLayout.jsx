import LoginImage from "../LoginImage";

function ConnexionLayout({ children }) {
  return (
    <main className="connexion-layout">
      <section className="connexion-area">
        <LoginImage />
        {children}
      </section>
    </main>
  );
}

export default ConnexionLayout;
