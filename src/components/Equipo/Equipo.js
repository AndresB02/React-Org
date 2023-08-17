import "./Equipo.css";
import Colaborador from "../Colaborador/Colaborador";
//import hexToRgba from "he
//ahora aca en equipo es el que estara recinbiendo los datos
const Equipo = (props) => {
  //Destructuracion
  const { colorPrimario, colorSecundario, titulo } = props.datos;
  const { colaboradores, eliminarColaborador, actualizarColor } = props;
  const obj = {
    backgroundColor: colorSecundario,
  };

  const estiloTitulo = { borderColor: colorPrimario };

  return (
    <>
      {colaboradores.length > 0 && (
        <section className="equipo" style={obj}>
          <h3 style={estiloTitulo}>{titulo}</h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador, index) => (
              <Colaborador
                datos={colaborador}
                key={colaborador.nombre}
                colorPrimario={colorPrimario}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};
export default Equipo;
