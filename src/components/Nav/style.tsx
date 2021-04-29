import styled from 'styled-components'

export const Menu = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 60px 60px 0px 60px;
    height: 114px;
    background-color: #000;
    color: #fff;
    box-shadow: 0px 1px 5px red;
    position: relative;
    z-index: 1;

    &:hover {
        box-shadow: 0px 2px 10px red;
        transition: 1s;
    }

    a {
        font-size: 30px;
        text-decoration: none;
        margin-right: 86px;
        color: #84848D;
    }

    @media(max-width: 540px) {
        padding: 0px 60px 0px 60px;
        position: fixed;
        z-index: 6;
        width: 100vw;

        a {
            font-size: 16px;
        }
    }
`;

export const Logo = styled.div`
    font-size: 50px;
    margin-top: -19px;

    &:after {
        content: '';
        position: absolute;
        background: #FF0000;
        top: 24px;
        left: 35px;
        display: block;
        width: 122px;
        height: 54px;
    }

    p {
        z-index: 1;
        position: relative
    }

    @media(max-width: 540px) {
        &:after {
            top: 24px;
            left: 32px;
            display: block;
            width: 70px;
            height: 35px;
        }

        p {
            font-size: 32px;
            top: 54px;
            left: -19px;
        }
    }

    
`;

export const Links = styled.div`
@media(max-width: 540px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;

export const Sair = styled.span`
    font-size: 20px;
    color: #84848D;
    cursor: pointer;
     &:hover {
        color: #FFF;
     }
`;
