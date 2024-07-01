import { useContext, useEffect } from "react";
import { LanguageContext } from "../../context/Context";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
export default function Send() {
  const { text } = useContext(LanguageContext);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
    });
  }, []);
  return (
    <div>
      <div className="container">
        <h1 data-aos="fade-down" className="text-center my-4">
          {text.send.title}
        </h1>
        <p data-aos="fade-down">{text.send.text1}</p>
        <h1 data-aos="fade-right" className="fs-2 p-0 py-2">
          {text.send.requirements}
        </h1>
        <ul data-aos="fade-right">
          <li style={{ listStyle: "inside", fontSize: "18px" }}>
            {text.send.reqlist1}
          </li>
          <li style={{ listStyle: "inside", fontSize: "18px" }}>
            {text.send.reqlist2}
          </li>
          <li style={{ listStyle: "inside", fontSize: "18px" }}>
            {text.send.reqlist3}
          </li>
          <li style={{ listStyle: "inside", fontSize: "18px" }}>
            {text.send.reqlist4}
          </li>
          <li style={{ listStyle: "inside", fontSize: "18px" }}>
            {text.send.reqlist5}
          </li>
        </ul>
        <h1 data-aos="fade-right" className="fs-2 p-0 py-2">
          {text.send.sources}
        </h1>
        <p data-aos="fade-right">{text.send.sourcestext}</p>
        <h1 data-aos="fade-right" className="fs-2 p-0 py-2">
          {text.send.sourcesstructure}
        </h1>
        <ul data-aos="fade-right">
          <li style={{ listStyle: "inside", fontSize: "18px" }}>
            {text.send.sourceslist1}
          </li>
          <li style={{ listStyle: "inside", fontSize: "18px" }}>
            {text.send.sourceslist2}
          </li>
          <li style={{ listStyle: "inside", fontSize: "18px" }}>
            {text.send.sourceslist3}
          </li>
          <li style={{ listStyle: "inside", fontSize: "18px" }}>
            {text.send.sourceslist4}
          </li>
          <li style={{ listStyle: "inside", fontSize: "18px" }}>
            {text.send.sourceslist5}
          </li>
          <li style={{ listStyle: "inside", fontSize: "18px" }}>
            {text.send.sourceslist6}
          </li>
          <li style={{ listStyle: "inside", fontSize: "18px" }}>
            {text.send.sourceslist7}
          </li>
          <li style={{ listStyle: "inside", fontSize: "18px" }}>
            {text.send.sourceslist8}
          </li>
          <li style={{ listStyle: "inside", fontSize: "18px" }}>
            {text.send.sourceslist9}
          </li>
        </ul>
        <h1 data-aos="fade-right" className="fs-2 p-0 py-2 ">
          {text.send.addreq}
        </h1>
        <p data-aos="fade-right">{text.send.addreqtext}</p>
        <h1 data-aos="fade-right" className="fs-2 p-0 py-2 ">
          {text.send.edit}
        </h1>
        <p data-aos="fade-right">
          {text.send.edittext}
          <Link to={"mailto:academymahorat@gmail.com"}>
            {text.send.editMail}
          </Link>
        </p>
      </div>
    </div>
  );
}
