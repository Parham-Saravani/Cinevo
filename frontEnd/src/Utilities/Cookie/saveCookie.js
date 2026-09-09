function saveCookie(value) {
  const date = new Date();

  date.setDate(date.getDate() + 7);
  document.cookie = `auth-token=${value}; path=/; expires=${date}`;
}

export default saveCookie;
