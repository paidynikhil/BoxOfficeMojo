import React from "react";
import {
    FaGithub,
    FaInstagram,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                Where to watch movies online? A movie evening always starts with a very time-consuming and frustrating search for where to watch movies online. 
                JustWatch is there to help you find all the movies you can stream legally in India and make your life easier.
                <p>You are here on the popular view that helps you find and stream movies online. For new movie releases <span className="ul"> Click here</span></p>
                </div>
                <div className="socialIcons">
                    <span className="icon">
                       <a href="https://github.com/paidynikhil" target="_blank"> <FaGithub /> </a>
                    </span>

                    <span className="icon">
                        <a href="https://www.instagram.com/_nikhil_318/" target="_blank"> <FaInstagram /> </a>
                    </span>

                    <span className="icon">
                        <a href="in/paidy-nikhil-4b7027243" target="_blank"><FaLinkedin /></a>
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
