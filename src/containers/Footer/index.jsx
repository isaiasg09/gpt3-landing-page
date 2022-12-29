import React from "react";
import "./styles.css";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className='gpt3__footer' id="library">
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>
          Do you want to step in to the future before others?
        </h1>

        <button
          onClick={() =>
            window.open(
              "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            )
          }
        >
          Request Early Access
        </button>
      </div>

      <div className='gpt3__footer-content'>
        <div className='gpt3__footer-content-logo'>
          <img src={logo} alt='GPT3' />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>

        <div className='gpt3__footer-content-links gpt3__footer-content-list'>
          <h3>Links</h3>

          <a href='#'>Overons</a>
          <a href='#'>Social Media</a>
          <a href='#'>Counters</a>
          <a href='#'>Contact</a>
        </div>

        <div className='gpt3__footer-content-company gpt3__footer-content-list'>
          <h3>Company</h3>

          <a href='#'>Terms & Conditions</a>
          <a href='#'>Privacy Policy</a>
          <a href='#'>Contact</a>
        </div>

        <div className='gpt3__footer-content-info gpt3__footer-content-list'>
          <h3>Get in touch</h3>

          <a href='#'>Crechterwoord K12 182 DK Alknjkcb</a>
          <a href='#'>085-132567</a>
          <a href='#'>info@payme.net</a>
        </div>
      </div>
      <span>© 2021 GPT-3. All rights reserved.</span>
    </div>
  );
};

export default Footer;
