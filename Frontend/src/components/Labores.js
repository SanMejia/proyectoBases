import React,{Component} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ListGroup,ListGroupItem,ListGroupItemProps, Table} from 'react-bootstrap';

class Labores extends Component{

    

     state = {

        labor: [],
        status: null


    };

    async componentWillMount(){


        var labor_id = this.props.labor_id;

        if(labor_id === 'Cercanos'){

            this.getlaborCercanos();
            


        }else if(labor_id === 'Precio'){

            this.getlaborPrecio();
            

        }



    }

    getlaborCercanos = () => {

        axios.get("http://localhost:4000/labor/cercano")
        .then( res => {

            this.setState({

                labor: res.data,
                status: 'success'
            });
            

        });

    }

    getlaborPrecio = () => {

        axios.get("http://localhost:4000/labor/menor_precio")
        .then( res => {

            this.setState({

                labor: res.data,
                status: 'success'
            });

            console.log(this.state);


        });

    }

    render(){
        
     

        if(this.state.labor.length >= 1 ){

            var listlabor = this.state.labor.map((labor) => {

                return(
             
                        
            
                    //<ListGroupItem action variant="light" >{labor.nombre_labor}</ListGroupItem>
                    <tr>
                        <td>{labor.id_labor}</td>
                        <td>{labor.nombre}</td>
                        <td>{labor.estrellas}</td>
                        <td>{labor.descripcion}</td>
                        <td>{labor.unidad_labor}</td>
                        <td>{labor.direccion}</td>
                    </tr>
                        
                    
        
                );

            });

            return(

                
                    /*
                    <ul class="list-group">


                        {listlabor}

                    </ul>*/


                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Estrellas</th>
                            <th>Descripción</th>
                            <th>Precio</th>
                            <th>Dirección</th>
                            </tr>
                        </thead>
                        <tbody>

                            {listlabor}

                        </tbody>
                    </ Table>

                

            );

            

        }else if(this.state.labor.length === 0 && this.state.status === 'success'){

            return(
                <div>
                    
                    <h2>No hay labor para mostrar.</h2>

                </div>
    
            );



        }else{

            return(

                <div>
                        
                    <h2>Cargando...</h2>
                    <p>Espere un momento</p>

                </div>
            );
        }
        

      



    }


}

export default Labores;