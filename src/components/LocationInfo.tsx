import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

import { LocationInfoWrap } from 'styles/components/LocationInfo';

const LocationInfo: React.FC<RouteComponentProps> = ({ location }) => {
    return (
        <LocationInfoWrap data-testid="location-info">
            {location.pathname}
        </LocationInfoWrap>
    );
};

export default withRouter(LocationInfo);
