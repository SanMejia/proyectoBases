import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

class AdicionarLabores extends Component {


    state = {
    Labor: '',
    PrecioLabor: ''

    }


    onChangeLabor = (e) => {
    this.setState({Labor: document.getElementById("Labores").value})
    }
   

    onChangePrecio= (e) => {
     this.setState({PrecioLabor: e.target.value});
    }

    onSubmit = async e => {

        e.preventDefault();
        const respuesta = await axios.post('http://localhost:4000/trabajador/labor/crear', 
        {"telefono": 3106330913,
	    "labor": this.state.Labor,
	    "unidad": this.state.PrecioLabor,
        "descripcion": "Lo hare bn deveras"})
        
    }

    render() {

        return (

            

            <div className="login-boxlabor">
                <h1>MANDE</h1>
                <h2>Adicionar Labores</h2>
                <form id= "formulario"onSubmit = {this.onSubmit}>
                    {/*<!-- USERNAME INPUT -->*/}
              <label for="Labores a desempeñar">Labores a desempeñar</label>
                    <select name="Labores" id="Labores" onChange = {this.onChangeLabor}>

                        <option value="1">Paseador de Perros</option>

                        <option value="2">Plomero</option>

                        <option value="3">Gigolo</option>

                    </select>
                    {/*<!-- PASSWORD INPUT -->*/}
              <label for="Precio por Hora">Precio por Hora de dicha labor</label>
              <input type="Text" placeholder="Ingrese el precio por hora, Ej: 100.000" onChange={this.onChangePrecio}/>
              <input type="submit" value="Adicionar Labor" />                     
            </form>
            <form>
            <Link className="nav-link" to={"/Trabajador"} >
            <input type="submit" value="Finalizar" /> <br />
            </Link>
            <a href="#">Ayuda?</a>
            </form>
          </div>
        );



    }



}


export default AdicionarLabores;