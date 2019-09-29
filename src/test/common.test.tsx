import * as React from 'react';

import { fireEvent } from '@testing-library/dom';
import { renderRouter } from 'test/common';

describe('Common Module test', () => {
    describe('GNB 테스트', () => {
        it('LeftPanel 활성/비활성 테스트', () => {
            const { getByTestId } = renderRouter();

            const menuBtn = getByTestId('menu-button');
            const leftPanel = getByTestId('left-panel');

            // Left Panel 기본 스타일 (open)
            expect(leftPanel).toHaveStyle(`flex: 0 25rem`);

            // 메뉴 버튼 클릭 후 Left Panel 스타일 (close)
            fireEvent.click(menuBtn);
            expect(leftPanel).toHaveStyle(`flex: 0 8rem`);

            // 메뉴 버튼 재 클릭 후 Left Panel 스타일 (open)
            fireEvent.click(menuBtn);
            expect(leftPanel).toHaveStyle(`flex: 0 25rem`);
        });
    });
});
