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

eval("\nconst reviews = [\n    {\n        name: 'Sheia',\n        stars: 5,\n        loyaltyUser: true,\n        date: '01-04-2021'\n    },\n    {\n        name: 'Andrzej',\n        stars: 3,\n        loyaltyUser: false,\n        date: '28-03-2021'\n    },\n    {\n        name: 'Omar',\n        stars: 4,\n        loyaltyUser: true,\n        date: '27-03-2021'\n    },\n];\nconst you = {\n    firstName: \"Eric\",\n    lastName: \"Nkaka\",\n    isReturning: true,\n    age: 54,\n    stayedAt: [\"Kigali\", \"Kicukiro\", \"Rwamagana\", \"Nyamirambo\", 67]\n};\nconst reviewsContains = document.querySelector('#reviews');\nconst reviewsTotal = (reviewsNumber, reviewer, isLoyalUser) => {\n    const iconDisplay = isLoyalUser ? '⭐' : '';\n    reviewsContains.innerHTML = `Total reviews: ${reviewsNumber.toString()} |\r\n   Last reviewed by ${reviewer} ${iconDisplay}`;\n};\nreviewsTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);\nconsole.log(you);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU0sT0FBTyxHQUFHO0lBQ1o7UUFDSSxJQUFJLEVBQUUsT0FBTztRQUNiLEtBQUssRUFBRSxDQUFDO1FBQ1IsV0FBVyxFQUFFLElBQUk7UUFDakIsSUFBSSxFQUFFLFlBQVk7S0FDckI7SUFDRDtRQUNJLElBQUksRUFBRSxTQUFTO1FBQ2YsS0FBSyxFQUFFLENBQUM7UUFDUixXQUFXLEVBQUUsS0FBSztRQUNsQixJQUFJLEVBQUUsWUFBWTtLQUNyQjtJQUNEO1FBQ0ksSUFBSSxFQUFFLE1BQU07UUFDWixLQUFLLEVBQUUsQ0FBQztRQUNSLFdBQVcsRUFBRSxJQUFJO1FBQ2pCLElBQUksRUFBRSxZQUFZO0tBQ3JCO0NBQ0o7QUFHRCxNQUFNLEdBQUcsR0FNTDtJQUNBLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLFFBQVEsRUFBRSxPQUFPO0lBQ2pCLFdBQVcsRUFBRSxJQUFJO0lBQ2pCLEdBQUcsRUFBRSxFQUFFO0lBQ1AsUUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUMsWUFBWSxFQUFDLEVBQUUsQ0FBQztDQUNoRTtBQUVELE1BQU0sZUFBZSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7QUFFM0QsTUFBTSxZQUFZLEdBQUcsQ0FBQyxhQUFxQixFQUFFLFFBQWdCLEVBQUUsV0FBb0IsRUFBRSxFQUFFO0lBQ3BGLE1BQU0sV0FBVyxHQUFHLFdBQVcsRUFBQyxDQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUUsQ0FBQztJQUN6QyxlQUFnQixDQUFDLFNBQVMsR0FBRyxrQkFBa0IsYUFBYSxDQUFDLFFBQVEsRUFBRTtzQkFDcEQsUUFBUSxJQUFJLFdBQVcsRUFBRSxDQUFDO0FBQ2hELENBQUM7QUFDRCxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUd0RSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvcmUtdHlwZXMvLi9zcmMvaW5kZXgudHM/ZmZiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByZXZpZXdzID0gW1xyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdTaGVpYScsXHJcbiAgICAgICAgc3RhcnM6IDUsXHJcbiAgICAgICAgbG95YWx0eVVzZXI6IHRydWUsXHJcbiAgICAgICAgZGF0ZTogJzAxLTA0LTIwMjEnXHJcbiAgICB9LFxyXG4gICAgeyBcclxuICAgICAgICBuYW1lOiAnQW5kcnplaicsXHJcbiAgICAgICAgc3RhcnM6IDMsXHJcbiAgICAgICAgbG95YWx0eVVzZXI6IGZhbHNlLFxyXG4gICAgICAgIGRhdGU6ICcyOC0wMy0yMDIxJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnT21hcicsXHJcbiAgICAgICAgc3RhcnM6IDQsXHJcbiAgICAgICAgbG95YWx0eVVzZXI6IHRydWUsXHJcbiAgICAgICAgZGF0ZTogJzI3LTAzLTIwMjEnXHJcbiAgICB9LFxyXG5dICBcclxuXHJcblxyXG5jb25zdCB5b3U6IHtcclxuICAgIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gICAgbGFzdE5hbWU6IHN0cmluZztcclxuICAgIGlzUmV0dXJuaW5nOiBib29sZWFuO1xyXG4gICAgYWdlOiBudW1iZXI7XHJcbiAgICBzdGF5ZWRBdDogKHN0cmluZyB8IG51bWJlcilbXTtcclxufSA9IHtcclxuICAgIGZpcnN0TmFtZTogXCJFcmljXCIsXHJcbiAgICBsYXN0TmFtZTogXCJOa2FrYVwiLFxyXG4gICAgaXNSZXR1cm5pbmc6IHRydWUsXHJcbiAgICBhZ2U6IDU0LFxyXG4gICAgc3RheWVkQXQ6IFtcIktpZ2FsaVwiLCBcIktpY3VraXJvXCIsIFwiUndhbWFnYW5hXCIsXCJOeWFtaXJhbWJvXCIsNjddXHJcbn1cclxuXHJcbmNvbnN0IHJldmlld3NDb250YWlucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXZpZXdzJyk7XHJcblxyXG5jb25zdCByZXZpZXdzVG90YWwgPSAocmV2aWV3c051bWJlcjogbnVtYmVyLCByZXZpZXdlcjogc3RyaW5nLCBpc0xveWFsVXNlcjogYm9vbGVhbikgPT4ge1xyXG4gICBjb25zdCBpY29uRGlzcGxheSA9IGlzTG95YWxVc2VyPyAn4q2QJzogJyc7XHJcbiAgIHJldmlld3NDb250YWlucyEuaW5uZXJIVE1MID0gYFRvdGFsIHJldmlld3M6ICR7cmV2aWV3c051bWJlci50b1N0cmluZygpfSB8XHJcbiAgIExhc3QgcmV2aWV3ZWQgYnkgJHtyZXZpZXdlcn0gJHtpY29uRGlzcGxheX1gO1xyXG59IFxyXG5yZXZpZXdzVG90YWwocmV2aWV3cy5sZW5ndGgsIHJldmlld3NbMF0ubmFtZSwgcmV2aWV3c1swXS5sb3lhbHR5VXNlcik7XHJcblxyXG5cclxuY29uc29sZS5sb2coeW91KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.ts\n");

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