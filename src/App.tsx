import "./App.css";
import Cards from "./components/basics/Cards";
import Family from "./components/basics/Family";
import FamilyMember from "./components/basics/FamilyMember";
import First from "./components/basics/First";
import Params from "./components/basics/Params";
import Random from "./components/basics/Random";
import { Products } from "./components/data/products";
import { Students } from "./components/data/students";
import ProductsTable from "./components/repeat/ProductsTable";
import StudentList from "./components/repeat/StudentList";

export default function App() {
  return (
    <div className="app">
      <h1 className="title">Fundamentos React</h1>
      <div className="center">
        <div className="cards">
          <Cards title="#01 - Primeiro Componente">
            <First />
          </Cards>
          <Cards title="#02 - Com Paramêtro">
            <Params
              title="Situação do Aluno"
              student="Matheus Oliveira"
              note={9.4}
            />
          </Cards>
          <Cards title="#03 - Desafio Aleatório">
            <Random min={0} max={100} />
          </Cards>
          <Cards title="#04 - Componente com Filhos">
            <Family surname="Alves">
              <FamilyMember name="Pedro" />
              <FamilyMember name="Hugo" />
              <FamilyMember name="Taís" />
            </Family>
          </Cards>
          <Cards title="#05 - Repetição">
            {Students.map((Student, id) => (
              <StudentList {...{ ...Student, id }} />
            ))}
          </Cards>
          <Cards title="#06 - Desafio Repetição">
            <div className="product">
              <table className="table">
                <tr>
                  <th>ID</th>
                  <th>NOME</th>
                  <th>PREÇO</th>
                </tr>
                {Products.map((Product) => (
                  <ProductsTable {...Product} />
                ))}
              </table>
            </div>
          </Cards>
        </div>
      </div>
    </div>
  );
}
