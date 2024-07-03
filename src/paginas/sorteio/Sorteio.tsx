import styles from './Sorteio.module.scss';

import { useState } from "react"
import { useListaDeParticipantes } from "../../state/hook/useListaDeParticipantes"
import { useResultadoSorteio } from "../../state/hook/useResultadoSorteio";
import Card from '../../componentes/Card/Card';

export const Sorteio = () => {

    const participantes = useListaDeParticipantes()

    const [participanteDaVez, setParticipanteDaVez] = useState('');
    const [amigoSecreto, setAmigoSecreto] = useState('');

    const resultado = useResultadoSorteio()

    const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        if (resultado.has(participanteDaVez)) {
            setAmigoSecreto(resultado.get(participanteDaVez)!)
        }
    }

    return (
        <Card>
            <section className={styles.sorteio}>
                <h2>Quem vai tirar o papelzinho?</h2>
                <form onSubmit={sortear}>
                    <select
                        required
                        name="participanteDaVez"
                        id="participanteDaVez"
                        value={participanteDaVez}
                        onChange={evento => setParticipanteDaVez(evento.target.value)}
                        role='combobox'
                    >
                        <option value="" disabled>Selecione o seu nome</option>
                        {participantes.map(participante => <option key={participante}>{participante}</option>)}
                    </select>
                    <button className={styles['botao-sortear']}>Sortear</button>
                </form>
                {amigoSecreto && <p role="alert">{amigoSecreto}</p>}
                <footer className={styles.sorteio}>
                    <img src="/imagens/aviao.png" alt="Desenho de um avião de papel" />
                </footer>
            </section>
        </Card>
    )
}