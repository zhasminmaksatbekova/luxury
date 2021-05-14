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
                                    <a href="https://www.facebook.com/campaign/landing.php?campaign_id=1637278002&extra_1=s%7Cc%7C313958889108%7Ce%7Cfacebook%20com%7C&placement=&creative=313958889108&keyword=facebook%20com&partner_id=googlesem&extra_2=campaignid%3D1637278002%26adgroupid%3D62332990037%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-334696167%26loc_physical_ms%3D1009827%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjw-e2EBhAhEiwAJI5jg7Dk4_sc_Gdz0YfVxHvckn-ySYEz3qQ6eD3VWYVjURVNBIUnfrul-RoCGwcQAvD_BwE" className="footer__link">Facebook</a>
                                </li>
                                <li className="footer__item">
                                    <img className="footer__logo" src={twitter} alt="tw"/>
                                    <a href="https://twitter.com/" className="footer__link">Twitter</a>
                                </li>
                                <li className="footer__item">
                                    <img className="footer__logo" src={instagram} alt=""/>
                                    <a href="https://www.instagram.com/?hl=ru" className="footer__link">Instagram</a>
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