import "./styles.css";
import { Footer } from "./componentes/footer";
import { Section } from "./componentes/section";

export default function App() {
  return (
    <section className="App">
      <h1>Hello</h1>
      <Footer Nombre="alberto" edad="25" parrafo="Hola que tal?" />
      <Footer
        Nombre="mateo"
        edad="20"
        parrafo="Hola que tal?, tenemos que apender Boostrap"
      />
      <Section />
    </section>
  );
}
