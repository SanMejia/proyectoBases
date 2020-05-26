import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import glo from './glo.js';




class TipoRegistro extends Component {

    render() {
      console.log(glo.log)

        return (

            <div className="sign-boxRegistro">

                <h1>¿Como deseas Registrarte?</h1>

                <form>
                    {/*<!-- REGISTRAR COMO USUARIO -->*/}

                    <label for="Ingresar">Registrar como Usuario</label>
                    <Link className="nav-link" to={"/Registro_Usuario"}>
                        <input type="submit" value="Registrarse" />
                    </Link>
                    {/*<!-- REGISTRAR COMO TRABAJADOR -->*/}
                    <label for="Ingresar">Registrar como Trabajador</label>
                    <Link className="nav-link" to={"/Registro_Trabajador"}>
                        <input type="submit" value="Registrarse" />
                    </Link>
                            <a href="#">Ayuda??</a><br />
                </form>
            </div>


        );




    }


}

export default TipoRegistro;
