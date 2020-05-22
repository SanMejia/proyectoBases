import React,{Component} from 'react';
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

    render(){

        return(

            <div class="sign-box2">
            <h1>MANDE</h1>
            <h2>Registro Usuario</h2>
            <form>
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
              <a href="#">Ingresar Recibo</a><br />
            
              <input class="Registrarme" type="submit" value="Registrarme" />
              <input class="Cancelar" type="submit" value="Cancelar" />
              <a href="#">Ayuda??</a><br />
            </form>
          </div>


        );


    }



}

export default RegistroUsuario;