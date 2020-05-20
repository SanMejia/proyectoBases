import React, { Component,Fragment } from 'react';

class AppUsuario extends Component {

    render() {

        return (
            <Fragment>

            <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;600;700&display=swap" rel="stylesheet"></link>

            <div className="mande-box">
                <h1>MANDE</h1>
                <p className="subtitulo">Solicite un Servicio</p>
                <button className="btn"><i className="fa fa-home"></i></button>
                <input className="Ayuda" type="submit" value="Ayuda? " />


                    <h3>Busqueda de labores</h3>

                    <form>
                        {/*<-- USERNAME INPUT -->*/}
                    <label for="Seleccione una labor">Seleccione una labor :</label>
                        <select name="Labores">

                            <option>Perra</option>

                            <option>Puta</option>

                            <option>Vagamunda</option>

                        </select>


                    </form>
                    <form>
                        <label className="categorias1" for="Ordenar por categorias :">Ordenar por Categorias :</label>
                        <select className="categorias2" name="Orden">

                            <option>Categoria</option>

                            <option>Precio</option>

                            <option>Pollas en vinagre</option>

                        </select>
                        <input className="solicitar" type="submit" value="Solicitar" />
                            <textarea name="textarea" rows="10" cols="50">Aqui estaran las labores listadas</textarea>

                            <label className="descripcion" for="Descripcion de la Labor">Descripcion de la Labor :</label>
                            <textarea name="textarea" rows="4" cols="50">Escribe la descripcion aqui</textarea>
        
                    </form>
         
         

                </div>

                </Fragment>



            );



    }



}



export default AppUsuario;