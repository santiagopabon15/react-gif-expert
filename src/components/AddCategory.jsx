import { useState } from 'react';


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) => {
       // console.log(event.target.value);
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        //console.log(event);
                //Para evitar un refresh de la pagina
        event.preventDefault();
        if(inputValue.trim().length <=1) return;
        //setCategories(categories => [InputValue, ...categories])
        setInputValue('');
        onNewCategory(inputValue.trim());
    }


  return (
    //    <form onSubmit={(event) => onSubmit(event)}>
    <form onSubmit={onSubmit}>
    <input
        //Properties
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
    />
    </form>
  )
}
