import React from 'react';

import './NotFound.css';

function NotFound() {
	return (
		<div className='not-found'>
			<p className='not-found_error'>404</p>
      <a className='not-found_home-link' href="/">На главную</a>
		</div>
	)
}

export default React.memo(NotFound);