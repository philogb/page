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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 87);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _classCallCheck;
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _createClass;
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return config; });
/* unused harmony export configure */
/* harmony export (immutable) */ __webpack_exports__["c"] = checkNumber;
/* harmony export (immutable) */ __webpack_exports__["e"] = formatValue;
/* unused harmony export formatAngle */
/* unused harmony export isArray */
/* unused harmony export clone */
/* harmony export (immutable) */ __webpack_exports__["f"] = radians;
/* harmony export (immutable) */ __webpack_exports__["g"] = degrees;
/* unused harmony export sin */
/* unused harmony export cos */
/* unused harmony export tan */
/* unused harmony export asin */
/* unused harmony export acos */
/* unused harmony export atan */
/* harmony export (immutable) */ __webpack_exports__["b"] = clamp;
/* unused harmony export lerp */
/* harmony export (immutable) */ __webpack_exports__["a"] = equals;
var config = {};
config.EPSILON = 1e-12;
config.debug = true;
config.precision = 4;
config.printTypes = false;
config.printDegrees = false;
config.printRowMajor = true;

function configure(options) {
  if ('epsilon' in options) {
    config.EPSILON = options.epsilon;
  }

  if ('debug' in options) {
    config.debug = options.debug;
  }
}
function checkNumber(value) {
  if (!Number.isFinite(value)) {
    throw new Error("Invalid number ".concat(value));
  }

  return value;
}

function round(value) {
  return Math.round(value / config.EPSILON) * config.EPSILON;
}

function formatValue(value) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$precision = _ref.precision,
      precision = _ref$precision === void 0 ? config.precision || 4 : _ref$precision;

  value = round(value);
  return parseFloat(value.toPrecision(precision));
}
function formatAngle(value) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref2$precision = _ref2.precision,
      precision = _ref2$precision === void 0 ? config.precision || 4 : _ref2$precision,
      _ref2$printDegrees = _ref2.printDegrees,
      printDegrees = _ref2$printDegrees === void 0 ? config.printAngles : _ref2$printDegrees;

  value = printDegrees ? degrees(value) : value;
  value = round(value);
  return "".concat(parseFloat(value.toPrecision(precision))).concat(printDegrees ? '°' : '');
}
function isArray(value) {
  return Array.isArray(value) || ArrayBuffer.isView(value) && value.length !== undefined;
}
function clone(array) {
  return array.clone ? array.clone() : new Array(array);
}

function map(value, func) {
  if (isArray(value)) {
    var result = clone(value);

    for (var i = 0; i < result.length; ++i) {
      result[i] = func(result[i], i, result);
    }

    return result;
  }

  return func(value);
}

function radians(degrees) {
  return map(degrees, function (degrees) {
    return degrees / 180 * Math.PI;
  });
}
function degrees(radians) {
  return map(radians, function (radians) {
    return radians * 180 / Math.PI;
  });
}
function sin(radians) {
  return map(radians, function (angle) {
    return Math.sin(angle);
  });
}
function cos(radians) {
  return map(radians, function (angle) {
    return Math.cos(angle);
  });
}
function tan(radians) {
  return map(radians, function (angle) {
    return Math.tan(angle);
  });
}
function asin(radians) {
  return map(radians, function (angle) {
    return Math.asin(angle);
  });
}
function acos(radians) {
  return map(radians, function (angle) {
    return Math.acos(angle);
  });
}
function atan(radians) {
  return map(radians, function (angle) {
    return Math.atan(angle);
  });
}
function clamp(value, min, max) {
  return map(value, function (value) {
    return Math.max(min, Math.min(max, value));
  });
}
function lerp(a, b, t) {
  if (isArray(a)) {
    return a.map(function (ai, i) {
      return lerp(ai, b[i], t);
    });
  }

  return t * b + (1 - t) * a;
}
function equals(a, b) {
  if (isArray(a) && isArray(b)) {
    if (a === b) {
      return true;
    }

    if (a.length !== b.length) {
      return false;
    }

    for (var i = 0; i < a.length; ++i) {
      if (!equals(a[i], b[i])) {
        return false;
      }
    }

    return true;
  }

  return Math.abs(a - b) <= config.EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
}
//# sourceMappingURL=common.js.map

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _getPrototypeOf;
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _inherits;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__setPrototypeOf__ = __webpack_require__(30);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__setPrototypeOf__["a" /* default */])(subClass, superClass);
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _possibleConstructorReturn;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_esm_typeof__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assertThisInitialized__ = __webpack_require__(25);


function _possibleConstructorReturn(self, call) {
  if (call && (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers_esm_typeof__["a" /* default */])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__assertThisInitialized__["a" /* default */])(self);
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Vector3; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_possibleConstructorReturn__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_getPrototypeOf__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_esm_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_vector__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_common__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_gl_vec3_angle__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_gl_vec3_angle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_gl_vec3_angle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_gl_vec3_cross__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_gl_vec3_cross___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_gl_vec3_cross__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_gl_vec3_rotateX__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_gl_vec3_rotateX___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_gl_vec3_rotateX__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_gl_vec3_rotateY__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_gl_vec3_rotateY___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_gl_vec3_rotateY__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_gl_vec3_rotateZ__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_gl_vec3_rotateZ___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_gl_vec3_rotateZ__);












var ORIGIN = [0, 0, 0];

var Vector3 = function (_Vector) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_esm_inherits__["a" /* default */])(Vector3, _Vector);

  function Vector3() {
    var _this;

    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_classCallCheck__["a" /* default */])(this, Vector3);

    _this = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_possibleConstructorReturn__["a" /* default */])(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_getPrototypeOf__["a" /* default */])(Vector3).call(this));

    if (Array.isArray(x) && arguments.length === 1) {
      _this.copy(x);
    } else {
      _this.set(x, y, z);
    }

    return _this;
  }

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_createClass__["a" /* default */])(Vector3, [{
    key: "angle",
    value: function angle(vector) {
      return __WEBPACK_IMPORTED_MODULE_7_gl_vec3_angle___default()(this, vector);
    }
  }, {
    key: "cross",
    value: function cross(vector) {
      __WEBPACK_IMPORTED_MODULE_8_gl_vec3_cross___default()(this, this, vector);
      return this.check();
    }
  }, {
    key: "rotateX",
    value: function rotateX(_ref) {
      var radians = _ref.radians,
          _ref$origin = _ref.origin,
          origin = _ref$origin === void 0 ? ORIGIN : _ref$origin;
      __WEBPACK_IMPORTED_MODULE_9_gl_vec3_rotateX___default()(this, this, origin, radians);
      return this.check();
    }
  }, {
    key: "rotateY",
    value: function rotateY(_ref2) {
      var radians = _ref2.radians,
          _ref2$origin = _ref2.origin,
          origin = _ref2$origin === void 0 ? ORIGIN : _ref2$origin;
      __WEBPACK_IMPORTED_MODULE_10_gl_vec3_rotateY___default()(this, this, origin, radians);
      return this.check();
    }
  }, {
    key: "rotateZ",
    value: function rotateZ(_ref3) {
      var radians = _ref3.radians,
          _ref3$origin = _ref3.origin,
          origin = _ref3$origin === void 0 ? ORIGIN : _ref3$origin;
      __WEBPACK_IMPORTED_MODULE_11_gl_vec3_rotateZ___default()(this, this, origin, radians);
      return this.check();
    }
  }, {
    key: "operation",
    value: function operation(_operation) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      _operation.apply(void 0, [this, this].concat(args));

      return this.check();
    }
  }, {
    key: "ELEMENTS",
    get: function get() {
      return 3;
    }
  }, {
    key: "z",
    get: function get() {
      return this[2];
    },
    set: function set(value) {
      return this[2] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_common__["c" /* checkNumber */])(value);
    }
  }]);

  return Vector3;
}(__WEBPACK_IMPORTED_MODULE_5__lib_vector__["a" /* default */]);


//# sourceMappingURL=vector3.js.map

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MathArray; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_possibleConstructorReturn__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_getPrototypeOf__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_esm_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common__ = __webpack_require__(2);






function _extendableBuiltin(cls) {
  function ExtendableBuiltin() {
    var instance = Reflect.construct(cls, Array.from(arguments));
    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    return instance;
  }

  ExtendableBuiltin.prototype = Object.create(cls.prototype, {
    constructor: {
      value: cls,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(ExtendableBuiltin, cls);
  } else {
    ExtendableBuiltin.__proto__ = cls;
  }

  return ExtendableBuiltin;
}



var MathArray = function (_extendableBuiltin2) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_esm_inherits__["a" /* default */])(MathArray, _extendableBuiltin2);

  function MathArray() {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_classCallCheck__["a" /* default */])(this, MathArray);

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_possibleConstructorReturn__["a" /* default */])(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_getPrototypeOf__["a" /* default */])(MathArray).apply(this, arguments));
  }

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_createClass__["a" /* default */])(MathArray, [{
    key: "clone",
    value: function clone() {
      return new this.constructor().copy(this).check();
    }
  }, {
    key: "copy",
    value: function copy(array) {
      for (var i = 0; i < this.ELEMENTS; ++i) {
        this[i] = array[i];
      }

      return this.check();
    }
  }, {
    key: "set",
    value: function set() {
      for (var i = 0; i < this.ELEMENTS; ++i) {
        this[i] = (i < 0 || arguments.length <= i ? undefined : arguments[i]) || 0;
      }

      return this.check();
    }
  }, {
    key: "fromArray",
    value: function fromArray(array) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      for (var i = 0; i < this.ELEMENTS; ++i) {
        this[i] = array[i + offset];
      }

      return this.check();
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.formatString(__WEBPACK_IMPORTED_MODULE_5__common__["d" /* config */]);
    }
  }, {
    key: "formatString",
    value: function formatString(opts) {
      var string = '';

      for (var i = 0; i < this.ELEMENTS; ++i) {
        string += (i > 0 ? ', ' : '') + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__common__["e" /* formatValue */])(this[i], opts);
      }

      return "".concat(opts.printTypes ? this.constructor.name : '', "[").concat(string, "]");
    }
  }, {
    key: "toArray",
    value: function toArray() {
      var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      for (var i = 0; i < this.ELEMENTS; ++i) {
        array[offset + i] = this[i];
      }

      return array;
    }
  }, {
    key: "toFloat32Array",
    value: function toFloat32Array() {
      return new Float32Array(this);
    }
  }, {
    key: "equals",
    value: function equals(array) {
      if (!array || this.length !== array.length) {
        return false;
      }

      for (var i = 0; i < this.ELEMENTS; ++i) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__common__["a" /* equals */])(this[i], array[i])) {
          return false;
        }
      }

      return true;
    }
  }, {
    key: "exactEquals",
    value: function exactEquals(array) {
      if (!array || this.length !== array.length) {
        return false;
      }

      for (var i = 0; i < this.ELEMENTS; ++i) {
        if (this[i] !== array[i]) {
          return false;
        }
      }

      return true;
    }
  }, {
    key: "negate",
    value: function negate() {
      for (var i = 0; i < this.ELEMENTS; ++i) {
        this[i] = -this[i];
      }

      return this.check();
    }
  }, {
    key: "inverse",
    value: function inverse() {
      for (var i = 0; i < this.ELEMENTS; ++i) {
        this[i] = 1 / this[i];
      }

      return this.check();
    }
  }, {
    key: "lerp",
    value: function lerp(a, b, t) {
      if (t === undefined) {
        t = b;
        b = a;
        a = this;
      }

      for (var i = 0; i < this.ELEMENTS; ++i) {
        var ai = a[i];
        this[i] = ai + t * (b[i] - ai);
      }

      return this.check();
    }
  }, {
    key: "min",
    value: function min(vector) {
      for (var i = 0; i < this.ELEMENTS; ++i) {
        this[i] = Math.min(vector[i], this[i]);
      }

      return this.check();
    }
  }, {
    key: "max",
    value: function max(vector) {
      for (var i = 0; i < this.ELEMENTS; ++i) {
        this[i] = Math.max(vector[i], this[i]);
      }

      return this.check();
    }
  }, {
    key: "clamp",
    value: function clamp(minVector, maxVector) {
      for (var i = 0; i < this.ELEMENTS; ++i) {
        this[i] = Math.min(Math.max(this[i], minVector[i]), maxVector[i]);
      }

      return this.check();
    }
  }, {
    key: "validate",
    value: function validate() {
      var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;
      var valid = array && array.length === this.ELEMENTS;

      for (var i = 0; i < this.ELEMENTS; ++i) {
        valid = valid && Number.isFinite(array[i]);
      }

      return valid;
    }
  }, {
    key: "check",
    value: function check() {
      var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;

      if (__WEBPACK_IMPORTED_MODULE_5__common__["d" /* config */].debug && !this.validate(array)) {
        throw new Error("math.gl: ".concat(this.constructor.name, " some fields set to invalid numbers'"));
      }

      return this;
    }
  }, {
    key: "sub",
    value: function sub(a) {
      return this.subtract(a);
    }
  }, {
    key: "setScalar",
    value: function setScalar(a) {
      for (var i = 0; i < this.ELEMENTS; ++i) {
        this[i] = a;
      }

      return this.check();
    }
  }, {
    key: "addScalar",
    value: function addScalar(a) {
      for (var i = 0; i < this.ELEMENTS; ++i) {
        this[i] += a;
      }

      return this.check();
    }
  }, {
    key: "subScalar",
    value: function subScalar(a) {
      return this.addScalar(-a);
    }
  }, {
    key: "multiplyScalar",
    value: function multiplyScalar(a) {
      return this.scale(a);
    }
  }, {
    key: "divideScalar",
    value: function divideScalar(a) {
      return this.scale(1 / a);
    }
  }, {
    key: "clampScalar",
    value: function clampScalar(min, max) {
      for (var i = 0; i < this.ELEMENTS; ++i) {
        this[i] = Math.min(Math.max(this[i], min), max);
      }

      return this.check();
    }
  }]);

  return MathArray;
}(_extendableBuiltin(Array));


