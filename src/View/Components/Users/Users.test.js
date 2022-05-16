import { render, screen, userEvent } from '../../../Controller/Tests';
import Users from './Users';



// IMPORTANT!! - COMMENT OR REMOVE THE SLENDER/SLICK CAROULSEL CODE LINES BEFORE PERFORMING THE TESTS ("./Users" -> Linha 1, 26, 36).

describe("Users render Components", () => {
    
    it("Verficar renderizaçaõ da lista de Usuários", () => {
        render(<Users/>);
        const userListCont = screen.queryByRole('userList');
        expect(userListCont).toBeInTheDocument();
    });
    
});