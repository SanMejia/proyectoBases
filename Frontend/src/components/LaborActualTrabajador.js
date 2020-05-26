import React, {Component} from 'react';
import axios from 'axios';
import MapView from './MapaTrabajador2.js';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const style = {
    height: "400px",
    width: "100%"
  };

class LaborActualTrabajador extends Component{

    
        
        state = {
          showingInfoWindow: false,
          activeMarker: {},
          selectedPlace: {},
          mapLoaded: false,
          usuarioActual: []
        };
        
      
    
      onMarkerClick = (props, marker, e) => {
        this.setState(prevState => ({
          selectedPlace: props,
          activeMarker: marker,
          showingInfoWindow: true
        }));
      };
    
      onClose = () => {
        if (this.state.showingInfoWindow) {
          this.setState({
            showingInfoWindow: false,
            activeMarker: null
          });
        }
      };
    
      onMarkerMounted = element => {
          console.log(element.marker)
        this.onMarkerClick(element.props, element.marker, element);
      };
    
      handleMapIdle = () => {
        this.setState({
          mapLoaded: true
        });
      };
    
        async componentWillMount() {
        const res = await axios.get('http://localhost:4000/usuarioActual/obteneri/3333');
        await this.setState({usuarioActual: res.data[0]});
        console.log("estoy vivooooo")
       } 
       onSubmit = async (e) => {
        e.preventDefault();
       if(false){console.log("1")
           }
           else{
            document.location.href = "http://localhost:3000/Trabajador";
           }
       }
    
    render(){

        return(

        <div className="mande-box2">
        <h1>MANDE</h1>
        <p className = "subtitulo">Detalles de la labor</p>
        
        <input className="Ayuda" type="submit" value="Ayuda?" />

        <h3>Lugar de la Labor</h3>
    
        <form className ="mapa">
            {/*<!-- AQUI IRA EL MAPA -->*/}  
            <Map
        google={this.props.google}
        style={style}
        zoom={17}
        initialCenter={{ lat: 3.498164, lng: -76.491464}}
        onIdle={this.handleMapIdle}
      >
        {this.state.mapLoaded && (
          <Marker ref={this.onMarkerMounted} position={{ lat: 3.498164, lng: -76.491464}} onClick={this.onMarkerClick} />
        )}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>Your Location Here!</div>
        </InfoWindow>
      </Map>
    );
        </form>
        <h3>Datos del Cliente:</h3>
        <form onSubmit = {this.onSubmit} >
            
            {/*<!-- NOMBRE -->*/}  
            <label for="Nombre">Nombre:</label> <br/>
            <input type="text" disabled value = {this.state.usuarioActual.nombre}/>
             {/*<!-- TELEFONO -->*/}
            <label for="Telefono">Telefono:</label> <br/>
            <input type="text" placeholder="Aqui va el Telefono" disabled value = {this.state.usuarioActual.telefono}/>
            <input className= "FinalizarLabor" type="submit" value="Finalizar Labor"  />   
        </form>   
        

        </div>


        );




    }


}


export default GoogleApiWrapper({
    apiKey: ('AIzaSyAArwzjSXp89P_0IQVObJ6d1GVNfneRi-I')
  })(LaborActualTrabajador)