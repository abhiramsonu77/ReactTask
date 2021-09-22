import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import AddItem from "./components/AddItem";
import ItemList from "./components/item";

function App() {
  return (
    <div className="App">
    <Router>
				<Switch>
					<Route path="/add" exact component={AddItem} />
					<Route path="/view" component={ItemList} />
				</Switch>
			</Router>
    </div>
  );
}

export default App;
