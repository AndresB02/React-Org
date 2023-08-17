import "./Equipo.css";
import Colaborador from "../Colaborador/Colaborador";
//ahora aca en equipo es el que estara recinbiendo los datos
const Equipo = (props) => {
  //Destructuracion
  const { colorPrimario, colorSecundario, titulo } = props.datos;
  const { colaboradores } = props;
  const obj = {
    backgroundColor: colorSecundario,
  };

  const estiloTitulo = { borderColor: colorPrimario };

  return (
    <>
      {
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
      }
    </>
  );
};
export default Equipo;
