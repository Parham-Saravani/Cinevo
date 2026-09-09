function checkCookie() {
  return document.cookie.includes("auth-token");
}

export default checkCookie;
