import { fireEvent } from '@testing-library/react';
import { render, screen, userEvent } from '../../../Controller/Tests';
import Posts from './Posts';

// IMPORTANT!! - COMMENT OR REMOVE THE SLENDER/SLICK CAROULSEL CODE LINES BEFORE PERFORMING THE TESTS ("../Users/Users" -> Linha 1, 26, 36).

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
