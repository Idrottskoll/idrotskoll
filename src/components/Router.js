import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import EventSchedule from './pages/EventSchedule';
import Account from './pages/Account';
import RequestRecording from './pages/RequestRecording';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicies from './pages/PrivacyPolicies';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/Karlssonslister" component={Index} />
            <Route exact path="/tabla" component={EventSchedule} />
            <Route exact path="/konto" component={Account} />
            <Route exact path="/inspelningsforfragan" component={RequestRecording} />
            <Route exact path="/villkor" component={TermsAndConditions} />
            <Route exact path="/sekretesspolicy" component={PrivacyPolicies} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;
