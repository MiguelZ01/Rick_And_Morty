import style from './About.module.css'

const About = () => {
    return (
        <div className={style.About}>
            <div className={style.Presentation}>
            <h2 className={style.Hello}>Hola, soy</h2> 
            <h2 className={style.Nombre}>Jesus Miguel</h2>
            <div className={style.Clearboth}></div>
            <h3>Y quiero ser un gran programador.</h3>
            <br />
            <h4>Tengo 18 años y me gusta en gran medida el desarrollo web, por lo mismo, anhelo llegar a ser uno de alto rango algún dia, mi primer paso es pasar por Henry y aprender las bases necesarias para emprender en esta carrera.</h4>

            </div>
        </div>
    )
}

export default About;