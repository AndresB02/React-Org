import { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../campoTexto/CampoTexto";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton/Boton";

const Formulario = (props) => {
  const [nombre, actualizarNombre] = useState("");
  const [puesto, actualizarPuesto] = useState("");
  const [foto, actualizarFoto] = useState("");
  const [equipo, actualizarEquipo] = useState("");

  const { registrarColaborador } = props;

  //la propiedad "evento" se puede simplificar solamente con la letra "e"
  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log("Manejar envio");

    let datoAEnviar = {
      nombre,
      puesto,
      foto,
      equipo,
    };
    registrarColaborador(datoAEnviar);
  };

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario con los datos del nuevo colabodrador</h2>
        <CampoTexto
          titulo="Nombre"
          placeholder="Ingrese el nombre"
          required
          valor={nombre}
          actualizarValor={actualizarNombre}
        />
        <CampoTexto
          titulo="Puesto"
          placeholder="Ingrese el puesto"
          required
          valor={puesto}
          actualizarValor={actualizarPuesto}
        />
        <CampoTexto
          titulo="Foto"
          placeholder="Ingrese el enlace de la foto"
          required
          valor={foto}
          actualizarValor={actualizarFoto}
        />
        <ListaOpciones
          valor={equipo}
          actualizarEquipo={actualizarEquipo}
          equipos={props.equipos}
        />
        <Boton>Crear</Boton>
      </form>
    </section>
  );
};
export default Formulario;
