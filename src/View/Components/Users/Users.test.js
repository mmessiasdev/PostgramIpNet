import { render, screen, userEvent } from '../../../Controller/Tests';
import Users from './Users';



// IMPORTANTE!! - COMENTE OU RETIRE AS LINHAS DE CÓDIGO SLENDER/SLICK CAROULSEL, ANTES DE REALIZAR OS TESTES ("./Users" -> Linha 1, 26, 36).

describe("Users render Components", () => {
    
    it("Verficar renderizaçaõ da lista de Usuários", () => {
        render(<Users/>);
        const userListCont = screen.queryByRole('userList');
        expect(userListCont).toBeInTheDocument();
    });
    
});