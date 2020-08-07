import React,{useState,useEffect} from 'react';
import { connect } from 'react-redux';
// connect redux
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/carousel-item';
import Search from '../components/search';// los componentes no es necesesario colocar las extensiones, solamente  a los estilos de sacss
import '../assets/style/App.scss' //aqui va un componente universal  por eso se puede 
const Home=({myList,trends})=>{//cuando no tiene los {} se le esta indicando que 

    return ( 
        <div>
            <Search />
            {myList.length > 0 && //&& agrgar,si es mayor que 0 =  aque no se muestre el bloque de codigo que biene a continuacion videos.mylist.length > 0 &&
                <Categories title="Mi lista" >
                    <Carousel> 
                    {myList.map(item=>
                        <CarouselItem key={item.id}{...item}
                        isList={false}
                        />
                        
                    )}
                        
                    </Carousel>
                </Categories>
            }
            
            <Categories title="tendencias">
                <Carousel> 
                    {trends.map(item=>//videos.trends.map(item=>
                        <CarouselItem key={item.id}{...item}
                        />
                    )}
                </Carousel>
            </Categories>
            <Categories title="lo mas vendido">
                <Carousel> 
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                </Carousel>
            </Categories>
        </div>
    )
 
}

const mapStateToProps=state=>{
    
    return{
        //son las propiedades que se van a usar en la parte de arriba
        myList:state.myList,
        trends: state.trends,
        // originals:state.originals

        
    }
}
// connect(mapStateToProps,mapDispatchToProps)(Counter)
// export default connect()(Home)
// export default connect(mapStateToProps,null )(Home) recibe dos parametros    
//el segundo parametro nos permite mapear las acciones que vamos a ejecutar(puede ser los eventos    )
export default connect(mapStateToProps, null)(Home);