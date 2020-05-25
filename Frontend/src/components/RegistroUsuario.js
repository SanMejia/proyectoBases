import React,{Component, Fragment} from 'react';
import TipoRegistro from './TipoRegistro';
import axios from 'axios'




class RegistroUsuario extends Component{

    state = {
     nombreUsuario: '',
     password: '',
     telefono: '',
     direccion: '',
     email: '',
     noTarjeta: ''
    }

    onChangeUsuario = (e) => {
     this.setState({nombreUsuario: e.target.value})
    }
    onChangeContraseña = (e) => {
      this.setState({password: e.target.value})
    }

    onChangeDireccion = (e) => {
      this.setState({direccion: e.target.value})
    }

    onChangeTelefono = (e) => {
      this.setState({telefono: e.target.value})
    }

    onChangeEmail = (e) => {
      this.setState({email: e.target.value})
    }

    onChangeTarjeta = (e) => {
      this.setState({noTarjeta: e.target.value})
    }

    onSubmit = async e => {
      e.preventDefault();
       const respuesta = await axios.post('http://localhost:4000/cuenta/crearu', {"telefono": this.state.telefono,
        "pass": this.state.password,
        "email": this.state.email,
       "tipo": "u",
        "name": this.state.nombreUsuario,
        "mpago" : "credito",
        "recibo" : "/lalalae",
       "direccion": "ST_GeomFromText('POINT(-0.1257 51.508)',4326)"})
        console.log(respuesta);
    }

    render(){

        return(
         <Fragment>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;600;700&display=swap" rel="stylesheet"></link>

            <div class="sign-box2">
            <h1>MANDE</h1>
            <h2>Registro Usuario</h2>
            <button className="btn"><i className="fa fa-home"></i></button>
            <form class="formulario" onSubmit={this.onSubmit} encType="multipart/form-data" action="/ReciboServicios">
              {/*<!-- NOMBRE -->*/}
              <label for="Nombre">Nombre:</label>
              <input type="text" placeholder="Ingrese Nombre de Usuario" onChange={this.onChangeUsuario} />
               {/*<!-- CONTRASEÑA -->*/}
              <label for="Contraseña">Contraseña:</label>
              <input type="text" placeholder="Ingrese Contraseña" onChange={this.onChangeContraseña}/>
               {/*<!-- TELEFONO -->*/}
              <label for="Telefono">Telefono:</label>
              <input type="text" placeholder="Ingrese Telefono" onChange={this.onChangeTelefono}/>
               {/*<!-- DIRECCION -->*/}
              <label for="Direccion">Direccion:</label>
              <input type="text" placeholder="Ingrese Direccion" onChange={this.onChangeDireccion}/>
               {/*<!-- EMAIL -->*/}
              <label for="Email">Email:</label>
              <input type="text" placeholder="Ingrese Email" onChange={this.onChangeEmail}/> 
               {/*<!-- TARJETA -->*/}
              <label for="NoTarjeta">NoTarjeta:</label>
              <input type="text" placeholder="Ingrese No Tarjeta"onChange={this.onChangeTarjeta} />
      
               {/*<!-- SERVICIOS -->*/}
              
              <label for="Recibo Servicios">Recibo Servicios:</label>
              <input type="file" placeholder="Ingrese recibo" accept=".jpg , .png" />
              
              <input class="Registrarme" type="submit" value="Registrarme" id="boton"/>
              <a href="#">Ayuda??</a><br />
            </form>
          </div>
          </Fragment>

        );


    }



}

    const button = document.getElementById('boton')
    if(button){
    button.addEventListener('click', axios.post('http://localhost:4000/cuenta/crearu', {"telefono": this.state.telefono,
    "pass": this.state.password,
    "email": this.state.email,
    "tipo": "u",
    "name": this.state.nombreUsuario,
    "mpago" : "credito",
    "recibo" : "/lalalae",
    "direccion": "ST_GeomFromText('POINT(-0.1257 51.508)',4326)"}));}

export default RegistroUsuario;