import axios from "axios";
import React from "react";

const baseurl="http://bibliotechapis.somee.com/api/prestamos";
class Prestamos extends React.Component{
   
    constructor(props){
        super(props);
        this.state={
            prestamos:[],
            idp:"",
            nom:"",
            apellp:"",
            apellm:"",
            tel:0,
            corr:"",
            dir:"",
            fechap:"",
            fechal:""
        
        };
        this.handleidp=this.handleidp.bind(this);
        this.handlenom=this.handlenom.bind(this);
        this.handleapellp=this.handleapellp.bind(this);
        this.handleapellm=this.handleapellm.bind(this);
        this.handletel=this.handletel.bind(this);
        this.handlecorr=this.handlecorr.bind(this);   
        this.handledir=this.handledir.bind(this);
        this.handlefechap=this.handlefechap.bind(this);
        this.handlefechal=this.handlefechal.bind(this);


        this.GuardarDatos=this.GuardarDatos.bind(this);
        this.BorrarDatos=this.BorrarDatos.bind(this);
        this.EditarDatos=this.EditarDatos.bind(this);
        
    }
    
    handleidp(event){
        this.setState({idp:event.target.value});
    }
    handlenom(event){
        this.setState({nom:event.target.value});
    }
    handleapellp(event){
        this.setState({apellp:event.target.value});
    }
    handleapellm(event){
        this.setState({apellm:event.target.value});
    }
    handletel(event){
        this.setState({tel:event.target.value});
    }
  
    handlecorr(event){
        this.setState({corr:event.target.value});
    }
    handledir(event){
        this.setState({dir:event.target.value});
    }
   
     handlefechap(event){
    this.setState({fechap:event.target.value});
    }
    handlefechal(event){
    this.setState({fechal:event.target.value});
}
    cargarDatos(){
        axios.get(baseurl).then(Response=>{
            this.setState({prestamos: Response.data});
        })
    }
    
 
    BorrarDatos(){
        axios.delete(baseurl+"/"+this.state.idp).then(Response=>{
            this.cargarDatos();
        })
    }
    EditarDatos(){
        axios.put(baseurl+"/"+this.state.idp,{

            Id_Prestamo:this.state.idp,
            Nombres:this.state.nom,
            ApellidoPaterno:this.state.apellp,
            ApellidoMaterno:this.state.apellm,
            Telefono:this.state.tel,
            Correo:this.state.corr,
            Direccion:this.state.dir,
            FechaPrestamo:this.state.fechap,
            FechaLimite:this.state.fechal
        }
       
        ).then(Response=>{
            this.cargarDatos();
           
        })
    }
    GuardarDatos(){
        let prestamos={
            $id:this.state.idp,
            Nombres:this.state.nom,
            ApellidoPaterno:this.state.apellp,
            ApellidoMaterno:this.state.apellm,
            Telefono:this.state.tel,
            Correo:this.state.corr,
            Direccion:this.state.dir,
            FechaPrestamo:this.state.fechap,
            FechaLimite:this.state.fechal
        }
        console.log(prestamos);
        axios.post(baseurl,prestamos).then(Response=>{
            this.cargarDatos();
            
        })
    }
    
    componentDidMount(){
        this.cargarDatos();
    }

   
    render(){
        return(
            <div className="cont-tabla">
                 <table >
                     <tr>
                         <td>ID prestamo</td><td><input value={this.state.idp} onChange={this.handleidp}/></td>
                     </tr>
                     <tr>
                         <td>Nombres:</td><td><input  value={this.state.nom} onChange={this.handlenom}/></td>
                     </tr>
                     <tr>
                         <td>Apellido Paterno:</td><td><input  value={this.state.apellp} onChange={this.handleapellp}/></td>
                     </tr>
                     <tr>
                         <td>Apellido Materno:</td><td><input value={this.state.apellm} onChange={this.handleapellm}/></td>
                     </tr>
                     <tr>
                         <td>Telefono:</td><td><input  value={this.state.tel} onChange={this.handletel}/></td>
                     </tr>
                     <tr>
                         <td>Correo:</td><td><input  value={this.state.corr} onChange={this.handlecorr}/></td>
                     </tr>
                     <tr>
                         <td>Dirección:</td><td><input  value={this.state.dir} onChange={this.handledir}/></td>
                     </tr>
                     <tr>
                         <td>FechaPrestamo:</td><td><input  value={this.state.fechap} onChange={this.handlefechap}/></td>
                     </tr>
                     <tr>
                         <td>FechaLimite:</td><td><input  value={this.state.fechal} onChange={this.handlefechal}/></td>
                     </tr>

                     <tr>
                                        <td colSpan={4}>
                                            <button onClick={this.EditarDatos}>Editar</button>
                                            {" "}
                                            <button onClick={this.GuardarDatos}>Guardar</button>
                                            {" "}
                                            <button onClick={this.BorrarDatos}>Borrar</button>
                                            {" "}
                                        </td>
                     </tr>
                 </table>
                 <table border='1' className="tabla">
                    <thead>
                        <tr>
                            <th>Id prestamo</th>
                            <th>Nombres</th>
                            <th>ApellidoPaterno</th>
                            <th>ApellidoMaterno</th>
                            <th>Telefono</th>
                            <th>Correo</th>
                            <th>Direccion</th>
                            <th>FechaPrestamo</th>
                            <th>FechaLimite</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.prestamos.map(prestamos=>{
                                return(
                                    <tr>
                                        <td>{prestamos.Id_Prestamo}</td>
                                        <td>{prestamos.Nombres}</td>
                                        <td>{prestamos.ApellidoPaterno}</td>
                                        <td>{prestamos.ApellidoMaterno}</td>
                                        <td>{prestamos.Telefono}</td>
                                        <td>{prestamos.Correo}</td>
                                        <td>{prestamos.Direccion}</td>
                                        <td>{prestamos.FechaPrestamo}</td>
                                        <td>{prestamos.FechaLimite}</td>
                                    
                                    </tr>
                                )
                            })}
                    </tbody>
                </table>


            </div>
        );

    }
}

export default Prestamos