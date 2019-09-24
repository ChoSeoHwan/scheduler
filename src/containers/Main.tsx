import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import Scheduler from 'containers/scheduler/Scheduler';

const Main: React.FC = () => {
    return (
        <Switch>
            <Route path="/scheduler" component={Scheduler} />
            <Redirect to="/scheduler" />
        </Switch>
    );
};

export default Main;
