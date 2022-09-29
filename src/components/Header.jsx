import React from "react";
import Rectangle3674 from "../assets/Rectangle3674.png";

//imports for icons from react-icons
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";

//styles import
import { headerButton1, headerDiv, headerDiv2, headerImgDiv, headerImg, headerIntroDiv, headerIntroH1, headerIntroH5, headerIntroLinks, headerIntroButton } from "../styles";

// header contains name and picture and intro
function Header() {
  return (
    <div className={headerDiv}>
      <div className={headerDiv2}>
        <div className="">
          <div className={headerImgDiv}>
            <img className={headerImg} src={Rectangle3674} alt="avatar" />
            <button className={headerButton1}>
              Contact
            </button>
          </div>
        </div>
        <div className={headerIntroDiv}>
          <h1 className={headerIntroH1}>
            JESSICA HENERY
          </h1>
          <h5 className={headerIntroH5}>
            Senior SEO Writer
          </h5>
          <div className={headerIntroLinks}>
            <FaFacebookF color="grey" size={22} />
            <FaTwitter color="grey" size={22} />
            <FaLinkedinIn color="grey" size={22} />
            <FaInstagram color="grey" size={22} />
            <FaPinterestP color="grey" size={22} />
          </div>
          <button className={headerIntroButton}>
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
