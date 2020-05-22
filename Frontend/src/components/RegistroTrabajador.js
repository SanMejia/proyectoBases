import React,{Component} from 'react';
import axios from 'axios'

class RegistroTrabajador extends Component{


    state = {
        nombreTrabajador: '',
        password: '',
        telefono: '',
        direccion: '',
        email: '',
        noTarjeta: ''
    }

    onChangeNombre = (e) => {
        this.setState({nombreTrabajador: e.target.value})
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

            <div className="sign-box2">
                <h1>MANDE</h1>
                <h2>Registro Trabajador</h2>
            <form>
                {/*<!-- NOMBRE -->*/}
            <label for="Nombre">Nombre:</label>
                <input type="text" placeholder="Ingrese Nombre de Usuario" onChange={this.onChangeNombre} />
                {/*<!-- CONTRASEÑA -->*/}
            <label for="Contraseña">Contraseña:</label>
                <input type="text" placeholder="Ingrese Contraseña"  onChange={this.onChangeContraseña}/>
                {/*<!-- TELEFONO -->*/}
            <label for="Telefono">Telefono:</label>
                <input type="text" placeholder="Ingrese Telefono" onChange={this.onChangeTelefono} />
                {/*<!-- DIRECCION -->*/}
            <label for="Direccion">Direccion:</label>
                <input type="text" placeholder="Ingrese Direccion" onChange={this.onChangeDireccion} />
                {/*<!-- EMAIL -->*/}
            <label for="Email">Email:</label>
                <input type="text" placeholder="Ingrese Email" onChange={this.onChangeEmail} />
                {/*<!-- TARJETA -->*/}
            <label for="NoTarjeta">NoTarjeta:</label>
                <input type="text" placeholder="Ingrese No Tarjeta" onChange={this.onChangeTarjeta} />
                {/*<!-- DOCUMENTO IDENTIDAD -->*/}
            <label for="Documento">Documento identidad:</label>
                <a href="#">Ingresar Documento</a><br />
                {/*<!-- FOTO -->*/}
            <label for="Foto">Fotografia:</label>
                <a href="#">Ingresar Fotografia</a><br />

        
            <input class="Registrarme" type="submit" value="Registrarme"  />
            <input class="Cancelar" type="submit" value="Cancelar" />
            <a href="#">Ayuda??</a><br />
        </form>
        </div>


        );



    }



}

export default RegistroTrabajador;