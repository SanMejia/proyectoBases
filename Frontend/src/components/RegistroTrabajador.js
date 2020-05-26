import React,{Component, Fragment} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

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


       onSubmit = async e => {
        e.preventDefault();
        const respuesta = await axios.post('http://localhost:4000/cuenta/creart', {"telefono": this.state.telefono,
        "pass": this.state.password,
        "email": this.state.email,
        "tipo": "t",
        "cc": 11111111,
        "name": this.state.nombreTrabajador,
        "estrellas" : 4.5,
        "disponible" : true,
        "perfil": "/casita",
        "documento": "/casita2",
        "direccion": "ST_GeomFromText('POINT(-0.1257 51.508)',4326)"})
         console.log(respuesta);

         if(this.state.nombreTrabajador === '' | 
         this.state.password === '' |
         this.state.telefono === '' |
         this.state.direccion === '' |
         this.state.email === '' |
         this.state.noTarjeta === ''){console.log("1")
           }
           else{
            document.location.href = "http://localhost:3000/Trabajador";
           }
     }
     
    render(){

        return(
            <Fragment>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;600;700&display=swap" rel="stylesheet"></link>

            <div className="sign-box2">
                <h1>MANDE</h1>
                <h2>Registro Trabajador</h2>

                <Link className="nav-link" to={"/"} >
               <button className="btn"><i className="fa fa-home"></i></button>
               </Link>

            <form class="formulario" onSubmit={this.onSubmit}>
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
            
            
        </form>
        </div>
        </Fragment>

        );

       

    }



}

export default RegistroTrabajador;