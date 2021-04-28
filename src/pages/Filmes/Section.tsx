import React from 'react';
import {
    ContainerPages,
    Card,
    Info,
    Nome,
    Descricao,
    Detalhes,
    DetalhesCard,
    Aparicoes,
    FecharDetalhesCard,
    Disponivel,
} from '../../styles/section/styles';

import avaliacao from '../../assets/avaliacao.png';
import streaming from '../../assets/streaming.png';

type MyFilmes = {
    nome: string,
    descricao: string,
    img: string,
    maisDescricao: string,
    avalicao: number
}

function Section(props: any): JSX.Element {

    console.log(props);

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
                                    <DetalhesCard>
                                        <Nome>{filme.nome}</Nome>
                                        <Aparicoes>
                                            <p>{filme.maisDescricao}</p>
                                        </Aparicoes>
                                        <Disponivel>
                                            Disponível em streaming:
                                        </Disponivel>
                                        <img src={streaming} alt={'streaming'} style={{marginLeft: '-10px'}} />
                                        <img src={avaliacao} alt={'Avaliação'} style={{ marginBottom: '-35px' }} />
                                        <FecharDetalhesCard onClick={props.handleFecharDetalhe}>x</FecharDetalhesCard>
                                    </DetalhesCard>
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
