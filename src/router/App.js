//este scrip va ser como el router
import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'//estos componenetes son los mismos que esta en la parte de abajo
import Home from '../container/Home';
import Login from '../container/Login';     
import Register from '../container/Register';     
import Nofound from '../container/Nofount';
import Layout from '../components/Layout';
const App=()=>
(
    //con el  BrowserRouter se va encapsular lo que se va a necesitar para trabajar
    // y que va saber que se esta manejando las rutas
    // Switch es para manejar las rutas 
    <BrowserRouter> 
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route component={Nofound} />
            </Switch>
        </Layout>
    </BrowserRouter>
)
//la linea de abajo es la principal ruta 
// <Route exact(que la ruta sea exacta) path="/"(path es el va a recibir la ruta y la forma de entrar) component={Home} (que use un componente que es la ruta principal)/>
export default App;