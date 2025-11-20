/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart.js */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_load_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/load.js */ \"./src/modules/load.js\");\n/* harmony import */ var _modules_search_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search.js */ \"./src/modules/search.js\");\n/* harmony import */ var _modules_catalog_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/catalog.js */ \"./src/modules/catalog.js\");\n/* harmony import */ var _modules_priceRange_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/priceRange.js */ \"./src/modules/priceRange.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_cart_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_load_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_search_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_catalog_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_priceRange_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n\n\n//# sourceURL=webpack://ozon_project/./src/index.js?\n}");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderCart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderCart.js */ \"./src/modules/renderCart.js\");\n/* harmony import */ var _postData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postData.js */ \"./src/modules/postData.js\");\n\r\n\r\n\r\nconst cart = () => {\r\n  const cartBtn = document.getElementById(\"cart\");\r\n  const cartModal = document.querySelector(\".cart\");\r\n  const cartCloseBtn = cartModal.querySelector(\".cart-close\");\r\n  const goodsWrapper = document.querySelector(\".goods\");\r\n  const cartTotal = cartModal.querySelector(\".cart-total > span\");\r\n  const cartWrapper = document.querySelector(\".cart-wrapper\");\r\n  const cartSendBtn = cartModal.querySelector(\".cart-confirm\");\r\n\r\n  const openCart = () => {\r\n    const cart = localStorage.getItem(\"cart\")\r\n      ? JSON.parse(localStorage.getItem(\"cart\"))\r\n      : [];\r\n\r\n    cartModal.style.display = \"flex\";\r\n\r\n    (0,_renderCart_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cart);\r\n    cartTotal.textContent = cart.reduce((sum, goodItem) => {\r\n      return sum + goodItem.price;\r\n    }, 0);\r\n  };\r\n\r\n  const closeCart = () => {\r\n    cartModal.style.display = \"none\";\r\n  };\r\n\r\n  cartBtn.addEventListener(\"click\", openCart);\r\n  cartCloseBtn.addEventListener(\"click\", closeCart);\r\n\r\n  goodsWrapper.addEventListener(\"click\", (event) => {\r\n    if (event.target.classList.contains(\"btn-primary\")) {\r\n      const card = event.target.closest(\".card\");\r\n      const key = card.dataset.key;\r\n      const goods = JSON.parse(localStorage.getItem(\"goods\"));\r\n      const cart = localStorage.getItem(\"cart\")\r\n        ? JSON.parse(localStorage.getItem(\"cart\"))\r\n        : [];\r\n      const goodItem = goods.find((item) => {\r\n        return item.id == key;\r\n      });\r\n      cart.push(goodItem);\r\n      localStorage.setItem(\"cart\", JSON.stringify(cart));\r\n    }\r\n  });\r\n\r\n  cartWrapper.addEventListener(\"click\", (event) => {\r\n    if (event.target.classList.contains(\"btn-primary\")) {\r\n      const cart = localStorage.getItem(\"cart\")\r\n        ? JSON.parse(localStorage.getItem(\"cart\"))\r\n        : [];\r\n\r\n      const card = event.target.closest(\".card\");\r\n      const key = card.dataset.key;\r\n      const index = cart.findIndex((item) => {\r\n        return item.id == key;\r\n      });\r\n      cart.splice(index, 1);\r\n      localStorage.setItem(\"cart\", JSON.stringify(cart));\r\n      (0,_renderCart_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cart);\r\n\r\n      cartTotal.textContent = cart.reduce((sum, goodItem) => {\r\n        return sum + goodItem.price;\r\n      }, 0);\r\n    }\r\n  });\r\n\r\n  cartSendBtn.addEventListener(\"click\", () => {\r\n    const cart = localStorage.getItem(\"cart\")\r\n      ? JSON.parse(localStorage.getItem(\"cart\"))\r\n      : [];\r\n\r\n    (0,_postData_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cart).then(() => {\r\n      localStorage.removeItem('cart');\r\n      (0,_renderCart_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([]);\r\n      cartTotal.textContent = 0;\r\n    })\r\n    \r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\r\n\n\n//# sourceURL=webpack://ozon_project/./src/modules/cart.js?\n}");

/***/ }),

