import "./index.scss"
import single from "../../assets/img/png/singleroom.png"
import double from "../../assets/img/png/doubleroom.png"
import twin from "../../assets/img/png/twinroom.png"
import Roombtn from "./propsbtn"
import { View } from "./const"

function Rates(){
    return(
        <div className="rates">
            <div className="container">
                <h2 className="rates__title">ROOMS AND RATES</h2>
                <p className="rates__text">Each of our bright, light-flooded rooms come with everything you could possibly need for a comfortable stay. And yes, 
                    comfort isn’t our only objective, we also value good design, sleek contemporary furnishing complemented 
                    by the rich tones of nature’s palette as visible from our rooms’ sea-view windows and terraces.
                </p>
                <div className="rates__content">
                    <img src={single} alt="room" />
                    <Roombtn name="SINGLE ROOM"/>
                </div>
                {View.map(item => {
                    return(
                        <div className="rates__book">
                            <img src={item.img} alt="sign" className="rates__sign" />
                            <h5 className="rates__description">{item.description}</h5>
                            <button className="rates__bookbtn">{item.button}</button>
                        </div>
                    )
                })}
                <div className="rates__content">
                    <img src={double} alt="room" />
                    <Roombtn name="DOUBLE ROOM"/>
                </div>
                {View.map(item => {
                    return(
                        <div className="rates__book">
                            <img src={item.img} alt="sign" className="rates__sign" />
                            <h5 className="rates__description">{item.description}</h5>
                            <button className="rates__bookbtn">{item.button}</button>
                        </div>
                    )
                })}
                <div className="rates__content">
                    <img src={twin} alt="room" />
                    <Roombtn name="TWIN ROOM"/>
                </div>
                {View.map(item => {
                    return(
                        <div className="rates__book">
                            <img src={item.img} alt="sign" className="rates__sign" />
                            <h5 className="rates__description">{item.description}</h5>
                            <button className="rates__bookbtn">{item.button}</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Rates