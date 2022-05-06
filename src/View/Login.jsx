import { Link } from "react-router-dom";
import './Login.css';


const Login = () => {

    return (
        <div className="contLogin">
            <form data-aos="fade-left">
            <h1 data-aos="fade-in">Postgram</h1>
                <Link to="/homepage" className="link">
                    <button className="buttonEnter" type="submit">
                        Entrar
                    </button>
                </Link>
            </form>
        </div>
    )
};

export default Login;