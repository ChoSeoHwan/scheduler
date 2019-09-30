import React from 'react';
import styled from 'styled-components';

const ContentWrap = styled.section`
    display: flex;
    flex: 1;
    flex-wrap: wrap;
`;

const Content: React.FC = ({ children }) => {
    return <ContentWrap>{children}</ContentWrap>;
};

export default Content;
