import { fireEvent } from '@testing-library/react';
import { render, screen, userEvent } from '../../../Controller/Tests';
import Posts from './Posts';

// IMPORTANTE!! - COMENTE OU RETIRE AS LINHAS DE CÓDIGO SLENDER/SLICK CAROULSEL, ANTES DE REALIZAR OS TESTES ("../Users/Users" -> Linha 1, 26, 36).

describe("Post functions and elements validation", () => {
    it("Verificar se componente de foto está sendo renderizado", () => {
        render(<Posts/>);
        const contPhotos = screen.queryByRole('imagePost');
        expect(contPhotos).toBeInTheDocument();
    });
    it("Verificar comentários", () => {
        render(<Posts/>);
        const contUsersCommit = screen.queryByRole('usersCommit');
        expect(contUsersCommit).toBeInTheDocument();
    });
    it("Verificar se evento de comentar está iniciando de forma correta", () => {
        render(<Posts/>)
        const inputCommit = screen.queryByPlaceholderText('Comente Algo...')
        const editedValue = screen.queryByRole('youCommit');
        expect(editedValue).not.toBeInTheDocument();
        expect(inputCommit).toBeInTheDocument();
    });
})