/***/ "./src/modules/catalog.js":
/*!********************************!*\
  !*** ./src/modules/catalog.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData.js */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods.js */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters.js */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst catalog = () => {\r\n    const catalogBtn = document.querySelector('.catalog-button > button');\r\n    const catalogList = document.querySelector('.catalog');\r\n    const catalogListItems = catalogList.querySelectorAll('li');\r\n\r\n    let isOpen = false; \r\n\r\n    catalogBtn.addEventListener('click', () => {\r\n        isOpen = !isOpen;\r\n        catalogList.style.display = (isOpen ? 'block' : 'none');\r\n    });\r\n\r\n    catalogListItems.forEach(element => {\r\n        element.addEventListener('click', () => {\r\n            const text = element.textContent;\r\n            (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(text).then((data) => (0,_renderGoods_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters_js__WEBPACK_IMPORTED_MODULE_2__.categoryFilter)(data, text)));\r\n            catalogList.style.display =  'none';\r\n        })      \r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalog);\n\n//# sourceURL=webpack://ozon_project/./src/modules/catalog.js?\n}");

/***/ }),

/***/ "./src/modules/filters.js":
/*!********************************!*\
  !*** ./src/modules/filters.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   categoryFilter: () => (/* binding */ categoryFilter),\n/* harmony export */   checkboxFilter: () => (/* binding */ checkboxFilter),\n/* harmony export */   priceFilter: () => (/* binding */ priceFilter),\n/* harmony export */   searchFilter: () => (/* binding */ searchFilter)\n/* harmony export */ });\nconst searchFilter = (goods, value) => {\r\n    return goods.filter(goodsItem =>{\r\n        return goodsItem.title.toLowerCase().includes(value.toLowerCase());\r\n    });\r\n};\r\n\r\nconst categoryFilter = (goods, value) => {\r\n    return goods.filter(goodsItem =>{\r\n        return goodsItem.category === value;\r\n    });\r\n};\r\n\r\nconst priceFilter = (goods, floorPrice, ceilPrice) => {\r\n    return goods.filter(goodsItem =>{\r\n        if(floorPrice === '' && ceilPrice === '') return goodsItem;\r\n        else{\r\n        const min = (floorPrice === '' ? 0 : Number(floorPrice));\r\n        const max = (ceilPrice === '' ? Infinity : Number(ceilPrice));\r\n        return goodsItem.price >= min && goodsItem.price <= max;\r\n        }  \r\n    });\r\n};\r\n\r\nconst checkboxFilter = (goods, value) => {\r\n    if(value){\r\n        return goods.filter(goodsItem =>{\r\n            return goodsItem.sale === true;\r\n        });\r\n    }\r\n    else return goods;\r\n};\n\n//# sourceURL=webpack://ozon_project/./src/modules/filters.js?\n}");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getData = (str) => {\r\n    return fetch(\r\n    `https://test-6289d-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}` : ''}`)\r\n    .then((response) => {\r\n       return response.json();\r\n    })   \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack://ozon_project/./src/modules/getData.js?\n}");

/***/ }),

/***/ "./src/modules/load.js":
/*!*****************************!*\
  !*** ./src/modules/load.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData.js */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods.js */ \"./src/modules/renderGoods.js\");\n\r\n\r\n\r\n\r\nconst load = () => {\r\n    (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => (0,_renderGoods_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data));\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);\r\n\r\n\r\n\n\n//# sourceURL=webpack://ozon_project/./src/modules/load.js?\n}");

/***/ }),

/***/ "./src/modules/postData.js":
/*!*********************************!*\
  !*** ./src/modules/postData.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst postData = (cart) => {\r\n  return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n    method: \"POST\",\r\n    body: JSON.stringify(cart),\r\n    headers: {\r\n      \"Content-type\": \"application/json; charset=UTF-8\",\r\n    },\r\n  }).then((res) => res.json());\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postData);\r\n\n\n//# sourceURL=webpack://ozon_project/./src/modules/postData.js?\n}");

/***/ }),

