import React from 'react';

import Navbar from '../navbar/Navbar';

function Layout (props) {
  return(
    <>
			<Navbar/>
			{/* Tengo que validar si estoy recibiendo como props lo que está dentro de la etiqueta Layout en APP, i need to validate if im receiving as props whait is inside Layout Component within App */}
			{props.children}
    </>
    )
}

export default Layout;
