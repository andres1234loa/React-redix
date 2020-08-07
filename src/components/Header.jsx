import Logo from '../assets/style/static/logo-platzi-video-BW2.png';
import {connect} from 'react-redux'
import gravatar from '../util/gravatar'
import {Link} from 'react-router-dom'
import UserIcon from '../assets/style/static/user-icon.png'
import '../assets/style/components/header.scss';
import React from 'react';
import ReactRouter from 'react-router';
import { object } from 'prop-types';


const headeer=props=>{
    const {user}=props;
    //una operacion termanria es es cuuando  se usa validacio ? verdadero:falsp
    //en la linea de abajo se puede validar cuantos elementos tiene user
    const hasUser=Object.keys(user).length>0
    return(
            <header className="header">
            <img className="header__img" src={Logo} alt="Platzi Video" />
            <div className="header__menu">
            <div className="header__menu--profile">
            
            {hasUser ?
                <img src={gravatar(user.email)} alt={user.email} />
                :
                <img src={UserIcon} alt="" />
            }
                <p>Perfil</p>
            </div>
            <ul>
                <li><a href="/">Cuenta</a></li>
                <li><Link to="/login">Cerrar Sesión</Link></li>
            </ul>
            </div>
        </header>
    )
}

// export default headeer;
const mapStateToProps=state=>{
   return{
       user:state.user
   }  
}
export default connect(mapStateToProps,null)(headeer);