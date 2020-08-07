import React from 'react'
import {Link} from 'react-router-dom';



const Nofound=()=>{
    // const devolver=()=>{
    //     return(
    //         <Home />
    //     )
    // }  
    return(
    
    //solamnente se esta empujando el h1 y no esta empujando el div para eso funciona el Fragment
    // hay otra forma de usaar que son solamente los parentesis sin el Raect.Fragment y funciona somente cuando cuando se esta pasando un elemento
    <React.Fragment>
        <h1>no encontado</h1>
        <p>regreasa al home <Link to="/">aqui</Link></p>
    </React.Fragment>
    
)}

export default Nofound;