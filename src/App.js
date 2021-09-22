import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import AddItem from "./components/AddItem";
import ItemList from "./components/item";
import Update from "./components/UpdateItem"

function App() {
  return (
    <div className="App">
    <Router>
				<Switch>
					<Route path="/add" exact component={AddItem} />
					<Route path="/view" component={ItemList} />
          <Route path="/update/:id" component={Update} />
				</Switch>
			</Router>
    </div>
  );
}

export default App;
