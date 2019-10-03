import * as React from 'react';

import CommonLeftPanel from 'containers/common/LeftPanel';

const LeftPanel: React.FC = () => {
    return (
        <CommonLeftPanel>
            {(goToPage, goToBack) => ({
                main: (
                    <p>
                        main<button onClick={goToPage('test1')}>test1</button>
                        <button onClick={goToPage('test2')}>test2</button>
                    </p>
                ),
                test1: (
                    <p>
                        test1<button onClick={goToBack}>이전</button>
                        <button onClick={goToPage('test2')}>test2</button>
                    </p>
                ),
                test2: (
                    <p>
                        test2<button onClick={goToBack}>이전</button>
                        <button onClick={goToPage('test1')}>test1</button>
                    </p>
                )
            })}
        </CommonLeftPanel>
    );
};

export default LeftPanel;
