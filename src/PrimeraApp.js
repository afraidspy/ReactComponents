//Componentes con base a funciones: Functional components
import React, { Fragment,useState } from 'react';
//Obliga al componente a que reciba ciertas propiedades
import { PropTypes } from 'prop-types';
/*const PrimerApp = () => {
    return <h1> Example</h1>;
}*/
const PrimeraApp = ({value}) => {
    const name = "Jess";
    const array = [2,3,5,2,0]
    const json = {
        'name': 'Jess',
        'surname': 'San',
        'age': "28"
    };
    console.log(value);

    const [counter, setCounter] = useState(value);
   // const [counter2, setValorInicial] = useState(value);

    const handleAdd = ()=>{
        setCounter(parseInt(counter)+1)
    };
    const handleRestar = () => {
        setCounter(parseInt(counter)-1)
    }
    const handleReset = () => {
        setCounter(value)
    }

    return (
       /*  <Fragment>
            <h1> Example</h1>
            <p> First aplication</p>
        </Fragment>**/
        <>
            <h1> Example {value}</h1>
            <p> First aplication for {name}</p>
            <p> {array}</p>
            <p> {json['age']}</p>
            <button onClick={handleRestar}>Restar</button>
            <button onClick={handleReset}>{counter}</button>
            <button onClick={handleAdd}>Sumar</button>
        </>
        );
}
/*Indica las propiedades que recibe el componente
y su tipo de datps*/
PrimeraApp.propTypes = {
    //Indica que la propiedad debe de ser obligatoria
    value: PropTypes.number.isRequired
}
/**
 * Si una propiedad es definida como opcional,pero
 * no se pasa como parámetro, entonces
 * se coloca el atributo con un valor por defecto.
 */
PrimeraApp.defaultProps = {
    value: "Jessica default"

}
export default PrimeraApp;