import React from 'react';

import './Error404.css';

import NotFound from '../../assets/images/notfound.png';

function Error404 () {
	return (
		<>
			<img className="notfound" src={NotFound} alt="" />
		</>
	)
}

export default Error404;
