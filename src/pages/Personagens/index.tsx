import React, { useEffect, useState } from 'react';
import Nav from '../../components/Nav';

import api from '../../API/index.json';
import Section from './Section';

// tipagem do personagem
type Personagem = {
    nome: string,
    descricao: string,
    img: string,
    aparicoes: string[],
}

function Personagens() {

    // variáveis de estado
    const [detalhe, setDetalhe] = useState(false);
    const [list, setList] = useState<Personagem[]>([]);

    useEffect(() => {
        handleListarPersonagens()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // listar personagens
    function handleListarPersonagens() {
        setList(api.personagens);
    }

    // visualizar detalhes dos personagens
    function handleVisualizarDetalhe(filme: Personagem) {
        setDetalhe(!detalhe);
        setList([filme])
    }

    // fechar detalhe do personagem
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
