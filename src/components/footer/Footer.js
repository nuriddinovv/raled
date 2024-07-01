import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faInstagram,
  faTelegram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Footerimg from "../../img/book-footer-2.png";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../context/Context";
export default function Footer() {
  const { text } = useContext(LanguageContext);
  return (
    <div
      className="footer"
      style={{
        background: `url(${Footerimg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-4 d-none footerLinks d-md-block">
            <ul>
              <li className="title">{text.footer.title}</li>
              <Link to={"https://maps.app.goo.gl/PzECvTKSyPtgWBhh8"}>
                <li>{text.footer.address}</li>
                <li>{text.footer.address1}</li>
                <li>{text.footer.address2}</li>
              </Link>
            </ul>
          </div>
          <div className="col-4 d-none d-md-block">
            <ul>
              <li className="title">{text.footer.open}</li>
              <li>{text.footer.week}</li>
              <li>{text.footer.hour}</li>
              <li>
                <Link to={"tel:+998951950055"}>{text.footer.tel}</Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-center d-md-block text-md-start">
            <ul className="">
              <li className="title">{text.footer.social}</li>
              <div className="icon">
                <Link to={"https://www.facebook.com/watch/mahoratLC/"}>
                  <FontAwesomeIcon
                    style={{ cursor: "pointer" }}
                    icon={faSquareFacebook}
                  />
                </Link>
                <Link
                  to={
                    "https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fmahoratmanagement%2F&is_from_rle"
                  }
                >
                  <FontAwesomeIcon
                    style={{ cursor: "pointer" }}
                    icon={faInstagram}
                  />
                </Link>
                <Link to={"https://t.me/mahorat_management"}>
                  <FontAwesomeIcon
                    style={{ cursor: "pointer" }}
                    icon={faTelegram}
                  />
                </Link>
                <Link
                  to={
                    "https://www.youtube.com/channel/UC5a9BbxxGgeOJaZ2wdA9-xg"
                  }
                >
                  <FontAwesomeIcon
                    style={{ cursor: "pointer" }}
                    icon={faYoutube}
                  />
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  );
}
