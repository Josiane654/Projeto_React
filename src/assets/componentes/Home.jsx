import Style from '../styles/Home.module.css'

function Home(){

    return(
        <section className={Style.corpo_home}>
            <div className={Style.img_lado}></div>
            <div className={Style.texto_lado}>
                <h1>Encontre aqui a viagem dos seus sonhos!</h1>
                <p>Na Travel, transformamos sonhos em realidade! Oferecemos pacotes personalizados que atendem a todos os perfis de viajantes. Seja uma escapada romântica, uma aventura em família ou uma viagem solo de autoconhecimento, estamos aqui para planejar cada detalhe. Nossa equipe de especialistas está sempre pronta para compartilhar dicas valiosas e garantir experiências inesquecíveis. De destinos exóticos a passeios locais, sua próxima aventura começa aqui. Venha viajar com a gente e descubra o mundo de uma forma única!</p>
            </div>
        </section>
    )
}

export default Home