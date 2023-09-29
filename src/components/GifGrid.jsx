import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";



//Las funciones no deben ir en los componentes
export const GifGrid = ({category}) => {


    const { images, isLoading} = useFetchGifs(category);


    return (
    <>
    <h3>{category}</h3>
    {
        isLoading && (<h2>Cargando...</h2>)
    }

        <div className="card-grid">
        {
            images.map((image) => (
                <GifItem 
                key={image.id}
                //Esparcir las propiedades
                {...image }

                />
            ))
        }
        </div>
    </>
  )
    } 
