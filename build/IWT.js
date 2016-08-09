(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jQuery"));
	else if(typeof define === 'function' && define.amd)
		define("IWT", ["jQuery"], factory);
	else if(typeof exports === 'object')
		exports["IWT"] = factory(require("jQuery"));
	else
		root["IWT"] = factory(root["jQuery"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _scripts = __webpack_require__(1);
	
	var _scripts2 = _interopRequireDefault(_scripts);
	
	var _form = __webpack_require__(5);
	
	var _form2 = _interopRequireDefault(_form);
	
	var _table = __webpack_require__(6);
	
	var _table2 = _interopRequireDefault(_table);
	
	var _accordion = __webpack_require__(8);
	
	var _accordion2 = _interopRequireDefault(_accordion);
	
	var _carousel = __webpack_require__(14);
	
	var _carousel2 = _interopRequireDefault(_carousel);
	
	var _cookiebar = __webpack_require__(20);
	
	var _cookiebar2 = _interopRequireDefault(_cookiebar);
	
	var _dialog = __webpack_require__(23);
	
	var _dialog2 = _interopRequireDefault(_dialog);
	
	var _skiplinks = __webpack_require__(27);
	
	var _skiplinks2 = _interopRequireDefault(_skiplinks);
	
	var _packery = __webpack_require__(31);
	
	var _packery2 = _interopRequireDefault(_packery);
	
	var _treeview = __webpack_require__(42);
	
	var _treeview2 = _interopRequireDefault(_treeview);
	
	var _offcanvas = __webpack_require__(43);
	
	var _offcanvas2 = _interopRequireDefault(_offcanvas);
	
	var _header = __webpack_require__(47);
	
	var _header2 = _interopRequireDefault(_header);
	
	var _megamenu = __webpack_require__(49);
	
	var _megamenu2 = _interopRequireDefault(_megamenu);
	
	var _share = __webpack_require__(51);
	
	var _share2 = _interopRequireDefault(_share);
	
	var _scrolltop = __webpack_require__(52);
	
	var _scrolltop2 = _interopRequireDefault(_scrolltop);
	
	var _tooltip = __webpack_require__(53);
	
	var _tooltip2 = _interopRequireDefault(_tooltip);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var __exports = {
		IwtTable: _table2['default'],
		IwtAccordion: _accordion2['default'],
		IwtCarousel: _carousel2['default'],
		IwtCookiebar: _cookiebar2['default'],
		IwtDialog: _dialog2['default'],
		IwtPackery: _packery2['default'],
		IwtTreeview: _treeview2['default'],
		IwtSkiplinks: _skiplinks2['default'],
		IwtOffcanvas: _offcanvas2['default'],
		IwtHeadroom: _header2['default'],
		IwtMegamenu: _megamenu2['default'],
		IwtTooltip: _scrolltop2['default'],
		IwtScripts: _scripts2['default'],
		IwtScrolltop: _tooltip2['default'],
		IwtShare: _share2['default'],
		IwtForm: _form2['default']
	};
	
	exports['default'] = __exports;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	__webpack_require__(3);

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	// Avoid `console` errors in browsers that lack a console.
	(function () {
	  var method;
	  var noop = function noop() {};
	  var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
	  var length = methods.length;
	  var console = window.console = window.console || {};
	
	  while (length--) {
	    method = methods[length];
	
	    // Only stub undefined methods.
	    if (!console[method]) {
	      console[method] = noop;
	    }
	  }
	})();

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jquery = __webpack_require__(4);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	(0, _jquery2['default'])(document).ready(function () {
	  var $header = (0, _jquery2['default'])('header');
	  (0, _jquery2['default'])('.js-scrollTo').on('click', function (event) {
	    var offset = (0, _jquery2['default'])(_jquery2['default'].attr(this, 'href')).offset();
	    (0, _jquery2['default'])('html, body').animate({
	      scrollTop: (offset ? offset.top : 0) - ($header.length ? $header.height() : 0)
	    }, 250);
	    event.preventDefault();
	  });
	});

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jquery = __webpack_require__(4);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	(0, _jquery2['default'])(document).ready(function () {
	  (0, _jquery2['default'])(':radio, :checkbox').on('change', function () {
	    if ((0, _jquery2['default'])(this).is(':radio')) {
	      (0, _jquery2['default'])(this).closest('.Form-field').find('.Form-label.is-checked').removeClass('is-checked');
	    }
	    if ((0, _jquery2['default'])(this).is(':checked')) {
	      (0, _jquery2['default'])(this).closest('.Form-label').addClass('is-checked');
	    } else {
	      (0, _jquery2['default'])(this).closest('.Form-label').removeClass('is-checked');
	    }
	  });
	});

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jquery = __webpack_require__(4);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _throttle = __webpack_require__(7);
	
	var _throttle2 = _interopRequireDefault(_throttle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var defaultOpts = {
	  responsiveTableSelector: '.js-tableFlip',
	  responsiveTableClass: 'Table--flip',
	  responsiveTableBreakpoint: 768
	};
	
	var initResponsiveTables = function initResponsiveTables(opts) {
	  (0, _jquery2['default'])(document).ready(function () {
	    if ((0, _jquery2['default'])(opts.responsiveTableSelector).length > 0) {
	      (0, _jquery2['default'])(window).resize((0, _throttle2['default'])(250, function () {
	        if ((0, _jquery2['default'])(window).width() < opts.responsiveTableBreakpoint) {
	          (0, _jquery2['default'])(opts.responsiveTableSelector).addClass(opts.responsiveTableClass);
	        } else {
	          (0, _jquery2['default'])(opts.responsiveTableSelector).removeClass(opts.responsiveTableClass);
	        }
	      }));
	    }
	  });
	};
	
	initResponsiveTables(defaultOpts);
	
	exports['default'] = { defaultOpts: defaultOpts, initResponsiveTables: initResponsiveTables };
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	/* eslint-disable no-undefined,no-param-reassign,no-shadow */
	
	/**
	 * Throttle execution of a function. Especially useful for rate limiting
	 * execution of handlers on events like resize and scroll.
	 *
	 * @param  {Number}    delay          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
	 * @param  {Boolean}   noTrailing     Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
	 *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
	 *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
	 *                                    the internal counter is reset)
	 * @param  {Function}  callback       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
	 *                                    to `callback` when the throttled-function is executed.
	 * @param  {Boolean}   debounceMode   If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
	 *                                    schedule `callback` to execute after `delay` ms.
	 *
	 * @return {Function}  A new, throttled, function.
	 */
	module.exports = function (delay, noTrailing, callback, debounceMode) {
	
		// After wrapper has stopped being called, this timeout ensures that
		// `callback` is executed at the proper times in `throttle` and `end`
		// debounce modes.
		var timeoutID;
	
		// Keep track of the last time `callback` was executed.
		var lastExec = 0;
	
		// `noTrailing` defaults to falsy.
		if (typeof noTrailing !== 'boolean') {
			debounceMode = callback;
			callback = noTrailing;
			noTrailing = undefined;
		}
	
		// The `wrapper` function encapsulates all of the throttling / debouncing
		// functionality and when executed will limit the rate at which `callback`
		// is executed.
		function wrapper() {
	
			var self = this;
			var elapsed = Number(new Date()) - lastExec;
			var args = arguments;
	
			// Execute `callback` and update the `lastExec` timestamp.
			function exec() {
				lastExec = Number(new Date());
				callback.apply(self, args);
			}
	
			// If `debounceMode` is true (at begin) this is used to clear the flag
			// to allow future `callback` executions.
			function clear() {
				timeoutID = undefined;
			}
	
			if (debounceMode && !timeoutID) {
				// Since `wrapper` is being called for the first time and
				// `debounceMode` is true (at begin), execute `callback`.
				exec();
			}
	
			// Clear any existing timeout.
			if (timeoutID) {
				clearTimeout(timeoutID);
			}
	
			if (debounceMode === undefined && elapsed > delay) {
				// In throttle mode, if `delay` time has been exceeded, execute
				// `callback`.
				exec();
			} else if (noTrailing !== true) {
				// In trailing throttle mode, since `delay` time has not been
				// exceeded, schedule `callback` to execute `delay` ms after most
				// recent execution.
				//
				// If `debounceMode` is true (at begin), schedule `clear` to execute
				// after `delay` ms.
				//
				// If `debounceMode` is false (at end), schedule `callback` to
				// execute after `delay` ms.
				timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
			}
		}
	
		// Return the wrapper function.
		return wrapper;
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _frAccordion = __webpack_require__(9);
	
	var _frAccordion2 = _interopRequireDefault(_frAccordion);
	
	var _accordion = __webpack_require__(10);
	
	var _accordion2 = _interopRequireDefault(_accordion);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/* eslint-enable */
	
	var accordion = (0, _frAccordion2['default'])({
		// String - Use header id on element to tie each accordion panel to its header - see panelIdPrefix
		headerIdPrefix: 'accordion-header',
		// String - Use panel id on element to tie each accordion header to its panel - see headerIdPrefix
		panelIdPrefix: 'accordion-panel',
		// Boolean - If set to false, all accordion panels will be closed on init()
		firstPanelsOpenByDefault: false,
		// Boolean - If set to false, each accordion instance will only allow a single panel to be open at a time
		multiselectable: false,
		// String - Class name that will be added to the selector when the component has been initialised
		readyClass: 'fr-accordion--is-ready'
	});
	
	/* eslint-disable no-unused-vars */
	
	exports['default'] = { accordion: accordion, Fraccordion: _frAccordion2['default'] };
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * @param {object} options Object containing configuration overrides
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var Fraccordion = function Fraccordion() {
		var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
		var _ref$selector = _ref.selector;
		var selector = _ref$selector === undefined ? '.js-fr-accordion' : _ref$selector;
		var _ref$headerSelector = _ref.headerSelector;
		var headerSelector = _ref$headerSelector === undefined ? '.js-fr-accordion__header' : _ref$headerSelector;
		var _ref$headerIdPrefix = _ref.headerIdPrefix;
		var headerIdPrefix = _ref$headerIdPrefix === undefined ? 'accordion-header' : _ref$headerIdPrefix;
		var _ref$panelSelector = _ref.panelSelector;
		var panelSelector = _ref$panelSelector === undefined ? '.js-fr-accordion__panel' : _ref$panelSelector;
		var _ref$panelIdPrefix = _ref.panelIdPrefix;
		var panelIdPrefix = _ref$panelIdPrefix === undefined ? 'accordion-panel' : _ref$panelIdPrefix;
		var _ref$firstPanelsOpenB = _ref.firstPanelsOpenByDefault;
		var firstPanelsOpenByDefault = _ref$firstPanelsOpenB === undefined ? true : _ref$firstPanelsOpenB;
		var _ref$multiselectable = _ref.multiselectable;
		var multiselectable = _ref$multiselectable === undefined ? true : _ref$multiselectable;
		var _ref$readyClass = _ref.readyClass;
		var readyClass = _ref$readyClass === undefined ? 'fr-accordion--is-ready' : _ref$readyClass;
		var _ref$transitionLength = _ref.transitionLength;
		var transitionLength = _ref$transitionLength === undefined ? 250 : _ref$transitionLength;
	
	
		// CONSTANTS
		var doc = document;
		var docEl = doc.documentElement;
		var _q = function _q(el) {
			var ctx = arguments.length <= 1 || arguments[1] === undefined ? doc : arguments[1];
			return [].slice.call(ctx.querySelectorAll(el));
		};
	
		// SUPPORTS
		if (!('querySelector' in doc) || !('addEventListener' in window) || !docEl.classList) return;
	
		// SETUP
		// set accordion element NodeLists
		var accordionContainers = _q(selector);
	
		// A11Y
		function _addA11y(accordionContainer) {
			// get accordion elements
			var accordionHeaders = _q(headerSelector, accordionContainer);
			var accordionPanels = _q(panelSelector, accordionContainer);
	
			// add relevant roles and properties
			accordionContainer.setAttribute('role', 'tablist');
			accordionContainer.setAttribute('aria-multiselectable', multiselectable);
	
			accordionHeaders.forEach(function (accordionHeader) {
				accordionHeader.setAttribute('role', 'tab');
				accordionHeader.setAttribute('aria-controls', accordionHeader.id.replace(headerIdPrefix, panelIdPrefix));
				// make headers focusable, this is preferred over wrapping contents in native button element
				accordionHeader.setAttribute('tabindex', 0);
			});
	
			accordionPanels.forEach(function (accordionPanel) {
				accordionPanel.setAttribute('role', 'tabpanel');
				accordionPanel.setAttribute('aria-labelledby', accordionPanel.id.replace(panelIdPrefix, headerIdPrefix));
				// make tabpanel focusable
				accordionPanel.setAttribute('tabindex', 0);
			});
		}
		function _removeA11y(accordionContainer) {
			// get accordion elements
			var accordionHeaders = _q(headerSelector, accordionContainer);
			var accordionPanels = _q(panelSelector, accordionContainer);
	
			// remove roles and properties
			accordionContainer.removeAttribute('role');
			accordionContainer.removeAttribute('aria-multiselectable');
	
			accordionHeaders.forEach(function (accordionHeader) {
				accordionHeader.removeAttribute('role');
				accordionHeader.removeAttribute('aria-controls');
				accordionHeader.removeAttribute('aria-selected');
				accordionHeader.removeAttribute('aria-expanded');
				// remove headers focusablility
				accordionHeader.removeAttribute('tabindex');
			});
	
			accordionPanels.forEach(function (accordionPanel) {
				accordionPanel.removeAttribute('role');
				accordionPanel.removeAttribute('aria-labelledby');
				accordionPanel.removeAttribute('aria-hidden');
				// remove tabpanel focusablibility
				accordionPanel.removeAttribute('tabindex');
			});
		}
	
		//	UTILS
		function _getPanelHeight(panel) {
			//	set auto height and read offsetHeight
			panel.style.height = 'auto';
			var height = panel.offsetHeight;
			//	remove style
			panel.style.height = '';
			return height;
		}
		function _setPanelHeight(panel) {
			//	get panel height
			var panelHeight = _getPanelHeight(panel);
			//	recalc style and layout
			panel.getBoundingClientRect();
			//	set height on panel, reset to 'auto' on transition complete
			panel.style.height = panelHeight + 'px';
			setTimeout(function () {
				panel.style.transition = 'none';
				panel.style.height = 'auto';
				//	recalc style and layout
				panel.getBoundingClientRect();
				panel.style.transition = '';
			}, transitionLength);
		}
		function _unsetPanelHeight(panel) {
			//	get panel height
			var panelHeight = _getPanelHeight(panel);
			//	set panel height from 'auto' to px
			panel.style.height = panelHeight + 'px';
			//	recalc style and layout
			panel.getBoundingClientRect();
			//	reset height
			panel.style.height = 0;
		}
	
		// ACTIONS
		function _hideAllPanels(accordionContainer) {
			// get accordion elements
			var siblingHeaders = _q(headerSelector, accordionContainer);
			var siblingPanels = _q(panelSelector, accordionContainer);
	
			// set inactives
			siblingHeaders.forEach(function (header) {
				header.setAttribute('tabindex', -1);
				header.setAttribute('aria-selected', 'false');
				header.setAttribute('aria-expanded', 'false');
			});
			siblingPanels.forEach(function (panel) {
				if (panel.getAttribute('aria-hidden') === 'false') _unsetPanelHeight(panel);
				//	toggle aria-hidden
				panel.setAttribute('aria-hidden', 'true');
			});
		}
		function _hidePanel(target) {
			//	get panel
			var activePanel = doc.getElementById(target.getAttribute('aria-controls'));
			target.setAttribute('aria-selected', 'false');
			target.setAttribute('aria-expanded', 'false');
			//	toggle aria-hidden
			_unsetPanelHeight(activePanel);
			activePanel.setAttribute('aria-hidden', 'true');
		}
		function _showPanel(target) {
			//	get panel
			var activePanel = doc.getElementById(target.getAttribute('aria-controls'));
			//	set attributes on header
			target.setAttribute('tabindex', 0);
			target.setAttribute('aria-selected', 'true');
			target.setAttribute('aria-expanded', 'true');
			//	toggle aria-hidden and set height on panel
			_setPanelHeight(activePanel);
			activePanel.setAttribute('aria-hidden', 'false');
			setTimeout(function () {
				return _bindAccordionEvents(target.parentNode);
			}, transitionLength);
		}
		function _togglePanel(target) {
			// get context of accordion container and its children
			var thisContainer = target.parentNode;
			// close target panel if already active
			if (target.getAttribute('aria-selected') === 'true') {
				_hidePanel(target);
				return;
			}
			// if not multiselectable hide all, then show target
			if (!multiselectable) _hideAllPanels(thisContainer);
	
			_showPanel(target);
			if (transitionLength > 0) _unbindAccordionEvents(thisContainer);
		}
		function _giveHeaderFocus(headerSet, i) {
			// remove focusability from inactives
			headerSet.forEach(function (header) {
				header.setAttribute('tabindex', -1);
			});
			// set active focus
			headerSet[i].setAttribute('tabindex', 0);
			headerSet[i].focus();
		}
	
		//	EVENTS
		function _eventHeaderClick(e) {
			_togglePanel(e.currentTarget);
		}
		function _eventHeaderKeydown(e) {
			// collect header targets, and their prev/next
			var currentHeader = e.currentTarget;
			var isModifierKey = e.metaKey || e.altKey;
			// get context of accordion container and its children
			var thisContainer = currentHeader.parentNode;
			var theseHeaders = _q(headerSelector, thisContainer);
			var currentHeaderIndex = [].indexOf.call(theseHeaders, currentHeader);
	
			// don't catch key events when ⌘ or Alt modifier is present
			if (isModifierKey) return;
	
			// catch enter/space, left/right and up/down arrow key events
			// if new panel show it, if next/prev move focus
			switch (e.keyCode) {
				case 13:
				case 32:
					_togglePanel(currentHeader);
					e.preventDefault();
					break;
				case 37:
				case 38:
					{
						var previousHeaderIndex = currentHeaderIndex === 0 ? theseHeaders.length - 1 : currentHeaderIndex - 1;
						_giveHeaderFocus(theseHeaders, previousHeaderIndex);
						e.preventDefault();
						break;
					}
				case 39:
				case 40:
					{
						var nextHeaderIndex = currentHeaderIndex < theseHeaders.length - 1 ? currentHeaderIndex + 1 : 0;
						_giveHeaderFocus(theseHeaders, nextHeaderIndex);
						e.preventDefault();
						break;
					}
				default:
					break;
			}
		}
	
		//	BIND EVENTS
		function _bindAccordionEvents(accordionContainer) {
			var accordionHeaders = _q(headerSelector, accordionContainer);
			// bind all accordion header click and keydown events
			accordionHeaders.forEach(function (accordionHeader) {
				accordionHeader.addEventListener('click', _eventHeaderClick);
				accordionHeader.addEventListener('keydown', _eventHeaderKeydown);
			});
		}
	
		//	UNBIND EVENTS
		function _unbindAccordionEvents(accordionContainer) {
			var accordionHeaders = _q(headerSelector, accordionContainer);
			// unbind all accordion header click and keydown events
			accordionHeaders.forEach(function (accordionHeader) {
				accordionHeader.removeEventListener('click', _eventHeaderClick);
				accordionHeader.removeEventListener('keydown', _eventHeaderKeydown);
			});
		}
	
		// DESTROY
		function destroy() {
			accordionContainers.forEach(function (accordionContainer) {
				_removeA11y(accordionContainer);
				_unbindAccordionEvents(accordionContainer);
				accordionContainer.classList.remove(readyClass);
			});
		}
	
		// INIT
		function init() {
			if (accordionContainers.length) {
				accordionContainers.forEach(function (accordionContainer) {
					_addA11y(accordionContainer);
					_bindAccordionEvents(accordionContainer);
					_hideAllPanels(accordionContainer);
					// set all first accordion panels active on init if required (default behaviour)
					// otherwise make sure first accordion header for each is focusable
					if (firstPanelsOpenByDefault) {
						_togglePanel(accordionContainer.querySelector(headerSelector));
					} else {
						accordionContainer.querySelector(headerSelector).setAttribute('tabindex', 0);
					}
					// set ready style hook
					accordionContainer.classList.add(readyClass);
				});
			}
		}
		init();
	
		// REVEAL API
		return {
			init: init,
			destroy: destroy
		};
	};
	
	// module exports
	exports['default'] = Fraccordion;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jquery = __webpack_require__(4);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _owlCarousel = __webpack_require__(15);
	
	var _owlCarousel2 = _interopRequireDefault(_owlCarousel);
	
	var _owl = __webpack_require__(18);
	
	var _owl2 = _interopRequireDefault(_owl);
	
	var _a11y = __webpack_require__(19);
	
	var _a11y2 = _interopRequireDefault(_a11y);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/* eslint-enable no-unused-vars */
	
	var opts = {
	  owlPrev: '.owl-prev',
	  owlNext: '.owl-next',
	  owlItem: '.owl-item',
	  jsSelector: '.owl-carousel',
	  owlOpts: {
	    nav: false,
	    // navText: ['precedente', 'successivo'],
	    items: 3,
	    dots: false,
	    loop: false,
	    margin: 16,
	    mouseDrag: true,
	    URLhashListener: true,
	    startPosition: 'URLHash',
	    responsive: {
	      0: {
	        items: 1
	      },
	      768: {
	        items: 2
	      },
	      992: {
	        items: 3
	      }
	    }
	  }
	};
	
	/* eslint-disable no-unused-vars */
	
	var init = function init() {
	  var $owl = (0, _jquery2['default'])(opts.jsSelector);
	
	  (0, _jquery2['default'])(opts.owlPrev).click(function () {
	    return $owl.trigger('prev.owl.carousel');
	  });
	  (0, _jquery2['default'])(opts.owlNext).click(function () {
	    return $owl.trigger('next.owl.carousel');
	  });
	
	  $owl.on('initialized.owl.carousel changed.owl.carousel refreshed.owl.carousel', function (event) {
	    if (!event.namespace) return;
	
	    var carousel = event.relatedTarget,
	        element = event.target,
	        current = carousel.current();
	
	    (0, _jquery2['default'])(opts.owlNext + '[aria-controls=\'' + element.id + '\']').toggleClass('u-visibilityHidden', current === carousel.maximum());
	
	    (0, _jquery2['default'])(opts.owlPrev + '[aria-controls=\'' + element.id + '\']').toggleClass('u-visibilityHidden', current === carousel.minimum());
	  });
	
	  // must be called after events initialization
	  $owl.owlCarousel(opts.owlOpts);
	};
	
	(0, _jquery2['default'])(document).ready(init);
	
	exports['default'] = {
	  opts: opts,
	  init: init
	};
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 16 */,
/* 17 */,
/* 18 */
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	/**
	 * Owl Carousel v2.1.4
	 * Copyright 2013-2016 David Deutsch
	 * Licensed under MIT (https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE)
	 */
	/**
	 * Owl carousel
	 * @version 2.1.0
	 * @author Bartosz Wojciechowski
	 * @author David Deutsch
	 * @license The MIT License (MIT)
	 * @todo Lazy Load Icon
	 * @todo prevent animationend bubling
	 * @todo itemsScaleUp
	 * @todo Test Zepto
	 * @todo stagePadding calculate wrong active classes
	 */
	;(function ($, window, document, undefined) {
	
		/**
	  * Creates a carousel.
	  * @class The Owl Carousel.
	  * @public
	  * @param {HTMLElement|jQuery} element - The element to create the carousel for.
	  * @param {Object} [options] - The options
	  */
		function Owl(element, options) {
	
			/**
	   * Current settings for the carousel.
	   * @public
	   */
			this.settings = null;
	
			/**
	   * Current options set by the caller including defaults.
	   * @public
	   */
			this.options = $.extend({}, Owl.Defaults, options);
	
			/**
	   * Plugin element.
	   * @public
	   */
			this.$element = $(element);
	
			/**
	   * Proxied event handlers.
	   * @protected
	   */
			this._handlers = {};
	
			/**
	   * References to the running plugins of this carousel.
	   * @protected
	   */
			this._plugins = {};
	
			/**
	   * Currently suppressed events to prevent them from beeing retriggered.
	   * @protected
	   */
			this._supress = {};
	
			/**
	   * Absolute current position.
	   * @protected
	   */
			this._current = null;
	
			/**
	   * Animation speed in milliseconds.
	   * @protected
	   */
			this._speed = null;
	
			/**
	   * Coordinates of all items in pixel.
	   * @todo The name of this member is missleading.
	   * @protected
	   */
			this._coordinates = [];
	
			/**
	   * Current breakpoint.
	   * @todo Real media queries would be nice.
	   * @protected
	   */
			this._breakpoint = null;
	
			/**
	   * Current width of the plugin element.
	   */
			this._width = null;
	
			/**
	   * All real items.
	   * @protected
	   */
			this._items = [];
	
			/**
	   * All cloned items.
	   * @protected
	   */
			this._clones = [];
	
			/**
	   * Merge values of all items.
	   * @todo Maybe this could be part of a plugin.
	   * @protected
	   */
			this._mergers = [];
	
			/**
	   * Widths of all items.
	   */
			this._widths = [];
	
			/**
	   * Invalidated parts within the update process.
	   * @protected
	   */
			this._invalidated = {};
	
			/**
	   * Ordered list of workers for the update process.
	   * @protected
	   */
			this._pipe = [];
	
			/**
	   * Current state information for the drag operation.
	   * @todo #261
	   * @protected
	   */
			this._drag = {
				time: null,
				target: null,
				pointer: null,
				stage: {
					start: null,
					current: null
				},
				direction: null
			};
	
			/**
	   * Current state information and their tags.
	   * @type {Object}
	   * @protected
	   */
			this._states = {
				current: {},
				tags: {
					'initializing': ['busy'],
					'animating': ['busy'],
					'dragging': ['interacting']
				}
			};
	
			$.each(['onResize', 'onThrottledResize'], $.proxy(function (i, handler) {
				this._handlers[handler] = $.proxy(this[handler], this);
			}, this));
	
			$.each(Owl.Plugins, $.proxy(function (key, plugin) {
				this._plugins[key.charAt(0).toLowerCase() + key.slice(1)] = new plugin(this);
			}, this));
	
			$.each(Owl.Workers, $.proxy(function (priority, worker) {
				this._pipe.push({
					'filter': worker.filter,
					'run': $.proxy(worker.run, this)
				});
			}, this));
	
			this.setup();
			this.initialize();
		}
	
		/**
	  * Default options for the carousel.
	  * @public
	  */
		Owl.Defaults = {
			items: 3,
			loop: false,
			center: false,
			rewind: false,
	
			mouseDrag: true,
			touchDrag: true,
			pullDrag: true,
			freeDrag: false,
	
			margin: 0,
			stagePadding: 0,
	
			merge: false,
			mergeFit: true,
			autoWidth: false,
	
			startPosition: 0,
			rtl: false,
	
			smartSpeed: 250,
			fluidSpeed: false,
			dragEndSpeed: false,
	
			responsive: {},
			responsiveRefreshRate: 200,
			responsiveBaseElement: window,
	
			fallbackEasing: 'swing',
	
			info: false,
	
			nestedItemSelector: false,
			itemElement: 'div',
			stageElement: 'div',
	
			refreshClass: 'owl-refresh',
			loadedClass: 'owl-loaded',
			loadingClass: 'owl-loading',
			rtlClass: 'owl-rtl',
			responsiveClass: 'owl-responsive',
			dragClass: 'owl-drag',
			itemClass: 'owl-item',
			stageClass: 'owl-stage',
			stageOuterClass: 'owl-stage-outer',
			grabClass: 'owl-grab'
		};
	
		/**
	  * Enumeration for width.
	  * @public
	  * @readonly
	  * @enum {String}
	  */
		Owl.Width = {
			Default: 'default',
			Inner: 'inner',
			Outer: 'outer'
		};
	
		/**
	  * Enumeration for types.
	  * @public
	  * @readonly
	  * @enum {String}
	  */
		Owl.Type = {
			Event: 'event',
			State: 'state'
		};
	
		/**
	  * Contains all registered plugins.
	  * @public
	  */
		Owl.Plugins = {};
	
		/**
	  * List of workers involved in the update process.
	  */
		Owl.Workers = [{
			filter: ['width', 'settings'],
			run: function run() {
				this._width = this.$element.width();
			}
		}, {
			filter: ['width', 'items', 'settings'],
			run: function run(cache) {
				cache.current = this._items && this._items[this.relative(this._current)];
			}
		}, {
			filter: ['items', 'settings'],
			run: function run() {
				this.$stage.children('.cloned').remove();
			}
		}, {
			filter: ['width', 'items', 'settings'],
			run: function run(cache) {
				var margin = this.settings.margin || '',
				    grid = !this.settings.autoWidth,
				    rtl = this.settings.rtl,
				    css = {
					'width': 'auto',
					'margin-left': rtl ? margin : '',
					'margin-right': rtl ? '' : margin
				};
	
				!grid && this.$stage.children().css(css);
	
				cache.css = css;
			}
		}, {
			filter: ['width', 'items', 'settings'],
			run: function run(cache) {
				var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
				    merge = null,
				    iterator = this._items.length,
				    grid = !this.settings.autoWidth,
				    widths = [];
	
				cache.items = {
					merge: false,
					width: width
				};
	
				while (iterator--) {
					merge = this._mergers[iterator];
					merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;
	
					cache.items.merge = merge > 1 || cache.items.merge;
	
					widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
				}
	
				this._widths = widths;
			}
		}, {
			filter: ['items', 'settings'],
			run: function run() {
				var clones = [],
				    items = this._items,
				    settings = this.settings,
				    view = Math.max(settings.items * 2, 4),
				    size = Math.ceil(items.length / 2) * 2,
				    repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
				    append = '',
				    prepend = '';
	
				repeat /= 2;
	
				while (repeat--) {
					clones.push(this.normalize(clones.length / 2, true));
					append = append + items[clones[clones.length - 1]][0].outerHTML;
					clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
					prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
				}
	
				this._clones = clones;
	
				$(append).addClass('cloned').appendTo(this.$stage);
				$(prepend).addClass('cloned').prependTo(this.$stage);
			}
		}, {
			filter: ['width', 'items', 'settings'],
			run: function run() {
				var rtl = this.settings.rtl ? 1 : -1,
				    size = this._clones.length + this._items.length,
				    iterator = -1,
				    previous = 0,
				    current = 0,
				    coordinates = [];
	
				while (++iterator < size) {
					previous = coordinates[iterator - 1] || 0;
					current = this._widths[this.relative(iterator)] + this.settings.margin;
					coordinates.push(previous + current * rtl);
				}
	
				this._coordinates = coordinates;
			}
		}, {
			filter: ['width', 'items', 'settings'],
			run: function run() {
				var padding = this.settings.stagePadding,
				    coordinates = this._coordinates,
				    css = {
					'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
					'padding-left': padding || '',
					'padding-right': padding || ''
				};
	
				this.$stage.css(css);
			}
		}, {
			filter: ['width', 'items', 'settings'],
			run: function run(cache) {
				var iterator = this._coordinates.length,
				    grid = !this.settings.autoWidth,
				    items = this.$stage.children();
	
				if (grid && cache.items.merge) {
					while (iterator--) {
						cache.css.width = this._widths[this.relative(iterator)];
						items.eq(iterator).css(cache.css);
					}
				} else if (grid) {
					cache.css.width = cache.items.width;
					items.css(cache.css);
				}
			}
		}, {
			filter: ['items'],
			run: function run() {
				this._coordinates.length < 1 && this.$stage.removeAttr('style');
			}
		}, {
			filter: ['width', 'items', 'settings'],
			run: function run(cache) {
				cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
				cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
				this.reset(cache.current);
			}
		}, {
			filter: ['position'],
			run: function run() {
				this.animate(this.coordinates(this._current));
			}
		}, {
			filter: ['width', 'position', 'items', 'settings'],
			run: function run() {
				var rtl = this.settings.rtl ? 1 : -1,
				    padding = this.settings.stagePadding * 2,
				    begin = this.coordinates(this.current()) + padding,
				    end = begin + this.width() * rtl,
				    inner,
				    outer,
				    matches = [],
				    i,
				    n;
	
				for (i = 0, n = this._coordinates.length; i < n; i++) {
					inner = this._coordinates[i - 1] || 0;
					outer = Math.abs(this._coordinates[i]) + padding * rtl;
	
					if (this.op(inner, '<=', begin) && this.op(inner, '>', end) || this.op(outer, '<', begin) && this.op(outer, '>', end)) {
						matches.push(i);
					}
				}
	
				this.$stage.children('.active').removeClass('active');
				this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');
	
				if (this.settings.center) {
					this.$stage.children('.center').removeClass('center');
					this.$stage.children().eq(this.current()).addClass('center');
				}
			}
		}];
	
		/**
	  * Initializes the carousel.
	  * @protected
	  */
		Owl.prototype.initialize = function () {
			this.enter('initializing');
			this.trigger('initialize');
	
			this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);
	
			if (this.settings.autoWidth && !this.is('pre-loading')) {
				var imgs, nestedSelector, width;
				imgs = this.$element.find('img');
				nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
				width = this.$element.children(nestedSelector).width();
	
				if (imgs.length && width <= 0) {
					this.preloadAutoWidthImages(imgs);
				}
			}
	
			this.$element.addClass(this.options.loadingClass);
	
			// create stage
			this.$stage = $('<' + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>');
	
			// append stage
			this.$element.append(this.$stage.parent());
	
			// append content
			this.replace(this.$element.children().not(this.$stage.parent()));
	
			// check visibility
			if (this.$element.is(':visible')) {
				// update view
				this.refresh();
			} else {
				// invalidate width
				this.invalidate('width');
			}
	
			this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass);
	
			// register event handlers
			this.registerEventHandlers();
	
			this.leave('initializing');
			this.trigger('initialized');
		};
	
		/**
	  * Setups the current settings.
	  * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
	  * @todo Support for media queries by using `matchMedia` would be nice.
	  * @public
	  */
		Owl.prototype.setup = function () {
			var viewport = this.viewport(),
			    overwrites = this.options.responsive,
			    match = -1,
			    settings = null;
	
			if (!overwrites) {
				settings = $.extend({}, this.options);
			} else {
				$.each(overwrites, function (breakpoint) {
					if (breakpoint <= viewport && breakpoint > match) {
						match = Number(breakpoint);
					}
				});
	
				settings = $.extend({}, this.options, overwrites[match]);
				delete settings.responsive;
	
				// responsive class
				if (settings.responsiveClass) {
					this.$element.attr('class', this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match));
				}
			}
	
			if (this.settings === null || this._breakpoint !== match) {
				this.trigger('change', { property: { name: 'settings', value: settings } });
				this._breakpoint = match;
				this.settings = settings;
				this.invalidate('settings');
				this.trigger('changed', { property: { name: 'settings', value: this.settings } });
			}
		};
	
		/**
	  * Updates option logic if necessery.
	  * @protected
	  */
		Owl.prototype.optionsLogic = function () {
			if (this.settings.autoWidth) {
				this.settings.stagePadding = false;
				this.settings.merge = false;
			}
		};
	
		/**
	  * Prepares an item before add.
	  * @todo Rename event parameter `content` to `item`.
	  * @protected
	  * @returns {jQuery|HTMLElement} - The item container.
	  */
		Owl.prototype.prepare = function (item) {
			var event = this.trigger('prepare', { content: item });
	
			if (!event.data) {
				event.data = $('<' + this.settings.itemElement + '/>').addClass(this.options.itemClass).append(item);
			}
	
			this.trigger('prepared', { content: event.data });
	
			return event.data;
		};
	
		/**
	  * Updates the view.
	  * @public
	  */
		Owl.prototype.update = function () {
			var i = 0,
			    n = this._pipe.length,
			    filter = $.proxy(function (p) {
				return this[p];
			}, this._invalidated),
			    cache = {};
	
			while (i < n) {
				if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
					this._pipe[i].run(cache);
				}
				i++;
			}
	
			this._invalidated = {};
	
			!this.is('valid') && this.enter('valid');
		};
	
		/**
	  * Gets the width of the view.
	  * @public
	  * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
	  * @returns {Number} - The width of the view in pixel.
	  */
		Owl.prototype.width = function (dimension) {
			dimension = dimension || Owl.Width.Default;
			switch (dimension) {
				case Owl.Width.Inner:
				case Owl.Width.Outer:
					return this._width;
				default:
					return this._width - this.settings.stagePadding * 2 + this.settings.margin;
			}
		};
	
		/**
	  * Refreshes the carousel primarily for adaptive purposes.
	  * @public
	  */
		Owl.prototype.refresh = function () {
			this.enter('refreshing');
			this.trigger('refresh');
	
			this.setup();
	
			this.optionsLogic();
	
			this.$element.addClass(this.options.refreshClass);
	
			this.update();
	
			this.$element.removeClass(this.options.refreshClass);
	
			this.leave('refreshing');
			this.trigger('refreshed');
		};
	
		/**
	  * Checks window `resize` event.
	  * @protected
	  */
		Owl.prototype.onThrottledResize = function () {
			window.clearTimeout(this.resizeTimer);
			this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
		};
	
		/**
	  * Checks window `resize` event.
	  * @protected
	  */
		Owl.prototype.onResize = function () {
			if (!this._items.length) {
				return false;
			}
	
			if (this._width === this.$element.width()) {
				return false;
			}
	
			if (!this.$element.is(':visible')) {
				return false;
			}
	
			this.enter('resizing');
	
			if (this.trigger('resize').isDefaultPrevented()) {
				this.leave('resizing');
				return false;
			}
	
			this.invalidate('width');
	
			this.refresh();
	
			this.leave('resizing');
			this.trigger('resized');
		};
	
		/**
	  * Registers event handlers.
	  * @todo Check `msPointerEnabled`
	  * @todo #261
	  * @protected
	  */
		Owl.prototype.registerEventHandlers = function () {
			if ($.support.transition) {
				this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
			}
	
			if (this.settings.responsive !== false) {
				this.on(window, 'resize', this._handlers.onThrottledResize);
			}
	
			if (this.settings.mouseDrag) {
				this.$element.addClass(this.options.dragClass);
				this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
				this.$stage.on('dragstart.owl.core selectstart.owl.core', function () {
					return false;
				});
			}
	
			if (this.settings.touchDrag) {
				this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
				this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
			}
		};
	
		/**
	  * Handles `touchstart` and `mousedown` events.
	  * @todo Horizontal swipe threshold as option
	  * @todo #261
	  * @protected
	  * @param {Event} event - The event arguments.
	  */
		Owl.prototype.onDragStart = function (event) {
			var stage = null;
	
			if (event.which === 3) {
				return;
			}
	
			if ($.support.transform) {
				stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
				stage = {
					x: stage[stage.length === 16 ? 12 : 4],
					y: stage[stage.length === 16 ? 13 : 5]
				};
			} else {
				stage = this.$stage.position();
				stage = {
					x: this.settings.rtl ? stage.left + this.$stage.width() - this.width() + this.settings.margin : stage.left,
					y: stage.top
				};
			}
	
			if (this.is('animating')) {
				$.support.transform ? this.animate(stage.x) : this.$stage.stop();
				this.invalidate('position');
			}
	
			this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');
	
			this.speed(0);
	
			this._drag.time = new Date().getTime();
			this._drag.target = $(event.target);
			this._drag.stage.start = stage;
			this._drag.stage.current = stage;
			this._drag.pointer = this.pointer(event);
	
			$(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));
	
			$(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function (event) {
				var delta = this.difference(this._drag.pointer, this.pointer(event));
	
				$(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));
	
				if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
					return;
				}
	
				event.preventDefault();
	
				this.enter('dragging');
				this.trigger('drag');
			}, this));
		};
	
		/**
	  * Handles the `touchmove` and `mousemove` events.
	  * @todo #261
	  * @protected
	  * @param {Event} event - The event arguments.
	  */
		Owl.prototype.onDragMove = function (event) {
			var minimum = null,
			    maximum = null,
			    pull = null,
			    delta = this.difference(this._drag.pointer, this.pointer(event)),
			    stage = this.difference(this._drag.stage.start, delta);
	
			if (!this.is('dragging')) {
				return;
			}
	
			event.preventDefault();
	
			if (this.settings.loop) {
				minimum = this.coordinates(this.minimum());
				maximum = this.coordinates(this.maximum() + 1) - minimum;
				stage.x = ((stage.x - minimum) % maximum + maximum) % maximum + minimum;
			} else {
				minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
				maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
				pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
				stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
			}
	
			this._drag.stage.current = stage;
	
			this.animate(stage.x);
		};
	
		/**
	  * Handles the `touchend` and `mouseup` events.
	  * @todo #261
	  * @todo Threshold for click event
	  * @protected
	  * @param {Event} event - The event arguments.
	  */
		Owl.prototype.onDragEnd = function (event) {
			var delta = this.difference(this._drag.pointer, this.pointer(event)),
			    stage = this._drag.stage.current,
			    direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';
	
			$(document).off('.owl.core');
	
			this.$element.removeClass(this.options.grabClass);
	
			if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
				this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
				this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
				this.invalidate('position');
				this.update();
	
				this._drag.direction = direction;
	
				if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
					this._drag.target.one('click.owl.core', function () {
						return false;
					});
				}
			}
	
			if (!this.is('dragging')) {
				return;
			}
	
			this.leave('dragging');
			this.trigger('dragged');
		};
	
		/**
	  * Gets absolute position of the closest item for a coordinate.
	  * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
	  * @protected
	  * @param {Number} coordinate - The coordinate in pixel.
	  * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
	  * @return {Number} - The absolute position of the closest item.
	  */
		Owl.prototype.closest = function (coordinate, direction) {
			var position = -1,
			    pull = 30,
			    width = this.width(),
			    coordinates = this.coordinates();
	
			if (!this.settings.freeDrag) {
				// check closest item
				$.each(coordinates, $.proxy(function (index, value) {
					// on a left pull, check on current index
					if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
						position = index;
						// on a right pull, check on previous index
						// to do so, subtract width from value and set position = index + 1
					} else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
						position = index + 1;
					} else if (this.op(coordinate, '<', value) && this.op(coordinate, '>', coordinates[index + 1] || value - width)) {
						position = direction === 'left' ? index + 1 : index;
					}
					return position === -1;
				}, this));
			}
	
			if (!this.settings.loop) {
				// non loop boundries
				if (this.op(coordinate, '>', coordinates[this.minimum()])) {
					position = coordinate = this.minimum();
				} else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
					position = coordinate = this.maximum();
				}
			}
	
			return position;
		};
	
		/**
	  * Animates the stage.
	  * @todo #270
	  * @public
	  * @param {Number} coordinate - The coordinate in pixels.
	  */
		Owl.prototype.animate = function (coordinate) {
			var animate = this.speed() > 0;
	
			this.is('animating') && this.onTransitionEnd();
	
			if (animate) {
				this.enter('animating');
				this.trigger('translate');
			}
	
			if ($.support.transform3d && $.support.transition) {
				this.$stage.css({
					transform: 'translate3d(' + coordinate + 'px,0px,0px)',
					transition: this.speed() / 1000 + 's'
				});
			} else if (animate) {
				this.$stage.animate({
					left: coordinate + 'px'
				}, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
			} else {
				this.$stage.css({
					left: coordinate + 'px'
				});
			}
		};
	
		/**
	  * Checks whether the carousel is in a specific state or not.
	  * @param {String} state - The state to check.
	  * @returns {Boolean} - The flag which indicates if the carousel is busy.
	  */
		Owl.prototype.is = function (state) {
			return this._states.current[state] && this._states.current[state] > 0;
		};
	
		/**
	  * Sets the absolute position of the current item.
	  * @public
	  * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
	  * @returns {Number} - The absolute position of the current item.
	  */
		Owl.prototype.current = function (position) {
			if (position === undefined) {
				return this._current;
			}
	
			if (this._items.length === 0) {
				return undefined;
			}
	
			position = this.normalize(position);
	
			if (this._current !== position) {
				var event = this.trigger('change', { property: { name: 'position', value: position } });
	
				if (event.data !== undefined) {
					position = this.normalize(event.data);
				}
	
				this._current = position;
	
				this.invalidate('position');
	
				this.trigger('changed', { property: { name: 'position', value: this._current } });
			}
	
			return this._current;
		};
	
		/**
	  * Invalidates the given part of the update routine.
	  * @param {String} [part] - The part to invalidate.
	  * @returns {Array.<String>} - The invalidated parts.
	  */
		Owl.prototype.invalidate = function (part) {
			if ($.type(part) === 'string') {
				this._invalidated[part] = true;
				this.is('valid') && this.leave('valid');
			}
			return $.map(this._invalidated, function (v, i) {
				return i;
			});
		};
	
		/**
	  * Resets the absolute position of the current item.
	  * @public
	  * @param {Number} position - The absolute position of the new item.
	  */
		Owl.prototype.reset = function (position) {
			position = this.normalize(position);
	
			if (position === undefined) {
				return;
			}
	
			this._speed = 0;
			this._current = position;
	
			this.suppress(['translate', 'translated']);
	
			this.animate(this.coordinates(position));
	
			this.release(['translate', 'translated']);
		};
	
		/**
	  * Normalizes an absolute or a relative position of an item.
	  * @public
	  * @param {Number} position - The absolute or relative position to normalize.
	  * @param {Boolean} [relative=false] - Whether the given position is relative or not.
	  * @returns {Number} - The normalized position.
	  */
		Owl.prototype.normalize = function (position, relative) {
			var n = this._items.length,
			    m = relative ? 0 : this._clones.length;
	
			if (!this.isNumeric(position) || n < 1) {
				position = undefined;
			} else if (position < 0 || position >= n + m) {
				position = ((position - m / 2) % n + n) % n + m / 2;
			}
	
			return position;
		};
	
		/**
	  * Converts an absolute position of an item into a relative one.
	  * @public
	  * @param {Number} position - The absolute position to convert.
	  * @returns {Number} - The converted position.
	  */
		Owl.prototype.relative = function (position) {
			position -= this._clones.length / 2;
			return this.normalize(position, true);
		};
	
		/**
	  * Gets the maximum position for the current item.
	  * @public
	  * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	  * @returns {Number}
	  */
		Owl.prototype.maximum = function (relative) {
			var settings = this.settings,
			    maximum = this._coordinates.length,
			    boundary = Math.abs(this._coordinates[maximum - 1]) - this._width,
			    i = -1,
			    j;
	
			if (settings.loop) {
				maximum = this._clones.length / 2 + this._items.length - 1;
			} else if (settings.autoWidth || settings.merge) {
				// binary search
				while (maximum - i > 1) {
					Math.abs(this._coordinates[j = maximum + i >> 1]) < boundary ? i = j : maximum = j;
				}
			} else if (settings.center) {
				maximum = this._items.length - 1;
			} else {
				maximum = this._items.length - settings.items;
			}
	
			if (relative) {
				maximum -= this._clones.length / 2;
			}
	
			return Math.max(maximum, 0);
		};
	
		/**
	  * Gets the minimum position for the current item.
	  * @public
	  * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	  * @returns {Number}
	  */
		Owl.prototype.minimum = function (relative) {
			return relative ? 0 : this._clones.length / 2;
		};
	
		/**
	  * Gets an item at the specified relative position.
	  * @public
	  * @param {Number} [position] - The relative position of the item.
	  * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	  */
		Owl.prototype.items = function (position) {
			if (position === undefined) {
				return this._items.slice();
			}
	
			position = this.normalize(position, true);
			return this._items[position];
		};
	
		/**
	  * Gets an item at the specified relative position.
	  * @public
	  * @param {Number} [position] - The relative position of the item.
	  * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	  */
		Owl.prototype.mergers = function (position) {
			if (position === undefined) {
				return this._mergers.slice();
			}
	
			position = this.normalize(position, true);
			return this._mergers[position];
		};
	
		/**
	  * Gets the absolute positions of clones for an item.
	  * @public
	  * @param {Number} [position] - The relative position of the item.
	  * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
	  */
		Owl.prototype.clones = function (position) {
			var odd = this._clones.length / 2,
			    even = odd + this._items.length,
			    map = function map(index) {
				return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2;
			};
	
			if (position === undefined) {
				return $.map(this._clones, function (v, i) {
					return map(i);
				});
			}
	
			return $.map(this._clones, function (v, i) {
				return v === position ? map(i) : null;
			});
		};
	
		/**
	  * Sets the current animation speed.
	  * @public
	  * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
	  * @returns {Number} - The current animation speed in milliseconds.
	  */
		Owl.prototype.speed = function (speed) {
			if (speed !== undefined) {
				this._speed = speed;
			}
	
			return this._speed;
		};
	
		/**
	  * Gets the coordinate of an item.
	  * @todo The name of this method is missleanding.
	  * @public
	  * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
	  * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
	  */
		Owl.prototype.coordinates = function (position) {
			var multiplier = 1,
			    newPosition = position - 1,
			    coordinate;
	
			if (position === undefined) {
				return $.map(this._coordinates, $.proxy(function (coordinate, index) {
					return this.coordinates(index);
				}, this));
			}
	
			if (this.settings.center) {
				if (this.settings.rtl) {
					multiplier = -1;
					newPosition = position + 1;
				}
	
				coordinate = this._coordinates[position];
				coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
			} else {
				coordinate = this._coordinates[newPosition] || 0;
			}
	
			coordinate = Math.ceil(coordinate);
	
			return coordinate;
		};
	
		/**
	  * Calculates the speed for a translation.
	  * @protected
	  * @param {Number} from - The absolute position of the start item.
	  * @param {Number} to - The absolute position of the target item.
	  * @param {Number} [factor=undefined] - The time factor in milliseconds.
	  * @returns {Number} - The time in milliseconds for the translation.
	  */
		Owl.prototype.duration = function (from, to, factor) {
			if (factor === 0) {
				return 0;
			}
	
			return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs(factor || this.settings.smartSpeed);
		};
	
		/**
	  * Slides to the specified item.
	  * @public
	  * @param {Number} position - The position of the item.
	  * @param {Number} [speed] - The time in milliseconds for the transition.
	  */
		Owl.prototype.to = function (position, speed) {
			var current = this.current(),
			    revert = null,
			    distance = position - this.relative(current),
			    direction = (distance > 0) - (distance < 0),
			    items = this._items.length,
			    minimum = this.minimum(),
			    maximum = this.maximum();
	
			if (this.settings.loop) {
				if (!this.settings.rewind && Math.abs(distance) > items / 2) {
					distance += direction * -1 * items;
				}
	
				position = current + distance;
				revert = ((position - minimum) % items + items) % items + minimum;
	
				if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
					current = revert - distance;
					position = revert;
					this.reset(current);
				}
			} else if (this.settings.rewind) {
				maximum += 1;
				position = (position % maximum + maximum) % maximum;
			} else {
				position = Math.max(minimum, Math.min(maximum, position));
			}
	
			this.speed(this.duration(current, position, speed));
			this.current(position);
	
			if (this.$element.is(':visible')) {
				this.update();
			}
		};
	
		/**
	  * Slides to the next item.
	  * @public
	  * @param {Number} [speed] - The time in milliseconds for the transition.
	  */
		Owl.prototype.next = function (speed) {
			speed = speed || false;
			this.to(this.relative(this.current()) + 1, speed);
		};
	
		/**
	  * Slides to the previous item.
	  * @public
	  * @param {Number} [speed] - The time in milliseconds for the transition.
	  */
		Owl.prototype.prev = function (speed) {
			speed = speed || false;
			this.to(this.relative(this.current()) - 1, speed);
		};
	
		/**
	  * Handles the end of an animation.
	  * @protected
	  * @param {Event} event - The event arguments.
	  */
		Owl.prototype.onTransitionEnd = function (event) {
	
			// if css2 animation then event object is undefined
			if (event !== undefined) {
				event.stopPropagation();
	
				// Catch only owl-stage transitionEnd event
				if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
					return false;
				}
			}
	
			this.leave('animating');
			this.trigger('translated');
		};
	
		/**
	  * Gets viewport width.
	  * @protected
	  * @return {Number} - The width in pixel.
	  */
		Owl.prototype.viewport = function () {
			var width;
			if (this.options.responsiveBaseElement !== window) {
				width = $(this.options.responsiveBaseElement).width();
			} else if (window.innerWidth) {
				width = window.innerWidth;
			} else if (document.documentElement && document.documentElement.clientWidth) {
				width = document.documentElement.clientWidth;
			} else {
				throw 'Can not detect viewport width.';
			}
			return width;
		};
	
		/**
	  * Replaces the current content.
	  * @public
	  * @param {HTMLElement|jQuery|String} content - The new content.
	  */
		Owl.prototype.replace = function (content) {
			this.$stage.empty();
			this._items = [];
	
			if (content) {
				content = content instanceof jQuery ? content : $(content);
			}
	
			if (this.settings.nestedItemSelector) {
				content = content.find('.' + this.settings.nestedItemSelector);
			}
	
			content.filter(function () {
				return this.nodeType === 1;
			}).each($.proxy(function (index, item) {
				item = this.prepare(item);
				this.$stage.append(item);
				this._items.push(item);
				this._mergers.push(item.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
			}, this));
	
			this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);
	
			this.invalidate('items');
		};
	
		/**
	  * Adds an item.
	  * @todo Use `item` instead of `content` for the event arguments.
	  * @public
	  * @param {HTMLElement|jQuery|String} content - The item content to add.
	  * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
	  */
		Owl.prototype.add = function (content, position) {
			var current = this.relative(this._current);
	
			position = position === undefined ? this._items.length : this.normalize(position, true);
			content = content instanceof jQuery ? content : $(content);
	
			this.trigger('add', { content: content, position: position });
	
			content = this.prepare(content);
	
			if (this._items.length === 0 || position === this._items.length) {
				this._items.length === 0 && this.$stage.append(content);
				this._items.length !== 0 && this._items[position - 1].after(content);
				this._items.push(content);
				this._mergers.push(content.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
			} else {
				this._items[position].before(content);
				this._items.splice(position, 0, content);
				this._mergers.splice(position, 0, content.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
			}
	
			this._items[current] && this.reset(this._items[current].index());
	
			this.invalidate('items');
	
			this.trigger('added', { content: content, position: position });
		};
	
		/**
	  * Removes an item by its position.
	  * @todo Use `item` instead of `content` for the event arguments.
	  * @public
	  * @param {Number} position - The relative position of the item to remove.
	  */
		Owl.prototype.remove = function (position) {
			position = this.normalize(position, true);
	
			if (position === undefined) {
				return;
			}
	
			this.trigger('remove', { content: this._items[position], position: position });
	
			this._items[position].remove();
			this._items.splice(position, 1);
			this._mergers.splice(position, 1);
	
			this.invalidate('items');
	
			this.trigger('removed', { content: null, position: position });
		};
	
		/**
	  * Preloads images with auto width.
	  * @todo Replace by a more generic approach
	  * @protected
	  */
		Owl.prototype.preloadAutoWidthImages = function (images) {
			images.each($.proxy(function (i, element) {
				this.enter('pre-loading');
				element = $(element);
				$(new Image()).one('load', $.proxy(function (e) {
					element.attr('src', e.target.src);
					element.css('opacity', 1);
					this.leave('pre-loading');
					!this.is('pre-loading') && !this.is('initializing') && this.refresh();
				}, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
			}, this));
		};
	
		/**
	  * Destroys the carousel.
	  * @public
	  */
		Owl.prototype.destroy = function () {
	
			this.$element.off('.owl.core');
			this.$stage.off('.owl.core');
			$(document).off('.owl.core');
	
			if (this.settings.responsive !== false) {
				window.clearTimeout(this.resizeTimer);
				this.off(window, 'resize', this._handlers.onThrottledResize);
			}
	
			for (var i in this._plugins) {
				this._plugins[i].destroy();
			}
	
			this.$stage.children('.cloned').remove();
	
			this.$stage.unwrap();
			this.$stage.children().contents().unwrap();
			this.$stage.children().unwrap();
	
			this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), '')).removeData('owl.carousel');
		};
	
		/**
	  * Operators to calculate right-to-left and left-to-right.
	  * @protected
	  * @param {Number} [a] - The left side operand.
	  * @param {String} [o] - The operator.
	  * @param {Number} [b] - The right side operand.
	  */
		Owl.prototype.op = function (a, o, b) {
			var rtl = this.settings.rtl;
			switch (o) {
				case '<':
					return rtl ? a > b : a < b;
				case '>':
					return rtl ? a < b : a > b;
				case '>=':
					return rtl ? a <= b : a >= b;
				case '<=':
					return rtl ? a >= b : a <= b;
				default:
					break;
			}
		};
	
		/**
	  * Attaches to an internal event.
	  * @protected
	  * @param {HTMLElement} element - The event source.
	  * @param {String} event - The event name.
	  * @param {Function} listener - The event handler to attach.
	  * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
	  */
		Owl.prototype.on = function (element, event, listener, capture) {
			if (element.addEventListener) {
				element.addEventListener(event, listener, capture);
			} else if (element.attachEvent) {
				element.attachEvent('on' + event, listener);
			}
		};
	
		/**
	  * Detaches from an internal event.
	  * @protected
	  * @param {HTMLElement} element - The event source.
	  * @param {String} event - The event name.
	  * @param {Function} listener - The attached event handler to detach.
	  * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
	  */
		Owl.prototype.off = function (element, event, listener, capture) {
			if (element.removeEventListener) {
				element.removeEventListener(event, listener, capture);
			} else if (element.detachEvent) {
				element.detachEvent('on' + event, listener);
			}
		};
	
		/**
	  * Triggers a public event.
	  * @todo Remove `status`, `relatedTarget` should be used instead.
	  * @protected
	  * @param {String} name - The event name.
	  * @param {*} [data=null] - The event data.
	  * @param {String} [namespace=carousel] - The event namespace.
	  * @param {String} [state] - The state which is associated with the event.
	  * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
	  * @returns {Event} - The event arguments.
	  */
		Owl.prototype.trigger = function (name, data, namespace, state, enter) {
			var status = {
				item: { count: this._items.length, index: this.current() }
			},
			    handler = $.camelCase($.grep(['on', name, namespace], function (v) {
				return v;
			}).join('-').toLowerCase()),
			    event = $.Event([name, 'owl', namespace || 'carousel'].join('.').toLowerCase(), $.extend({ relatedTarget: this }, status, data));
	
			if (!this._supress[name]) {
				$.each(this._plugins, function (name, plugin) {
					if (plugin.onTrigger) {
						plugin.onTrigger(event);
					}
				});
	
				this.register({ type: Owl.Type.Event, name: name });
				this.$element.trigger(event);
	
				if (this.settings && typeof this.settings[handler] === 'function') {
					this.settings[handler].call(this, event);
				}
			}
	
			return event;
		};
	
		/**
	  * Enters a state.
	  * @param name - The state name.
	  */
		Owl.prototype.enter = function (name) {
			$.each([name].concat(this._states.tags[name] || []), $.proxy(function (i, name) {
				if (this._states.current[name] === undefined) {
					this._states.current[name] = 0;
				}
	
				this._states.current[name]++;
			}, this));
		};
	
		/**
	  * Leaves a state.
	  * @param name - The state name.
	  */
		Owl.prototype.leave = function (name) {
			$.each([name].concat(this._states.tags[name] || []), $.proxy(function (i, name) {
				this._states.current[name]--;
			}, this));
		};
	
		/**
	  * Registers an event or state.
	  * @public
	  * @param {Object} object - The event or state to register.
	  */
		Owl.prototype.register = function (object) {
			if (object.type === Owl.Type.Event) {
				if (!$.event.special[object.name]) {
					$.event.special[object.name] = {};
				}
	
				if (!$.event.special[object.name].owl) {
					var _default = $.event.special[object.name]._default;
					$.event.special[object.name]._default = function (e) {
						if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
							return _default.apply(this, arguments);
						}
						return e.namespace && e.namespace.indexOf('owl') > -1;
					};
					$.event.special[object.name].owl = true;
				}
			} else if (object.type === Owl.Type.State) {
				if (!this._states.tags[object.name]) {
					this._states.tags[object.name] = object.tags;
				} else {
					this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
				}
	
				this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function (tag, i) {
					return $.inArray(tag, this._states.tags[object.name]) === i;
				}, this));
			}
		};
	
		/**
	  * Suppresses events.
	  * @protected
	  * @param {Array.<String>} events - The events to suppress.
	  */
		Owl.prototype.suppress = function (events) {
			$.each(events, $.proxy(function (index, event) {
				this._supress[event] = true;
			}, this));
		};
	
		/**
	  * Releases suppressed events.
	  * @protected
	  * @param {Array.<String>} events - The events to release.
	  */
		Owl.prototype.release = function (events) {
			$.each(events, $.proxy(function (index, event) {
				delete this._supress[event];
			}, this));
		};
	
		/**
	  * Gets unified pointer coordinates from event.
	  * @todo #261
	  * @protected
	  * @param {Event} - The `mousedown` or `touchstart` event.
	  * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
	  */
		Owl.prototype.pointer = function (event) {
			var result = { x: null, y: null };
	
			event = event.originalEvent || event || window.event;
	
			event = event.touches && event.touches.length ? event.touches[0] : event.changedTouches && event.changedTouches.length ? event.changedTouches[0] : event;
	
			if (event.pageX) {
				result.x = event.pageX;
				result.y = event.pageY;
			} else {
				result.x = event.clientX;
				result.y = event.clientY;
			}
	
			return result;
		};
	
		/**
	  * Determines if the input is a Number or something that can be coerced to a Number
	  * @protected
	  * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
	  * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
	  */
		Owl.prototype.isNumeric = function (number) {
			return !isNaN(parseFloat(number));
		};
	
		/**
	  * Gets the difference of two vectors.
	  * @todo #261
	  * @protected
	  * @param {Object} - The first vector.
	  * @param {Object} - The second vector.
	  * @returns {Object} - The difference.
	  */
		Owl.prototype.difference = function (first, second) {
			return {
				x: first.x - second.x,
				y: first.y - second.y
			};
		};
	
		/**
	  * The jQuery Plugin for the Owl Carousel
	  * @todo Navigation plugin `next` and `prev`
	  * @public
	  */
		$.fn.owlCarousel = function (option) {
			var args = Array.prototype.slice.call(arguments, 1);
	
			return this.each(function () {
				var $this = $(this),
				    data = $this.data('owl.carousel');
	
				if (!data) {
					data = new Owl(this, (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option);
					$this.data('owl.carousel', data);
	
					$.each(['next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'], function (i, event) {
						data.register({ type: Owl.Type.Event, name: event });
						data.$element.on(event + '.owl.carousel.core', $.proxy(function (e) {
							if (e.namespace && e.relatedTarget !== this) {
								this.suppress([event]);
								data[event].apply(this, [].slice.call(arguments, 1));
								this.release([event]);
							}
						}, data));
					});
				}
	
				if (typeof option == 'string' && option.charAt(0) !== '_') {
					data[option].apply(data, args);
				}
			});
		};
	
		/**
	  * The constructor for the jQuery Plugin
	  * @public
	  */
		$.fn.owlCarousel.Constructor = Owl;
	})(window.Zepto || window.jQuery, window, document);
	
	/**
	 * AutoRefresh Plugin
	 * @version 2.1.0
	 * @author Artus Kolanowski
	 * @author David Deutsch
	 * @license The MIT License (MIT)
	 */
	;(function ($, window, document, undefined) {
	
		/**
	  * Creates the auto refresh plugin.
	  * @class The Auto Refresh Plugin
	  * @param {Owl} carousel - The Owl Carousel
	  */
		var AutoRefresh = function AutoRefresh(carousel) {
			/**
	   * Reference to the core.
	   * @protected
	   * @type {Owl}
	   */
			this._core = carousel;
	
			/**
	   * Refresh interval.
	   * @protected
	   * @type {number}
	   */
			this._interval = null;
	
			/**
	   * Whether the element is currently visible or not.
	   * @protected
	   * @type {Boolean}
	   */
			this._visible = null;
	
			/**
	   * All event handlers.
	   * @protected
	   * @type {Object}
	   */
			this._handlers = {
				'initialized.owl.carousel': $.proxy(function (e) {
					if (e.namespace && this._core.settings.autoRefresh) {
						this.watch();
					}
				}, this)
			};
	
			// set default options
			this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);
	
			// register event handlers
			this._core.$element.on(this._handlers);
		};
	
		/**
	  * Default options.
	  * @public
	  */
		AutoRefresh.Defaults = {
			autoRefresh: true,
			autoRefreshInterval: 500
		};
	
		/**
	  * Watches the element.
	  */
		AutoRefresh.prototype.watch = function () {
			if (this._interval) {
				return;
			}
	
			this._visible = this._core.$element.is(':visible');
			this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
		};
	
		/**
	  * Refreshes the element.
	  */
		AutoRefresh.prototype.refresh = function () {
			if (this._core.$element.is(':visible') === this._visible) {
				return;
			}
	
			this._visible = !this._visible;
	
			this._core.$element.toggleClass('owl-hidden', !this._visible);
	
			this._visible && this._core.invalidate('width') && this._core.refresh();
		};
	
		/**
	  * Destroys the plugin.
	  */
		AutoRefresh.prototype.destroy = function () {
			var handler, property;
	
			window.clearInterval(this._interval);
	
			for (handler in this._handlers) {
				this._core.$element.off(handler, this._handlers[handler]);
			}
			for (property in Object.getOwnPropertyNames(this)) {
				typeof this[property] != 'function' && (this[property] = null);
			}
		};
	
		$.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;
	})(window.Zepto || window.jQuery, window, document);
	
	/**
	 * Lazy Plugin
	 * @version 2.1.0
	 * @author Bartosz Wojciechowski
	 * @author David Deutsch
	 * @license The MIT License (MIT)
	 */
	;(function ($, window, document, undefined) {
	
		/**
	  * Creates the lazy plugin.
	  * @class The Lazy Plugin
	  * @param {Owl} carousel - The Owl Carousel
	  */
		var Lazy = function Lazy(carousel) {
	
			/**
	   * Reference to the core.
	   * @protected
	   * @type {Owl}
	   */
			this._core = carousel;
	
			/**
	   * Already loaded items.
	   * @protected
	   * @type {Array.<jQuery>}
	   */
			this._loaded = [];
	
			/**
	   * Event handlers.
	   * @protected
	   * @type {Object}
	   */
			this._handlers = {
				'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function (e) {
					if (!e.namespace) {
						return;
					}
	
					if (!this._core.settings || !this._core.settings.lazyLoad) {
						return;
					}
	
					if (e.property && e.property.name == 'position' || e.type == 'initialized') {
						var settings = this._core.settings,
						    n = settings.center && Math.ceil(settings.items / 2) || settings.items,
						    i = settings.center && n * -1 || 0,
						    position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
						    clones = this._core.clones().length,
						    load = $.proxy(function (i, v) {
							this.load(v);
						}, this);
	
						while (i++ < n) {
							this.load(clones / 2 + this._core.relative(position));
							clones && $.each(this._core.clones(this._core.relative(position)), load);
							position++;
						}
					}
				}, this)
			};
	
			// set the default options
			this._core.options = $.extend({}, Lazy.Defaults, this._core.options);
	
			// register event handler
			this._core.$element.on(this._handlers);
		};
	
		/**
	  * Default options.
	  * @public
	  */
		Lazy.Defaults = {
			lazyLoad: false
		};
	
		/**
	  * Loads all resources of an item at the specified position.
	  * @param {Number} position - The absolute position of the item.
	  * @protected
	  */
		Lazy.prototype.load = function (position) {
			var $item = this._core.$stage.children().eq(position),
			    $elements = $item && $item.find('.owl-lazy');
	
			if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
				return;
			}
	
			$elements.each($.proxy(function (index, element) {
				var $element = $(element),
				    image,
				    url = window.devicePixelRatio > 1 && $element.attr('data-src-retina') || $element.attr('data-src');
	
				this._core.trigger('load', { element: $element, url: url }, 'lazy');
	
				if ($element.is('img')) {
					$element.one('load.owl.lazy', $.proxy(function () {
						$element.css('opacity', 1);
						this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
					}, this)).attr('src', url);
				} else {
					image = new Image();
					image.onload = $.proxy(function () {
						$element.css({
							'background-image': 'url(' + url + ')',
							'opacity': '1'
						});
						this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
					}, this);
					image.src = url;
				}
			}, this));
	
			this._loaded.push($item.get(0));
		};
	
		/**
	  * Destroys the plugin.
	  * @public
	  */
		Lazy.prototype.destroy = function () {
			var handler, property;
	
			for (handler in this.handlers) {
				this._core.$element.off(handler, this.handlers[handler]);
			}
			for (property in Object.getOwnPropertyNames(this)) {
				typeof this[property] != 'function' && (this[property] = null);
			}
		};
	
		$.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;
	})(window.Zepto || window.jQuery, window, document);
	
	/**
	 * AutoHeight Plugin
	 * @version 2.1.0
	 * @author Bartosz Wojciechowski
	 * @author David Deutsch
	 * @license The MIT License (MIT)
	 */
	;(function ($, window, document, undefined) {
	
		/**
	  * Creates the auto height plugin.
	  * @class The Auto Height Plugin
	  * @param {Owl} carousel - The Owl Carousel
	  */
		var AutoHeight = function AutoHeight(carousel) {
			/**
	   * Reference to the core.
	   * @protected
	   * @type {Owl}
	   */
			this._core = carousel;
	
			/**
	   * All event handlers.
	   * @protected
	   * @type {Object}
	   */
			this._handlers = {
				'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function (e) {
					if (e.namespace && this._core.settings.autoHeight) {
						this.update();
					}
				}, this),
				'changed.owl.carousel': $.proxy(function (e) {
					if (e.namespace && this._core.settings.autoHeight && e.property.name == 'position') {
						this.update();
					}
				}, this),
				'loaded.owl.lazy': $.proxy(function (e) {
					if (e.namespace && this._core.settings.autoHeight && e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
						this.update();
					}
				}, this)
			};
	
			// set default options
			this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);
	
			// register event handlers
			this._core.$element.on(this._handlers);
		};
	
		/**
	  * Default options.
	  * @public
	  */
		AutoHeight.Defaults = {
			autoHeight: false,
			autoHeightClass: 'owl-height'
		};
	
		/**
	  * Updates the view.
	  */
		AutoHeight.prototype.update = function () {
			var start = this._core._current,
			    end = start + this._core.settings.items,
			    visible = this._core.$stage.children().toArray().slice(start, end),
			    heights = [],
			    maxheight = 0;
	
			$.each(visible, function (index, item) {
				heights.push($(item).height());
			});
	
			maxheight = Math.max.apply(null, heights);
	
			this._core.$stage.parent().height(maxheight).addClass(this._core.settings.autoHeightClass);
		};
	
		AutoHeight.prototype.destroy = function () {
			var handler, property;
	
			for (handler in this._handlers) {
				this._core.$element.off(handler, this._handlers[handler]);
			}
			for (property in Object.getOwnPropertyNames(this)) {
				typeof this[property] != 'function' && (this[property] = null);
			}
		};
	
		$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;
	})(window.Zepto || window.jQuery, window, document);
	
	/**
	 * Video Plugin
	 * @version 2.1.0
	 * @author Bartosz Wojciechowski
	 * @author David Deutsch
	 * @license The MIT License (MIT)
	 */
	;(function ($, window, document, undefined) {
	
		/**
	  * Creates the video plugin.
	  * @class The Video Plugin
	  * @param {Owl} carousel - The Owl Carousel
	  */
		var Video = function Video(carousel) {
			/**
	   * Reference to the core.
	   * @protected
	   * @type {Owl}
	   */
			this._core = carousel;
	
			/**
	   * Cache all video URLs.
	   * @protected
	   * @type {Object}
	   */
			this._videos = {};
	
			/**
	   * Current playing item.
	   * @protected
	   * @type {jQuery}
	   */
			this._playing = null;
	
			/**
	   * All event handlers.
	   * @todo The cloned content removale is too late
	   * @protected
	   * @type {Object}
	   */
			this._handlers = {
				'initialized.owl.carousel': $.proxy(function (e) {
					if (e.namespace) {
						this._core.register({ type: 'state', name: 'playing', tags: ['interacting'] });
					}
				}, this),
				'resize.owl.carousel': $.proxy(function (e) {
					if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
						e.preventDefault();
					}
				}, this),
				'refreshed.owl.carousel': $.proxy(function (e) {
					if (e.namespace && this._core.is('resizing')) {
						this._core.$stage.find('.cloned .owl-video-frame').remove();
					}
				}, this),
				'changed.owl.carousel': $.proxy(function (e) {
					if (e.namespace && e.property.name === 'position' && this._playing) {
						this.stop();
					}
				}, this),
				'prepared.owl.carousel': $.proxy(function (e) {
					if (!e.namespace) {
						return;
					}
	
					var $element = $(e.content).find('.owl-video');
	
					if ($element.length) {
						$element.css('display', 'none');
						this.fetch($element, $(e.content));
					}
				}, this)
			};
	
			// set default options
			this._core.options = $.extend({}, Video.Defaults, this._core.options);
	
			// register event handlers
			this._core.$element.on(this._handlers);
	
			this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function (e) {
				this.play(e);
			}, this));
		};
	
		/**
	  * Default options.
	  * @public
	  */
		Video.Defaults = {
			video: false,
			videoHeight: false,
			videoWidth: false
		};
	
		/**
	  * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
	  * @protected
	  * @param {jQuery} target - The target containing the video data.
	  * @param {jQuery} item - The item containing the video.
	  */
		Video.prototype.fetch = function (target, item) {
			var type = function () {
				if (target.attr('data-vimeo-id')) {
					return 'vimeo';
				} else if (target.attr('data-vzaar-id')) {
					return 'vzaar';
				} else {
					return 'youtube';
				}
			}(),
			    id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
			    width = target.attr('data-width') || this._core.settings.videoWidth,
			    height = target.attr('data-height') || this._core.settings.videoHeight,
			    url = target.attr('href');
	
			if (url) {
	
				/*
	   		Parses the id's out of the following urls (and probably more):
	   		https://www.youtube.com/watch?v=:id
	   		https://youtu.be/:id
	   		https://vimeo.com/:id
	   		https://vimeo.com/channels/:channel/:id
	   		https://vimeo.com/groups/:group/videos/:id
	   		https://app.vzaar.com/videos/:id
	   			Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
	   */
	
				id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);
	
				if (id[3].indexOf('youtu') > -1) {
					type = 'youtube';
				} else if (id[3].indexOf('vimeo') > -1) {
					type = 'vimeo';
				} else if (id[3].indexOf('vzaar') > -1) {
					type = 'vzaar';
				} else {
					throw new Error('Video URL not supported.');
				}
				id = id[6];
			} else {
				throw new Error('Missing video URL.');
			}
	
			this._videos[url] = {
				type: type,
				id: id,
				width: width,
				height: height
			};
	
			item.attr('data-video', url);
	
			this.thumbnail(target, this._videos[url]);
		};
	
		/**
	  * Creates video thumbnail.
	  * @protected
	  * @param {jQuery} target - The target containing the video data.
	  * @param {Object} info - The video info object.
	  * @see `fetch`
	  */
		Video.prototype.thumbnail = function (target, video) {
			var tnLink,
			    icon,
			    path,
			    dimensions = video.width && video.height ? 'style="width:' + video.width + 'px;height:' + video.height + 'px;"' : '',
			    customTn = target.find('img'),
			    srcType = 'src',
			    lazyClass = '',
			    settings = this._core.settings,
			    create = function create(path) {
				icon = '<div class="owl-video-play-icon"></div>';
	
				if (settings.lazyLoad) {
					tnLink = '<div class="owl-video-tn ' + lazyClass + '" ' + srcType + '="' + path + '"></div>';
				} else {
					tnLink = '<div class="owl-video-tn" style="opacity:1;background-image:url(' + path + ')"></div>';
				}
				target.after(tnLink);
				target.after(icon);
			};
	
			// wrap video content into owl-video-wrapper div
			target.wrap('<div class="owl-video-wrapper"' + dimensions + '></div>');
	
			if (this._core.settings.lazyLoad) {
				srcType = 'data-src';
				lazyClass = 'owl-lazy';
			}
	
			// custom thumbnail
			if (customTn.length) {
				create(customTn.attr(srcType));
				customTn.remove();
				return false;
			}
	
			if (video.type === 'youtube') {
				path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
				create(path);
			} else if (video.type === 'vimeo') {
				$.ajax({
					type: 'GET',
					url: '//vimeo.com/api/v2/video/' + video.id + '.json',
					jsonp: 'callback',
					dataType: 'jsonp',
					success: function success(data) {
						path = data[0].thumbnail_large;
						create(path);
					}
				});
			} else if (video.type === 'vzaar') {
				$.ajax({
					type: 'GET',
					url: '//vzaar.com/api/videos/' + video.id + '.json',
					jsonp: 'callback',
					dataType: 'jsonp',
					success: function success(data) {
						path = data.framegrab_url;
						create(path);
					}
				});
			}
		};
	
		/**
	  * Stops the current video.
	  * @public
	  */
		Video.prototype.stop = function () {
			this._core.trigger('stop', null, 'video');
			this._playing.find('.owl-video-frame').remove();
			this._playing.removeClass('owl-video-playing');
			this._playing = null;
			this._core.leave('playing');
			this._core.trigger('stopped', null, 'video');
		};
	
		/**
	  * Starts the current video.
	  * @public
	  * @param {Event} event - The event arguments.
	  */
		Video.prototype.play = function (event) {
			var target = $(event.target),
			    item = target.closest('.' + this._core.settings.itemClass),
			    video = this._videos[item.attr('data-video')],
			    width = video.width || '100%',
			    height = video.height || this._core.$stage.height(),
			    html;
	
			if (this._playing) {
				return;
			}
	
			this._core.enter('playing');
			this._core.trigger('play', null, 'video');
	
			item = this._core.items(this._core.relative(item.index()));
	
			this._core.reset(item.index());
	
			if (video.type === 'youtube') {
				html = '<iframe width="' + width + '" height="' + height + '" src="//www.youtube.com/embed/' + video.id + '?autoplay=1&v=' + video.id + '" frameborder="0" allowfullscreen></iframe>';
			} else if (video.type === 'vimeo') {
				html = '<iframe src="//player.vimeo.com/video/' + video.id + '?autoplay=1" width="' + width + '" height="' + height + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
			} else if (video.type === 'vzaar') {
				html = '<iframe frameborder="0"' + 'height="' + height + '"' + 'width="' + width + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen ' + 'src="//view.vzaar.com/' + video.id + '/player?autoplay=true"></iframe>';
			}
	
			$('<div class="owl-video-frame">' + html + '</div>').insertAfter(item.find('.owl-video'));
	
			this._playing = item.addClass('owl-video-playing');
		};
	
		/**
	  * Checks whether an video is currently in full screen mode or not.
	  * @todo Bad style because looks like a readonly method but changes members.
	  * @protected
	  * @returns {Boolean}
	  */
		Video.prototype.isInFullScreen = function () {
			var element = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
	
			return element && $(element).parent().hasClass('owl-video-frame');
		};
	
		/**
	  * Destroys the plugin.
	  */
		Video.prototype.destroy = function () {
			var handler, property;
	
			this._core.$element.off('click.owl.video');
	
			for (handler in this._handlers) {
				this._core.$element.off(handler, this._handlers[handler]);
			}
			for (property in Object.getOwnPropertyNames(this)) {
				typeof this[property] != 'function' && (this[property] = null);
			}
		};
	
		$.fn.owlCarousel.Constructor.Plugins.Video = Video;
	})(window.Zepto || window.jQuery, window, document);
	
	/**
	 * Animate Plugin
	 * @version 2.1.0
	 * @author Bartosz Wojciechowski
	 * @author David Deutsch
	 * @license The MIT License (MIT)
	 */
	;(function ($, window, document, undefined) {
	
		/**
	  * Creates the animate plugin.
	  * @class The Navigation Plugin
	  * @param {Owl} scope - The Owl Carousel
	  */
		var Animate = function Animate(scope) {
			this.core = scope;
			this.core.options = $.extend({}, Animate.Defaults, this.core.options);
			this.swapping = true;
			this.previous = undefined;
			this.next = undefined;
	
			this.handlers = {
				'change.owl.carousel': $.proxy(function (e) {
					if (e.namespace && e.property.name == 'position') {
						this.previous = this.core.current();
						this.next = e.property.value;
					}
				}, this),
				'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function (e) {
					if (e.namespace) {
						this.swapping = e.type == 'translated';
					}
				}, this),
				'translate.owl.carousel': $.proxy(function (e) {
					if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
						this.swap();
					}
				}, this)
			};
	
			this.core.$element.on(this.handlers);
		};
	
		/**
	  * Default options.
	  * @public
	  */
		Animate.Defaults = {
			animateOut: false,
			animateIn: false
		};
	
		/**
	  * Toggles the animation classes whenever an translations starts.
	  * @protected
	  * @returns {Boolean|undefined}
	  */
		Animate.prototype.swap = function () {
	
			if (this.core.settings.items !== 1) {
				return;
			}
	
			if (!$.support.animation || !$.support.transition) {
				return;
			}
	
			this.core.speed(0);
	
			var left,
			    clear = $.proxy(this.clear, this),
			    previous = this.core.$stage.children().eq(this.previous),
			    next = this.core.$stage.children().eq(this.next),
			    incoming = this.core.settings.animateIn,
			    outgoing = this.core.settings.animateOut;
	
			if (this.core.current() === this.previous) {
				return;
			}
	
			if (outgoing) {
				left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
				previous.one($.support.animation.end, clear).css({ 'left': left + 'px' }).addClass('animated owl-animated-out').addClass(outgoing);
			}
	
			if (incoming) {
				next.one($.support.animation.end, clear).addClass('animated owl-animated-in').addClass(incoming);
			}
		};
	
		Animate.prototype.clear = function (e) {
			$(e.target).css({ 'left': '' }).removeClass('animated owl-animated-out owl-animated-in').removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut);
			this.core.onTransitionEnd();
		};
	
		/**
	  * Destroys the plugin.
	  * @public
	  */
		Animate.prototype.destroy = function () {
			var handler, property;
	
			for (handler in this.handlers) {
				this.core.$element.off(handler, this.handlers[handler]);
			}
			for (property in Object.getOwnPropertyNames(this)) {
				typeof this[property] != 'function' && (this[property] = null);
			}
		};
	
		$.fn.owlCarousel.Constructor.Plugins.Animate = Animate;
	})(window.Zepto || window.jQuery, window, document);
	
	/**
	 * Autoplay Plugin
	 * @version 2.1.0
	 * @author Bartosz Wojciechowski
	 * @author Artus Kolanowski
	 * @author David Deutsch
	 * @license The MIT License (MIT)
	 */
	;(function ($, window, document, undefined) {
	
		/**
	  * Creates the autoplay plugin.
	  * @class The Autoplay Plugin
	  * @param {Owl} scope - The Owl Carousel
	  */
		var Autoplay = function Autoplay(carousel) {
			/**
	   * Reference to the core.
	   * @protected
	   * @type {Owl}
	   */
			this._core = carousel;
	
			/**
	   * The autoplay timeout.
	   * @type {Timeout}
	   */
			this._timeout = null;
	
			/**
	   * Indicates whenever the autoplay is paused.
	   * @type {Boolean}
	   */
			this._paused = false;
	
			/**
	   * All event handlers.
	   * @protected
	   * @type {Object}
	   */
			this._handlers = {
				'changed.owl.carousel': $.proxy(function (e) {
					if (e.namespace && e.property.name === 'settings') {
						if (this._core.settings.autoplay) {
							this.play();
						} else {
							this.stop();
						}
					} else if (e.namespace && e.property.name === 'position') {
						//console.log('play?', e);
						if (this._core.settings.autoplay) {
							this._setAutoPlayInterval();
						}
					}
				}, this),
				'initialized.owl.carousel': $.proxy(function (e) {
					if (e.namespace && this._core.settings.autoplay) {
						this.play();
					}
				}, this),
				'play.owl.autoplay': $.proxy(function (e, t, s) {
					if (e.namespace) {
						this.play(t, s);
					}
				}, this),
				'stop.owl.autoplay': $.proxy(function (e) {
					if (e.namespace) {
						this.stop();
					}
				}, this),
				'mouseover.owl.autoplay': $.proxy(function () {
					if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
						this.pause();
					}
				}, this),
				'mouseleave.owl.autoplay': $.proxy(function () {
					if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
						this.play();
					}
				}, this),
				'touchstart.owl.core': $.proxy(function () {
					if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
						this.pause();
					}
				}, this),
				'touchend.owl.core': $.proxy(function () {
					if (this._core.settings.autoplayHoverPause) {
						this.play();
					}
				}, this)
			};
	
			// register event handlers
			this._core.$element.on(this._handlers);
	
			// set default options
			this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
		};
	
		/**
	  * Default options.
	  * @public
	  */
		Autoplay.Defaults = {
			autoplay: false,
			autoplayTimeout: 5000,
			autoplayHoverPause: false,
			autoplaySpeed: false
		};
	
		/**
	  * Starts the autoplay.
	  * @public
	  * @param {Number} [timeout] - The interval before the next animation starts.
	  * @param {Number} [speed] - The animation speed for the animations.
	  */
		Autoplay.prototype.play = function (timeout, speed) {
			this._paused = false;
	
			if (this._core.is('rotating')) {
				return;
			}
	
			this._core.enter('rotating');
	
			this._setAutoPlayInterval();
		};
	
		/**
	  * Gets a new timeout
	  * @private
	  * @param {Number} [timeout] - The interval before the next animation starts.
	  * @param {Number} [speed] - The animation speed for the animations.
	  * @return {Timeout}
	  */
		Autoplay.prototype._getNextTimeout = function (timeout, speed) {
			if (this._timeout) {
				window.clearTimeout(this._timeout);
			}
			return window.setTimeout($.proxy(function () {
				if (this._paused || this._core.is('busy') || this._core.is('interacting') || document.hidden) {
					return;
				}
				this._core.next(speed || this._core.settings.autoplaySpeed);
			}, this), timeout || this._core.settings.autoplayTimeout);
		};
	
		/**
	  * Sets autoplay in motion.
	  * @private
	  */
		Autoplay.prototype._setAutoPlayInterval = function () {
			this._timeout = this._getNextTimeout();
		};
	
		/**
	  * Stops the autoplay.
	  * @public
	  */
		Autoplay.prototype.stop = function () {
			if (!this._core.is('rotating')) {
				return;
			}
	
			window.clearTimeout(this._timeout);
			this._core.leave('rotating');
		};
	
		/**
	  * Stops the autoplay.
	  * @public
	  */
		Autoplay.prototype.pause = function () {
			if (!this._core.is('rotating')) {
				return;
			}
	
			this._paused = true;
		};
	
		/**
	  * Destroys the plugin.
	  */
		Autoplay.prototype.destroy = function () {
			var handler, property;
	
			this.stop();
	
			for (handler in this._handlers) {
				this._core.$element.off(handler, this._handlers[handler]);
			}
			for (property in Object.getOwnPropertyNames(this)) {
				typeof this[property] != 'function' && (this[property] = null);
			}
		};
	
		$.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;
	})(window.Zepto || window.jQuery, window, document);
	
	/**
	 * Navigation Plugin
	 * @version 2.1.0
	 * @author Artus Kolanowski
	 * @author David Deutsch
	 * @license The MIT License (MIT)
	 */
	;(function ($, window, document, undefined) {
		'use strict';
	
		/**
	  * Creates the navigation plugin.
	  * @class The Navigation Plugin
	  * @param {Owl} carousel - The Owl Carousel.
	  */
	
		var Navigation = function Navigation(carousel) {
			/**
	   * Reference to the core.
	   * @protected
	   * @type {Owl}
	   */
			this._core = carousel;
	
			/**
	   * Indicates whether the plugin is initialized or not.
	   * @protected
	   * @type {Boolean}
	   */
			this._initialized = false;
	
			/**
	   * The current paging indexes.
	   * @protected
	   * @type {Array}
	   */
			this._pages = [];
	
			/**
	   * All DOM elements of the user interface.
	   * @protected
	   * @type {Object}
	   */
			this._controls = {};
	
			/**
	   * Markup for an indicator.
	   * @protected
	   * @type {Array.<String>}
	   */
			this._templates = [];
	
			/**
	   * The carousel element.
	   * @type {jQuery}
	   */
			this.$element = this._core.$element;
	
			/**
	   * Overridden methods of the carousel.
	   * @protected
	   * @type {Object}
	   */
			this._overrides = {
				next: this._core.next,
				prev: this._core.prev,
				to: this._core.to
			};
	
			/**
	   * All event handlers.
	   * @protected
	   * @type {Object}
	   */
			this._handlers = {
				'prepared.owl.carousel': $.proxy(function (e) {
					if (e.namespace && this._core.settings.dotsData) {
						this._templates.push('<div class="' + this._core.settings.dotClass + '">' + $(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
					}
				}, this),
				'added.owl.carousel': $.proxy(function (e) {
					if (e.namespace && this._core.settings.dotsData) {
						this._templates.splice(e.position, 0, this._templates.pop());
					}
				}, this),
				'remove.owl.carousel': $.proxy(function (e) {
					if (e.namespace && this._core.settings.dotsData) {
						this._templates.splice(e.position, 1);
					}
				}, this),
				'changed.owl.carousel': $.proxy(function (e) {
					if (e.namespace && e.property.name == 'position') {
						this.draw();
					}
				}, this),
				'initialized.owl.carousel': $.proxy(function (e) {
					if (e.namespace && !this._initialized) {
						this._core.trigger('initialize', null, 'navigation');
						this.initialize();
						this.update();
						this.draw();
						this._initialized = true;
						this._core.trigger('initialized', null, 'navigation');
					}
				}, this),
				'refreshed.owl.carousel': $.proxy(function (e) {
					if (e.namespace && this._initialized) {
						this._core.trigger('refresh', null, 'navigation');
						this.update();
						this.draw();
						this._core.trigger('refreshed', null, 'navigation');
					}
				}, this)
			};
	
			// set default options
			this._core.options = $.extend({}, Navigation.Defaults, this._core.options);
	
			// register event handlers
			this.$element.on(this._handlers);
		};
	
		/**
	  * Default options.
	  * @public
	  * @todo Rename `slideBy` to `navBy`
	  */
		Navigation.Defaults = {
			nav: false,
			navText: ['prev', 'next'],
			navSpeed: false,
			navElement: 'div',
			navContainer: false,
			navContainerClass: 'owl-nav',
			navClass: ['owl-prev', 'owl-next'],
			slideBy: 1,
			dotClass: 'owl-dot',
			dotsClass: 'owl-dots',
			dots: true,
			dotsEach: false,
			dotsData: false,
			dotsSpeed: false,
			dotsContainer: false
		};
	
		/**
	  * Initializes the layout of the plugin and extends the carousel.
	  * @protected
	  */
		Navigation.prototype.initialize = function () {
			var override,
			    settings = this._core.settings;
	
			// create DOM structure for relative navigation
			this._controls.$relative = (settings.navContainer ? $(settings.navContainer) : $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');
	
			this._controls.$previous = $('<' + settings.navElement + '>').addClass(settings.navClass[0]).html(settings.navText[0]).prependTo(this._controls.$relative).on('click', $.proxy(function (e) {
				this.prev(settings.navSpeed);
			}, this));
			this._controls.$next = $('<' + settings.navElement + '>').addClass(settings.navClass[1]).html(settings.navText[1]).appendTo(this._controls.$relative).on('click', $.proxy(function (e) {
				this.next(settings.navSpeed);
			}, this));
	
			// create DOM structure for absolute navigation
			if (!settings.dotsData) {
				this._templates = [$('<div>').addClass(settings.dotClass).append($('<span>')).prop('outerHTML')];
			}
	
			this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer) : $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');
	
			this._controls.$absolute.on('click', 'div', $.proxy(function (e) {
				var index = $(e.target).parent().is(this._controls.$absolute) ? $(e.target).index() : $(e.target).parent().index();
	
				e.preventDefault();
	
				this.to(index, settings.dotsSpeed);
			}, this));
	
			// override public methods of the carousel
			for (override in this._overrides) {
				this._core[override] = $.proxy(this[override], this);
			}
		};
	
		/**
	  * Destroys the plugin.
	  * @protected
	  */
		Navigation.prototype.destroy = function () {
			var handler, control, property, override;
	
			for (handler in this._handlers) {
				this.$element.off(handler, this._handlers[handler]);
			}
			for (control in this._controls) {
				this._controls[control].remove();
			}
			for (override in this.overides) {
				this._core[override] = this._overrides[override];
			}
			for (property in Object.getOwnPropertyNames(this)) {
				typeof this[property] != 'function' && (this[property] = null);
			}
		};
	
		/**
	  * Updates the internal state.
	  * @protected
	  */
		Navigation.prototype.update = function () {
			var i,
			    j,
			    k,
			    lower = this._core.clones().length / 2,
			    upper = lower + this._core.items().length,
			    maximum = this._core.maximum(true),
			    settings = this._core.settings,
			    size = settings.center || settings.autoWidth || settings.dotsData ? 1 : settings.dotsEach || settings.items;
	
			if (settings.slideBy !== 'page') {
				settings.slideBy = Math.min(settings.slideBy, settings.items);
			}
	
			if (settings.dots || settings.slideBy == 'page') {
				this._pages = [];
	
				for (i = lower, j = 0, k = 0; i < upper; i++) {
					if (j >= size || j === 0) {
						this._pages.push({
							start: Math.min(maximum, i - lower),
							end: i - lower + size - 1
						});
						if (Math.min(maximum, i - lower) === maximum) {
							break;
						}
						j = 0, ++k;
					}
					j += this._core.mergers(this._core.relative(i));
				}
			}
		};
	
		/**
	  * Draws the user interface.
	  * @todo The option `dotsData` wont work.
	  * @protected
	  */
		Navigation.prototype.draw = function () {
			var difference,
			    settings = this._core.settings,
			    disabled = this._core.items().length <= settings.items,
			    index = this._core.relative(this._core.current()),
			    loop = settings.loop || settings.rewind;
	
			this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);
	
			if (settings.nav) {
				this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
				this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
			}
	
			this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);
	
			if (settings.dots) {
				difference = this._pages.length - this._controls.$absolute.children().length;
	
				if (settings.dotsData && difference !== 0) {
					this._controls.$absolute.html(this._templates.join(''));
				} else if (difference > 0) {
					this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
				} else if (difference < 0) {
					this._controls.$absolute.children().slice(difference).remove();
				}
	
				this._controls.$absolute.find('.active').removeClass('active');
				this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
			}
		};
	
		/**
	  * Extends event data.
	  * @protected
	  * @param {Event} event - The event object which gets thrown.
	  */
		Navigation.prototype.onTrigger = function (event) {
			var settings = this._core.settings;
	
			event.page = {
				index: $.inArray(this.current(), this._pages),
				count: this._pages.length,
				size: settings && (settings.center || settings.autoWidth || settings.dotsData ? 1 : settings.dotsEach || settings.items)
			};
		};
	
		/**
	  * Gets the current page position of the carousel.
	  * @protected
	  * @returns {Number}
	  */
		Navigation.prototype.current = function () {
			var current = this._core.relative(this._core.current());
			return $.grep(this._pages, $.proxy(function (page, index) {
				return page.start <= current && page.end >= current;
			}, this)).pop();
		};
	
		/**
	  * Gets the current succesor/predecessor position.
	  * @protected
	  * @returns {Number}
	  */
		Navigation.prototype.getPosition = function (successor) {
			var position,
			    length,
			    settings = this._core.settings;
	
			if (settings.slideBy == 'page') {
				position = $.inArray(this.current(), this._pages);
				length = this._pages.length;
				successor ? ++position : --position;
				position = this._pages[(position % length + length) % length].start;
			} else {
				position = this._core.relative(this._core.current());
				length = this._core.items().length;
				successor ? position += settings.slideBy : position -= settings.slideBy;
			}
	
			return position;
		};
	
		/**
	  * Slides to the next item or page.
	  * @public
	  * @param {Number} [speed=false] - The time in milliseconds for the transition.
	  */
		Navigation.prototype.next = function (speed) {
			$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
		};
	
		/**
	  * Slides to the previous item or page.
	  * @public
	  * @param {Number} [speed=false] - The time in milliseconds for the transition.
	  */
		Navigation.prototype.prev = function (speed) {
			$.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
		};
	
		/**
	  * Slides to the specified item or page.
	  * @public
	  * @param {Number} position - The position of the item or page.
	  * @param {Number} [speed] - The time in milliseconds for the transition.
	  * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
	  */
		Navigation.prototype.to = function (position, speed, standard) {
			var length;
	
			if (!standard && this._pages.length) {
				length = this._pages.length;
				$.proxy(this._overrides.to, this._core)(this._pages[(position % length + length) % length].start, speed);
			} else {
				$.proxy(this._overrides.to, this._core)(position, speed);
			}
		};
	
		$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;
	})(window.Zepto || window.jQuery, window, document);
	
	/**
	 * Hash Plugin
	 * @version 2.1.0
	 * @author Artus Kolanowski
	 * @author David Deutsch
	 * @license The MIT License (MIT)
	 */
	;(function ($, window, document, undefined) {
		'use strict';
	
		/**
	  * Creates the hash plugin.
	  * @class The Hash Plugin
	  * @param {Owl} carousel - The Owl Carousel
	  */
	
		var Hash = function Hash(carousel) {
			/**
	   * Reference to the core.
	   * @protected
	   * @type {Owl}
	   */
			this._core = carousel;
	
			/**
	   * Hash index for the items.
	   * @protected
	   * @type {Object}
	   */
			this._hashes = {};
	
			/**
	   * The carousel element.
	   * @type {jQuery}
	   */
			this.$element = this._core.$element;
	
			/**
	   * All event handlers.
	   * @protected
	   * @type {Object}
	   */
			this._handlers = {
				'initialized.owl.carousel': $.proxy(function (e) {
					if (e.namespace && this._core.settings.startPosition === 'URLHash') {
						$(window).trigger('hashchange.owl.navigation');
					}
				}, this),
				'prepared.owl.carousel': $.proxy(function (e) {
					if (e.namespace) {
						var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');
	
						if (!hash) {
							return;
						}
	
						this._hashes[hash] = e.content;
					}
				}, this),
				'changed.owl.carousel': $.proxy(function (e) {
					if (e.namespace && e.property.name === 'position') {
						var current = this._core.items(this._core.relative(this._core.current())),
						    hash = $.map(this._hashes, function (item, hash) {
							return item === current ? hash : null;
						}).join();
	
						if (!hash || window.location.hash.slice(1) === hash) {
							return;
						}
	
						window.location.hash = hash;
					}
				}, this)
			};
	
			// set default options
			this._core.options = $.extend({}, Hash.Defaults, this._core.options);
	
			// register the event handlers
			this.$element.on(this._handlers);
	
			// register event listener for hash navigation
			$(window).on('hashchange.owl.navigation', $.proxy(function (e) {
				var hash = window.location.hash.substring(1),
				    items = this._core.$stage.children(),
				    position = this._hashes[hash] && items.index(this._hashes[hash]);
	
				if (position === undefined || position === this._core.current()) {
					return;
				}
	
				this._core.to(this._core.relative(position), false, true);
			}, this));
		};
	
		/**
	  * Default options.
	  * @public
	  */
		Hash.Defaults = {
			URLhashListener: false
		};
	
		/**
	  * Destroys the plugin.
	  * @public
	  */
		Hash.prototype.destroy = function () {
			var handler, property;
	
			$(window).off('hashchange.owl.navigation');
	
			for (handler in this._handlers) {
				this._core.$element.off(handler, this._handlers[handler]);
			}
			for (property in Object.getOwnPropertyNames(this)) {
				typeof this[property] != 'function' && (this[property] = null);
			}
		};
	
		$.fn.owlCarousel.Constructor.Plugins.Hash = Hash;
	})(window.Zepto || window.jQuery, window, document);
	
	/**
	 * Support Plugin
	 *
	 * @version 2.1.0
	 * @author Vivid Planet Software GmbH
	 * @author Artus Kolanowski
	 * @author David Deutsch
	 * @license The MIT License (MIT)
	 */
	;(function ($, window, document, undefined) {
	
		var style = $('<support>').get(0).style,
		    prefixes = 'Webkit Moz O ms'.split(' '),
		    events = {
			transition: {
				end: {
					WebkitTransition: 'webkitTransitionEnd',
					MozTransition: 'transitionend',
					OTransition: 'oTransitionEnd',
					transition: 'transitionend'
				}
			},
			animation: {
				end: {
					WebkitAnimation: 'webkitAnimationEnd',
					MozAnimation: 'animationend',
					OAnimation: 'oAnimationEnd',
					animation: 'animationend'
				}
			}
		},
		    tests = {
			csstransforms: function csstransforms() {
				return !!test('transform');
			},
			csstransforms3d: function csstransforms3d() {
				return !!test('perspective');
			},
			csstransitions: function csstransitions() {
				return !!test('transition');
			},
			cssanimations: function cssanimations() {
				return !!test('animation');
			}
		};
	
		function test(property, prefixed) {
			var result = false,
			    upper = property.charAt(0).toUpperCase() + property.slice(1);
	
			$.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function (i, property) {
				if (style[property] !== undefined) {
					result = prefixed ? property : true;
					return false;
				}
			});
	
			return result;
		}
	
		function prefixed(property) {
			return test(property, true);
		}
	
		if (tests.csstransitions()) {
			/* jshint -W053 */
			$.support.transition = new String(prefixed('transition'));
			$.support.transition.end = events.transition.end[$.support.transition];
		}
	
		if (tests.cssanimations()) {
			/* jshint -W053 */
			$.support.animation = new String(prefixed('animation'));
			$.support.animation.end = events.animation.end[$.support.animation];
		}
	
		if (tests.csstransforms()) {
			/* jshint -W053 */
			$.support.transform = new String(prefixed('transform'));
			$.support.transform3d = tests.csstransforms3d();
		}
	})(window.Zepto || window.jQuery, window, document);

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Owl Carousel v2 Accessibility Plugin
	 * Version 0.2.1
	 *
	 * https://github.com/rtrvrtg/owlcarousel2-a11ylayer
	 *
	 * The MIT License (MIT)
	 *
	 * Copyright (c) 2015 Geoffrey Roberts
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 *
	 *
	 * © Geoffrey Roberts 2016
	 */
	
	;
	(function ($, window) {
	
	  var Owl2A11y = function Owl2A11y(carousel) {
	    this._core = carousel;
	    this._initialized = false;
	
	    this._core._options = $.extend(Owl2A11y.defaults, this._core.options);
	
	    this.$element = this._core.$element;
	
	    var setCurrent = $.proxy(function (e) {
	      this.setCurrent(e);
	    }, this);
	
	    this._handlers = {
	      'initialized.owl.carousel': $.proxy(function (e) {
	        this.setupRoot();
	        if (e.namespace && !this._initialized) {
	          this.setupFocus();
	          this.setupKeyboard();
	        }
	        this.setCurrent(e);
	      }, this),
	      'changed.owl.carousel': setCurrent,
	      'translated.owl.carousel': setCurrent,
	      'refreshed.owl.carousel': setCurrent,
	      'resized.owl.carousel': setCurrent
	    };
	    this.$element.on(this._handlers);
	  };
	
	  /* PREFERENCES */
	
	  /**
	   * Contains default parameters, if there were any.
	   */
	  Owl2A11y.defaults = {};
	
	  /* EVENT HANDLERS */
	
	  /**
	   * Adds support for things that don't map nicely to the root object
	   * such as event handlers.
	   */
	  Owl2A11y.eventHandlers = {};
	
	  /**
	   * Get a callback for keyup events within this carousel.
	   *
	   * @return callback
	   *   An event callback that takes an Event as an argument.
	   */
	  Owl2A11y.prototype.getDocumentKeyUp = function () {
	    var self = this;
	    return function (e) {
	      var eventTarg = $(e.target),
	          targ = self.focused(eventTarg),
	          action = null;
	
	      if (!!targ) {
	        if (e.keyCode == 37 || e.keyCode == 38) {
	          action = 'prev.owl.carousel';
	        } else if (e.keyCode == 39 || e.keyCode == 40) {
	          action = 'next.owl.carousel';
	        } else if (e.keyCode == 13) {
	          if (eventTarg.hasClass('owl-prev')) action = 'prev.owl.carousel';else if (eventTarg.hasClass('owl-next')) action = 'next.owl.carousel';else if (eventTarg.hasClass('owl-dot')) action = 'click';
	        }
	
	        if (!!action) targ.trigger(action);
	      }
	    };
	  };
	
	  /* SETUP AND TEAR DOWN */
	
	  /**
	   * Assign attributes to the root element.
	   */
	  Owl2A11y.prototype.setupRoot = function () {}
	  // @FIXME
	  // this.$element.attr({
	  //   role: 'listbox',
	  //   tabindex: '0'
	  // })
	
	
	  /**
	   * Setup keyboard events for this carousel.
	   */
	  ;Owl2A11y.prototype.setupKeyboard = function () {
	    // Only needed to initialise once for the entire document
	    if (!this.$element.attr('data-owl-access-keyup')) {
	      this.$element.bind('keyup', this.getDocumentKeyUp()).attr('data-owl-access-keyup', '1');
	    }
	    this.$element.attr('data-owl-carousel-focusable', '1');
	  };
	
	  /**
	   * Setup focusing behaviour for the carousel.
	   */
	  Owl2A11y.prototype.setupFocus = function () {
	    // Only needed to initialise once for the entire document
	    this.$element.bind('focusin', function () {
	      $(this).attr({
	        'data-owl-carousel-focused': '1',
	        'aria-live': 'polite'
	      }).trigger('stop.owl.autoplay');
	    }).bind('focusout', function () {
	      $(this).attr({
	        'data-owl-carousel-focused': '0',
	        'aria-live': 'off'
	      }).trigger('play.owl.autoplay');
	    });
	
	    // Add tabindex to allow navigation to be focused.
	    if (!!this._core._plugins.navigation) {
	      var navPlugin = this._core._plugins.navigation,
	          toFocus = [];
	      if (!!navPlugin._controls.$previous) {
	        toFocus.push(navPlugin._controls.$previous);
	      }
	      if (!!navPlugin._controls.$next) {
	        toFocus.push(navPlugin._controls.$next);
	      }
	      if (!!navPlugin._controls.$indicators) {
	        toFocus.push(navPlugin._controls.$indicators.children());
	      }
	      $.each(toFocus, function () {
	        this.attr('tabindex', '0');
	      });
	    }
	  };
	
	  /**
	   * Assign attributes to the root element.
	   */
	  Owl2A11y.prototype.destroy = function () {
	    this.$element.unbind('keyup', this.eventHandlers.documentKeyUp).removeAttr('data-owl-access-keyup data-owl-carousel-focusable').unbind('focusin focusout');
	  };
	
	  /* HELPER FUNCTIONS */
	
	  /**
	   * Identifies all focusable elements within a given element.
	   *
	   * @param DOMElement elem
	   *   A DOM element.
	   *
	   * @return jQuery
	   *   A jQuery object that may refer to zero or more focusable elements.
	   */
	  Owl2A11y.prototype.focusableElems = function (elem) {
	    return $(elem).find('a, input, select, button, *[tabindex]');
	  };
	
	  /**
	   * Identifies all focusable elements within a given element.
	   *
	   * @param jQeury elems
	   *   A jQuery object that may refer to zero or more focusable elements.
	   * @param boolean enable
	   *   Whether focus is to be enabled on these elements or not.
	   */
	  Owl2A11y.prototype.adjustFocus = function (elems, enable) {
	    elems.each(function () {
	      var item = $(this);
	      var newTabIndex = '0',
	          storeTabIndex = '0',
	          currentTabIndex = item.attr('tabindex'),
	          storedTabIndex = item.attr('data-owl-temp-tabindex');
	
	      if (enable) {
	        newTabIndex = typeof storedTabIndex != 'undefined' && storedTabIndex != '-1' ? item.attr('data-owl-temp-tabindex') : '0';
	        storedTabIndex = newTabIndex;
	      } else {
	        newTabIndex = '-1';
	        storedTabIndex = typeof currentTabIndex != 'undefined' || currentTabIndex != '-1' ? currentTabIndex : '0';
	      }
	
	      item.attr({
	        tabindex: newTabIndex,
	        'data-owl-temp-tabindex': storeTabIndex
	      });
	    });
	  };
	
	  /**
	   * Get the root element if we are focused within it.
	   *
	   * @param DOMElement targ
	   *   An element that might be within this carousel.
	   *
	   * @return mixed
	   *   Either the jQuery element containing the root element, or NULL.
	   */
	  Owl2A11y.prototype.focused = function (targ) {
	    var targ = $(targ);
	    if (targ.attr('data-owl-carousel-focused') == 1) {
	      return targ;
	    }
	    var closest = targ.closest('[data-owl-carousel-focused="1"]');
	    if (closest.length > 0) return closest;
	    return null;
	  };
	
	  /* UPDATE FUNCTIONS */
	
	  /**
	   * Identify active elements, set WAI-ARIA sttributes accordingly,
	   * scroll to show element if we need to, and set up focusing.
	   *
	   * @param Event e
	   *   The triggering event.
	   */
	  Owl2A11y.prototype.setCurrent = function () {
	    var targ = this.focused($(':focus')),
	        element = this._core.$element,
	        stage = this._core.$stage,
	        focusableElems = this.focusableElems,
	        adjustFocus = this.adjustFocus;
	
	    if (!!stage) {
	      var offs = stage.offset();
	      if (!!targ) {
	        window.scrollTo(offs.left, offs.top - parseInt($('body').css('padding-top'), 10));
	      }
	
	      this._core.$stage.children().each(function () {
	        var item = $(this);
	        var focusable = focusableElems(this);
	
	        // Use the active class to determine if we can see it or not.
	        // Pretty lazy, but the Owl API doesn't make it easy to tell
	        // from indices alone.
	        if (item.hasClass('active')) {
	          item.attr('aria-hidden', 'false');
	          adjustFocus(focusable, true);
	        } else {
	          item.attr('aria-hidden', 'true');
	          adjustFocus(focusable, false);
	        }
	      });
	
	      if (!!targ) {
	        // Focus on the root element after we're done moving,
	        // but only if we're not using the controls.
	        setTimeout(function () {
	          var newFocus = element;
	          if ($(':focus').closest('.owl-controls').length) {
	            newFocus = $(':focus');
	          }
	          newFocus.focus();
	        }, 250);
	      }
	    }
	  };
	
	  $.fn.owlCarousel.Constructor.Plugins['Owl2A11y'] = Owl2A11y;
	})(window.Zepto || window.jQuery, window);

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jquery = __webpack_require__(4);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _jquery3 = __webpack_require__(21);
	
	var _jquery4 = _interopRequireDefault(_jquery3);
	
	var _cookiebar = __webpack_require__(22);
	
	var _cookiebar2 = _interopRequireDefault(_cookiebar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/* eslint-enable no-unused-vars */
	
	/* eslint-disable no-unused-vars */
	
	var opts = {
	  'acceptButton': '.js-cookieBarAccept',
	  'secure': false,
	  'path': '/',
	  'domain': ''
	};
	
	(0, _jquery2['default'])(document).ready(function () {
	  (0, _jquery2['default'])('.js-CookieBar').cookieBar(opts);
	});
	
	exports['default'] = {
	  opts: opts
	};
	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	/*!
	 * jQuery Cookie Plugin v1.4.1
	 * https://github.com/carhartl/jquery-cookie
	 *
	 * Copyright 2013 Klaus Hartl
	 * Released under the MIT license
	 */
	(function (factory) {
		if (true) {
			// AMD
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
			// CommonJS
			factory(require('jquery'));
		} else {
			// Browser globals
			factory(jQuery);
		}
	})(function ($) {
	
		var pluses = /\+/g;
	
		function encode(s) {
			return config.raw ? s : encodeURIComponent(s);
		}
	
		function decode(s) {
			return config.raw ? s : decodeURIComponent(s);
		}
	
		function stringifyCookieValue(value) {
			return encode(config.json ? JSON.stringify(value) : String(value));
		}
	
		function parseCookieValue(s) {
			if (s.indexOf('"') === 0) {
				// This is a quoted cookie as according to RFC2068, unescape...
				s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
			}
	
			try {
				// Replace server-side written pluses with spaces.
				// If we can't decode the cookie, ignore it, it's unusable.
				// If we can't parse the cookie, ignore it, it's unusable.
				s = decodeURIComponent(s.replace(pluses, ' '));
				return config.json ? JSON.parse(s) : s;
			} catch (e) {}
		}
	
		function read(s, converter) {
			var value = config.raw ? s : parseCookieValue(s);
			return $.isFunction(converter) ? converter(value) : value;
		}
	
		var config = $.cookie = function (key, value, options) {
	
			// Write
	
			if (value !== undefined && !$.isFunction(value)) {
				options = $.extend({}, config.defaults, options);
	
				if (typeof options.expires === 'number') {
					var days = options.expires,
					    t = options.expires = new Date();
					t.setTime(+t + days * 864e+5);
				}
	
				return document.cookie = [encode(key), '=', stringifyCookieValue(value), options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join('');
			}
	
			// Read
	
			var result = key ? undefined : {};
	
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling $.cookie().
			var cookies = document.cookie ? document.cookie.split('; ') : [];
	
			for (var i = 0, l = cookies.length; i < l; i++) {
				var parts = cookies[i].split('=');
				var name = decode(parts.shift());
				var cookie = parts.join('=');
	
				if (key && key === name) {
					// If second argument (value) is a function it's a converter...
					result = read(cookie, value);
					break;
				}
	
				// Prevent storing a cookie that we couldn't decode.
				if (!key && (cookie = read(cookie)) !== undefined) {
					result[name] = cookie;
				}
			}
	
			return result;
		};
	
		config.defaults = {};
	
		$.removeCookie = function (key, options) {
			if ($.cookie(key) === undefined) {
				return false;
			}
	
			// Must not alter options, thus extending a fresh object...
			$.cookie(key, '', $.extend({}, options, { expires: -1 }));
			return !$.cookie(key);
		};
	});

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';
	
	/* global jQuery */
	
	/*
	 *	Fork of
	 *
	 *	https://github.com/carlwoodhouse/jquery.cookieBar
	 *	The MIT License (MIT)
	 *	Copyright (c) 2016 Carl Woodhouse
	 *
	 */
	(function ($) {
	
	  $.fn.cookieBar = function (options) {
	
	    var settings = $.extend({
	      'acceptButton': '.js-cookieBarAccept',
	      'secure': false,
	      'path': '/',
	      'domain': '',
	      'threshold': 500
	    }, options);
	
	    var _accept = function _accept() {
	      $.cookie('cookiebar', 'hide', {
	        path: settings.path,
	        secure: settings.secure,
	        domain: settings.domain,
	        expires: 30
	      });
	    };
	
	    return this.each(function () {
	      var $cookiebar = $(this);
	
	      if ($.cookie('cookiebar') !== 'hide') {
	        if (settings.threshold > 0) {
	          $(window).on('scroll.cookiebar', function () {
	            if ($(window).scrollTop() > settings.threshold) {
	              $(window).unbind('.cookiebar');
	              _accept();
	              $cookiebar.hide();
	            }
	          });
	        }
	        $cookiebar.show();
	      }
	
	      $cookiebar.find(settings.acceptButton).click(function () {
	        $cookiebar.hide();
	        _accept();
	        return false;
	      });
	    });
	  };
	})(jQuery);

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _frDialogmodal = __webpack_require__(24);
	
	var _frDialogmodal2 = _interopRequireDefault(_frDialogmodal);
	
	var _dialogmodal = __webpack_require__(25);
	
	var _dialogmodal2 = _interopRequireDefault(_dialogmodal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/* eslint-enable */
	
	var dialog = (0, _frDialogmodal2['default'])({
	  // String - Outer container selector, hook for JS init() method
	  selector: '.js-fr-dialogmodal',
	
	  // String - Modal selector, the element that represents the modal
	  modalSelector: '.js-fr-dialogmodal-modal',
	
	  // String - Selector for the open button
	  openSelector: '.js-fr-dialogmodal-open',
	
	  // String - Selector for the close button
	  closeSelector: '.js-fr-dialogmodal-close',
	
	  // Boolean - Switches the dialog role to alertdialog, only use this when representing an alert, error or warning
	  isAlert: false,
	
	  // String - Class name that will be added to the selector when the component has been initialised
	  readyClass: 'fr-dialogmodal--is-ready',
	
	  // String - Class name that will be added to the selector when the component is active
	  activeClass: 'fr-dialogmodal--is-active'
	});
	
	/* eslint-disable no-unused-vars */
	
	exports['default'] = { dialog: dialog, Frdialogmodal: _frDialogmodal2['default'] };
	module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * @param {object} options Object containing configuration overrides
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var Frdialogmodal = function Frdialogmodal() {
		var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
		var _ref$selector = _ref.selector;
		var selector = _ref$selector === undefined ? '.js-fr-dialogmodal' : _ref$selector;
		var _ref$modalSelector = _ref.modalSelector;
		var modalSelector = _ref$modalSelector === undefined ? '.js-fr-dialogmodal-modal' : _ref$modalSelector;
		var _ref$openSelector = _ref.openSelector;
		var openSelector = _ref$openSelector === undefined ? '.js-fr-dialogmodal-open' : _ref$openSelector;
		var _ref$closeSelector = _ref.closeSelector;
		var closeSelector = _ref$closeSelector === undefined ? '.js-fr-dialogmodal-close' : _ref$closeSelector;
		var _ref$isAlert = _ref.isAlert;
		var isAlert = _ref$isAlert === undefined ? false : _ref$isAlert;
		var _ref$readyClass = _ref.readyClass;
		var readyClass = _ref$readyClass === undefined ? 'fr-dialogmodal--is-ready' : _ref$readyClass;
		var _ref$activeClass = _ref.activeClass;
		var activeClass = _ref$activeClass === undefined ? 'fr-dialogmodal--is-active' : _ref$activeClass;
	
	
		// CONSTANTS
		var doc = document;
		var docEl = doc.documentElement;
		var _q = function _q(el) {
			var ctx = arguments.length <= 1 || arguments[1] === undefined ? doc : arguments[1];
			return [].slice.call(ctx.querySelectorAll(el));
		};
	
		// SUPPORTS
		if (!('querySelector' in doc) || !('addEventListener' in window) || !docEl.classList) return;
	
		// SETUP
		// set accordion element NodeLists
		var containers = _q(selector);
		var focusableSelectors = ['a[href]', 'area[href]', 'input:not([disabled])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'iframe', 'object', 'embed', '[contenteditable]', '[tabindex]:not([tabindex^="-"])'];
		//	TEMP
		var currButtonOpen = null;
		var currModal = null;
		//	elements within tab
		var focusableElements = null;
	
		//	UTILS
		function _defer(fn) {
			//	wrapped in setTimeout to delay binding until previous rendering has completed
			if (typeof fn === 'function') setTimeout(fn, 0);
		}
	
		//	A11Y
		function _addA11y(container) {
			var modal = _q(modalSelector, container)[0];
			var role = isAlert ? 'alertdialog' : 'dialog';
			//	add relevant roles and properties
			container.setAttribute('aria-hidden', true);
			modal.setAttribute('role', role);
		}
		function _removeA11y(container) {
			var modal = _q(modalSelector, container)[0];
			//	add relevant roles and properties
			container.removeAttribute('aria-hidden');
			modal.removeAttribute('role');
		}
	
		//	ACTIONS
		function _showModal(container, modal) {
			//	show container and focus the modal
			container.setAttribute('aria-hidden', false);
			modal.setAttribute('tabindex', -1);
			//	set first/last focusable elements
			focusableElements = _q(focusableSelectors.join(), modal);
			//	focus first element if exists, otherwise focus modal element
			if (focusableElements.length) focusableElements[0].focus();else modal.focus();
			//	update bound events
			_defer(_bindDocKey);
			_defer(_bindClosePointer);
			//	if contents are not interactive, bind click off
			if (!isAlert) _defer(_bindContainerPointer);
			//	reset scroll
			modal.scrollTop = 0;
			//	update style hook
			container.classList.add(activeClass);
		}
		function _hideModal(modal) {
			var returnfocus = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
	
			//	get container element
			var container = modal.parentElement;
			//	show container and focus the modal
			container.setAttribute('aria-hidden', true);
			modal.removeAttribute('tabindex');
			//	update bound events
			_unbindDocKey();
			_unbindClosePointer();
			//	if contents are not interactive, unbind click off
			if (!isAlert) _unbindContainerPointer();
			//	update style hook
			container.classList.remove(activeClass);
			//	return focus to button that opened the modal and reset the reference
			if (returnfocus) {
				currButtonOpen.focus();
				currButtonOpen = null;
			}
		}
		function _handleTabEvent(e) {
			//	get the index of the current active element within the modal
			var focusedIndex = focusableElements.indexOf(doc.activeElement);
			//	handle TAB event if need to skip
			//	if first element is focused and shiftkey is in use
			if (e.shiftKey && (focusedIndex === 0 || focusedIndex === -1)) {
				//	focus last item within modal
				focusableElements[focusableElements.length - 1].focus();
				e.preventDefault();
				//	if last element is focused and shiftkey is not in use
			} else if (!e.shiftKey && focusedIndex === focusableElements.length - 1) {
				//	focus first item within modal
				focusableElements[0].focus();
				e.preventDefault();
			}
		}
	
		//	EVENTS
		function _eventOpenPointer(e) {
			//	get related elements
			var button = e.target;
			var container = doc.getElementById(button.getAttribute('aria-controls'));
			var modal = _q(modalSelector, container)[0];
			//	save element references
			currButtonOpen = button;
			currModal = modal;
			//	show modal
			_showModal(container, modal);
		}
		function _eventClosePointer() {
			_hideModal(currModal);
		}
		function _eventContainerPointer(e) {
			var container = currModal.parentElement;
			//	check if target is modal container (but not modal)
			if (e.target === container) _hideModal(currModal);
		}
		function _eventDocKey(e) {
			//	ESC key
			if (e.keyCode === 27) _hideModal(currModal);
			//	TAB key
			if (e.keyCode === 9) _handleTabEvent(e);
		}
	
		//	BIND EVENTS
		function _bindOpenPointers(container) {
			var id = container.getAttribute('id');
			var buttons = _q(openSelector + '[aria-controls="' + id + '"]');
			buttons.forEach(function (button) {
				return button.addEventListener('click', _eventOpenPointer);
			});
		}
		function _bindClosePointer() {
			var modal = arguments.length <= 0 || arguments[0] === undefined ? currModal : arguments[0];
	
			var button = _q(closeSelector, modal)[0];
			button.addEventListener('click', _eventClosePointer);
		}
		function _bindContainerPointer() {
			var modal = arguments.length <= 0 || arguments[0] === undefined ? currModal : arguments[0];
	
			var container = modal.parentElement;
			container.addEventListener('click', _eventContainerPointer);
		}
		function _bindDocKey() {
			doc.addEventListener('keydown', _eventDocKey);
		}
	
		//	UNBIND EVENTS
		function _unbindOpenPointers(container) {
			var id = container.getAttribute('id');
			var buttons = doc.querySelectorAll(openSelector + '[aria-controls="' + id + '"]');
			buttons.forEach(function (button) {
				return button.removeEventListener('click', _eventOpenPointer);
			});
		}
		function _unbindClosePointer() {
			var modal = arguments.length <= 0 || arguments[0] === undefined ? currModal : arguments[0];
	
			var button = _q(closeSelector, modal)[0];
			button.removeEventListener('click', _eventClosePointer);
		}
		function _unbindContainerPointer() {
			var container = currModal.parentElement;
			container.removeEventListener('click', _eventContainerPointer);
		}
		function _unbindDocKey() {
			doc.removeEventListener('keydown', _eventDocKey);
		}
	
		//	DESTROY
		function destroy() {
			//	loop through available modals
			containers.forEach(function (container) {
				var modal = _q(modalSelector, container)[0];
				modal.removeAttribute('tabindex');
				_removeA11y(container);
				_unbindOpenPointers(container);
				_unbindClosePointer(modal);
				_unbindContainerPointer(modal);
				//	remove ready, active style hooks
				container.classList.remove(readyClass, activeClass);
			});
			_unbindDocKey();
		}
	
		//	INIT
		function init() {
			//	cancel if no modals found
			if (!containers.length) return;
			//	loop through available modals
			containers.forEach(function (container) {
				_addA11y(container);
				_bindOpenPointers(container);
				// set ready style hook
				container.classList.add(readyClass);
			});
		}
		init();
	
		// REVEAL API
		return {
			init: init,
			destroy: destroy
		};
	};
	
	// module exports
	exports['default'] = Frdialogmodal;
	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 26 */,
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _frBypasslinks = __webpack_require__(28);
	
	var _frBypasslinks2 = _interopRequireDefault(_frBypasslinks);
	
	var _bypasslinks = __webpack_require__(29);
	
	var _bypasslinks2 = _interopRequireDefault(_bypasslinks);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/* eslint-enable */
	
	var bypassLinks = (0, _frBypasslinks2['default'])({
	  selector: '.js-fr-bypasslinks'
	});
	
	/* eslint-disable no-unused-vars */
	
	exports['default'] = { bypassLinks: bypassLinks, Frbypasslinks: _frBypasslinks2['default'] };
	module.exports = exports['default'];

/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * @param {object} options Object containing configuration overrides
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var Frbypasslinks = function Frbypasslinks() {
		var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
		var _ref$selector = _ref.selector;
		var selector = _ref$selector === undefined ? '.js-fr-bypasslinks' : _ref$selector;
	
	
		//	CONSTANTS
		var doc = document;
		var _q = function _q(el) {
			var ctx = arguments.length <= 1 || arguments[1] === undefined ? doc : arguments[1];
			return [].slice.call(ctx.querySelectorAll(el));
		};
	
		//	SUPPORTS
		if (!('querySelector' in doc) || !('addEventListener' in window)) return;
	
		//	SETUP
		// get bypass links NodeList
		var container = _q(selector)[0];
	
		//	TEMP
		var currTarget = null;
	
		//	ACTIONS
		function _addFocusability(link) {
			//	get target element
			var id = link.getAttribute('href').slice(1);
			var target = doc.getElementById(id);
			//	set tabindex to allow focus
			if (target) target.setAttribute('tabindex', -1);
		}
		function _removeFocusability(link) {
			//	get target element
			var id = link.getAttribute('href').slice(1);
			var target = doc.getElementById(id);
			//	remove ability to focus (stops user highlighting element on click)
			if (target) target.removeAttribute('tabindex');
		}
		function destroy() {
			//	loop through each bypass link and remove event bindings
			_q('a', container).forEach(function (link) {
				_unbindPointerClick(link);
				_addFocusability(link);
			});
			if (currTarget) _unbindTargetBlur(currTarget);
		}
	
		//	EVENTS
		function _eventPointerClick(e) {
			//	get target element
			var id = e.target.getAttribute('href').slice(1);
			var target = doc.getElementById(id);
	
			// don't try to apply relevant atts/focus if target isn't present
			if (!target) return;
			//	set tabindex to allow focus
			target.setAttribute('tabindex', -1);
			target.focus();
			//	save target reference
			currTarget = target;
			//	bind blur event on target
			_bindTargetBlur(target);
		}
		function _eventTargetBlur(e) {
			//	remove ability to focus (stops user highlighting element on click)
			e.target.removeAttribute('tabindex');
			//	remove target reference
			currTarget = null;
			//	unbind blur event
			_unbindTargetBlur(e.target);
		}
	
		//	BIND EVENTS
		function _bindPointerClick(link) {
			//	bind interaction event
			link.addEventListener('click', _eventPointerClick);
		}
		function _bindTargetBlur(target) {
			//	bind blur event on target element
			target.addEventListener('blur', _eventTargetBlur);
		}
	
		//	UNBIND EVENTS
		function _unbindPointerClick(link) {
			//	unbind interaction event
			link.removeEventListener('click', _eventPointerClick);
		}
		function _unbindTargetBlur(target) {
			//	unbind blur event on target element
			target.removeEventListener('blur', _eventTargetBlur);
		}
	
		//	INIT
		function init() {
			//	detect if bypass links exist in the document
			if (!container) return;
			//	loop through each bypass link
			_q('a', container).forEach(function (link) {
				_bindPointerClick(link);
				_removeFocusability(link);
			});
		}
		init();
	
		// REVEAL API
		return {
			init: init,
			destroy: destroy
		};
	};
	
	// module exports
	exports['default'] = Frbypasslinks;
	module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 30 */,
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jquery = __webpack_require__(4);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _packery2 = __webpack_require__(32);
	
	var _packery3 = _interopRequireDefault(_packery2);
	
	var _throttle = __webpack_require__(7);
	
	var _throttle2 = _interopRequireDefault(_throttle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	//	Without jquery
	//
	//	import 'imagesLoaded' from 'imagesloaded';
	//  imagesLoaded( document.querySelector('.js-packery-container'), function( instance ) {
	//    console.log('all images are loaded');
	//  });
	
	var MASONRY_SELECTOR = '.js-packery-container';
	var MASONRY_ITEM_SELECTOR = '.js-packery-item';
	
	var initMasonry = function initMasonry() {
	  var masonrySelector = arguments.length <= 0 || arguments[0] === undefined ? MASONRY_SELECTOR : arguments[0];
	  var masonryItemSelector = arguments.length <= 1 || arguments[1] === undefined ? MASONRY_ITEM_SELECTOR : arguments[1];
	
	  (0, _jquery2['default'])(masonrySelector).each(function (i, el) {
	    var _packery = new _packery3['default'](el, {
	      gutter: 0,
	      itemSelector: masonryItemSelector,
	      percentPosition: true
	    });
	    (0, _jquery2['default'])(window).resize((0, _throttle2['default'])(250, function () {
	      _packery.layout();
	    }));
	  });
	};
	
	(0, _jquery2['default'])(document).ready(function () {
	
	  if ((0, _jquery2['default'])(MASONRY_SELECTOR).length === 0) return;
	
	  var $images = (0, _jquery2['default'])(MASONRY_SELECTOR + ' img');
	  var cnt = $images.length;
	
	  if (cnt === 0) {
	    initMasonry();
	  } else {
	    $images.one('load', function () {
	      if (--cnt === 0) initMasonry();
	    });
	  }
	});
	
	exports['default'] = { Packery: _packery3['default'], initMasonry: initMasonry };
	module.exports = exports['default'];

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	/*!
	 * Packery v2.1.1
	 * Gapless, draggable grid layouts
	 *
	 * Licensed GPLv3 for open source use
	 * or Packery Commercial License for commercial use
	 *
	 * http://packery.metafizzy.co
	 * Copyright 2016 Metafizzy
	 */
	
	(function (window, factory) {
	  // universal module definition
	  /* jshint strict: false */ /* globals define, module, require */
	  if (true) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(33), __webpack_require__(34), __webpack_require__(39), __webpack_require__(40), __webpack_require__(41)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
	    // CommonJS
	    module.exports = factory(require('get-size'), require('outlayer'), require('./rect'), require('./packer'), require('./item'));
	  } else {
	    // browser global
	    window.Packery = factory(window.getSize, window.Outlayer, window.Packery.Rect, window.Packery.Packer, window.Packery.Item);
	  }
	})(window, function factory(getSize, Outlayer, Rect, Packer, Item) {
	  'use strict';
	
	  // ----- Rect ----- //
	
	  // allow for pixel rounding errors IE8-IE11 & Firefox; #227
	
	  Rect.prototype.canFit = function (rect) {
	    return this.width >= rect.width - 1 && this.height >= rect.height - 1;
	  };
	
	  // -------------------------- Packery -------------------------- //
	
	  // create an Outlayer layout class
	  var Packery = Outlayer.create('packery');
	  Packery.Item = Item;
	
	  var proto = Packery.prototype;
	
	  proto._create = function () {
	    // call super
	    Outlayer.prototype._create.call(this);
	
	    // initial properties
	    this.packer = new Packer();
	    // packer for drop targets
	    this.shiftPacker = new Packer();
	    this.isEnabled = true;
	
	    this.dragItemCount = 0;
	
	    // create drag handlers
	    var _this = this;
	    this.handleDraggabilly = {
	      dragStart: function dragStart() {
	        _this.itemDragStart(this.element);
	      },
	      dragMove: function dragMove() {
	        _this.itemDragMove(this.element, this.position.x, this.position.y);
	      },
	      dragEnd: function dragEnd() {
	        _this.itemDragEnd(this.element);
	      }
	    };
	
	    this.handleUIDraggable = {
	      start: function handleUIDraggableStart(event, ui) {
	        // HTML5 may trigger dragstart, dismiss HTML5 dragging
	        if (!ui) {
	          return;
	        }
	        _this.itemDragStart(event.currentTarget);
	      },
	      drag: function handleUIDraggableDrag(event, ui) {
	        if (!ui) {
	          return;
	        }
	        _this.itemDragMove(event.currentTarget, ui.position.left, ui.position.top);
	      },
	      stop: function handleUIDraggableStop(event, ui) {
	        if (!ui) {
	          return;
	        }
	        _this.itemDragEnd(event.currentTarget);
	      }
	    };
	  };
	
	  // ----- init & layout ----- //
	
	  /**
	   * logic before any new layout
	   */
	  proto._resetLayout = function () {
	    this.getSize();
	
	    this._getMeasurements();
	
	    // reset packer
	    var width, height, sortDirection;
	    // packer settings, if horizontal or vertical
	    if (this._getOption('horizontal')) {
	      width = Infinity;
	      height = this.size.innerHeight + this.gutter;
	      sortDirection = 'rightwardTopToBottom';
	    } else {
	      width = this.size.innerWidth + this.gutter;
	      height = Infinity;
	      sortDirection = 'downwardLeftToRight';
	    }
	
	    this.packer.width = this.shiftPacker.width = width;
	    this.packer.height = this.shiftPacker.height = height;
	    this.packer.sortDirection = this.shiftPacker.sortDirection = sortDirection;
	
	    this.packer.reset();
	
	    // layout
	    this.maxY = 0;
	    this.maxX = 0;
	  };
	
	  /**
	   * update columnWidth, rowHeight, & gutter
	   * @private
	   */
	  proto._getMeasurements = function () {
	    this._getMeasurement('columnWidth', 'width');
	    this._getMeasurement('rowHeight', 'height');
	    this._getMeasurement('gutter', 'width');
	  };
	
	  proto._getItemLayoutPosition = function (item) {
	    this._setRectSize(item.element, item.rect);
	    if (this.isShifting || this.dragItemCount > 0) {
	      var packMethod = this._getPackMethod();
	      this.packer[packMethod](item.rect);
	    } else {
	      this.packer.pack(item.rect);
	    }
	
	    this._setMaxXY(item.rect);
	    return item.rect;
	  };
	
	  proto.shiftLayout = function () {
	    this.isShifting = true;
	    this.layout();
	    delete this.isShifting;
	  };
	
	  proto._getPackMethod = function () {
	    return this._getOption('horizontal') ? 'rowPack' : 'columnPack';
	  };
	
	  /**
	   * set max X and Y value, for size of container
	   * @param {Packery.Rect} rect
	   * @private
	   */
	  proto._setMaxXY = function (rect) {
	    this.maxX = Math.max(rect.x + rect.width, this.maxX);
	    this.maxY = Math.max(rect.y + rect.height, this.maxY);
	  };
	
	  /**
	   * set the width and height of a rect, applying columnWidth and rowHeight
	   * @param {Element} elem
	   * @param {Packery.Rect} rect
	   */
	  proto._setRectSize = function (elem, rect) {
	    var size = getSize(elem);
	    var w = size.outerWidth;
	    var h = size.outerHeight;
	    // size for columnWidth and rowHeight, if available
	    // only check if size is non-zero, #177
	    if (w || h) {
	      w = this._applyGridGutter(w, this.columnWidth);
	      h = this._applyGridGutter(h, this.rowHeight);
	    }
	    // rect must fit in packer
	    rect.width = Math.min(w, this.packer.width);
	    rect.height = Math.min(h, this.packer.height);
	  };
	
	  /**
	   * fits item to columnWidth/rowHeight and adds gutter
	   * @param {Number} measurement - item width or height
	   * @param {Number} gridSize - columnWidth or rowHeight
	   * @returns measurement
	   */
	  proto._applyGridGutter = function (measurement, gridSize) {
	    // just add gutter if no gridSize
	    if (!gridSize) {
	      return measurement + this.gutter;
	    }
	    gridSize += this.gutter;
	    // fit item to columnWidth/rowHeight
	    var remainder = measurement % gridSize;
	    var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
	    measurement = Math[mathMethod](measurement / gridSize) * gridSize;
	    return measurement;
	  };
	
	  proto._getContainerSize = function () {
	    if (this._getOption('horizontal')) {
	      return {
	        width: this.maxX - this.gutter
	      };
	    } else {
	      return {
	        height: this.maxY - this.gutter
	      };
	    }
	  };
	
	  // -------------------------- stamp -------------------------- //
	
	  /**
	   * makes space for element
	   * @param {Element} elem
	   */
	  proto._manageStamp = function (elem) {
	
	    var item = this.getItem(elem);
	    var rect;
	    if (item && item.isPlacing) {
	      rect = item.rect;
	    } else {
	      var offset = this._getElementOffset(elem);
	      rect = new Rect({
	        x: this._getOption('originLeft') ? offset.left : offset.right,
	        y: this._getOption('originTop') ? offset.top : offset.bottom
	      });
	    }
	
	    this._setRectSize(elem, rect);
	    // save its space in the packer
	    this.packer.placed(rect);
	    this._setMaxXY(rect);
	  };
	
	  // -------------------------- methods -------------------------- //
	
	  function verticalSorter(a, b) {
	    return a.position.y - b.position.y || a.position.x - b.position.x;
	  }
	
	  function horizontalSorter(a, b) {
	    return a.position.x - b.position.x || a.position.y - b.position.y;
	  }
	
	  proto.sortItemsByPosition = function () {
	    var sorter = this._getOption('horizontal') ? horizontalSorter : verticalSorter;
	    this.items.sort(sorter);
	  };
	
	  /**
	   * Fit item element in its current position
	   * Packery will position elements around it
	   * useful for expanding elements
	   *
	   * @param {Element} elem
	   * @param {Number} x - horizontal destination position, optional
	   * @param {Number} y - vertical destination position, optional
	   */
	  proto.fit = function (elem, x, y) {
	    var item = this.getItem(elem);
	    if (!item) {
	      return;
	    }
	
	    // stamp item to get it out of layout
	    this.stamp(item.element);
	    // set placing flag
	    item.enablePlacing();
	    this.updateShiftTargets(item);
	    // fall back to current position for fitting
	    x = x === undefined ? item.rect.x : x;
	    y = y === undefined ? item.rect.y : y;
	    // position it best at its destination
	    this.shift(item, x, y);
	    this._bindFitEvents(item);
	    item.moveTo(item.rect.x, item.rect.y);
	    // layout everything else
	    this.shiftLayout();
	    // return back to regularly scheduled programming
	    this.unstamp(item.element);
	    this.sortItemsByPosition();
	    item.disablePlacing();
	  };
	
	  /**
	   * emit event when item is fit and other items are laid out
	   * @param {Packery.Item} item
	   * @private
	   */
	  proto._bindFitEvents = function (item) {
	    var _this = this;
	    var ticks = 0;
	    function onLayout() {
	      ticks++;
	      if (ticks != 2) {
	        return;
	      }
	      _this.dispatchEvent('fitComplete', null, [item]);
	    }
	    // when item is laid out
	    item.once('layout', onLayout);
	    // when all items are laid out
	    this.once('layoutComplete', onLayout);
	  };
	
	  // -------------------------- resize -------------------------- //
	
	  // debounced, layout on resize
	  proto.resize = function () {
	    // don't trigger if size did not change
	    // or if resize was unbound. See #285, outlayer#9
	    if (!this.isResizeBound || !this.needsResizeLayout()) {
	      return;
	    }
	
	    if (this.options.shiftPercentResize) {
	      this.resizeShiftPercentLayout();
	    } else {
	      this.layout();
	    }
	  };
	
	  /**
	   * check if layout is needed post layout
	   * @returns Boolean
	   */
	  proto.needsResizeLayout = function () {
	    var size = getSize(this.element);
	    var innerSize = this._getOption('horizontal') ? 'innerHeight' : 'innerWidth';
	    return size[innerSize] != this.size[innerSize];
	  };
	
	  proto.resizeShiftPercentLayout = function () {
	    var items = this._getItemsForLayout(this.items);
	
	    var isHorizontal = this._getOption('horizontal');
	    var coord = isHorizontal ? 'y' : 'x';
	    var measure = isHorizontal ? 'height' : 'width';
	    var segmentName = isHorizontal ? 'rowHeight' : 'columnWidth';
	    var innerSize = isHorizontal ? 'innerHeight' : 'innerWidth';
	
	    // proportional re-align items
	    var previousSegment = this[segmentName];
	    previousSegment = previousSegment && previousSegment + this.gutter;
	
	    if (previousSegment) {
	      this._getMeasurements();
	      var currentSegment = this[segmentName] + this.gutter;
	      items.forEach(function (item) {
	        var seg = Math.round(item.rect[coord] / previousSegment);
	        item.rect[coord] = seg * currentSegment;
	      });
	    } else {
	      var currentSize = getSize(this.element)[innerSize] + this.gutter;
	      var previousSize = this.packer[measure];
	      items.forEach(function (item) {
	        item.rect[coord] = item.rect[coord] / previousSize * currentSize;
	      });
	    }
	
	    this.shiftLayout();
	  };
	
	  // -------------------------- drag -------------------------- //
	
	  /**
	   * handle an item drag start event
	   * @param {Element} elem
	   */
	  proto.itemDragStart = function (elem) {
	    if (!this.isEnabled) {
	      return;
	    }
	    this.stamp(elem);
	    // this.ignore( elem );
	    var item = this.getItem(elem);
	    if (!item) {
	      return;
	    }
	
	    item.enablePlacing();
	    item.showDropPlaceholder();
	    this.dragItemCount++;
	    this.updateShiftTargets(item);
	  };
	
	  proto.updateShiftTargets = function (dropItem) {
	    this.shiftPacker.reset();
	
	    // pack stamps
	    this._getBoundingRect();
	    var isOriginLeft = this._getOption('originLeft');
	    var isOriginTop = this._getOption('originTop');
	    this.stamps.forEach(function (stamp) {
	      // ignore dragged item
	      var item = this.getItem(stamp);
	      if (item && item.isPlacing) {
	        return;
	      }
	      var offset = this._getElementOffset(stamp);
	      var rect = new Rect({
	        x: isOriginLeft ? offset.left : offset.right,
	        y: isOriginTop ? offset.top : offset.bottom
	      });
	      this._setRectSize(stamp, rect);
	      // save its space in the packer
	      this.shiftPacker.placed(rect);
	    }, this);
	
	    // reset shiftTargets
	    var isHorizontal = this._getOption('horizontal');
	    var segmentName = isHorizontal ? 'rowHeight' : 'columnWidth';
	    var measure = isHorizontal ? 'height' : 'width';
	
	    this.shiftTargetKeys = [];
	    this.shiftTargets = [];
	    var boundsSize;
	    var segment = this[segmentName];
	    segment = segment && segment + this.gutter;
	
	    if (segment) {
	      var segmentSpan = Math.ceil(dropItem.rect[measure] / segment);
	      var segs = Math.floor((this.shiftPacker[measure] + this.gutter) / segment);
	      boundsSize = (segs - segmentSpan) * segment;
	      // add targets on top
	      for (var i = 0; i < segs; i++) {
	        var initialX = isHorizontal ? 0 : i * segment;
	        var initialY = isHorizontal ? i * segment : 0;
	        this._addShiftTarget(initialX, initialY, boundsSize);
	      }
	    } else {
	      boundsSize = this.shiftPacker[measure] + this.gutter - dropItem.rect[measure];
	      this._addShiftTarget(0, 0, boundsSize);
	    }
	
	    // pack each item to measure where shiftTargets are
	    var items = this._getItemsForLayout(this.items);
	    var packMethod = this._getPackMethod();
	    items.forEach(function (item) {
	      var rect = item.rect;
	      this._setRectSize(item.element, rect);
	      this.shiftPacker[packMethod](rect);
	
	      // add top left corner
	      this._addShiftTarget(rect.x, rect.y, boundsSize);
	      // add bottom left / top right corner
	      var cornerX = isHorizontal ? rect.x + rect.width : rect.x;
	      var cornerY = isHorizontal ? rect.y : rect.y + rect.height;
	      this._addShiftTarget(cornerX, cornerY, boundsSize);
	
	      if (segment) {
	        // add targets for each column on bottom / row on right
	        var segSpan = Math.round(rect[measure] / segment);
	        for (var i = 1; i < segSpan; i++) {
	          var segX = isHorizontal ? cornerX : rect.x + segment * i;
	          var segY = isHorizontal ? rect.y + segment * i : cornerY;
	          this._addShiftTarget(segX, segY, boundsSize);
	        }
	      }
	    }, this);
	  };
	
	  proto._addShiftTarget = function (x, y, boundsSize) {
	    var checkCoord = this._getOption('horizontal') ? y : x;
	    if (checkCoord !== 0 && checkCoord > boundsSize) {
	      return;
	    }
	    // create string for a key, easier to keep track of what targets
	    var key = x + ',' + y;
	    var hasKey = this.shiftTargetKeys.indexOf(key) != -1;
	    if (hasKey) {
	      return;
	    }
	    this.shiftTargetKeys.push(key);
	    this.shiftTargets.push({ x: x, y: y });
	  };
	
	  // -------------------------- drop -------------------------- //
	
	  proto.shift = function (item, x, y) {
	    var shiftPosition;
	    var minDistance = Infinity;
	    var position = { x: x, y: y };
	    this.shiftTargets.forEach(function (target) {
	      var distance = getDistance(target, position);
	      if (distance < minDistance) {
	        shiftPosition = target;
	        minDistance = distance;
	      }
	    });
	    item.rect.x = shiftPosition.x;
	    item.rect.y = shiftPosition.y;
	  };
	
	  function getDistance(a, b) {
	    var dx = b.x - a.x;
	    var dy = b.y - a.y;
	    return Math.sqrt(dx * dx + dy * dy);
	  }
	
	  // -------------------------- drag move -------------------------- //
	
	  var DRAG_THROTTLE_TIME = 120;
	
	  /**
	   * handle an item drag move event
	   * @param {Element} elem
	   * @param {Number} x - horizontal change in position
	   * @param {Number} y - vertical change in position
	   */
	  proto.itemDragMove = function (elem, x, y) {
	    var item = this.isEnabled && this.getItem(elem);
	    if (!item) {
	      return;
	    }
	
	    x -= this.size.paddingLeft;
	    y -= this.size.paddingTop;
	
	    var _this = this;
	    function onDrag() {
	      _this.shift(item, x, y);
	      item.positionDropPlaceholder();
	      _this.layout();
	    }
	
	    // throttle
	    var now = new Date();
	    if (this._itemDragTime && now - this._itemDragTime < DRAG_THROTTLE_TIME) {
	      clearTimeout(this.dragTimeout);
	      this.dragTimeout = setTimeout(onDrag, DRAG_THROTTLE_TIME);
	    } else {
	      onDrag();
	      this._itemDragTime = now;
	    }
	  };
	
	  // -------------------------- drag end -------------------------- //
	
	  /**
	   * handle an item drag end event
	   * @param {Element} elem
	   */
	  proto.itemDragEnd = function (elem) {
	    var item = this.isEnabled && this.getItem(elem);
	    if (!item) {
	      return;
	    }
	
	    clearTimeout(this.dragTimeout);
	    item.element.classList.add('is-positioning-post-drag');
	
	    var completeCount = 0;
	    var _this = this;
	    function onDragEndLayoutComplete() {
	      completeCount++;
	      if (completeCount != 2) {
	        return;
	      }
	      // reset drag item
	      item.element.classList.remove('is-positioning-post-drag');
	      item.hideDropPlaceholder();
	      _this.dispatchEvent('dragItemPositioned', null, [item]);
	    }
	
	    item.once('layout', onDragEndLayoutComplete);
	    this.once('layoutComplete', onDragEndLayoutComplete);
	    item.moveTo(item.rect.x, item.rect.y);
	    this.layout();
	    this.dragItemCount = Math.max(0, this.dragItemCount - 1);
	    this.sortItemsByPosition();
	    item.disablePlacing();
	    this.unstamp(item.element);
	  };
	
	  /**
	   * binds Draggabilly events
	   * @param {Draggabilly} draggie
	   */
	  proto.bindDraggabillyEvents = function (draggie) {
	    this._bindDraggabillyEvents(draggie, 'on');
	  };
	
	  proto.unbindDraggabillyEvents = function (draggie) {
	    this._bindDraggabillyEvents(draggie, 'off');
	  };
	
	  proto._bindDraggabillyEvents = function (draggie, method) {
	    var handlers = this.handleDraggabilly;
	    draggie[method]('dragStart', handlers.dragStart);
	    draggie[method]('dragMove', handlers.dragMove);
	    draggie[method]('dragEnd', handlers.dragEnd);
	  };
	
	  /**
	   * binds jQuery UI Draggable events
	   * @param {jQuery} $elems
	   */
	  proto.bindUIDraggableEvents = function ($elems) {
	    this._bindUIDraggableEvents($elems, 'on');
	  };
	
	  proto.unbindUIDraggableEvents = function ($elems) {
	    this._bindUIDraggableEvents($elems, 'off');
	  };
	
	  proto._bindUIDraggableEvents = function ($elems, method) {
	    var handlers = this.handleUIDraggable;
	    $elems[method]('dragstart', handlers.start)[method]('drag', handlers.drag)[method]('dragstop', handlers.stop);
	  };
	
	  // ----- destroy ----- //
	
	  var _destroy = proto.destroy;
	  proto.destroy = function () {
	    _destroy.apply(this, arguments);
	    // disable flag; prevent drag events from triggering. #72
	    this.isEnabled = false;
	  };
	
	  // -----  ----- //
	
	  Packery.Rect = Rect;
	  Packery.Packer = Packer;
	
	  return Packery;
	});

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	/*!
	 * getSize v2.0.2
	 * measure size of elements
	 * MIT license
	 */
	
	/*jshint browser: true, strict: true, undef: true, unused: true */
	/*global define: false, module: false, console: false */
	
	(function (window, factory) {
	  'use strict';
	
	  if (true) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return factory();
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
	    // CommonJS
	    module.exports = factory();
	  } else {
	    // browser global
	    window.getSize = factory();
	  }
	})(window, function factory() {
	  'use strict';
	
	  // -------------------------- helpers -------------------------- //
	
	  // get a number from a string, not a percentage
	
	  function getStyleSize(value) {
	    var num = parseFloat(value);
	    // not a percent like '100%', and a number
	    var isValid = value.indexOf('%') == -1 && !isNaN(num);
	    return isValid && num;
	  }
	
	  function noop() {}
	
	  var logError = typeof console == 'undefined' ? noop : function (message) {
	    console.error(message);
	  };
	
	  // -------------------------- measurements -------------------------- //
	
	  var measurements = ['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom', 'borderLeftWidth', 'borderRightWidth', 'borderTopWidth', 'borderBottomWidth'];
	
	  var measurementsLength = measurements.length;
	
	  function getZeroSize() {
	    var size = {
	      width: 0,
	      height: 0,
	      innerWidth: 0,
	      innerHeight: 0,
	      outerWidth: 0,
	      outerHeight: 0
	    };
	    for (var i = 0; i < measurementsLength; i++) {
	      var measurement = measurements[i];
	      size[measurement] = 0;
	    }
	    return size;
	  }
	
	  // -------------------------- getStyle -------------------------- //
	
	  /**
	   * getStyle, get style of element, check for Firefox bug
	   * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
	   */
	  function getStyle(elem) {
	    var style = getComputedStyle(elem);
	    if (!style) {
	      logError('Style returned ' + style + '. Are you running this code in a hidden iframe on Firefox? ' + 'See http://bit.ly/getsizebug1');
	    }
	    return style;
	  }
	
	  // -------------------------- setup -------------------------- //
	
	  var isSetup = false;
	
	  var isBoxSizeOuter;
	
	  /**
	   * setup
	   * check isBoxSizerOuter
	   * do on first getSize() rather than on page load for Firefox bug
	   */
	  function setup() {
	    // setup once
	    if (isSetup) {
	      return;
	    }
	    isSetup = true;
	
	    // -------------------------- box sizing -------------------------- //
	
	    /**
	     * WebKit measures the outer-width on style.width on border-box elems
	     * IE & Firefox<29 measures the inner-width
	     */
	    var div = document.createElement('div');
	    div.style.width = '200px';
	    div.style.padding = '1px 2px 3px 4px';
	    div.style.borderStyle = 'solid';
	    div.style.borderWidth = '1px 2px 3px 4px';
	    div.style.boxSizing = 'border-box';
	
	    var body = document.body || document.documentElement;
	    body.appendChild(div);
	    var style = getStyle(div);
	
	    getSize.isBoxSizeOuter = isBoxSizeOuter = getStyleSize(style.width) == 200;
	    body.removeChild(div);
	  }
	
	  // -------------------------- getSize -------------------------- //
	
	  function getSize(elem) {
	    setup();
	
	    // use querySeletor if elem is string
	    if (typeof elem == 'string') {
	      elem = document.querySelector(elem);
	    }
	
	    // do not proceed on non-objects
	    if (!elem || (typeof elem === 'undefined' ? 'undefined' : _typeof(elem)) != 'object' || !elem.nodeType) {
	      return;
	    }
	
	    var style = getStyle(elem);
	
	    // if hidden, everything is 0
	    if (style.display == 'none') {
	      return getZeroSize();
	    }
	
	    var size = {};
	    size.width = elem.offsetWidth;
	    size.height = elem.offsetHeight;
	
	    var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';
	
	    // get all measurements
	    for (var i = 0; i < measurementsLength; i++) {
	      var measurement = measurements[i];
	      var value = style[measurement];
	      var num = parseFloat(value);
	      // any 'auto', 'medium' value will be 0
	      size[measurement] = !isNaN(num) ? num : 0;
	    }
	
	    var paddingWidth = size.paddingLeft + size.paddingRight;
	    var paddingHeight = size.paddingTop + size.paddingBottom;
	    var marginWidth = size.marginLeft + size.marginRight;
	    var marginHeight = size.marginTop + size.marginBottom;
	    var borderWidth = size.borderLeftWidth + size.borderRightWidth;
	    var borderHeight = size.borderTopWidth + size.borderBottomWidth;
	
	    var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;
	
	    // overwrite width and height if we can get it from style
	    var styleWidth = getStyleSize(style.width);
	    if (styleWidth !== false) {
	      size.width = styleWidth + (
	      // add padding and border unless it's already including it
	      isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth);
	    }
	
	    var styleHeight = getStyleSize(style.height);
	    if (styleHeight !== false) {
	      size.height = styleHeight + (
	      // add padding and border unless it's already including it
	      isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight);
	    }
	
	    size.innerWidth = size.width - (paddingWidth + borderWidth);
	    size.innerHeight = size.height - (paddingHeight + borderHeight);
	
	    size.outerWidth = size.width + marginWidth;
	    size.outerHeight = size.height + marginHeight;
	
	    return size;
	  }
	
	  return getSize;
	});

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	/*!
	 * Outlayer v2.1.0
	 * the brains and guts of a layout library
	 * MIT license
	 */
	
	(function (window, factory) {
	  'use strict';
	  // universal module definition
	  /* jshint strict: false */ /* globals define, module, require */
	
	  if (true) {
	    // AMD - RequireJS
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(35), __webpack_require__(33), __webpack_require__(36), __webpack_require__(38)], __WEBPACK_AMD_DEFINE_RESULT__ = function (EvEmitter, getSize, utils, Item) {
	      return factory(window, EvEmitter, getSize, utils, Item);
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
	    // CommonJS - Browserify, Webpack
	    module.exports = factory(window, require('ev-emitter'), require('get-size'), require('fizzy-ui-utils'), require('./item'));
	  } else {
	    // browser global
	    window.Outlayer = factory(window, window.EvEmitter, window.getSize, window.fizzyUIUtils, window.Outlayer.Item);
	  }
	})(window, function factory(window, EvEmitter, getSize, utils, Item) {
	  'use strict';
	
	  // ----- vars ----- //
	
	  var console = window.console;
	  var jQuery = window.jQuery;
	  var noop = function noop() {};
	
	  // -------------------------- Outlayer -------------------------- //
	
	  // globally unique identifiers
	  var GUID = 0;
	  // internal store of all Outlayer intances
	  var instances = {};
	
	  /**
	   * @param {Element, String} element
	   * @param {Object} options
	   * @constructor
	   */
	  function Outlayer(element, options) {
	    var queryElement = utils.getQueryElement(element);
	    if (!queryElement) {
	      if (console) {
	        console.error('Bad element for ' + this.constructor.namespace + ': ' + (queryElement || element));
	      }
	      return;
	    }
	    this.element = queryElement;
	    // add jQuery
	    if (jQuery) {
	      this.$element = jQuery(this.element);
	    }
	
	    // options
	    this.options = utils.extend({}, this.constructor.defaults);
	    this.option(options);
	
	    // add id for Outlayer.getFromElement
	    var id = ++GUID;
	    this.element.outlayerGUID = id; // expando
	    instances[id] = this; // associate via id
	
	    // kick it off
	    this._create();
	
	    var isInitLayout = this._getOption('initLayout');
	    if (isInitLayout) {
	      this.layout();
	    }
	  }
	
	  // settings are for internal use only
	  Outlayer.namespace = 'outlayer';
	  Outlayer.Item = Item;
	
	  // default options
	  Outlayer.defaults = {
	    containerStyle: {
	      position: 'relative'
	    },
	    initLayout: true,
	    originLeft: true,
	    originTop: true,
	    resize: true,
	    resizeContainer: true,
	    // item options
	    transitionDuration: '0.4s',
	    hiddenStyle: {
	      opacity: 0,
	      transform: 'scale(0.001)'
	    },
	    visibleStyle: {
	      opacity: 1,
	      transform: 'scale(1)'
	    }
	  };
	
	  var proto = Outlayer.prototype;
	  // inherit EvEmitter
	  utils.extend(proto, EvEmitter.prototype);
	
	  /**
	   * set options
	   * @param {Object} opts
	   */
	  proto.option = function (opts) {
	    utils.extend(this.options, opts);
	  };
	
	  /**
	   * get backwards compatible option value, check old name
	   */
	  proto._getOption = function (option) {
	    var oldOption = this.constructor.compatOptions[option];
	    return oldOption && this.options[oldOption] !== undefined ? this.options[oldOption] : this.options[option];
	  };
	
	  Outlayer.compatOptions = {
	    // currentName: oldName
	    initLayout: 'isInitLayout',
	    horizontal: 'isHorizontal',
	    layoutInstant: 'isLayoutInstant',
	    originLeft: 'isOriginLeft',
	    originTop: 'isOriginTop',
	    resize: 'isResizeBound',
	    resizeContainer: 'isResizingContainer'
	  };
	
	  proto._create = function () {
	    // get items from children
	    this.reloadItems();
	    // elements that affect layout, but are not laid out
	    this.stamps = [];
	    this.stamp(this.options.stamp);
	    // set container style
	    utils.extend(this.element.style, this.options.containerStyle);
	
	    // bind resize method
	    var canBindResize = this._getOption('resize');
	    if (canBindResize) {
	      this.bindResize();
	    }
	  };
	
	  // goes through all children again and gets bricks in proper order
	  proto.reloadItems = function () {
	    // collection of item elements
	    this.items = this._itemize(this.element.children);
	  };
	
	  /**
	   * turn elements into Outlayer.Items to be used in layout
	   * @param {Array or NodeList or HTMLElement} elems
	   * @returns {Array} items - collection of new Outlayer Items
	   */
	  proto._itemize = function (elems) {
	
	    var itemElems = this._filterFindItemElements(elems);
	    var Item = this.constructor.Item;
	
	    // create new Outlayer Items for collection
	    var items = [];
	    for (var i = 0; i < itemElems.length; i++) {
	      var elem = itemElems[i];
	      var item = new Item(elem, this);
	      items.push(item);
	    }
	
	    return items;
	  };
	
	  /**
	   * get item elements to be used in layout
	   * @param {Array or NodeList or HTMLElement} elems
	   * @returns {Array} items - item elements
	   */
	  proto._filterFindItemElements = function (elems) {
	    return utils.filterFindElements(elems, this.options.itemSelector);
	  };
	
	  /**
	   * getter method for getting item elements
	   * @returns {Array} elems - collection of item elements
	   */
	  proto.getItemElements = function () {
	    return this.items.map(function (item) {
	      return item.element;
	    });
	  };
	
	  // ----- init & layout ----- //
	
	  /**
	   * lays out all items
	   */
	  proto.layout = function () {
	    this._resetLayout();
	    this._manageStamps();
	
	    // don't animate first layout
	    var layoutInstant = this._getOption('layoutInstant');
	    var isInstant = layoutInstant !== undefined ? layoutInstant : !this._isLayoutInited;
	    this.layoutItems(this.items, isInstant);
	
	    // flag for initalized
	    this._isLayoutInited = true;
	  };
	
	  // _init is alias for layout
	  proto._init = proto.layout;
	
	  /**
	   * logic before any new layout
	   */
	  proto._resetLayout = function () {
	    this.getSize();
	  };
	
	  proto.getSize = function () {
	    this.size = getSize(this.element);
	  };
	
	  /**
	   * get measurement from option, for columnWidth, rowHeight, gutter
	   * if option is String -> get element from selector string, & get size of element
	   * if option is Element -> get size of element
	   * else use option as a number
	   *
	   * @param {String} measurement
	   * @param {String} size - width or height
	   * @private
	   */
	  proto._getMeasurement = function (measurement, size) {
	    var option = this.options[measurement];
	    var elem;
	    if (!option) {
	      // default to 0
	      this[measurement] = 0;
	    } else {
	      // use option as an element
	      if (typeof option == 'string') {
	        elem = this.element.querySelector(option);
	      } else if (option instanceof HTMLElement) {
	        elem = option;
	      }
	      // use size of element, if element
	      this[measurement] = elem ? getSize(elem)[size] : option;
	    }
	  };
	
	  /**
	   * layout a collection of item elements
	   * @api public
	   */
	  proto.layoutItems = function (items, isInstant) {
	    items = this._getItemsForLayout(items);
	
	    this._layoutItems(items, isInstant);
	
	    this._postLayout();
	  };
	
	  /**
	   * get the items to be laid out
	   * you may want to skip over some items
	   * @param {Array} items
	   * @returns {Array} items
	   */
	  proto._getItemsForLayout = function (items) {
	    return items.filter(function (item) {
	      return !item.isIgnored;
	    });
	  };
	
	  /**
	   * layout items
	   * @param {Array} items
	   * @param {Boolean} isInstant
	   */
	  proto._layoutItems = function (items, isInstant) {
	    this._emitCompleteOnItems('layout', items);
	
	    if (!items || !items.length) {
	      // no items, emit event with empty array
	      return;
	    }
	
	    var queue = [];
	
	    items.forEach(function (item) {
	      // get x/y object from method
	      var position = this._getItemLayoutPosition(item);
	      // enqueue
	      position.item = item;
	      position.isInstant = isInstant || item.isLayoutInstant;
	      queue.push(position);
	    }, this);
	
	    this._processLayoutQueue(queue);
	  };
	
	  /**
	   * get item layout position
	   * @param {Outlayer.Item} item
	   * @returns {Object} x and y position
	   */
	  proto._getItemLayoutPosition = function () /* item */{
	    return {
	      x: 0,
	      y: 0
	    };
	  };
	
	  /**
	   * iterate over array and position each item
	   * Reason being - separating this logic prevents 'layout invalidation'
	   * thx @paul_irish
	   * @param {Array} queue
	   */
	  proto._processLayoutQueue = function (queue) {
	    this.updateStagger();
	    queue.forEach(function (obj, i) {
	      this._positionItem(obj.item, obj.x, obj.y, obj.isInstant, i);
	    }, this);
	  };
	
	  // set stagger from option in milliseconds number
	  proto.updateStagger = function () {
	    var stagger = this.options.stagger;
	    if (stagger === null || stagger === undefined) {
	      this.stagger = 0;
	      return;
	    }
	    this.stagger = getMilliseconds(stagger);
	    return this.stagger;
	  };
	
	  /**
	   * Sets position of item in DOM
	   * @param {Outlayer.Item} item
	   * @param {Number} x - horizontal position
	   * @param {Number} y - vertical position
	   * @param {Boolean} isInstant - disables transitions
	   */
	  proto._positionItem = function (item, x, y, isInstant, i) {
	    if (isInstant) {
	      // if not transition, just set CSS
	      item.goTo(x, y);
	    } else {
	      item.stagger(i * this.stagger);
	      item.moveTo(x, y);
	    }
	  };
	
	  /**
	   * Any logic you want to do after each layout,
	   * i.e. size the container
	   */
	  proto._postLayout = function () {
	    this.resizeContainer();
	  };
	
	  proto.resizeContainer = function () {
	    var isResizingContainer = this._getOption('resizeContainer');
	    if (!isResizingContainer) {
	      return;
	    }
	    var size = this._getContainerSize();
	    if (size) {
	      this._setContainerMeasure(size.width, true);
	      this._setContainerMeasure(size.height, false);
	    }
	  };
	
	  /**
	   * Sets width or height of container if returned
	   * @returns {Object} size
	   *   @param {Number} width
	   *   @param {Number} height
	   */
	  proto._getContainerSize = noop;
	
	  /**
	   * @param {Number} measure - size of width or height
	   * @param {Boolean} isWidth
	   */
	  proto._setContainerMeasure = function (measure, isWidth) {
	    if (measure === undefined) {
	      return;
	    }
	
	    var elemSize = this.size;
	    // add padding and border width if border box
	    if (elemSize.isBorderBox) {
	      measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight + elemSize.borderLeftWidth + elemSize.borderRightWidth : elemSize.paddingBottom + elemSize.paddingTop + elemSize.borderTopWidth + elemSize.borderBottomWidth;
	    }
	
	    measure = Math.max(measure, 0);
	    this.element.style[isWidth ? 'width' : 'height'] = measure + 'px';
	  };
	
	  /**
	   * emit eventComplete on a collection of items events
	   * @param {String} eventName
	   * @param {Array} items - Outlayer.Items
	   */
	  proto._emitCompleteOnItems = function (eventName, items) {
	    var _this = this;
	    function onComplete() {
	      _this.dispatchEvent(eventName + 'Complete', null, [items]);
	    }
	
	    var count = items.length;
	    if (!items || !count) {
	      onComplete();
	      return;
	    }
	
	    var doneCount = 0;
	    function tick() {
	      doneCount++;
	      if (doneCount == count) {
	        onComplete();
	      }
	    }
	
	    // bind callback
	    items.forEach(function (item) {
	      item.once(eventName, tick);
	    });
	  };
	
	  /**
	   * emits events via EvEmitter and jQuery events
	   * @param {String} type - name of event
	   * @param {Event} event - original event
	   * @param {Array} args - extra arguments
	   */
	  proto.dispatchEvent = function (type, event, args) {
	    // add original event to arguments
	    var emitArgs = event ? [event].concat(args) : args;
	    this.emitEvent(type, emitArgs);
	
	    if (jQuery) {
	      // set this.$element
	      this.$element = this.$element || jQuery(this.element);
	      if (event) {
	        // create jQuery event
	        var $event = jQuery.Event(event);
	        $event.type = type;
	        this.$element.trigger($event, args);
	      } else {
	        // just trigger with type if no event available
	        this.$element.trigger(type, args);
	      }
	    }
	  };
	
	  // -------------------------- ignore & stamps -------------------------- //
	
	
	  /**
	   * keep item in collection, but do not lay it out
	   * ignored items do not get skipped in layout
	   * @param {Element} elem
	   */
	  proto.ignore = function (elem) {
	    var item = this.getItem(elem);
	    if (item) {
	      item.isIgnored = true;
	    }
	  };
	
	  /**
	   * return item to layout collection
	   * @param {Element} elem
	   */
	  proto.unignore = function (elem) {
	    var item = this.getItem(elem);
	    if (item) {
	      delete item.isIgnored;
	    }
	  };
	
	  /**
	   * adds elements to stamps
	   * @param {NodeList, Array, Element, or String} elems
	   */
	  proto.stamp = function (elems) {
	    elems = this._find(elems);
	    if (!elems) {
	      return;
	    }
	
	    this.stamps = this.stamps.concat(elems);
	    // ignore
	    elems.forEach(this.ignore, this);
	  };
	
	  /**
	   * removes elements to stamps
	   * @param {NodeList, Array, or Element} elems
	   */
	  proto.unstamp = function (elems) {
	    elems = this._find(elems);
	    if (!elems) {
	      return;
	    }
	
	    elems.forEach(function (elem) {
	      // filter out removed stamp elements
	      utils.removeFrom(this.stamps, elem);
	      this.unignore(elem);
	    }, this);
	  };
	
	  /**
	   * finds child elements
	   * @param {NodeList, Array, Element, or String} elems
	   * @returns {Array} elems
	   */
	  proto._find = function (elems) {
	    if (!elems) {
	      return;
	    }
	    // if string, use argument as selector string
	    if (typeof elems == 'string') {
	      elems = this.element.querySelectorAll(elems);
	    }
	    elems = utils.makeArray(elems);
	    return elems;
	  };
	
	  proto._manageStamps = function () {
	    if (!this.stamps || !this.stamps.length) {
	      return;
	    }
	
	    this._getBoundingRect();
	
	    this.stamps.forEach(this._manageStamp, this);
	  };
	
	  // update boundingLeft / Top
	  proto._getBoundingRect = function () {
	    // get bounding rect for container element
	    var boundingRect = this.element.getBoundingClientRect();
	    var size = this.size;
	    this._boundingRect = {
	      left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
	      top: boundingRect.top + size.paddingTop + size.borderTopWidth,
	      right: boundingRect.right - (size.paddingRight + size.borderRightWidth),
	      bottom: boundingRect.bottom - (size.paddingBottom + size.borderBottomWidth)
	    };
	  };
	
	  /**
	   * @param {Element} stamp
	  **/
	  proto._manageStamp = noop;
	
	  /**
	   * get x/y position of element relative to container element
	   * @param {Element} elem
	   * @returns {Object} offset - has left, top, right, bottom
	   */
	  proto._getElementOffset = function (elem) {
	    var boundingRect = elem.getBoundingClientRect();
	    var thisRect = this._boundingRect;
	    var size = getSize(elem);
	    var offset = {
	      left: boundingRect.left - thisRect.left - size.marginLeft,
	      top: boundingRect.top - thisRect.top - size.marginTop,
	      right: thisRect.right - boundingRect.right - size.marginRight,
	      bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
	    };
	    return offset;
	  };
	
	  // -------------------------- resize -------------------------- //
	
	  // enable event handlers for listeners
	  // i.e. resize -> onresize
	  proto.handleEvent = utils.handleEvent;
	
	  /**
	   * Bind layout to window resizing
	   */
	  proto.bindResize = function () {
	    window.addEventListener('resize', this);
	    this.isResizeBound = true;
	  };
	
	  /**
	   * Unbind layout to window resizing
	   */
	  proto.unbindResize = function () {
	    window.removeEventListener('resize', this);
	    this.isResizeBound = false;
	  };
	
	  proto.onresize = function () {
	    this.resize();
	  };
	
	  utils.debounceMethod(Outlayer, 'onresize', 100);
	
	  proto.resize = function () {
	    // don't trigger if size did not change
	    // or if resize was unbound. See #9
	    if (!this.isResizeBound || !this.needsResizeLayout()) {
	      return;
	    }
	
	    this.layout();
	  };
	
	  /**
	   * check if layout is needed post layout
	   * @returns Boolean
	   */
	  proto.needsResizeLayout = function () {
	    var size = getSize(this.element);
	    // check that this.size and size are there
	    // IE8 triggers resize on body size change, so they might not be
	    var hasSizes = this.size && size;
	    return hasSizes && size.innerWidth !== this.size.innerWidth;
	  };
	
	  // -------------------------- methods -------------------------- //
	
	  /**
	   * add items to Outlayer instance
	   * @param {Array or NodeList or Element} elems
	   * @returns {Array} items - Outlayer.Items
	  **/
	  proto.addItems = function (elems) {
	    var items = this._itemize(elems);
	    // add items to collection
	    if (items.length) {
	      this.items = this.items.concat(items);
	    }
	    return items;
	  };
	
	  /**
	   * Layout newly-appended item elements
	   * @param {Array or NodeList or Element} elems
	   */
	  proto.appended = function (elems) {
	    var items = this.addItems(elems);
	    if (!items.length) {
	      return;
	    }
	    // layout and reveal just the new items
	    this.layoutItems(items, true);
	    this.reveal(items);
	  };
	
	  /**
	   * Layout prepended elements
	   * @param {Array or NodeList or Element} elems
	   */
	  proto.prepended = function (elems) {
	    var items = this._itemize(elems);
	    if (!items.length) {
	      return;
	    }
	    // add items to beginning of collection
	    var previousItems = this.items.slice(0);
	    this.items = items.concat(previousItems);
	    // start new layout
	    this._resetLayout();
	    this._manageStamps();
	    // layout new stuff without transition
	    this.layoutItems(items, true);
	    this.reveal(items);
	    // layout previous items
	    this.layoutItems(previousItems);
	  };
	
	  /**
	   * reveal a collection of items
	   * @param {Array of Outlayer.Items} items
	   */
	  proto.reveal = function (items) {
	    this._emitCompleteOnItems('reveal', items);
	    if (!items || !items.length) {
	      return;
	    }
	    var stagger = this.updateStagger();
	    items.forEach(function (item, i) {
	      item.stagger(i * stagger);
	      item.reveal();
	    });
	  };
	
	  /**
	   * hide a collection of items
	   * @param {Array of Outlayer.Items} items
	   */
	  proto.hide = function (items) {
	    this._emitCompleteOnItems('hide', items);
	    if (!items || !items.length) {
	      return;
	    }
	    var stagger = this.updateStagger();
	    items.forEach(function (item, i) {
	      item.stagger(i * stagger);
	      item.hide();
	    });
	  };
	
	  /**
	   * reveal item elements
	   * @param {Array}, {Element}, {NodeList} items
	   */
	  proto.revealItemElements = function (elems) {
	    var items = this.getItems(elems);
	    this.reveal(items);
	  };
	
	  /**
	   * hide item elements
	   * @param {Array}, {Element}, {NodeList} items
	   */
	  proto.hideItemElements = function (elems) {
	    var items = this.getItems(elems);
	    this.hide(items);
	  };
	
	  /**
	   * get Outlayer.Item, given an Element
	   * @param {Element} elem
	   * @param {Function} callback
	   * @returns {Outlayer.Item} item
	   */
	  proto.getItem = function (elem) {
	    // loop through items to get the one that matches
	    for (var i = 0; i < this.items.length; i++) {
	      var item = this.items[i];
	      if (item.element == elem) {
	        // return item
	        return item;
	      }
	    }
	  };
	
	  /**
	   * get collection of Outlayer.Items, given Elements
	   * @param {Array} elems
	   * @returns {Array} items - Outlayer.Items
	   */
	  proto.getItems = function (elems) {
	    elems = utils.makeArray(elems);
	    var items = [];
	    elems.forEach(function (elem) {
	      var item = this.getItem(elem);
	      if (item) {
	        items.push(item);
	      }
	    }, this);
	
	    return items;
	  };
	
	  /**
	   * remove element(s) from instance and DOM
	   * @param {Array or NodeList or Element} elems
	   */
	  proto.remove = function (elems) {
	    var removeItems = this.getItems(elems);
	
	    this._emitCompleteOnItems('remove', removeItems);
	
	    // bail if no items to remove
	    if (!removeItems || !removeItems.length) {
	      return;
	    }
	
	    removeItems.forEach(function (item) {
	      item.remove();
	      // remove item from collection
	      utils.removeFrom(this.items, item);
	    }, this);
	  };
	
	  // ----- destroy ----- //
	
	  // remove and disable Outlayer instance
	  proto.destroy = function () {
	    // clean up dynamic styles
	    var style = this.element.style;
	    style.height = '';
	    style.position = '';
	    style.width = '';
	    // destroy items
	    this.items.forEach(function (item) {
	      item.destroy();
	    });
	
	    this.unbindResize();
	
	    var id = this.element.outlayerGUID;
	    delete instances[id]; // remove reference to instance by id
	    delete this.element.outlayerGUID;
	    // remove data for jQuery
	    if (jQuery) {
	      jQuery.removeData(this.element, this.constructor.namespace);
	    }
	  };
	
	  // -------------------------- data -------------------------- //
	
	  /**
	   * get Outlayer instance from element
	   * @param {Element} elem
	   * @returns {Outlayer}
	   */
	  Outlayer.data = function (elem) {
	    elem = utils.getQueryElement(elem);
	    var id = elem && elem.outlayerGUID;
	    return id && instances[id];
	  };
	
	  // -------------------------- create Outlayer class -------------------------- //
	
	  /**
	   * create a layout class
	   * @param {String} namespace
	   */
	  Outlayer.create = function (namespace, options) {
	    // sub-class Outlayer
	    var Layout = subclass(Outlayer);
	    // apply new options and compatOptions
	    Layout.defaults = utils.extend({}, Outlayer.defaults);
	    utils.extend(Layout.defaults, options);
	    Layout.compatOptions = utils.extend({}, Outlayer.compatOptions);
	
	    Layout.namespace = namespace;
	
	    Layout.data = Outlayer.data;
	
	    // sub-class Item
	    Layout.Item = subclass(Item);
	
	    // -------------------------- declarative -------------------------- //
	
	    utils.htmlInit(Layout, namespace);
	
	    // -------------------------- jQuery bridge -------------------------- //
	
	    // make into jQuery plugin
	    if (jQuery && jQuery.bridget) {
	      jQuery.bridget(namespace, Layout);
	    }
	
	    return Layout;
	  };
	
	  function subclass(Parent) {
	    function SubClass() {
	      Parent.apply(this, arguments);
	    }
	
	    SubClass.prototype = Object.create(Parent.prototype);
	    SubClass.prototype.constructor = SubClass;
	
	    return SubClass;
	  }
	
	  // ----- helpers ----- //
	
	  // how many milliseconds are in each unit
	  var msUnits = {
	    ms: 1,
	    s: 1000
	  };
	
	  // munge time-like parameter into millisecond number
	  // '0.4s' -> 40
	  function getMilliseconds(time) {
	    if (typeof time == 'number') {
	      return time;
	    }
	    var matches = time.match(/(^\d*\.?\d*)(\w*)/);
	    var num = matches && matches[1];
	    var unit = matches && matches[2];
	    if (!num.length) {
	      return 0;
	    }
	    num = parseFloat(num);
	    var mult = msUnits[unit] || 1;
	    return num * mult;
	  }
	
	  // ----- fin ----- //
	
	  // back in global
	  Outlayer.Item = Item;
	
	  return Outlayer;
	});

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	/**
	 * EvEmitter v1.0.3
	 * Lil' event emitter
	 * MIT License
	 */
	
	/* jshint unused: true, undef: true, strict: true */
	
	(function (global, factory) {
	  // universal module definition
	  /* jshint strict: false */ /* globals define, module, window */
	  if (true) {
	    // AMD - RequireJS
	    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
	    // CommonJS - Browserify, Webpack
	    module.exports = factory();
	  } else {
	    // Browser globals
	    global.EvEmitter = factory();
	  }
	})(typeof window != 'undefined' ? window : undefined, function () {
	
	  "use strict";
	
	  function EvEmitter() {}
	
	  var proto = EvEmitter.prototype;
	
	  proto.on = function (eventName, listener) {
	    if (!eventName || !listener) {
	      return;
	    }
	    // set events hash
	    var events = this._events = this._events || {};
	    // set listeners array
	    var listeners = events[eventName] = events[eventName] || [];
	    // only add once
	    if (listeners.indexOf(listener) == -1) {
	      listeners.push(listener);
	    }
	
	    return this;
	  };
	
	  proto.once = function (eventName, listener) {
	    if (!eventName || !listener) {
	      return;
	    }
	    // add event
	    this.on(eventName, listener);
	    // set once flag
	    // set onceEvents hash
	    var onceEvents = this._onceEvents = this._onceEvents || {};
	    // set onceListeners object
	    var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {};
	    // set flag
	    onceListeners[listener] = true;
	
	    return this;
	  };
	
	  proto.off = function (eventName, listener) {
	    var listeners = this._events && this._events[eventName];
	    if (!listeners || !listeners.length) {
	      return;
	    }
	    var index = listeners.indexOf(listener);
	    if (index != -1) {
	      listeners.splice(index, 1);
	    }
	
	    return this;
	  };
	
	  proto.emitEvent = function (eventName, args) {
	    var listeners = this._events && this._events[eventName];
	    if (!listeners || !listeners.length) {
	      return;
	    }
	    var i = 0;
	    var listener = listeners[i];
	    args = args || [];
	    // once stuff
	    var onceListeners = this._onceEvents && this._onceEvents[eventName];
	
	    while (listener) {
	      var isOnce = onceListeners && onceListeners[listener];
	      if (isOnce) {
	        // remove listener
	        // remove before trigger to prevent recursion
	        this.off(eventName, listener);
	        // unset once flag
	        delete onceListeners[listener];
	      }
	      // trigger listener
	      listener.apply(this, args);
	      // get next listener
	      i += isOnce ? 0 : 1;
	      listener = listeners[i];
	    }
	
	    return this;
	  };
	
	  return EvEmitter;
	});

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	/**
	 * Fizzy UI utils v2.0.2
	 * MIT license
	 */
	
	/*jshint browser: true, undef: true, unused: true, strict: true */
	
	(function (window, factory) {
	  // universal module definition
	  /*jshint strict: false */ /*globals define, module, require */
	
	  if (true) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(37)], __WEBPACK_AMD_DEFINE_RESULT__ = function (matchesSelector) {
	      return factory(window, matchesSelector);
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
	    // CommonJS
	    module.exports = factory(window, require('desandro-matches-selector'));
	  } else {
	    // browser global
	    window.fizzyUIUtils = factory(window, window.matchesSelector);
	  }
	})(window, function factory(window, matchesSelector) {
	
	  'use strict';
	
	  var utils = {};
	
	  // ----- extend ----- //
	
	  // extends objects
	  utils.extend = function (a, b) {
	    for (var prop in b) {
	      a[prop] = b[prop];
	    }
	    return a;
	  };
	
	  // ----- modulo ----- //
	
	  utils.modulo = function (num, div) {
	    return (num % div + div) % div;
	  };
	
	  // ----- makeArray ----- //
	
	  // turn element or nodeList into an array
	  utils.makeArray = function (obj) {
	    var ary = [];
	    if (Array.isArray(obj)) {
	      // use object if already an array
	      ary = obj;
	    } else if (obj && typeof obj.length == 'number') {
	      // convert nodeList to array
	      for (var i = 0; i < obj.length; i++) {
	        ary.push(obj[i]);
	      }
	    } else {
	      // array of single index
	      ary.push(obj);
	    }
	    return ary;
	  };
	
	  // ----- removeFrom ----- //
	
	  utils.removeFrom = function (ary, obj) {
	    var index = ary.indexOf(obj);
	    if (index != -1) {
	      ary.splice(index, 1);
	    }
	  };
	
	  // ----- getParent ----- //
	
	  utils.getParent = function (elem, selector) {
	    while (elem != document.body) {
	      elem = elem.parentNode;
	      if (matchesSelector(elem, selector)) {
	        return elem;
	      }
	    }
	  };
	
	  // ----- getQueryElement ----- //
	
	  // use element as selector string
	  utils.getQueryElement = function (elem) {
	    if (typeof elem == 'string') {
	      return document.querySelector(elem);
	    }
	    return elem;
	  };
	
	  // ----- handleEvent ----- //
	
	  // enable .ontype to trigger from .addEventListener( elem, 'type' )
	  utils.handleEvent = function (event) {
	    var method = 'on' + event.type;
	    if (this[method]) {
	      this[method](event);
	    }
	  };
	
	  // ----- filterFindElements ----- //
	
	  utils.filterFindElements = function (elems, selector) {
	    // make array of elems
	    elems = utils.makeArray(elems);
	    var ffElems = [];
	
	    elems.forEach(function (elem) {
	      // check that elem is an actual element
	      if (!(elem instanceof HTMLElement)) {
	        return;
	      }
	      // add elem if no selector
	      if (!selector) {
	        ffElems.push(elem);
	        return;
	      }
	      // filter & find items if we have a selector
	      // filter
	      if (matchesSelector(elem, selector)) {
	        ffElems.push(elem);
	      }
	      // find children
	      var childElems = elem.querySelectorAll(selector);
	      // concat childElems to filterFound array
	      for (var i = 0; i < childElems.length; i++) {
	        ffElems.push(childElems[i]);
	      }
	    });
	
	    return ffElems;
	  };
	
	  // ----- debounceMethod ----- //
	
	  utils.debounceMethod = function (_class, methodName, threshold) {
	    // original method
	    var method = _class.prototype[methodName];
	    var timeoutName = methodName + 'Timeout';
	
	    _class.prototype[methodName] = function () {
	      var timeout = this[timeoutName];
	      if (timeout) {
	        clearTimeout(timeout);
	      }
	      var args = arguments;
	
	      var _this = this;
	      this[timeoutName] = setTimeout(function () {
	        method.apply(_this, args);
	        delete _this[timeoutName];
	      }, threshold || 100);
	    };
	  };
	
	  // ----- docReady ----- //
	
	  utils.docReady = function (callback) {
	    var readyState = document.readyState;
	    if (readyState == 'complete' || readyState == 'interactive') {
	      callback();
	    } else {
	      document.addEventListener('DOMContentLoaded', callback);
	    }
	  };
	
	  // ----- htmlInit ----- //
	
	  // http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
	  utils.toDashed = function (str) {
	    return str.replace(/(.)([A-Z])/g, function (match, $1, $2) {
	      return $1 + '-' + $2;
	    }).toLowerCase();
	  };
	
	  var console = window.console;
	  /**
	   * allow user to initialize classes via [data-namespace] or .js-namespace class
	   * htmlInit( Widget, 'widgetName' )
	   * options are parsed from data-namespace-options
	   */
	  utils.htmlInit = function (WidgetClass, namespace) {
	    utils.docReady(function () {
	      var dashedNamespace = utils.toDashed(namespace);
	      var dataAttr = 'data-' + dashedNamespace;
	      var dataAttrElems = document.querySelectorAll('[' + dataAttr + ']');
	      var jsDashElems = document.querySelectorAll('.js-' + dashedNamespace);
	      var elems = utils.makeArray(dataAttrElems).concat(utils.makeArray(jsDashElems));
	      var dataOptionsAttr = dataAttr + '-options';
	      var jQuery = window.jQuery;
	
	      elems.forEach(function (elem) {
	        var attr = elem.getAttribute(dataAttr) || elem.getAttribute(dataOptionsAttr);
	        var options;
	        try {
	          options = attr && JSON.parse(attr);
	        } catch (error) {
	          // log error, do not initialize
	          if (console) {
	            console.error('Error parsing ' + dataAttr + ' on ' + elem.className + ': ' + error);
	          }
	          return;
	        }
	        // initialize
	        var instance = new WidgetClass(elem, options);
	        // make available via $().data('layoutname')
	        if (jQuery) {
	          jQuery.data(elem, namespace, instance);
	        }
	      });
	    });
	  };
	
	  // -----  ----- //
	
	  return utils;
	});

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	/**
	 * matchesSelector v2.0.1
	 * matchesSelector( element, '.selector' )
	 * MIT license
	 */
	
	/*jshint browser: true, strict: true, undef: true, unused: true */
	
	(function (window, factory) {
	  /*global define: false, module: false */
	  'use strict';
	  // universal module definition
	
	  if (true) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
	    // CommonJS
	    module.exports = factory();
	  } else {
	    // browser global
	    window.matchesSelector = factory();
	  }
	})(window, function factory() {
	  'use strict';
	
	  var matchesMethod = function () {
	    var ElemProto = Element.prototype;
	    // check for the standard method name first
	    if (ElemProto.matches) {
	      return 'matches';
	    }
	    // check un-prefixed
	    if (ElemProto.matchesSelector) {
	      return 'matchesSelector';
	    }
	    // check vendor prefixes
	    var prefixes = ['webkit', 'moz', 'ms', 'o'];
	
	    for (var i = 0; i < prefixes.length; i++) {
	      var prefix = prefixes[i];
	      var method = prefix + 'MatchesSelector';
	      if (ElemProto[method]) {
	        return method;
	      }
	    }
	  }();
	
	  return function matchesSelector(elem, selector) {
	    return elem[matchesMethod](selector);
	  };
	});

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	/**
	 * Outlayer Item
	 */
	
	(function (window, factory) {
	  // universal module definition
	  /* jshint strict: false */ /* globals define, module, require */
	  if (true) {
	    // AMD - RequireJS
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(35), __webpack_require__(33)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
	    // CommonJS - Browserify, Webpack
	    module.exports = factory(require('ev-emitter'), require('get-size'));
	  } else {
	    // browser global
	    window.Outlayer = {};
	    window.Outlayer.Item = factory(window.EvEmitter, window.getSize);
	  }
	})(window, function factory(EvEmitter, getSize) {
	  'use strict';
	
	  // ----- helpers ----- //
	
	  function isEmptyObj(obj) {
	    for (var prop in obj) {
	      return false;
	    }
	    prop = null;
	    return true;
	  }
	
	  // -------------------------- CSS3 support -------------------------- //
	
	
	  var docElemStyle = document.documentElement.style;
	
	  var transitionProperty = typeof docElemStyle.transition == 'string' ? 'transition' : 'WebkitTransition';
	  var transformProperty = typeof docElemStyle.transform == 'string' ? 'transform' : 'WebkitTransform';
	
	  var transitionEndEvent = {
	    WebkitTransition: 'webkitTransitionEnd',
	    transition: 'transitionend'
	  }[transitionProperty];
	
	  // cache all vendor properties that could have vendor prefix
	  var vendorProperties = {
	    transform: transformProperty,
	    transition: transitionProperty,
	    transitionDuration: transitionProperty + 'Duration',
	    transitionProperty: transitionProperty + 'Property',
	    transitionDelay: transitionProperty + 'Delay'
	  };
	
	  // -------------------------- Item -------------------------- //
	
	  function Item(element, layout) {
	    if (!element) {
	      return;
	    }
	
	    this.element = element;
	    // parent layout class, i.e. Masonry, Isotope, or Packery
	    this.layout = layout;
	    this.position = {
	      x: 0,
	      y: 0
	    };
	
	    this._create();
	  }
	
	  // inherit EvEmitter
	  var proto = Item.prototype = Object.create(EvEmitter.prototype);
	  proto.constructor = Item;
	
	  proto._create = function () {
	    // transition objects
	    this._transn = {
	      ingProperties: {},
	      clean: {},
	      onEnd: {}
	    };
	
	    this.css({
	      position: 'absolute'
	    });
	  };
	
	  // trigger specified handler for event type
	  proto.handleEvent = function (event) {
	    var method = 'on' + event.type;
	    if (this[method]) {
	      this[method](event);
	    }
	  };
	
	  proto.getSize = function () {
	    this.size = getSize(this.element);
	  };
	
	  /**
	   * apply CSS styles to element
	   * @param {Object} style
	   */
	  proto.css = function (style) {
	    var elemStyle = this.element.style;
	
	    for (var prop in style) {
	      // use vendor property if available
	      var supportedProp = vendorProperties[prop] || prop;
	      elemStyle[supportedProp] = style[prop];
	    }
	  };
	
	  // measure position, and sets it
	  proto.getPosition = function () {
	    var style = getComputedStyle(this.element);
	    var isOriginLeft = this.layout._getOption('originLeft');
	    var isOriginTop = this.layout._getOption('originTop');
	    var xValue = style[isOriginLeft ? 'left' : 'right'];
	    var yValue = style[isOriginTop ? 'top' : 'bottom'];
	    // convert percent to pixels
	    var layoutSize = this.layout.size;
	    var x = xValue.indexOf('%') != -1 ? parseFloat(xValue) / 100 * layoutSize.width : parseInt(xValue, 10);
	    var y = yValue.indexOf('%') != -1 ? parseFloat(yValue) / 100 * layoutSize.height : parseInt(yValue, 10);
	
	    // clean up 'auto' or other non-integer values
	    x = isNaN(x) ? 0 : x;
	    y = isNaN(y) ? 0 : y;
	    // remove padding from measurement
	    x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
	    y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;
	
	    this.position.x = x;
	    this.position.y = y;
	  };
	
	  // set settled position, apply padding
	  proto.layoutPosition = function () {
	    var layoutSize = this.layout.size;
	    var style = {};
	    var isOriginLeft = this.layout._getOption('originLeft');
	    var isOriginTop = this.layout._getOption('originTop');
	
	    // x
	    var xPadding = isOriginLeft ? 'paddingLeft' : 'paddingRight';
	    var xProperty = isOriginLeft ? 'left' : 'right';
	    var xResetProperty = isOriginLeft ? 'right' : 'left';
	
	    var x = this.position.x + layoutSize[xPadding];
	    // set in percentage or pixels
	    style[xProperty] = this.getXValue(x);
	    // reset other property
	    style[xResetProperty] = '';
	
	    // y
	    var yPadding = isOriginTop ? 'paddingTop' : 'paddingBottom';
	    var yProperty = isOriginTop ? 'top' : 'bottom';
	    var yResetProperty = isOriginTop ? 'bottom' : 'top';
	
	    var y = this.position.y + layoutSize[yPadding];
	    // set in percentage or pixels
	    style[yProperty] = this.getYValue(y);
	    // reset other property
	    style[yResetProperty] = '';
	
	    this.css(style);
	    this.emitEvent('layout', [this]);
	  };
	
	  proto.getXValue = function (x) {
	    var isHorizontal = this.layout._getOption('horizontal');
	    return this.layout.options.percentPosition && !isHorizontal ? x / this.layout.size.width * 100 + '%' : x + 'px';
	  };
	
	  proto.getYValue = function (y) {
	    var isHorizontal = this.layout._getOption('horizontal');
	    return this.layout.options.percentPosition && isHorizontal ? y / this.layout.size.height * 100 + '%' : y + 'px';
	  };
	
	  proto._transitionTo = function (x, y) {
	    this.getPosition();
	    // get current x & y from top/left
	    var curX = this.position.x;
	    var curY = this.position.y;
	
	    var compareX = parseInt(x, 10);
	    var compareY = parseInt(y, 10);
	    var didNotMove = compareX === this.position.x && compareY === this.position.y;
	
	    // save end position
	    this.setPosition(x, y);
	
	    // if did not move and not transitioning, just go to layout
	    if (didNotMove && !this.isTransitioning) {
	      this.layoutPosition();
	      return;
	    }
	
	    var transX = x - curX;
	    var transY = y - curY;
	    var transitionStyle = {};
	    transitionStyle.transform = this.getTranslate(transX, transY);
	
	    this.transition({
	      to: transitionStyle,
	      onTransitionEnd: {
	        transform: this.layoutPosition
	      },
	      isCleaning: true
	    });
	  };
	
	  proto.getTranslate = function (x, y) {
	    // flip cooridinates if origin on right or bottom
	    var isOriginLeft = this.layout._getOption('originLeft');
	    var isOriginTop = this.layout._getOption('originTop');
	    x = isOriginLeft ? x : -x;
	    y = isOriginTop ? y : -y;
	    return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
	  };
	
	  // non transition + transform support
	  proto.goTo = function (x, y) {
	    this.setPosition(x, y);
	    this.layoutPosition();
	  };
	
	  proto.moveTo = proto._transitionTo;
	
	  proto.setPosition = function (x, y) {
	    this.position.x = parseInt(x, 10);
	    this.position.y = parseInt(y, 10);
	  };
	
	  // ----- transition ----- //
	
	  /**
	   * @param {Object} style - CSS
	   * @param {Function} onTransitionEnd
	   */
	
	  // non transition, just trigger callback
	  proto._nonTransition = function (args) {
	    this.css(args.to);
	    if (args.isCleaning) {
	      this._removeStyles(args.to);
	    }
	    for (var prop in args.onTransitionEnd) {
	      args.onTransitionEnd[prop].call(this);
	    }
	  };
	
	  /**
	   * proper transition
	   * @param {Object} args - arguments
	   *   @param {Object} to - style to transition to
	   *   @param {Object} from - style to start transition from
	   *   @param {Boolean} isCleaning - removes transition styles after transition
	   *   @param {Function} onTransitionEnd - callback
	   */
	  proto.transition = function (args) {
	    // redirect to nonTransition if no transition duration
	    if (!parseFloat(this.layout.options.transitionDuration)) {
	      this._nonTransition(args);
	      return;
	    }
	
	    var _transition = this._transn;
	    // keep track of onTransitionEnd callback by css property
	    for (var prop in args.onTransitionEnd) {
	      _transition.onEnd[prop] = args.onTransitionEnd[prop];
	    }
	    // keep track of properties that are transitioning
	    for (prop in args.to) {
	      _transition.ingProperties[prop] = true;
	      // keep track of properties to clean up when transition is done
	      if (args.isCleaning) {
	        _transition.clean[prop] = true;
	      }
	    }
	
	    // set from styles
	    if (args.from) {
	      this.css(args.from);
	      // force redraw. http://blog.alexmaccaw.com/css-transitions
	      var h = this.element.offsetHeight;
	      // hack for JSHint to hush about unused var
	      h = null;
	    }
	    // enable transition
	    this.enableTransition(args.to);
	    // set styles that are transitioning
	    this.css(args.to);
	
	    this.isTransitioning = true;
	  };
	
	  // dash before all cap letters, including first for
	  // WebkitTransform => -webkit-transform
	  function toDashedAll(str) {
	    return str.replace(/([A-Z])/g, function ($1) {
	      return '-' + $1.toLowerCase();
	    });
	  }
	
	  var transitionProps = 'opacity,' + toDashedAll(transformProperty);
	
	  proto.enableTransition = function () /* style */{
	    // HACK changing transitionProperty during a transition
	    // will cause transition to jump
	    if (this.isTransitioning) {
	      return;
	    }
	
	    // make `transition: foo, bar, baz` from style object
	    // HACK un-comment this when enableTransition can work
	    // while a transition is happening
	    // var transitionValues = [];
	    // for ( var prop in style ) {
	    //   // dash-ify camelCased properties like WebkitTransition
	    //   prop = vendorProperties[ prop ] || prop;
	    //   transitionValues.push( toDashedAll( prop ) );
	    // }
	    // munge number to millisecond, to match stagger
	    var duration = this.layout.options.transitionDuration;
	    duration = typeof duration == 'number' ? duration + 'ms' : duration;
	    // enable transition styles
	    this.css({
	      transitionProperty: transitionProps,
	      transitionDuration: duration,
	      transitionDelay: this.staggerDelay || 0
	    });
	    // listen for transition end event
	    this.element.addEventListener(transitionEndEvent, this, false);
	  };
	
	  // ----- events ----- //
	
	  proto.onwebkitTransitionEnd = function (event) {
	    this.ontransitionend(event);
	  };
	
	  proto.onotransitionend = function (event) {
	    this.ontransitionend(event);
	  };
	
	  // properties that I munge to make my life easier
	  var dashedVendorProperties = {
	    '-webkit-transform': 'transform'
	  };
	
	  proto.ontransitionend = function (event) {
	    // disregard bubbled events from children
	    if (event.target !== this.element) {
	      return;
	    }
	    var _transition = this._transn;
	    // get property name of transitioned property, convert to prefix-free
	    var propertyName = dashedVendorProperties[event.propertyName] || event.propertyName;
	
	    // remove property that has completed transitioning
	    delete _transition.ingProperties[propertyName];
	    // check if any properties are still transitioning
	    if (isEmptyObj(_transition.ingProperties)) {
	      // all properties have completed transitioning
	      this.disableTransition();
	    }
	    // clean style
	    if (propertyName in _transition.clean) {
	      // clean up style
	      this.element.style[event.propertyName] = '';
	      delete _transition.clean[propertyName];
	    }
	    // trigger onTransitionEnd callback
	    if (propertyName in _transition.onEnd) {
	      var onTransitionEnd = _transition.onEnd[propertyName];
	      onTransitionEnd.call(this);
	      delete _transition.onEnd[propertyName];
	    }
	
	    this.emitEvent('transitionEnd', [this]);
	  };
	
	  proto.disableTransition = function () {
	    this.removeTransitionStyles();
	    this.element.removeEventListener(transitionEndEvent, this, false);
	    this.isTransitioning = false;
	  };
	
	  /**
	   * removes style property from element
	   * @param {Object} style
	  **/
	  proto._removeStyles = function (style) {
	    // clean up transition styles
	    var cleanStyle = {};
	    for (var prop in style) {
	      cleanStyle[prop] = '';
	    }
	    this.css(cleanStyle);
	  };
	
	  var cleanTransitionStyle = {
	    transitionProperty: '',
	    transitionDuration: '',
	    transitionDelay: ''
	  };
	
	  proto.removeTransitionStyles = function () {
	    // remove transition
	    this.css(cleanTransitionStyle);
	  };
	
	  // ----- stagger ----- //
	
	  proto.stagger = function (delay) {
	    delay = isNaN(delay) ? 0 : delay;
	    this.staggerDelay = delay + 'ms';
	  };
	
	  // ----- show/hide/remove ----- //
	
	  // remove element from DOM
	  proto.removeElem = function () {
	    this.element.parentNode.removeChild(this.element);
	    // remove display: none
	    this.css({ display: '' });
	    this.emitEvent('remove', [this]);
	  };
	
	  proto.remove = function () {
	    // just remove element if no transition support or no transition
	    if (!transitionProperty || !parseFloat(this.layout.options.transitionDuration)) {
	      this.removeElem();
	      return;
	    }
	
	    // start transition
	    this.once('transitionEnd', function () {
	      this.removeElem();
	    });
	    this.hide();
	  };
	
	  proto.reveal = function () {
	    delete this.isHidden;
	    // remove display: none
	    this.css({ display: '' });
	
	    var options = this.layout.options;
	
	    var onTransitionEnd = {};
	    var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
	    onTransitionEnd[transitionEndProperty] = this.onRevealTransitionEnd;
	
	    this.transition({
	      from: options.hiddenStyle,
	      to: options.visibleStyle,
	      isCleaning: true,
	      onTransitionEnd: onTransitionEnd
	    });
	  };
	
	  proto.onRevealTransitionEnd = function () {
	    // check if still visible
	    // during transition, item may have been hidden
	    if (!this.isHidden) {
	      this.emitEvent('reveal');
	    }
	  };
	
	  /**
	   * get style property use for hide/reveal transition end
	   * @param {String} styleProperty - hiddenStyle/visibleStyle
	   * @returns {String}
	   */
	  proto.getHideRevealTransitionEndProperty = function (styleProperty) {
	    var optionStyle = this.layout.options[styleProperty];
	    // use opacity
	    if (optionStyle.opacity) {
	      return 'opacity';
	    }
	    // get first property
	    for (var prop in optionStyle) {
	      return prop;
	    }
	  };
	
	  proto.hide = function () {
	    // set flag
	    this.isHidden = true;
	    // remove display: none
	    this.css({ display: '' });
	
	    var options = this.layout.options;
	
	    var onTransitionEnd = {};
	    var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
	    onTransitionEnd[transitionEndProperty] = this.onHideTransitionEnd;
	
	    this.transition({
	      from: options.visibleStyle,
	      to: options.hiddenStyle,
	      // keep hidden stuff hidden
	      isCleaning: true,
	      onTransitionEnd: onTransitionEnd
	    });
	  };
	
	  proto.onHideTransitionEnd = function () {
	    // check if still hidden
	    // during transition, item may have been un-hidden
	    if (this.isHidden) {
	      this.css({ display: 'none' });
	      this.emitEvent('hide');
	    }
	  };
	
	  proto.destroy = function () {
	    this.css({
	      position: '',
	      left: '',
	      right: '',
	      top: '',
	      bottom: '',
	      transition: '',
	      transform: ''
	    });
	  };
	
	  return Item;
	});

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	/**
	 * Rect
	 * low-level utility class for basic geometry
	 */
	
	(function (window, factory) {
	  // universal module definition
	  /* jshint strict: false */ /* globals define, module */
	  if (true) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
	    // CommonJS
	    module.exports = factory();
	  } else {
	    // browser global
	    window.Packery = window.Packery || {};
	    window.Packery.Rect = factory();
	  }
	})(window, function factory() {
	  'use strict';
	
	  // -------------------------- Rect -------------------------- //
	
	  function Rect(props) {
	    // extend properties from defaults
	    for (var prop in Rect.defaults) {
	      this[prop] = Rect.defaults[prop];
	    }
	
	    for (prop in props) {
	      this[prop] = props[prop];
	    }
	  }
	
	  Rect.defaults = {
	    x: 0,
	    y: 0,
	    width: 0,
	    height: 0
	  };
	
	  var proto = Rect.prototype;
	
	  /**
	   * Determines whether or not this rectangle wholly encloses another rectangle or point.
	   * @param {Rect} rect
	   * @returns {Boolean}
	  **/
	  proto.contains = function (rect) {
	    // points don't have width or height
	    var otherWidth = rect.width || 0;
	    var otherHeight = rect.height || 0;
	    return this.x <= rect.x && this.y <= rect.y && this.x + this.width >= rect.x + otherWidth && this.y + this.height >= rect.y + otherHeight;
	  };
	
	  /**
	   * Determines whether or not the rectangle intersects with another.
	   * @param {Rect} rect
	   * @returns {Boolean}
	  **/
	  proto.overlaps = function (rect) {
	    var thisRight = this.x + this.width;
	    var thisBottom = this.y + this.height;
	    var rectRight = rect.x + rect.width;
	    var rectBottom = rect.y + rect.height;
	
	    // http://stackoverflow.com/a/306332
	    return this.x < rectRight && thisRight > rect.x && this.y < rectBottom && thisBottom > rect.y;
	  };
	
	  /**
	   * @param {Rect} rect - the overlapping rect
	   * @returns {Array} freeRects - rects representing the area around the rect
	  **/
	  proto.getMaximalFreeRects = function (rect) {
	
	    // if no intersection, return false
	    if (!this.overlaps(rect)) {
	      return false;
	    }
	
	    var freeRects = [];
	    var freeRect;
	
	    var thisRight = this.x + this.width;
	    var thisBottom = this.y + this.height;
	    var rectRight = rect.x + rect.width;
	    var rectBottom = rect.y + rect.height;
	
	    // top
	    if (this.y < rect.y) {
	      freeRect = new Rect({
	        x: this.x,
	        y: this.y,
	        width: this.width,
	        height: rect.y - this.y
	      });
	      freeRects.push(freeRect);
	    }
	
	    // right
	    if (thisRight > rectRight) {
	      freeRect = new Rect({
	        x: rectRight,
	        y: this.y,
	        width: thisRight - rectRight,
	        height: this.height
	      });
	      freeRects.push(freeRect);
	    }
	
	    // bottom
	    if (thisBottom > rectBottom) {
	      freeRect = new Rect({
	        x: this.x,
	        y: rectBottom,
	        width: this.width,
	        height: thisBottom - rectBottom
	      });
	      freeRects.push(freeRect);
	    }
	
	    // left
	    if (this.x < rect.x) {
	      freeRect = new Rect({
	        x: this.x,
	        y: this.y,
	        width: rect.x - this.x,
	        height: this.height
	      });
	      freeRects.push(freeRect);
	    }
	
	    return freeRects;
	  };
	
	  proto.canFit = function (rect) {
	    return this.width >= rect.width && this.height >= rect.height;
	  };
	
	  return Rect;
	});

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	/**
	 * Packer
	 * bin-packing algorithm
	 */
	
	(function (window, factory) {
	  // universal module definition
	  /* jshint strict: false */ /* globals define, module, require */
	  if (true) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(39)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
	    // CommonJS
	    module.exports = factory(require('./rect'));
	  } else {
	    // browser global
	    var Packery = window.Packery = window.Packery || {};
	    Packery.Packer = factory(Packery.Rect);
	  }
	})(window, function factory(Rect) {
	  'use strict';
	
	  // -------------------------- Packer -------------------------- //
	
	  /**
	   * @param {Number} width
	   * @param {Number} height
	   * @param {String} sortDirection
	   *   topLeft for vertical, leftTop for horizontal
	   */
	
	  function Packer(width, height, sortDirection) {
	    this.width = width || 0;
	    this.height = height || 0;
	    this.sortDirection = sortDirection || 'downwardLeftToRight';
	
	    this.reset();
	  }
	
	  var proto = Packer.prototype;
	
	  proto.reset = function () {
	    this.spaces = [];
	
	    var initialSpace = new Rect({
	      x: 0,
	      y: 0,
	      width: this.width,
	      height: this.height
	    });
	
	    this.spaces.push(initialSpace);
	    // set sorter
	    this.sorter = sorters[this.sortDirection] || sorters.downwardLeftToRight;
	  };
	
	  // change x and y of rect to fit with in Packer's available spaces
	  proto.pack = function (rect) {
	    for (var i = 0; i < this.spaces.length; i++) {
	      var space = this.spaces[i];
	      if (space.canFit(rect)) {
	        this.placeInSpace(rect, space);
	        break;
	      }
	    }
	  };
	
	  proto.columnPack = function (rect) {
	    for (var i = 0; i < this.spaces.length; i++) {
	      var space = this.spaces[i];
	      var canFitInSpaceColumn = space.x <= rect.x && space.x + space.width >= rect.x + rect.width && space.height >= rect.height - 0.01; // fudge number for rounding error
	      if (canFitInSpaceColumn) {
	        rect.y = space.y;
	        this.placed(rect);
	        break;
	      }
	    }
	  };
	
	  proto.rowPack = function (rect) {
	    for (var i = 0; i < this.spaces.length; i++) {
	      var space = this.spaces[i];
	      var canFitInSpaceRow = space.y <= rect.y && space.y + space.height >= rect.y + rect.height && space.width >= rect.width - 0.01; // fudge number for rounding error
	      if (canFitInSpaceRow) {
	        rect.x = space.x;
	        this.placed(rect);
	        break;
	      }
	    }
	  };
	
	  proto.placeInSpace = function (rect, space) {
	    // place rect in space
	    rect.x = space.x;
	    rect.y = space.y;
	
	    this.placed(rect);
	  };
	
	  // update spaces with placed rect
	  proto.placed = function (rect) {
	    // update spaces
	    var revisedSpaces = [];
	    for (var i = 0; i < this.spaces.length; i++) {
	      var space = this.spaces[i];
	      var newSpaces = space.getMaximalFreeRects(rect);
	      // add either the original space or the new spaces to the revised spaces
	      if (newSpaces) {
	        revisedSpaces.push.apply(revisedSpaces, newSpaces);
	      } else {
	        revisedSpaces.push(space);
	      }
	    }
	
	    this.spaces = revisedSpaces;
	
	    this.mergeSortSpaces();
	  };
	
	  proto.mergeSortSpaces = function () {
	    // remove redundant spaces
	    Packer.mergeRects(this.spaces);
	    this.spaces.sort(this.sorter);
	  };
	
	  // add a space back
	  proto.addSpace = function (rect) {
	    this.spaces.push(rect);
	    this.mergeSortSpaces();
	  };
	
	  // -------------------------- utility functions -------------------------- //
	
	  /**
	   * Remove redundant rectangle from array of rectangles
	   * @param {Array} rects: an array of Rects
	   * @returns {Array} rects: an array of Rects
	  **/
	  Packer.mergeRects = function (rects) {
	    var i = 0;
	    var rect = rects[i];
	
	    rectLoop: while (rect) {
	      var j = 0;
	      var compareRect = rects[i + j];
	
	      while (compareRect) {
	        if (compareRect == rect) {
	          j++; // next
	        } else if (compareRect.contains(rect)) {
	          // remove rect
	          rects.splice(i, 1);
	          rect = rects[i]; // set next rect
	          continue rectLoop; // bail on compareLoop
	        } else if (rect.contains(compareRect)) {
	          // remove compareRect
	          rects.splice(i + j, 1);
	        } else {
	          j++;
	        }
	        compareRect = rects[i + j]; // set next compareRect
	      }
	      i++;
	      rect = rects[i];
	    }
	
	    return rects;
	  };
	
	  // -------------------------- sorters -------------------------- //
	
	  // functions for sorting rects in order
	  var sorters = {
	    // top down, then left to right
	    downwardLeftToRight: function downwardLeftToRight(a, b) {
	      return a.y - b.y || a.x - b.x;
	    },
	    // left to right, then top down
	    rightwardTopToBottom: function rightwardTopToBottom(a, b) {
	      return a.x - b.x || a.y - b.y;
	    }
	  };
	
	  // --------------------------  -------------------------- //
	
	  return Packer;
	});

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	/**
	 * Packery Item Element
	**/
	
	(function (window, factory) {
	  // universal module definition
	  /* jshint strict: false */ /* globals define, module, require */
	  if (true) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(34), __webpack_require__(39)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) == 'object' && module.exports) {
	    // CommonJS
	    module.exports = factory(require('outlayer'), require('./rect'));
	  } else {
	    // browser global
	    window.Packery.Item = factory(window.Outlayer, window.Packery.Rect);
	  }
	})(window, function factory(Outlayer, Rect) {
	  'use strict';
	
	  // -------------------------- Item -------------------------- //
	
	  var docElemStyle = document.documentElement.style;
	
	  var transformProperty = typeof docElemStyle.transform == 'string' ? 'transform' : 'WebkitTransform';
	
	  // sub-class Item
	  var Item = function PackeryItem() {
	    Outlayer.Item.apply(this, arguments);
	  };
	
	  var proto = Item.prototype = Object.create(Outlayer.Item.prototype);
	
	  var __create = proto._create;
	  proto._create = function () {
	    // call default _create logic
	    __create.call(this);
	    this.rect = new Rect();
	  };
	
	  var _moveTo = proto.moveTo;
	  proto.moveTo = function (x, y) {
	    // don't shift 1px while dragging
	    var dx = Math.abs(this.position.x - x);
	    var dy = Math.abs(this.position.y - y);
	
	    var canHackGoTo = this.layout.dragItemCount && !this.isPlacing && !this.isTransitioning && dx < 1 && dy < 1;
	    if (canHackGoTo) {
	      this.goTo(x, y);
	      return;
	    }
	    _moveTo.apply(this, arguments);
	  };
	
	  // -------------------------- placing -------------------------- //
	
	  proto.enablePlacing = function () {
	    this.removeTransitionStyles();
	    // remove transform property from transition
	    if (this.isTransitioning && transformProperty) {
	      this.element.style[transformProperty] = 'none';
	    }
	    this.isTransitioning = false;
	    this.getSize();
	    this.layout._setRectSize(this.element, this.rect);
	    this.isPlacing = true;
	  };
	
	  proto.disablePlacing = function () {
	    this.isPlacing = false;
	  };
	
	  // -----  ----- //
	
	  // remove element from DOM
	  proto.removeElem = function () {
	    this.element.parentNode.removeChild(this.element);
	    // add space back to packer
	    this.layout.packer.addSpace(this.rect);
	    this.emitEvent('remove', [this]);
	  };
	
	  // ----- dropPlaceholder ----- //
	
	  proto.showDropPlaceholder = function () {
	    var dropPlaceholder = this.dropPlaceholder;
	    if (!dropPlaceholder) {
	      // create dropPlaceholder
	      dropPlaceholder = this.dropPlaceholder = document.createElement('div');
	      dropPlaceholder.className = 'packery-drop-placeholder';
	      dropPlaceholder.style.position = 'absolute';
	    }
	
	    dropPlaceholder.style.width = this.size.width + 'px';
	    dropPlaceholder.style.height = this.size.height + 'px';
	    this.positionDropPlaceholder();
	    this.layout.element.appendChild(dropPlaceholder);
	  };
	
	  proto.positionDropPlaceholder = function () {
	    this.dropPlaceholder.style[transformProperty] = 'translate(' + this.rect.x + 'px, ' + this.rect.y + 'px)';
	  };
	
	  proto.hideDropPlaceholder = function () {
	    // only remove once, #333
	    var parent = this.dropPlaceholder.parentNode;
	    if (parent) {
	      parent.removeChild(this.dropPlaceholder);
	    }
	  };
	
	  // -----  ----- //
	
	  return Item;
	});

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jquery = __webpack_require__(4);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/*
	 *	TODO:
	 *		- arrow up
	 *		- repack as a frend _component and CSS
	 *		- refactor without jQuery
	 */
	
	/*
	 * Porting of http://www.oaa-accessibility.org/examplep/treeview1/
	 */
	var Frtreeview = function Frtreeview() {
	  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	  var _ref$selector = _ref.selector;
	  var selector = _ref$selector === undefined ? '.js-fr-treeview' : _ref$selector;
	  var _ref$openOnClick = _ref.openOnClick;
	  var openOnClick = _ref$openOnClick === undefined ? true : _ref$openOnClick;
	  var _ref$classFocused = _ref.classFocused;
	  var classFocused = _ref$classFocused === undefined ? 'fr-tree-focus' : _ref$classFocused;
	  var _ref$classParent = _ref.classParent;
	  var classParent = _ref$classParent === undefined ? 'fr-tree-parent' : _ref$classParent;
	  var _ref$multiselectable = _ref.multiselectable;
	  var multiselectable = _ref$multiselectable === undefined ? false : _ref$multiselectable;
	
	
	  // CONSTANTS
	  var doc = document;
	  var docEl = doc.documentElement;
	  var _q = function _q(el) {
	    var ctx = arguments.length <= 1 || arguments[1] === undefined ? doc : arguments[1];
	    return [].slice.call(ctx.querySelectorAll(el));
	  };
	
	  // SUPPORTS
	  if (!('querySelector' in doc) || !('addEventListener' in window) || !docEl.classList) return null;
	
	  // SETUP
	  // set treeview element NodeLists
	  var treeviewContainers = _q(selector);
	
	  var keys = {
	    tab: 9,
	    enter: 13,
	    space: 32,
	    pageup: 33,
	    pagedown: 34,
	    end: 35,
	    home: 36,
	    left: 37,
	    up: 38,
	    right: 39,
	    down: 40,
	    asterisk: 106
	  };
	
	  function _collapseAll(treeview) {
	    treeview.$parents.each(function () {
	      if ((0, _jquery2['default'])(this).attr('aria-expanded') == 'false') {
	        (0, _jquery2['default'])(this).children('ul').attr('aria-hidden', 'true');
	      }
	    });
	    treeview.$visibleItems = treeview.$el.find('li:visible');
	  }
	
	  function _expandGroup(treeview, $item) {
	    var $group = $item.children('ul');
	    $group.slideDown(250, function () {
	      $group.attr('aria-hidden', 'false');
	      $item.attr('aria-expanded', 'true');
	      treeview.$visibleItems = treeview.$el.find('li:visible');
	    });
	  }
	
	  function _collapseGroup(treeview, $item) {
	    var $group = $item.children('ul');
	    $group.slideUp(250, function () {
	      $group.attr('aria-hidden', 'true');
	      $item.attr('aria-expanded', 'false');
	      treeview.$visibleItems = treeview.$el.find('li:visible');
	    });
	  }
	
	  function _collapseSiblings(treeview, $item) {
	    $item.closest('ul').find('> .' + classParent).not($item).each(function (i, el) {
	      _collapseGroup(treeview, (0, _jquery2['default'])(el));
	    });
	  }
	
	  function _toggleGroup(treeview, $item) {
	    if (!multiselectable) {
	      _collapseSiblings(treeview, $item);
	    }
	    if ($item.attr('aria-expanded') == 'true') {
	      _collapseGroup(treeview, $item);
	    } else {
	      _expandGroup(treeview, $item);
	    }
	  }
	
	  function _updateStyling(treeview, $item) {
	    treeview.$items.removeClass(classFocused).attr('tabindex', '-1');
	    $item.addClass(classFocused).attr('tabindex', '0');
	  }
	
	  function _handleKeyDown(treeview, $item, e) {
	    var curNdx = treeview.$visibleItems.index($item);
	
	    if (e.altKey || e.ctrlKey || e.shiftKey && e.keyCode != keys.tab) {
	      return true;
	    }
	
	    switch (e.keyCode) {
	      case keys.tab:
	        {
	          treeview.$activeItem = null;
	          $item.removeClass(classFocused);
	          return true;
	        }
	
	      case keys.home:
	        {
	          treeview.$activeItem = treeview.$parents.first();
	          treeview.$activeItem.focus();
	          e.stopPropagation();
	          return false;
	        }
	
	      case keys.end:
	        {
	          treeview.$activeItem = treeview.$visibleItems.last();
	          treeview.$activeItem.focus();
	          e.stopPropagation();
	          return false;
	        }
	
	      case keys.enter:
	      case keys.space:
	        {
	          if (!$item.is('.' + classParent)) {
	            // do nothing
	          } else {
	            _toggleGroup(treeview, $item);
	          }
	          e.stopPropagation();
	          return false;
	        }
	
	      case keys.left:
	        {
	          if ($item.is('.' + classParent) && $item.attr('aria-expanded') == 'true') {
	            _collapseGroup(treeview, $item);
	          } else {
	            var $itemUL = $item.parent();
	            var $itemParent = $itemUL.parent();
	            treeview.$activeItem = $itemParent;
	            treeview.$activeItem.focus();
	          }
	          e.stopPropagation();
	          return false;
	        }
	
	      case keys.right:
	        {
	          if (!$item.is('.' + classParent)) {
	            // do nothing
	          } else if ($item.attr('aria-expanded') == 'false') {
	            _expandGroup(treeview, $item);
	          } else {
	            treeview.$activeItem = $item.children('ul').children('li').first();
	            treeview.$activeItem.focus();
	          }
	          e.stopPropagation();
	          return false;
	        }
	
	      case keys.up:
	        {
	          if (curNdx > 0) {
	            var $prev = treeview.$visibleItems.eq(curNdx - 1);
	            treeview.$activeItem = $prev;
	            $prev.focus();
	          }
	          e.stopPropagation();
	          return false;
	        }
	
	      case keys.down:
	        {
	          if (curNdx < treeview.$visibleItems.length - 1) {
	            var $next = treeview.$visibleItems.eq(curNdx + 1);
	            treeview.$activeItem = $next;
	            $next.focus();
	          }
	          e.stopPropagation();
	          return false;
	        }
	
	      case keys.asterisk:
	        {
	          treeview.$parents.each(function () {
	            _expandGroup(treeview, (0, _jquery2['default'])(this));
	          });
	          e.stopPropagation();
	          return false;
	        }
	
	    }
	    return true;
	  }
	
	  function _handleKeyPress(treeview, $item, e) {
	    if (e.altKey || e.ctrlKey || e.shiftKey) {
	      // do nothing
	      return true;
	    }
	
	    switch (e.keyCode) {
	      case keys.tab:
	        {
	          return true;
	        }
	      case keys.enter:
	      case keys.home:
	      case keys.end:
	      case keys.left:
	      case keys.right:
	      case keys.up:
	      case keys.down:
	        {
	          e.stopPropagation();
	          return false;
	        }
	      default:
	        {
	          var chr = String.fromCharCode(e.which);
	          var bMatch = false;
	          var itemNdx = treeview.$visibleItems.index($item);
	          var itemCnt = treeview.$visibleItems.length;
	          var curNdx = itemNdx + 1;
	
	          // check if the active item was the last one on the list
	          if (curNdx == itemCnt) {
	            curNdx = 0;
	          }
	
	          // Iterate through the menu items (starting from the current item and wrapping) until a match is found
	          // or the loop returns to the current menu item
	          while (curNdx != itemNdx) {
	
	            var $curItem = treeview.$visibleItems.eq(curNdx);
	            var titleChr = $curItem.text().charAt(0);
	
	            if ($curItem.is('.' + classParent)) {
	              titleChr = $curItem.find('span').text().charAt(0);
	            }
	
	            if (titleChr.toLowerCase() == chr) {
	              bMatch = true;
	              break;
	            }
	
	            curNdx = curNdx + 1;
	
	            if (curNdx == itemCnt) {
	              // reached the end of the list, start again at the beginning
	              curNdx = 0;
	            }
	          }
	
	          if (bMatch == true) {
	            treeview.$activeItem = treeview.$visibleItems.eq(curNdx);
	            treeview.$activeItem.focus();
	          }
	
	          e.stopPropagation();
	          return false;
	        }
	    }
	
	    return true;
	  }
	
	  function _handleDblClick(treeview, $item, e) {
	    if (e.altKey || e.ctrlKey || e.shiftKey) {
	      // do nothing
	      return true;
	    }
	    treeview.$activeItem = $item;
	    _updateStyling(treeview, $item);
	    _toggleGroup(treeview, $item);
	    e.stopPropagation();
	    return false;
	  }
	
	  function _handleClick(treeview, $item, e) {
	    if (e.altKey || e.ctrlKey || e.shiftKey) {
	      // do nothing
	      return true;
	    }
	    treeview.$activeItem = treeview.$el;
	    _updateStyling(treeview, $item);
	    e.stopPropagation();
	    return false;
	  }
	
	  function _bindEvents(treeview) {
	    if (openOnClick) {
	      treeview.$parents.click(function (e) {
	        return _handleDblClick(treeview, (0, _jquery2['default'])(this), e);
	      });
	    } else {
	      treeview.$parents.click(function (e) {
	        return _handleDblClick(treeview, (0, _jquery2['default'])(this), e);
	      });
	      treeview.$items.click(function (e) {
	        return _handleClick(treeview, (0, _jquery2['default'])(this), e);
	      });
	    }
	
	    treeview.$items.keydown(function (e) {
	      return _handleKeyDown(treeview, (0, _jquery2['default'])(this), e);
	    });
	
	    treeview.$items.keypress(function (e) {
	      return _handleKeyPress(treeview, (0, _jquery2['default'])(this), e);
	    });
	
	    (0, _jquery2['default'])(document).click(function () {
	      if (treeview.$activeItem != null) {
	        treeview.$activeItem.removeClass(classFocused);
	        treeview.$activeItem = null;
	      }
	      return true;
	    });
	  }
	
	  function destroy() {
	    /* TODO */
	  }
	
	  function _addA11y($el) {
	    $el.attr('role', 'tree');
	
	    // Put role="treeitem" on every LI
	    // Put aria-expanded="false" on every LI (if it has no aria-expanded attr)
	    // Put tabindex="-1" on every LI (if it's not the first one)
	    // Put class=<classParent> on every LI that contains an UL
	    $el.find('li').each(function (i, li) {
	      var $li = (0, _jquery2['default'])(li);
	      $li.attr('role', 'treeitem').attr('tabindex', 0 === i ? '0' : '-1');
	      if ($li.find('ul').length !== 0) {
	        if (!li.hasAttribute('aria-expanded')) {
	          $li.attr('aria-expanded', 'false');
	        }
	        $li.addClass(classParent);
	      }
	    });
	    // Put role="group" on every contained UL
	    $el.find('ul').attr('role', 'group');
	  }
	
	  function init() {
	    if (treeviewContainers.length) {
	      treeviewContainers.forEach(function (treeviewContainer) {
	        var $el = (0, _jquery2['default'])(treeviewContainer);
	        _addA11y($el);
	        var treeview = {
	          $el: $el,
	          $items: $el.find('li'),
	          $parents: $el.find('.' + classParent),
	          $visibleItems: null,
	          $activeItem: null
	        };
	        _collapseAll(treeview);
	        _bindEvents(treeview);
	      });
	    }
	  }
	
	  init();
	
	  // REVEAL API
	  return {
	    init: init,
	    destroy: destroy
	  };
	};
	
	new Frtreeview();
	
	exports['default'] = { Frtreeview: Frtreeview };
	module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jquery = __webpack_require__(4);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _frOffcanvas = __webpack_require__(44);
	
	var _frOffcanvas2 = _interopRequireDefault(_frOffcanvas);
	
	var _offcanvas = __webpack_require__(45);
	
	var _offcanvas2 = _interopRequireDefault(_offcanvas);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/* eslint-enable */
	
	var opts = {
	  // String - panel
	  panelSelector: '.Offcanvas',
	
	  // String - content
	  contentSelector: '.Offcanvas-content',
	
	  // String - content
	  modalSelector: '.Offcanvas--modal',
	
	  // String - trigger
	  jsSelector: '.js-fr-offcanvas-open',
	
	  // String - Selector for the open button(s)
	  openSelector: '.js-fr-offcanvas-open',
	
	  // String - Selector for the close button
	  closeSelector: '.js-fr-offcanvas-close',
	
	  // String - Class name that will be added to the selector when the component has been initialised
	  readyClass: 'is-ready',
	
	  // String - Class name that will be added to the selector when the panel is visible
	  activeClass: 'is-active'
	};
	
	/* eslint-disable no-unused-vars */
	
	var offcanvas = (0, _frOffcanvas2['default'])(opts);
	
	/*
	 *  Prevent scroll on body when offcanvas is visible
	 *  (the touchmove handler targets iOS devices)
	 */
	var _handleModalScroll = function _handleModalScroll() {
	  (0, _jquery2['default'])(opts.contentSelector).on('transitionend', function () {
	    if (!(0, _jquery2['default'])(opts.panelSelector).hasClass(opts.activeClass)) {
	      (0, _jquery2['default'])('body, html').css({
	        'overflow-y': 'visible'
	      });
	      (0, _jquery2['default'])(document).off('touchmove.offcanvas');
	    } else {
	      (function () {
	        var scrollTop = (0, _jquery2['default'])('body').scrollTop();
	        (0, _jquery2['default'])('body, html').css({
	          'overflow-y': 'hidden'
	        });
	        (0, _jquery2['default'])(document).on('touchmove.offcanvas', function () {
	          (0, _jquery2['default'])('body').scrollTop(scrollTop);
	        });
	      })();
	    }
	  });
	};
	
	/*
	 *	FIXME: hack to show / hide the background panel
	 */
	var _handleModal = function _handleModal(e) {
	  if (e && (0, _jquery2['default'])(opts.panelSelector).hasClass(opts.activeClass) && !(0, _jquery2['default'])(e.target).is(opts.contentSelector)) {
	    (0, _jquery2['default'])(opts.closeSelector).click();
	  }
	  (0, _jquery2['default'])(opts.modalSelector).one('click', _handleModal);
	};
	
	(0, _jquery2['default'])(document).ready(function () {
	  _handleModal();
	  _handleModalScroll();
	});
	
	exports['default'] = {
	  Froffcanvas: _frOffcanvas2['default'],
	  offcanvas: offcanvas,
	  opts: opts
	};
	module.exports = exports['default'];

