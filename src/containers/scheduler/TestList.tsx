import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { StoreState } from 'store';
import { TestAction } from 'store/actions';

import Content from 'containers/Content';

const TestList: React.FC = () => {
    const dispatch = useDispatch();

    const { loading, data } = useSelector(
        (state: StoreState) => ({
            loading: state.TestReducer.loading,
            data: state.TestReducer.data
        }),
        shallowEqual
    );

    useEffect(() => {
        dispatch(TestAction.fetchTestData('asc', 1));
    }, []);

    const handleChangeOrder = () => {
        dispatch(TestAction.fetchTestData('desc', 1));
    };

    return (
        <Content>
            <button onClick={handleChangeOrder}>desc로 변경</button>
            {loading && <p>로딩중입니다.</p>}
            {!loading && (
                <ul>
                    {data.map((item: number, index: number) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}
        </Content>
    );
};

export default TestList;
