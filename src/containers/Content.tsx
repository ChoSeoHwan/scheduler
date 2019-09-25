import React from 'react';

import { ContentWrap } from 'styles/containers/Content';

const Content: React.FC = ({ children }) => {
    return <ContentWrap>{children}</ContentWrap>;
};

export default Content;
