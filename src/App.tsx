const axios = require( 'axios' ).default

import { useCallback, useEffect, useMemo, useState, memo } from 'react';
import './app.scss';
import Topbar from './modules/topbar';
import { useRouters } from "./router/Routers"

export const App: React.FC = () => {

	const Router = useRouters( true )

	return (
		<div className="app">
			<div className="app__container">
				<Topbar />
				<div className='app__body'>
					<nav className='nav'>
						вложенный роутинг
					</nav>
					<div className="content">{ Router }</div>
				</div>
			</div>
		</div>
	);
};