const axios = require( 'axios' ).default

import { useCallback, useEffect, useMemo, useState, memo } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import './app.scss';
import Topbar from './project/topbar';
import { useRouters } from "./router/Routers"

export const App: React.FC = () => {

	const Router = useRouters( true )

	return (
		<div className="app">
			<div className="app__container">
				<Topbar />
				<div className='app__body'>
				{ Router }
				</div>
			</div>
		</div>
	);
};
