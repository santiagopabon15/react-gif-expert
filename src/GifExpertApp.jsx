import  { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    //Lo voy a inicializar con un arreglo
    const [categories, setCategories] = useState(['One Punch']);
    //Renderizar un listado basado en las categorias con ol
    //No se recomiena poner los useState dentro de condicionales
    const onAddCategory = (newCategory) => {
      //Para adicionar un nuevo elemento debo usar setCategories
      //Al poner ... estoy haciendo como una copia del anterior, es una desestructuración
      //Si quiero que valorant sea la primera lo cambio 
      //  setCategories([...categories, 'Valorant']);
        //setCategories(cat => [...cat, 'Valorant']);

        if(categories.includes(newCategory)) return; 
        setCategories([newCategory, ...categories])
    }

  return (
    <>
    {/*titulo */}
        <h1>GifExpertApp</h1>
    {/*Input */}
    {/*Set categories es una propiedad de mi componente setcategories que va a retornar la función*/}
    <AddCategory 
    //setCategories={setCategories}
      onNewCategory = {(value) => onAddCategory(value)}
    />
    {/*Listado de Gif */}
        {/*<button onClick={onAddCategory}>Agregar</button>*/}

        {/*Estoy transformando el arreglo para que lea cada uno de los elementos con map */}
        {
            categories.map((category) => (
                                //No se recomienda usar el indice 
                <GifGrid key={category} 
                category={category}/>
            ))
        }

            {/*Gif Item */}


    </>
  )
}
