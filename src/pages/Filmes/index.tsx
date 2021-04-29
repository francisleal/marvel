import React, { useEffect, useState } from 'react';
import Nav from '../../components/Nav';

import api from '../../API/index.json';
import Section from './Section';

type MyFilmes = {
    nome: string,
    descricao: string,
    img: string,
}

function Filmes(): JSX.Element {

    // variáveis de estado
    const [detalhe, setDetalhe] = useState(false);
    const [list, setList] = useState<MyFilmes[]>([]);

    useEffect(() => {
        handleListarFilmes()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // lista filmes
    function handleListarFilmes() {
        setList(api.filmes);
    }

    // visualiza detalhe dos filmes
    function handleVisualizarDetalhe(filme: MyFilmes) {
        setDetalhe(!detalhe);
        setList([filme])
    }

    // fecha detalhe dos filmes
    function handleFecharDetalhe() {
        setDetalhe(!detalhe);
        setList(api.filmes);
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

export default Filmes;
