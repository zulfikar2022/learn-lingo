import { Link } from "react-router-dom";

const Footer = () => {
  // TODO: footer logo should be updated.
  return (
    <div className="bg-[#01a2a6] my-5 font-bold">
      <footer className="footer p-10  text-base-content">
        <div>
          <img
            src={
              "https://i.ibb.co/JnsQZDw/Whats-App-Image-2023-06-07-at-8-44-23-PM.jpg"
            }
            className="w-20"
            alt=""
          />
          <p>
            Learn Lingo Corporation
            <br />
            Providing reliable teaching service since 1992
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <Link >Branding</Link>
          <Link >Design</Link>
          <Link >Marketing</Link>
          <Link >Advertisement</Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link >About us</Link>
          <Link >Contact</Link>
          <Link >Jobs</Link>
          <Link >Press kit</Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link >Terms of use</Link>
          <Link >Privacy policy</Link>
          <Link >Cookie policy</Link>
        </div>
      </footer>
      {
        <p className="text-center py-3">{`Copyright © ${new Date().getFullYear()} Learn Lingo Corporation. All rights reserved.`}</p>
      }
    </div>
  );
};

export default Footer;
