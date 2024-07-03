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
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { SpinnerCircular } from "spinners-react";
import { convertDate } from "../../repository/dataConvert";

export default function Home() {
  const { text } = useContext(LanguageContext);
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  async function getData() {
    const url = "https://raled.org/api/product/";
    try {
      const response = await axios.get(url);
      if (response.status !== 200) {
        throw new Error(`Response status: ${response.status}`);
      }
      const fetchedData = response.data;
      setData(fetchedData);

      const filterdata = fetchedData.filter((item) => item.best);
      setFilteredData(filterdata);

      setLoader(false);
    } catch (error) {
      console.error(error.message);
      setLoader(false);
    }
  }

  useEffect(() => {
    getData();
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  if (loader) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
        }}
        className="loader-container"
      >
        <SpinnerCircular
          size={100}
          thickness={100}
          speed={100}
          color="#1e2f97"
          secondaryColor="rgba(0, 0, 0, 0.3)"
        />
      </div>
    );
  }

  return (
    <div className="container py-3">
      <h1 data-aos="fade-down" className="text-center">
        {text.home.headertext}
      </h1>
      <div className="header">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div key={item.id} className="card" data-aos="fade-up">
              <div
                className="card-img-top"
                style={{
                  backgroundImage: `url(${item.thumb})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  height: "200px",
                }}
              ></div>
              <div className="card-body">
                <h4 style={{ fontWeight: "700" }}>{item.name}</h4>
                <p style={{ fontSize: "16px" }}>{convertDate(item.date)}</p>
                <button>
                  <Link to={`/book/${item.id}`}>{text.books.viewMore} →</Link>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div>{text.noResults}</div>
        )}
      </div>
      <div className="partners">
        <h1 data-aos="fade-right" className="text-center">
          {text.home.partner}
        </h1>
        <div className="row my-5 justify-content-center">
          {[partner1, partner2, partner3, partner4].map((partner, index) => (
            <div
              key={index}
              data-aos={index % 2 === 0 ? "zoom-in-right" : "zoom-in-left"}
              className="col-12 col-sm-6 justify-content-center col-md-3 partcard d-flex"
            >
              <Link to="#">
                <div className="partnerCard">
                  <img src={partner} alt={`Partner ${index + 1}`} />
                </div>
              </Link>
            </div>
          ))}
        </div>
        <h1
          data-aos="fade-right"
          data-aos-duration="500"
          className="text-center"
        >
          {text.home.links}
        </h1>
        <div className="partnersites my-4">
          {[mygov, yia, uzbmb, otv, oak].map((site, index) => (
            <div key={index} className="">
              <Link to="#">
                <div
                  data-aos={
                    index === 0 || index === 1
                      ? "fade-up-right"
                      : index === 2
                      ? "zoom-in"
                      : "fade-up-left"
                  }
                  className="card"
                >
                  <div className="cardimg">
                    <img src={site} alt={`Site ${index + 1}`} />
                  </div>
                  <div className="card-body text-center">
                    {text.home[`site${index + 1}`]}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
