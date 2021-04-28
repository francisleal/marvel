import * as React from "react";
import { useForm } from 'react-hook-form';
import { useHistory } from "react-router-dom";
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

    const history = useHistory();

    const { register, handleSubmit } = useForm<User>();

    const { salvarUsuario } = useLocaStorage();

    const onSubmit = ({ usuario, senha, checked, confirmarSenha }: User) => {
        if (senha === confirmarSenha) {
            salvarUsuario({ usuario, senha, checked });
            history.push('/Personagens');
        } else {
            alert('Senhas diferentes');
        }
    };

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
        </Contanier>
    );
}

export default Cadastro;
