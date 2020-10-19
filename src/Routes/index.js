import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Login, MainApp } from '../Pages'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/dashboard" exact>
                    <MainApp/>
                </Route>
                <Route path="/" exact>
                    <Login/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
