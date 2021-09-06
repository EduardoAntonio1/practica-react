import { Link } from "react-router-dom";
import classes from "./Header.module.css";

function Header() {
  return (
    <section className={classes.header}>
      <div className={classes.logo}>PRUEBA</div>
      <nav className={classes.nav}>
        <Link to="/">Lista de Registros</Link>
        <Link to="/add-registro">Añadir Registro</Link>
      </nav>
    </section>
  );
}

export default Header;
