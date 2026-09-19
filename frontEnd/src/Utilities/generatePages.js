export const generatePages = (currentPage, totalPages) => {
  const start = Math.max(1, currentPage - 2);
  const end = Math.min(totalPages, currentPage + 2);
  return Array.from(
    { length: end === totalPages ? totalPages : 4 },
    (_, index) => start + index,
  );
};
