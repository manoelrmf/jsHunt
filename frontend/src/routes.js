import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Main from './pages/main'
import Product from './pages/product'

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/product/:id"  component={Product} />
            </Switch>
        </BrowserRouter>
    )
}