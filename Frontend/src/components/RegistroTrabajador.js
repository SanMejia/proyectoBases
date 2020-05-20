import React,{Component} from 'react';

class RegistroTrabajador extends Component{

    render(){

        return(

            <div className="sign-box2">
                <h1>MANDE</h1>
                <h2>Registro Trabajador</h2>
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
                {/*<!-- DOCUMENTO IDENTIDAD -->*/}
            <label for="Documento">Documento identidad:</label>
                <a href="#">Ingresar Documento</a><br />
                {/*<!-- FOTO -->*/}
            <label for="Foto">Fotografia:</label>
                <a href="#">Ingresar Fotografia</a><br />

        
            <input class="Registrarme" type="submit" value="Registrarme" />
            <input class="Cancelar" type="submit" value="Cancelar" />
            <a href="#">Ayuda??</a><br />
        </form>
        </div>


        );



    }



}

export default RegistroTrabajador;