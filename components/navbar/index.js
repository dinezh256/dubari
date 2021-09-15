import React from "react";
import Link from "next/link";
import Image from "next/image";
// import { MdCheckCircle } from "react-icons/md";
// import language from ".././../assets/images/language.png";
import blogo from "./../../assets/images/blogo.png";

const NavBar = () => {
  // const [selectedlang, setSelectedLang] = useState([false, true, false]);
  return (
    <nav className="nav">
      <ul className="navItems">
        <li className="navTitleIcon">
          <Link href="/" passHref={true}>
            <span>
              <Image
                alt="blogIcon"
                src={blogo}
                className="blogIcon"
                priority={true}
              />
            </span>
          </Link>
        </li>
        <li className="navTitle">
          <Link href="/" passHref>
            <span>Dubari</span>
          </Link>
        </li>

        <ul style={{ flex: 1 }} />

        <li className="navListItems">
          <Link href="/blogs">Blogs</Link>
        </li>

        <li className="navListItems">
          <Link href="/contact">Contact</Link>
        </li>
        {/* <li>
          <LanguageDropdown
            selected={selectedlang}
            setLanguage={setSelectedLang}
          />
        </li> */}
      </ul>
    </nav>
  );
};

export default NavBar;

// const LanguageDropdown = ({ selected, setLanguage }) => {
//   const languages = ["অসমীয়া", "English"];

//   return (
//     <>
//       <h6
//         className="languageBtn"
//         data-toggle="modal"
//         data-target="#languageModal"
//       >
//         <Image
//           alt="languageIcon"
//           draggable={false}
//           src={language}
//           className="languageIcon"
//           priority={true}
//         />
//       </h6>

//       <div
//         className="modal popIn"
//         id="languageModal"
//         tabIndex="-1"
//         role="dialog"
//         aria-labelledby="languageModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog" role="document">
//           <div className="modal-content">
//             <div className="modal-body">
//               <h5 className="modal-title" id="languageModalLabel">
//                 Language
//               </h5>
//               {languages.map((item, i) => (
//                 <h5
//                   className="languageListItem"
//                   onClick={() => {
//                     let items = [false, false, false];
//                     items[i] = !items[i];
//                     setLanguage(items);
//                   }}
//                   key={i}
//                 >
//                   {item}
//                   <MdCheckCircle
//                     className={
//                       selected[i]
//                         ? "selectedLang fadeIn"
//                         : "unselectedLang fadeOut"
//                     }
//                   />
//                 </h5>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
