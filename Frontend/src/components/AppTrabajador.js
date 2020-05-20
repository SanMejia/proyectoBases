import React, { Component } from "react";

class AppTrabajador extends Component{

    render(){


        return(

            <div className="mande-boxTrabajador">
                <h1>MANDE</h1>
                <p className = "subtitulo">Notificaciones de Servicio</p>
                <button className="btn"><i className="fa fa-home"></i></button>
                <input className="Ayuda" type="submit" value="Ayuda?" />
        
        
            <h3>Labores</h3>
    
            <form>
                {/*<!-- LABORES -->*/}
                <label for="Seleccione una labor">Listado de Labores :</label>
                <textarea name="textarea" rows="7" cols="60">Sin solicitud de labores</textarea>
                </form>
                <form>
                <label className= "categorias1" for="Ordenar por categorias :">Descripcion de la labor :</label>   
                <textarea name="textarea2" rows="5" cols="60">Sin descripcion de la labor</textarea>
                <input className= "AceptarLabor" type="submit" value="Aceptar Labor" />
            </form>
            
            

            </div>

        );



    }


}

export default AppTrabajador;