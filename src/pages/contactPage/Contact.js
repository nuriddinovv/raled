import { Link } from "react-router-dom";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons"; // Noto'g'ri importlarni to'g'rilash
import { useContext, useEffect } from "react";
import { LanguageContext } from "../../context/Context";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Contact() {
  const { text } = useContext(LanguageContext);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div>
      <div className="container">
        <h1 data-aos="fade-down" className="text-center my-4">
          {text.contact.h1}
        </h1>
        <div className="row justify-content-center align-items-center">
          <div data-aos="fade-right" className="col-12 col-xl-6">
            <div>
              <div className="locations">
                <p>
                  <FontAwesomeIcon icon={faLocationDot} />
                  <Link to="https://maps.app.goo.gl/PzECvTKSyPtgWBhh8">
                    {text.contact.address} {text.contact.address2}
                  </Link>
                </p>
                <p>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <Link to={`mailto:${text.contact.mailto}`}>
                    {text.contact.mail} {text.contact.mailto}
                  </Link>
                </p>
                <p>
                  <FontAwesomeIcon icon={faPhone} />
                  <Link to={`tel:998951950055`}>
                    {text.contact.phone} {text.contact.phonenumber}
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" className="col-12 col-xl-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.193415524065!2d69.2393715420055!3d41.2774334869973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a8a65339a47%3A0x7be3a713adadc47b!2sSafdosh%20St%2C%20Tashkent%2C%20Uzbekistan!5e1!3m2!1sen!2sus!4v1683196047760!5m2!1sen!2sus"
              width="100%"
              height="300px"
              style={{ border: 0, borderRadius: "5px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
