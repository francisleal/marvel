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

    const usuarioSalvo = localStorage.getItem('UserMarvel');

    const [usuario, setUsuario] = useState<string>('');
    const [mensagemAlert, setMensagemAlert] = useState<string>('');
    const [reload, setReloadMensagemAlert] = useState<number>(0);

    const alertMensage = (mensagem: string) => { setMensagemAlert(mensagem); setReloadMensagemAlert(reload + 1); }

    function lembarMinhaSenha(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        verificaUsuarioCadastrado(usuario);
    }

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

    function voltar() {
        history.push('/');
    }

    return (
        <Contanier>
            <TitleContainer largura={200} altura={50} >
                <Title>MA<span>REV</span><span>L</span></Title>
            </TitleContainer>
            <FormContainer fade={false} onSubmit={lembarMinhaSenha}>
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
