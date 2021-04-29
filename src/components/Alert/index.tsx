import React, { useEffect, useState } from 'react';

import { AlertMsg, Mensagem } from './style';

function Alert(props: any) {

    const [mensagem, setMensagem] = useState('');

    useEffect(() => {
        setMensagem(props.msg);

        const resetMensage = () => {
            setTimeout(() => setMensagem(''), 2500);
        }

        if (props.msg) resetMensage();

        return () => setMensagem('');

    }, [props.msg, props.reload]);

    return (
        <>
            {mensagem &&
                <AlertMsg className="alert-msg">
                    <Mensagem>{mensagem}</Mensagem>
                </AlertMsg>
            }
        </>
    )
}

export default Alert;