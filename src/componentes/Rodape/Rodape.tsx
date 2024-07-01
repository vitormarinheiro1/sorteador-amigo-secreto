import { useNavigate } from "react-router-dom";
import { useListaDeParticipantes } from "../../state/hook/useListaDeParticipantes";
import styles from './Rodape.module.scss';
import { useSorteador } from "../../state/hook/useSorteador";

export const Rodape = () => {

    const participantes = useListaDeParticipantes()

    const navegarPara = useNavigate()

    const sortear = useSorteador()

    const iniciar = () => {
        sortear()
        navegarPara('/sorteio')
    }

    return (
        <footer className={styles["rodape-configuracoes"]}>
            <button
                className={styles.botao}
                disabled={participantes.length < 3}
                onClick={iniciar}
            >
                Iniciar brincadeira
            </button>
            <img src="/imagens/sacolas.png" alt="Sacolas de compras" />
        </footer>
    )
}