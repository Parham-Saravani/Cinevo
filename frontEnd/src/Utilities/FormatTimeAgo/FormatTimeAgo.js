const FormatTimeAgo = (time) => {
  const date = new Date(time);
  const current = new Date();
  const diff = Math.floor(
    (current.getTime() - date.getTime()) / (1000 * 60 * 60 * 24),
  );
  if (!diff) {
    return "Today";
  } else if (diff >= 30) {
    const month = Math.floor(diff / 30);
    const days = diff - month * 30;
    if (month >= 12) {
      const year = Math.floor(month / 12);
      return `${year}y ago`;
    } else {
      return `${month}mo ago`;
    }
  } else if (diff >= 7) {
    const week = Math.floor(diff / 7);
    return `${week}w ago`;
  } else {
    return `${diff}d ago`;
  }
};
export default FormatTimeAgo;