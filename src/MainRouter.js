import React from "react";
import Homepage from './Pages/Homepage';
import Menpage from './Pages/Menpage/Menpage';
import Womenpage from './Pages/Womenpage/Womenpage';
import {
    Switch,
    Route,
    Link 
 } from "react-router-dom";

 export default function MainRouter() {
    return (
        <Switch>
            <Route exact path="/">
                <Homepage/>
            </Route>
            <Route exact path="/Men">
                <Menpage/>
            </Route>
            <Route exact path="/Women">
                <Womenpage/>
            </Route>
        </Switch>
    );
}
