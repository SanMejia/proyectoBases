import React, { Component,Fragment } from 'react';
import Labores from './Labores';
class AppUsuario extends Component {

    state = {

        selectValue: ' ',


    };

    render() {

        return (
            <Fragment>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;600;700&display=swap" rel="stylesheet"></link>

            <div className="mande-box">
                <h1>MANDE</h1>
                <p className="subtitulo">Solicite un Servicio</p>
                <button className="btn"><i className="fa fa-home"></i></button>
                <input className="Ayuda" type="submit" value="Ayuda? " />


                    <h3>Busqueda de labores</h3>

                   
                    <form>
                        <label className="categorias1" for="Ordenar por categorias :">Ordenar por Categorias :</label>
                        <select className="categorias2" id="Orden" defaultValue={this.state.selectValue} 
                         onChange={this.handleChange}>

                            <option value="Cercanos">Más cercanos</option>

                            <option value ="Precio">Menor precio</option>

                        </select>
                        <input className="solicitar" type="submit" value="Solicitar" />
                            <Labores labor_id={this.state.selectValue}/>
                            <label className="descripcion" for="Descripcion de la Labor">Descripcion de la Labor :</label>
                            <textarea name="textarea" rows="4" cols="50">Escribe la descripcion aqui</textarea>
        
                    </form>
         
         

                </div>

                </Fragment>



            );



    }



}



export default AppUsuario;