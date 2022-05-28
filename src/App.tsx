import "./App.css";
import Family from "./components/basics/Family";
import FamilyMember from "./components/basics/FamilyMember";
import First from "./components/basics/First";
import Params from "./components/basics/Params";
import Random from "./components/basics/Random";
import PairOrOdd from "./components/conditional/PairOrOdd";
import UserInfo from "./components/conditional/UserInfo";
import { Products } from "./components/data/products";
import { Students } from "./components/data/students";
import Card from "./components/layout/Card";
import ProductsTable from "./components/repeat/ProductsTable";
import StudentList from "./components/repeat/StudentList";

export default function App() {
  return (
    <div className="app">
      <h1 className="title">Fundamentos React</h1>
      <div className="center">
        <div className="cards">
          <Card title="#01 - Primeiro Componente">
            <First />
          </Card>
          <Card title="#02 - Com Paramêtro">
            <Params
              title="Situação do Aluno"
              student="Matheus Oliveira"
              note={9.4}
            />
          </Card>
          <Card title="#03 - Desafio Aleatório">
            <Random min={0} max={100} />
          </Card>
          <Card title="#04 - Componente com Filhos">
            <Family surname="Alves">
              <FamilyMember name="Pedro" />
              <FamilyMember name="Hugo" />
              <FamilyMember name="Taís" />
            </Family>
          </Card>
          <Card title="#05 - Repetição">
            {Students.map((Student, id) => (
              <StudentList key={id} {...{ ...Student, id }} />
            ))}
          </Card>
          <Card title="#06 - Desafio Repetição">
            <div className="product">
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>NOME</th>
                    <th>PREÇO</th>
                  </tr>
                </thead>
                <tbody>
                  {Products.map((Product) => (
                    <ProductsTable key={Product.id} {...Product} />
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
          <Card title="#07 - Renderização Condicional">
            <PairOrOdd number={19} />
            <UserInfo user={{ name: "Paulo" }} />
            <UserInfo user={{ email: "Paulo@example.com" }} />
            <UserInfo user={{}} />
            <UserInfo />
          </Card>
        </div>
      </div>
    </div>
  );
}
