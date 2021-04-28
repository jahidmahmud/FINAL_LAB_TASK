import logo from './logo.svg';
import './App.css';
import Nav from './Component/Nav';
import AddEvent from './Component/AddEvent';
import List from './Component/List';
import EditEvent from './Component/EditEvent';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div>
        <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <h1>Hello world</h1>
          </Route>
          <Route path="/home">
            <h1>Hello home</h1>
          </Route>
          <Route path="/add">
            <AddEvent />
          </Route>
          <Route path="/list">
            <List />
          </Route>
          <Route path="/edit">
            <EditEvent />
          </Route>
          <Route path="*">
            <h1>404 not found</h1>
          </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
