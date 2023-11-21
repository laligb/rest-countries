//import logo from './logo.svg';
import "./App.css";
import CountryList from "./Components/CountryList";
import FilterRegion from "./Components/FilterRegion";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <CountryList />
    </div>
  );
}

export default App;
