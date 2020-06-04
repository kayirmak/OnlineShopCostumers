import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Checkout from './components/Checkout/Checkout';

import K from './components/Checkout/K';
import Check from './components/Check';

const Router = () => {
    return(
        <BrowserRouter>
            <NavBar/>
            <Route path="/" exact component={() => <Checkout/>}></Route>
        </BrowserRouter>
    )
}

export default Router;