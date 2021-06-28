import styled from 'styled-components';

export const CardBox = styled.div`
    width: 200px;
    margin: 200px auto 0;
    padding: 20px;
    color: red;
    border-radius: 15px;
    background: ${({ theme }) => theme.bg1};
`;

export const InputBox = styled.div`
    width: 180px;
    height: 80px;
    /* border: 1px solid; */
    margin-top: 20px;
    border-radius: 15px;
`