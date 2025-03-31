import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard userName="Alafresh" name="Juan Guillermo Caicedo" />
      <TwitterFollowCard userName="Cardona1307" name="Camilo Cardona" />
      <TwitterFollowCard userName="dialextremo" name="Juan Pablo Correa" />
      <TwitterFollowCard userName="SinDinero-gif" name="Samuel Posada" />
    </section>
  );
}
