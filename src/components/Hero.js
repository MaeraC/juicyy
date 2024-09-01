
import image from "../assets/all.png"

function Hero() {
    return (
        <section className="hero-section">
            <div className="txt">
                <p className="slogan">Découvrez le goût authentique de la nature !</p>
                <p className="prg">Savourez la pureté dans chaque gorgée avec nos jus de fruits pressés à froid, 100% naturels et sans additifs. Offrez-vous le meilleur de la nature, et laissez-vous séduire par l'authenticité et la qualité de nos produits. </p>
                <button className="button">Nos jus de fruits pressés</button>
            </div>
            <div className="img">
                <img src={image} alt="" />
            </div>
        </section>
    )
}

export default Hero