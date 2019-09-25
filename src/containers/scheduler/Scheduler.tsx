import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';

import { ContentWrap } from 'styles/common';
import { SchedulerTheme } from 'styles/theme/scheduler.theme';

import LeftPanel from 'containers/LeftPanel';
import Header from 'containers/scheduler/Header';
import TestList from 'containers/scheduler/TestList';

const Scheduler: React.FC = () => {
    return (
        <ThemeProvider theme={SchedulerTheme}>
            <Fragment>
                <Header />
                <ContentWrap>
                    <LeftPanel />
                    <TestList />
                </ContentWrap>
            </Fragment>
        </ThemeProvider>
    );
};

export default Scheduler;