/***/ },
/* 44 */
/***/ function(module, exports) {

	'use strict';
	
	// Polyfill matches as per https://github.com/jonathantneal/closest
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	Element.prototype.matches = Element.prototype.matches || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector;
	
	/**
	 * @param {object} options Object containing configuration overrides
	 */
	var Froffcanvas = function Froffcanvas() {
	  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	  var _ref$selector = _ref.selector;
	  var selector = _ref$selector === undefined ? '.js-fr-offcanvas' : _ref$selector;
	  var _ref$openSelector = _ref.openSelector;
	  var openSelector = _ref$openSelector === undefined ? '.js-fr-offcanvas-open' : _ref$openSelector;
	  var _ref$closeSelector = _ref.closeSelector;
	  var closeSelector = _ref$closeSelector === undefined ? '.js-fr-offcanvas-close' : _ref$closeSelector;
	  var _ref$readyClass = _ref.readyClass;
	  var readyClass = _ref$readyClass === undefined ? 'fr-offcanvas--is-ready' : _ref$readyClass;
	  var _ref$activeClass = _ref.activeClass;
	  var activeClass = _ref$activeClass === undefined ? 'fr-offcanvas--is-active' : _ref$activeClass;
	
	
	  //  CONSTANTS
	  var doc = document;
	  var docEl = doc.documentElement;
	  var _q = function _q(el) {
	    var ctx = arguments.length <= 1 || arguments[1] === undefined ? doc : arguments[1];
	    return [].slice.call(ctx.querySelectorAll(el));
	  };
	
	  //  SUPPORTS
	  if (!('querySelector' in doc) || !('addEventListener' in window) || !docEl.classList) return;
	
	  //  SETUP
	  // set offcanvas element NodeLists
	  var panels = _q(selector);
	
	  //  TEMP
	  var currButtonOpen = null;
	  var currPanel = null;
	
	  //  UTILS
	  function _defer(fn) {
	    //  wrapped in setTimeout to delay binding until previous rendering has completed
	    if (typeof fn === 'function') setTimeout(fn, 0);
	  }
	  function _closest(el, selector) {
	    while (el) {
	      if (el.matches(selector)) break;
	      el = el.parentElement;
	    }
	    return el;
	  }
	  function _getPanelId(panel) {
	    return panel.getAttribute('id');
	  }
	
	  //  A11Y
	  function _addA11y(panel) {
	    //  add aria-hidden attribute
	    panel.setAttribute('aria-hidden', true);
	  }
	  function _removeA11y(panel) {
	    //  remove aria-hidden attribute
	    panel.removeAttribute('aria-hidden');
	  }
	
	  //  ACTIONS
	  function _showPanel(panel) {
	    //  set visibility to override any previous set style
	    panel.style.visibility = 'visible';
	    //  remove aria-hidden, add focus
	    panel.setAttribute('aria-hidden', false);
	    panel.setAttribute('tabindex', -1);
	    panel.focus();
	    //  sort out events
	    _defer(_unbindOpenPointer);
	    _defer(_bindDocKey);
	    _defer(_bindDocClick);
	    _defer(_bindClosePointer);
	    //  reset scroll position
	    panel.scrollTop = 0;
	    //  add active class
	    panel.classList.add(activeClass);
	  }
	  function _hidePanel() {
	    var panel = arguments.length <= 0 || arguments[0] === undefined ? currPanel : arguments[0];
	    var returnfocus = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
	
	    //  add aria-hidden, remove focus
	    panel.setAttribute('aria-hidden', true);
	    panel.removeAttribute('tabindex');
	    panel.blur();
	    //  set visibility to override any previous set style
	    panel.style.visibility = 'hidden';
	    //  sort out events
	    _unbindClosePointer(panel);
	    _unbindDocKey();
	    _unbindDocClick();
	    _bindOpenPointer(panel);
	    //  remove active class
	    panel.classList.remove(activeClass);
	    //  return focus to button that opened the panel and reset the reference
	    if (returnfocus) {
	      currButtonOpen.focus();
	      currButtonOpen = null;
	    }
	  }
	  function destroy() {
	    panels.forEach(function (panel) {
	      //  remove attributes
	      _removeA11y(panel);
	      //  unbind local events
	      _unbindOpenPointer(panel);
	      _unbindClosePointer(panel);
	      //  remove class
	      panel.classList.remove(readyClass);
	      panel.classList.remove(activeClass);
	      panel.style.visibility = '';
	    });
	    //  unbind global events
	    _unbindDocClick();
	    _unbindDocKey();
	    //  reset temp references
	    currButtonOpen = null;
	    currPanel = null;
	  }
	
	  //  EVENTS
	  function _eventOpenPointer(e) {
	    //  get panel
	    var panelId = e.currentTarget.getAttribute('aria-controls');
	    var panel = doc.getElementById(panelId);
	    //  hide any open panels
	    if (currPanel) _hidePanel(currPanel, false);
	    //  save temp panel/button
	    currButtonOpen = e.currentTarget;
	    currPanel = panel;
	    //  show
	    _showPanel(panel);
	  }
	  function _eventClosePointer() {
	    _hidePanel();
	  }
	  function _eventDocClick(e) {
	    //  check if target is panel or child of
	    var isPanel = e.target === currPanel;
	    var isPanelChild = _closest(e.target, selector);
	    if (!isPanel && !isPanelChild) _hidePanel();
	  }
	  function _eventDocKey(e) {
	    //  esc key
	    if (e.keyCode === 27) _hidePanel();
	  }
	
	  //  BIND EVENTS
	  function _bindOpenPointer(panel) {
	    var openButtons = _q(openSelector + '[aria-controls="' + _getPanelId(panel) + '"]'); // is this selector totally crazy?
	    openButtons.forEach(function (button) {
	      return button.addEventListener('click', _eventOpenPointer);
	    });
	  }
	  function _bindClosePointer() {
	    var panel = arguments.length <= 0 || arguments[0] === undefined ? currPanel : arguments[0];
	
	    var closeButton = _q(closeSelector, panel)[0];
	    closeButton.addEventListener('click', _eventClosePointer);
	  }
	  function _bindDocClick() {
	    doc.addEventListener('click', _eventDocClick);
	  }
	  function _bindDocKey() {
	    doc.addEventListener('keydown', _eventDocKey);
	  }
	
	  //  UNBIND EVENTS
	  function _unbindOpenPointer() {
	    var panel = arguments.length <= 0 || arguments[0] === undefined ? currPanel : arguments[0];
	
	    var openButtons = _q(openSelector + '[aria-controls="' + _getPanelId(panel) + '"]'); // yep its totally crazy
	    openButtons.forEach(function (button) {
	      return button.removeEventListener('click', _eventOpenPointer);
	    });
	  }
	  function _unbindClosePointer() {
	    var panel = arguments.length <= 0 || arguments[0] === undefined ? currPanel : arguments[0];
	
	    var closeButton = _q(closeSelector, panel)[0];
	    closeButton.removeEventListener('click', _eventClosePointer);
	  }
	  function _unbindDocClick() {
	    doc.removeEventListener('click', _eventDocClick);
	  }
	  function _unbindDocKey() {
	    doc.removeEventListener('keydown', _eventDocKey);
	  }
	
	  //  INIT
	  function init() {
	    if (!panels) return;
	    //  loop through each offcanvas element
	    panels.forEach(function (panel) {
	      _addA11y(panel);
	      _bindOpenPointer(panel);
	      panel.classList.add(readyClass);
	    });
	  }
	  init();
	
	  // REVEAL API
	  return {
	    init: init,
	    destroy: destroy
	  };
	};
	
	// module exports
	exports['default'] = Froffcanvas;
	module.exports = exports['default'];

/***/ },
/* 45 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 46 */,
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jquery = __webpack_require__(4);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _headroom = __webpack_require__(48);
	
	var _headroom2 = _interopRequireDefault(_headroom);
	
	var _throttle = __webpack_require__(7);
	
	var _throttle2 = _interopRequireDefault(_throttle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	// Headroom for fixed sticky header
	
	var myElement = document.querySelector('header');
	
	var opts = {
	  // vertical offset in px before element is first unpinned
	  offset: 0,
	  // you can specify tolerance individually for up/down scroll
	  tolerance: {
	    up: 20,
	    down: 10
	  },
	  // css classes to apply
	  classes: {
	    // when element is initialised
	    initial: 'Headroom',
	    // when scrolling up
	    pinned: 'Headroom--pinned',
	    // when scrolling down
	    unpinned: 'Headroom--unpinned',
	    // when above offset
	    top: 'Headroom--top',
	    // when below offset
	    notTop: 'Headroom--not-top',
	    // when at bottom of scoll area
	    bottom: 'Headroom--bottom',
	    // when not at bottom of scroll area
	    notBottom: 'Headroom--not-bottom'
	  },
	  // element to listen to scroll events on, defaults to `window`
	  scroller: window,
	  // callback when pinned, `this` is headroom object
	  onPin: function onPin() {},
	  // callback when unpinned, `this` is headroom object
	  onUnpin: function onUnpin() {},
	  // callback when above offset, `this` is headroom object
	  onTop: function onTop() {},
	  // callback when below offset, `this` is headroom object
	  onNotTop: function onNotTop() {},
	  // callback when at bottom of page, `this` is headroom object
	  onBottom: function onBottom() {},
	  // callback when moving away from bottom of page, `this` is headroom object
	  onNotBottom: function onNotBottom() {}
	};
	
	var headroom = null;
	
	if (myElement) {
	  headroom = new _headroom2['default'](myElement, opts);
	  headroom.init();
	}
	
	/*
	 *	Make space when using fixed header.
	 *
	 *		The no-js alternative is to set up body padding inside CSS
	 *	 	assuming you know the exact header height in pixel
	 *	 	(expanded and minimized for all viewport width)
	 */
	var headroomFixed = '.Headroom--fixed';
	
	if ((0, _jquery2['default'])('.' + opts.classes.initial).is(headroomFixed)) {
	  (function () {
	    // Needs to be here due to CSS transition (see on Safari)
	    var headerHeight = (0, _jquery2['default'])(headroomFixed).height();
	
	    var _adjustPadding = function _adjustPadding() {
	      var paddingTop = headerHeight;
	
	      (0, _jquery2['default'])('body').css({
	        paddingTop: paddingTop + 'px'
	      });
	    };
	
	    // Set up padding on page load
	    (0, _jquery2['default'])(document).ready(function () {
	      (0, _jquery2['default'])(headroomFixed).css({
	        position: 'fixed',
	        top: 0
	      });
	      _adjustPadding();
	    });
	
	    // Make padding respond to window resize
	    (0, _jquery2['default'])(window).resize((0, _throttle2['default'])(250, function () {
	      headerHeight = (0, _jquery2['default'])(headroomFixed).height();
	      setTimeout(_adjustPadding, 250);
	    }));
	
	    // This happens *only* after a resize
	    // when scrolling to top
	    (0, _jquery2['default'])(headroomFixed).on('transitionend', (0, _throttle2['default'])(250, function () {
	      var height = (0, _jquery2['default'])(this).height();
	      if (headerHeight < height) {
	        headerHeight = height;
	        _adjustPadding();
	      }
	    }));
	  })();
	}
	
	/*
	 *  Toggle search-form visibility for mobile
	 */
	(0, _jquery2['default'])('.js-Header-search-trigger').click(function (e) {
	  (0, _jquery2['default'])('.js-Header-search-trigger').each(function (i, el) {
	    var $el = (0, _jquery2['default'])(el);
	    if ('true' === $el.attr('aria-hidden')) {
	      $el.attr('aria-hidden', 'false');
	      $el.removeClass('u-hiddenVisually');
	    } else {
	      $el.attr('aria-hidden', 'true');
	      $el.addClass('u-hiddenVisually');
	    }
	  });
	  (0, _jquery2['default'])((0, _jquery2['default'])(e.target).attr('aria-controls')).toggleClass('is-active');
	});
	
	exports['default'] = {
	  Headroom: _headroom2['default'],
	  headroom: headroom
	};
	module.exports = exports['default'];

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	/*!
	 * headroom.js v0.9.3 - Give your page some headroom. Hide your header until you need it
	 * Copyright (c) 2016 Nick Williams - http://wicky.nillia.ms/headroom.js
	 * License: MIT
	 */
	
	(function (root, factory) {
	  'use strict';
	
	  if (true) {
	    // AMD. Register as an anonymous module.
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
	    // COMMONJS
	    module.exports = factory();
	  } else {
	    // BROWSER
	    root.Headroom = factory();
	  }
	})(undefined, function () {
	  'use strict';
	
	  /* exported features */
	
	  var features = {
	    bind: !!function () {}.bind,
	    classList: 'classList' in document.documentElement,
	    rAF: !!(window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame)
	  };
	  window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
	
	  /**
	   * Handles debouncing of events via requestAnimationFrame
	   * @see http://www.html5rocks.com/en/tutorials/speed/animations/
	   * @param {Function} callback The callback to handle whichever event
	   */
	  function Debouncer(callback) {
	    this.callback = callback;
	    this.ticking = false;
	  }
	  Debouncer.prototype = {
	    constructor: Debouncer,
	
	    /**
	     * dispatches the event to the supplied callback
	     * @private
	     */
	    update: function update() {
	      this.callback && this.callback();
	      this.ticking = false;
	    },
	
	    /**
	     * ensures events don't get stacked
	     * @private
	     */
	    requestTick: function requestTick() {
	      if (!this.ticking) {
	        requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this)));
	        this.ticking = true;
	      }
	    },
	
	    /**
	     * Attach this as the event listeners
	     */
	    handleEvent: function handleEvent() {
	      this.requestTick();
	    }
	  };
	  /**
	   * Check if object is part of the DOM
	   * @constructor
	   * @param {Object} obj element to check
	   */
	  function isDOMElement(obj) {
	    return obj && typeof window !== 'undefined' && (obj === window || obj.nodeType);
	  }
	
	  /**
	   * Helper function for extending objects
	   */
	  function extend(object /*, objectN ... */) {
	    if (arguments.length <= 0) {
	      throw new Error('Missing arguments in extend function');
	    }
	
	    var result = object || {},
	        key,
	        i;
	
	    for (i = 1; i < arguments.length; i++) {
	      var replacement = arguments[i] || {};
	
	      for (key in replacement) {
	        // Recurse into object except if the object is a DOM element
	        if (_typeof(result[key]) === 'object' && !isDOMElement(result[key])) {
	          result[key] = extend(result[key], replacement[key]);
	        } else {
	          result[key] = result[key] || replacement[key];
	        }
	      }
	    }
	
	    return result;
	  }
	
	  /**
	   * Helper function for normalizing tolerance option to object format
	   */
	  function normalizeTolerance(t) {
	    return t === Object(t) ? t : { down: t, up: t };
	  }
	
	  /**
	   * UI enhancement for fixed headers.
	   * Hides header when scrolling down
	   * Shows header when scrolling up
	   * @constructor
	   * @param {DOMElement} elem the header element
	   * @param {Object} options options for the widget
	   */
	  function Headroom(elem, options) {
	    options = extend(options, Headroom.options);
	
	    this.lastKnownScrollY = 0;
	    this.elem = elem;
	    this.tolerance = normalizeTolerance(options.tolerance);
	    this.classes = options.classes;
	    this.offset = options.offset;
	    this.scroller = options.scroller;
	    this.initialised = false;
	    this.onPin = options.onPin;
	    this.onUnpin = options.onUnpin;
	    this.onTop = options.onTop;
	    this.onNotTop = options.onNotTop;
	    this.onBottom = options.onBottom;
	    this.onNotBottom = options.onNotBottom;
	  }
	  Headroom.prototype = {
	    constructor: Headroom,
	
	    /**
	     * Initialises the widget
	     */
	    init: function init() {
	      if (!Headroom.cutsTheMustard) {
	        return;
	      }
	
	      this.debouncer = new Debouncer(this.update.bind(this));
	      this.elem.classList.add(this.classes.initial);
	
	      // defer event registration to handle browser 
	      // potentially restoring previous scroll position
	      setTimeout(this.attachEvent.bind(this), 100);
	
	      return this;
	    },
	
	    /**
	     * Unattaches events and removes any classes that were added
	     */
	    destroy: function destroy() {
	      var classes = this.classes;
	
	      this.initialised = false;
	      this.elem.classList.remove(classes.unpinned, classes.pinned, classes.top, classes.notTop, classes.initial);
	      this.scroller.removeEventListener('scroll', this.debouncer, false);
	    },
	
	    /**
	     * Attaches the scroll event
	     * @private
	     */
	    attachEvent: function attachEvent() {
	      if (!this.initialised) {
	        this.lastKnownScrollY = this.getScrollY();
	        this.initialised = true;
	        this.scroller.addEventListener('scroll', this.debouncer, false);
	
	        this.debouncer.handleEvent();
	      }
	    },
	
	    /**
	     * Unpins the header if it's currently pinned
	     */
	    unpin: function unpin() {
	      var classList = this.elem.classList,
	          classes = this.classes;
	
	      if (classList.contains(classes.pinned) || !classList.contains(classes.unpinned)) {
	        classList.add(classes.unpinned);
	        classList.remove(classes.pinned);
	        this.onUnpin && this.onUnpin.call(this);
	      }
	    },
	
	    /**
	     * Pins the header if it's currently unpinned
	     */
	    pin: function pin() {
	      var classList = this.elem.classList,
	          classes = this.classes;
	
	      if (classList.contains(classes.unpinned)) {
	        classList.remove(classes.unpinned);
	        classList.add(classes.pinned);
	        this.onPin && this.onPin.call(this);
	      }
	    },
	
	    /**
	     * Handles the top states
	     */
	    top: function top() {
	      var classList = this.elem.classList,
	          classes = this.classes;
	
	      if (!classList.contains(classes.top)) {
	        classList.add(classes.top);
	        classList.remove(classes.notTop);
	        this.onTop && this.onTop.call(this);
	      }
	    },
	
	    /**
	     * Handles the not top state
	     */
	    notTop: function notTop() {
	      var classList = this.elem.classList,
	          classes = this.classes;
	
	      if (!classList.contains(classes.notTop)) {
	        classList.add(classes.notTop);
	        classList.remove(classes.top);
	        this.onNotTop && this.onNotTop.call(this);
	      }
	    },
	
	    bottom: function bottom() {
	      var classList = this.elem.classList,
	          classes = this.classes;
	
	      if (!classList.contains(classes.bottom)) {
	        classList.add(classes.bottom);
	        classList.remove(classes.notBottom);
	        this.onBottom && this.onBottom.call(this);
	      }
	    },
	
	    /**
	     * Handles the not top state
	     */
	    notBottom: function notBottom() {
	      var classList = this.elem.classList,
	          classes = this.classes;
	
	      if (!classList.contains(classes.notBottom)) {
	        classList.add(classes.notBottom);
	        classList.remove(classes.bottom);
	        this.onNotBottom && this.onNotBottom.call(this);
	      }
	    },
	
	    /**
	     * Gets the Y scroll position
	     * @see https://developer.mozilla.org/en-US/docs/Web/API/Window.scrollY
	     * @return {Number} pixels the page has scrolled along the Y-axis
	     */
	    getScrollY: function getScrollY() {
	      return this.scroller.pageYOffset !== undefined ? this.scroller.pageYOffset : this.scroller.scrollTop !== undefined ? this.scroller.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop;
	    },
	
	    /**
	     * Gets the height of the viewport
	     * @see http://andylangton.co.uk/blog/development/get-viewport-size-width-and-height-javascript
	     * @return {int} the height of the viewport in pixels
	     */
	    getViewportHeight: function getViewportHeight() {
	      return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	    },
	
	    /**
	     * Gets the physical height of the DOM element
	     * @param  {Object}  elm the element to calculate the physical height of which
	     * @return {int}     the physical height of the element in pixels
	     */
	    getElementPhysicalHeight: function getElementPhysicalHeight(elm) {
	      return Math.max(elm.offsetHeight, elm.clientHeight);
	    },
	
	    /**
	     * Gets the physical height of the scroller element
	     * @return {int} the physical height of the scroller element in pixels
	     */
	    getScrollerPhysicalHeight: function getScrollerPhysicalHeight() {
	      return this.scroller === window || this.scroller === document.body ? this.getViewportHeight() : this.getElementPhysicalHeight(this.scroller);
	    },
	
	    /**
	     * Gets the height of the document
	     * @see http://james.padolsey.com/javascript/get-document-height-cross-browser/
	     * @return {int} the height of the document in pixels
	     */
	    getDocumentHeight: function getDocumentHeight() {
	      var body = document.body,
	          documentElement = document.documentElement;
	
	      return Math.max(body.scrollHeight, documentElement.scrollHeight, body.offsetHeight, documentElement.offsetHeight, body.clientHeight, documentElement.clientHeight);
	    },
	
	    /**
	     * Gets the height of the DOM element
	     * @param  {Object}  elm the element to calculate the height of which
	     * @return {int}     the height of the element in pixels
	     */
	    getElementHeight: function getElementHeight(elm) {
	      return Math.max(elm.scrollHeight, elm.offsetHeight, elm.clientHeight);
	    },
	
	    /**
	     * Gets the height of the scroller element
	     * @return {int} the height of the scroller element in pixels
	     */
	    getScrollerHeight: function getScrollerHeight() {
	      return this.scroller === window || this.scroller === document.body ? this.getDocumentHeight() : this.getElementHeight(this.scroller);
	    },
	
	    /**
	     * determines if the scroll position is outside of document boundaries
	     * @param  {int}  currentScrollY the current y scroll position
	     * @return {bool} true if out of bounds, false otherwise
	     */
	    isOutOfBounds: function isOutOfBounds(currentScrollY) {
	      var pastTop = currentScrollY < 0,
	          pastBottom = currentScrollY + this.getScrollerPhysicalHeight() > this.getScrollerHeight();
	
	      return pastTop || pastBottom;
	    },
	
	    /**
	     * determines if the tolerance has been exceeded
	     * @param  {int} currentScrollY the current scroll y position
	     * @return {bool} true if tolerance exceeded, false otherwise
	     */
	    toleranceExceeded: function toleranceExceeded(currentScrollY, direction) {
	      return Math.abs(currentScrollY - this.lastKnownScrollY) >= this.tolerance[direction];
	    },
	
	    /**
	     * determine if it is appropriate to unpin
	     * @param  {int} currentScrollY the current y scroll position
	     * @param  {bool} toleranceExceeded has the tolerance been exceeded?
	     * @return {bool} true if should unpin, false otherwise
	     */
	    shouldUnpin: function shouldUnpin(currentScrollY, toleranceExceeded) {
	      var scrollingDown = currentScrollY > this.lastKnownScrollY,
	          pastOffset = currentScrollY >= this.offset;
	
	      return scrollingDown && pastOffset && toleranceExceeded;
	    },
	
	    /**
	     * determine if it is appropriate to pin
	     * @param  {int} currentScrollY the current y scroll position
	     * @param  {bool} toleranceExceeded has the tolerance been exceeded?
	     * @return {bool} true if should pin, false otherwise
	     */
	    shouldPin: function shouldPin(currentScrollY, toleranceExceeded) {
	      var scrollingUp = currentScrollY < this.lastKnownScrollY,
	          pastOffset = currentScrollY <= this.offset;
	
	      return scrollingUp && toleranceExceeded || pastOffset;
	    },
	
	    /**
	     * Handles updating the state of the widget
	     */
	    update: function update() {
	      var currentScrollY = this.getScrollY(),
	          scrollDirection = currentScrollY > this.lastKnownScrollY ? 'down' : 'up',
	          toleranceExceeded = this.toleranceExceeded(currentScrollY, scrollDirection);
	
	      if (this.isOutOfBounds(currentScrollY)) {
	        // Ignore bouncy scrolling in OSX
	        return;
	      }
	
	      if (currentScrollY <= this.offset) {
	        this.top();
	      } else {
	        this.notTop();
	      }
	
	      if (currentScrollY + this.getViewportHeight() >= this.getScrollerHeight()) {
	        this.bottom();
	      } else {
	        this.notBottom();
	      }
	
	      if (this.shouldUnpin(currentScrollY, toleranceExceeded)) {
	        this.unpin();
	      } else if (this.shouldPin(currentScrollY, toleranceExceeded)) {
	        this.pin();
	      }
	
	      this.lastKnownScrollY = currentScrollY;
	    }
	  };
	  /**
	   * Default options
	   * @type {Object}
	   */
	  Headroom.options = {
	    tolerance: {
	      up: 0,
	      down: 0
	    },
	    offset: 0,
	    scroller: window,
	    classes: {
	      pinned: 'headroom--pinned',
	      unpinned: 'headroom--unpinned',
	      top: 'headroom--top',
	      notTop: 'headroom--not-top',
	      bottom: 'headroom--bottom',
	      notBottom: 'headroom--not-bottom',
	      initial: 'headroom'
	    }
	  };
	  Headroom.cutsTheMustard = typeof features !== 'undefined' && features.rAF && features.bind && features.classList;
	
	  return Headroom;
	});

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jquery = __webpack_require__(4);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _megamenu = __webpack_require__(50);
	
	var _megamenu2 = _interopRequireDefault(_megamenu);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	// ASAP hide megamenu panels
	(0, _jquery2['default'])('.js-megamenu').addClass('is-ready');
	
	var opts = {
	  /* if false open menu on hover */
	  openOnClick: true,
	
	  /* prefix for generated unique id attributes, which are required
	     to indicate aria-owns, aria-controls and aria-labelledby */
	  uuidPrefix: 'megamenu',
	
	  /* css class used to define the megamenu styling */
	  menuClass: 'Megamenu',
	
	  menuListClass: 'Megamenu-list',
	
	  /* css class for a top-level navigation item in the megamenu */
	  topNavItemClass: 'Megamenu-item',
	
	  /* css class for a megamenu panel */
	  panelClass: 'Megamenu-subnav',
	
	  /* css class for a group of items within a megamenu panel */
	  panelGroupClass: 'Megamenu-subnavGroup',
	
	  /* css class for the hover state */
	  hoverClass: 'is-hover',
	
	  /* css class for the focus state */
	  focusClass: 'is-focus',
	
	  /* css class for the open state */
	  openClass: 'is-open'
	};
	
	/*
	 *	Takes a Treeview and makes it work with Megamenu
	 */
	var listToMegaMenu = function listToMegaMenu($ul, _opts) {
	  var attrs = 'class aria-expanded aria-hidden role tabindex';
	  return $ul.clone().removeAttr(attrs).addClass(_opts.menuListClass).find('*').removeAttr(attrs).end().find('> li').each(function (i, li) {
	    (0, _jquery2['default'])(li).addClass(_opts.topNavItemClass).find('a')
	    // make item tabbable, this is required !
	    .attr('href', '#').end().find('> ul > li').unwrap().wrap('<ul class="' + _opts.panelGroupClass + '" />').end().find('> ul').wrapAll('<div class="' + _opts.panelClass + '" />');
	  }).end();
	};
	
	(0, _jquery2['default'])(document).ready(function () {
	  (0, _jquery2['default'])('.js-megamenu').each(function (i, el) {
	    var $el = (0, _jquery2['default'])(el);
	    var rel = (0, _jquery2['default'])(el).data('rel');
	    if ($el.find('ul').length === 0 && rel && (0, _jquery2['default'])(rel).length > 0) {
	      var $menu = listToMegaMenu((0, _jquery2['default'])(rel), opts);
	      $el.append($menu);
	      // @FIXME: make space for javascript rendered megamenu
	      if ((0, _jquery2['default'])('header').css('position') === 'fixed') {
	        (0, _jquery2['default'])('body').css({
	          paddingTop: '+=' + $el.height() + 'px'
	        });
	      }
	    }
	    $el.accessibleMegaMenu(opts);
	  });
	});
	
	exports['default'] = {
	  opts: opts,
	  listToMegaMenu: listToMegaMenu,
	  Megamenu: _megamenu2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 50 */
/***/ function(module, exports) {

	'use strict';
	
	/*
	Copyright © 2013 Adobe Systems Incorporated.
	
	Licensed under the Apache License, Version 2.0 (the “License”)
	you may not use this file except in compliance with the License.
	You may obtain a copy of the License at
	
	http://www.apache.org/licenses/LICENSE-2.0
	
	Unless required by applicable law or agreed to in writing, software
	distributed under the License is distributed on an “AS IS” BASIS,
	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	See the License for the specific language governing permissions and
	limitations under the License.
	*/
	
	/**
	 * @fileOverview accessibleMegaMenu plugin
	 *
	 *<p>Licensed under the Apache License, Version 2.0 (the “License”)
	 *<br />Copyright © 2013 Adobe Systems Incorporated.
	 *<br />Project page <a href='https://github.com/adobe-accessibility/Accessible-Mega-Menu'>https://github.com/adobe-accessibility/Accessible-Mega-Menu</a>
	 * @version 0.1
	 * @author Michael Jordan
	 * @requires jquery
	 */
	
	/*jslint browser: true, devel: true, plusplus: true, nomen: true */
	/*global jQuery */
	(function ($, window, document) {
	  var pluginName = 'accessibleMegaMenu',
	      defaults = {
	    openOnClick: false,
	    uuidPrefix: 'accessible-megamenu', // unique ID's are required to indicate aria-owns, aria-controls and aria-labelledby
	    menuClass: 'accessible-megamenu', // default css class used to define the megamenu styling
	    topNavItemClass: 'accessible-megamenu-top-nav-item', // default css class for a top-level navigation item in the megamenu
	    panelClass: 'accessible-megamenu-panel', // default css class for a megamenu panel
	    panelGroupClass: 'accessible-megamenu-panel-group', // default css class for a group of items within a megamenu panel
	    hoverClass: 'hover', // default css class for the hover state
	    focusClass: 'focus', // default css class for the focus state
	    openClass: 'open' // default css class for the open state
	  },
	      Keyboard = {
	    BACKSPACE: 8,
	    COMMA: 188,
	    DELETE: 46,
	    DOWN: 40,
	    END: 35,
	    ENTER: 13,
	    ESCAPE: 27,
	    HOME: 36,
	    LEFT: 37,
	    PAGE_DOWN: 34,
	    PAGE_UP: 33,
	    PERIOD: 190,
	    RIGHT: 39,
	    SPACE: 32,
	    TAB: 9,
	    UP: 38,
	    keyMap: {
	      48: '0',
	      49: '1',
	      50: '2',
	      51: '3',
	      52: '4',
	      53: '5',
	      54: '6',
	      55: '7',
	      56: '8',
	      57: '9',
	      59: '',
	      65: 'a',
	      66: 'b',
	      67: 'c',
	      68: 'd',
	      69: 'e',
	      70: 'f',
	      71: 'g',
	      72: 'h',
	      73: 'i',
	      74: 'j',
	      75: 'k',
	      76: 'l',
	      77: 'm',
	      78: 'n',
	      79: 'o',
	      80: 'p',
	      81: 'q',
	      82: 'r',
	      83: 's',
	      84: 't',
	      85: 'u',
	      86: 'v',
	      87: 'w',
	      88: 'x',
	      89: 'y',
	      90: 'z',
	      96: '0',
	      97: '1',
	      98: '2',
	      99: '3',
	      100: '4',
	      101: '5',
	      102: '6',
	      103: '7',
	      104: '8',
	      105: '9',
	      190: '.'
	    }
	  };
	  /**
	   * @desc Creates a new accessible mega menu instance.
	   * @param {jquery} element
	   * @param {object} [options] Mega Menu options
	   * @param {string} [options.uuidPrefix=accessible-megamenu] - Prefix for generated unique id attributes, which are required to indicate aria-owns, aria-controls and aria-labelledby
	   * @param {string} [options.menuClass=accessible-megamenu] - CSS class used to define the megamenu styling
	   * @param {string} [options.topNavItemClass=accessible-megamenu-top-nav-item] - CSS class for a top-level navigation item in the megamenu
	   * @param {string} [options.panelClass=accessible-megamenu-panel] - CSS class for a megamenu panel
	   * @param {string} [options.panelGroupClass=accessible-megamenu-panel-group] - CSS class for a group of items within a megamenu panel
	   * @param {string} [options.hoverClass=hover] - CSS class for the hover state
	   * @param {string} [options.focusClass=focus] - CSS class for the focus state
	   * @param {string} [options.openClass=open] - CSS class for the open state
	   * @constructor
	   */
	  function AccessibleMegaMenu(element, options) {
	    this.element = element;
	
	    // merge optional settings and defaults into settings
	    this.settings = $.extend({}, defaults, options);
	
	    this._defaults = defaults;
	    this._name = pluginName;
	
	    this.mouseTimeoutID = null;
	    this.focusTimeoutID = null;
	    this.mouseFocused = false;
	    this.justFocused = false;
	
	    this.init();
	  }
	
	  AccessibleMegaMenu.prototype = function () {
	
	    /* private attributes and methods ------------------------ */
	    var uuid = 0,
	        keydownTimeoutDuration = 1000,
	        keydownSearchString = '',
	        isTouch = typeof window.hasOwnProperty === 'function' && !!window.hasOwnProperty('ontouchstart'),
	        _getPlugin,
	        _addUniqueId,
	        _togglePanel,
	        _clickHandler,
	        _clickOutsideHandler,
	        _DOMAttrModifiedHandler,
	        _focusInHandler,
	        _focusOutHandler,
	        _keyDownHandler,
	        _mouseDownHandler,
	        _mouseOverHandler,
	        _mouseOutHandler,
	        _toggleExpandedEventHandlers;
	
	    /**
	     * @name jQuery.fn.accessibleMegaMenu~_getPlugin
	     * @desc Returns the parent accessibleMegaMenu instance for a given element
	     * @param {jQuery} element
	     * @memberof jQuery.fn.accessibleMegaMenu
	     * @inner
	     * @private
	     */
	    _getPlugin = function _getPlugin(element) {
	      return $(element).closest(':data(plugin_' + pluginName + ')').data('plugin_' + pluginName);
	    };
	
	    /**
	     * @name jQuery.fn.accessibleMegaMenu~_addUniqueId
	     * @desc Adds a unique id and element.
	     * The id string starts with the
	     * string defined in settings.uuidPrefix.
	     * @param {jQuery} element
	     * @memberof jQuery.fn.accessibleMegaMenu
	     * @inner
	     * @private
	     */
	    _addUniqueId = function _addUniqueId(element) {
	      element = $(element);
	      var settings = this.settings;
	      if (!element.attr('id')) {
	        element.attr('id', settings.uuidPrefix + '-' + new Date().getTime() + '-' + ++uuid);
	      }
	    };
	
	    /**
	     * @name jQuery.fn.accessibleMegaMenu~_togglePanel
	     * @desc Toggle the display of mega menu panels in response to an event.
	     * The optional boolean value 'hide' forces all panels to hide.
	     * @param {event} event
	     * @param {Boolean} [hide] Hide all mega menu panels when true
	     * @memberof jQuery.fn.accessibleMegaMenu
	     * @inner
	     * @private
	     */
	    _togglePanel = function _togglePanel(event, hide) {
	      var target = $(event.target),
	          that = this,
	          settings = this.settings,
	          menu = this.menu,
	          topli = target.closest('.' + settings.topNavItemClass),
	          panel = target.hasClass(settings.panelClass) ? target : target.closest('.' + settings.panelClass),
	          newfocus;
	
	      _toggleExpandedEventHandlers.call(this, true);
	
	      if (hide) {
	        topli = menu.find('.' + settings.topNavItemClass + ' .' + settings.openClass + ':first').closest('.' + settings.topNavItemClass);
	        if (!(topli.is(event.relatedTarget) || topli.has(event.relatedTarget).length > 0)) {
	          if ((event.type === 'mouseout' || event.type === 'focusout') && topli.has(document.activeElement).length > 0) {
	            return;
	          }
	          topli.find('[aria-expanded]').attr('aria-expanded', 'false').removeClass(settings.openClass).filter('.' + settings.panelClass).attr('aria-hidden', 'true');
	          if (event.type === 'keydown' && event.keyCode === Keyboard.ESCAPE || event.type === 'DOMAttrModified') {
	            newfocus = topli.find(':tabbable:first');
	            setTimeout(function () {
	              menu.find('[aria-expanded].' + that.settings.panelClass).off('DOMAttrModified.accessible-megamenu');
	              newfocus.focus();
	              that.justFocused = false;
	            }, 99);
	          }
	        } else if (topli.length === 0) {
	          menu.find('[aria-expanded=true]').attr('aria-expanded', 'false').removeClass(settings.openClass).filter('.' + settings.panelClass).attr('aria-hidden', 'true');
	        }
	      } else {
	        clearTimeout(that.focusTimeoutID);
	        topli.siblings().find('[aria-expanded]').attr('aria-expanded', 'false').removeClass(settings.openClass).filter('.' + settings.panelClass).attr('aria-hidden', 'true');
	        topli.find('[aria-expanded]').attr('aria-expanded', 'true').addClass(settings.openClass).filter('.' + settings.panelClass).attr('aria-hidden', 'false');
	        if (event.type === 'mouseover' && target.is(':tabbable') && topli.length === 1 && panel.length === 0 && menu.has(document.activeElement).length > 0) {
	          target.focus();
	          that.justFocused = false;
	        }
	
	        _toggleExpandedEventHandlers.call(that);
	      }
	    };
	
	    /**
	     * @name jQuery.fn.accessibleMegaMenu~_clickHandler
	     * @desc Handle click event on mega menu item
	     * @param {event} Event object
	     * @memberof jQuery.fn.accessibleMegaMenu
	     * @inner
	     * @private
	     */
	    _clickHandler = function _clickHandler(event) {
	      var target = $(event.currentTarget),
	          topli = target.closest('.' + this.settings.topNavItemClass),
	          panel = target.closest('.' + this.settings.panelClass);
	      if (topli.length === 1 && panel.length === 0 && topli.find('.' + this.settings.panelClass).length === 1) {
	        if (!target.hasClass(this.settings.openClass)) {
	          event.preventDefault();
	          event.stopPropagation();
	          _togglePanel.call(this, event);
	          this.justFocused = false;
	        } else {
	          if (this.justFocused) {
	            event.preventDefault();
	            event.stopPropagation();
	            this.justFocused = false;
	          } else if (isTouch) {
	            event.preventDefault();
	            event.stopPropagation();
	            _togglePanel.call(this, event, target.hasClass(this.settings.openClass));
	          }
	        }
	      }
	    };
	
	    /**
	     * @name jQuery.fn.accessibleMegaMenu~_clickOutsideHandler
	     * @desc Handle click event outside of a the megamenu
	     * @param {event} Event object
	     * @memberof jQuery.fn.accessibleMegaMenu
	     * @inner
	     * @private
	     */
	    _clickOutsideHandler = function _clickOutsideHandler(event) {
	      if ($(event.target).closest(this.menu).length === 0) {
	        event.preventDefault();
	        event.stopPropagation();
	        _togglePanel.call(this, event, true);
	      }
	    };
	
	    /**
	     * @name jQuery.fn.accessibleMegaMenu~_DOMAttrModifiedHandler
	     * @desc Handle DOMAttrModified event on panel to respond to Windows 8 Narrator ExpandCollapse pattern
	     * @param {event} Event object
	     * @memberof jQuery.fn.accessibleMegaMenu
	     * @inner
	     * @private
	     */
	    _DOMAttrModifiedHandler = function _DOMAttrModifiedHandler(event) {
	      if (event.originalEvent.attrName === 'aria-expanded' && event.originalEvent.newValue === 'false' && $(event.target).hasClass(this.settings.openClass)) {
	        event.preventDefault();
	        event.stopPropagation();
	        _togglePanel.call(this, event, true);
	      }
	    };
	
	    /**
	     * @name jQuery.fn.accessibleMegaMenu~_focusInHandler
	     * @desc Handle focusin event on mega menu item.
	     * @param {event} Event object
	     * @memberof jQuery.fn.accessibleMegaMenu
	     * @inner
	     * @private
	     */
	    _focusInHandler = function _focusInHandler(event) {
	      clearTimeout(this.focusTimeoutID);
	      var target = $(event.target),
	          panel = target.closest('.' + this.settings.panelClass);
	      target.addClass(this.settings.focusClass).on('click.accessible-megamenu', $.proxy(_clickHandler, this));
	      this.justFocused = !this.mouseFocused;
	      this.mouseFocused = false;
	      if (this.panels.not(panel).filter('.' + this.settings.openClass).length) {
	        _togglePanel.call(this, event);
	      }
	    };
	
	    /**
	     * @name jQuery.fn.accessibleMegaMenu~_focusOutHandler
	     * @desc Handle focusout event on mega menu item.
	     * @param {event} Event object
	     * @memberof jQuery.fn.accessibleMegaMenu
	     * @inner
	     * @private
	     */
	    _focusOutHandler = function _focusOutHandler(event) {
	      this.justFocused = false;
	      var that = this,
	          target = $(event.target),
	          topli = target.closest('.' + this.settings.topNavItemClass);
	
	      target
	      // .removeClass(this.settings.focusClass)
	      .off('click.accessible-megamenu');
	
	      if (window.cvox) {
	        // If ChromeVox is running...
	        that.focusTimeoutID = setTimeout(function () {
	          window.cvox.Api.getCurrentNode(function (node) {
	            if (topli.has(node).length) {
	              // and the current node being voiced is in
	              // the mega menu, clearTimeout,
	              // so the panel stays open.
	              clearTimeout(that.focusTimeoutID);
	            } else {
	              that.focusTimeoutID = setTimeout(function (scope, _event, hide) {
	                _togglePanel.call(scope, _event, hide);
	              }, 275, that, event, true);
	            }
	          });
	        }, 25);
	      } else {
	        that.focusTimeoutID = setTimeout(function () {
	          _togglePanel.call(that, event, true);
	        }, 300);
	      }
	    };
	
	    /**
	     * @name jQuery.fn.accessibleMegaMenu~_keyDownHandler
	     * @desc Handle keydown event on mega menu.
	     * @param {event} Event object
	     * @memberof jQuery.fn.accessibleMegaMenu
	     * @inner
	     * @private
	     */
	    _keyDownHandler = function _keyDownHandler(event) {
	      var that = this.constructor === AccessibleMegaMenu ? this : _getPlugin(this),
	          // determine the AccessibleMegaMenu plugin instance
	      settings = that.settings,
	          target = $($(this).is('.' + settings.hoverClass + ':tabbable') ? this : event.target),
	          // if the element is hovered the target is this, otherwise, its the focused element
	      menu = that.menu,
	          topnavitems = that.topnavitems,
	          topli = target.closest('.' + settings.topNavItemClass),
	          tabbables = menu.find(':tabbable'),
	          panel = target.hasClass(settings.panelClass) ? target : target.closest('.' + settings.panelClass),
	          panelGroups = panel.find('.' + settings.panelGroupClass),
	          currentPanelGroup = target.closest('.' + settings.panelGroupClass),
	          next,
	          keycode = event.keyCode || event.which,
	          start,
	          i,
	          o,
	          label,
	          found = false,
	          newString = Keyboard.keyMap[event.keyCode] || '',
	          regex,
	          isTopNavItem = topli.length === 1 && panel.length === 0;
	
	      if (target.is('input:focus, select:focus, textarea:focus, button:focus')) {
	        // if the event target is a form element we should handle keydown normally
	        return;
	      }
	
	      if (target.is('.' + settings.hoverClass + ':tabbable')) {
	        $('html').off('keydown.accessible-megamenu');
	      }
	
	      switch (keycode) {
	        case Keyboard.ESCAPE:
	          _togglePanel.call(that, event, true);
	          break;
	        case Keyboard.DOWN:
	          event.preventDefault();
	          if (isTopNavItem) {
	            _togglePanel.call(that, event);
	            found = topli.find('.' + settings.panelClass + ' :tabbable:first').focus().length === 1;
	          } else {
	            found = tabbables.filter(':gt(' + tabbables.index(target) + '):first').focus().length === 1;
	          }
	
	          if (!found && window.opera && opera.toString() === '[object Opera]' && (event.ctrlKey || event.metaKey)) {
	            tabbables = $(':tabbable');
	            i = tabbables.index(target);
	            found = $(':tabbable:gt(' + $(':tabbable').index(target) + '):first').focus().length === 1;
	          }
	          break;
	        case Keyboard.UP:
	          event.preventDefault();
	          if (isTopNavItem && target.hasClass(settings.openClass)) {
	            _togglePanel.call(that, event, true);
	            next = topnavitems.filter(':lt(' + topnavitems.index(topli) + '):last');
	            if (next.children('.' + settings.panelClass).length) {
	              found = next.children().attr('aria-expanded', 'true').addClass(settings.openClass).filter('.' + settings.panelClass).attr('aria-hidden', 'false').find(':tabbable:last').focus() === 1;
	            }
	          } else if (!isTopNavItem) {
	            found = tabbables.filter(':lt(' + tabbables.index(target) + '):last').focus().length === 1;
	          }
	
	          if (!found && window.opera && opera.toString() === '[object Opera]' && (event.ctrlKey || event.metaKey)) {
	            tabbables = $(':tabbable');
	            i = tabbables.index(target);
	            found = $(':tabbable:lt(' + $(':tabbable').index(target) + '):first').focus().length === 1;
	          }
	          break;
	        case Keyboard.RIGHT:
	          event.preventDefault();
	          if (isTopNavItem) {
	            found = topnavitems.filter(':gt(' + topnavitems.index(topli) + '):first').find(':tabbable:first').focus().length === 1;
	          } else {
	            if (panelGroups.length && currentPanelGroup.length) {
	              // if the current panel contains panel groups, and we are able to focus the first tabbable element of the next panel group
	              found = panelGroups.filter(':gt(' + panelGroups.index(currentPanelGroup) + '):first').find(':tabbable:first').focus().length === 1;
	            }
	
	            if (!found) {
	              found = topli.find(':tabbable:first').focus().length === 1;
	            }
	          }
	          break;
	        case Keyboard.LEFT:
	          event.preventDefault();
	          if (isTopNavItem) {
	            found = topnavitems.filter(':lt(' + topnavitems.index(topli) + '):last').find(':tabbable:first').focus().length === 1;
	          } else {
	            if (panelGroups.length && currentPanelGroup.length) {
	              // if the current panel contains panel groups, and we are able to focus the first tabbable element of the previous panel group
	              found = panelGroups.filter(':lt(' + panelGroups.index(currentPanelGroup) + '):last').find(':tabbable:first').focus().length === 1;
	            }
	
	            if (!found) {
	              found = topli.find(':tabbable:first').focus().length === 1;
	            }
	          }
	          break;
	        case Keyboard.TAB:
	          i = tabbables.index(target);
	          if (event.shiftKey && isTopNavItem && target.hasClass(settings.openClass)) {
	            _togglePanel.call(that, event, true);
	            next = topnavitems.filter(':lt(' + topnavitems.index(topli) + '):last');
	            if (next.children('.' + settings.panelClass).length) {
	              found = next.children().attr('aria-expanded', 'true').addClass(settings.openClass).filter('.' + settings.panelClass).attr('aria-hidden', 'false').find(':tabbable:last').focus();
	            }
	          } else if (event.shiftKey && i > 0) {
	            found = tabbables.filter(':lt(' + i + '):last').focus().length === 1;
	          } else if (!event.shiftKey && i < tabbables.length - 1) {
	            found = tabbables.filter(':gt(' + i + '):first').focus().length === 1;
	          } else if (window.opera && opera.toString() === '[object Opera]') {
	            tabbables = $(':tabbable');
	            i = tabbables.index(target);
	            if (event.shiftKey) {
	              found = $(':tabbable:lt(' + $(':tabbable').index(target) + '):last').focus().length === 1;
	            } else {
	              found = $(':tabbable:gt(' + $(':tabbable').index(target) + '):first').focus().length === 1;
	            }
	          }
	
	          if (found) {
	            event.preventDefault();
	          }
	          break;
	        case Keyboard.SPACE:
	          if (isTopNavItem) {
	            event.preventDefault();
	            _clickHandler.call(that, event);
	          } else {
	            return;
	          }
	          break;
	        case Keyboard.ENTER:
	          return;
	          break;
	        default:
	          // alphanumeric filter
	          clearTimeout(this.keydownTimeoutID);
	
	          keydownSearchString += newString !== keydownSearchString ? newString : '';
	
	          if (keydownSearchString.length === 0) {
	            return;
	          }
	
	          this.keydownTimeoutID = setTimeout(function () {
	            keydownSearchString = '';
	          }, keydownTimeoutDuration);
	
	          if (isTopNavItem && !target.hasClass(settings.openClass)) {
	            tabbables = tabbables.filter(':not(.' + settings.panelClass + ' :tabbable)');
	          } else {
	            tabbables = topli.find(':tabbable');
	          }
	
	          if (event.shiftKey) {
	            tabbables = $(tabbables.get().reverse());
	          }
	
	          for (i = 0; i < tabbables.length; i++) {
	            o = tabbables.eq(i);
	            if (o.is(target)) {
	              start = keydownSearchString.length === 1 ? i + 1 : i;
	              break;
	            }
	          }
	
	          regex = new RegExp('^' + keydownSearchString.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&'), 'i');
	
	          for (i = start; i < tabbables.length; i++) {
	            o = tabbables.eq(i);
	            label = $.trim(o.text());
	            if (regex.test(label)) {
	              found = true;
	              o.focus();
	              break;
	            }
	          }
	          if (!found) {
	            for (i = 0; i < start; i++) {
	              o = tabbables.eq(i);
	              label = $.trim(o.text());
	              if (regex.test(label)) {
	                o.focus();
	                break;
	              }
	            }
	          }
	          break;
	      }
	      that.justFocused = false;
	    };
	
	    /**
	     * @name jQuery.fn.accessibleMegaMenu~_mouseDownHandler
	     * @desc Handle mousedown event on mega menu.
	     * @param {event} Event object
	     * @memberof accessibleMegaMenu
	     * @inner
	     * @private
	     */
	    _mouseDownHandler = function _mouseDownHandler(event) {
	      if ($(event.target).is(this.settings.panelClass) || $(event.target).closest(':focusable').length) {
	        this.mouseFocused = true;
	      }
	      this.mouseTimeoutID = setTimeout(function () {
	        clearTimeout(this.focusTimeoutID);
	      }, 1);
	    };
	
	    /**
	     * @name jQuery.fn.accessibleMegaMenu~_mouseOverHandler
	     * @desc Handle mouseover event on mega menu.
	     * @param {event} Event object
	     * @memberof jQuery.fn.accessibleMegaMenu
	     * @inner
	     * @private
	     */
	    _mouseOverHandler = function _mouseOverHandler(event) {
	      clearTimeout(this.mouseTimeoutID);
	      $(event.target).addClass(this.settings.hoverClass);
	      _togglePanel.call(this, event);
	      if ($(event.target).is(':tabbable')) {
	        $('html').on('keydown.accessible-megamenu', $.proxy(_keyDownHandler, event.target));
	      }
	    };
	
	    /**
	     * @name jQuery.fn.accessibleMegaMenu~_mouseOutHandler
	     * @desc Handle mouseout event on mega menu.
	     * @param {event} Event object
	     * @memberof jQuery.fn.accessibleMegaMenu
	     * @inner
	     * @private
	     */
	    _mouseOutHandler = function _mouseOutHandler(event) {
	      var that = this;
	      $(event.target).removeClass(that.settings.hoverClass);
	
	      that.mouseTimeoutID = setTimeout(function () {
	        _togglePanel.call(that, event, true);
	      }, 250);
	      if ($(event.target).is(':tabbable')) {
	        $('html').off('keydown.accessible-megamenu');
	      }
	    };
	
	    _toggleExpandedEventHandlers = function _toggleExpandedEventHandlers(hide) {
	      var menu = this.menu;
	      if (hide) {
	        $('html').off('mouseup.outside-accessible-megamenu, touchend.outside-accessible-megamenu, mspointerup.outside-accessible-megamenu,  pointerup.outside-accessible-megamenu');
	
	        menu.find('[aria-expanded].' + this.settings.panelClass).off('DOMAttrModified.accessible-megamenu');
	      } else {
	        $('html').on('mouseup.outside-accessible-megamenu, touchend.outside-accessible-megamenu, mspointerup.outside-accessible-megamenu,  pointerup.outside-accessible-megamenu', $.proxy(_clickOutsideHandler, this));
	
	        /* Narrator in Windows 8 automatically toggles the aria-expanded property on double tap or click.
	           To respond to the change to collapse the panel, we must add a listener for a DOMAttrModified event. */
	        menu.find('[aria-expanded=true].' + this.settings.panelClass).on('DOMAttrModified.accessible-megamenu', $.proxy(_DOMAttrModifiedHandler, this));
	      }
	    };
	
	    /* public attributes and methods ------------------------- */
	    return {
	      constructor: AccessibleMegaMenu,
	
	      /**
	       * @lends jQuery.fn.accessibleMegaMenu
	       * @desc Initializes an instance of the accessibleMegaMenu plugins
	       * @memberof jQuery.fn.accessibleMegaMenu
	       * @instance
	       */
	      init: function init() {
	        var settings = this.settings,
	            nav = $(this.element),
	            menu = nav.children().first(),
	
	        // Only filter to those items with the selector class
	        topnavitems = this.settings.topNavItems ? menu.children(this.settings.topNavItems) : menu.children();
	        this.start(settings, nav, menu, topnavitems);
	      },
	
	      start: function start(settings, nav, menu, topnavitems) {
	        var that = this;
	        this.settings = settings;
	        this.menu = menu;
	        this.topnavitems = topnavitems;
	
	        nav.attr('role', 'navigation');
	        menu.addClass(settings.menuClass);
	        topnavitems.each(function (i, topnavitem) {
	          var topnavitemlink, topnavitempanel;
	          topnavitem = $(topnavitem);
	          topnavitem.addClass(settings.topNavItemClass);
	          topnavitemlink = topnavitem.find(':tabbable:first');
	          topnavitempanel = topnavitem.children(':not(:tabbable):last');
	          _addUniqueId.call(that, topnavitemlink);
	          if (topnavitempanel.length) {
	            _addUniqueId.call(that, topnavitempanel);
	            topnavitemlink.attr({
	              'aria-haspopup': true,
	              'aria-controls': topnavitempanel.attr('id'),
	              'aria-expanded': false
	            });
	
	            topnavitempanel.attr({
	              'role': 'group',
	              'aria-expanded': false,
	              'aria-hidden': true
	            }).addClass(settings.panelClass).not('[aria-labelledby]').attr('aria-labelledby', topnavitemlink.attr('id'));
	          }
	        });
	
	        this.panels = menu.find('.' + settings.panelClass);
	
	        menu.on('focusin.accessible-megamenu', ':focusable, .' + settings.panelClass, $.proxy(_focusInHandler, this)).on('focusout.accessible-megamenu', ':focusable, .' + settings.panelClass, $.proxy(_focusOutHandler, this)).on('keydown.accessible-megamenu', $.proxy(_keyDownHandler, this)).on('mousedown.accessible-megamenu', $.proxy(_mouseDownHandler, this));
	
	        if (!settings.openOnClick) {
	          menu.on('mouseover.accessible-megamenu', $.proxy(_mouseOverHandler, this)).on('mouseout.accessible-megamenu', $.proxy(_mouseOutHandler, this));
	        } else {
	          menu.on('click.accessible-megamenu', $.proxy(_mouseOverHandler, this));
	        }
	
	        if (isTouch) {
	          menu.on('touchstart.accessible-megamenu', $.proxy(_clickHandler, this));
	        }
	
	        menu.find('hr').attr('role', 'separator');
	
	        if ($(document.activeElement).closest(menu).length) {
	          $(document.activeElement).trigger('focusin.accessible-megamenu');
	        }
	      },
	
	      /**
	       * @desc Get default values
	       * @example $(selector).accessibleMegaMenu('getDefaults')
	       * @return {object}
	       * @memberof jQuery.fn.accessibleMegaMenu
	       * @instance
	       */
	      getDefaults: function getDefaults() {
	        return this._defaults;
	      },
	
	      /**
	       * @desc Get any option set to plugin using its name (as string)
	       * @example $(selector).accessibleMegaMenu('getOption', some_option)
	       * @param {string} opt
	       * @return {string}
	       * @memberof jQuery.fn.accessibleMegaMenu
	       * @instance
	       */
	      getOption: function getOption(opt) {
	        return this.settings[opt];
	      },
	
	      /**
	       * @desc Get all options
	       * @example $(selector).accessibleMegaMenu('getAllOptions')
	       * @return {object}
	       * @memberof jQuery.fn.accessibleMegaMenu
	       * @instance
	       */
	      getAllOptions: function getAllOptions() {
	        return this.settings;
	      },
	
	      /**
	       * @desc Set option
	       * @example $(selector).accessibleMegaMenu('setOption', 'option_name',  'option_value',  reinitialize)
	       * @param {string} opt - Option name
	       * @param {string} val - Option value
	       * @param {boolean} [reinitialize] - boolean to re-initialize the menu.
	       * @memberof jQuery.fn.accessibleMegaMenu
	       * @instance
	       */
	      setOption: function setOption(opt, value, reinitialize) {
	        this.settings[opt] = value;
	        if (reinitialize) {
	          this.init();
	        }
	      }
	    };
	  }();
	
	  /*
	   * @param {object} [options] Mega Menu options
	   * @param {string} [options.uuidPrefix=accessible-megamenu] - Prefix for generated unique id attributes, which are required to indicate aria-owns, aria-controls and aria-labelledby
	   * @param {string} [options.menuClass=accessible-megamenu] - CSS class used to define the megamenu styling
	   * @param {string} [options.topNavItemClass=accessible-megamenu-top-nav-item] - CSS class for a top-level navigation item in the megamenu
	   * @param {string} [options.panelClass=accessible-megamenu-panel] - CSS class for a megamenu panel
	   * @param {string} [options.panelGroupClass=accessible-megamenu-panel-group] - CSS class for a group of items within a megamenu panel
	   * @param {string} [options.hoverClass=hover] - CSS class for the hover state
	   * @param {string} [options.focusClass=focus] - CSS class for the focus state
	   * @param {string} [options.openClass=open] - CSS class for the open state
	   */
	  $.fn[pluginName] = function (options) {
	    return this.each(function () {
	      if (!$.data(this, 'plugin_' + pluginName)) {
	        $.data(this, 'plugin_' + pluginName, new $.fn[pluginName].AccessibleMegaMenu(this, options));
	      }
	    });
	  };
	
	  $.fn[pluginName].AccessibleMegaMenu = AccessibleMegaMenu;
	
	  /* :focusable and :tabbable selectors from
	     https://raw.github.com/jquery/jquery-ui/master/ui/jquery.ui.core.js */
	
	  /**
	   * @private
	   */
	  function visible(element) {
	    return $.expr.filters.visible(element) && !$(element).parents().addBack().filter(function () {
	      return $.css(this, 'visibility') === 'hidden';
	    }).length;
	  }
	
	  /**
	   * @private
	   */
	  function _focusable(element, isTabIndexNotNaN) {
	    var map,
	        mapName,
	        img,
	        nodeName = element.nodeName.toLowerCase();
	    if ('area' === nodeName) {
	      map = element.parentNode;
	      mapName = map.name;
	      if (!element.href || !mapName || map.nodeName.toLowerCase() !== 'map') {
	        return false;
	      }
	      img = $('img[usemap=#' + mapName + ']')[0];
	      return !!img && visible(img);
	    }
	    return (/input|select|textarea|button|object/.test(nodeName) ? !element.disabled : 'a' === nodeName ? element.href || isTabIndexNotNaN : isTabIndexNotNaN) &&
	    // the element and all of its ancestors must be visible
	    visible(element);
	  }
	
	  $.extend($.expr[':'], {
	    data: $.expr.createPseudo ? $.expr.createPseudo(function (dataName) {
	      return function (elem) {
	        return !!$.data(elem, dataName);
	      };
	    }) : // support: jQuery <1.8
	    function (elem, i, match) {
	      return !!$.data(elem, match[3]);
	    },
	
	    focusable: function focusable(element) {
	      return _focusable(element, !isNaN($.attr(element, 'tabindex')));
	    },
	
	    tabbable: function tabbable(element) {
	      var tabIndex = $.attr(element, 'tabindex'),
	          isTabIndexNaN = isNaN(tabIndex);
	      return (isTabIndexNaN || tabIndex >= 0) && _focusable(element, !isTabIndexNaN);
	    }
	  });
	})(jQuery, window, document);

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jquery = __webpack_require__(4);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var hideClass = 'u-jsHiddenVisually';
	
	(0, _jquery2['default'])('.js-Share').click(function (e) {
	  var $el = (0, _jquery2['default'])(e.currentTarget);
	  var $share = $el.closest('.Share');
	  var $buttons = $share.find('ul');
	
	  $buttons.toggleClass(hideClass);
	
	  $share.find('.Share-revealText').toggleClass(hideClass);
	
	  $share.find('.Share-revealIcon').toggleClass('is-open');
	});

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jquery = __webpack_require__(4);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _throttle = __webpack_require__(7);
	
	var _throttle2 = _interopRequireDefault(_throttle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var threshold = 100;
	
	var _toggleScrolltop = function _toggleScrolltop() {
	  (0, _jquery2['default'])(window).scrollTop() > threshold ? (0, _jquery2['default'])('.js-scrollTop').show() : (0, _jquery2['default'])('.js-scrollTop').hide();
	};
	
	(0, _jquery2['default'])(window).scroll((0, _throttle2['default'])(500, _toggleScrolltop));
	(0, _jquery2['default'])(document).ready(_toggleScrolltop);
	
	exports['default'] = {
	  threshold: threshold
	};
	module.exports = exports['default'];

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _frTooltip = __webpack_require__(54);
	
	var _frTooltip2 = _interopRequireDefault(_frTooltip);
	
	var _tooltip = __webpack_require__(55);
	
	var _tooltip2 = _interopRequireDefault(_tooltip);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/* eslint-enable */
	
	var tooltip = (0, _frTooltip2['default'])({
		// String - Container selector, hook for JS init() method
		selector: '.js-fr-tooltip',
	
		// String - Selector to define the tooltip element
		tooltipSelector: '.js-fr-tooltip-tooltip',
	
		// String - Selector to define the toggle element controlling the tooltip
		toggleSelector: '.js-fr-tooltip-toggle',
	
		// String - Prefix for the id applied to each tooltip as a reference for the toggle
		tooltipIdPrefix: 'tooltip',
	
		// String - Class name that will be added to the selector when the component has been initialised
		readyClass: 'fr-tooltip--is-ready'
	});
	
	/* eslint-disable no-unused-vars */
	
	exports['default'] = { tooltip: tooltip, Frtooltip: _frTooltip2['default'] };
	module.exports = exports['default'];

/***/ },
/* 54 */
/***/ function(module, exports) {

	'use strict';
	
	// Polyfill matches as per https://github.com/jonathantneal/closest
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	Element.prototype.matches = Element.prototype.matches || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector;
	
	/**
	 * @param {object} options Object containing configuration overrides
	 */
	var Frtooltip = function Frtooltip() {
		var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
		var _ref$selector = _ref.selector;
		var selector = _ref$selector === undefined ? '.js-fr-tooltip' : _ref$selector;
		var _ref$tooltipSelector = _ref.tooltipSelector;
		var tooltipSelector = _ref$tooltipSelector === undefined ? '.js-fr-tooltip-tooltip' : _ref$tooltipSelector;
		var _ref$toggleSelector = _ref.toggleSelector;
		var toggleSelector = _ref$toggleSelector === undefined ? '.js-fr-tooltip-toggle' : _ref$toggleSelector;
		var _ref$tooltipIdPrefix = _ref.tooltipIdPrefix;
		var tooltipIdPrefix = _ref$tooltipIdPrefix === undefined ? 'tooltip' : _ref$tooltipIdPrefix;
		var _ref$readyClass = _ref.readyClass;
		var readyClass = _ref$readyClass === undefined ? 'fr-tooltip--is-ready' : _ref$readyClass;
	
	
		// CONSTANTS
		var doc = document;
		var docEl = doc.documentElement;
		var _q = function _q(el) {
			var ctx = arguments.length <= 1 || arguments[1] === undefined ? doc : arguments[1];
			return [].slice.call(ctx.querySelectorAll(el));
		};
	
		// SUPPORTS
		if (!('querySelector' in doc) || !('addEventListener' in window) || !docEl.classList) return;
	
		// SETUP
		var tooltipContainers = _q(selector);
	
		//	TEMP
		var currTooltip = null;
	
		//	UTILS
		function _defer(fn) {
			//	wrapped in setTimeout to delay binding until previous rendering has completed
			if (typeof fn === 'function') setTimeout(fn, 0);
		}
		function _closest(el, selector) {
			while (el) {
				if (el.matches(selector)) break;
				el = el.parentElement;
			}
			return el;
		}
	
		//	A11Y
		function _addA11y(container, i) {
			//	get relative elements
			var toggle = _q(toggleSelector, container)[0];
			var tooltip = _q(tooltipSelector, container)[0];
			//	create new button and replace toggle
			var button = doc.createElement('button');
			button.setAttribute('class', toggle.getAttribute('class'));
			button.setAttribute('aria-expanded', 'false');
			button.setAttribute('aria-describedby', '');
			button.textContent = toggle.textContent;
			container.replaceChild(button, toggle);
			//	add tooltip attributes
			tooltip.setAttribute('role', 'tooltip');
			tooltip.setAttribute('id', tooltipIdPrefix + '-' + i);
			tooltip.setAttribute('aria-hidden', 'true');
			tooltip.setAttribute('aria-live', 'polite');
		}
		function _removeA11y(container) {
			//	get relative elements
			var toggle = _q(toggleSelector, container)[0];
			var tooltip = _q(tooltipSelector, container)[0];
			//	create new span and replace toggle
			var span = doc.createElement('span');
			span.setAttribute('class', toggle.getAttribute('class'));
			span.textContent = toggle.textContent;
			container.replaceChild(span, toggle);
			//	remove tooltip attributes
			tooltip.removeAttribute('role');
			tooltip.removeAttribute('id');
			tooltip.removeAttribute('aria-hidden');
			tooltip.removeAttribute('aria-live');
		}
	
		// ACTIONS
		function _showTooltip(toggle, tooltip) {
			//	assign describedby matching tooltip reference
			var tooltipId = tooltip.getAttribute('id');
			toggle.setAttribute('aria-describedby', tooltipId);
			//	set visible state
			toggle.setAttribute('aria-expanded', 'true');
			tooltip.setAttribute('aria-hidden', 'false');
			//	store temp reference to tooltip
			currTooltip = tooltip;
			//	bind doc close events
			_defer(_bindDocClick);
			_defer(_bindDocKey);
		}
		function _hideTooltip(toggle, tooltip) {
			//	remove tooltip reference
			toggle.setAttribute('aria-describedby', '');
			//	set visible state
			toggle.setAttribute('aria-expanded', 'false');
			tooltip.setAttribute('aria-hidden', 'true');
			//	remove tooltip temp reference
			currTooltip = null;
			//	unbind doc close events
			_unbindDocClick();
			_unbindDocKey();
		}
		function destroy() {
			tooltipContainers.forEach(function (container, i) {
				_removeA11y(container, i);
				_unbindToggleEvents(container);
				container.classList.remove(readyClass);
			});
			//	reset temp references
			currTooltip = null;
			//	unbind global events
			_unbindDocClick();
			_unbindDocKey();
		}
	
		// EVENTS
		function _eventTogglePointer(e) {
			//	close any open tooltips
			if (currTooltip) _hideTooltip(currTooltip.previousElementSibling, currTooltip);
			//	get relevant tooltip elements
			var toggle = e.target;
			var tooltip = toggle.nextElementSibling;
			//	show or hide if toggle is 'expanded'
			if (toggle.getAttribute('aria-expanded') === 'false') {
				_showTooltip(toggle, tooltip);
			} else {
				_hideTooltip(toggle, tooltip);
			}
		}
		function _eventTogglePointerLeave() {
			if (currTooltip) _hideTooltip(currTooltip.previousElementSibling, currTooltip);
		}
		function _eventDocClick(e) {
			//	check if target is panel or child of
			var isTooltip = e.target === currTooltip;
			var isTooltipchild = _closest(e.target, tooltipSelector);
			if (!isTooltip && !isTooltipchild) _hideTooltip(currTooltip.previousElementSibling, currTooltip);
		}
		function _eventDocKey(e) {
			//	esc key
			if (e.keyCode === 27) _hideTooltip(currTooltip.previousElementSibling, currTooltip);
		}
	
		// BIND EVENTS
		function _bindToggleEvents(container) {
			var toggle = _q(toggleSelector, container)[0];
			toggle.addEventListener('click', _eventTogglePointer);
			toggle.addEventListener('mouseenter', _eventTogglePointer);
			toggle.addEventListener('mouseleave', _eventTogglePointerLeave);
		}
		function _bindDocClick() {
			doc.addEventListener('click', _eventDocClick);
			doc.addEventListener('touchstart', _eventDocClick);
		}
		function _bindDocKey() {
			doc.addEventListener('keydown', _eventDocKey);
		}
	
		//	UNBIND EVENTS
		function _unbindToggleEvents(container) {
			var toggle = _q(toggleSelector, container)[0];
			toggle.removeEventListener('click', _eventTogglePointer);
			toggle.removeEventListener('mouseenter', _eventTogglePointer);
			toggle.removeEventListener('mouseleave', _eventTogglePointerLeave);
		}
		function _unbindDocClick() {
			doc.removeEventListener('click', _eventDocClick);
			doc.removeEventListener('touchstart', _eventDocClick);
		}
		function _unbindDocKey() {
			doc.removeEventListener('keydown', _eventDocKey);
		}
	
		// INIT
		function init() {
			if (!tooltipContainers) return;
			//	loop through each tooltip element
			tooltipContainers.forEach(function (container, i) {
				_addA11y(container, i);
				_bindToggleEvents(container);
				container.classList.add(readyClass);
			});
		}
		init();
	
		// REVEAL API
		return {
			init: init,
			destroy: destroy
		};
	};
	
	// module exports
	exports['default'] = Frtooltip;
	module.exports = exports['default'];

/***/ },
/* 55 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ])
});
;
//# sourceMappingURL=IWT.js.map