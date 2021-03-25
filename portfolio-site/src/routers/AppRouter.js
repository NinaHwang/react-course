import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// browserrouter: to create the new router
// route: for every single page
import ContactPage from '../components/ContactPage';
import DashboardPage from '../components/DashboardPage';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import PortfolioMainpage from '../components/PorfolioMainPage';
import PortfolioPage from '../components/PortfolioPage'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
                <Switch>
                <Route path="/" component={DashboardPage} exact={true} />
                <Route path="/portfolio" component={PortfolioMainpage} exact={true} />
                <Route path="/portfolio/:id" component={PortfolioPage} />
                <Route path="/contact" component={ContactPage} />
                <Route component={NotFoundPage} />
                </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;