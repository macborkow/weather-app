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
eval("document.body.style.backgroundColor = 'beige';\n\nlet wrapper = document.createElement(\"div\");\nwrapper.style.margin = \"auto\";\nwrapper.style.width = \"50vw\";\nwrapper.style.top = \"10vh\";\nwrapper.style.position = \"relative\";\nwrapper.style.display = \"flex\";\nwrapper.style.alignItems = \"center\";\nwrapper.style.flexDirection = \"column\";\nwrapper.style.backgroundColor = \"white\";\nwrapper.style.borderRadius = '10vh';\nwrapper.style.padding = \"10vh 10vw\";\nwrapper.style.height = \"20vh\";\nwrapper.style.transition = \"0.2s\";\ndocument.body.appendChild(wrapper);\n\nlet form = document.createElement(\"input\");\nform.type = \"text\";\nform.placeholder = \"Type in some city\";\nform.style.display = \"block\";\nwrapper.appendChild(form);\n\nlet tempDisplay = document.createElement(\"h1\");\ntempDisplay.innerText = \"Press enter to search\";\ntempDisplay.style.fontSize = '3vh';\nwrapper.appendChild(tempDisplay);\n\nlet img = document.createElement(\"img\");\nimg.style.height = \"35vh\";\nimg.style.width = \"auto\";\nimg.style.opacity = \"0\";\nimg.style.transition = \"0.2s\";\nimg.style.borderRadius = '10vh';\nwrapper.appendChild(img);\n\nconst displayGif = (temp) => {\n  let foo;\n  if (temp < 0) foo = \"cold\";\n  else if (temp > 20) foo = \"hot\";\n  else foo = \"warm\";\n  fetch(\n    \"https://api.giphy.com/v1/gifs/translate?api_key=YgSMbNVTn9H2yFPan735riidNHosuAno&s=\" +\n      foo,\n    { mode: \"cors\" }\n  )\n    .then((response) => {\n      return response.json();\n    })\n    .then((response) => {\n      img.style.opacity = \"1\";\n      img.src = response.data.images.original.url;\n    })\n    .catch((e) => {\n      img.src = \"\";\n      throw e;\n    });\n};\n\nconst fetchWeather = async (city) => {\n  wrapper.style.height = \"10vh\";\n  img.style.opacity = \"0\";\n  tempDisplay.innerText = \"...\";\n  try {\n    let result = await fetch(\n      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=5d5681cfd03e9dfe00bbe5befe716dbc`\n    );\n    result = await result.json();\n    console.log(result);\n    let tempC = result.main.temp - 273.15;\n    displayGif(tempC);\n    tempDisplay.innerText = `Temperature in ${result.name}, ${\n      result.sys.country\n    }: ${tempC.toFixed(1)}9\\xB0C`;\n    wrapper.style.height = \"50vh\";\n  } catch (e) {\n    tempDisplay.innerText = `City not found!`;\n    img.src = \"\";\n    console.error(e);\n  }\n};\n\ndocument.addEventListener(\"keyup\", (e) => {\n  if (e.key == \"Enter\") {\n    console.log(\"hey\");\n    fetchWeather(form.value);\n  }\n});\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");
/******/ })()
;