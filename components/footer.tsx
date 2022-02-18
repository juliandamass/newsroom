import { Linkedin, Instagram, Facebook } from 'react-feather';

import LogoMain from '../public/images/logo-main.png';
import LogoMainWhite from '../public/images/logo-main-white.png';
import ImgFooter from '../public/images/img-footer.jpg';

const Footer = () => {
  return (
    <footer className="relative font-display">
      <div className="py-6 lg:py-16 bg-primary">
        <div className="max-w-6xl mx-auto px-6 lg:px-4">
          <img
            src={LogoMainWhite.src}
            className="w-52 mb-8 lg:hidden"
            alt="Park N Parcel Logo"
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-10 text-white z-10 relative">
            <div>
              <ul className="list-none text-md">
                <li className="mb-4 block text-xl font-semibold">
                  Park N Parcel
                </li>
                <li className="mb-1 block">
                  <a href="/about-us">About us</a>
                </li>
                <li className="mb-1 block">
                  <a href="/track">Track your parcel</a>
                </li>
                <li className="mb-1 block">
                  <a href="/drive-with-us">Apply as a Driver</a>
                </li>
                <li className="mb-1 block">
                  <a href="/parker-point-signup">Parker Point Partnership</a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="list-none text-md">
                <li className="mb-4 block text-xl font-semibold">Resources</li>
                <li className="mb-1 block">
                  <a href="">Newsroom</a>
                </li>
                <li className="mb-1 block">
                  <a href="">Blog</a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="list-none text-md">
                <li className="mb-4 block text-xl font-semibold">Support</li>
                <li className="mb-1 block">
                  <a href="/contact-us">Contact Us</a>
                </li>
                <li className="mb-1 block">
                  <a href="/guides#faq">FAQ</a>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-4 block text-xl font-semibold">
                Recent Articles
              </p>
              <img
                src={ImgFooter.src}
                alt="Footer"
                className="w-full h-32 object-cover object-center rounded-xl mb-4"
              />
              <p className="font-semibold mb-1">
                SMES Adapt to Meet Changing Demands Resulting from Coronavirus
              </p>
              <p className="text-sm leading-4">Coming soon...</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-4 lg:gap-6">
            <div className="text-white">
              <div className="mb-4">
                <p className="font-semibold">Subscribe to our newsletter</p>
                <p className="text-sm">
                  Be updated on the latest news, promotions, tips and tricks!
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <a
                  href="https://www.linkedin.com/company/parknparcelsg"
                  target="_blank"
                  rel="noreferrer"
                  className=" flex items-center justify-center w-9 h-9 bg-white rounded-full"
                >
                  <Linkedin className="w-4 h-4 text-primary" />
                </a>
                <a
                  href="https://www.instagram.com/parknparcelsg/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-9 h-9 bg-white rounded-full"
                >
                  <Instagram className="w-4 h-4 text-primary" />
                </a>
                <a
                  href="https://www.facebook.com/parknparcelsg/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-9 h-9 bg-white rounded-full"
                >
                  <Facebook className="w-4 h-4 text-primary" />
                </a>
              </div>
            </div>

            <div className="flex items-center justify-end space-x-3">
              <a
                href="https://www.linkedin.com/company/parknparcelsg"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-9 h-9 bg-white rounded-full"
              >
                <Linkedin className="w-4 h-4 text-primary" />
              </a>
              <a
                href="https://www.instagram.com/parknparcelsg/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-9 h-9 bg-white rounded-full"
              >
                <Instagram className="w-4 h-4 text-primary" />
              </a>
              <a
                href="https://www.facebook.com/parknparcelsg/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-9 h-9 bg-white rounded-full"
              >
                <Facebook className="w-4 h-4 text-primary" />
              </a>
              {/* <form v-on:submit.prevent="doSubscribe">
              <div className="flex rounded-md">
                <input
                  v-model="email"
                  name="email"
                  type="email"
                  className="
                    focus:ring-indigo-500 focus:border-indigo-500
                    flex-1
                    block
                    w-full
                    rounded-none rounded-l-full
                    sm:text-sm
                    border-gray-300
                    py-2
                    px-4
                  "
                  placeholder="Enter your email address"
                />
                <button
                  type="submit"
                  className="
                    relative
                    inline-flex
                    items-center
                    px-3
                    rounded-r-full
                    bg-secondary
                    text-white text-sm
                  "
                >
                  <span :className="loadingSubscribe ? 'invisible' : 'visible'">
                    Subscribe
                  </span>

                  <span
                    :className="loadingSubscribe ? 'visible' : 'invisible'"
                    className="
                      absolute
                      top-1/2
                      left-1/2
                      transform
                      -translate-x-1/2 -translate-y-1/2
                    "
                  >
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
            </form> */}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 lg:px-4">
        <div className="flex flex-wrap flex-col-reverse lg:flex-row items-center justify-between py-8">
          <div className="text-center">
            <img
              src={LogoMain.src}
              alt="Park N Parcel"
              className="inline-block h-6 lg:h-8 mb-2"
            />
            <p className="text-sm lg:text-base text-gray-400">
              Copyright © 2022 ParkNParcel
            </p>
          </div>
          <div className="flex flex-col lg:flex-row lg:space-x-10 space-y-2 lg:space-y-0 text-center lg:text-right text-gray-400 mb-8 lg:mb-0 ">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-and-conditions">Terms and Conditions</a>
            <a href="/disclaimer">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
