import Posts from "./Posts/Posts";
import Users from "./Users/Users";

import Data from '../../Model/users.json';



const HomePage = () => {



    return (<div className="HomePage">
        <header>
            <h1>Postgram</h1>
        </header>
        <div className="content">
            <div className="decoration">
                <p>Postagens</p>
            </div>

















            <div className="posts">
                {Data.map((results) => {
                    return <Posts imagePost={results.post}/>
                    // key={results.userid} nameComment={results.comments.map(data => {
                    //     return (<div key={results.userid}>{data.namecomment}</div>)
                    // })} postComment={results.comments.map(c => {
                    //     return (<div key={results.userid}>{c.comment}</div>)
                    // })} 
                
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
                <div className="adverts"></div>
            </div>
        </div>
    </div>)
};

export default HomePage;