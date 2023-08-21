import "./Equipo.css";
import Colaborador from "../Colaborador/Colaborador";
import hexToRgba from "hex-to-rgba";
//import hexToRgba from "he
//ahora aca en equipo es el que estara recinbiendo los datos
const Equipo = (props) => {
  //Destructuracion
  const { colorPrimario, colorSecundario, titulo, id } = props.datos;
  console.log(colorSecundario);
  const { colaboradores, eliminarColaborador, actualizarColor } = props;
  const obj = {
    backgroundColor: hexToRgba(colorPrimario, 0.3),
  };

  const estiloTitulo = { borderColor: colorPrimario };

  return (
    <>
      {colaboradores.length > 0 && (
        <section className="equipo" style={obj}>
          <input
            type="color"
            className="input-color"
            value={colorPrimario}
            onChange={(e) => {
              actualizarColor(e.target.value, id);
            }}
          />
          <h3 style={estiloTitulo}>{titulo}</h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador, index) => (
              <Colaborador
                datos={colaborador}
                key={colaborador.nombre}
                colorPrimario={colorPrimario}
                eliminarColaborador={eliminarColaborador}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};
export default Equipo;
