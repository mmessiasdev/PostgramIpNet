import { Link } from "react-router-dom";
import "./Login.css";

import WallpaperVector from "./Assets/WallVector.svg";
import SvgLogin from "./Assets/SvgLogin.svg";


const Login = () => {
  return (
    <div className="contLogin">
      <form data-aos="fade-left">
        <div className="form">
          <h1 data-aos="fade-in">Postgram</h1>
          <Link to="/homepage" className="link">
            <button className="buttonEnter" type="submit">
              Entrar
            </button>
          </Link>
        </div>
      </form>
      <div className="wallpaper">
        <img src={WallpaperVector} alt=""/>
        <div className="svg">
            <img src={SvgLogin} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
