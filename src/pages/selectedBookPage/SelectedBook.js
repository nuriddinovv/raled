import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate, useParams } from "react-router-dom";
import { convertDate } from "../../repository/dataConvert";
import { LanguageContext } from "../../context/Context";
import "./selectedbook.css";

export default function SelectedBook() {
  const [selectedBook, setSelectedBook] = useState();
  const { id } = useParams();
  const { text } = useContext(LanguageContext);
  const lang = localStorage.getItem("language");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/product/${id}`)
      .then((result) => {
        setSelectedBook(result.data);
      })
      .catch((err) => {
        console.log(err);
      });

    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, [id]);

  return (
    <div className="container my-4">
      {selectedBook ? (
        <div
          data-aos="fade-up"
          className="d-flex selectedCardWrapper justify-content-center"
        >
          <div className="selectedCard gap-3">
            <div className="selectedCardImg d-flex justify-content-center align-items-center">
              <img
                src={selectedBook.thumb}
                style={{ borderRadius: "8px", width: "70%" }}
                alt=""
              />
            </div>
            <div className="card-body ">
              <h1 className="text-center">{selectedBook.name}</h1>
              <p>{convertDate(selectedBook.date)}</p>
              <p>
                <i>
                  {lang === "uz"
                    ? selectedBook.description_uz
                    : lang === "en"
                    ? selectedBook.description_en
                    : selectedBook.description_ru}
                </i>
              </p>
              <div className="download">
                <button
                  onClick={() => {
                    window.location.href = selectedBook.url;
                  }}
                  className="btn btn-outline-primary my-2"
                >
                  {text.selectedBook.download}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </div>
  );
}
