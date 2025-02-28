import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import style from "./pageStyles/LoginPage.module.scss";
import { Section } from "../components/Section/Section";
import { InputField } from "../components/InputField/InputField";
import { CustomButton } from "../components/CustomButton/CustomButton";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loginMessage, setLoginMessage] = useState("");

  const { setUserData } = useContext(UserContext);

  async function handleLogin(e) {
    e.preventDefault();
    console.log("Login attempt");

    const loginData = { username: email, password };
    console.log("Sending request:", loginData);

    try {
      const response = await fetch("https://api.mediehuset.net/token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });

      const result = await response.json();

      if (result.access_token) {
        setUserData({ email, token: result.access_token });
        setLoginMessage("Du er nu logget ind!");
        setError("");
      } else {
        throw new Error("Forkert email eller adgangskode.");
      }
    } catch (err) {
      setError(err.message);
      setLoginMessage("");
    }
  }

  return (
      <Section title="Login">
        <form onSubmit={handleLogin}>
          <h6>Indtast dit brugernavn og adgangskode for at logge ind</h6>

          <InputField
            type="email"
            placeholder="Brugernavn"
            id="email"
            action={(value) => {
              setEmail(value);
              setError("");
            }}
          />
          <InputField
            type="password"
            placeholder="Adgangskode"
            id="password"
            action={(value) => {
              setPassword(value);
              setError("");
            }}
          />

          {error && <p className={style.error}>{error}</p>}
          {loginMessage && <p className={style.success}>{loginMessage}</p>}

          <section className={style.loginButtons}>
            <CustomButton label="Login" type="submit" />
          </section>
        </form>
      </Section>
  );
}
