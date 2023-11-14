const kelvinToCelcius = (e: number | undefined) => {
  if (e) {
    return `${Math.round(e - 273.15)}°`;
  } else {
    return "";
  }
};

const windSpeed = (e: number | undefined) => {
  if (e) {
    const speed = (e * 3600) / 1000;
    return speed.toFixed(1);
  } else {
    return 0;
  }
};

const dewPoint = (f: number | undefined, h: number | undefined) => {
  if (f && h) {
    const feels_likeCelcius = Math.round(f - 273.15);
    const result = feels_likeCelcius - (100 - h) / 5;
    return result.toFixed(1);
  } else {
    return 0;
  }
};

const visibilityInKm = (e: number | undefined) => {
  if (e) {
    return (e / 1000).toFixed(1);
  } else {
    return 0;
  }
};

export {kelvinToCelcius, windSpeed, dewPoint, visibilityInKm}
