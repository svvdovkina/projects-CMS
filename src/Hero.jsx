import heroImg from "./assets/painter.svg"

const Hero = ()=>{
    return <section className="hero">
        <div className="hero-center">
            <div className="hero-title">
                <h1>Projects CMS</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis ratione fugit, dolores laudantium exercitationem quos omnis, obcaecati natus mollitia cumque harum atque, fugiat molestias facere.</p>
            </div>
            <div className="image-container">
                <img className="hero-image" src={heroImg} alt="painter image" />
            </div>
        </div>
    </section>
}

export default Hero