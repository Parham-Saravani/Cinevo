const removeCookie = (name) => {
  document.cookie = `${name}=; path =/ ; max-age=0`;
};

export default removeCookie;
