import { useState } from "react";

import Posts from "./Posts/Posts";
import Users from "./Users/Users";

import { FaGithubSquare } from 'react-icons/fa';

import Data from '../../Model/users.json'; // Json de usuários



// ---------- COMPONENTES RESPONSÁVEIS PELO MAIN DA PÁGINA ---------- // 

const HomePage = () => {

    const [navBar, setNavBar] = useState(false); // Responsável pela animação de Scroll da barra Menu
    const changeBackground = () => {
        if (window.scrollY >= 10) {
            setNavBar(true);
        } else {
            setNavBar(false);
        }
    };
    // console.log(window.scrollY);
    window.addEventListener('scroll', changeBackground);


    return (<div className="HomePage">

        <header className={navBar ? 'menuActive' : 'menu'}>
            <h1 data-aos="fade-right">Postgram</h1>
            <a href="https://github.com/mmessiasdev/PostgramIpNet.git" target="_blank" rel="noopener noreferrer" role={"header-active"}>
                <div className="icon">
                    <h5>Código</h5>
                    <FaGithubSquare />
                </div>
            </a>
        </header>

        <div className="content">

            <div className="decoration">
                <p data-aos="fade-right">Postagens</p>
            </div>

            <div className="posts" role={"posts"}>
                {Data.map((results) => {
                    return <Posts imagePost={results.post} name={results.name} avatar={results.perfil} comment={results.comments.map(data => { return (<div>{data.user.map(c => { return (<h5 className="divComment">{c.comment}</h5>) })}</div>) })} />

                })}
            </div>

            <hr className="partition" />

            <div className="rightBar" data-aos="fade-left">
                <div className="users" role={"users"}>
                    Usuários
                    {Data.map((results) => {
                        return <Users avatar={results.perfil} name={results.name} photo1={results.photo1} photo2={results.photo2} photo3={results.photo3} />
                    })}
                </div>
                <div className="adverts">
                    <div className="divAdverts">
                        <img src="https://i.imgur.com/vJap7sw.png" alt='advertsImage' />
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