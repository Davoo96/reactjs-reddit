const getUtcDateHours = (dateInSeconds: number) => {
  const date = new Date(dateInSeconds * 1000);
  const hours = date.getHours();
  return hours;
};

export default getUtcDateHours;
