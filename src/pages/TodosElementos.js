import { useState, useEffect } from "react";
import ListaElementos from "../components/ListaElementos";

function TodosElementosPagina() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedData, setLoadedData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-practica-b8f20-default-rtdb.firebaseio.com/registros.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const datos = [];

        for (const key in data) {
          const dato = {
            id: key,
            ...data[key],
          };
          datos.push(dato);
        }

        setIsLoading(false);
        setLoadedData(datos);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Cargando...</p>
      </section>
    );
  }
  return (
    <section>
      <h1>Lista de Registros</h1>
      <ListaElementos datos={loadedData} />
    </section>
  );
}

export default TodosElementosPagina;
