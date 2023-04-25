import "./footer.css"

const Pie = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
    <div className='redes'>
        <a href='https://www.facebook.com/consultoriaaker'>
            <img src="/img/facebook.png" alt='Facebook' />
        </a>
        <a href='https://twitter.com/anabell_aker'>
            <img src="/img/twitter.png" alt='twitter' />
        </a>
        <a href='https://www.instagram.com/anabellpt_aker'>
            <img src="/img/instagram.png" alt='instagram' />
        </a>
    </div>
    <img src='/img/Logo.png' alt='org' />
    <strong>Desarrollado por Anabell Perales Torres</strong>
    </footer>
}

export default Pie