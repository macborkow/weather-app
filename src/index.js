console.log('kuba to smiec2');

const fetchWeather = async () => {
  let result = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=5d5681cfd03e9dfe00bbe5befe716dbc');
  result = await result.json();
  console.log(result);
}

fetchWeather();