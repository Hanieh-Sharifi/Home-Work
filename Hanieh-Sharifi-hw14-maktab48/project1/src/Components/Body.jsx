import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainUsersPage from '../Pages/MainUsersPage';
import DetailedUser from '../Pages/DetailedUser';
import AboutUs from '../Pages/AboutUs';
import NotFound from '../Pages/NotFound';


function Body() {

    return (
        <Switch>
            <Route exact path="/">
                <MainUsersPage/>
            </Route>
            <Route path="/user/:id">
                <DetailedUser/>
            </Route>
            <Route path="/about">
                <AboutUs/>
            </Route>
            <Route path="*">
                <NotFound/>
            </Route>
        </Switch>
    )
}

export default Body;
