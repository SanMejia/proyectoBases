import React, {Component, Fragment} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Calificar extends Component{
    
    star= "vacio";

    state = {
        star: this.star, 
        redirect: false 

       }
    
      onRadioChange =  (e) => { 
      this.star = e.target.id; 
     }

       onSubmit = async e => {
        e.preventDefault();
        await this.setState({star: this.star, redirect: true});
        console.log(this.state.star);
        
        if(this.state.star === "vacio"){console.log("1")
           }
           else{
            document.location.href = "http://localhost:3000/Usuario";
           }
       //  const respuesta = await axios.post('http://localhost:4000/cuenta/creart', 
       // {"calificacion": this.state.calificacion,"pass": this.state.password, })    
       //console.log(respuesta);
     }

     

    render(){

        return(

            
            <Fragment>
           
            <head>
                <meta charset="utf-8"/>
                <title>Login para usuario</title>
                <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"/>
                <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;600;700&display=swap" rel="stylesheet"/>
            </head>

            <div class = "mande">
            <h1>MANDE</h1>
            <h2> CALIFICA EL SERVICIO</h2>

            <div class="stars">
            <form action="" onSubmit = {this.onSubmit}> 
                <input class="star star-5" id="5" type="radio" name="star" onChange = {this.onRadioChange} />
                <label class="star star-5" for="5"></label>
                <input class="star star-4" id="4" type="radio" name="star" onChange  = {this.onRadioChange}/>
                <label class="star star-4" for="4"></label>
                <input class="star star-3" id="3" type="radio" name="star" onChange  = {this.onRadioChange}/>
                <label class="star star-3" for="3"></label>
                <input class="star star-2" id="2" type="radio" name="star" onChange  = {this.onRadioChange}/>
                <label class="star star-2" for="2"></label>
                <input class="star star-1" id="1" type="radio" name="star" onChange  = {this.onRadioChange} />
                <label class="star star-1" for="1"></label>

                
                <input type="submit" value="Enviar Calificacion"  />
               
               
            </form>
            
            </div> 
            
            </div>
          
            </Fragment>
         

        );



    }



}

export default Calificar;