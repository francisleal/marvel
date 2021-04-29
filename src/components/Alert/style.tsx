

import styled from 'styled-components'

export const AlertMsg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 50;
`;

export const Mensagem = styled.div`
    position: absolute;
    z-index: 3;
    top: 7vh;
    right: 7vh;
    color: #fff;
    background: #262626;
    width: 400px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    border-radius: 5px;
`;