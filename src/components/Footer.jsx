import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import logo from "../assets/skillexa.png";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import appstore from "../assets/appstore.png";
import playstore from "../assets/google-play.png";

const Footer = () => {
  return (
    <div className="bg-base-200  pt-5 ">
      <div className="">
        <div className="flex md:flex-row flex-col  gap-5 justify-between items-center mb-4 w-11/12 mx-auto py-3">
          <img className="w-60" src={logo} alt="" />
          <div className="flex items-center gap-3">
            <Link>
              <FaLinkedin className="text-4xl bg-blue-700  text-white p-2 rounded-full  hover:bg-black transition-all ease-linear duration-200 " />
            </Link>
            <Link>
              <FaFacebook className="text-4xl bg-blue-700  text-white p-2 rounded-full  hover:bg-black transition-all ease-linear duration-200" />
            </Link>
            <Link>
              <FaXTwitter className="text-4xl bg-blue-700  text-white p-2 rounded-full  hover:bg-black transition-all ease-linear duration-200" />
            </Link>
            <Link>
              <FaInstagram className="text-4xl bg-blue-700  text-white p-2 rounded-full  hover:bg-black transition-all ease-linear duration-200" />
            </Link>
            <Link>
              <FaYoutube className="text-4xl bg-blue-700  text-white p-2 rounded-full  hover:bg-black transition-all ease-linear duration-200" />
            </Link>
            <Link to="/">
              <FaTiktok className="text-4xl bg-blue-700 rounded-full  hover:bg-black transition-all ease-linear duration-200 text-white p-2" />
            </Link>
          </div>
        </div>
        <div className="bg-blue-700 py-10">
          <div className="grid lg:grid-cols-4 gap-5 md:grid-cols-2 grid-cols-1 justify-between  w-11/12 mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Company
              </h3>
              <div className="flex flex-col font-semibold gap-2">
                <Link className="text-white hover:underline  ease-linear duration-2000">
                  About
                </Link>
                <Link className="text-white hover:underline  ease-linear duration-2000">
                  Careers
                </Link>
                <Link className="text-white hover:underline  ease-linear duration-2000">
                  Partnerships
                </Link>
                <Link className="text-white hover:underline  ease-linear duration-2000">
                  Blog
                </Link>
                <Link className="text-white hover:underline  ease-linear duration-2000">
                  News
                </Link>
                <Link className="text-white hover:underline  ease-linear duration-2000">
                  Affiliate
                </Link>
                <Link className="text-white hover:underline  ease-linear duration-2000">
                  Program
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Community
              </h3>
              <div className="flex flex-col font-semibold gap-2">
                <Link className="text-white hover:underline  ease-linear duration-2000">
                  Learners
                </Link>
                <Link className="text-white hover:underline  ease-linear duration-2000">
                  Testers
                </Link>
                <Link className="text-white hover:underline  ease-linear duration-2000">
                  Beta
                </Link>
                <Link className="text-white hover:underline  ease-linear duration-2000">
                  Tech
                </Link>
                <Link className="text-white hover:underline  ease-linear duration-2000">
                  Teaching Center
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Legal & Accessibility
              </h3>
              <div className="flex flex-col font-semibold gap-2">
                <Link className="text-white hover:underline  ease-linear duration-2000">
                  Modern Slavery Statement
                </Link>
                <Link className="text-white hover:underline  ease-linear duration-2000">
                  Terms of Service
                </Link>
                <Link className="text-white hover:underline  ease-linear duration-2000">
                  Code Privacy Policy
                </Link>
                <Link className="text-white hover:underline  ease-linear duration-2000">
                  Accessibility Policy
                </Link>
                <Link className="text-white hover:underline  ease-linear duration-2000">
                  Sitemap
                </Link>

                <Link className="text-white hover:underline  ease-linear duration-2000">
                  Cookie Policy
                </Link>
                <Link className="text-white hover:underline  ease-linear duration-2000">
                  Trademark Policy
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Mobile</h3>
              <div className="flex flex-col font-semibold gap-2">
                <Link className="text-white hover:underline  ease-linear duration-2000">
                  <img src={appstore} alt="" />
                </Link>
                <Link className="text-white hover:underline  ease-linear duration-2000">
                  <img className="w-[120px]" src={playstore} alt="" />
                </Link>
              </div>
            </div>
          </div>
          <div className="border-dotted border-b my-10 border-white "></div>

          <p className="w-11/12 mx-auto text-white">
            © 2024 Skillexa Inc. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
