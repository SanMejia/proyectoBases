import React, { Component } from 'react';
import glo from './glo.js';
import avatar from '../assets/images/mande.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios';



class LoginUsuario extends Component {
  state = {
   telefono: '',
   password: ''}

   onChangeUsuario = (e) => {
    this.setState({telefono: e.target.value})
   }
   onChangeContraseña = (e) => {
     this.setState({password: e.target.value})
   }

   onSubmit = async e => {
     e.preventDefault();
     console.log(glo.log);

     try {
     const respuesta = await axios.post('http://localhost:4000/cuenta/login',{
       "telefono": this.state.telefono,
        "pass": this.state.password
     });
     console.log(respuesta);
     glo.usuario = respuesta.data;
     glo.log = true;
     console.log(glo.usuario.tipo);
     console.log(glo.log);
   }catch (err) {
            console.error(err);
            console.log("holaa");
            alert('Usuario  o Contraseña  incorrectos');


        }
   }



    render() {

        return (

            //<body>
            <div className="login-box">

                <img src={avatar} className="avatar" alt="Avatar Image" />
                <h1>Login de Usuarios</h1>
                <form onSubmit={this.onSubmit}>
                    {/*USERNAME INPUT*/}
                    <label for="Nombre de Usuario">Nombre de Usuario</label>
                    <input type="text" placeholder="Ingrese el Nombre de Usuario" onChange={this.onChangeUsuario}/>
                    {/*PASSWORD INPUT*/}
                    <label for="Contraseña">Contraseña</label>
                    <input type="password" placeholder="Ingrese la Contraseña" onChange={this.onChangeContraseña}/>

                        <input type="submit" value="Log In"/>

                    <a href="#">Has Olvidado tu contraseña??</a><br />
                    <a href="#">No te has registrado aun?</a>
                </form>

            </div>
            //</body>


        );



    }


}

export default LoginUsuario;
