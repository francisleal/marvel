import React, { ReactNode, useEffect } from "react";

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

    useEffect(() => {
        const usuarioSalvo = localStorage.getItem('UserMarvel');

        if (usuarioSalvo) {
            const usuarioSalvoJson = JSON.parse(usuarioSalvo);
            const usuarioChecked = usuarioSalvoJson.filter((user: UserDate) => user.checked === true);
            if (usuarioChecked.length) {
                console.log('um usuario marcado', usuarioChecked);
            }
        }
    }, []);

    function salvarUsuario(data: UserDate) {
        if (!verificaUsuarioSalvo()) {
            localStorage.setItem('UserMarvel', JSON.stringify([data]));
        } else {
            const usuarioCadatrado = verificaUsuarioSalvo()
                .filter((user: UserDate) => user.usuario === data.usuario);

            usuarioCadatrado.length ? alert('Usuário já cadastrado') : salvaApenasUmCheckbox(data);
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
                usuario: user.usuario,
                senha: user.senha,
                checked: false,
            }
            return marcaApenasUmcheckebox
        }); 
        check.push(data);

        const remove = check
            .filter((remove: UserDate) => remove.usuario !== data.usuario);

        remove.push(data);
        localStorage.setItem('UserMarvel', JSON.stringify(remove))
    }

    return (
        <LocalStorageContext.Provider value={{ salvarUsuario, verificaUsuarioSalvo, salvaApenasUmCheckbox }} >
            {children}
        </LocalStorageContext.Provider>
    )
}

export const useLocaStorage = () => React.useContext(LocalStorageContext)