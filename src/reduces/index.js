
//la carpeta se crea cuando se va amanejar redux y reacr ridux
const reducer=(state,action)=>{

    switch(action.type)
    {   
        case 'SET_FAVORITE':
            return {
                //de esta desestructurando 
                ...state,
                //myList que elementos se van a actulizar
                myList:[...state.myList,action.payload]
            } 
        case 'DELETE_FAVORITE':
            return{ 
                ...state,
                // items es nuestro estado original
                myList:state.myList.filter(items=>items.id!==action.payload)
            }

        case 'LOGIN_REQUEST':
        return{
            //rescatar el estado que se tiene 
            ...state,    
            user:action.payload,
        }
        

        //me permite enviar el estado comolo encontre
        default:
            //si no concide con ninguno de los casos retorna el state
            return  state;
    }
}

export default reducer; 