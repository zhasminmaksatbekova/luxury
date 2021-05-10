import './index.scss'
import roomimg from "../../assets/img/png/room1.png"
import roomsecond from "../../assets/img/png/room2.png"
import left from "../../assets/img/jpg/left.png"
import right from "../../assets/img/png/right.png"

function Room(){
    return(
        <div className="room">
            <div className="container">
                <h3 className="room__title">
                All our room types are including complementary breakfast
                </h3>
                <div className="row room__row">
                    <div className="col-6">
                        <h3 className="room__subtitle">
                        Luxury redefined
                        </h3>
                        <p className="room__text">
                        Our rooms are designed to transport 
                        you into an environment made for leisure. 
                        Take your mind off the day-to-day of home 
                        life and find a private paradise for yourself.
                        </p>
                        <button className="room__button">
                        EXPLORE
                        </button>
                    </div>
                    <div className="col-6">
                        <img className="room__img" src={roomimg} alt="room"/>
                    </div>
                    <div className="col-6">
                        <h3 className="room__subtitle">
                        Leave your worries in the sand
                        </h3>
                        <p className="room__text">
                        We love life at the beach. Being close
                        to the ocean with access to endless sandy
                        beach ensures a relaxed state of mind. It 
                        seems like time stands still watching the ocean. 
                        </p>
                        <button className="room__button">
                        EXPLORE
                        </button>
                    </div>
                    <div className="col-6">
                    <img className="room__img" src={roomsecond} alt="room"/>
                    </div>
                </div>
                <div className="room__content">
                    <h3 className="room__description">
                    Testimonials
                    </h3>
                    <h3 className="room__description--midle">
                    "Calm, Serene, Retro – What a way to relax and enjoy"
                    </h3>
                    <h3 className="room__description--small">
                    Mr. and Mrs. Baxter, UK
                    </h3>
                </div>
                <div className="room__signs">
                <img className="room__sign" src={left} alt="left"/>
                <img className="room__sign" src={right} alt="right"/>
                </div>
            </div>
        </div>
    )
}

export default Room