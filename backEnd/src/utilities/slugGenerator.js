const generateSlug = (title) => {
  return title.split(" ").join("-");
};
export default generateSlug;
