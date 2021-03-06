import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useLocaStorage } from "../../providers/LocalStoraProvider";

import './styles.css';

import {
    Contanier,
    Button,
    FormContainer,
    Fieldset,
    Input,
    PasswordInput,
    Legend,
    Title,
    SubTitle,
    CadastreSe,
    LembrarMe
} from "../../styles/global";
import Alert from "../../components/Alert";
import { capitalize } from "../../components/Utils/capitalize";

// tipagem
type User = {
    usuario: string,
    senha: string,
    checked: boolean,
}

// componente utilizando apenas "React"
function Login(): JSX.Element {

    const history = useHistory();

    // variáveis de estado
    const [loading, setLoading] = useState<boolean>(false);
    const [mensagemAlert, setMensagemAlert] = useState<string>('');
    const [reload, setReloadMensagemAlert] = useState<number>(0);

    // variáveis providers
    const { verificaUsuarioSalvo, salvaApenasUmCheckbox } = useLocaStorage();
    const usuarioCadastradoJson = verificaUsuarioSalvo();

    // funcao: excuta componente de mensagem
    const alertMensage = (mensagem: string) => { setMensagemAlert(mensagem); setReloadMensagemAlert(reload + 1); }

    // variável de estado tipada
    const [login, setLogin] = useState<User>({
        usuario: '',
        senha: '',
        checked: false
    });

    useEffect(() => {
        // retorna usuário checado
        const mostarUsuario = usuarioCadastradoJson?.filter((usuario: User) => usuario.checked === true);

        // retorna usuário checado na tela
        if (typeof mostarUsuario !== 'undefined') {
            setLogin({
                usuario: String(mostarUsuario.map((usuario: User) => usuario.usuario)),
                senha: String(mostarUsuario.map((usuario: User) => usuario.senha)),
                checked: true
            })
        }

        // execula animação quando carrega a tela
        setTimeout(() => animacaoSimples1(), 1000);
        setTimeout(() => animacaoSimples2(), 2500);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // coleta os valores do campo de entrada
    function updateModel(e: ChangeEvent<HTMLInputElement>) {
        setLogin({
            ...login,
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
        })
    }

    // salva usuário
    function handleLogar(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        if (usuarioCadastradoJson) {
            const validaUsuario = usuarioCadastradoJson.filter((user: User) => {
                return capitalize(user.usuario) === capitalize(login.usuario) && user.senha === login.senha
            });
            if (validaUsuario.length) {
                history.push('/Personagens');
                salvaApenasUmCheckbox(login);
            } else {
                alertMensage('Usuário ou senha não cadastrado');
            }
        } else {
            alertMensage('Não encontrado');
        }
    }

    // animaçao da logo para esquerda
    function animacaoSimples1() {
        document.getElementById("anime")?.classList.add("animeLeft");
        setTimeout(() => document.getElementById("form")?.classList.add("fade"), 2000);
    }

    // animação da logo para cima
    function animacaoSimples2() {
        document.getElementById("anime")?.classList.add("animeTop");
        setLoading(true);
    }

    return (
        <>
            <div id="anime"
                style={{ position: 'absolute', transform: 'translate(900px, 300px)', transition: '2s' }}>
                <Title>MA<span>REV</span><span>L</span></Title>
            </div>

            {
                loading && <Contanier>
                    <FormContainer fade={true} id="form" onSubmit={handleLogar}>
                        <SubTitle>Bem-vindo(a) de volta!</SubTitle>
                        <Fieldset>
                            <Legend>Acesse sua conta:</Legend>
                            <Input
                                name="usuario"
                                type="text"
                                placeholder="Usuário"
                                value={login.usuario}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
                                required
                            />
                            <PasswordInput
                                name="senha"
                                placeholder="Senha"
                                value={login.senha}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
                                required
                            />
                            <LembrarMe>
                                <div>
                                    <input
                                        name="checked"
                                        type="checkbox"
                                        checked={login.checked}
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
                                    />
                                    Salvar login
                                </div>
                                <Link to="EsqueciSenha">Esqueci a senha</Link>
                            </LembrarMe>
                            <Button type="submit">Entrar</Button>
                            <CadastreSe>Ainda não tem o login?<Link to="Cadastro"> Cadastre-se</Link></CadastreSe>
                        </Fieldset>
                    </FormContainer>
                    <Alert msg={mensagemAlert} reload={reload} />
                </Contanier>
            }
        </>
    );
}

export default Login;
