const TimeFormatter = (time) => {
  const hour = Math.floor(time / 60);
  const minute = time - hour * 60;
  if (hour) {
    return `${hour}h${minute}m`;
  }else{
    return `${minute}m`
  }
  console.log(hour);
};

export default TimeFormatter;
