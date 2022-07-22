import Helmet from "../Components/Helmet/Helmet";
import CommonSection from "../Components/UI/common-section/CommonSection";
import { Link } from "react-router-dom";

import "../styles/contact.css";

export const Contact = () => {
  return (
    <Helmet title=" Contato">
      <CommonSection title="Contato" />{" "}
      <div class="contact-container">
        <h3 className="contact-title">
          Entre em contato atraves des nossas redes sociais{" "}
        </h3>
        <div className="social__links d-flex align-items-center gap-4 justify-content-end">
          <span>
            {" "}
            <a
              target="_blank"
              href="https://www.facebook.com/daniel.lins.543"
              className="btn btn-primary"
              rel="noreferrer"
            >
              <i class="ri-facebook-line"></i>
            </a>
          </span>

          <span>
            <a
              target="_blank"
              href="https://github.com/daniel-lins"
              rel="noreferrer"
              className="btn btn-primary"
            >
              <i class="ri-github-line"></i>
            </a>
          </span>

          <span>
            {" "}
            <a
              target="_blank"
              href=" https://www.linkedin.com/in/daniel-lins-/"
              rel="noreferrer"
              className="btn btn-primary"
            >
              <i class="ri-linkedin-line"></i>{" "}
            </a>
          </span>
        </div>
      </div>
    </Helmet>
  );
};

export default Contact;
