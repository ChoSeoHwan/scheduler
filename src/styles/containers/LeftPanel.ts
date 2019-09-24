import styled from 'styled-components';

interface LeftPanelWrapState {
    open: boolean;
}

export const LeftPanelWrap = styled.nav<LeftPanelWrapState>`
    display: flex;
    flex: 0 ${({ open }) => (open ? '25rem' : '8rem')};
    transition: flex 0.3s;
    background: blue;
`;
