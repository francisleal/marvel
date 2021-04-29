import styled from 'styled-components'

import banner from "../../assets/fundo.png"

export const Contanier = styled.div`   
    background-color: #000;
    background-image: url(${banner});
    background-repeat: no-repeat;
    background-size: contain;
    background-attachment: fixed;
    background-position: right;
    overflow: hidden;
    width: 100vw;
    height: 100vh;

    &:before {
        content: '';
        position: absolute;
        background: linear-gradient(to right,rgb(0 0 0) 50%,rgb(0 0 0 / 50%));
        display: block;
        width: 100vw;
        height: 100vh;
    }
`;

export const FormContainer = styled.form`
    margin: 150px;
    margin-top: 175px;
    position: relative;
    z-index: 5;
    transition: 0.5s;
    opacity: ${(props: { fade: boolean }) => props.fade ? 0 : 1};

    @media(max-width: 540px) {
        margin: 0;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        padding: 16px;
    }
`;

export const Fieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    border: 0;
`;

export const Legend = styled.legend`
    color:#84848D;
    font-size: 20px;
    margin: 8px 16px;
`;

export const Input = styled.input`
    background-color: #fff;
    height: 73px;
    width: 383px;
    border:0;
    border-radius: 50px;
    margin: 8px;
    padding: 16px;
    font-size: 22px;
    transition: 0.3s;
    

    &:focus {
        outline: none;
        box-shadow: 0px 0px 0px 4px rgb(142 142 142 / 53%);
    }

    @media(max-width: 540px) {
        width: 100%;
    }
`;

export const PasswordInput = styled(Input).attrs({
    type: "password",
})`
 @media(max-width: 540px) {
        width: 100%;
    }
`;

export const Button = styled.button`
    background-color: #FF0000;
    color: #fff;
    cursor: pointer;
    height: 73px;
    width: 383px;
    border: none;
    border-radius: 50px;
    font-size: 28px;
    margin: 8px;

    &:active {
        opacity: 0.9;
    }

    @media(max-width: 540px) {
        width: 100%;
    }
`;

export const Voltar = styled(Button)`
    background-color: #84848D;
`;

type TitleContainerProps = {
    altura: number;
    largura: number;
}

export const TitleContainer = styled.div<TitleContainerProps>`
    position: absolute;
    transform: translate(${props => props.largura}px, ${props => props.altura}px);
`;

export const LembrarMe = styled.div`
    display: flex;
    justify-content: space-between;
    color: #84848D;
    font-size: 15px;
    margin-left: 16px;
    width: 367px;

    & div > input {
        margin-right: 16px;
    }

   a {
        color: #84848D;
        text-decoration: none;
        border-bottom: 1px solid red;
        cursor: pointer;
    }

    a:hover {
        opacity: 0.8;
    }

    @media(max-width: 540px) {
        width: 100%;
    }
`;
export const CadastreSe = styled.span`
    color: #84848D;
    padding: 16px;

    font-size: 16px;

    & > a {
        color: #FF0000;
        text-decoration: none;
    }
`;

export const Title = styled.h1`
    width: 209px;
    height: 399px;
    color: #fff;
    font-size: 100px;
    white-space: nowrap;
    font-weight: normal;
    position: relative;
    z-index: 1;

    & > span {
        display: block
    }

    &:before {
        content: '';
        position: absolute;
        background: #FF0000;
        top: -16px;
        left: -14px;
        display: block;
        width: 237px;
        height: 95px;
        z-index: -1;
    }
`;

export const SubTitle = styled.p`
    color: #FF0000;
    font-size: 30px;
    font-weight: bold;
    margin: 8px 16px;
`;