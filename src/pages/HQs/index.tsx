import React, { useEffect, useState } from 'react';
import Nav from '../../components/Nav';

import api from '../../API/index.json';
import Section from './Section';

type Hqs = {
    nome: string,
    descricao: string,
    img: string,
}

function HQs() {

    // variáveis de estado
    const [detalhe, setDetalhe] = useState(false);
    const [list, setList] = useState<Hqs[]>([]);

    useEffect(() => {
        handleListarHQs()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // lista filmes
    function handleListarHQs() {
        setList(api.hqs);
    }

    // visualizar delathes das HQs
    function handleVisualizarDetalhe(filme: Hqs) {
        setDetalhe(!detalhe);
        setList([filme])
    }

    // fechar detalhe da HQ selecionada
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
