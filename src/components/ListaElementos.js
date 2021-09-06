import Elemento from "./Elemento";

function ListaElementos(props) {
  return (
    <section>
      {props.datos.map((elemento) => (
        <Elemento key={elemento.id} datos={elemento} />
      ))}
    </section>
  );
}

export default ListaElementos;
