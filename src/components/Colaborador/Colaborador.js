import "./Colaborador.css";
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
// al importar el AiFillCloseCircle que es el icono de react
//se puede llamar como una etiqueta de html para incorporarla
const Colaborador = (props) => {
  const { nombre, puesto, foto, equipo, id, fav } = props.datos;
  console.log(equipo);
  const { colorPrimario, eliminarColaborador, like } = props;

  // condicion ? verdadero : falso

  return (
    <div className="colaborador">
      <AiFillCloseCircle
        className="eliminar"
        onClick={() => eliminarColaborador(id)}
      ></AiFillCloseCircle>
      <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
        <img src={foto} alt={nombre} />
      </div>
      <div className="info">
        <h4>{nombre}</h4>
        <h5>{puesto}</h5>
        {fav ? (
          <AiFillHeart color="red" onClick={() => like(id)} />
        ) : (
          <AiOutlineHeart onClick={() => like(id)} />
        )}
      </div>
    </div>
  );
};

export default Colaborador;
