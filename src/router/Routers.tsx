import { Redirect, Route, Switch } from 'react-router-dom';

import NotFound from "../project/pages/404";
import Contacts from '../project/pages/contacts';
import Home from '../project/pages/home';
import Info from '../project/pages/info';

export const useRouters = ( status: boolean ) => {
    if ( status = true ) {
        return (
            <Switch>
                <Route exact  path="/info" component={ Info } />
                <Route   path="/contacts" component={ Contacts } />
                <Route exact  path="/" component={ Home } />
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
