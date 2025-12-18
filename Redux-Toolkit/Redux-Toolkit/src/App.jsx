import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header";
import Counter from "./Components/Counter";

function App() {
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        {" "}
        <Header /> <Counter />
      </div>
    </>
  );
}

export default App;
