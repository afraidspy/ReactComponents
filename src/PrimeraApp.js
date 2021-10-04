//Componentes
//Con base a funciones: Functional components

import React, { Fragment } from 'react';
//Obliga al componente a que reciba ciertas propiedades
import { PropTypes } from 'prop-types';
/*const PrimerApp = () => {
    return <h1> Example</h1>;
}*/
const PrimeraApp = ({message}) => {
    const name = "Jess";
    const array = [2,3,5,2,0]
    const json = {
        'name': 'Jess',
        'surname': 'San',
        'age': "28"
    };
    console.log(message);
    return (
       /*  <Fragment>
            <h1> Example</h1>
            <p> First aplication</p>
        </Fragment>**/
        <>
            <h1> Example {message}</h1>
            <p> First aplication for {name}</p>
            <p> {array}</p>
            <p> {json['age']}</p>
        </>
        );
}
/*Indica las propiedades que recibe el componente
y su tipo de datps*/
PrimeraApp.propTypes = {
    //Indica que la propiedad debe de ser obligatoria
    message: PropTypes.string.isRequired
}
/**
 * Si una propiedad es definida como opcional,pero
 * no se pasa como parámetro, entonces
 * se coloca el atributo con un valor por defecto.
 */
PrimeraApp.defaultProps = {
    message: "Jessica default"

}


export default PrimeraApp;