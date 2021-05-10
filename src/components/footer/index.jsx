import "./index.scss"
import facebook from "../../assets/img/png/facebook.png"
import twitter from "../../assets/img/png/twitter.png"
import instagram from "../../assets/img/png/inst.png"

function Footer(){
    return(
        <div className="footer">
            <div className="container">
                <div className="row footer__row">
                    <div className="col-6">
                        <div className="row">
                        <div className="col-7">
                            <h4 className="footer__title">
                            LUXURY
                            </h4>
                            <h4 className="footer__subtitle">
                            HOTELS
                            </h4>
                            <h4 className="footer__info">
                            497 Evergreen Rd. Roseville, CA 95673
                            +44 345 678 903
                            luxury_hotels@gmail.com
                            </h4>
                        </div>
                        <div className="col-5">
                            <ul className="footer__list">
                                <li className="footer__item">
                                    <a href="#" className="footer__link">About Us</a>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link">Contact</a>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link">Terms & Conditions</a>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                        <div className="col-5">
                            <ul className="footer__list">
                                <li className="footer__item">
                                    <img className="footer__logo" src={facebook} alt="fb"/>
                                    <a href="" className="footer__link">Facebook</a>
                                </li>
                                <li className="footer__item">
                                    <img className="footer__logo" src={twitter} alt="tw"/>
                                    <a href="" className="footer__link">Twitter</a>
                                </li>
                                <li className="footer__item">
                                    <img className="footer__logo" src={instagram} alt=""/>
                                    <a href="" className="footer__link">Instagram</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-7">
                            <form action="" className="footer__form">
                                <label className="footer__label" htmlFor="email">Subscribe to our newsletter</label>
                                <input type="email" className="footer__input" placeholder="Email Address" required />
                                <button className="footer__button">OK</button>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer