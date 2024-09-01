
import bg from "../assets/banniere.png"
import bg2 from "../assets/banniere2.png"

function Description() {
    return (
        <section className="desc-section">
            <img src={bg2} alt="" />
            <div>
                <h2>Faites le plein de fraîcheur à chaque gorgée !</h2>
                <p className="txt">Nos jus de fruits sont bien plus qu'une simple boisson, ce sont des moments de pure nature en bouteille. Pressés à partir des meilleurs fruits frais, sans additifs ni conservateurs, chaque gorgée vous transporte directement au cœur des vergers les plus délicieux. Révélez votre bien-être avec chaque verre et laissez notre passion pour les fruits se transformer en une expérience inoubliable.<br></br><br></br>
                    Savourez l'authenticité et la fraîcheur à chaque instant, où chaque saveur est une ode à la nature, et chaque arôme, un souvenir d'un verger ensoleillé. Que ce soit pour commencer votre journée avec vitalité ou pour une pause revitalisante, nos jus vous apportent la pureté et la joie d'un moment de bonheur sain. Plongez dans l'essence même du fruit, et laissez-vous séduire par une explosion de goût, où chaque goutte est un pas de plus vers un style de vie équilibré et harmonieux.
                </p>
            </div>
            <img src={bg} alt="" />
        </section>
    )
}

export default Description