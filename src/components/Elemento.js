import Card from "./ui/Card";
import classes from "./Elemento.module.css";

function Elemento(props) {
  return (
    <section className={classes.elemento}>
      <Card>
        <div className={classes.elementoCont}>
          <h3>Nombre del dato</h3>
          <div className={classes.dato}>
            <p>{props.datos.name}</p>
          </div>
          <h3>Descripción del dato</h3>
          <div className={classes.dato}>
            <p>{props.datos.description}</p>
          </div>
        </div>
      </Card>
    </section>
  );
}

export default Elemento;
