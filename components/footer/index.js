import React from "react";
import Link from "next/link";
import Image from "next/image";
import * as Icon from "react-icons/fa";
import footerLogo from "./../../assets/images/footerLogo.png";

const Footer = () => {
  return (
    <div className="footerWrapper">
      <div className="row footer">
        <div className="col footerColumn">
          <Image alt="footerLogo" src={footerLogo} className="footerLogo" />
        </div>
        <div className="w-100" />
        <div className="col footerColumn">
          <h6>
            <Link href="/blog">Blog</Link>
          </h6>
          <h6>
            <Link href="/#about">About</Link>
          </h6>
          {/* <h6>Gallery</h6> */}
          <h6>
            <Link href="/#about">Feedback</Link>
          </h6>
          <h6>
            <a
              href="mailto:dubari.official@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              WebMail
            </a>
          </h6>
        </div>
        <div className="w-100" />
        <div className="col footerColumn">
          <h4>
            <a href="https://www.facebook.com/satindrakumarnath">
              <Icon.FaFacebookSquare />
            </a>
          </h4>
          <h4>
            <a
              href="https://www.youtube.com/channel/UC1srXEPYELwEjfGydMAUe3w"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon.FaYoutube />
            </a>
          </h4>
          <h4>
            <a
              href="https://instagram.com/satindrakumar.nath"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon.FaInstagram />
            </a>
          </h4>
          <h4>
            <a
              href="https://twitter.com/satindra_nath"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon.FaTwitter />
            </a>
          </h4>
        </div>
        <div className="w-100" />

        <div className="w-100" />
        <div className="col copyrightSection">
          <h5>© Copyright - Dubori</h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
