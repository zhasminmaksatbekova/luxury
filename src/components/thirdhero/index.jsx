import "./index.scss"
import Button from "../buttons"

function Hero(){
    return(
        <div className="hotel">
        <div className="container">
            <div className="hotel__content">
                <h2 className="hotel__title--small">WELCOME TO</h2>
                <h1 className="hotel__title">LUXURY</h1>
                <h2 className="hotel__title--midle">HOTELS</h2>
                <p className="hotel__text">
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