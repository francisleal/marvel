import React, { ChangeEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import Alert from "../../components/Alert";
import { capitalize } from "../../components/Utils/capitalize";
import {
    Contanier,
    Button,
    FormContainer,
    Fieldset,
    Input,
    Legend,
    TitleContainer,
    Title,
    SubTitle,
    Voltar,
} from "../../styles/global";

type User = {
    usuario: string,
}

function EsqueciSenha(): JSX.Element {

    const history = useHistory();

    // local storage
    const usuarioSalvo = localStorage.getItem('UserMarvel');

    // variáveis de estado
    const [usuario, setUsuario] = useState<string>('');
    const [mensagemAlert, setMensagemAlert] = useState<string>('');
    const [reload, setReloadMensagemAlert] = useState<number>(0);

    // funcao: excuta componente de mensagem
    const alertMensage = (mensagem: string) => { setMensagemAlert(mensagem); setReloadMensagemAlert(reload + 1); }

    // informar a senha do usuário
    function handleLembarMinhaSenha(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        verificaUsuarioCadastrado(usuario);
    }

    // verifica se já existe usuário cadastrado
    function verificaUsuarioCadastrado(usuario: string) {
        if (usuarioSalvo !== null) {
            const usuarioCadastrado = JSON.parse(usuarioSalvo);

            const retorno = usuarioCadastrado
                .filter((user: User) => capitalize(user.usuario) === capitalize(usuario))[0];

            if (typeof retorno?.senha !== 'undefined') {
                alertMensage(`Sua senha é: ${retorno.senha}`)
            } else {
                alertMensage('Não encontrado')
            }
        }
    }

    // voltar para a tela de login
    function voltar() {
        history.push('/');
    }

    return (
        <Contanier>
            <TitleContainer largura={200} altura={50} >
                <Title>MA<span>REV</span><span>L</span></Title>
            </TitleContainer>
            <FormContainer fade={false} onSubmit={handleLembarMinhaSenha}>
                <SubTitle>Bem-vindo(a) de volta!</SubTitle>
                <Fieldset>
                    <Legend>Acesse sua conta:</Legend>
                    <Input
                        type="text"
                        placeholder="Usuário"
                        value={usuario}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setUsuario(e.target.value)}
                        required
                    />
                    <Button>Continuar</Button>
                    <Voltar onClick={voltar}> Voltar</Voltar>
                </Fieldset>
            </FormContainer>
            <Alert msg={mensagemAlert} reload={reload} />
        </Contanier>
    );
}

export default EsqueciSenha;
