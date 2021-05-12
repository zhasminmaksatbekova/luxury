import "./index.scss"
import Button from "../buttons"

function Hero(){
    return(
        <div className="palm">
        <div className="container">
            <div className="palm__content">
                <h2 className="palm__title--small">WELCOME TO</h2>
                <h1 className="palm__title">LUXURY</h1>
                <h2 className="palm__title--midle">HOTELS</h2>
                <p className="palm__text">
                    Book your stay and enjoy Luxury
                    redefined at the most affordable rates.
                </p>
                <Button/>
            </div>
        </div>
    </div>
    )
}

export default Hero