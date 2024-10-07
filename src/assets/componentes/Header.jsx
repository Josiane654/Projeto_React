import Logo from '../img_reactviagens/viagens.jpg'
import Lupa from '../img_reactviagens/lupa.png'
import Style from '../styles/Header.module.css'

function Header() {

    return (
        <header className={Style.content}>
            <img src={Logo} alt="Logo" className={Style.logo} />
            <nav className={Style.menu}>
                <ul>
                    <li>Home</li>
                    <li>Scotland</li>
                    <li>Grand Canyon</li>
                    <li>Muralhas da China</li>
                    <li>Aruba</li>
                </ul>
            </nav>

            <div className={Style.login}>
                <input type="search" />
            </div>

            <img src={Lupa} alt="Lupa" className={Style.lupa} />
        </header>
    )
}

export default Header