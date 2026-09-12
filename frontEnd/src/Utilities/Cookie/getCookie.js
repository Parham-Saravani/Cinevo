const getCookie = (name) => {
  const isAvailable = document.cookie.includes(name);
  if (isAvailable) {
    return document.cookie
      .split()
      .find((item) => item.startsWith(name))
      .split("=")[1];
  } else {
    return undefined;
  }
};
export default getCookie;
