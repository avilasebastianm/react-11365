import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./components/navbar/NavBar";
import "./components/navbar/navbar.css";
import { Home } from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
