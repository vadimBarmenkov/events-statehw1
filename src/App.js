import './App.css';
import {Toolbar} from "./components/Toolbar";

function App() {
  return (
    <div className="App">
        <Toolbar
            filters={["All", "Websites", "Flayers", "Business Cards"]}
            selected="All"
            onSelectFilter={(filter) => {console.log(filter);}}/>
    </div>
  );
}

export default App;
