import React, { useEffect, useState } from 'react';
import Nav from '../../components/Nav';

import api from '../../API/index.json';
import Section from './Section';

type Filmes = {
    nome: string,
    descricao: string,
    img: string,
    aparicoes: string[],
}

function Personagens() {

    const [detalhe, setDetalhe] = useState(false);
    const [list, setList] = useState<Filmes[]>([]);

    useEffect(() => {
        handleListarFilmes()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function handleListarFilmes() {
        setList(api.personagens);
    }

    function handleVisualizarDetalhe(filme: Filmes) {
        setDetalhe(!detalhe);
        setList([filme])
    }

    function handleFecharDetalhe() {
        setDetalhe(!detalhe);
        setList(api.personagens);
    }

    return (
        <>
            <Nav />
            <Section
                list={list}
                detalhe={!detalhe}
                handleVisualizarDetalhe={handleVisualizarDetalhe}
                handleFecharDetalhe={handleFecharDetalhe}
            />
        </>
    );
}

export default Personagens;
