import Caixa from "./components/Caixa"
import User from "./components/User"
import Reativo from "./components/Reativo"

function App() {
  return (
    <div className="App">
      <header className="">
        <h1>
          Aula 07 - 10/04
        </h1>
      </header>
      <section>
        <Caixa nome="caixa 01" />
        <Reativo />
        <User />
      </section>
    </div>
  );
}

export default App;
