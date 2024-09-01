
import yellow from "../assets/yellow.png"
import orange from "../assets/orange.png"
import red from "../assets/red.png"

function VerticalSlides() { 
    return (
        <section className="drink-section"> 
            <div className="orange color-section">
                <div className="title">
                    <span className="h2">Naturel authentique</span>
                    <p className="p2">Profitez d'une boisson 100% naturelle, sans sucre ajouté, pour une expérience gustative authentique et revitalisante.</p>
                </div>
                <div className="img">
                    <img src={orange} alt="" className="bottle" />
                    <p className="txt">Orange - Carotte</p>
                </div>
            </div>
            <div className="red color-section">
                <div className="title">
                    <span className="h3">Fraîcheur éclatante</span>
                    <p className="p3">Goûtez la différence avec des produits qui conservent toute la vitalité et le croquant des fruits fraîchement cueillis.</p>
                </div>
                <div className="img">
                    <img src={red} alt="" className="bottle" />
                    <p className="txt">Fraise - Passion</p>
                </div>
            </div>
            <div className="yellow color-section">
                <div className="title">
                    <span className="h1">Pureté inégalée</span>
                    <p className="p1">Nos jus sont fabriqués avec des fruits rigoureusement sélectionnés pour leur goût exceptionnel et leur qualité irréprochable.</p>
                </div>
                <div className="img">
                    <img src={yellow} alt="" className="bottle" />
                    <p className="txt">Kiwi - Citron</p>
                </div>
                
            </div>
        </section>
    )
}

export default VerticalSlides