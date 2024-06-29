import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import "./book.css";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../context/Context";
export default function Books() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const { text } = useContext(LanguageContext);
  useEffect(() => {
    axios
      .get("http://localhost:3000/data")
      .then((result) => {
        setData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="container book my-4">
        <h1 className="text-center">{text.books.title}</h1>
        <div className="search ">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="search-input"
            placeholder="Search..."
          />
          <FontAwesomeIcon
            style={{ color: "#1e2f97" }}
            icon={faMagnifyingGlass}
          />
        </div>
        <div className="results">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <div key={item.id} className="card">
                <div className="card-body">
                  <h5>{item.name}</h5>
                  <button>
                    <Link to={item.link}>View more</Link>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>Natijalar topilmadi</p>
          )}
        </div>
      </div>
    </div>
  );
}
