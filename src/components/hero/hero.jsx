import "./hero.scss"
import Button from "../buttons"

function Hero(){
    return(
        <div className="hero">
            <div className="container">
                <div className="hero__content">
                    <h2 className="hero__title--small">WELCOME TO</h2>
                    <h1 className="hero__title">LUXURY</h1>
                    <h2 className="hero__title--midle">HOTELS</h2>
                    <p className="hero__text">
                        Book your stay and enjoy Luxury
                        redefined at the most affordable rates.
                    </p>
                    <Button/>
                </div>
            </div>
        </div>

    )
}

export default Hero;