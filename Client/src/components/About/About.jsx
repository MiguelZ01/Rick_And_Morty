import style from './About.module.css'

const About = () => {
    return (
        <div className={style.About}>
            <div className={style.Presentation}>
            <h2 className={style.Hello}>Hello, Im</h2> 
            <h2 className={style.Nombre}>Jesus Miguel</h2>
            <div className={style.Clearboth}></div>
            <h3>I want to be a web developer for this year.</h3>
            <br />
            <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, sint dignissimos consectetur qui itaque tempore optio consequuntur ipsum animi porro?</h4>
            </div>
        </div>
    )
}

export default About;