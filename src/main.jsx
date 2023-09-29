import React from 'react'
import ReactDOM from 'react-dom/client'
import { GifExpertApp } from './GifExpertApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>,
)

{/*Hacemos un listado de lo que voy a utilizar*/}
{/*Cuando voy a cambiar información en html pienso un Hook para mantener el estado*/}