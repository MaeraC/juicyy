
import Benefits from "../components/Benefits"
import Description from "../components/Description"
import Header from "../components/Header"
import Hero from "../components/Hero"
import VerticalSlides from "../components/VerticalSlides"   

function Home() {
    return (
        <div>
            <Header />
            <Hero />
            <Description />
            <VerticalSlides /> 
            <Benefits />
        </div>
    )
}

export default Home