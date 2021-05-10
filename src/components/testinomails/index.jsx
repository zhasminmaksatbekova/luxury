import "./index.scss"
import left from "../../assets/img/jpg/left.png"
import right from "../../assets/img/png/right.png"


function Testimonials(){
    return(
        <div className="testinomails">
                            <div className="testinomails__test">
                    <h3 className="testinomails__description">
                    Testimonials
                    </h3>
                    <h3 className="testinomails__description--midle">
                    "Calm, Serene, Retro – What a way to relax and enjoy"
                    </h3>
                    <h3 className="testinomails__description--small">
                    Mr. and Mrs. Baxter, UK
                    </h3>
                </div>
                <div className="testinomails__signs">
                <img className="testinomails__sign" src={left} alt="left"/>
                <img className="testinomails__sign" src={right} alt="right"/>
                </div>
        </div>
    )
}

export default Testimonials

