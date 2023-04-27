import style from "./About.module.css";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div className={style.Principal}>
      <div className={style.Box}>
        <div className={style.Glass}>
          <div className={style.Content}>
            <h2 className={style.Hello}>Hola, soy</h2>
            <h2 className={style.Nombre}>Jesus Miguel</h2>
            <div className={style.Clearboth}></div>
            <h3>Y quiero ser un gran programador.</h3>
            <br />
            <h4>
              Tengo 18 años y me gusta en gran medida el desarrollo web, por lo mismo, anhelo llegar
              a ser uno de alto rango algún dia, mi primer paso es pasar por Henry y aprender las
              bases necesarias para emprender en esta carrera.
            </h4>
            <br />
            <h4>Si quieres contactarme puedes hacerlo por medio de las siguientes redes:</h4>
            <div className={style.Icons}>
              <a href="https://web.facebook.com/jesus.zuluaga.7374/">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/tu_usuario/">
                <FaInstagram />
              </a>
              <a href="https://github.com/tu_usuario">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/tu_usuario/">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
