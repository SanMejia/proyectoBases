import React,{Component} from 'react';
import axios from 'axios'
import ReactDOM from 'react-dom'

class ServicioActualUsuario extends Component{

   state = {
    usuarioActual: ''
   }

   componentDidMount() {
    const res = axios.get('http://localhost:4000/usuarioActual/obteneri/3333');
    this.setState({usuarioActual: res.data});
    
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
              <form >
                
                {/*<!-- NOMBRE -->*/}
                <label for="Nombre">Nombre:</label> <br/>
                <input type="text" placeholder= "" disabled/>
                {/*<!-- TELEFONO -->*/}
                <label for="Telefono">Telefono:</label> <br/>
                <input type="text" placeholder="Aqui va el Telefono" disabled/>
                {/*<!-- LABOR -->*/}
                <label for="Labor">Labor a Realizar:</label> <br/>
                <input type="text" placeholder="Aqui va la Labor" disabled/>
                <input className= "Pagar" type="submit" value="Pagar Labor" />   
              </form>   
              
        
            </div>


        );





    }


}

export default ServicioActualUsuario;