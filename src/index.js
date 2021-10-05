import React from 'react'
import ReactDOM from 'react-dom';
//Importación de un componente
import PrimeraApp from './PrimeraApp';
//Importación de la hoja de estilos
import './index.css';
//Sirve para redendizar el contenido en la vista HTML
/*const saludo = <h1>Example</h1>
const divRoot = document.querySelector('#root');
ReactDOM.render(saludo, divRoot);
console.log(divRoot);*/
// Se manda a llamar al componente por su nombre
const divRoot = document.querySelector('#root');
ReactDOM.render(<PrimeraApp value="1"/>,divRoot);