//# sourceMappingURL=math-array.js.map

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Vector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_possibleConstructorReturn__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_getPrototypeOf__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_esm_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__math_array__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common__ = __webpack_require__(2);








var assert = function assert(x, m) {
  if (!x) {
    throw new Error(m);
  }
};

var Vector = function (_MathArray) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_esm_inherits__["a" /* default */])(Vector, _MathArray);

  function Vector() {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_classCallCheck__["a" /* default */])(this, Vector);

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_possibleConstructorReturn__["a" /* default */])(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_getPrototypeOf__["a" /* default */])(Vector).apply(this, arguments));
  }

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_createClass__["a" /* default */])(Vector, [{
    key: "len",
    value: function len() {
      return Math.sqrt(this.lengthSquared());
    }
  }, {
    key: "magnitude",
    value: function magnitude() {
      return Math.sqrt(this.lengthSquared());
    }
  }, {
    key: "lengthSquared",
    value: function lengthSquared() {
      var length = 0;

      for (var i = 0; i < this.ELEMENTS; ++i) {
        length += this[i] * this[i];
      }

      return length;
    }
  }, {
    key: "distance",
    value: function distance(mathArray) {
      return Math.sqrt(this.distanceSquared(mathArray));
    }
  }, {
    key: "distanceSquared",
    value: function distanceSquared(mathArray) {
      var length = 0;

      for (var i = 0; i < this.ELEMENTS; ++i) {
        var dist = this[i] - mathArray[i];
        length += dist * dist;
      }

      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__common__["c" /* checkNumber */])(length);
    }
  }, {
    key: "dot",
    value: function dot(mathArray) {
      var product = 0;

      for (var i = 0; i < this.ELEMENTS; ++i) {
        product += this[i] * mathArray[i];
      }

      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__common__["c" /* checkNumber */])(product);
    }
  }, {
    key: "normalize",
    value: function normalize() {
      var length = this.magnitude();

      if (length !== 0) {
        for (var i = 0; i < this.ELEMENTS; ++i) {
          this[i] /= length;
        }
      }

      return this.check();
    }
  }, {
    key: "add",
    value: function add() {
      for (var _len = arguments.length, vectors = new Array(_len), _key = 0; _key < _len; _key++) {
        vectors[_key] = arguments[_key];
      }

      for (var _i = 0; _i < vectors.length; _i++) {
        var vector = vectors[_i];

        for (var i = 0; i < this.ELEMENTS; ++i) {
          this[i] += vector[i];
        }
      }

      return this.check();
    }
  }, {
    key: "subtract",
    value: function subtract() {
      for (var _len2 = arguments.length, vectors = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        vectors[_key2] = arguments[_key2];
      }

      for (var _i2 = 0; _i2 < vectors.length; _i2++) {
        var vector = vectors[_i2];

        for (var i = 0; i < this.ELEMENTS; ++i) {
          this[i] -= vector[i];
        }
      }

      return this.check();
    }
  }, {
    key: "multiply",
    value: function multiply() {
      for (var _len3 = arguments.length, vectors = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        vectors[_key3] = arguments[_key3];
      }

      for (var _i3 = 0; _i3 < vectors.length; _i3++) {
        var vector = vectors[_i3];

        for (var i = 0; i < this.ELEMENTS; ++i) {
          this[i] *= vector[i];
        }
      }

      return this.check();
    }
  }, {
    key: "divide",
    value: function divide() {
      for (var _len4 = arguments.length, vectors = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        vectors[_key4] = arguments[_key4];
      }

      for (var _i4 = 0; _i4 < vectors.length; _i4++) {
        var vector = vectors[_i4];

        for (var i = 0; i < this.ELEMENTS; ++i) {
          this[i] /= vector[i];
        }
      }

      return this.check();
    }
  }, {
    key: "scale",
    value: function scale(_scale) {
      if (Array.isArray(_scale)) {
        return this.multiply(_scale);
      }

      for (var i = 0; i < this.ELEMENTS; ++i) {
        this[i] *= _scale;
      }

      return this.check();
    }
  }, {
    key: "scaleAndAdd",
    value: function scaleAndAdd(vector, scale) {
      for (var i = 0; i < this.ELEMENTS; ++i) {
        this[i] = this[i] * scale + vector[i];
      }

      return this.check();
    }
  }, {
    key: "lengthSq",
    value: function lengthSq() {
      return this.lengthSquared();
    }
  }, {
    key: "distanceTo",
    value: function distanceTo(vector) {
      return this.distance(vector);
    }
  }, {
    key: "distanceToSquared",
    value: function distanceToSquared(vector) {
      return this.distanceSquared(vector);
    }
  }, {
    key: "getComponent",
    value: function getComponent(i) {
      assert(i >= 0 && i < this.ELEMENTS, 'index is out of range');
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__common__["c" /* checkNumber */])(this[i]);
    }
  }, {
    key: "setComponent",
    value: function setComponent(i, value) {
      assert(i >= 0 && i < this.ELEMENTS, 'index is out of range');
      this[i] = value;
      return this.check();
    }
  }, {
    key: "addVectors",
    value: function addVectors(a, b) {
      return this.copy(a).add(b);
    }
  }, {
    key: "subVectors",
    value: function subVectors(a, b) {
      return this.copy(a).subtract(b);
    }
  }, {
    key: "multiplyVectors",
    value: function multiplyVectors(a, b) {
      return this.copy(a).multiply(b);
    }
  }, {
    key: "addScaledVector",
    value: function addScaledVector(a, b) {
      return this.add(new this.constructor(a).multiplyScalar(b));
    }
  }, {
    key: "x",
    get: function get() {
      return this[0];
    },
    set: function set(value) {
      return this[0] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__common__["c" /* checkNumber */])(value);
    }
  }, {
    key: "y",
    get: function get() {
      return this[1];
    },
    set: function set(value) {
      return this[1] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__common__["c" /* checkNumber */])(value);
    }
  }]);

  return Vector;
}(__WEBPACK_IMPORTED_MODULE_5__math_array__["a" /* default */]);


//# sourceMappingURL=vector.js.map

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export validateMatrix4 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Matrix4; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_slicedToArray__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_toConsumableArray__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_esm_possibleConstructorReturn__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_esm_getPrototypeOf__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lib_math_array__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lib_common__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__vector2__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__vector3__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__vector4__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_gl_mat4_determinant__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_gl_mat4_determinant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_gl_mat4_determinant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_gl_mat4_fromQuat__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_gl_mat4_fromQuat___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_gl_mat4_fromQuat__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_gl_mat4_frustum__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_gl_mat4_frustum___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_gl_mat4_frustum__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_gl_mat4_lookAt__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_gl_mat4_lookAt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_gl_mat4_lookAt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_gl_mat4_ortho__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_gl_mat4_ortho___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_gl_mat4_ortho__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_gl_mat4_perspective__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_gl_mat4_perspective___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_gl_mat4_perspective__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_gl_mat4_transpose__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_gl_mat4_transpose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_gl_mat4_transpose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_gl_mat4_invert__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_gl_mat4_invert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_gl_mat4_invert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_gl_mat4_multiply__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_gl_mat4_multiply___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_gl_mat4_multiply__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_gl_mat4_rotate__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_gl_mat4_rotate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_gl_mat4_rotate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_gl_mat4_scale__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_gl_mat4_scale___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_gl_mat4_scale__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_gl_mat4_translate__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_gl_mat4_translate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_gl_mat4_translate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_gl_vec2_transformMat4__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_gl_vec2_transformMat4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_gl_vec2_transformMat4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_gl_vec3_transformMat4__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_gl_vec3_transformMat4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_gl_vec3_transformMat4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_gl_vec4_transformMat4__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_gl_vec4_transformMat4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_gl_vec4_transformMat4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_gl_mat4_rotateX__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_gl_mat4_rotateX___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_gl_mat4_rotateX__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_gl_mat4_rotateY__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_gl_mat4_rotateY___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28_gl_mat4_rotateY__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_gl_mat4_rotateZ__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_gl_mat4_rotateZ___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29_gl_mat4_rotateZ__);






























var IDENTITY = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
function validateMatrix4(m) {
  return m.length === 16 && Number.isFinite(m[0]) && Number.isFinite(m[1]) && Number.isFinite(m[2]) && Number.isFinite(m[3]) && Number.isFinite(m[4]) && Number.isFinite(m[5]) && Number.isFinite(m[6]) && Number.isFinite(m[7]) && Number.isFinite(m[8]) && Number.isFinite(m[9]) && Number.isFinite(m[10]) && Number.isFinite(m[11]) && Number.isFinite(m[12]) && Number.isFinite(m[13]) && Number.isFinite(m[14]) && Number.isFinite(m[15]);
}

function validateVector(v, length) {
  if (v.length !== length) {
    return false;
  }

  return v.every(Number.isFinite);
}

