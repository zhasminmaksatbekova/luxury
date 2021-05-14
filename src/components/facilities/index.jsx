import "./index.scss"
import { Facilitie } from "./const"

function Facilities(){
    return(
        <div className="facilities">
            <div className="container">
                <h3 className="facilities__title">
                   FACILITIES
                </h3>
              <p className="facilities__text">
                  We want your stay at our lush hotel to be truly unforgettable.  That is why we give special attention to all of your needs so                    that we can ensure an experience quite uniquw. Luxury hotels offers the perfect setting with stunning views for leisure
                  and our modern luxury resort facilities will help you enjoy the best of all.
                </p>
                {Facilitie.map(item => {
                    return(
                        <>
                          <div className="facilities__content">
                              <img src={item.img} alt="img" className="facilities__img" />
                              <div className="facilities__button">{item.button}</div>
                          </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}


export default Facilities