import * as React from 'react';

import { renderRouter } from 'test/common';

describe('Scheduler test', () => {
    describe('기본 세팅 테스트', () => {
        it('최초 접근 시 일정 페이지로 이동 테스트', () => {
            const { getByTestId } = renderRouter();
            expect(getByTestId('location-info').textContent).toBe('/scheduler');
        });

        it('헤더 세팅 테스트', () => {
            const { getByText } = renderRouter();
            getByText('일정');
        });

        it('LeftPanel 세팅 테스트', () => {
            const { getByTestId, getByText } = renderRouter();

            getByText('배경 변경'); // 일정 등록 버튼 체크
            getByTestId('calendar'); // 캘린더 컴포넌트 체크
        });
    });
});