var Matrix4 = function (_MathArray) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_esm_inherits__["a" /* default */])(Matrix4, _MathArray);

  function Matrix4() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_classCallCheck__["a" /* default */])(this, Matrix4);

    _this = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_esm_possibleConstructorReturn__["a" /* default */])(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_esm_getPrototypeOf__["a" /* default */])(Matrix4).call(this));

    if (Array.isArray(args[0]) && arguments.length === 1) {
      _this.copy(args[0]);
    } else {
      _this.identity();
    }

    return _this;
  }

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_createClass__["a" /* default */])(Matrix4, [{
    key: "setRowMajor",
    value: function setRowMajor() {
      var m00 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var m01 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var m02 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var m03 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var m10 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var m11 = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
      var m12 = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
      var m13 = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
      var m20 = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
      var m21 = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 0;
      var m22 = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : 1;
      var m23 = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : 0;
      var m30 = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : 0;
      var m31 = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : 0;
      var m32 = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : 0;
      var m33 = arguments.length > 15 && arguments[15] !== undefined ? arguments[15] : 1;
      this[0] = m00;
      this[1] = m10;
      this[2] = m20;
      this[3] = m30;
      this[4] = m01;
      this[5] = m11;
      this[6] = m21;
      this[7] = m31;
      this[8] = m02;
      this[9] = m12;
      this[10] = m22;
      this[11] = m32;
      this[12] = m03;
      this[13] = m13;
      this[14] = m23;
      this[15] = m33;
      return this.check();
    }
  }, {
    key: "setColumnMajor",
    value: function setColumnMajor() {
      var m00 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var m10 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var m20 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var m30 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var m01 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var m11 = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
      var m21 = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
      var m31 = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
      var m02 = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
      var m12 = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 0;
      var m22 = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : 1;
      var m32 = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : 0;
      var m03 = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : 0;
      var m13 = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : 0;
      var m23 = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : 0;
      var m33 = arguments.length > 15 && arguments[15] !== undefined ? arguments[15] : 1;
      this[0] = m00;
      this[1] = m10;
      this[2] = m20;
      this[3] = m30;
      this[4] = m01;
      this[5] = m11;
      this[6] = m21;
      this[7] = m31;
      this[8] = m02;
      this[9] = m12;
      this[10] = m22;
      this[11] = m32;
      this[12] = m03;
      this[13] = m13;
      this[14] = m23;
      this[15] = m33;
      return this.check();
    }
  }, {
    key: "copy",
    value: function copy(array) {
      return this.setColumnMajor.apply(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_toConsumableArray__["a" /* default */])(array));
    }
  }, {
    key: "set",
    value: function set() {
      return this.setColumnMajor.apply(this, arguments);
    }
  }, {
    key: "getElement",
    value: function getElement(i, j) {
      var columnMajor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      return columnMajor ? this[i][j] : this[j][i];
    }
  }, {
    key: "setElement",
    value: function setElement(i, j, value) {
      var columnMajor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (columnMajor) {
        this[i][j] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__lib_common__["c" /* checkNumber */])(value);
      } else {
        this[j][i] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__lib_common__["c" /* checkNumber */])(value);
      }

      return this;
    }
  }, {
    key: "determinant",
    value: function determinant() {
      return __WEBPACK_IMPORTED_MODULE_12_gl_mat4_determinant___default()(this);
    }
  }, {
    key: "identity",
    value: function identity() {
      return this.copy(IDENTITY);
    }
  }, {
    key: "fromQuaternion",
    value: function fromQuaternion(q) {
      __WEBPACK_IMPORTED_MODULE_13_gl_mat4_fromQuat___default()(this, q);
      return this.check();
    }
  }, {
    key: "frustum",
    value: function frustum(_ref) {
      var left = _ref.left,
          right = _ref.right,
          bottom = _ref.bottom,
          top = _ref.top,
          near = _ref.near,
          far = _ref.far;
      __WEBPACK_IMPORTED_MODULE_14_gl_mat4_frustum___default()(this, left, right, bottom, top, near, far);
      return this.check();
    }
  }, {
    key: "lookAt",
    value: function lookAt(_ref2) {
      var eye = _ref2.eye,
          _ref2$center = _ref2.center,
          center = _ref2$center === void 0 ? [0, 0, 0] : _ref2$center,
          _ref2$up = _ref2.up,
          up = _ref2$up === void 0 ? [0, 1, 0] : _ref2$up;
      __WEBPACK_IMPORTED_MODULE_15_gl_mat4_lookAt___default()(this, eye, center, up);
      return this.check();
    }
  }, {
    key: "ortho",
    value: function ortho(_ref3) {
      var left = _ref3.left,
          right = _ref3.right,
          bottom = _ref3.bottom,
          top = _ref3.top,
          _ref3$near = _ref3.near,
          near = _ref3$near === void 0 ? 0.1 : _ref3$near,
          _ref3$far = _ref3.far,
          far = _ref3$far === void 0 ? 500 : _ref3$far;
      __WEBPACK_IMPORTED_MODULE_16_gl_mat4_ortho___default()(this, left, right, bottom, top, near, far);
      return this.check();
    }
  }, {
    key: "orthographic",
    value: function orthographic(_ref4) {
      var _ref4$fovy = _ref4.fovy,
          fovy = _ref4$fovy === void 0 ? 45 * Math.PI / 180 : _ref4$fovy,
          _ref4$aspect = _ref4.aspect,
          aspect = _ref4$aspect === void 0 ? 1 : _ref4$aspect,
          _ref4$focalDistance = _ref4.focalDistance,
          focalDistance = _ref4$focalDistance === void 0 ? 1 : _ref4$focalDistance,
          _ref4$near = _ref4.near,
          near = _ref4$near === void 0 ? 0.1 : _ref4$near,
          _ref4$far = _ref4.far,
          far = _ref4$far === void 0 ? 500 : _ref4$far;

      if (fovy > Math.PI * 2) {
        throw Error('radians');
      }

      var halfY = fovy / 2;
      var top = focalDistance * Math.tan(halfY);
      var right = top * aspect;
      return new Matrix4().ortho({
        left: -right,
        right: right,
        bottom: -top,
        top: top,
        near: near,
        far: far
      });
    }
  }, {
    key: "perspective",
    value: function perspective() {
      var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          fovy = _ref5.fovy,
          _ref5$fov = _ref5.fov,
          fov = _ref5$fov === void 0 ? 45 * Math.PI / 180 : _ref5$fov,
          _ref5$aspect = _ref5.aspect,
          aspect = _ref5$aspect === void 0 ? 1 : _ref5$aspect,
          _ref5$near = _ref5.near,
          near = _ref5$near === void 0 ? 0.1 : _ref5$near,
          _ref5$far = _ref5.far,
          far = _ref5$far === void 0 ? 500 : _ref5$far;

      fovy = fovy || fov;

      if (fovy > Math.PI * 2) {
        throw Error('radians');
      }

      __WEBPACK_IMPORTED_MODULE_17_gl_mat4_perspective___default()(this, fovy, aspect, near, far);
      return this.check();
    }
  }, {
    key: "transpose",
    value: function transpose() {
      __WEBPACK_IMPORTED_MODULE_18_gl_mat4_transpose___default()(this, this);
      return this.check();
    }
  }, {
    key: "invert",
    value: function invert() {
      __WEBPACK_IMPORTED_MODULE_19_gl_mat4_invert___default()(this, this);
      return this.check();
    }
  }, {
    key: "multiplyLeft",
    value: function multiplyLeft(a) {
      __WEBPACK_IMPORTED_MODULE_20_gl_mat4_multiply___default()(this, a, this);
      return this.check();
    }
  }, {
    key: "multiplyRight",
    value: function multiplyRight(a) {
      __WEBPACK_IMPORTED_MODULE_20_gl_mat4_multiply___default()(this, this, a);
      return this.check();
    }
  }, {
    key: "rotateX",
    value: function rotateX(radians) {
      __WEBPACK_IMPORTED_MODULE_27_gl_mat4_rotateX___default()(this, this, radians);
      return this.check();
    }
  }, {
    key: "rotateY",
    value: function rotateY(radians) {
      __WEBPACK_IMPORTED_MODULE_28_gl_mat4_rotateY___default()(this, this, radians);
      return this.check();
    }
  }, {
    key: "rotateZ",
    value: function rotateZ(radians) {
      __WEBPACK_IMPORTED_MODULE_29_gl_mat4_rotateZ___default()(this, this, radians);
      return this.check();
    }
  }, {
    key: "rotateXYZ",
    value: function rotateXYZ(_ref6) {
      var _ref7 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_slicedToArray__["a" /* default */])(_ref6, 3),
          rx = _ref7[0],
          ry = _ref7[1],
          rz = _ref7[2];

      return this.rotateX(rx).rotateY(ry).rotateZ(rz);
    }
  }, {
    key: "rotateAxis",
    value: function rotateAxis(radians, axis) {
      __WEBPACK_IMPORTED_MODULE_21_gl_mat4_rotate___default()(this, this, radians, axis);
      return this.check();
    }
  }, {
    key: "scale",
    value: function scale(vec) {
      __WEBPACK_IMPORTED_MODULE_22_gl_mat4_scale___default()(this, this, vec);
      return this.check();
    }
  }, {
    key: "translate",
    value: function translate(vec) {
      __WEBPACK_IMPORTED_MODULE_23_gl_mat4_translate___default()(this, this, vec);
      return this.check();
    }
  }, {
    key: "transformVector2",
    value: function transformVector2(vector, out) {
      out = out || new __WEBPACK_IMPORTED_MODULE_9__vector2__["a" /* default */]();
      __WEBPACK_IMPORTED_MODULE_24_gl_vec2_transformMat4___default()(out, vector, this);
      validateVector(out, 2);
      return out;
    }
  }, {
    key: "transformVector3",
    value: function transformVector3(vector, out) {
      out = out || new __WEBPACK_IMPORTED_MODULE_10__vector3__["a" /* default */]();
      __WEBPACK_IMPORTED_MODULE_25_gl_vec3_transformMat4___default()(out, vector, this);
      validateVector(out, 3);
      return out;
    }
  }, {
    key: "transformVector4",
    value: function transformVector4(vector, out) {
      out = out || new __WEBPACK_IMPORTED_MODULE_11__vector4__["a" /* default */]();
      __WEBPACK_IMPORTED_MODULE_26_gl_vec4_transformMat4___default()(out, vector, this);
      validateVector(out, 4);
      return out.check();
    }
  }, {
    key: "transformVector",
    value: function transformVector(vector, out) {
      switch (vector.length) {
        case 2:
          return this.transformVector2(vector, out);

        case 3:
          return this.transformVector3(vector, out);

        case 4:
          return this.transformVector4(vector, out);

        default:
          throw new Error('Illegal vector');
      }
    }
  }, {
    key: "transformDirection",
    value: function transformDirection(vector, out) {
      return this._transformVector(vector, out, 0);
    }
  }, {
    key: "transformPoint",
    value: function transformPoint(vector, out) {
      return this._transformVector(vector, out, 1);
    }
  }, {
    key: "_transformVector",
    value: function _transformVector(vector, out, w) {
      switch (vector.length) {
        case 2:
          out = out || new __WEBPACK_IMPORTED_MODULE_9__vector2__["a" /* default */]();
          __WEBPACK_IMPORTED_MODULE_26_gl_vec4_transformMat4___default()(out, [vector[0], vector[1], 0, w], this);
          out.length = 2;
          validateVector(out, 2);
          break;

        case 3:
          out = out || new __WEBPACK_IMPORTED_MODULE_10__vector3__["a" /* default */]();
          __WEBPACK_IMPORTED_MODULE_26_gl_vec4_transformMat4___default()(out, [vector[0], vector[1], vector[2], w], this);
          out.length = 3;
          validateVector(out, 3);
          break;

        case 4:
          if (Boolean(w) !== Boolean(vector[3])) {
            throw new Error('math.gl: Matrix4.transformPoint - invalid vector');
          }

          out = out || new __WEBPACK_IMPORTED_MODULE_11__vector4__["a" /* default */]();
          __WEBPACK_IMPORTED_MODULE_26_gl_vec4_transformMat4___default()(out, vector, this);
          validateVector(out, 4);
          break;

        default:
          throw new Error('Illegal vector');
      }

      return out;
    }
  }, {
    key: "makeRotationX",
    value: function makeRotationX(radians) {
      return this.identity().rotateX(radians);
    }
  }, {
    key: "makeTranslation",
    value: function makeTranslation(x, y, z) {
      return this.identity().translate([x, y, z]);
    }
  }, {
    key: "ELEMENTS",
    get: function get() {
      return 16;
    }
  }]);

  return Matrix4;
}(__WEBPACK_IMPORTED_MODULE_7__lib_math_array__["a" /* default */]);


//# sourceMappingURL=matrix4.js.map

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _slicedToArray;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__arrayWithHoles__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__iterableToArrayLimit__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nonIterableRest__ = __webpack_require__(28);



function _slicedToArray(arr, i) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__arrayWithHoles__["a" /* default */])(arr) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__iterableToArrayLimit__["a" /* default */])(arr, i) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__nonIterableRest__["a" /* default */])();
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */
module.exports = __webpack_require__(79)


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = setAxisAngle

/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {vec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/
function setAxisAngle (out, axis, rad) {
  rad = rad * 0.5
  var s = Math.sin(rad)
  out[0] = s * axis[0]
  out[1] = s * axis[1]
  out[2] = s * axis[2]
  out[3] = Math.cos(rad)
  return out
}


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = cross;

/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function cross(out, a, b) {
    var ax = a[0], ay = a[1], az = a[2],
        bx = b[0], by = b[1], bz = b[2]

    out[0] = ay * bz - az * by
    out[1] = az * bx - ax * bz
    out[2] = ax * by - ay * bx
    return out
}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = dot;

/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
}

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = length;

/**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
    var x = a[0],
        y = a[1],
        z = a[2]
    return Math.sqrt(x*x + y*y + z*z)
}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = normalize;

/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */
function normalize(out, a) {
    var x = a[0],
        y = a[1],
        z = a[2]
    var len = x*x + y*y + z*z
    if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len)
        out[0] = a[0] * len
        out[1] = a[1] * len
        out[2] = a[2] * len
    }
    return out
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Euler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_possibleConstructorReturn__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_getPrototypeOf__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_esm_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_math_array__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_common__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__matrix4__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__quaternion__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__vector3__ = __webpack_require__(6);










var ERR_UNKNOWN_ORDER = 'Unknown Euler angle order';
var ALMOST_ONE = 0.99999;

function validateOrder(value) {
  return value >= 0 && value < 6;
}

function checkOrder(value) {
  if (value < 0 && value >= 6) {
    throw new Error(ERR_UNKNOWN_ORDER);
  }

  return value;
}

