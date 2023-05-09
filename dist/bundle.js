/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("\nconst reviews = [\n    {\n        name: 'Sheia',\n        stars: 5,\n        loyaltyUser: true,\n        date: '01-04-2021'\n    },\n    {\n        name: 'Andrzej',\n        stars: 3,\n        loyaltyUser: false,\n        date: '28-03-2021'\n    },\n    {\n        name: 'Omar',\n        stars: 4,\n        loyaltyUser: true,\n        date: '27-03-2021'\n    },\n];\nconst reviewsContains = document.querySelector('#reviews');\nconst reviewsTotal = (reviewsNumber, reviewer) => {\n    reviewsContains.innerHTML = `Total reviews: ${reviewsNumber.toString()} |\r\n   Last reviewed by ${reviewer}`;\n};\nreviewsTotal(reviews.length, reviews[0].name);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU0sT0FBTyxHQUFHO0lBQ1o7UUFDSSxJQUFJLEVBQUUsT0FBTztRQUNiLEtBQUssRUFBRSxDQUFDO1FBQ1IsV0FBVyxFQUFFLElBQUk7UUFDakIsSUFBSSxFQUFFLFlBQVk7S0FDckI7SUFDRDtRQUNJLElBQUksRUFBRSxTQUFTO1FBQ2YsS0FBSyxFQUFFLENBQUM7UUFDUixXQUFXLEVBQUUsS0FBSztRQUNsQixJQUFJLEVBQUUsWUFBWTtLQUNyQjtJQUNEO1FBQ0ksSUFBSSxFQUFFLE1BQU07UUFDWixLQUFLLEVBQUUsQ0FBQztRQUNSLFdBQVcsRUFBRSxJQUFJO1FBQ2pCLElBQUksRUFBRSxZQUFZO0tBQ3JCO0NBQ0o7QUFFRCxNQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBRTNELE1BQU0sWUFBWSxHQUFHLENBQUMsYUFBcUIsRUFBRSxRQUFnQixFQUFFLEVBQUU7SUFDOUQsZUFBZ0IsQ0FBQyxTQUFTLEdBQUcsa0JBQWtCLGFBQWEsQ0FBQyxRQUFRLEVBQUU7c0JBQ3BELFFBQVEsRUFBRSxDQUFDO0FBQ2pDLENBQUM7QUFDRCxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3JlLXR5cGVzLy4vc3JjL2luZGV4LnRzP2ZmYjQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcmV2aWV3cyA9IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnU2hlaWEnLFxyXG4gICAgICAgIHN0YXJzOiA1LFxyXG4gICAgICAgIGxveWFsdHlVc2VyOiB0cnVlLFxyXG4gICAgICAgIGRhdGU6ICcwMS0wNC0yMDIxJ1xyXG4gICAgfSxcclxuICAgIHsgXHJcbiAgICAgICAgbmFtZTogJ0FuZHJ6ZWonLFxyXG4gICAgICAgIHN0YXJzOiAzLFxyXG4gICAgICAgIGxveWFsdHlVc2VyOiBmYWxzZSxcclxuICAgICAgICBkYXRlOiAnMjgtMDMtMjAyMSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ09tYXInLFxyXG4gICAgICAgIHN0YXJzOiA0LFxyXG4gICAgICAgIGxveWFsdHlVc2VyOiB0cnVlLFxyXG4gICAgICAgIGRhdGU6ICcyNy0wMy0yMDIxJ1xyXG4gICAgfSxcclxuXSBcclxuXHJcbmNvbnN0IHJldmlld3NDb250YWlucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXZpZXdzJyk7XHJcblxyXG5jb25zdCByZXZpZXdzVG90YWwgPSAocmV2aWV3c051bWJlcjogbnVtYmVyLCByZXZpZXdlcjogc3RyaW5nKSA9PiB7XHJcbiAgIHJldmlld3NDb250YWlucyEuaW5uZXJIVE1MID0gYFRvdGFsIHJldmlld3M6ICR7cmV2aWV3c051bWJlci50b1N0cmluZygpfSB8XHJcbiAgIExhc3QgcmV2aWV3ZWQgYnkgJHtyZXZpZXdlcn1gO1xyXG59IFxyXG5yZXZpZXdzVG90YWwocmV2aWV3cy5sZW5ndGgsIHJldmlld3NbMF0ubmFtZSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;