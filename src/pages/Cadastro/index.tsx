import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { useHistory } from "react-router-dom";
import Alert from "../../components/Alert";
import { capitalize } from "../../components/Utils/capitalize";
import { useLocaStorage } from "../../providers/LocalStoraProvider";
import {
    Contanier,
    Button,
    FormContainer,
    Fieldset,
    Input,
    PasswordInput,
    Legend,
    TitleContainer,
    Title,
    SubTitle,
    LembrarMe
} from "../../styles/global";


type User = {
    usuario: string,
    senha: string,
    confirmarSenha: string,
    checked: boolean,
}

// componente utilizando "react-hook-form"
function Cadastro(): JSX.Element {

    const [mensagemAlert, setMensagemAlert] = useState<string>('');
    const [reload, setReloadMensagemAlert] = useState<number>(0);

    const alertMensage = (mensagem: string) => { setMensagemAlert(mensagem); setReloadMensagemAlert(reload + 1); }

    const history = useHistory();

    const usuarioSalvo = localStorage.getItem('UserMarvel');

    const { register, handleSubmit } = useForm<User>();

    const { salvarUsuario } = useLocaStorage();

    const onSubmit = ({ usuario, senha, checked, confirmarSenha }: User) => {

        if (senha === confirmarSenha) {
            salvarUsuario({ usuario, senha, checked });
            verificaUsuarioSalvo(usuario);
        } else {
            alertMensage('Senhas diferentes');
        }
    };

    const verificaUsuarioSalvo = (usuario: string) => {
        if (usuarioSalvo !== null) {
            const verficaUsuario = JSON.parse(usuarioSalvo);

            if (verficaUsuario.filter((user: User) => capitalize(user.usuario) === capitalize(usuario)).length === 0) {
                history.push('/Personagens');
            }
        }

        if (usuarioSalvo === null) history.push('/Personagens');
    }

    return (
        <Contanier>
            <TitleContainer largura={200} altura={50} >
                <Title>MA<span>REV</span><span>L</span></Title>
            </TitleContainer>
            <FormContainer fade={false} onSubmit={handleSubmit(onSubmit)}>
                <SubTitle>Bem-vindo(a) de volta!</SubTitle>
                <Fieldset>
                    <Legend>Acesse sua conta:</Legend>
                    <Input
                        type="text"
                        placeholder="Usuário"
                        {...register("usuario")}
                        required
                    />
                    <PasswordInput
                        placeholder="Senha"
                        {...register("senha")}
                        required
                    />
                    <PasswordInput
                        placeholder="Confirmar Senha"
                        {...register("confirmarSenha")}
                        required
                    />
                    <LembrarMe>
                        <div>
                            <input
                                id="checkbox"
                                type="checkbox"
                                {...register("checked")}
                            />
                            Salvar login
                        </div>
                    </LembrarMe>
                    <Button>Salvar</Button>
                </Fieldset>
            </FormContainer>
            <Alert msg={mensagemAlert} reload={reload} />
        </Contanier>
    );
}

export default Cadastro;
