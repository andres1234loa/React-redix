import React from 'react';
import {connect} from 'react-redux';
import {setFavorite,deleteFavorite} from '../actions' //como dentro de la carpeta hay un index no es necerio importar la carpeta
import PropType from 'prop-types';//es para verificas las propiedades
import '../assets/style/components/CarouselItem.scss';
import playIcon from '../assets/style/static/play-icon.png';
import remove from '../assets/style/static/remove.png';
import plusIcon from '../assets/style/static/plus-icon.png';
// {ver}
// const CarouselItem=({cover,title,year,contentRating,duration})=>{
   const CarouselItem=(props)=>{
    console.log(props)
    const {id,cover,title,year,contentRating,duration,isList}=props;   
    //handleSetFavorite va manejar el guardado de nuestros favoritos
    const  handleSetFavorite=()=>{
        //son los cada uno de los elementos que se van a pasar a serfavorite 
        props.setFavorite({
            //estos elementos se van a mostrar de maylist
            id,cover,title,year,contentRating,duration,isList
        })
    } 
    const  handleDeleteFavorite=(itemId)=>
    {
        
        props.deleteFavorite(itemId)
    }
    return(
    <div className="carousel-item">
        
        <img className="carousel-item__img" src={cover} alt={title} />
        <div className="carousel-item__details">
            <div>
                <img className="carousel-item__details--img" 
                     src={playIcon} 
                     alt="Play Icon" 
                     /> 
                     {isList==false ?
                
                     <img className="carousel-item__details--img" 
                     src={remove} 
                     alt="remove" 
                     onClick={()=>handleDeleteFavorite(id)}
                     />
                     :
                     <img className="carousel-item__details--img" 
                        src={plusIcon} 
                        alt="Plus Icon" 
                        onClick={handleSetFavorite} /> 
                     
                    }
                
                 
            </div>
            <p className="carousel-item__details--title">Título descriptivo</p>
            <p className="carousel-item__details--subtitle">2019 16+ 114 minutos
            {`${year} ${contentRating} ${duration}`}
            </p>
        </div>
    </div>

)
}
//el proptype funciona para verificar el tipo de dato de cada propiedad
// aqui se define que tipos de datos se debe recibir
// CarouselItem.PropType={ si llega ver un error hay que poner la P por p
CarouselItem.PropType={
cover:PropType.string,// para esto se necesita instalar el paquete poptype y se le indica que va se un string para la propiedad
title:PropType.string,
year:PropType.number,
contentRating:PropType.string,
duration:PropType.string,
}
//mapDispatchProps es la que se encarga de ancapsular a setFavorite
const mapDispatchToProps={
    //setFavorite es la importacion que estamos haciendo     
    setFavorite,
    deleteFavorite,
}
//el primer parametro que se pasa  es mapStateToProps y el segundo es a
export default connect(null, mapDispatchToProps)(CarouselItem);