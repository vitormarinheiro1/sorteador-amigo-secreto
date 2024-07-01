// import styles from './Sorteio.module.scss';

import { useListaDeParticipantes } from "../../state/hook/useListaDeParticipantes"

export const Sorteio = () => {

    const participantes = useListaDeParticipantes()

    return (
        <section>
            <form>
                <select name="participanteDaVez" id="participanteDaVez">
                    {participantes.map(participante => <option key={participante}>{participante}</option>)}
                </select>
            </form>
        </section>
    )
}