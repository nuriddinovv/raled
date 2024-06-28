import React, { useContext } from "react";
import { LanguageContext } from "../../context/Context";
import about from "../../img/about1.jpg";
import raleb from "../../img/raled.jpg";
import './about.css'
export default function About() {
  const { text } = useContext(LanguageContext);
  return (
    <div className="my-4">
      <div className="container">
        <h1 className="text-center">{text.about.title}</h1>
        <div className="row align-items-center my-4">
          <div className="text col-12 col-xl-6">
            <p>{text.about.text1}</p>
            <p>{text.about.text2}</p>
          </div>
          <div className="col-xl-6 col-12">
            <img
              style={{ borderRadius: "5px" }}
              className="w-100  overflow-hidden"
              src={about}
              alt=""
            />
          </div>
        </div>
        <div className="my-4">
          <p>{text.about.text3}</p>
          <ul>
            <li style={{ listStyle: "inside" }}>
              <i>{text.about.list1}</i>
            </li>
            <li style={{ listStyle: "inside" }}>
              <i>{text.about.list2}</i>
            </li>
            <li style={{ listStyle: "inside" }}>
              <i>{text.about.list3}</i>
            </li>
            <li style={{ listStyle: "inside" }}>
              <i>{text.about.list4}</i>
            </li>
            <li style={{ listStyle: "inside" }}>
              <i>{text.about.list5}</i>
            </li>
            <li style={{ listStyle: "inside" }}>
              <i>{text.about.list6}</i>
            </li>
          </ul>
        </div>
        <div className="raleb row align-items-center">
          <div className="col-12 col-xl-6">
            <img
              style={{ borderRadius: "5px" }}
              className="w-100"
              src={raleb}
              alt=""
            />
          </div>
          <div className="col-12 col-xl-6">
            <p>{text.about.raleb}</p>
            <p>{text.about.text4}</p>
          </div>
        </div>
        <div className="my-4">
          <p>{text.about.text5}</p>
          <p>{text.about.text6}</p>
        </div>
      </div>
    </div>
  );
}
