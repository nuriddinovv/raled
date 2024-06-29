import "./redikt.css";
import img1 from "../../img/RashidovaFeruza.jpg";
import img2 from "../../img/HikmatillayevaUmida.jpg";
import img3 from "../../img/TillaevaNilufar.jpg";
import img4 from "../../img/KurbonovXudaynazar.jpg";
import img5 from "../../img/LesKirxam.jpg";
import img6 from "../../img/BasiyrRodney.jpg";
import img7 from "../../img/BoltayevaRokhatoy.jpg";
import img8 from "../../img/GanievaAziza.jpg";
import { useContext, useEffect } from "react";
import { LanguageContext } from "../../context/Context";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Redikt() {
  const { text } = useContext(LanguageContext);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
    });
  }, []);
  return (
    <div>
      <div className="rediktWrapper">
        <h1 data-aos="fade-down" className="text-center my-4">
          {text.navbar.redikt}
        </h1>
        <div className="cards my-3">
          <div data-aos="zoom-out-up" className="card">
            <div className="cardImg">
              <img src="#" alt="Sharipova Dilyara Jumaniyazovna" />
            </div>
            <div className="cardBody">
              <p className="title">{text.redikt.title1}</p>
              <p className="about">{text.redikt.about1}</p>
            </div>
          </div>
          <div data-aos="zoom-out-up" className="card">
            <div className="cardImg">
              <img src={img1} alt="Sharipova Dilyara Jumaniyazovna" />
            </div>
            <div className="cardBody">
              <p className="title">{text.redikt.title2}</p>
              <p className="about">{text.redikt.about2}</p>
            </div>
          </div>
          <div data-aos="zoom-out-up" className="card">
            <div className="cardImg">
              <img src={img2} alt="Sharipova Dilyara Jumaniyazovna" />
            </div>
            <div className="cardBody">
              <p className="title">{text.redikt.title3}</p>
              <p className="about">{text.redikt.about3}</p>
            </div>
          </div>
          <div data-aos="zoom-out-up" className="card">
            <div className="cardImg">
              <img src={img3} alt="Sharipova Dilyara Jumaniyazovna" />
            </div>
            <div className="cardBody">
              <p className="title">{text.redikt.title4}</p>
              <p className="about">{text.redikt.about4}</p>
            </div>
          </div>
          <div data-aos="zoom-out-up" className="card">
            <div className="cardImg">
              <img src={img4} alt="Sharipova Dilyara Jumaniyazovna" />
            </div>
            <div className="cardBody">
              <p className="title">{text.redikt.title5}</p>
              <p className="about">{text.redikt.about5}</p>
            </div>
          </div>
          <div data-aos="zoom-out-up" className="card">
            <div className="cardImg">
              <img src={img5} alt="Sharipova Dilyara Jumaniyazovna" />
            </div>
            <div className="cardBody">
              <p className="title">{text.redikt.title6}</p>
              <p className="about">{text.redikt.about6}</p>
            </div>
          </div>
          <div data-aos="zoom-out-up" className="card">
            <div className="cardImg">
              <img src={img6} alt="Sharipova Dilyara Jumaniyazovna" />
            </div>
            <div className="cardBody">
              <p className="title">{text.redikt.title7}</p>
              <p className="about">{text.redikt.about7}</p>
            </div>
          </div>
          <div data-aos="zoom-out-up" className="card">
            <div className="cardImg">
              <img src={img7} alt="Sharipova Dilyara Jumaniyazovna" />
            </div>
            <div className="cardBody">
              <p className="title">{text.redikt.title8}</p>
              <p className="about">{text.redikt.about8}</p>
            </div>
          </div>
          <div data-aos="zoom-out-up" className="card">
            <div className="cardImg">
              <img src={img8} alt="Sharipova Dilyara Jumaniyazovna" />
            </div>
            <div className="cardBody">
              <p className="title">{text.redikt.title9}</p>
              <p className="about">{text.redikt.about9}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
