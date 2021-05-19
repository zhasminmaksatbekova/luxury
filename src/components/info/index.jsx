import { Data } from "./const"
import "./index.scss"

function Info(){
    return(
        <div className="data">
            <div className="container">
                {Data.map(item => {
                    return(
                        <>
                          <h3 className="data__title">{item.title}</h3>
                          <p className="data__text">{item.text}</p>
                        </>
                    )
                })}
                <div className="row data__row">
                    <div className="col-6">
                        <h4 className="data__info">
                        497 Evergreen Rd. Roseville, CA 95673
                       </h4>
                        <div className="data__location">
                            <a href="https://www.google.com/maps/@42.8670976,74.6061824,13z" className="data__map">
                            View map
                            </a>
                            <svg className="data__svg" width="84" height="38" viewBox="0 0 84 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M82.7678 20.7678C83.7441 19.7915 83.7441 18.2085 82.7678 17.2322L66.8579 1.32233C65.8816 0.34602 64.2986 0.34602 63.3223 1.32233C62.346 2.29864 62.346 3.88155 63.3223 4.85786L77.4645 19L63.3223 33.1421C62.346 34.1184 62.346 35.7014 63.3223 36.6777C64.2986 37.654 65.8816 37.654 66.8579 36.6777L82.7678 20.7678ZM0 21.5H81V16.5H0V21.5Z" fill="#14274A"/>
                            </svg>
                        </div>
                        <h4 className="data__contact">
                        Phone: +44 345 678 903
                        Email: luxury_hotels@gmail.com
                        </h4>
                    </div>
                    <div className="col-6">
                        <form action="" className="data__form">
                            <label htmlFor="text" className="data__label">Name</label>
                            <input type="text" className="data__input"/>
                            <label htmlFor="text" className="data__label">Email Address</label>
                            <input type="email" className="data__input"/>
                            <label htmlFor="text" className="data__label">Message</label>
                            <textarea className="data__textarea" name="" id="" ></textarea>
                        </form>
                        <button className="data__button">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info