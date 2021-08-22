import React, { useState } from "react";
import Link from "next/link";
import { MdCheckCircle } from "react-icons/md";
import language from "../../assets/images/language.png";
import blogo from "../../assets/images/blogo.png";

const NavBar = () => {
  const [selectedlanguage, setSelectedLanguage] = useState([
    false,
    true,
    false,
  ]);
  return (
    <nav className="nav">
      <ul className="navItems">
        <li className="navTitleIcon">
          <Link href="/">
            <img alt="blogIcon" src={blogo} className="blogIcon" />
          </Link>
        </li>
        <li className="navTitle">
          <Link href="/">
            <span>Dubori</span>
          </Link>
        </li>

        <ul style={{ flex: 1 }} />

        <li className="navListItems" id="largeWidth">
          Blog
        </li>
        {/* <li className="navListItems" id="largeWidth">
          Gallery
        </li>
        <li className="navListItems" id="largeWidth">
          Literature
        </li>
        <li className="navListItems" id="largeWidth">
          Media
        </li> */}
        <li className="navListItems" id="largeWidth">
          Contact Us
        </li>
        <li>
          <LanguageDropdown
            selected={selectedlanguage}
            setLanguage={setSelectedLanguage}
          />
        </li>
        {/* <li>
          <MdNotifications className="bellIcon" />
        </li> */}
      </ul>
    </nav>
  );
};

export default NavBar;

const LanguageDropdown = ({ selected, setLanguage }) => {
  const languages = ["অসমীয়া", "English"];

  return (
    <>
      <h6
        className="languageBtn"
        data-toggle="modal"
        data-target="#languageModal"
      >
        <img
          alt="languageIcon"
          draggable={false}
          src={language}
          className="languageIcon"
        />
      </h6>

      <div
        className="modal popIn"
        id="languageModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="languageModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <h5 className="modal-title" id="languageModalLabel">
                Language
              </h5>
              {languages.map((item, i) => (
                <h5
                  className="languageListItem"
                  onClick={() => {
                    let items = [false, false, false];
                    items[i] = !items[i];
                    setLanguage(items);
                  }}
                >
                  {item}
                  <MdCheckCircle
                    className={
                      selected[i]
                        ? "selectedLanguage fadeIn"
                        : "unselectedLanguage fadeOut"
                    }
                  />
                </h5>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
