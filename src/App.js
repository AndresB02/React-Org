import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./components/Header/Header";
import MiOrg from "./components/MiOrg/MiOrg";
import Formulario from "./components/formulario/Formulario";
import Equipo from "./components/Equipo/Equipo";
import Footer from "./components/Footer/Footer";

//en la linea 9 al poner la funcion header en {}
// se da a entender que es un elemento de JS
// pero se puede dejar como <Header/> y asi se llaman los
//elementos de js a react
function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: true,
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/genesysrm.png",
      nombre: "Génesys Rondón",
      puesto: "Desarroladora de software e Instructor",
      fav: false,
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav: false,
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav: false,
    },
    {
      id: uuid(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav: false,
    },
  ]);

  //Lista de equpos
  const [equipos, actualizarEquipos] = useState([
    //abrimos un objeto para lograr llamar colores y demas
    //desde react
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57c278",
      colorSecundario: "#D9f7e9",
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82cffa",
      colorSecundario: "#e8f8ff",
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#a6d157",
      colorSecundario: "#f0f8e2",
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#e06b69",
      colorSecundario: "#fde7e8",
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#db6ebf",
      colorSecundario: "#fae9f5",
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#ffba05",
      colorSecundario: "#fff5d9",
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#ff8a29",
      colorSecundario: "#ffeedf",
    },
  ]);
  //Ternario  --> condicion ? seMuestra caso contrario : noSeMuestra
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador);
    // spread operator - copia de valores actuales y se le agrega el colaborador
    //los 3p puntos hacen referencia a que esta copiando un elemento
    actualizarColaboradores([...colaboradores, colaborador]);
  };

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id);
    const nuevosColaboradores = colaboradores.filter(
      (colaborador) => colaborador.id !== id
    );
    actualizarColaboradores(nuevosColaboradores);
  };

  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log("Actualizar: ", color, id);
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color;
      }

      return equipo;
    });

    actualizarEquipos(equiposActualizados);
  };

  //crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo);
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }]);
  };

  const like = (id) => {
    console.log("like", id);
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav;
      }
      return colaborador;
    });
    actualizarColaboradores(colaboradoresActualizados);
  };

  return (
    <div>
      <Header />
      {/* {mostrarFormulario ? <Formulario /> : <div></div>} */}
      {mostrarFormulario && (
        <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      )}
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {/* se usa el .map para recorrer una lista
      pero siempre que se trabaja con map, debe traer una key*/}
      {equipos.map((equipo) => (
        <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.equipo === equipo.titulo
          )}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
