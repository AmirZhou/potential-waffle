const forcast = {
  date: new Date(),
  weather: 'cool',
};

const log = (forcast: { date: Date; weather: string }): void => {
  console.log(forcast.date + forcast.weather);
};

const log2 = ({ date, weather }: { date: Date; weather: string }): void => {
  console.log(date + weather);
};
