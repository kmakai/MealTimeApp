import "./App.css";
import { NavBar } from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <NavBar />
      <SearchBar />
      <Main />
    </>
  );
}

export default App;
