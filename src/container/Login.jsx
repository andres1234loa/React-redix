import React,{useState} from 'react';
import {connect} from 'react-redux';
import {loginRequest} from '../actions';
import {Link} from 'react-router-dom';
import GoogleIcon  from '../assets/style/static/google-icon.png';
import TwitterIcon  from '../assets/style/static/twitter-icon.png';
import '../assets/style/components/Login.scss'

const Login=(props)=>{
    console.log(props)
    //setValues es la funcion que va a guardar los valores del formulario
    // useState va contener un estado inicial que es nuestro estado
    const [form,setValues]=useState({
        email:'',
    })
    //handInput es una funcion que va manejar los cambios que cada vez que estemos escribiendo 
    const handInput=event=>{
        

        setValues({
            ...form,

            //para obtener los datos de form dinamicamente
            [event.target.name]:event.target.value
        })
    }
    const handleSubmit=event=>{
        event.preventDefault();
        props.loginRequest(form);
        props.history.push('/') ;
        
    }
    return(
        <section className="login">
            <section className="login__container">
                <h2>Inicia sesión</h2>
                <form className="login__container--form" onSubmit={handleSubmit}>
                    <input 
                    name="email" className="input" type="text" placeholder="Correo"
                     onChange={handInput} />
                    <input name="password" className="input" type="password" 
                    placeholder="Contraseña" />
                    <button className="button">Iniciar sesión</button>
                    <div className="login__container--remember-me">
                        <label>
                            <input type="checkbox" id="cbox1" value="first_checkbox" />Recuérdame
                        </label>
                        <a href="/">Olvidé mi contraseña</a>
                    </div>
                </form>

                <section className="login__container--social-media">
                    <div><img src={GoogleIcon} /> Inicia sesión con Google</div>
                    <div><img src={TwitterIcon} /> Inicia sesión con Twitter</div>
                </section>
                <p className="login__container--register">No tienes ninguna cuenta <Link to="/register">Regístrate</Link></p>
            </section>
    </section>
    )
}
 const mapDistpatchToProps=
 {
    loginRequest
 }
export default connect(null,mapDistpatchToProps)(Login);
