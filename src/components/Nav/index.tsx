import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Logo, Menu, Links, Sair } from './style';

import './style.css';

function Nav(): JSX.Element {

    const history = useHistory();

    function handleSair() {
        history.push('/');
    }

    return (
        <Menu>
            <Logo><p>MA</p></Logo>
            <Links>
                <NavLink to="Personagens" activeClassName='active'>Personagens</NavLink>
                <NavLink to="Filmes" activeClassName='active'>Filmes</NavLink>
                <NavLink to="HQs" activeClassName='active'>HQs</NavLink>
                <Sair onClick={handleSair}>sair</Sair>
            </Links>
        </Menu>
    );
}

export default Nav;
