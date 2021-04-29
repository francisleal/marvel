import React, { ReactNode, useState } from "react";
import Alert from "../components/Alert";
import { capitalize } from "../components/Utils/capitalize";

type UserDate = {
    usuario: string;
    senha: string;
    checked: boolean;
}

type SaveDate = {
    salvarUsuario: (data: UserDate) => void;
    verificaUsuarioSalvo: () => [];
    salvaApenasUmCheckbox: (data: UserDate) => void;
}

export const LocalStorageContext = React.createContext({} as SaveDate);

type UserProviderProps = {
    children: ReactNode
}

export const ListarEmpresasProvider = ({ children }: UserProviderProps) => {

    const [mensagemAlert, setMensagemAlert] = useState<string>('');
    const [reload, setReloadMensagemAlert] = useState<number>(0);

    const alertMensage = (mensagem: string) => { setMensagemAlert(mensagem); setReloadMensagemAlert(reload + 1); }

    function salvarUsuario(data: UserDate) {
        if (!verificaUsuarioSalvo()) {
            data.usuario = capitalize(data.usuario);
            localStorage.setItem('UserMarvel', JSON.stringify([data]));
        } else {
            const usuarioCadatrado = verificaUsuarioSalvo()
                .filter((user: UserDate) => capitalize(user.usuario) === capitalize(data.usuario));

            usuarioCadatrado.length ? alertMensage('Usuário já cadastrado') : salvaApenasUmCheckbox(data);
        }
    }

    function verificaUsuarioSalvo() {
        const usuarioCadastrado = localStorage.getItem('UserMarvel');
        const usuarioCadastradoJson = JSON.parse(String(usuarioCadastrado));

        return usuarioCadastradoJson;
    }

    function salvaApenasUmCheckbox(data: UserDate) {
        const salvar = verificaUsuarioSalvo();

        const check = salvar.map((user: UserDate) => {
            const marcaApenasUmcheckebox = {
                usuario: capitalize(user.usuario),
                senha: user.senha,
                checked: false,
            }
            return marcaApenasUmcheckebox
        });
        check.push(data);

        const remove = check.filter((remove: UserDate) => capitalize(remove.usuario) !== capitalize(data.usuario));
        remove.push(data);
        localStorage.setItem('UserMarvel', JSON.stringify(remove))
    }

    return (
        <LocalStorageContext.Provider value={{ salvarUsuario, verificaUsuarioSalvo, salvaApenasUmCheckbox }} >
            {children}
            <Alert msg={mensagemAlert} reload={reload} />
        </LocalStorageContext.Provider>
    )
}

export const useLocaStorage = () => React.useContext(LocalStorageContext)