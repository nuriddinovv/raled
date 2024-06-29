import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import "./book.css";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../context/Context";
import AOS from "aos";
import "aos/dist/aos.css";
import { SpinnerCircular } from "spinners-react";

export default function Books() {
  const [bookData, setBookData] = useState([]);
  const [search, setSearch] = useState("");
  const [loader, setLoader] = useState(true);
  const { text } = useContext(LanguageContext);

  useEffect(() => {
    axios
      .get("http://localhost:3000/data")
      .then((result) => {
        setBookData(result.data);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
        setLoader(false);
      });

    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const filteredData = bookData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

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
    <div>
      <div className="container book my-4">
        <h1 data-aos="fade-down" className="text-center">
          {text.books.title}
        </h1>
        <div data-aos="fade-down" className="search">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="search-input"
            placeholder={text.books.searchPlaceholder}
          />
          <FontAwesomeIcon
            style={{ color: "#1e2f97" }}
            icon={faMagnifyingGlass}
          />
        </div>
        <div className="results">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <div key={item.id} className="card" data-aos="fade-up">
                <div
                  className="card-img-top"
                  style={{
                    background: `url(https://picsum.photos/200/300?random=${item.id})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    height: "200px",
                  }}
                ></div>
                <div className="card-body">
                  <h4 style={{ fontWeight: "700" }}>{item.name}</h4>
                  <p style={{ fontSize: "16px" }}>{item.data}</p>
                  <button>
                    <Link to={`/book/${item.id}`}>{text.books.viewMore} →</Link>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>{text.books.noResults}</p>
          )}
        </div>
      </div>
    </div>
  );
}
