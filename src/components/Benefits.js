
import fraises from "../assets/22.png"
import citrons from "../assets/33.png"
import oranges from "../assets/12.png"
import kiwi from "../assets/222.png" 
import banniere from "../assets/banniere3.png"

function Benefits() {
    return (
        <section className="benefits-section">
            <h2>Les bienfaits naturels de nos jus</h2>

            <div className="cards">
                <div className="card">
                    <img  src={fraises} alt="" />
                    <h3>Boostez Votre Immunité</h3>
                    <p>Nos jus sont riches en vitamines C, renforçant votre système immunitaire naturellement.</p>
                </div>
                <div className="card">
                <img className="float" src={kiwi} alt="" />
                    <h3>Énergie Naturelle et Durable</h3>
                    <p>Les sucres naturels fournissent une énergie durable sans les inconvénients des boissons énergétiques artificielles.</p>
                </div>
                <div className="card">
                <img src={citrons} alt="" />
                    <h3>Hydratation Optimale</h3>
                    <p>Profitez d'une hydratation optimale grâce à l'eau et aux électrolytes présents dans nos jus.</p>
                </div>
                <div className="card">
                <img className="float2" src={oranges} alt="" />
                    <h3>Détoxification Naturelle</h3>
                    <p>Nos jus aident à éliminer les toxines de votre corps, vous offrant une purification naturelle.</p>
                </div>
            </div>

            <img className="bann" src={banniere} alt="" />
        </section>
    )
}

export default Benefits