
import logo from "../assets/logo.png"

function Header() {
    return (
        <header>
            <img src={logo} alt="logo" />
            <nav>
                <ul>
                    <li>Accueil</li>
                    <li>Nos jus de fruits</li>
                    <li>Nous contacter</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header