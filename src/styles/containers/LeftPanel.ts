import styled from 'styled-components';

interface LeftPanelWrapState {
    open: boolean;
}

export const LeftPanelWrap = styled.nav<LeftPanelWrapState>`
    display: flex;
    flex: 0 ${({ open }) => (open ? '25rem' : '8rem')};
    flex-wrap: wrap;
    box-sizing: border-box;
    background-color: #f8fafc;
    
    border-right: 1px solid ${({ theme }) => theme.lineColor}
    
    transition: flex 0.3s;
`;
