import { render, screen, userEvent } from '../../Controller/Tests';
import HomePage from './HomePage';



// IMPORTANT!! - COMMENT OR REMOVE THE SLENDER/SLICK CAROULSEL CODE LINES BEFORE PERFORMING THE TESTS ("./Users/Users" -> Linha 1, 26, 36).

describe("HomePage render Components", () => {

    it("Verificar renderização de posts", () => {
        render(<HomePage/>);
        const postCont = screen.queryByRole('posts');
        expect(postCont).toBeInTheDocument();
    });


    it("Verificar renderização de usurários", () => {
        render(<HomePage/>);
        const usersCont = screen.queryByRole('users');
        expect(usersCont).toBeInTheDocument();
    });


    it("Verificar animação do Header", () => {
        render(<HomePage/>);
        const headerCont = screen.queryByRole('header-active');
        expect(headerCont).toBeInTheDocument();
    });

    
    it("Verificar Renderização dos anúncios", () => {
        render(<HomePage/>);
        const advertsImage = screen.queryByAltText('advertsImage');
        expect(advertsImage).toBeInTheDocument();
    })


});