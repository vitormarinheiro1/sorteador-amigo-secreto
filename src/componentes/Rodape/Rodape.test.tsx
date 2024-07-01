import { fireEvent, render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import { Rodape } from "./Rodape"
import { useListaDeParticipantes } from "../../state/hook/useListaDeParticipantes"

jest.mock('../../state/hook/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
})

const mockNavegacao = jest.fn()

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegacao
    }
})

// se nao existem participantes o suficientes, o que vamos testar ?
describe('quando não existem participantes suficientes', () => {
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue([])
    })
    test('a brincadeira não pode ser iniciada', () => {
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>)

        // get byRole pois só tenho um botão, caso tenha mais posso usar o ByText
        const botao = screen.getByRole("button")
        // espera que o botão esteja desabilitado
        expect(botao).toBeDisabled()

    })
})

describe('quando existem participantes suficientes', () => {
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(['Ana', 'Luisa', 'Karla'])
    })
    test('a brincadeira pode ser iniciada', () => {
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>)

        // get byRole pois só tenho um botão, caso tenha mais posso usar o ByText
        const botao = screen.getByRole("button")
        // espera que o botão não (not) esteja desabilitado
        expect(botao).not.toBeDisabled()

    })

    test('a brincadeira foi iniciada', () => {
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>)


        const botao = screen.getByRole("button")
        fireEvent.click(botao)

        expect(mockNavegacao).toHaveBeenCalledTimes(1)
        expect(mockNavegacao).toHaveBeenCalledWith('/sorteio')
    })
})