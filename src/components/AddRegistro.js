import { useHistory } from "react-router-dom";
import RegistroForm from "./RegistroForm";

function AddRegistro() {
  const history = useHistory();

  function onRegistroHandler(dataRegistro) {
    fetch(
      "https://react-practica-b8f20-default-rtdb.firebaseio.com/registros.json",
      {
        method: "POST",
        body: JSON.stringify(dataRegistro),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }
  return (
    <section>
      <h1>Añadir Registro</h1>
      <RegistroForm onRegistro={onRegistroHandler} />
    </section>
  );
}

export default AddRegistro;
