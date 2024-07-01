import { useRef, useState } from "react";
import { useAdiconarParticipante } from "../../state/hook/useAdicionarParticipante";
import { useMensagemDeErro } from "../../state/hook/useMensagemDeErro";
import styles from './Formulario.module.scss';

const Formulario = () => {

    const [nome, setNome] = useState("");

    const inputRef = useRef<HTMLInputElement>(null)

    const adicionarNaLista = useAdiconarParticipante()

    const mensagemDeErro = useMensagemDeErro()

    const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        adicionarNaLista(nome)
        setNome('')
        inputRef.current?.focus()

    }

    return (
        <form onSubmit={adicionarParticipante}>
            <div className={styles["grupo-input-btn"]}>
                <input
                    ref={inputRef}
                    value={nome}
                    onChange={evento => setNome(evento.target.value)}
                    type="text"
                    placeholder="Insira os nomes dos participantes"
                />
                <button disabled={!nome}>Adicionar</button>
            </div>
            {mensagemDeErro && <p className={styles.alerta__erro} role="alert">{mensagemDeErro}</p>}
        </form>
    )
}

export default Formulario;