var Euler = function (_MathArray) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_esm_inherits__["a" /* default */])(Euler, _MathArray);

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_createClass__["a" /* default */])(Euler, [{
    key: "ELEMENTS",
    get: function get() {
      return 4;
    }
  }], [{
    key: "rotationOrder",
    value: function rotationOrder(order) {
      return Euler.RotationOrders[order];
    }
  }, {
    key: "ZYX",
    get: function get() {
      return 0;
    }
  }, {
    key: "YXZ",
    get: function get() {
      return 1;
    }
  }, {
    key: "XZY",
    get: function get() {
      return 2;
    }
  }, {
    key: "ZXY",
    get: function get() {
      return 3;
    }
  }, {
    key: "YZX",
    get: function get() {
      return 4;
    }
  }, {
    key: "XYZ",
    get: function get() {
      return 5;
    }
  }, {
    key: "RollPitchYaw",
    get: function get() {
      return 0;
    }
  }, {
    key: "DefaultOrder",
    get: function get() {
      return Euler.ZYX;
    }
  }, {
    key: "RotationOrders",
    get: function get() {
      return ['ZYX', 'YXZ', 'XZY', 'ZXY', 'YZX', 'XYZ'];
    }
  }]);

  function Euler() {
    var _this;

    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var order = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Euler.DefaultOrder;

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_classCallCheck__["a" /* default */])(this, Euler);

    _this = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_possibleConstructorReturn__["a" /* default */])(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_getPrototypeOf__["a" /* default */])(Euler).call(this));

    if (arguments.length > 0 && Array.isArray(arguments[0])) {
      var _this2;

      (_this2 = _this).fromVector3.apply(_this2, arguments);
    } else {
      _this.set(x, y, z, order);
    }

    return _this;
  }

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_createClass__["a" /* default */])(Euler, [{
    key: "copy",
    value: function copy(array) {
      for (var i = 0; i < 3; ++i) {
        this[i] = array[i];
      }

      this[3] = Number.isFinite(array[3]) || this.order;
      return this.check();
    }
  }, {
    key: "set",
    value: function set() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var order = arguments.length > 3 ? arguments[3] : undefined;
      this[0] = x;
      this[1] = y;
      this[2] = z;
      this[3] = Number.isFinite(order) ? order : this[3];
      return this.check();
    }
  }, {
    key: "validate",
    value: function validate() {
      return validateOrder(this[3]) && Number.isFinite(this[0]) && Number.isFinite(this[1]) && Number.isFinite(this[2]);
    }
  }, {
    key: "toArray",
    value: function toArray() {
      var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      array[offset] = this[0];
      array[offset + 1] = this[1];
      array[offset + 2] = this[2];
      return array;
    }
  }, {
    key: "toArray4",
    value: function toArray4() {
      var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      array[offset] = this[0];
      array[offset + 1] = this[1];
      array[offset + 2] = this[2];
      array[offset + 3] = this[3];
      return array;
    }
  }, {
    key: "toVector3",
    value: function toVector3(optionalResult) {
      if (optionalResult) {
        return optionalResult.set(this[0], this[1], this[2]);
      }

      return new __WEBPACK_IMPORTED_MODULE_9__vector3__["a" /* default */](this[0], this[1], this[2]);
    }
  }, {
    key: "fromVector3",
    value: function fromVector3(v, order) {
      return this.set(v[0], v[1], v[2], Number.isFinite(order) ? order : this[3]);
    }
  }, {
    key: "fromArray",
    value: function fromArray(array) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      this[0] = array[0 + offset];
      this[1] = array[1 + offset];
      this[2] = array[2 + offset];

      if (array[3] !== undefined) {
        this[3] = array[3];
      }

      return this.check();
    }
  }, {
    key: "fromRollPitchYaw",
    value: function fromRollPitchYaw(roll, pitch, yaw) {
      return this.set(roll, pitch, yaw, Euler.ZYX);
    }
  }, {
    key: "fromQuaternion",
    value: function fromQuaternion(q, order) {
      this._fromRotationMatrix(__WEBPACK_IMPORTED_MODULE_7__matrix4__["a" /* default */].fromQuaternion(q), order);

      return this.check();
    }
  }, {
    key: "fromRotationMatrix",
    value: function fromRotationMatrix(m) {
      var order = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Euler.DefaultOrder;

      this._fromRotationMatrix(m, order);

      return this.check();
    }
  }, {
    key: "getRotationMatrix",
    value: function getRotationMatrix() {
      var m = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new __WEBPACK_IMPORTED_MODULE_7__matrix4__["a" /* default */]();

      this._getRotationMatrix(m);

      return m;
    }
  }, {
    key: "getQuaternion",
    value: function getQuaternion() {
      var q = new __WEBPACK_IMPORTED_MODULE_8__quaternion__["a" /* default */]();

      switch (this[4]) {
        case Euler.XYZ:
          return q.rotateX(this[0]).rotateY(this[1]).rotateZ(this[2]);

        case Euler.YXZ:
          return q.rotateY(this[0]).rotateX(this[1]).rotateZ(this[2]);

        case Euler.ZXY:
          return q.rotateZ(this[0]).rotateX(this[1]).rotateY(this[2]);

        case Euler.ZYX:
          return q.rotateZ(this[0]).rotateY(this[1]).rotateX(this[2]);

        case Euler.YZX:
          return q.rotateY(this[0]).rotateZ(this[1]).rotateX(this[2]);

        case Euler.XZY:
          return q.rotateX(this[0]).rotateZ(this[1]).rotateY(this[2]);

        default:
          throw new Error(ERR_UNKNOWN_ORDER);
      }
    }
  }, {
    key: "_fromRotationMatrix",
    value: function _fromRotationMatrix(m) {
      var order = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Euler.DefaultOrder;
      var te = m.elements;
      var m11 = te[0],
          m12 = te[4],
          m13 = te[8];
      var m21 = te[1],
          m22 = te[5],
          m23 = te[9];
      var m31 = te[2],
          m32 = te[6],
          m33 = te[10];
      order = order || this[3];

      switch (order) {
        case Euler.XYZ:
          this[1] = Math.asin(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_common__["b" /* clamp */])(m13, -1, 1));

          if (Math.abs(m13) < ALMOST_ONE) {
            this[0] = Math.atan2(-m23, m33);
            this[2] = Math.atan2(-m12, m11);
          } else {
            this[0] = Math.atan2(m32, m22);
            this[2] = 0;
          }

          break;

        case Euler.YXZ:
          this[0] = Math.asin(-__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_common__["b" /* clamp */])(m23, -1, 1));

          if (Math.abs(m23) < ALMOST_ONE) {
            this[1] = Math.atan2(m13, m33);
            this[2] = Math.atan2(m21, m22);
          } else {
            this[1] = Math.atan2(-m31, m11);
            this[2] = 0;
          }

          break;

        case Euler.ZXY:
          this[0] = Math.asin(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_common__["b" /* clamp */])(m32, -1, 1));

          if (Math.abs(m32) < ALMOST_ONE) {
            this[1] = Math.atan2(-m31, m33);
            this[2] = Math.atan2(-m12, m22);
          } else {
            this[1] = 0;
            this[2] = Math.atan2(m21, m11);
          }

          break;

        case Euler.ZYX:
          this[1] = Math.asin(-__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_common__["b" /* clamp */])(m31, -1, 1));

          if (Math.abs(m31) < ALMOST_ONE) {
            this[0] = Math.atan2(m32, m33);
            this[2] = Math.atan2(m21, m11);
          } else {
            this[0] = 0;
            this[2] = Math.atan2(-m12, m22);
          }

          break;

        case Euler.YZX:
          this[2] = Math.asin(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_common__["b" /* clamp */])(m21, -1, 1));

          if (Math.abs(m21) < ALMOST_ONE) {
            this[0] = Math.atan2(-m23, m22);
            this[1] = Math.atan2(-m31, m11);
          } else {
            this[0] = 0;
            this[1] = Math.atan2(m13, m33);
          }

          break;

        case Euler.XZY:
          this[2] = Math.asin(-__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_common__["b" /* clamp */])(m12, -1, 1));

          if (Math.abs(m12) < ALMOST_ONE) {
            this[0] = Math.atan2(m32, m22);
            this[1] = Math.atan2(m13, m11);
          } else {
            this[0] = Math.atan2(-m23, m33);
            this[1] = 0;
          }

          break;

        default:
          throw new Error(ERR_UNKNOWN_ORDER);
      }

      this[3] = order;
      return this;
    }
  }, {
    key: "_getRotationMatrix",
    value: function _getRotationMatrix() {
      var te = new __WEBPACK_IMPORTED_MODULE_7__matrix4__["a" /* default */]();
      var x = this.x,
          y = this.y,
          z = this.z;
      var a = Math.cos(x);
      var c = Math.cos(y);
      var e = Math.cos(z);
      var b = Math.sin(x);
      var d = Math.sin(y);
      var f = Math.sin(z);

      switch (this[3]) {
        case Euler.XYZ:
          {
            var ae = a * e,
                af = a * f,
                be = b * e,
                bf = b * f;
            te[0] = c * e;
            te[4] = -c * f;
            te[8] = d;
            te[1] = af + be * d;
            te[5] = ae - bf * d;
            te[9] = -b * c;
            te[2] = bf - ae * d;
            te[6] = be + af * d;
            te[10] = a * c;
            break;
          }

        case Euler.YXZ:
          {
            var ce = c * e,
                cf = c * f,
                de = d * e,
                df = d * f;
            te[0] = ce + df * b;
            te[4] = de * b - cf;
            te[8] = a * d;
            te[1] = a * f;
            te[5] = a * e;
            te[9] = -b;
            te[2] = cf * b - de;
            te[6] = df + ce * b;
            te[10] = a * c;
            break;
          }

        case Euler.ZXY:
          {
            var _ce = c * e,
                _cf = c * f,
                _de = d * e,
                _df = d * f;

            te[0] = _ce - _df * b;
            te[4] = -a * f;
            te[8] = _de + _cf * b;
            te[1] = _cf + _de * b;
            te[5] = a * e;
            te[9] = _df - _ce * b;
            te[2] = -a * d;
            te[6] = b;
            te[10] = a * c;
            break;
          }

        case Euler.ZYX:
          {
            var _ae = a * e,
                _af = a * f,
                _be = b * e,
                _bf = b * f;

            te[0] = c * e;
            te[4] = _be * d - _af;
            te[8] = _ae * d + _bf;
            te[1] = c * f;
            te[5] = _bf * d + _ae;
            te[9] = _af * d - _be;
            te[2] = -d;
            te[6] = b * c;
            te[10] = a * c;
            break;
          }

        case Euler.YZX:
          {
            var ac = a * c,
                ad = a * d,
                bc = b * c,
                bd = b * d;
            te[0] = c * e;
            te[4] = bd - ac * f;
            te[8] = bc * f + ad;
            te[1] = f;
            te[5] = a * e;
            te[9] = -b * e;
            te[2] = -d * e;
            te[6] = ad * f + bc;
            te[10] = ac - bd * f;
            break;
          }

        case Euler.XZY:
          {
            var _ac = a * c,
                _ad = a * d,
                _bc = b * c,
                _bd = b * d;

            te[0] = c * e;
            te[4] = -f;
            te[8] = d * e;
            te[1] = _ac * f + _bd;
            te[5] = a * e;
            te[9] = _ad * f - _bc;
            te[2] = _bc * f - _ad;
            te[6] = b * e;
            te[10] = _bd * f + _ac;
            break;
          }

        default:
          throw new Error(ERR_UNKNOWN_ORDER);
      }

      te[3] = 0;
      te[7] = 0;
      te[11] = 0;
      te[12] = 0;
      te[13] = 0;
      te[14] = 0;
      te[15] = 1;
      return this;
    }
  }, {
    key: "x",
    get: function get() {
      return this[0];
    },
    set: function set(value) {
      return this[0] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_common__["c" /* checkNumber */])(value);
    }
  }, {
    key: "y",
    get: function get() {
      return this[1];
    },
    set: function set(value) {
      return this[1] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_common__["c" /* checkNumber */])(value);
    }
  }, {
    key: "z",
    get: function get() {
      return this[2];
    },
    set: function set(value) {
      return this[2] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_common__["c" /* checkNumber */])(value);
    }
  }, {
    key: "alpha",
    get: function get() {
      return this[0];
    },
    set: function set(value) {
      return this[0] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_common__["c" /* checkNumber */])(value);
    }
  }, {
    key: "beta",
    get: function get() {
      return this[1];
    },
    set: function set(value) {
      return this[1] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_common__["c" /* checkNumber */])(value);
    }
  }, {
    key: "gamma",
    get: function get() {
      return this[2];
    },
    set: function set(value) {
      return this[2] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_common__["c" /* checkNumber */])(value);
    }
  }, {
    key: "phi",
    get: function get() {
      return this[0];
    },
    set: function set(value) {
      return this[0] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_common__["c" /* checkNumber */])(value);
    }
  }, {
    key: "theta",
    get: function get() {
      return this[1];
    },
    set: function set(value) {
      return this[1] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_common__["c" /* checkNumber */])(value);
    }
  }, {
    key: "psi",
    get: function get() {
      return this[2];
    },
    set: function set(value) {
      return this[2] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_common__["c" /* checkNumber */])(value);
    }
  }, {
    key: "roll",
    get: function get() {
      return this[0];
    },
    set: function set(value) {
      return this[0] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_common__["c" /* checkNumber */])(value);
    }
  }, {
    key: "pitch",
    get: function get() {
      return this[1];
    },
    set: function set(value) {
      return this[1] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_common__["c" /* checkNumber */])(value);
    }
  }, {
    key: "yaw",
    get: function get() {
      return this[2];
    },
    set: function set(value) {
      return this[2] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_common__["c" /* checkNumber */])(value);
    }
  }, {
    key: "order",
    get: function get() {
      return this[3];
    },
    set: function set(value) {
      return this[3] = checkOrder(value);
    }
  }]);

  return Euler;
}(__WEBPACK_IMPORTED_MODULE_5__lib_math_array__["a" /* default */]);


//# sourceMappingURL=euler.js.map

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export validateQuaternion */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Quaternion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_possibleConstructorReturn__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_getPrototypeOf__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_esm_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_math_array__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_common__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_gl_quat_fromMat3__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_gl_quat_fromMat3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_gl_quat_fromMat3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_gl_quat_identity__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_gl_quat_identity___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_gl_quat_identity__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_gl_quat_length__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_gl_quat_length___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_gl_quat_length__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_gl_quat_squaredLength__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_gl_quat_squaredLength___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_gl_quat_squaredLength__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_gl_quat_dot__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_gl_quat_dot___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_gl_quat_dot__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_gl_quat_rotationTo__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_gl_quat_rotationTo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_gl_quat_rotationTo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_gl_quat_add__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_gl_quat_add___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_gl_quat_add__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_gl_quat_calculateW__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_gl_quat_calculateW___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_gl_quat_calculateW__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_gl_quat_conjugate__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_gl_quat_conjugate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_gl_quat_conjugate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_gl_quat_invert__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_gl_quat_invert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_gl_quat_invert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_gl_quat_lerp__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_gl_quat_lerp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_gl_quat_lerp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_gl_quat_multiply__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_gl_quat_multiply___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_gl_quat_multiply__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_gl_quat_normalize__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_gl_quat_normalize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_gl_quat_normalize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_gl_quat_rotateX__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_gl_quat_rotateX___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_gl_quat_rotateX__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_gl_quat_rotateY__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_gl_quat_rotateY___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_gl_quat_rotateY__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_gl_quat_rotateZ__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_gl_quat_rotateZ___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_gl_quat_rotateZ__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_gl_quat_scale__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_gl_quat_scale___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_gl_quat_scale__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_gl_quat_set__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_gl_quat_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_gl_quat_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_gl_quat_setAxisAngle__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_gl_quat_setAxisAngle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_gl_quat_setAxisAngle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_gl_quat_slerp__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_gl_quat_slerp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_gl_quat_slerp__);



























