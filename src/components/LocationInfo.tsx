import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import styled from 'styled-components';

const LocationInfoWrap = styled.div`
    display: none;
`;

const LocationInfo: React.FC<RouteComponentProps> = ({ location }) => {
    return (
        <LocationInfoWrap data-testid="location-info">
            {location.pathname}
        </LocationInfoWrap>
    );
};

export default withRouter(LocationInfo);
