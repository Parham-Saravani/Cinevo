import {
  FaTwitter,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="py-4 border-b border-t border-input-border/20">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex max-sm:justify-center max-sm:w-full items-center">
            <a href="/" className="max-sm:hidden text-white font-bold text-2xl">
              Cinevo
            </a>
            <ul className="ml-20 max-sm:ml-0 max-sm:flex-wrap max-sm:justify-center flex gap-6 items-center">
              <li className="menu-item text-white hover:text-text-secondary transition-colors duration-300 text-sm font-normal relative">
                <a href="">About</a>
              </li>
              <li className="menu-item text-white hover:text-text-secondary transition-colors duration-300 text-sm font-normal relative">
                <a href="">Contact</a>
              </li>
              <li className="menu-item text-white hover:text-text-secondary transition-colors duration-300 text-sm font-normal relative">
                <a href="">Privacy</a>
              </li>
              <li className="menu-item text-white hover:text-text-secondary transition-colors duration-300 text-sm font-normal relative">
                <a href="">Terms</a>
              </li>
              <li className="menu-item text-white hover:text-text-secondary transition-colors duration-300 text-sm font-normal relative">
                <a href="">Help</a>
              </li>
            </ul>
          </div>
          <div className="max-md:hidden flex items-center gap-2">
            <a href="#">
              <FaTwitter className="fill-text-secondary transition-colors duration-300 hover:text-text-primary cursor-pointer size-5.5" />
            </a>
            <a href="#">
              <FaInstagram className="fill-text-secondary transition-colors duration-300 hover:text-text-primary cursor-pointer size-5.5" />
            </a>
            <a href="#">
              <FaTelegramPlane className="fill-text-secondary transition-colors duration-300 hover:text-text-primary cursor-pointer size-5.5" />
            </a>
            <a href="#">
              <FaYoutube className="fill-text-secondary transition-colors duration-300 hover:text-text-primary cursor-pointer size-5.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
