import * as React from 'react';

import styled from 'styled-components';

interface PageWrapState {
    image: string;
}

const PageWrapStyle = styled.section<PageWrapState>`
    display: flex;
    flex-direction: column;
    flex: 1;
    flex-wrap: nowrap;

    background-image: url(${({ image }) => image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
`;

const PageWrap: React.FC = ({ children }) => {
    return (
        <PageWrapStyle image={'https://picsum.photos/id/866/1000/600'}>
            {children}
        </PageWrapStyle>
    );
};

export default PageWrap;
