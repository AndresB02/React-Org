import "./Colaborador.css";
import { AiFillCloseCircle } from "react-icons/ai";
// al importar el AiFillCloseCircle que es el icono de react
//se puede llamar como una etiqueta de html para incorporarla
const Colaborador = (props) => {
  const { nombre, puesto, foto, equipo, id } = props.datos;
  console.log(equipo);
  const { colorPrimario, eliminarColaborador } = props;
  return (
    <div className="colaborador">
      <AiFillCloseCircle
        className="eliminar"
        onClick={() => eliminarColaborador(id)}
      >
        D
      </AiFillCloseCircle>
      <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
        <img src={foto} alt={nombre} />
      </div>
      <div className="info">
        <h4>{nombre}</h4>
        <h5>{puesto}</h5>
      </div>
    </div>
  );
};

export default Colaborador;
