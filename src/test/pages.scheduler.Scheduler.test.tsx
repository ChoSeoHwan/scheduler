import React from 'react';
import { render } from '@testing-library/react';

import Scheduler from 'containers/scheduler/Scheduler';

describe('<Scheduler/>', () => {
    it('UI 존재 여부 확인', () => {
        const { getByText } = render(<Scheduler />);

        // 등록 버튼 확인
        const {} = getByText('등록');
    });
});