var IDENTITY_QUATERNION = [0, 0, 0, 1];
function validateQuaternion(q) {
  return q.length === 4 && Number.isFinite(q[0]) && Number.isFinite(q[1]) && Number.isFinite(q[2]) && Number.isFinite(q[3]);
}

var Quaternion = function (_MathArray) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_esm_inherits__["a" /* default */])(Quaternion, _MathArray);

  function Quaternion() {
    var _this;

    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var w = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_classCallCheck__["a" /* default */])(this, Quaternion);

    _this = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_possibleConstructorReturn__["a" /* default */])(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_getPrototypeOf__["a" /* default */])(Quaternion).call(this));

    if (Array.isArray(x) && arguments.length === 1) {
      _this.copy(x);
    } else {
      _this.set(x, y, z, w);
    }

    return _this;
  }

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_createClass__["a" /* default */])(Quaternion, [{
    key: "fromMatrix3",
    value: function fromMatrix3(m) {
      __WEBPACK_IMPORTED_MODULE_7_gl_quat_fromMat3___default()(this, m);
      return this.check();
    }
  }, {
    key: "fromValues",
    value: function fromValues(x, y, z, w) {
      return this.set(x, y, z, w);
    }
  }, {
    key: "identity",
    value: function identity() {
      __WEBPACK_IMPORTED_MODULE_8_gl_quat_identity___default()(this);
      return this.check();
    }
  }, {
    key: "length",
    value: function length() {
      return __WEBPACK_IMPORTED_MODULE_9_gl_quat_length___default()(this);
    }
  }, {
    key: "squaredLength",
    value: function squaredLength(a) {
      return __WEBPACK_IMPORTED_MODULE_10_gl_quat_squaredLength___default()(this);
    }
  }, {
    key: "dot",
    value: function dot(a, b) {
      if (b !== undefined) {
        throw new Error('Quaternion.dot only takes one argument');
      }

      return __WEBPACK_IMPORTED_MODULE_11_gl_quat_dot___default()(this, a);
    }
  }, {
    key: "rotationTo",
    value: function rotationTo(vectorA, vectorB) {
      __WEBPACK_IMPORTED_MODULE_12_gl_quat_rotationTo___default()(this, vectorA, vectorB);
      return this.check();
    }
  }, {
    key: "add",
    value: function add(a, b) {
      if (b !== undefined) {
        throw new Error('Quaternion.add only takes one argument');
      }

      __WEBPACK_IMPORTED_MODULE_13_gl_quat_add___default()(this, a);
      return this.check();
    }
  }, {
    key: "calculateW",
    value: function calculateW() {
      __WEBPACK_IMPORTED_MODULE_14_gl_quat_calculateW___default()(this, this);
      return this.check();
    }
  }, {
    key: "conjugate",
    value: function conjugate() {
      __WEBPACK_IMPORTED_MODULE_15_gl_quat_conjugate___default()(this, this);
      return this.check();
    }
  }, {
    key: "invert",
    value: function invert() {
      __WEBPACK_IMPORTED_MODULE_16_gl_quat_invert___default()(this, this);
      return this.check();
    }
  }, {
    key: "lerp",
    value: function lerp(a, b, t) {
      __WEBPACK_IMPORTED_MODULE_17_gl_quat_lerp___default()(this, a, b, t);
      return this.check();
    }
  }, {
    key: "multiply",
    value: function multiply(a, b) {
      if (b !== undefined) {
        throw new Error('Quaternion.multiply only takes one argument');
      }

      __WEBPACK_IMPORTED_MODULE_18_gl_quat_multiply___default()(this, this, b);
      return this.check();
    }
  }, {
    key: "normalize",
    value: function normalize() {
      __WEBPACK_IMPORTED_MODULE_19_gl_quat_normalize___default()(this, this);
      return this.check();
    }
  }, {
    key: "rotateX",
    value: function rotateX(rad) {
      __WEBPACK_IMPORTED_MODULE_20_gl_quat_rotateX___default()(this, this, rad);
      return this.check();
    }
  }, {
    key: "rotateY",
    value: function rotateY(rad) {
      __WEBPACK_IMPORTED_MODULE_21_gl_quat_rotateY___default()(this, this, rad);
      return this.check();
    }
  }, {
    key: "rotateZ",
    value: function rotateZ(rad) {
      __WEBPACK_IMPORTED_MODULE_22_gl_quat_rotateZ___default()(this, this, rad);
      return this.check();
    }
  }, {
    key: "scale",
    value: function scale(b) {
      __WEBPACK_IMPORTED_MODULE_23_gl_quat_scale___default()(this, this, b);
      return this.check();
    }
  }, {
    key: "set",
    value: function set(i, j, k, l) {
      __WEBPACK_IMPORTED_MODULE_24_gl_quat_set___default()(this, i, j, k, l);
      return this.check();
    }
  }, {
    key: "setAxisAngle",
    value: function setAxisAngle(axis, rad) {
      __WEBPACK_IMPORTED_MODULE_25_gl_quat_setAxisAngle___default()(this, axis, rad);
      return this.check();
    }
  }, {
    key: "slerp",
    value: function slerp(_ref) {
      var _ref$start = _ref.start,
          start = _ref$start === void 0 ? IDENTITY_QUATERNION : _ref$start,
          target = _ref.target,
          ratio = _ref.ratio;
      __WEBPACK_IMPORTED_MODULE_26_gl_quat_slerp___default()(this, start, target, ratio);
      return this.check();
    }
  }, {
    key: "ELEMENTS",
    get: function get() {
      return 4;
    }
  }, {
    key: "x",
    get: function get() {
      return this[0];
    },
    set: function set(value) {
      return this[0] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_common__["c" /* checkNumber */])(value);
    }
  }, {
    key: "y",
    get: function get() {
      return this[1];
    },
    set: function set(value) {
      return this[1] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_common__["c" /* checkNumber */])(value);
    }
  }, {
    key: "z",
    get: function get() {
      return this[2];
    },
    set: function set(value) {
      return this[2] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_common__["c" /* checkNumber */])(value);
    }
  }, {
    key: "w",
    get: function get() {
      return this[3];
    },
    set: function set(value) {
      return this[3] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_common__["c" /* checkNumber */])(value);
    }
  }]);

  return Quaternion;
}(__WEBPACK_IMPORTED_MODULE_5__lib_math_array__["a" /* default */]);


//# sourceMappingURL=quaternion.js.map

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Vector2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_possibleConstructorReturn__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_getPrototypeOf__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_esm_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_vector__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_gl_vec2_cross__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_gl_vec2_cross___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_gl_vec2_cross__);








var Vector2 = function (_Vector) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_esm_inherits__["a" /* default */])(Vector2, _Vector);

  function Vector2() {
    var _this;

    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_classCallCheck__["a" /* default */])(this, Vector2);

    _this = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_possibleConstructorReturn__["a" /* default */])(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_getPrototypeOf__["a" /* default */])(Vector2).call(this));

    if (Array.isArray(x) && arguments.length === 1) {
      _this.copy(x);
    } else {
      _this.set(x, y);
    }

    return _this;
  }

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_createClass__["a" /* default */])(Vector2, [{
    key: "cross",
    value: function cross(vector) {
      __WEBPACK_IMPORTED_MODULE_6_gl_vec2_cross___default()(this, this, vector);
      return this.check();
    }
  }, {
    key: "horizontalAngle",
    value: function horizontalAngle() {
      return Math.atan2(this.y, this.x);
    }
  }, {
    key: "verticalAngle",
    value: function verticalAngle() {
      return Math.atan2(this.x, this.y);
    }
  }, {
    key: "operation",
    value: function operation(_operation) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      _operation.apply(void 0, [this, this].concat(args));

      return this.check();
    }
  }, {
    key: "ELEMENTS",
    get: function get() {
      return 2;
    }
  }]);

  return Vector2;
}(__WEBPACK_IMPORTED_MODULE_5__lib_vector__["a" /* default */]);


//# sourceMappingURL=vector2.js.map

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Vector4; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_possibleConstructorReturn__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_getPrototypeOf__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_esm_inherits__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_vector__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_common__ = __webpack_require__(2);








var Vector4 = function (_Vector) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_esm_inherits__["a" /* default */])(Vector4, _Vector);

  function Vector4() {
    var _this;

    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var w = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_classCallCheck__["a" /* default */])(this, Vector4);

    _this = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_possibleConstructorReturn__["a" /* default */])(this, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_esm_getPrototypeOf__["a" /* default */])(Vector4).call(this));

    if (Array.isArray(x) && arguments.length === 1) {
      _this.copy(x);
    } else {
      _this.set(x, y, z, w);
    }

    return _this;
  }

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_createClass__["a" /* default */])(Vector4, [{
    key: "applyMatrix4",
    value: function applyMatrix4(m) {
      m.transformVector(this, this);
      return this;
    }
  }, {
    key: "ELEMENTS",
    get: function get() {
      return 4;
    }
  }, {
    key: "z",
    get: function get() {
      return this[2];
    },
    set: function set(value) {
      return this[2] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_common__["c" /* checkNumber */])(value);
    }
  }, {
    key: "w",
    get: function get() {
      return this[3];
    },
    set: function set(value) {
      return this[3] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__lib_common__["c" /* checkNumber */])(value);
    }
  }]);

  return Vector4;
}(__WEBPACK_IMPORTED_MODULE_5__lib_vector__["a" /* default */]);


//# sourceMappingURL=vector4.js.map

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vector2__ = __webpack_require__(19);
/* unused harmony reexport Vector2 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vector3__ = __webpack_require__(6);
/* unused harmony reexport Vector3 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vector4__ = __webpack_require__(20);
/* unused harmony reexport Vector4 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__matrix4__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__matrix4__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__quaternion__ = __webpack_require__(18);
/* unused harmony reexport Quaternion */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_common__ = __webpack_require__(2);
/* unused harmony reexport config */
/* unused harmony reexport checkNumber */
/* unused harmony reexport configure */
/* unused harmony reexport formatValue */
/* unused harmony reexport isArray */
/* unused harmony reexport clone */
/* unused harmony reexport radians */
/* unused harmony reexport degrees */
/* unused harmony reexport sin */
/* unused harmony reexport cos */
/* unused harmony reexport tan */
/* unused harmony reexport asin */
/* unused harmony reexport acos */
/* unused harmony reexport atan */
/* unused harmony reexport clamp */
/* unused harmony reexport lerp */
/* unused harmony reexport equals */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__spherical_coordinates__ = __webpack_require__(86);
/* unused harmony reexport _SphericalCoordinates */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pose__ = __webpack_require__(85);
/* unused harmony reexport _Pose */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__euler__ = __webpack_require__(17);
/* unused harmony reexport _Euler */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__addons_polygon__ = __webpack_require__(84);
/* unused harmony reexport _Polygon */










//# sourceMappingURL=index.js.map

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export vec3_add */
/* unused harmony export vec3_sub */
/* unused harmony export vec3_scale */
/* unused harmony export vec3_norm */
/* unused harmony export vec3_dot */
/* harmony export (immutable) */ __webpack_exports__["a"] = vec3_dist;
/* unused harmony export vec3_mid */
/* unused harmony export vec3_unit */
function vec3_add(p1, p2) {
  return [p1[0] + p2[0], p1[1] + p2[1], (p1[2] + p2[2]) || 0];
}

function vec3_sub(p1, p2) {
  return [p1[0] - p2[0], p1[1] - p2[1], (p1[2] - p2[2]) || 0];
}

function vec3_scale(p1, scale) {
  return [p1[0] * scale, p1[1] * scale, (p1[2] * scale) || 0];
}

function vec3_norm(p1) {
  return Math.sqrt(p1[0] * p1[0] + p1[1] * p1[1] + (p1[2] * p1[2] || 0));
}

function vec3_dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + (a[2] * b[2] || 0);
}

function vec3_dist(p1, p2) {
  const d1 = p1[0] - p2[0];
  const d2 = p1[1] - p2[1];
  const d3 = (p1[2] - p2[2]) || 0;

  return Math.sqrt(d1*d1 + d2*d2 + d3*d3);
}

function vec3_mid(p1, p2) {
  return vec3_scale(vec3_add(p1, p2), 0.5);
}

function vec3_unit(p1) {
  const n = vec3_norm(p1);
  return vec3_scale(p1, 1/n);
}


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _arrayWithHoles;
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _arrayWithoutHoles;
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _assertThisInitialized;
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _iterableToArray;
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _iterableToArrayLimit;
function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _nonIterableRest;
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _nonIterableSpread;
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _setPrototypeOf;
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _toConsumableArray;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__arrayWithoutHoles__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__iterableToArray__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nonIterableSpread__ = __webpack_require__(29);



function _toConsumableArray(arr) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__arrayWithoutHoles__["a" /* default */])(arr) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__iterableToArray__["a" /* default */])(arr) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__nonIterableSpread__["a" /* default */])();
}

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _typeof;
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = determinant;

