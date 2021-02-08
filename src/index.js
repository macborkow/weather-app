document.body.style.backgroundColor = 'beige';

let wrapper = document.createElement("div");
wrapper.style.margin = "auto";
wrapper.style.width = "50vw";
wrapper.style.top = "10vh";
wrapper.style.position = "relative";
wrapper.style.display = "flex";
wrapper.style.alignItems = "center";
wrapper.style.flexDirection = "column";
wrapper.style.backgroundColor = "white";
wrapper.style.borderRadius = '10vh';
wrapper.style.padding = "10vh 10vw";
wrapper.style.height = "20vh";
wrapper.style.transition = "0.2s";
document.body.appendChild(wrapper);

let form = document.createElement("input");
form.type = "text";
form.placeholder = "Type in some city";
form.style.display = "block";
wrapper.appendChild(form);

let tempDisplay = document.createElement("h1");
tempDisplay.innerText = "Press enter to search";
tempDisplay.style.fontSize = '3vh';
wrapper.appendChild(tempDisplay);

let img = document.createElement("img");
img.style.height = "35vh";
img.style.width = "auto";
img.style.opacity = "0";
img.style.transition = "0.2s";
img.style.borderRadius = '10vh';
wrapper.appendChild(img);

const displayGif = (temp) => {
  let foo;
  if (temp < 0) foo = "cold";
  else if (temp > 20) foo = "hot";
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
      img.style.opacity = "1";
      img.src = response.data.images.original.url;
    })
    .catch((e) => {
      img.src = "";
      throw e;
    });
};

const fetchWeather = async (city) => {
  wrapper.style.height = "10vh";
  img.style.opacity = "0";
  tempDisplay.innerText = "...";
  try {
    let result = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=5d5681cfd03e9dfe00bbe5befe716dbc`
    );
    result = await result.json();
    console.log(result);
    let tempC = result.main.temp - 273.15;
    displayGif(tempC);
    tempDisplay.innerText = `Temperature in ${result.name}, ${
      result.sys.country
    }: ${tempC.toFixed(1)}9\xB0C`;
    wrapper.style.height = "50vh";
  } catch (e) {
    tempDisplay.innerText = `City not found!`;
    img.src = "";
    console.error(e);
  }
};

document.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    console.log("hey");
    fetchWeather(form.value);
  }
});
