import Style from '../styles/Footer.module.css'
import insta from '../img_reactviagens/insta.jpeg'
import face from '../img_reactviagens/face.jpeg'
import tiktok from '../img_reactviagens/tiktok.png'
import wpp from '../img_reactviagens/whtas.png'

function Footer(){

    return(
        <footer className={Style.corpo_footer}>
            <h3>Siga-nos nas redes sociais:</h3>
            <div className={Style.icones}>
                <img src={insta} alt="Instagram" />
                <img src={face} alt="Facebook" />
                <img src={tiktok} alt="TikTok" />
                <img src={wpp} alt="WhatsApp" />
            </div>
            <h3>Telefone de Contato: (11) 4002-8922</h3>
        </footer>
    )
}

export default Footer