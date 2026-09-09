function saveCookie(value, needDate = true) {
  const date = new Date();

  date.setDate(date.getDate() + 7);
  document.cookie = `auth-token=${value}; path=/; ${needDate && `expires=${date}`}`;
}

export default saveCookie;
