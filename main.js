/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
eval("let img = document.createElement(\"img\");\ndocument.body.appendChild(img);\n\nconst displayGif = (temp) => {\n  let foo;\n  if (temp < 0) foo = \"cold\";\n  else foo = \"warm\";\n  fetch(\n    \"https://api.giphy.com/v1/gifs/translate?api_key=YgSMbNVTn9H2yFPan735riidNHosuAno&s=\" +\n      foo,\n    { mode: \"cors\" }\n  )\n    .then((response) => {\n      return response.json();\n    })\n    .then((response) => {\n      img.src = response.data.images.original.url;\n    })\n    .catch((e) => {\n      img.src = \"\";\n      throw e;\n    });\n};\n\nconst fetchWeather = async () => {\n  let result = await fetch(\n    \"http://api.openweathermap.org/data/2.5/weather?q=Wroclaw,pl&APPID=5d5681cfd03e9dfe00bbe5befe716dbc\"\n  );\n  result = await result.json();\n  console.log(result);\n  let temp = document.createElement(\"h1\");\n  let tempC = result.main.temp - 273.15;\n  temp.innerText = `Temperature in Wroclaw: ${tempC}`;\n  document.body.appendChild(temp);\n  displayGif(tempC);\n};\n\nfetchWeather();\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");
/******/ })()
;