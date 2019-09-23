import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';

import { ContentWrap } from 'styles/common';
import { SchedulerTheme } from 'styles/theme/scheduler.theme';

import Content from 'containers/Content';
import LeftPanel from 'containers/LeftPanel';
import Header from 'containers/scheduler/Header';

const Scheduler: React.FC = () => {
    return (
        <ThemeProvider theme={SchedulerTheme}>
            <Fragment>
                <Header />
                <ContentWrap>
                    <LeftPanel />
                    <Content />
                </ContentWrap>
            </Fragment>
        </ThemeProvider>
    );
};

export default Scheduler;
