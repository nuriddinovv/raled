import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useParams } from "react-router-dom";
import { convertDate } from "../../repository/dataConvert";
import { LanguageContext } from "../../context/Context";
export default function SelectedBook() {
  const [selectedBook, setSelectedBook] = useState();
  const { id } = useParams();
  const { text } = useContext(LanguageContext);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/data/${id}`)
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
    <div className="container">
      {selectedBook ? (
        <div data-aos="fade-up" className="d-flex justify-content-center">
          <div className="selectedCard d-block d-md-flex gap-3">
            <div className="selectedCardImg ">
              <img
                src="https://picsum.photos/200/300"
                style={{ borderRadius: "8px" }}
                alt=""
              />
            </div>
            <div className="card-body">
              <h1>{selectedBook.name}</h1>
              <p>{convertDate(selectedBook.data)}</p>
              <button>{text.selectedBook.download}</button>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
