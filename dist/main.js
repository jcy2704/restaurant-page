/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/carousel.js":
/*!*************************!*\
  !*** ./src/carousel.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ carousel\n/* harmony export */ });\nfunction carousel() {\n  const carouselMain = document.createElement('div');\n  const indicator = document.createElement('ol');\n  const carouselInnerContainer = document.createElement('div');\n  const carouselItemOne = document.createElement('div');\n  const carouselItemTwo = document.createElement('div');\n  const carouselItemThree = document.createElement('div');\n  const carouselItemFour = document.createElement('div');\n  const previous = document.createElement('a');\n  const next = document.createElement('a');\n\n  carouselMain.setAttribute('id', 'carouselExampleCaptions');\n  carouselMain.setAttribute('data-bs-ride', 'carousel');\n  carouselMain.classList.add('carousel', 'slide');\n\n  indicator.classList.add('carousel-indicators', 'w-50', 'mx-auto');\n\n  for (let i = 0; i < 4; i += 1) {\n    const li = document.createElement('li');\n    li.setAttribute('data-bs-target', '#carouselExampleCaptions');\n    li.setAttribute('data-bs-slide-to', `${i}`);\n\n    if (i === 0) {\n      li.classList.add('active');\n    }\n    indicator.appendChild(li);\n  }\n\n  carouselInnerContainer.classList.add('carousel-inner');\n\n  const carouselItems = [carouselItemOne, carouselItemTwo, carouselItemThree, carouselItemFour];\n\n  carouselItems.forEach((carousel) => {\n    const img = document.createElement('img');\n    const div = document.createElement('div');\n    const h5 = document.createElement('h5');\n    const p = document.createElement('p');\n\n    img.classList.add('d-block', 'food', 'w-50', 'mx-auto');\n    div.classList.add('carousel-caption', 'd-none', 'd-md-block', 'w-50', 'mx-auto');\n\n\n    carousel.classList.add('carousel-item');\n    if (carousel === carouselItemOne) {\n      carousel.classList.add('active');\n    }\n\n    div.append(h5, p);\n    carousel.append(img, div);\n  });\n\n  const food = ['breakfast.jpg', 'lunch.jpg', 'dinner.jpg', 'dessert.jpg'];\n  const capTitle = ['Breakfast Special', 'Lunch Spicy Special', 'Dinner Steak Special', 'Dreamy Cream'];\n\n  carouselItems.forEach((carousel, index) => {\n    const img = carousel.querySelector('img');\n    img.src = `../assets/food/${food[index]}`;\n\n    const div = carousel.querySelector('div');\n    const h5 = div.querySelector('h5');\n    const p = div.querySelector('p');\n\n    h5.textContent = capTitle[index];\n\n    p.textContent = 'Nulla vitae elit libero, a pharetra augue mollis interdum.';\n\n    carouselInnerContainer.appendChild(carousel);\n  });\n\n  previous.classList.add('carousel-control-prev');\n  previous.href = '#carouselExampleCaptions';\n  previous.setAttribute('role', 'button');\n  previous.setAttribute('data-bs-slide', 'prev');\n\n  next.classList.add('carousel-control-next');\n  next.href = '#carouselExampleCaptions';\n  next.setAttribute('role', 'button');\n  next.setAttribute('data-bs-slide', 'next');\n\n  [previous, next].forEach((link) => {\n    const a = document.createElement('span');\n    const b = document.createElement('span');\n    a.setAttribute('aria-hidden', 'true');\n    b.classList.add('visually-hidden');\n\n    if (link === previous) {\n      a.classList.add('carousel-control-prev-icon');\n      b.textContent = 'Previous';\n    } else {\n      a.classList.add('carousel-control-next-icon');\n      b.textContent = 'Next';\n    }\n\n    link.append(a, b);\n  });\n\n  carouselMain.append(indicator, carouselInnerContainer, previous, next);\n\n  return carouselMain;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/carousel.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs */ \"./src/tabs.js\");\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ \"./src/nav.js\");\n/* harmony import */ var _reset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reset */ \"./src/reset.js\");\n/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main_page */ \"./src/main_page.js\");\n/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./carousel */ \"./src/carousel.js\");\n\n\n\n\n\n\nconst content = document.querySelector('#content');\n\ndocument.body.append((0,_nav__WEBPACK_IMPORTED_MODULE_1__.default)(), content, (0,_carousel__WEBPACK_IMPORTED_MODULE_4__.default)());\n\nconst home = document.querySelector('.home');\nconst menu = document.querySelector('.menu');\nconst contact = document.querySelector('.contact');\n\nconst carouselCont = document.getElementById('carouselExampleCaptions');\n\ncontent.append(...(0,_main_page__WEBPACK_IMPORTED_MODULE_3__.default)());\n\nhome.addEventListener('click', () => {\n  const car = content.removeChild(carouselCont);\n  document.body.appendChild(car);\n  (0,_reset__WEBPACK_IMPORTED_MODULE_2__.default)();\n  carouselCont.style.display = 'none';\n  content.append(...(0,_main_page__WEBPACK_IMPORTED_MODULE_3__.default)());\n});\n\nmenu.addEventListener('click', () => {\n  (0,_reset__WEBPACK_IMPORTED_MODULE_2__.default)();\n  carouselCont.style.display = 'block';\n  content.append(_tabs__WEBPACK_IMPORTED_MODULE_0__.menu(), carouselCont);\n});\n\ncontact.addEventListener('click', () => {\n  (0,_reset__WEBPACK_IMPORTED_MODULE_2__.default)();\n  carouselCont.style.display = 'none';\n  content.append(..._tabs__WEBPACK_IMPORTED_MODULE_0__.contact(), carouselCont);\n});\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/main_page.js":
/*!**************************!*\
  !*** ./src/main_page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ mainPage\n/* harmony export */ });\n/* harmony import */ var _reset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset */ \"./src/reset.js\");\n/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs */ \"./src/tabs.js\");\n\n\n\nfunction mainPage() {\n  const content = document.querySelector('#content');\n  const container = document.createElement('div');\n  const btnsContainer = document.createElement('div');\n  const headline = document.createElement('h1');\n  const desc = document.createElement('p');\n  const menu = document.createElement('button');\n  const contact = document.createElement('button');\n\n  headline.textContent = 'Full Restaurant';\n\n  headline.classList.add('headline');\n\n  content.style.height = '100vh';\n  content.style.background = 'linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.95)), url(../assets/restaurant.jpg) no-repeat center bottom';\n  content.style.backgroundSize = 'cover';\n\n  desc.classList.add('description');\n  desc.textContent = 'Place to fulfill your palate';\n\n  container.classList.add('w-75', 'mx-auto', 'text-center');\n\n  menu.classList.add('menu-btn');\n  contact.classList.add('contact-btn');\n\n  menu.textContent = 'Menu';\n  contact.textContent = 'Order';\n\n  const carousel = document.getElementById('carouselExampleCaptions');\n\n  menu.addEventListener('click', () => {\n    (0,_reset__WEBPACK_IMPORTED_MODULE_0__.default)();\n    carousel.style.display = 'block';\n    content.append(_tabs__WEBPACK_IMPORTED_MODULE_1__.menu(), carousel);\n  });\n\n  contact.addEventListener('click', () => {\n    (0,_reset__WEBPACK_IMPORTED_MODULE_0__.default)();\n    content.append(..._tabs__WEBPACK_IMPORTED_MODULE_1__.contact(), carousel);\n  });\n\n  btnsContainer.classList.add('d-flex', 'justify-content-center');\n  btnsContainer.append(menu, contact);\n\n  container.append(desc, btnsContainer);\n\n  return [headline, container];\n}\n\n//# sourceURL=webpack://restaurant-page/./src/main_page.js?");

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ nav\n/* harmony export */ });\nfunction nav() {\n  const navbar = document.createElement('nav');\n  const navList = document.createElement('ul');\n  const home = document.createElement('button');\n  const menu = document.createElement('button');\n  const contact = document.createElement('button');\n\n  navList.classList.add('d-flex', 'p-3', 'pe-5', 'justify-content-end');\n  navbar.classList.add('w-100', 'float-end');\n\n  home.classList.add('home');\n  menu.classList.add('menu');\n  contact.classList.add('contact');\n\n  home.textContent = 'HOME';\n  menu.textContent = 'MENU';\n  contact.textContent = 'ORDER';\n\n  [home, menu, contact].forEach((elem) => {\n    const li = document.createElement('li');\n    li.classList.add('nav-item');\n    li.appendChild(elem);\n    navList.appendChild(li);\n  });\n\n  navbar.appendChild(navList);\n\n  return navbar;\n}\n\n//# sourceURL=webpack://restaurant-page/./src/nav.js?");

