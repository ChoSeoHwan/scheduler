import React from 'react';

import { Pages } from 'constants/common';

import CommonHeader from 'containers/common/Header';

const Header: React.FC = () => {
    return <CommonHeader page={Pages.SCHEDULER}>스케쥴러헤더</CommonHeader>;
};

export default Header;
