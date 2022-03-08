import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFound from '../project/pages/404';

import Comp1 from '../project/pages/contacts/components/comp1/Comp1';
import Comp2 from '../project/pages/contacts/components/comp2/Comp2';


export const ContactsRouter = () => {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route exact path={ `${ match.path }/comp1` } component={ Comp1 } />
            <Route exact path={ `${ match.path }/comp2` } component={ Comp2 } />
            <Route exact path={ `${ match.path }` } ><h3>Пожалуйста, выберите тему.</h3></Route>
            <Route component={ NotFound } />
        </Switch>
    );
};