/***/ }),

/***/ "./src/reset.js":
/*!**********************!*\
  !*** ./src/reset.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ reset\n/* harmony export */ });\nfunction reset() {\n  const content = document.querySelector('#content');\n  content.innerHTML = '';\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/reset.js?");

/***/ }),

/***/ "./src/tabs.js":
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => /* binding */ menu,\n/* harmony export */   \"contact\": () => /* binding */ contact\n/* harmony export */ });\nfunction menu() {\n  const content = document.querySelector('#content');\n  const headline = document.createElement('h1');\n\n  headline.textContent = 'Menu';\n  headline.className = 'menu-headline';\n\n  content.style.height = '100vh';\n  content.style.background = 'linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.95)), url(../assets/food.jpg) no-repeat center bottom';\n  content.style.backgroundSize = 'cover';\n\n  return headline;\n}\n\nfunction contact() {\n  const content = document.querySelector('#content');\n  const headline = document.createElement('h1');\n  const sub = document.createElement('p');\n  const address = document.createElement('p');\n  const container = document.createElement('div');\n\n  headline.textContent = 'Call Us';\n  headline.className = 'order-headline';\n\n  sub.classList.add('sub');\n  address.classList.add('address');\n\n  sub.textContent = '212-207-8996';\n  address.textContent = '17 Berkshire Road Brooklyn, NY 11211';\n\n  container.classList.add('w-75', 'mx-auto', 'text-center');\n  container.append(sub, address);\n\n  content.style.height = '100vh';\n  content.style.background = 'linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.95)), url(../assets/waiter.jpg) no-repeat center top';\n  content.style.backgroundSize = 'cover';\n\n  return [headline, container];\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/tabs.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;