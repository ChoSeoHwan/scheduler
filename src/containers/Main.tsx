import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import Scheduler from 'containers/scheduler/Scheduler';

const Main: React.FC = () => {
    return (
        <Switch>
            <Route page="/scheduler" component={Scheduler} />
            <Redirect to="/scheduler" />
        </Switch>
    );
};

export default Main;