/**
 * Calculates the determinant of a mat4
 *
 * @param {mat4} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],

        b00 = a00 * a11 - a01 * a10,
        b01 = a00 * a12 - a02 * a10,
        b02 = a00 * a13 - a03 * a10,
        b03 = a01 * a12 - a02 * a11,
        b04 = a01 * a13 - a03 * a11,
        b05 = a02 * a13 - a03 * a12,
        b06 = a20 * a31 - a21 * a30,
        b07 = a20 * a32 - a22 * a30,
        b08 = a20 * a33 - a23 * a30,
        b09 = a21 * a32 - a22 * a31,
        b10 = a21 * a33 - a23 * a31,
        b11 = a22 * a33 - a23 * a32;

    // Calculate the determinant
    return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = fromQuat;

/**
 * Creates a matrix from a quaternion rotation.
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @returns {mat4} out
 */
function fromQuat(out, q) {
    var x = q[0], y = q[1], z = q[2], w = q[3],
        x2 = x + x,
        y2 = y + y,
        z2 = z + z,

        xx = x * x2,
        yx = y * x2,
        yy = y * y2,
        zx = z * x2,
        zy = z * y2,
        zz = z * z2,
        wx = w * x2,
        wy = w * y2,
        wz = w * z2;

    out[0] = 1 - yy - zz;
    out[1] = yx + wz;
    out[2] = zx - wy;
    out[3] = 0;

    out[4] = yx - wz;
    out[5] = 1 - xx - zz;
    out[6] = zy + wx;
    out[7] = 0;

    out[8] = zx + wy;
    out[9] = zy - wx;
    out[10] = 1 - xx - yy;
    out[11] = 0;

    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;

    return out;
};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = frustum;

/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */
function frustum(out, left, right, bottom, top, near, far) {
    var rl = 1 / (right - left),
        tb = 1 / (top - bottom),
        nf = 1 / (near - far);
    out[0] = (near * 2) * rl;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = (near * 2) * tb;
    out[6] = 0;
    out[7] = 0;
    out[8] = (right + left) * rl;
    out[9] = (top + bottom) * tb;
    out[10] = (far + near) * nf;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = (far * near * 2) * nf;
    out[15] = 0;
    return out;
};

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = identity;

/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */
function identity(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
};

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = invert;

/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function invert(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],

        b00 = a00 * a11 - a01 * a10,
        b01 = a00 * a12 - a02 * a10,
        b02 = a00 * a13 - a03 * a10,
        b03 = a01 * a12 - a02 * a11,
        b04 = a01 * a13 - a03 * a11,
        b05 = a02 * a13 - a03 * a12,
        b06 = a20 * a31 - a21 * a30,
        b07 = a20 * a32 - a22 * a30,
        b08 = a20 * a33 - a23 * a30,
        b09 = a21 * a32 - a22 * a31,
        b10 = a21 * a33 - a23 * a31,
        b11 = a22 * a33 - a23 * a32,

        // Calculate the determinant
        det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

    if (!det) { 
        return null; 
    }
    det = 1.0 / det;

    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
    out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
    out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
    out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
    out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
    out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
    out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
    out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
    out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
    out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

    return out;
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(36);

module.exports = lookAt;

/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */
function lookAt(out, eye, center, up) {
    var x0, x1, x2, y0, y1, y2, z0, z1, z2, len,
        eyex = eye[0],
        eyey = eye[1],
        eyez = eye[2],
        upx = up[0],
        upy = up[1],
        upz = up[2],
        centerx = center[0],
        centery = center[1],
        centerz = center[2];

    if (Math.abs(eyex - centerx) < 0.000001 &&
        Math.abs(eyey - centery) < 0.000001 &&
        Math.abs(eyez - centerz) < 0.000001) {
        return identity(out);
    }

    z0 = eyex - centerx;
    z1 = eyey - centery;
    z2 = eyez - centerz;

    len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
    z0 *= len;
    z1 *= len;
    z2 *= len;

    x0 = upy * z2 - upz * z1;
    x1 = upz * z0 - upx * z2;
    x2 = upx * z1 - upy * z0;
    len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
    if (!len) {
        x0 = 0;
        x1 = 0;
        x2 = 0;
    } else {
        len = 1 / len;
        x0 *= len;
        x1 *= len;
        x2 *= len;
    }

    y0 = z1 * x2 - z2 * x1;
    y1 = z2 * x0 - z0 * x2;
    y2 = z0 * x1 - z1 * x0;

    len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
    if (!len) {
        y0 = 0;
        y1 = 0;
        y2 = 0;
    } else {
        len = 1 / len;
        y0 *= len;
        y1 *= len;
        y2 *= len;
    }

    out[0] = x0;
    out[1] = y0;
    out[2] = z0;
    out[3] = 0;
    out[4] = x1;
    out[5] = y1;
    out[6] = z1;
    out[7] = 0;
    out[8] = x2;
    out[9] = y2;
    out[10] = z2;
    out[11] = 0;
    out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
    out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
    out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
    out[15] = 1;

    return out;
};

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = multiply;

/**
 * Multiplies two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function multiply(out, a, b) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

    // Cache only the current line of the second matrix
    var b0  = b[0], b1 = b[1], b2 = b[2], b3 = b[3];  
    out[0] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[1] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[2] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[3] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[4]; b1 = b[5]; b2 = b[6]; b3 = b[7];
    out[4] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[5] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[6] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[7] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[8]; b1 = b[9]; b2 = b[10]; b3 = b[11];
    out[8] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[9] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[10] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[11] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[12]; b1 = b[13]; b2 = b[14]; b3 = b[15];
    out[12] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[13] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[14] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[15] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
    return out;
};

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = ortho;

/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function ortho(out, left, right, bottom, top, near, far) {
    var lr = 1 / (left - right),
        bt = 1 / (bottom - top),
        nf = 1 / (near - far);
    out[0] = -2 * lr;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = -2 * bt;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 2 * nf;
    out[11] = 0;
    out[12] = (left + right) * lr;
    out[13] = (top + bottom) * bt;
    out[14] = (far + near) * nf;
    out[15] = 1;
    return out;
};

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = perspective;

/**
 * Generates a perspective projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function perspective(out, fovy, aspect, near, far) {
    var f = 1.0 / Math.tan(fovy / 2),
        nf = 1 / (near - far);
    out[0] = f / aspect;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = f;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = (far + near) * nf;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = (2 * far * near) * nf;
    out[15] = 0;
    return out;
};

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = rotate;

/**
 * Rotates a mat4 by the given angle
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */
function rotate(out, a, rad, axis) {
    var x = axis[0], y = axis[1], z = axis[2],
        len = Math.sqrt(x * x + y * y + z * z),
        s, c, t,
        a00, a01, a02, a03,
        a10, a11, a12, a13,
        a20, a21, a22, a23,
        b00, b01, b02,
        b10, b11, b12,
        b20, b21, b22;

    if (Math.abs(len) < 0.000001) { return null; }
    
    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;

    s = Math.sin(rad);
    c = Math.cos(rad);
    t = 1 - c;

    a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
    a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
    a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

    // Construct the elements of the rotation matrix
    b00 = x * x * t + c; b01 = y * x * t + z * s; b02 = z * x * t - y * s;
    b10 = x * y * t - z * s; b11 = y * y * t + c; b12 = z * y * t + x * s;
    b20 = x * z * t + y * s; b21 = y * z * t - x * s; b22 = z * z * t + c;

    // Perform rotation-specific matrix multiplication
    out[0] = a00 * b00 + a10 * b01 + a20 * b02;
    out[1] = a01 * b00 + a11 * b01 + a21 * b02;
    out[2] = a02 * b00 + a12 * b01 + a22 * b02;
    out[3] = a03 * b00 + a13 * b01 + a23 * b02;
    out[4] = a00 * b10 + a10 * b11 + a20 * b12;
    out[5] = a01 * b10 + a11 * b11 + a21 * b12;
    out[6] = a02 * b10 + a12 * b11 + a22 * b12;
    out[7] = a03 * b10 + a13 * b11 + a23 * b12;
    out[8] = a00 * b20 + a10 * b21 + a20 * b22;
    out[9] = a01 * b20 + a11 * b21 + a21 * b22;
    out[10] = a02 * b20 + a12 * b21 + a22 * b22;
    out[11] = a03 * b20 + a13 * b21 + a23 * b22;

    if (a !== out) { // If the source and destination differ, copy the unchanged last row
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }
    return out;
};

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = rotateX;

/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateX(out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7],
        a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];

    if (a !== out) { // If the source and destination differ, copy the unchanged rows
        out[0]  = a[0];
        out[1]  = a[1];
        out[2]  = a[2];
        out[3]  = a[3];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    out[4] = a10 * c + a20 * s;
    out[5] = a11 * c + a21 * s;
    out[6] = a12 * c + a22 * s;
    out[7] = a13 * c + a23 * s;
    out[8] = a20 * c - a10 * s;
    out[9] = a21 * c - a11 * s;
    out[10] = a22 * c - a12 * s;
    out[11] = a23 * c - a13 * s;
    return out;
};

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = rotateY;

/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateY(out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3],
        a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];

    if (a !== out) { // If the source and destination differ, copy the unchanged rows
        out[4]  = a[4];
        out[5]  = a[5];
        out[6]  = a[6];
        out[7]  = a[7];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    out[0] = a00 * c - a20 * s;
    out[1] = a01 * c - a21 * s;
    out[2] = a02 * c - a22 * s;
    out[3] = a03 * c - a23 * s;
    out[8] = a00 * s + a20 * c;
    out[9] = a01 * s + a21 * c;
    out[10] = a02 * s + a22 * c;
    out[11] = a03 * s + a23 * c;
    return out;
};

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = rotateZ;

/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateZ(out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3],
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7];

    if (a !== out) { // If the source and destination differ, copy the unchanged last row
        out[8]  = a[8];
        out[9]  = a[9];
        out[10] = a[10];
        out[11] = a[11];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    out[0] = a00 * c + a10 * s;
    out[1] = a01 * c + a11 * s;
    out[2] = a02 * c + a12 * s;
    out[3] = a03 * c + a13 * s;
    out[4] = a10 * c - a00 * s;
    out[5] = a11 * c - a01 * s;
    out[6] = a12 * c - a02 * s;
    out[7] = a13 * c - a03 * s;
    return out;
};

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = scale;

/**
 * Scales the mat4 by the dimensions in the given vec3
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/
function scale(out, a, v) {
    var x = v[0], y = v[1], z = v[2];

    out[0] = a[0] * x;
    out[1] = a[1] * x;
    out[2] = a[2] * x;
    out[3] = a[3] * x;
    out[4] = a[4] * y;
    out[5] = a[5] * y;
    out[6] = a[6] * y;
    out[7] = a[7] * y;
    out[8] = a[8] * z;
    out[9] = a[9] * z;
    out[10] = a[10] * z;
    out[11] = a[11] * z;
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
};

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = translate;

/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */
function translate(out, a, v) {
    var x = v[0], y = v[1], z = v[2],
        a00, a01, a02, a03,
        a10, a11, a12, a13,
        a20, a21, a22, a23;

    if (a === out) {
        out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
        out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
        out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
        out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
    } else {
        a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
        a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
        a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

        out[0] = a00; out[1] = a01; out[2] = a02; out[3] = a03;
        out[4] = a10; out[5] = a11; out[6] = a12; out[7] = a13;
        out[8] = a20; out[9] = a21; out[10] = a22; out[11] = a23;

        out[12] = a00 * x + a10 * y + a20 * z + a[12];
        out[13] = a01 * x + a11 * y + a21 * z + a[13];
        out[14] = a02 * x + a12 * y + a22 * z + a[14];
        out[15] = a03 * x + a13 * y + a23 * z + a[15];
    }

    return out;
};

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = transpose;

/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function transpose(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
        var a01 = a[1], a02 = a[2], a03 = a[3],
            a12 = a[6], a13 = a[7],
            a23 = a[11];

        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a01;
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a02;
        out[9] = a12;
        out[11] = a[14];
        out[12] = a03;
        out[13] = a13;
        out[14] = a23;
    } else {
        out[0] = a[0];
        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a[1];
        out[5] = a[5];
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a[2];
        out[9] = a[6];
        out[10] = a[10];
        out[11] = a[14];
        out[12] = a[3];
        out[13] = a[7];
        out[14] = a[11];
        out[15] = a[15];
    }
    
    return out;
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 * @function
 */
module.exports = __webpack_require__(75)


/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = calculateW

/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate W component of
 * @returns {quat} out
 */
function calculateW (out, a) {
  var x = a[0], y = a[1], z = a[2]

  out[0] = x
  out[1] = y
  out[2] = z
  out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z))
  return out
}


/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = conjugate

/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate conjugate of
 * @returns {quat} out
 */
function conjugate (out, a) {
  out[0] = -a[0]
  out[1] = -a[1]
  out[2] = -a[2]
  out[3] = a[3]
  return out
}


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Calculates the dot product of two quat's
 *
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */
module.exports = __webpack_require__(76)


/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = fromMat3

/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {mat3} m rotation matrix
 * @returns {quat} out
 * @function
 */
