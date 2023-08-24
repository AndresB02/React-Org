import { useState } from "react";
import "./MiOrg.css";

const MiOrg = (props) => {
  //usar una funcionalidad o estado llamado Hooks
  // hooks -> useState
  // y de esta manera  usarlo como funcion -> useState()
  // estructura del useState es = const [nombreVariable, funcionQueActualiza] = useState(valorInicial)
  console.log(props);
  console.log(useState);
  //const [mostrar, actualizarMostrar] = useState();
  // const manejarClick = () => {
  //   console.log("mostrar/ocultar elemento", !mostrar);
  //   actualizarMostrar(!mostrar);
  // };
  return (
    <section className="orgSection">
      <h3 className="title">Mi organización</h3>
      <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />
    </section>
  );
};

export default MiOrg;
