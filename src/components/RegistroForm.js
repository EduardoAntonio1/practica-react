import { useRef } from "react";
import Card from "./ui/Card";
import classes from "./RegistroForm.module.css";

function RegistroForm(props) {
  const nameInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const dataRegistro = {
      name: enteredName,
      description: enteredDescription,
    };

    props.onRegistro(dataRegistro);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Nombre</label>
          <input type="text" required id="title" ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Descripcion</label>
          <textarea
            required
            id="description"
            rows="5"
            ref={descriptionInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>Registrar</button>
        </div>
      </form>
    </Card>
  );
}

export default RegistroForm;