/***/ "./src/modules/priceRange.js":
/*!***********************************!*\
  !*** ./src/modules/priceRange.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _filters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filters.js */ \"./src/modules/filters.js\");\n/* harmony import */ var _getData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getData.js */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderGoods.js */ \"./src/modules/renderGoods.js\");\n\r\n\r\n\r\n\r\nconst priceRange = () => {\r\n    const floorPrice = document.getElementById('min');\r\n    const ceilPrice = document.getElementById('max');\r\n    const checkBoxInput = document.getElementById('discount-checkbox');\r\n    const checkboxSpan = document.querySelector('.filter-check_checkmark');\r\n\r\n    let allGoods = [];\r\n    (0,_getData_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().then(data => allGoods = data);\r\n\r\n    const applyFilters = () => {\r\n        const minVal = floorPrice.value;\r\n        const maxVal = ceilPrice.value;\r\n        const isChecked = checkBoxInput.checked;\r\n\r\n        (checkBoxInput.checked) ? checkboxSpan.classList.add('checked') : checkboxSpan.classList.remove('checked');\r\n\r\n        const filteredByCheckbox = (0,_filters_js__WEBPACK_IMPORTED_MODULE_0__.checkboxFilter)(allGoods, isChecked);\r\n        const finalGoods = (0,_filters_js__WEBPACK_IMPORTED_MODULE_0__.priceFilter)(filteredByCheckbox, minVal, maxVal);\r\n\r\n        (0,_renderGoods_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(finalGoods); \r\n       };\r\n\r\n        checkBoxInput.addEventListener('change', applyFilters);   \r\n        floorPrice.addEventListener('input', applyFilters);\r\n        ceilPrice.addEventListener('input', applyFilters); \r\n};\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (priceRange);\n\n//# sourceURL=webpack://ozon_project/./src/modules/priceRange.js?\n}");

/***/ }),

/***/ "./src/modules/renderCart.js":
/*!***********************************!*\
  !*** ./src/modules/renderCart.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderCart = (goods) => {\r\n  const cartWrapper = document.querySelector(\".cart-wrapper\");\r\n  \r\n  cartWrapper.innerHTML = '';\r\n\r\n  if(goods.length === 0){\r\n    cartWrapper.insertAdjacentHTML('beforeend', \r\n      `<div id=\"cart-empty\">\r\n\t\t\t\t\tВаша корзина пока пуста\r\n\t\t\t\t</div>`\r\n    )\r\n  }\r\nelse{\r\n  goods.forEach((element) => {\r\n    cartWrapper.insertAdjacentHTML(\r\n      \"beforeend\",\r\n      `\r\n            <div class=\"card\" data-key='${element.id}'>\r\n                ${element.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}\r\n                <div class=\"card-img-wrapper\">\r\n                    <span class=\"card-img-top\"\r\n                        style=\"background-image: url('${element.img}')\"></span>\r\n                </div>\r\n                <div class=\"card-body justify-content-between\">\r\n                    <div class=\"card-price\">${element.price}₽</div>\r\n                    <h5 class=\"card-title\">${element.title}</h5>\r\n                    <button class=\"btn btn-primary\">Удалить</button>\r\n                </div>\r\n            </div>            `\r\n    );\r\n  });\r\n}\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCart);\r\n\n\n//# sourceURL=webpack://ozon_project/./src/modules/renderCart.js?\n}");

/***/ }),

/***/ "./src/modules/renderGoods.js":
/*!************************************!*\
  !*** ./src/modules/renderGoods.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderGoods = (goods) => {\r\n  const goodsWrapper = document.querySelector(\".goods\");\r\n  \r\n  localStorage.setItem('goods', JSON.stringify(goods));\r\n  goodsWrapper.innerHTML = '';\r\n\r\n  goods.forEach((element) => {\r\n    goodsWrapper.insertAdjacentHTML(\r\n      \"beforeend\",\r\n      `\r\n        <div class=\"col-12 col-md-6 col-lg-4 col-xl-3\">\r\n            <div class=\"card\" data-key='${element.id}'>\r\n                ${element.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}\r\n                <div class=\"card-img-wrapper\">\r\n                    <span class=\"card-img-top\"\r\n                        style=\"background-image: url('${element.img}')\"></span>\r\n                </div>\r\n                <div class=\"card-body justify-content-between\">\r\n                    <div class=\"card-price\">${element.price}₽</div>\r\n                    <h5 class=\"card-title\">${element.title}</h5>\r\n                    <button class=\"btn btn-primary\">В корзину</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n            `\r\n    );\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGoods);\r\n\n\n//# sourceURL=webpack://ozon_project/./src/modules/renderGoods.js?\n}");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData.js */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods.js */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters.js */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst search = () => {\r\n  const searchInput = document.querySelector(\".search-wrapper_input\");\r\n\r\n  searchInput.addEventListener('input', (event) => {\r\n    const value = event.target.value;\r\n\r\n    (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(value).then((data) => (0,_renderGoods_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters_js__WEBPACK_IMPORTED_MODULE_2__.searchFilter)(data, value)));\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);\r\n\n\n//# sourceURL=webpack://ozon_project/./src/modules/search.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;