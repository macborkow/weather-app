let img = document.createElement("img");
document.body.appendChild(img);

const displayGif = (temp) => {
  let foo;
  if (temp < 0) foo = "cold";
  else foo = "warm";
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=YgSMbNVTn9H2yFPan735riidNHosuAno&s=" +
      foo,
    { mode: "cors" }
  )
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      img.src = response.data.images.original.url;
    })
    .catch((e) => {
      img.src = "";
      throw e;
    });
};

const fetchWeather = async () => {
  let result = await fetch(
    "http://api.openweathermap.org/data/2.5/weather?q=Wroclaw,pl&APPID=5d5681cfd03e9dfe00bbe5befe716dbc"
  );
  result = await result.json();
  console.log(result);
  let temp = document.createElement("h1");
  let tempC = result.main.temp - 273.15;
  temp.innerText = `Temperature in Wroclaw: ${tempC}`;
  document.body.appendChild(temp);
  displayGif(tempC);
};

fetchWeather();
