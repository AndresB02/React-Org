import { useState } from "react";
import "./Formulario.css";
import Campo from "../Campo/Campo";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton/Boton";

const Formulario = (props) => {
  const [nombre, actualizarNombre] = useState("");
  const [puesto, actualizarPuesto] = useState("");
  const [foto, actualizarFoto] = useState("");
  const [equipo, actualizarEquipo] = useState("");

  const [titulo, actualizarTitulo] = useState("");
  const [color, actualizarColor] = useState("");

  const { registrarColaborador, crearEquipo } = props;

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

  const manejarNuevoEquipo = (e) => {
    e.preventDefault();
    crearEquipo({ titulo, colorPrimario: color });
  };

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario con los datos del nuevo colabodrador</h2>
        <Campo
          titulo="Nombre"
          placeholder="Ingrese el nombre"
          required
          valor={nombre}
          actualizarValor={actualizarNombre}
        />
        <Campo
          titulo="Puesto"
          placeholder="Ingrese el puesto"
          required
          valor={puesto}
          actualizarValor={actualizarPuesto}
        />
        <Campo
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
      <form onSubmit={manejarNuevoEquipo}>
        <h2>Rellena el formulario con los datos del nuevo equipo</h2>
        <Campo
          titulo="Titulo"
          placeholder="Ingrese titulo"
          required
          valor={titulo}
          actualizarValor={actualizarTitulo}
        />
        <Campo
          titulo="Color"
          placeholder="Ingrese el color"
          required
          valor={color}
          actualizarValor={actualizarColor}
          type="color"
        />
        <Boton>Registrar</Boton>
      </form>
    </section>
  );
};
export default Formulario;
