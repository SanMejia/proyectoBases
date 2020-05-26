import React, {Component} from 'react';
import axios from 'axios';

class LaborActualTrabajador extends Component{

    state = {
        usuarioActual: []
       }
    
        async componentWillMount() {
        const res = await axios.get('http://localhost:4000/usuarioActual/obteneri/3333');
        this.setState({usuarioActual: res.data[0]});
       } 
       onSubmit = async (e) => {
        e.preventDefault();
       if(false){console.log("1")
           }
           else{
            document.location.href = "http://localhost:3000/Trabajador";
           }
       }
    
    render(){

        return(

        <div className="mande-box2">
        <h1>MANDE</h1>
        <p className = "subtitulo">Detalles de la labor</p>
        
        <input className="Ayuda" type="submit" value="Ayuda?" />

        <h3>Lugar de la Labor</h3>
    
        <form className ="mapa">
            {/*<!-- AQUI IRA EL MAPA -->*/}  
        </form>
        <h3>Datos del Cliente:</h3>
        <form onSubmit = {this.onSubmit} >
            
            {/*<!-- NOMBRE -->*/}  
            <label for="Nombre">Nombre:</label> <br/>
            <input type="text" disabled value = {this.state.usuarioActual.nombre}/>
             {/*<!-- TELEFONO -->*/}
            <label for="Telefono">Telefono:</label> <br/>
            <input type="text" placeholder="Aqui va el Telefono" disabled value = {this.state.usuarioActual.telefono}/>
            <input className= "FinalizarLabor" type="submit" value="Finalizar Labor"  />   
        </form>   
        

        </div>


        );




    }


}

export default LaborActualTrabajador;