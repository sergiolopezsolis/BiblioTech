import React from 'react';
import '../../App.css';
import './estilo.css'
import axios from "axios";
var formVar=localStorage.getItem('registerForm'); //Take value of LocalStorage
const baseUrl="http://bibliotechapis.somee.com/api/users";

export default function SignUp() {
  //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  function iniciarSesion(){
    let id = document.getElementById("$id").value;
    let password = document.getElementById("password").value;
    console.log(id,password)
    axios.get(baseUrl+"/"+id).then((response) => {
        console.log(response);
        let  idbd = response.data.$id;
        let  passwordbd = response.data.password;
        console.log(idbd,passwordbd)
        
        {
            if(password== passwordbd)
            {
                localStorage.setItem('sesion', id);
                document.location.href="/";
                
            }
            else
            alert("contraseña incorrecta"); //Alert of password
            
        
      
        }
    }).catch((err) => {
        console.log(err);
        alert("Numero de identificacion incorrecto");//Alert of Id
    })
    
           
  }
  return(
    <div className="App">
      <header className="App-header">    
        <html>
        <div class="container-form sign-up">
                        <div class="welcome-back">
                            <div class="message">
                                <h2>Integrantes</h2>
                                <p>Hansel Jesús Esparza Peinado</p>
                                <p>José Noel Rios Alvarez</p>
                                <p>Sergio Alfredo López Solis</p>
                            </div>
                        </div>
                        <form class="formulario">
                            <h2 class="create-account">Iniciar sesión</h2>
                            <input placeholder="Usuario" id="$id" name='Usuario'/>
                            <input placeholder="Contraseña" id="password" type="password" name='Contraseña'/>
                            <input type="button" value="Iniciar sesión" onClick={iniciarSesion}></input>
                        </form>
                    </div>
        </html>
      </header>
    </div>
    );
}