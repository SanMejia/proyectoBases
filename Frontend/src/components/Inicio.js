import React, { Component, Fragment } from 'react';
import avatar from '../assets/images/mande.jpg';
import { Link } from 'react-router-dom';

class Inicio extends Component {


    render() {

        return (
            <Fragment>
            <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;600;700&display=swap" rel="stylesheet"></link>
            <div class="sign-box">
                <img src={avatar} className="avatar" alt="Avatar Image" />
                <h1>Bienvenido a Mande</h1>
                <h2>Que desea hacer?</h2>
                <form>
                    {/*INGRESAR*/}
                    <Link className="nav-link" to={"/Login_Usuario"} >
                        <input type="submit" value="Ingresar" />
                    </Link>
                    {/*REGISTRAR*/}
                    <Link className="nav-link" to={"/Tipo_Registro"}>
                        <input type="submit" value="Registrarme" />
                    </Link>
                    <a href="#">Ayuda??</a><br />
                </form>
            </div>
            </Fragment>


        );




    }



}

export default Inicio;