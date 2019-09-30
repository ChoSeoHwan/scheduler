import React from 'react';
import { ThemeProvider } from 'styled-components';

import { SchedulerTheme } from 'styles/theme/scheduler.theme';

import Content from 'containers/common/Content';
import ContentBox from 'containers/common/ContentBox';
import LeftPanel from 'containers/common/LeftPanel';
import PageWrap from 'containers/common/PageWrap';
import Header from 'containers/scheduler/Header';

const Scheduler: React.FC = () => {
    return (
        <ThemeProvider theme={SchedulerTheme}>
            <PageWrap>
                <Header />
                <ContentBox>
                    <LeftPanel />
                    <Content />
                </ContentBox>
            </PageWrap>
        </ThemeProvider>
    );
};

export default Scheduler;
