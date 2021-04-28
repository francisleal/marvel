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
`;

export const Links = styled.div``;

export const Sair = styled.span`
    font-size: 20px;
    color: #84848D;
    cursor: pointer;
     &:hover {
        color: #FFF;
     }
`;