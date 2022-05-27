import "./App.css";
import Cards from "./components/basics/Cards";
import Family from "./components/basics/Family";
import First from "./components/basics/First";
import Params from "./components/basics/Params";
import Random from "./components/basics/Random";

export default function App() {
  return (
    <div className="app">
      <h1 className="title">Fundamentos React</h1>
      <div className="center">
        <div className="cards">
          <Cards title="#01 - Primeiro Componente" tag={<First />} />
          <Cards
            title="#02 - Com Paramêtro"
            tag={
              <Params
                title="Situação do Aluno"
                student="Matheus Oliveira"
                note={9.4}
              />
            }
          />
          <Cards
            title="#03 - Desafio Aleatório"
            tag={<Random min={0} max={100} />}
          />
          <Cards
            title="#04 - Componente com Filhos"
            tag={<Family surname="Alves" />}
          />
        </div>
      </div>
    </div>
  );
}