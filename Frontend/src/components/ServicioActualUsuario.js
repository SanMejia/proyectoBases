import React,{Component} from 'react';
import axios from 'axios'
import ReactDOM from 'react-dom'

class ServicioActualUsuario extends Component{

   state = {
    trabajadorActual: []
   }

    async componentWillMount() {
    const res = await axios.get('http://localhost:4000/trabajadorActual/obteneri/111111');
    this.setState({trabajadorActual: res.data[0]});
   } 

   onSubmit = async (e) => {
    e.preventDefault();
    if(false){console.log("1")
           }
           else{
            document.location.href = "http://localhost:3000/Usuario";
           }
   }

    render(){

        return(

            <div className="mande-boxServicio">
            <h1>MANDE</h1>
            <p className = "subtitulo">Detalles del Trabajador</p>
            <input className="Ayuda" type="submit" value="Ayuda?" />
            <h3>Foto del trabajador</h3>
           
              <form className ="foto">
                {/*<!-- AQUI IRA LA FOTO DEL TRABAJADOR -->*/} 
              </form>
              <h3>Datos del Trabajador:</h3>
              <form onSubmit = {this.onSubmit}>
                
                {/*<!-- NOMBRE -->*/}
                <label for="Nombre">Nombre:</label> <br/>
                <input type="text" placeholder= "" disabled  value = {this.state.trabajadorActual.nombre}/>
                {/*<!-- TELEFONO -->*/}
                <label for="Telefono">Telefono:</label> <br/>
                <input type="text" placeholder="Aqui va el Telefono" disabled value = {this.state.trabajadorActual.telefono}/>
                {/*<!-- LABOR -->*/}
                <label for="Labor">Labor a Realizar:</label> <br/>
                <input type="text" placeholder="Aqui va la Labor" disabled value = {this.state.trabajadorActual.nombre_labor}/>
                <input className= "Pagar" type="submit" value="Pagar Labor" />   
              </form>   
              
        
            </div>


        );





    }


}

export default ServicioActualUsuario;