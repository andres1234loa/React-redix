//la carpeta se crea cuando se va amanejar redux y reacr ridux
//los action es cuando se esta manejando algun evento 

//payload es la informacion que se va a transamitir

export const setFavorite=payload=>({

    //es el nombre de como se va a identificar
    type: 'SET_FAVORITE',
    payload,
}); 



export const deleteFavorite=payload=>({
  // payload solamente trae el id
  type:'DELETE_FAVORITE',
  //payload es el objeto que se va a pasar
  payload,
})


export const loginRequest=payload=>({
  type: 'LOGIN_REQUEST',
  payload,
})