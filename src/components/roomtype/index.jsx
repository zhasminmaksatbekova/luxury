import './index.scss'
import { RoomList } from './const'


function Room(){
    return(
        <div className="room">
            <div className="container">
                <h3 className="room__title">
                All our room types are including complementary breakfast
                </h3>
                <div className="row room__main-row">
                {RoomList.map(item => {
                    return (
                        <>
                        <div className="row room__content">
                        <div className="col-5">
                                <div className="room__major">
                                     <h4 className="room__subtitle">{item.title}</h4>
                                     <p className="room__text">{item.desciption}</p>
                                     <button className="room__button">Explore</button>
                                </div>
                             </div>
                            <div className="col-7">
                                <img className="room__img" src={item.img} alt="" />
                            </div>
                        </div>
                        </>
                    )
                })}
                </div>
            </div>
        </div>
    )
}

export default Room


