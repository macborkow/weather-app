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
eval("console.log('kuba to smiec2');\n\nconst fetchWeather = async () => {\n  let result = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=5d5681cfd03e9dfe00bbe5befe716dbc');\n  result = await result.json();\n  console.log(result);\n}\n\nfetchWeather();\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");
/******/ })()
;