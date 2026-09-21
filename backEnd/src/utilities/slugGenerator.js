const generateSlug = (title) => {
  return title.toLowerCase().split(" ").join("-");
};
export default generateSlug;
