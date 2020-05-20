import React, {Component} from 'react';

class LaborActualTrabajador extends Component{

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
        <form >
            
            {/*<!-- NOMBRE -->*/}  
            <label for="Nombre">Nombre:</label> <br/>
            <input type="text" placeholder="Aqui va el Nombre" />
             {/*<!-- TELEFONO -->*/}
            <label for="Telefono">Telefono:</label> <br/>
            <input type="text" placeholder="Aqui va el Telefono" />
             {/*<!-- EMAIL -->*/}
            <label for="Email">Email:</label> <br/>
            <input type="text" placeholder="Aqui va el Email" />
            <input className= "FinalizarLabor" type="submit" value="Finalizar Labor" />   
        </form>   
        

        </div>


        );




    }


}

export default LaborActualTrabajador;