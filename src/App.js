import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import AddItem from "./components/AddItem";
import ViewItem from "./components/ViewItem";

function App() {
  return (
    <div className="App">
    <Router>
				<Switch>
					<Route path="/" exact component={AddItem} />
					<Route path="/view" component={ViewItem} />
				</Switch>
			</Router>
    </div>
  );
}

export default App;
