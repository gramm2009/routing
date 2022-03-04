import { Redirect, Route, Switch } from 'react-router-dom';

import NotFound from "../modules/pages/404";
import Contacts from '../modules/pages/contacts';
import Home from '../modules/pages/home';
import Info from '../modules/pages/info';

export const useRouters = ( status: boolean ) => {
    if ( status = true ) {
        return (
            <Switch>
                <Route exact path="/home" component={ Home } />
                <Route exact path="/info" component={ Info } />
                <Route exact path="/contacts" component={ Contacts } />
                <Route component={ NotFound } />
            </Switch>
        );
    } else {
        return (
            <Switch>
                {/* <Route exact path="/login" component={LoginPage} />
                <Redirect to="/login" /> */}
            </Switch>
        );
    }
};
