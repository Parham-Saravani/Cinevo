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
              <svg
                className="text-text-secondary transition-colors duration-300 hover:text-text-primary cursor-pointer size-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="twitter"
              >
                <path
                  d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
            <a href="#">
              <svg
                className="text-text-secondary transition-colors duration-300 hover:text-text-primary cursor-pointer size-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="instagram"
              >
                <path
                  d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
            <a href="#">
              <svg
                className="text-text-secondary transition-colors duration-300 hover:text-text-primary cursor-pointer size-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="telegram"
              >
                <path
                  d="M16.114 9.291c.552-.552 1.1-1.84-1.2-.276a395.806 395.806 0 0 1-6.489 4.372 2.7 2.7 0 0 1-2.117.046c-1.38-.414-2.991-.966-2.991-.966s-1.1-.691.783-1.427c0 0 7.961-3.267 10.722-4.418 1.058-.46 4.647-1.932 4.647-1.932s1.657-.645 1.519.92c-.046.644-.414 2.9-.782 5.338-.553 3.451-1.151 7.225-1.151 7.225s-.092 1.058-.874 1.242a3.787 3.787 0 0 1-2.3-.828c-.184-.138-3.451-2.209-4.648-3.221a.872.872 0 0 1 .046-1.473 169.31 169.31 0 0 0 4.835-4.602Z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
            <a href="#">
              <svg
                className="text-text-secondary transition-colors duration-300 hover:text-text-primary cursor-pointer size-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="youtube"
              >
                <path
                  d="M23,9.71a8.5,8.5,0,0,0-.91-4.13,2.92,2.92,0,0,0-1.72-1A78.36,78.36,0,0,0,12,4.27a78.45,78.45,0,0,0-8.34.3,2.87,2.87,0,0,0-1.46.74c-.9.83-1,2.25-1.1,3.45a48.29,48.29,0,0,0,0,6.48,9.55,9.55,0,0,0,.3,2,3.14,3.14,0,0,0,.71,1.36,2.86,2.86,0,0,0,1.49.78,45.18,45.18,0,0,0,6.5.33c3.5.05,6.57,0,10.2-.28a2.88,2.88,0,0,0,1.53-.78,2.49,2.49,0,0,0,.61-1,10.58,10.58,0,0,0,.52-3.4C23,13.69,23,10.31,23,9.71ZM9.74,14.85V8.66l5.92,3.11C14,12.69,11.81,13.73,9.74,14.85Z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
