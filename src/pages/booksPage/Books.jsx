import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import "./book.css";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../context/Context";
import { SpinnerCircular } from "spinners-react";
import { convertDate } from "../../repository/dataConvert";
import { Pagination } from "antd";
export default function Books() {
  const [bookData, setBookData] = useState([]);
  const [search, setSearch] = useState("");
  const [loader, setLoader] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);
  const { text } = useContext(LanguageContext);
  const booksPerPage = 10;

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const url = "http://127.0.0.1:8000/api/product";
    try {
      const response = await axios.get(url, {
        headers: { "Content-Type": "application/json" },
        method: "GET",
        credentials: "include",
      });
      if (response.status !== 200) {
        throw new Error(`Response status: ${response.status}`);
      }
      setBookData(response.data);
      setLoader(false);
    } catch (error) {
      console.error(error.message);
    }
  }

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };

  const pageCount = Math.ceil(bookData.length / booksPerPage);

  const filteredBooks = bookData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const offset = pageNumber * booksPerPage;
  const currentPageData = filteredBooks.slice(offset, offset + booksPerPage);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setPageNumber(0);
  };

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
    <div className="container book my-4">
      <h1 data-aos="fade-down" className="text-center">
        {text.books.title}
      </h1>
      <div data-aos="fade-down" className="search">
        <input
          onChange={handleSearchChange}
          value={search}
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
        {currentPageData.length > 0 ? (
          currentPageData.map((item) => (
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
          <p style={{ display: "flex", justifyContent: "center" }}>
            {text.books.noResults}
          </p>
        )}
      </div>
      <div className="pagination-container my-3 d-flex justify-content-center">
        <Pagination
          current={pageNumber + 1}
          total={filteredBooks.length}
          pageSize={booksPerPage}
          onChange={handlePageClick}
        />
      </div>
    </div>
  );
}
