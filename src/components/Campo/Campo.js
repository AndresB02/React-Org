import "./Campo.css";

//para poder cambiar los datos de cada input debemos recibir un parametro
//en la funcion en este caso sera props

//si queremos argregarle 3 putnso al final de cada oracion solo hace falta
//crear una costante
// const placeholderModificado = `${props.placeholder}...`
//y se llamaria en el placeholder={placeholderModificado}
const Campo = (props) => {
  //Destructuracion
  const { type = "text" } = props;

  const manejarCambio = (e) => {
    props.actualizarValor(e.target.value);
  };

  return (
    <div className={`campo campo-${type}`}>
      <label>{props.titulo}</label>
      <input
        placeholder={props.placeholder}
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
        type={type}
      />
    </div>
  );
};

export default Campo;