function fromMat3 (out, m) {
  // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
  // article "Quaternion Calculus and Fast Animation".
  var fTrace = m[0] + m[4] + m[8]
  var fRoot

  if (fTrace > 0.0) {
    // |w| > 1/2, may as well choose w > 1/2
    fRoot = Math.sqrt(fTrace + 1.0)  // 2w
    out[3] = 0.5 * fRoot
    fRoot = 0.5 / fRoot  // 1/(4w)
    out[0] = (m[5] - m[7]) * fRoot
    out[1] = (m[6] - m[2]) * fRoot
    out[2] = (m[1] - m[3]) * fRoot
  } else {
    // |w| <= 1/2
    var i = 0
    if (m[4] > m[0]) {
      i = 1
    }
    if (m[8] > m[i * 3 + i]) {
      i = 2
    }
    var j = (i + 1) % 3
    var k = (i + 2) % 3

    fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0)
    out[i] = 0.5 * fRoot
    fRoot = 0.5 / fRoot
    out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot
    out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot
    out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot
  }

  return out
}


/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = identity

/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */
function identity (out) {
  out[0] = 0
  out[1] = 0
  out[2] = 0
  out[3] = 1
  return out
}


/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = invert

/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate inverse of
 * @returns {quat} out
 */
function invert (out, a) {
  var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],
    dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3,
    invDot = dot ? 1.0 / dot : 0

  // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

  out[0] = -a0 * invDot
  out[1] = -a1 * invDot
  out[2] = -a2 * invDot
  out[3] = a3 * invDot
  return out
}


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Calculates the length of a quat
 *
 * @param {quat} a vector to calculate length of
 * @returns {Number} length of a
 * @function
 */
module.exports = __webpack_require__(77)


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 * @function
 */
module.exports = __webpack_require__(78)


/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = multiply

/**
 * Multiplies two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 */
function multiply (out, a, b) {
  var ax = a[0], ay = a[1], az = a[2], aw = a[3],
    bx = b[0], by = b[1], bz = b[2], bw = b[3]

  out[0] = ax * bw + aw * bx + ay * bz - az * by
  out[1] = ay * bw + aw * by + az * bx - ax * bz
  out[2] = az * bw + aw * bz + ax * by - ay * bx
  out[3] = aw * bw - ax * bx - ay * by - az * bz
  return out
}


/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = rotateX

/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateX (out, a, rad) {
  rad *= 0.5

  var ax = a[0], ay = a[1], az = a[2], aw = a[3],
    bx = Math.sin(rad), bw = Math.cos(rad)

  out[0] = ax * bw + aw * bx
  out[1] = ay * bw + az * bx
  out[2] = az * bw - ay * bx
  out[3] = aw * bw - ax * bx
  return out
}


/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = rotateY

/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateY (out, a, rad) {
  rad *= 0.5

  var ax = a[0], ay = a[1], az = a[2], aw = a[3],
    by = Math.sin(rad), bw = Math.cos(rad)

  out[0] = ax * bw - az * by
  out[1] = ay * bw + aw * by
  out[2] = az * bw + ax * by
  out[3] = aw * bw - ay * by
  return out
}


/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = rotateZ

/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateZ (out, a, rad) {
  rad *= 0.5

  var ax = a[0], ay = a[1], az = a[2], aw = a[3],
    bz = Math.sin(rad), bw = Math.cos(rad)

  out[0] = ax * bw + ay * bz
  out[1] = ay * bw - ax * bz
  out[2] = az * bw + aw * bz
  out[3] = aw * bw - az * bz
  return out
}


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var vecDot = __webpack_require__(14)
var vecCross = __webpack_require__(13)
var vecLength = __webpack_require__(15)
var vecNormalize = __webpack_require__(16)

var quatNormalize = __webpack_require__(11)
var quatAxisAngle = __webpack_require__(12)

module.exports = rotationTo

var tmpvec3 = [0, 0, 0]
var xUnitVec3 = [1, 0, 0]
var yUnitVec3 = [0, 1, 0]

/**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat} out the receiving quaternion.
 * @param {vec3} a the initial vector
 * @param {vec3} b the destination vector
 * @returns {quat} out
 */
function rotationTo (out, a, b) {
  var dot = vecDot(a, b)
  if (dot < -0.999999) {
    vecCross(tmpvec3, xUnitVec3, a)
    if (vecLength(tmpvec3) < 0.000001) {
      vecCross(tmpvec3, yUnitVec3, a)
    }
    vecNormalize(tmpvec3, tmpvec3)
    quatAxisAngle(out, tmpvec3, Math.PI)
    return out
  } else if (dot > 0.999999) {
    out[0] = 0
    out[1] = 0
    out[2] = 0
    out[3] = 1
    return out
  } else {
    vecCross(tmpvec3, a, b)
    out[0] = tmpvec3[0]
    out[1] = tmpvec3[1]
    out[2] = tmpvec3[2]
    out[3] = 1 + dot
    return quatNormalize(out, out)
  }
}


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {quat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */
module.exports = __webpack_require__(80)


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */
module.exports = __webpack_require__(81)


/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = slerp

/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 */
function slerp (out, a, b, t) {
  // benchmarks:
  //    http://jsperf.com/quaternion-slerp-implementations

  var ax = a[0], ay = a[1], az = a[2], aw = a[3],
    bx = b[0], by = b[1], bz = b[2], bw = b[3]

  var omega, cosom, sinom, scale0, scale1

  // calc cosine
  cosom = ax * bx + ay * by + az * bz + aw * bw
  // adjust signs (if necessary)
  if (cosom < 0.0) {
    cosom = -cosom
    bx = -bx
    by = -by
    bz = -bz
    bw = -bw
  }
  // calculate coefficients
  if ((1.0 - cosom) > 0.000001) {
    // standard case (slerp)
    omega = Math.acos(cosom)
    sinom = Math.sin(omega)
    scale0 = Math.sin((1.0 - t) * omega) / sinom
    scale1 = Math.sin(t * omega) / sinom
  } else {
    // "from" and "to" quaternions are very close
    //  ... so we can do a linear interpolation
    scale0 = 1.0 - t
    scale1 = t
  }
  // calculate final values
  out[0] = scale0 * ax + scale1 * bx
  out[1] = scale0 * ay + scale1 * by
  out[2] = scale0 * az + scale1 * bz
  out[3] = scale0 * aw + scale1 * bw

  return out
}


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Calculates the squared length of a quat
 *
 * @param {quat} a vector to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */
module.exports = __webpack_require__(82)


/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = cross

/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec3} out
 */
function cross(out, a, b) {
    var z = a[0] * b[1] - a[1] * b[0]
    out[0] = out[1] = 0
    out[2] = z
    return out
}

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = transformMat4

/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat4(out, a, m) {
    var x = a[0], 
        y = a[1]
    out[0] = m[0] * x + m[4] * y + m[12]
    out[1] = m[1] * x + m[5] * y + m[13]
    return out
}

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = angle

var fromValues = __webpack_require__(70)
var normalize = __webpack_require__(16)
var dot = __webpack_require__(14)

/**
 * Get the angle between two 3D vectors
 * @param {vec3} a The first operand
 * @param {vec3} b The second operand
 * @returns {Number} The angle in radians
 */
function angle(a, b) {
    var tempA = fromValues(a[0], a[1], a[2])
    var tempB = fromValues(b[0], b[1], b[2])
 
    normalize(tempA, tempA)
    normalize(tempB, tempB)
 
    var cosine = dot(tempA, tempB)

    if(cosine > 1.0){
        return 0
    } else {
        return Math.acos(cosine)
    }     
}


/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = fromValues;

/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */
function fromValues(x, y, z) {
    var out = new Float32Array(3)
    out[0] = x
    out[1] = y
    out[2] = z
    return out
}

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = rotateX;

/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateX(out, a, b, c){
    var p = [], r=[]
    //Translate point to the origin
    p[0] = a[0] - b[0]
    p[1] = a[1] - b[1]
    p[2] = a[2] - b[2]

    //perform rotation
    r[0] = p[0]
    r[1] = p[1]*Math.cos(c) - p[2]*Math.sin(c)
    r[2] = p[1]*Math.sin(c) + p[2]*Math.cos(c)

    //translate to correct position
    out[0] = r[0] + b[0]
    out[1] = r[1] + b[1]
    out[2] = r[2] + b[2]

    return out
}

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = rotateY;

/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateY(out, a, b, c){
    var p = [], r=[]
    //Translate point to the origin
    p[0] = a[0] - b[0]
    p[1] = a[1] - b[1]
    p[2] = a[2] - b[2]
  
    //perform rotation
    r[0] = p[2]*Math.sin(c) + p[0]*Math.cos(c)
    r[1] = p[1]
    r[2] = p[2]*Math.cos(c) - p[0]*Math.sin(c)
  
    //translate to correct position
    out[0] = r[0] + b[0]
    out[1] = r[1] + b[1]
    out[2] = r[2] + b[2]
  
    return out
}

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = rotateZ;

/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateZ(out, a, b, c){
    var p = [], r=[]
    //Translate point to the origin
    p[0] = a[0] - b[0]
    p[1] = a[1] - b[1]
    p[2] = a[2] - b[2]
  
    //perform rotation
    r[0] = p[0]*Math.cos(c) - p[1]*Math.sin(c)
    r[1] = p[0]*Math.sin(c) + p[1]*Math.cos(c)
    r[2] = p[2]
  
    //translate to correct position
    out[0] = r[0] + b[0]
    out[1] = r[1] + b[1]
    out[2] = r[2] + b[2]
  
    return out
}

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = transformMat4;

/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec3} out
 */
function transformMat4(out, a, m) {
    var x = a[0], y = a[1], z = a[2],
        w = m[3] * x + m[7] * y + m[11] * z + m[15]
    w = w || 1.0
    out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w
    out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w
    out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w
    return out
}

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = add

/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function add (out, a, b) {
  out[0] = a[0] + b[0]
  out[1] = a[1] + b[1]
  out[2] = a[2] + b[2]
  out[3] = a[3] + b[3]
  return out
}


/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = dot

/**
 * Calculates the dot product of two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot (a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3]
}


/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = length

/**
 * Calculates the length of a vec4
 *
 * @param {vec4} a vector to calculate length of
 * @returns {Number} length of a
 */
function length (a) {
  var x = a[0],
    y = a[1],
    z = a[2],
    w = a[3]
  return Math.sqrt(x * x + y * y + z * z + w * w)
}


/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = lerp

/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec4} out
 */
function lerp (out, a, b, t) {
  var ax = a[0],
    ay = a[1],
    az = a[2],
    aw = a[3]
  out[0] = ax + t * (b[0] - ax)
  out[1] = ay + t * (b[1] - ay)
  out[2] = az + t * (b[2] - az)
  out[3] = aw + t * (b[3] - aw)
  return out
}


/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = normalize

/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to normalize
 * @returns {vec4} out
 */
function normalize (out, a) {
  var x = a[0],
    y = a[1],
    z = a[2],
    w = a[3]
  var len = x * x + y * y + z * z + w * w
  if (len > 0) {
    len = 1 / Math.sqrt(len)
    out[0] = x * len
    out[1] = y * len
    out[2] = z * len
    out[3] = w * len
  }
  return out
}


/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = scale

/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */
function scale (out, a, b) {
  out[0] = a[0] * b
  out[1] = a[1] * b
  out[2] = a[2] * b
  out[3] = a[3] * b
  return out
}


/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = set

/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */
function set (out, x, y, z, w) {
  out[0] = x
  out[1] = y
  out[2] = z
  out[3] = w
  return out
}


/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = squaredLength

/**
 * Calculates the squared length of a vec4
 *
 * @param {vec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength (a) {
  var x = a[0],
    y = a[1],
    z = a[2],
    w = a[3]
  return x * x + y * y + z * z + w * w
}


/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = transformMat4

/**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec4} out
 */
function transformMat4 (out, a, m) {
  var x = a[0], y = a[1], z = a[2], w = a[3]
  out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w
  out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w
  out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w
  out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w
  return out
}


/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_common__ = __webpack_require__(2);




var Polygon = function () {
  function Polygon(points) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_classCallCheck__["a" /* default */])(this, Polygon);

    this.points = points;
    this.isClosed = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lib_common__["a" /* equals */])(this.points[this.points.length - 1], this.points[0]);
    Object.freeze(this);
  }

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_createClass__["a" /* default */])(Polygon, [{
    key: "getSignedArea",
    value: function getSignedArea() {
      var area = 0;
      this.forEachSegment(function (p1, p2) {
        area += (p1[0] + p2[0]) * (p1[1] - p2[1]);
      });
      return area / 2;
    }
  }, {
    key: "getArea",
    value: function getArea() {
      return Math.abs(this.getSignedArea());
    }
  }, {
    key: "getWindingDirection",
    value: function getWindingDirection() {
      return Math.sign(this.getSignedArea());
    }
  }, {
    key: "forEachSegment",
    value: function forEachSegment(visitor) {
      var length = this.points.length;

      for (var i = 0; i < length - 1; i++) {
        visitor(this.points[i], this.points[i + 1], i, i + 1);
      }

      if (this.isPolygon && !this.isClosed()) {
        visitor(this.points[length - 1], this.points[0], length - 1, 0);
      }
    }
  }]);

  return Polygon;
}();


//# sourceMappingURL=polygon.js.map

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__matrix4__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vector3__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__euler__ = __webpack_require__(17);






