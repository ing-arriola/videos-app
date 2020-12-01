import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Components/Search";

function App() {
  const onTermSubmit = (term) => {
    console.log(term);
  };

  return (
    <div className="App">
      <Search onSumbmit={onTermSubmit} />
    </div>
  );
}

export default App;
