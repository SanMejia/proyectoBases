import React, { Component } from 'react';

class AdicionarLabores extends Component {

    render() {

        return (

            

            <div className="login-boxlabor">
                <h1>MANDE</h1>
                <h2>Adicionar Labores</h2>
                <form>
                    {/*<!-- USERNAME INPUT -->*/}
              <label for="Labores a desempeñar">Labores a desempeñar</label>
                    <select name="Labores">

                        <option>Paseador de Perros</option>

                        <option>Plomero</option>

                        <option>Gigolo</option>

                    </select>
                    {/*<!-- PASSWORD INPUT -->*/}
              <label for="Precio por Hora">Precio por Hora de dicha labor</label>
                    <input type="Text" placeholder="Ingrese el precio por hora, Ej: 100.000" />
                        <input type="submit" value="Adicionar Labor" />                     
            </form>
            <form>
            <input type="submit" value="Finalizar" /> <br />
            <a href="#">Ayuda?</a>
            </form>
          </div>



        );



    }



}


export default AdicionarLabores;