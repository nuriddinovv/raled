import "./home.css";
import { LanguageContext } from "../../context/Context";
import partner1 from "../../img/m-tech-logo.jpg";
import partner2 from "../../img/partner-uz-tea.jpg";
import partner3 from "../../img/partner-etf.jpg";
import partner4 from "../../img/m-managment.png";
import mygov from "../../img/mygov.png";
import yia from "../../img/yia_logo.png";
import uzbmb from "../../img/uzbmb.jpg";
import otv from "../../img/otv.jpg";
import oak from "../../img/oak.png";
import { useContext } from "react";
import { Link } from "react-router-dom";
export default function Home() {
  const { text } = useContext(LanguageContext);

  return (
    <div className="container py-3">
      <div className="header"></div>
      <div className="partners">
        <h1 className="text-center">{text.home.partner}</h1>
        <div className="row justify-content-center">
          <div className="col-3 d-flex ">
            <Link to={"https://mahorat.tech/"}>
              <div className="partnerCard">
                <img src={partner1} alt="" />
              </div>
            </Link>
          </div>
          <div className="col-3 d-flex">
            <Link to={"https://www.uztea.uz/"}>
              <div className="partnerCard">
                <img src={partner2} alt="" />
              </div>
            </Link>
          </div>
          <div className="col-3 d-flex">
            <Link
              to={
                "https://context.reverso.net/%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4/%D0%B0%D0%BD%D0%B3%D0%BB%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9-%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9/goodly"
              }
            >
              <div className="partnerCard">
                <img src={partner3} alt="" />
              </div>
            </Link>
          </div>
          <div className="col-3 d-flex">
            <Link to={"https://mahorat.org/"}>
              <div className="partnerCard">
                <img src={partner4} alt="" />
              </div>
            </Link>
          </div>
        </div>
        <div className="row partnersites my-4 justify-content-center">
          <div className="col">
            <Link to={"https://my.gov.uz/"}>
              <div className="card">
                <div className="cardimg">
                  <img src={mygov} alt="" />
                </div>
                <div className="card-body text-center">{text.home.mygov}</div>
              </div>
            </Link>
          </div>
          <div className="col">
            <Link to={"https://yoshlar.gov.uz/"}>
              <div className="card">
                <div className="cardimg">
                  <img src={yia} alt="" />
                </div>
                <div className="card-body text-center">
                  {text.home.yoshlargov}
                </div>
              </div>
            </Link>
          </div>
          <div className="col">
            <Link to={"https://uzbmb.uz/"}>
              <div className="card">
                <div className="cardimg">
                  <img src={uzbmb} alt="" />
                </div>
                <div className="card-body text-center">{text.home.uzbmb}</div>
              </div>
            </Link>
          </div>
          <div className="col">
            <Link to={"https://edu.uz/uz"}>
              <div className="card">
                <div className="cardimg">
                  <img src={otv} alt="" />
                </div>
                <div className="card-body text-center">{text.home.edu}</div>
              </div>
            </Link>
          </div>
          <div className="col">
            <Link to={"https://oak.uz/"}>
              <div className="card">
                <div className="cardimg">
                  <img src={oak} alt="" />
                </div>
                <div className="card-body text-center">{text.home.oak}</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
