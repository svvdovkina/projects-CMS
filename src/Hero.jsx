import heroImg from "./assets/painter.png"

const Hero = ()=>{
    return <section className="hero">
        <div className="hero-center">
            <div className="hero-title">
                <h1>Projects CMS</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium ratione necessitatibus consectetur, ducimus doloribus, quisquam inventore, dolores consequuntur ea molestias accusantium nemo quidem. Nesciunt, impedit. Suscipit illum quod assumenda possimus!</p>
            </div>
            <div className="image-container">
                <img className="hero-image" src={heroImg} alt="painter image" />
            </div>
        </div>
    </section>
}

export default Hero