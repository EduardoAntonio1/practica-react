import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TodosElementosPagina from "./pages/TodosElementos";
import classes from "./App.module.css";
import AddRegistro from "./components/AddRegistro";
import Header from "./components/layout/Header";

function App() {
  return (
    <Router>
      <Header />
      <div className={classes.mainContenedor}>
        <Switch>
          <Route path="/" exact>
            <TodosElementosPagina />
          </Route>
          <Route path="/add-registro">
            <AddRegistro />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
