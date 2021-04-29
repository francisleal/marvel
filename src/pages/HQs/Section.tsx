import React from 'react';
import {
    ContainerPages,
    Card,
    Info,
    Nome,
    Descricao,
    Detalhes,
    DetalhesCardHqs,
    MaisDescricao,
    FecharDetalhesCard,
    Disponivel,
} from '../../styles/section/styles';

import grupo from '../../assets/Grupo.png';
import avaliacao from '../../assets/avaliacao.png';

type MyFilmes = {
    nome: string,
    descricao: string,
    img: string,
    maisDescricao: string,
    avalicao: number
}

function Section(props: any): JSX.Element {

    return (
        <>
            <div className="modal">
                <ContainerPages modal={props.detalhe} >
                    {
                        props.list.map((filme: MyFilmes, i: number) => (
                            <span key={i}>
                                <Card>
                                    <img
                                        src={filme.img}
                                        alt={filme.nome}

                                        style={{
                                            width: '320px',
                                            height: '470px',
                                            position: 'absolute',
                                            left: '-16px',
                                            bottom: '-20px'
                                        }}
                                    />
                                    {
                                        props.detalhe &&
                                        <Info>
                                            <Nome>{filme.nome}</Nome>
                                            <Descricao>{filme.descricao}</Descricao>
                                            <Detalhes onClick={() => props.handleVisualizarDetalhe(filme)}>ver detalhes</Detalhes>
                                        </Info>
                                    }
                                </Card>
                                {
                                    !props.detalhe &&
                                    <DetalhesCardHqs>
                                        <Nome>{filme.nome}</Nome>
                                        <MaisDescricao>
                                            <p>{filme.maisDescricao}</p>
                                        </MaisDescricao>
                                        <Disponivel>Disponível para compra:</Disponivel>
                                        <img src={grupo} alt={'Disponível para compra'} style={{ marginLeft: '-10px' }} />
                                        <img src={avaliacao} alt={'Avaliação'} style={{ marginBottom: '-35px' }} />
                                        <FecharDetalhesCard onClick={props.handleFecharDetalhe}>x</FecharDetalhesCard>
                                    </DetalhesCardHqs>
                                }
                            </span>
                        ))
                    }
                </ContainerPages>
            </div>
        </>
    );
}

export default Section;
