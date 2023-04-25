
import "./miorg.css"

const MiOrg = (props) => {
    // Estado - hooks
    // useState
    // const [nombreVariable, funcionActualiza] = useState(valorInicial)
    // console.log(props)
    // Ejemplo de uso de UseState para mostrar u ocultar el formulario
    //const [mostrar, actualizarMostrar] = useState(true)
    //const manejarClick = () =>{
    //   console.log("Mostrar/Ocultar elemento")
    //  actualizarMostrar(!mostrar)
    //}

    return <section className="orgSection">
        <h3 className="titulo">Mi Organización</h3>
        <img src="./img/boton_add.png" alt="add" onClick={props.cambiarMostrar} />
    </section>
}

export default MiOrg