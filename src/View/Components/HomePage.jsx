import { useState } from "react";

import Posts from "./Posts/Posts";
import Users from "./Users/Users";

import Data from '../../Model/users.json'; // Json de usuários



// ---------- COMPONENTES RESPONSÁVEIS PELO MAIN DA PÁGINA ---------- // 

const HomePage = () => {

    const [navBar, setNavBar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 80 && window.scrollY <= 6975) {
            setNavBar(true);
        } else {
            setNavBar(false);
        }
    };
    console.log(window.scrollY);

    window.addEventListener('scroll', changeBackground);


    return (<div className="HomePage">

        <header className={navBar ? 'menuActive' : 'menu'}>
            <h1>Postgram</h1>
        </header>

        <div className="content">

            <div className="decoration">
                <p>Postagens</p>
            </div>

            <div className="posts">
                {Data.map((results) => {
                    return <Posts imagePost={results.post} name={results.name} avatar={results.perfil} comment={results.comments.map(data => { return (<div>{data.user.map(c => { return (<h5 className="divComment">{c.comment}</h5>) })}</div>) })} />

                })}
            </div>

            <hr className="partition" />

            <div className="rightBar">
                <div className="users">
                    Usuários
                    {Data.map((results) => {
                        return <Users avatar={results.perfil} name={results.name} photo1={results.photo1} photo2={results.photo2} photo3={results.photo3} />
                    })}
                </div>
                <div className="adverts">
                    <div className="divAdverts">
                        <img src="https://i.imgur.com/vJap7sw.png" alt="" srcset="" />
                    </div>
                </div>
            </div>

        </div>
        <footer>
            <div className="footerDiv">
                <div className="footerText">
                    <h3>M. Messias</h3>
                    <h4>Dev & UI/UX Designer</h4>
                    <div className="footerInfo">
                        <h4 className="desc">Projeto criado como demonstração do que eu sei no React. Obviamente, não sei só isso, mas acreidto que para o que o projeto pede, essa seja a forma mais dinâmica de apresentar as funções e componentes. Demorei 3 dias para faze-lo (com pausas durante o dia e sem trabalho durante o periodo noturno).</h4>
                        <h4>+55 (77) 9 9105-7040</h4>
                        <h4>mmessiasdev@gmail.com</h4>
                        <p>Todos os direitos reservados®</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>)
};

export default HomePage;