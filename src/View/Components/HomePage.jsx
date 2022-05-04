import Posts from "./Posts/Posts";
import Users from "./Users/Users";

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
                <Posts />
                <Posts />
                <Posts />
            </div>
            <hr className="partition" />
            <div className="rightBar">
                <div className="users">
                    Usuários
                    <Users />
                </div>
                <div className="adverts"></div>
            </div>
        </div>
    </div>)
};

export default HomePage;