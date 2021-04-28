import React, { useEffect, useState } from 'react';
import Nav from '../../components/Nav';

import api from '../../API/index.json';
import Section from './Section';

type MyFilmes = {
    nome: string,
    descricao: string,
    img: string,
}

function HQs() {

    const [detalhe, setDetalhe] = useState(false);
    const [list, setList] = useState<MyFilmes[]>([]);

    useEffect(() => {
        handleListarFilmes()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function handleListarFilmes() {
        setList(api.hqs);
    }

    function handleVisualizarDetalhe(filme: MyFilmes) {
        setDetalhe(!detalhe);
        setList([filme])
    }

    function handleFecharDetalhe() {
        setDetalhe(!detalhe);
        setList(api.hqs);
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

export default HQs;