var Pose = function () {
  function Pose(_ref) {
    var _ref$x = _ref.x,
        x = _ref$x === void 0 ? 0 : _ref$x,
        _ref$y = _ref.y,
        y = _ref$y === void 0 ? 0 : _ref$y,
        _ref$z = _ref.z,
        z = _ref$z === void 0 ? 0 : _ref$z,
        _ref$roll = _ref.roll,
        roll = _ref$roll === void 0 ? 0 : _ref$roll,
        _ref$pitch = _ref.pitch,
        pitch = _ref$pitch === void 0 ? 0 : _ref$pitch,
        _ref$yaw = _ref.yaw,
        yaw = _ref$yaw === void 0 ? 0 : _ref$yaw,
        position = _ref.position,
        orientation = _ref.orientation;

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_classCallCheck__["a" /* default */])(this, Pose);

    if (Array.isArray(position) && position.length === 3) {
      this.position = new __WEBPACK_IMPORTED_MODULE_3__vector3__["a" /* default */](position);
    } else {
      this.position = new __WEBPACK_IMPORTED_MODULE_3__vector3__["a" /* default */](x, y, z);
    }

    if (Array.isArray(orientation) && orientation.length === 4) {
      this.orientation = new __WEBPACK_IMPORTED_MODULE_4__euler__["a" /* default */](orientation, orientation[3]);
    } else {
      this.orientation = new __WEBPACK_IMPORTED_MODULE_4__euler__["a" /* default */](roll, pitch, yaw, __WEBPACK_IMPORTED_MODULE_4__euler__["a" /* default */].RollPitchYaw);
    }
  }

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_createClass__["a" /* default */])(Pose, [{
    key: "getPosition",
    value: function getPosition() {
      return this.position;
    }
  }, {
    key: "getOrientation",
    value: function getOrientation() {
      return this.orientation;
    }
  }, {
    key: "equals",
    value: function equals(pose) {
      if (!pose) {
        return false;
      }

      return this.position.equals(pose.position) && this.orientation.equals(pose.orientation);
    }
  }, {
    key: "exactEquals",
    value: function exactEquals(pose) {
      if (!pose) {
        return false;
      }

      return this.position.exactEquals(pose.position) && this.orientation.exactEquals(pose.orientation);
    }
  }, {
    key: "getTransformationMatrix",
    value: function getTransformationMatrix() {
      var sr = Math.sin(this.roll);
      var sp = Math.sin(this.pitch);
      var sw = Math.sin(this.yaw);
      var cr = Math.cos(this.roll);
      var cp = Math.cos(this.pitch);
      var cw = Math.cos(this.yaw);
      var matrix = new __WEBPACK_IMPORTED_MODULE_2__matrix4__["a" /* default */]().setRowMajor(cw * cp, -sw * cr + cw * sp * sr, sw * sr + cw * sp * cr, this.x, sw * cp, cw * cr + sw * sp * sr, -cw * sr + sw * sp * cr, this.y, -sp, cp * sr, cp * cr, this.z, 0, 0, 0, 1);
      return matrix;
    }
  }, {
    key: "getTransformationMatrixFromPose",
    value: function getTransformationMatrixFromPose(pose) {
      return new __WEBPACK_IMPORTED_MODULE_2__matrix4__["a" /* default */]().multiplyRight(this.getTransformationMatrix()).multiplyRight(pose.getTransformationMatrix().invert());
    }
  }, {
    key: "getTransformationMatrixToPose",
    value: function getTransformationMatrixToPose(pose) {
      return new __WEBPACK_IMPORTED_MODULE_2__matrix4__["a" /* default */]().multiplyRight(pose.getTransformationMatrix()).multiplyRight(this.getTransformationMatrix().invert());
    }
  }, {
    key: "x",
    get: function get() {
      return this.position.x;
    },
    set: function set(value) {
      return this.position.x = value;
    }
  }, {
    key: "y",
    get: function get() {
      return this.position.y;
    },
    set: function set(value) {
      return this.position.y = value;
    }
  }, {
    key: "z",
    get: function get() {
      return this.position.z;
    },
    set: function set(value) {
      return this.position.z = value;
    }
  }, {
    key: "roll",
    get: function get() {
      return this.orientation.roll;
    },
    set: function set(value) {
      return this.orientation.roll = value;
    }
  }, {
    key: "pitch",
    get: function get() {
      return this.orientation.pitch;
    },
    set: function set(value) {
      return this.orientation.pitch = value;
    }
  }, {
    key: "yaw",
    get: function get() {
      return this.orientation.yaw;
    },
    set: function set(value) {
      return this.orientation.yaw = value;
    }
  }]);

  return Pose;
}();


//# sourceMappingURL=pose.js.map

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_slicedToArray__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_common__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vector3__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_gl_vec3_length__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_gl_vec3_length___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_gl_vec3_length__);







var EPSILON = 0.000001;
var EARTH_RADIUS_METERS = 6.371e6;

var SphericalCoordinates = function () {
  function SphericalCoordinates() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        phi = _ref.phi,
        theta = _ref.theta,
        radius = _ref.radius,
        bearing = _ref.bearing,
        pitch = _ref.pitch,
        altitude = _ref.altitude,
        _ref$radiusScale = _ref.radiusScale,
        radiusScale = _ref$radiusScale === void 0 ? EARTH_RADIUS_METERS : _ref$radiusScale;

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_classCallCheck__["a" /* default */])(this, SphericalCoordinates);

    if (arguments.length === 0) {
      this.phi = 0;
      this.theta = 0;
      this.radius = 1;
    } else if (Number.isFinite(phi) || Number.isFinite(theta)) {
      this.phi = phi || 0;
      this.theta = theta || 0;
    } else if (Number.isFinite(bearing) || Number.isFinite(pitch)) {
      this.bearing = bearing || 0;
      this.pitch = pitch || 0;
    }

    this.radius = radius || 1;
    this.radiusScale = radiusScale || 1;
    this.check();
  }

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_createClass__["a" /* default */])(SphericalCoordinates, [{
    key: "toString",
    value: function toString() {
      return this.formatString(__WEBPACK_IMPORTED_MODULE_3__lib_common__["d" /* config */]);
    }
  }, {
    key: "formatString",
    value: function formatString(_ref2) {
      var printTypes = _ref2.printTypes,
          printDegrees = _ref2.printDegrees;
      var f = __WEBPACK_IMPORTED_MODULE_3__lib_common__["e" /* formatValue */];
      return "".concat(printTypes ? 'Spherical' : '', "[rho:").concat(f(this.radius), ",theta:").concat(f(this.theta), ",phi:").concat(f(this.phi), "]");
    }
  }, {
    key: "equals",
    value: function equals(other) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_common__["a" /* equals */])(this.radius, other.radius) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_common__["a" /* equals */])(this.theta, other.theta) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_common__["a" /* equals */])(this.phi, other.phi);
    }
  }, {
    key: "exactEquals",
    value: function exactEquals(other) {
      return this.radius === other.radius && this.theta === other.theta && this.phi === other.phi;
    }
  }, {
    key: "set",
    value: function set(radius, phi, theta) {
      this.radius = radius;
      this.phi = phi;
      this.theta = theta;
      return this.check();
    }
  }, {
    key: "clone",
    value: function clone() {
      return new this.constructor().copy(this);
    }
  }, {
    key: "copy",
    value: function copy(other) {
      this.radius = other.radius;
      this.phi = other.phi;
      this.theta = other.theta;
      return this.check();
    }
  }, {
    key: "fromLngLatZ",
    value: function fromLngLatZ(_ref3) {
      var _ref4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_slicedToArray__["a" /* default */])(_ref3, 3),
          lng = _ref4[0],
          lat = _ref4[1],
          z = _ref4[2];

      this.radius = 1 + z / this.radiusScale;
      this.phi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_common__["f" /* radians */])(lat);
      this.theta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_common__["f" /* radians */])(lng);
    }
  }, {
    key: "fromVector3",
    value: function fromVector3(v) {
      this.radius = __WEBPACK_IMPORTED_MODULE_5_gl_vec3_length___default()(v);

      if (this.radius === 0) {
        this.theta = 0;
        this.phi = 0;
      } else {
        this.theta = Math.atan2(v[0], v[1]);
        this.phi = Math.acos(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_common__["b" /* clamp */])(v[2] / this.radius, -1, 1));
      }

      return this.check();
    }
  }, {
    key: "toVector3",
    value: function toVector3() {
      return new __WEBPACK_IMPORTED_MODULE_4__vector3__["a" /* default */](0, 0, this.radius).rotateX({
        radians: this.theta
      }).rotateZ({
        radians: this.phi
      });
    }
  }, {
    key: "makeSafe",
    value: function makeSafe() {
      this.phi = Math.max(EPSILON, Math.min(Math.PI - EPSILON, this.phi));
    }
  }, {
    key: "check",
    value: function check() {
      if (!Number.isFinite(this.phi) || !Number.isFinite(this.theta) || !(this.radius > 0)) {
        throw new Error('SphericalCoordinates: some fields set to invalid numbers');
      }

      return this;
    }
  }, {
    key: "bearing",
    get: function get() {
      return 180 - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_common__["g" /* degrees */])(this.phi);
    },
    set: function set(v) {
      this.phi = Math.PI - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_common__["f" /* radians */])(v);
    }
  }, {
    key: "pitch",
    get: function get() {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_common__["g" /* degrees */])(this.theta);
    },
    set: function set(v) {
      this.theta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_common__["f" /* radians */])(v);
    }
  }, {
    key: "longitude",
    get: function get() {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_common__["g" /* degrees */])(this.phi);
    }
  }, {
    key: "latitude",
    get: function get() {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_common__["g" /* degrees */])(this.theta);
    }
  }, {
    key: "lng",
    get: function get() {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_common__["g" /* degrees */])(this.phi);
    }
  }, {
    key: "lat",
    get: function get() {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lib_common__["g" /* degrees */])(this.theta);
    }
  }, {
    key: "z",
    get: function get() {
      return (this.radius - 1) * this.radiusScale;
    }
  }]);

  return SphericalCoordinates;
}();


//# sourceMappingURL=spherical-coordinates.js.map

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_math_gl__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vec3_js__ = __webpack_require__(22);





function rotate(x, y, z) {
  let mat = new __WEBPACK_IMPORTED_MODULE_0_math_gl__["a" /* Matrix4 */]();
  mat.rotateX(x);
  mat.rotateY(y);
  mat.rotateZ(z);
  return mat;
}

function getBestRotation(vertices) {
  let maxDist = 0;
  let rot = [0, 0, 0];
  const step = 0.1;
  const twoPi = Math.PI * 2;
  const pi = Math.PI;

  for (let x = 0; x < pi; x += step) {
    for (let y = 0; y < pi; y += step) {
      for (let z = 0; z < pi; z += step) {
        const m = rotate(x, y, z);
        const transformedVertices = vertices.map(vArray => {
          return vArray.map(v => m.transformVector(v));
        });
        const flattenedVertices = [];
        transformedVertices.forEach((v, i) => {
          v.forEach((p, j) => {
            flattenedVertices.push({
              value: p,
              index: i,
              valid: true
            });
          });
        });

        let acum = 0;
        for (let w = 0; w < transformedVertices.length; w++) {
          let elem = transformedVertices[w];
          elem.forEach((v, n) => {
            let dist = Infinity;
            let index = -1;
            // we've already used this vertex and should be remooved
            if (!flattenedVertices[w * elem.length + n].valid) {
              return;
            }
            flattenedVertices.forEach((f, flatIndex) => {
              if (f.index > w && f.valid) {
                let distVA = __WEBPACK_IMPORTED_MODULE_1__vec3_js__["a" /* vec3_dist */](v, f.value);
                if (distVA < dist) {
                  dist = distVA;
                  index = flatIndex;
                }
              }
            });
            if (index < 0) {
              return;
            }
            acum += dist;
            flattenedVertices[index].valid = false;
          });
        }

        if (maxDist < acum) {
          maxDist = acum;
          rot = [x, y, z];
        }
      }
    }
  }

  const mAns = rotate(...rot);
  const iAns = vertices[0].map(v => mAns.transformVector(v));
  return iAns.flat();
}

onmessage = (e) => {
  const [vertices, mat] = e.data;
  const [row1, row2, row3] = mat;
  const verts = [];
  for (let i = 0; i < row1.length; i+=3) {
    let m = new __WEBPACK_IMPORTED_MODULE_0_math_gl__["a" /* Matrix4 */]().set(
      row1[i], row1[i+1], row1[i+2], 0,
      row2[i], row2[i+1], row2[i+2], 0,
      row3[i], row3[i+1], row3[i+2], 0,
      0, 0, 0, 1
    );
    let transformedVertices = [];
    for (let j = 0; j < vertices.length; j+=3) {
      const v = m.transformVector([vertices[i], vertices[i + 1], vertices[i + 2]]);
      transformedVertices.push(v);
    }
    verts.push(transformedVertices);
  }
  let transformedVertices = [];
  for (let i = 0; i < vertices.length; i+=3) {
    const v = [vertices[i], vertices[i + 1], vertices[i + 2]];
    transformedVertices.push(v);
  }
  verts.unshift(transformedVertices);

  const ans = getBestRotation(verts);
  postMessage(ans);
};



/***/ })
/******/ ]);
//# sourceMappingURL=5a2d114fae3a8620b4d4.worker.js.map