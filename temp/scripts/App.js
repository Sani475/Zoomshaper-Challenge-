/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(2);
console.log("hello from app.js");


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');


// select launch date in ms
var launchDate = new Date('May 10, 2019 00:00:00').getTime();


// update every seconds
var interval = setInterval(function(){

    //get present date and timeout
    var today = new Date().getTime();

    // get the distance from today to launch Date
    var distance = launchDate - today;

    // time  calculation
    var sec = Math.floor(distance/1000);
    var min = Math.floor(sec/60);
    var hour = Math.floor(min/60);
    var day = Math.floor(hour/24);

    // hour = hour%60;
    min = min%60;
    sec = sec%60;

    min = (min<10)?'0'+min : min;
    sec = (sec<10)?'0'+sec : sec;

    //display the result
    hours.innerHTML = hour;
    minutes.innerHTML = min;
    seconds.innerHTML = sec;


    // if the launch date passed
    if(distance < 0){
        // stop countdown
        clearInterval(interval);
        hours.innerHTML = 0;
        minutes.innerHTML = 0;
        seconds.innerHTML = 0;
    }

},1000);


/***/ }),
/* 2 */
/***/ (function(module, exports) {


var images = document.querySelectorAll('.third-section__img img');
var slide = document.querySelector('#slide');
var nextBtn = document.querySelector('#nextBtn');
var prevBtn = document.querySelector('#prevBtn');

var mediumDevice = window.matchMedia( "(min-width: 768px) and (max-width: 1024px)" );
var atPhones = window.matchMedia( "(min-width: 320px) and (max-width: 480px)" );

var count = 0;
var totalImg = images.length;
//console.log(totalImg);

//add event to next button
nextBtn.addEventListener('click', function(){
    if (mediumDevice.matches) {
        if (count === totalImg-2) {
            //console.log('return medium'+ count);
            return;
        }
    }
    else if(atPhones.matches){
        if (count === totalImg-1) {
            //console.log('return phones'+ count);
            return;
        }
    }
    else{
        if (count === totalImg-3) {
            //console.log('return phones'+ count);
            return;
        }
    }
    count++;
    var size = images[0].clientWidth;
    slide.style.transition = 'transform .5s ease-in-out';
    slide.style.transform = 'translateX(' + (-size*count) + 'px)';
});


//add event to prev button
prevBtn.addEventListener('click', function(){
    if(count === 0) return;
    count--;
    var size = images[0].clientWidth;
    //console.log(size);
    slide.style.transition = 'transform .5s ease-in-out';
    slide.style.transform = 'translateX(' + (-size*count) + 'px)';
});


/***/ })
/******/ ]);
