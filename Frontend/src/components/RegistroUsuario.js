import React,{Component} from 'react';
import TipoRegistro from './TipoRegistro';

class RegistroUsuario extends Component{

    render(){

        return(

            <div class="sign-box2">
            <h1>MANDE</h1>
            <h2>Registro Usuario</h2>
            <form>
              {/*<!-- NOMBRE -->*/}
              <label for="Nombre">Nombre:</label>
              <input type="text" placeholder="Ingrese Nombre de Usuario" />
               {/*<!-- CONTRASEÑA -->*/}
              <label for="Contraseña">Contraseña:</label>
              <input type="text" placeholder="Ingrese Contraseña" />
               {/*<!-- TELEFONO -->*/}
              <label for="Telefono">Telefono:</label>
              <input type="text" placeholder="Ingrese Telefono" />
               {/*<!-- DIRECCION -->*/}
              <label for="Direccion">Direccion:</label>
              <input type="text" placeholder="Ingrese Direccion" />
               {/*<!-- EMAIL -->*/}
              <label for="Email">Email:</label>
              <input type="text" placeholder="Ingrese Email" /> 
               {/*<!-- TARJETA -->*/}
              <label for="NoTarjeta">NoTarjeta:</label>
              <input type="text" placeholder="Ingrese No Tarjeta" />
      
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