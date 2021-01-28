import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NavBar } from '../components/navbar/NavBar';
import { Description } from '../pages/Description';
import { Programming } from '../pages/Programming';

export const Routes = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route exact path="/description" component={Description} />
                <Route exact path="/" component={Programming} />
            </Switch>
        </BrowserRouter>
    );
}
