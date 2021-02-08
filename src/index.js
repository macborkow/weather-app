let wrapper = document.createElement('div');
wrapper.style.margin = 'auto';
wrapper.style.width = '50vw';
wrapper.style.top = '15vh';
wrapper.style.position = 'relative';
wrapper.style.display = 'flex';
wrapper.style.alignItems = 'center';
wrapper.style.flexDirection = 'column';
wrapper.style.backgroundColor = 'gray';
wrapper.style.padding = '10vh 10vw';
wrapper.style.height = '50vh';
document.body.appendChild(wrapper);

let form = document.createElement('input');
form.type = 'text';
form.placeholder = 'Type in some city';
form.style.display = 'block';
wrapper.appendChild(form);

let tempDisplay = document.createElement('h1');
tempDisplay.innerText = 'Press enter to search';
wrapper.appendChild(tempDisplay);

let img = document.createElement('img');
img.style.height = '35vh';
img.style.width = 'auto';
wrapper.appendChild(img);

const displayGif = (temp) => {
  let foo;
  if (temp < 0) foo = 'cold';
  else if (temp > 20) foo = 'hot';
  else foo = 'warm';
  fetch(
    'https://api.giphy.com/v1/gifs/translate?api_key=YgSMbNVTn9H2yFPan735riidNHosuAno&s=' +
      foo,
    { mode: 'cors' }
  )
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      img.src = response.data.images.original.url;
    })
    .catch((e) => {
      img.src = '';
      throw e;
    });
};

const fetchWeather = async (city) => {
  try {
    let result = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=5d5681cfd03e9dfe00bbe5befe716dbc`
    );
    result = await result.json();
    console.log(result);
    let tempC = result.main.temp - 273.15;
    tempDisplay.innerText = `Temperature in ${result.name}, ${
      result.sys.country
    }: ${tempC.toFixed(1)}9\xB0C`;
    displayGif(tempC);
  } catch (e) {
    tempDisplay.innerText = `City not found!`;
    img.src = '';
    console.error(e);
  }
};

document.addEventListener('keyup', (e) => {
  if (e.key == 'Enter') {
    console.log('hey');
    fetchWeather(form.value);
  }
});
