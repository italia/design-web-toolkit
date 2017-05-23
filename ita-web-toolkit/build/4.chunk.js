webpackJsonpIWT([4],{

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "/*! Tablesaw - v3.0.0 - 2017-02-14\n* https://github.com/filamentgroup/tablesaw\n* Copyright (c) 2017 Filament Group; Licensed MIT */\n\n.tablesaw {\n  width: 100%;\n  max-width: 100%;\n  empty-cells: show;\n  border-collapse: collapse;\n  border: 0;\n  padding: 0;\n}\n\n.tablesaw * {\n  box-sizing: border-box;\n}\n\n.tablesaw th,\n.tablesaw td {\n  padding: .5em .7em;\n}\n\n.tablesaw thead tr:first-child th {\n  padding-top: .9em;\n  padding-bottom: .7em;\n}\n\n.tablesaw-bar .btn {\n  border: 1px solid #ccc;\n  border-radius: .25em;\n  background: none;\n  box-shadow: 0 1px 0 rgba(255,255,255,1);\n  color: #4a4a4a;\n  cursor: pointer;\n  display: inline-block;\n  margin: 0;\n  padding: .5em .85em .4em .85em;\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  text-transform: capitalize;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\n.tablesaw-bar a.btn {\n  color: #1c95d4;\n}\n\n.tablesaw-bar .btn:hover {\n  text-decoration: none;\n}\n\n/* Default radio/checkbox styling horizonal controlgroups. */\n\n.tablesaw-bar .btn:active {\n  background-color: #ddd;\n}\n\n@supports (box-shadow: none ) {\n  .tablesaw-bar .btn:focus {\n    background-color: #fff;\n    outline: none;\n  }\n\n  .tablesaw-bar .btn:focus {\n    box-shadow: 0 0 .35em #4faeef !important;\n  }\n}\n\n.tablesaw-bar .btn-select select {\n  background: none;\n  border: none;\n  display: inline-block;\n  position: absolute;\n  left: 0;\n  top: 0;\n  margin: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n  min-height: 1em;\n  opacity: 0;\n  color: transparent;\n}\n\n.tablesaw-bar .btn select option {\n  background: #fff;\n  color: #000;\n}\n\n.tablesaw-bar .btn {\n  display: inline-block;\n  width: auto;\n  height: auto;\n  position: relative;\n  top: 0;\n}\n\n.tablesaw-bar .btn.btn-small {\n  font-size: 1.0625em;\n  line-height: 19px;\n  padding: .3em 1em .3em 1em;\n}\n\n.tablesaw-bar .btn.btn-micro {\n  font-size: .8125em;\n  padding: .4em .7em .25em .7em;\n}\n\n.tablesaw-bar .btn-select {\n  padding-right: 1.5em;\n  text-align: left;\n  display: inline-block;\n  color: #4d4d4d;\n  padding-right: 2.5em;\n  min-width: 7.25em;\n  text-align: left;\n}\n\n.tablesaw-bar .btn-select:after {\n  content: \" \";\n  position: absolute;\n  background: none;\n  background-repeat: no-repeat;\n  background-position: .25em .45em;\n  content: \"\\25BC\";\n  font-size: .55em;\n  padding-top: 1.2em;\n  padding-left: 1em;\n  left: auto;\n  right: 0;\n  margin: 0;\n  top: 0;\n  bottom: 0;\n  width: 1.8em;\n}\n\n.tablesaw-bar .btn-select.btn-small:after,\n.tablesaw-bar .btn-select.btn-micro:after {\n  width: 1.2em;\n  font-size: .5em;\n  padding-top: 1em;\n  padding-right: .5em;\n  line-height: 1.65;\n  background: none;\n  box-shadow: none;\n  border-left-width: 0;\n}\n\n/* Column navigation buttons for swipe and columntoggle tables */\n\n.tablesaw-advance .btn {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  box-sizing: border-box;\n  text-shadow: 0 1px 0 #fff;\n  border-radius: .25em;\n}\n\n.tablesaw-advance .btn.btn-micro {\n  font-size: .8125em;\n  padding: .3em .7em .25em .7em;\n}\n\n.tablesaw-bar .tablesaw-advance a.tablesaw-nav-btn:first-child {\n  margin-left: 0;\n}\n\n.tablesaw-bar .tablesaw-advance a.tablesaw-nav-btn:last-child {\n  margin-right: 0;\n}\n\n.tablesaw-bar .tablesaw-advance a.tablesaw-nav-btn {\n  display: inline-block;\n  overflow: hidden;\n  width: 1.8em;\n  height: 1.8em;\n  background-position: 50% 50%;\n  margin-left: .25em;\n  margin-right: .25em;\n  position: relative;\n}\n\n.tablesaw-bar .tablesaw-advance a.tablesaw-nav-btn.left:before,\n.tablesaw-bar .tablesaw-advance a.tablesaw-nav-btn.right:before,\n.tablesaw-bar .tablesaw-advance a.tablesaw-nav-btn.down:before,\n.tablesaw-bar .tablesaw-advance a.tablesaw-nav-btn.up:before {\n  content: \" \";\n  overflow: hidden;\n  width: 0;\n  height: 0;\n  position: absolute;\n}\n\n.tablesaw-bar .tablesaw-advance a.tablesaw-nav-btn.down:before {\n  left: .5em;\n  top: .65em;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-top: 5px solid #808080;\n}\n\n.tablesaw-bar .tablesaw-advance a.tablesaw-nav-btn.up:before {\n  left: .5em;\n  top: .65em;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-bottom: 5px solid #808080;\n}\n\n.tablesaw-bar .tablesaw-advance a.tablesaw-nav-btn.left:before,\n.tablesaw-bar .tablesaw-advance a.tablesaw-nav-btn.right:before {\n  top: .45em;\n  border-top: 5px solid transparent;\n  border-bottom: 5px solid transparent;\n}\n\n.tablesaw-bar .tablesaw-advance a.tablesaw-nav-btn.left:before {\n  left: .6em;\n  border-right: 5px solid #808080;\n}\n\n.tablesaw-bar .tablesaw-advance a.tablesaw-nav-btn.right:before {\n  left: .7em;\n  border-left: 5px solid #808080;\n}\n\n.tablesaw-advance a.tablesaw-nav-btn.disabled {\n  opacity: .25;\n  cursor: default;\n  pointer-events: none;\n}\n\n/* Table Toolbar */\n\n.tablesaw-bar {\n  clear: both;\n}\n\n.tablesaw-toolbar {\n  float: left;\n}\n\n.tablesaw-toolbar label {\n  font-size: .875em;\n  padding: .5em 0;\n  clear: both;\n  display: block;\n  color: #888;\n  margin-right: .5em;\n  text-transform: uppercase;\n}\n\n.tablesaw-bar .btn,\n.tablesaw-enhanced .tablesaw-bar .btn {\n  margin-top: .5em;\n  margin-bottom: .5em;\n}\n\n.tablesaw-bar .btn-select,\n.tablesaw-enhanced .tablesaw-bar .btn-select {\n  margin-bottom: 0;\n}\n\n.tablesaw-bar .tablesaw-toolbar .btn {\n  margin-left: .4em;\n  margin-top: 0;\n  text-transform: uppercase;\n  border: none;\n  box-shadow: none;\n  background: transparent;\n  font-size: 1em;\n  padding-left: .3em;\n}\n\n.tablesaw-bar .tablesaw-toolbar .btn-select {\n  min-width: 0;\n}\n\n.tablesaw-bar .tablesaw-toolbar .btn-select:after {\n  padding-top: .9em;\n}\n\n.tablesaw-bar .tablesaw-toolbar select {\n  color: #888;\n  text-transform: none;\n  background: transparent;\n}\n\n.tablesaw-toolbar ~ table {\n  clear: both;\n}\n\n.tablesaw-toolbar .a11y-sm {\n  clip: rect(0 0 0 0);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  width: 1px;\n}\n\n@media (min-width: 24em) {\n  .tablesaw-toolbar .a11y-sm {\n    clip: none;\n    height: auto;\n    width: auto;\n    position: static;\n    overflow: visible;\n  }\n}\n\n.tablesaw th,\n.tablesaw td {\n  text-align: left;\n  vertical-align: middle;\n}\n\n.tablesaw thead th {\n  text-align: left;\n}\n\n/* Table rows have a gray bottom stroke by default */\n\n.tablesaw-row-border tr {\n  border-bottom: 1px solid #dfdfdf;\n}\n\n/* Zebra striping */\n\n.tablesaw-row-zebra tr:nth-child(2n) {\n  background-color: #f8f8f8;\n}\n\n.tablesaw caption {\n  text-align: left;\n  margin: .59375em 0;\n}\n\n.tablesaw-swipe .tablesaw-cell-persist {\n  border-right: 2px solid #e4e1de;\n}\n\n.tablesaw-swipe-shadow .tablesaw-cell-persist {\n  border-right-width: 1px;\n}\n\n.tablesaw-swipe-shadow .tablesaw-cell-persist {\n  box-shadow: 3px 0 4px -1px #e4e1de;\n}\n\n.tablesaw-stack td .tablesaw-cell-label,\n.tablesaw-stack th .tablesaw-cell-label {\n  display: none;\n}\n\n/* Mobile first styles: Begin with the stacked presentation at narrow widths */\n\n/* Support note IE9+: @media only all */\n\n@media only all {\n  /* Show the table cells as a block level element */\n\n  .tablesaw-stack {\n    clear: both;\n  }\n\n  .tablesaw-stack td,\n  .tablesaw-stack th {\n    text-align: left;\n    display: block;\n  }\n\n  .tablesaw-stack tr {\n    clear: both;\n    display: table-row;\n  }\n\n  /* Make the label elements a percentage width */\n\n  .tablesaw-stack td .tablesaw-cell-label,\n  .tablesaw-stack th .tablesaw-cell-label {\n    display: block;\n    padding: 0 .6em 0 0;\n    width: 30%;\n    display: inline-block;\n  }\n\n  /* For grouped headers, have a different style to visually separate the levels by classing the first label in each col group */\n\n  .tablesaw-stack th .tablesaw-cell-label-top,\n  .tablesaw-stack td .tablesaw-cell-label-top {\n    display: block;\n    padding: .4em 0;\n    margin: .4em 0;\n  }\n\n  .tablesaw-cell-label {\n    display: block;\n  }\n\n  /* Avoid double strokes when stacked */\n\n  .tablesaw-stack tbody th.group {\n    margin-top: -1px;\n  }\n\n  /* Avoid double strokes when stacked */\n\n  .tablesaw-stack th.group b.tablesaw-cell-label {\n    display: none !important;\n  }\n}\n\n@media (max-width: 39.9375em) {\n  /* Table rows have a gray bottom stroke by default */\n\n  .tablesaw-stack tbody tr {\n    display: block;\n    width: 100%;\n    border-bottom: 1px solid #dfdfdf;\n  }\n\n  .tablesaw-stack thead td,\n  .tablesaw-stack thead th {\n    display: none;\n  }\n\n  .tablesaw-stack tbody td,\n  .tablesaw-stack tbody th {\n    display: block;\n    float: left;\n    clear: left;\n    width: 100%;\n  }\n\n  .tablesaw-cell-label {\n    vertical-align: top;\n  }\n\n  .tablesaw-cell-content {\n    max-width: 67%;\n    display: inline-block;\n  }\n\n  .tablesaw-stack td:empty,\n  .tablesaw-stack th:empty {\n    display: none;\n  }\n}\n\n/* Media query to show as a standard table at 560px (35em x 16px) or wider */\n\n@media (min-width: 40em) {\n  .tablesaw-stack tr {\n    display: table-row;\n  }\n\n  /* Show the table header rows */\n\n  .tablesaw-stack td,\n  .tablesaw-stack th,\n  .tablesaw-stack thead td,\n  .tablesaw-stack thead th {\n    display: table-cell;\n    margin: 0;\n  }\n\n  /* Hide the labels in each cell */\n\n  .tablesaw-stack td .tablesaw-cell-label,\n  .tablesaw-stack th .tablesaw-cell-label {\n    display: none !important;\n  }\n}\n\n.tablesaw-fix-persist {\n  table-layout: fixed;\n}\n\n@media only all {\n  /* Unchecked manually: Always hide */\n\n  .tablesaw-swipe th.tablesaw-cell-hidden,\n  .tablesaw-swipe td.tablesaw-cell-hidden {\n    display: none;\n  }\n}\n\n.btn.tablesaw-columntoggle-btn span {\n  text-indent: -9999px;\n  display: inline-block;\n}\n\n.tablesaw-columntoggle-btnwrap {\n  position: relative;\n  /* for dialog positioning */\n}\n\n.tablesaw-columntoggle-btnwrap .dialog-content {\n  padding: .5em;\n}\n\n.tablesaw-columntoggle tbody td {\n  line-height: 1.5;\n}\n\n/* Remove top/bottom margins around the fieldcontain on check list */\n\n.tablesaw-columntoggle-popup {\n  display: none;\n}\n\n.tablesaw-columntoggle-btnwrap.visible .tablesaw-columntoggle-popup {\n  display: block;\n  position: absolute;\n  top: 2em;\n  right: 0;\n  background-color: #fff;\n  padding: .5em .8em;\n  border: 1px solid #ccc;\n  box-shadow: 0 1px 2px #ccc;\n  border-radius: .2em;\n  z-index: 1;\n}\n\n.tablesaw-columntoggle-popup fieldset {\n  margin: 0;\n}\n\n/* Hide all prioritized columns by default */\n\n@media only all {\n  .tablesaw-columntoggle th.tablesaw-priority-6,\n  .tablesaw-columntoggle td.tablesaw-priority-6,\n  .tablesaw-columntoggle th.tablesaw-priority-5,\n  .tablesaw-columntoggle td.tablesaw-priority-5,\n  .tablesaw-columntoggle th.tablesaw-priority-4,\n  .tablesaw-columntoggle td.tablesaw-priority-4,\n  .tablesaw-columntoggle th.tablesaw-priority-3,\n  .tablesaw-columntoggle td.tablesaw-priority-3,\n  .tablesaw-columntoggle th.tablesaw-priority-2,\n  .tablesaw-columntoggle td.tablesaw-priority-2,\n  .tablesaw-columntoggle th.tablesaw-priority-1,\n  .tablesaw-columntoggle td.tablesaw-priority-1 {\n    display: none;\n  }\n}\n\n.tablesaw-columntoggle-btnwrap .dialog-content {\n  top: 0 !important;\n  right: 1em;\n  left: auto !important;\n  width: 12em;\n  max-width: 18em;\n  margin: -.5em auto 0;\n}\n\n.tablesaw-columntoggle-btnwrap .dialog-content:focus {\n  outline-style: none;\n}\n\n/* Preset breakpoints if \"\" class added to table */\n\n/* Show priority 1 at 320px (20em x 16px) */\n\n@media (min-width: 20em) {\n  .tablesaw-columntoggle th.tablesaw-priority-1,\n  .tablesaw-columntoggle td.tablesaw-priority-1 {\n    display: table-cell;\n  }\n}\n\n/* Show priority 2 at 480px (30em x 16px) */\n\n@media (min-width: 30em) {\n  .tablesaw-columntoggle th.tablesaw-priority-2,\n  .tablesaw-columntoggle td.tablesaw-priority-2 {\n    display: table-cell;\n  }\n}\n\n/* Show priority 3 at 640px (40em x 16px) */\n\n@media (min-width: 40em) {\n  .tablesaw-columntoggle th.tablesaw-priority-3,\n  .tablesaw-columntoggle td.tablesaw-priority-3 {\n    display: table-cell;\n  }\n\n  .tablesaw-columntoggle tbody td {\n    line-height: 2;\n  }\n}\n\n/* Show priority 4 at 800px (50em x 16px) */\n\n@media (min-width: 50em) {\n  .tablesaw-columntoggle th.tablesaw-priority-4,\n  .tablesaw-columntoggle td.tablesaw-priority-4 {\n    display: table-cell;\n  }\n}\n\n/* Show priority 5 at 960px (60em x 16px) */\n\n@media (min-width: 60em) {\n  .tablesaw-columntoggle th.tablesaw-priority-5,\n  .tablesaw-columntoggle td.tablesaw-priority-5 {\n    display: table-cell;\n  }\n}\n\n/* Show priority 6 at 1,120px (70em x 16px) */\n\n@media (min-width: 70em) {\n  .tablesaw-columntoggle th.tablesaw-priority-6,\n  .tablesaw-columntoggle td.tablesaw-priority-6 {\n    display: table-cell;\n  }\n}\n\n@media only all {\n  /* Unchecked manually: Always hide */\n\n  .tablesaw-columntoggle th.tablesaw-cell-hidden,\n  .tablesaw-columntoggle td.tablesaw-cell-hidden {\n    display: none;\n  }\n\n  /* Checked manually: Always show */\n\n  .tablesaw-columntoggle th.tablesaw-cell-visible,\n  .tablesaw-columntoggle td.tablesaw-cell-visible {\n    display: table-cell;\n  }\n}\n\n.tablesaw-columntoggle-popup .btn-group > label {\n  display: block;\n  padding: .2em 0;\n  white-space: nowrap;\n}\n\n.tablesaw-columntoggle-popup .btn-group > label input {\n  margin-right: .8em;\n}\n\n.tablesaw-sortable,\n.tablesaw-sortable thead,\n.tablesaw-sortable thead tr,\n.tablesaw-sortable thead tr th {\n  position: relative;\n}\n\n.tablesaw-sortable thead tr th {\n  vertical-align: top;\n}\n\n.tablesaw-sortable th.tablesaw-sortable-head.tablesaw-sortable-head {\n  padding: 0;\n}\n\n.tablesaw-sortable th.tablesaw-sortable-head button {\n  padding-top: .9em;\n  padding-bottom: .7em;\n  padding-left: .6em;\n  padding-right: .6em;\n}\n\n.tablesaw-sortable .tablesaw-sortable-head button {\n  min-width: 100%;\n  color: inherit;\n  background: transparent;\n  border: 0;\n  padding: 0;\n  text-align: inherit;\n  font: inherit;\n  text-transform: inherit;\n}\n\n.tablesaw-sortable-arrow:after {\n  display: inline-block;\n  width: 10px;\n  height: 14px;\n  content: \" \";\n  margin-left: .3125em;\n}\n\n.tablesaw-sortable .tablesaw-sortable-head.tablesaw-sortable-ascending .tablesaw-sortable-arrow:after,\n.tablesaw-sortable .tablesaw-sortable-head.tablesaw-sortable-descending .tablesaw-sortable-arrow:after {\n  content: \" \";\n}\n\n.tablesaw-sortable .tablesaw-sortable-head.tablesaw-sortable-ascending .tablesaw-sortable-arrow:after {\n  content: \"\\2191\";\n}\n\n.tablesaw-sortable .tablesaw-sortable-head.tablesaw-sortable-descending .tablesaw-sortable-arrow:after {\n  content: \"\\2193\";\n}\n\n.tablesaw-sortable .not-applicable:after {\n  content: \"--\";\n  display: block;\n}\n\n.tablesaw-sortable .not-applicable span {\n  display: none;\n}\n\n.tablesaw-advance {\n  float: right;\n}\n\n.tablesaw-advance.minimap {\n  margin-right: .4em;\n}\n\n.tablesaw-advance-dots {\n  float: left;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.tablesaw-advance-dots li {\n  display: table-cell;\n  margin: 0;\n  padding: .4em .2em;\n}\n\n.tablesaw-advance-dots li i {\n  width: .25em;\n  height: .25em;\n  background: #555;\n  border-radius: 100%;\n  display: inline-block;\n}\n\n.tablesaw-advance-dots-hide {\n  opacity: .25;\n  cursor: default;\n  pointer-events: none;\n}", ""]);

// exports


/***/ }),

/***/ 39:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(39)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js!./tablesaw.css", function() {
			var newContent = require("!!../../css-loader/index.js!./tablesaw.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function () {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for (var i = 0; i < this.length; i++) {
			var item = this[i];
			if (item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! Tablesaw - v3.0.0 - 2017-02-14
* https://github.com/filamentgroup/tablesaw
* Copyright (c) 2017 Filament Group; Licensed MIT */
// UMD module definition
// From: https://github.com/umdjs/umd/blob/master/templates/jqueryPlugin.js

(function (factory) {
	if (true) {
		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
		// Node/CommonJS
		module.exports = function (root, jQuery) {
			if (jQuery === undefined) {
				// require('jQuery') returns a factory that requires window to
				// build a jQuery instance, we normalize how we use modules
				// that require this pattern but the window provided is a noop
				// if it's defined (how jquery works)
				if (typeof window !== 'undefined') {
					jQuery = require('jquery');
				} else {
					jQuery = require('jquery')(root);
				}
			}
			factory(jQuery);
			return jQuery;
		};
	} else {
		// Browser globals
		factory(jQuery);
	}
})(function ($) {
	"use strict";

	var win = typeof window !== "undefined" ? window : this;

	var Tablesaw = {
		i18n: {
			modes: ['Stack', 'Swipe', 'Toggle'],
			columns: 'Col<span class=\"a11y-sm\">umn</span>s',
			columnBtnText: 'Columns',
			columnsDialogError: 'No eligible columns.',
			sort: 'Sort'
		},
		// cut the mustard
		mustard: 'head' in document && ( // IE9+, Firefox 4+, Safari 5.1+, Mobile Safari 4.1+, Opera 11.5+, Android 2.3+
		!window.blackberry || window.WebKitPoint) && // only WebKit Blackberry (OS 6+)
		!window.operamini
	};

	if (Tablesaw.mustard) {
		$(document.documentElement).addClass('tablesaw-enhanced');
	}

	(function () {
		var pluginName = "tablesaw",
		    classes = {
			toolbar: "tablesaw-bar"
		},
		    events = {
			create: "tablesawcreate",
			destroy: "tablesawdestroy",
			refresh: "tablesawrefresh"
		},
		    defaultMode = "stack",
		    initSelector = "table[data-tablesaw-mode],table[data-tablesaw-sortable]";

		var Table = function Table(element) {
			if (!element) {
				throw new Error("Tablesaw requires an element.");
			}

			this.table = element;
			this.$table = $(element);

			this.mode = this.$table.attr("data-tablesaw-mode") || defaultMode;

			this.init();
		};

		Table.prototype.init = function () {
			// assign an id if there is none
			if (!this.$table.attr("id")) {
				this.$table.attr("id", pluginName + "-" + Math.round(Math.random() * 10000));
			}

			this.createToolbar();

			// TODO this is used inside stack table init for some reason? what does it do?
			this._initCells();

			this.$table.trigger(events.create, [this]);
		};

		Table.prototype._getPrimaryHeaders = function () {
			return this.$table.find("thead").children().filter("tr").eq(0).find("th");
		};

		Table.prototype._findHeadersForCell = function (cell) {
			var $headers = this._getPrimaryHeaders();
			var results = [];

			for (var rowNumber = 1; rowNumber < this.headerMapping.length; rowNumber++) {
				for (var colNumber = 0; colNumber < this.headerMapping[rowNumber].length; colNumber++) {
					if (this.headerMapping[rowNumber][colNumber] === cell) {
						results.push($headers[colNumber]);
					}
				}
			}
			return results;
		};

		Table.prototype._initCells = function () {
			var colstart = 0;
			var $rows = this.$table.find("tr");
			var columnLookup = [];

			$rows.each(function (rowNumber) {
				columnLookup[rowNumber] = [];
			});

			$rows.each(function (rowNumber) {
				var coltally = 0;
				var $t = $(this);
				var children = $t.children();
				// var isInHeader = $t.closest( "thead" ).length;

				children.each(function () {
					var colspan = parseInt(this.getAttribute("colspan"), 10);
					var rowspan = parseInt(this.getAttribute("rowspan"), 10);

					// set in a previous rowspan
					while (columnLookup[rowNumber][coltally]) {
						coltally++;
					}

					columnLookup[rowNumber][coltally] = this;
					colstart = coltally + 1;

					// TODO both colspan and rowspan
					if (colspan) {
						for (var k = 0; k < colspan - 1; k++) {
							coltally++;
							columnLookup[rowNumber][coltally] = this;
						}
					}
					if (rowspan) {
						for (var j = 1; j < rowspan; j++) {
							columnLookup[rowNumber + j][coltally] = this;
						}
					}

					coltally++;
				});
			});

			for (var colNumber = 0; colNumber < columnLookup[0].length; colNumber++) {
				var headerCol = columnLookup[0][colNumber];
				var rowNumber = 0;
				var rowCell;

				if (!headerCol.cells) {
					headerCol.cells = [];
				}

				while (rowNumber < columnLookup.length) {
					rowCell = columnLookup[rowNumber][colNumber];

					if (headerCol !== rowCell) {
						headerCol.cells.push(rowCell);
					}

					rowNumber++;
				}
			}

			this.headerMapping = columnLookup;
		};

		Table.prototype.refresh = function () {
			this._initCells();

			this.$table.trigger(events.refresh);
		};

		Table.prototype.createToolbar = function () {
			// Insert the toolbar
			// TODO move this into a separate component
			var $toolbar = this.$table.prev().filter('.' + classes.toolbar);
			if (!$toolbar.length) {
				$toolbar = $('<div>').addClass(classes.toolbar).insertBefore(this.$table);
			}
			this.$toolbar = $toolbar;

			if (this.mode) {
				this.$toolbar.addClass('tablesaw-mode-' + this.mode);
			}
		};

		Table.prototype.destroy = function () {
			// Don’t remove the toolbar. Some of the table features are not yet destroy-friendly.
			this.$table.prev().filter('.' + classes.toolbar).each(function () {
				this.className = this.className.replace(/\btablesaw-mode\-\w*\b/gi, '');
			});

			var tableId = this.$table.attr('id');
			$(document).off("." + tableId);
			$(window).off("." + tableId);

			// other plugins
			this.$table.trigger(events.destroy, [this]);

			this.$table.removeData(pluginName);
		};

		// Collection method.
		$.fn[pluginName] = function () {
			return this.each(function () {
				var $t = $(this);

				if ($t.data(pluginName)) {
					return;
				}

				var table = new Table(this);
				$t.data(pluginName, table);
			});
		};

		$(document).on("enhance.tablesaw", function (e) {
			// Cut the mustard
			if (Tablesaw.mustard) {
				$(e.target).find(initSelector)[pluginName]();
			}
		});
	})();

	(function () {

		var classes = {
			stackTable: 'tablesaw-stack',
			cellLabels: 'tablesaw-cell-label',
			cellContentLabels: 'tablesaw-cell-content'
		};

		var data = {
			obj: 'tablesaw-stack'
		};

		var attrs = {
			labelless: 'data-tablesaw-no-labels',
			hideempty: 'data-tablesaw-hide-empty'
		};

		var Stack = function Stack(element, tablesaw) {

			this.tablesaw = tablesaw;
			this.$table = $(element);

			this.labelless = this.$table.is('[' + attrs.labelless + ']');
			this.hideempty = this.$table.is('[' + attrs.hideempty + ']');

			this.$table.data(data.obj, this);
		};

		// Stack.prototype.init = function( colstart ) {
		Stack.prototype.init = function () {
			this.$table.addClass(classes.stackTable);

			if (this.labelless) {
				return;
			}

			var self = this;

			this.$table.find("th, td").filter(function () {
				return !$(this).closest("thead").length;
			}).filter(function () {
				return !$(this).closest("tr").is("[" + attrs.labelless + "]") && (!self.hideempty || !!$(this).html());
			}).each(function () {
				var html = [];
				var $cell = $(this);

				// headers
				$(self.tablesaw._findHeadersForCell(this)).each(function () {
					var $t = $(this);
					// TODO decouple from sortable better
					var $sortableButton = $t.find(".tablesaw-sortable-btn");
					html.push($sortableButton.length ? $sortableButton.html() : $t.html());
				});

				$cell.wrapInner("<span class='" + classes.cellContentLabels + "'></span>");
				$cell.prepend("<b class='" + classes.cellLabels + "'>" + html.join(", ") + "</b>");
			});
		};

		Stack.prototype.destroy = function () {
			this.$table.removeClass(classes.stackTable);
			this.$table.find('.' + classes.cellLabels).remove();
			this.$table.find('.' + classes.cellContentLabels).each(function () {
				$(this).replaceWith(this.childNodes);
			});
		};

		// on tablecreate, init
		$(document).on("tablesawcreate", function (e, tablesaw) {
			if (tablesaw.mode === 'stack') {
				var table = new Stack(tablesaw.table, tablesaw);
				table.init();
			}
		});

		$(document).on("tablesawdestroy", function (e, tablesaw) {
			if (tablesaw.mode === 'stack') {
				$(tablesaw.table).data(data.obj).destroy();
			}
		});
	})();
	(function () {
		var pluginName = "tablesawbtn",
		    methods = {
			_create: function _create() {
				return $(this).each(function () {
					$(this).trigger("beforecreate." + pluginName)[pluginName]("_init").trigger("create." + pluginName);
				});
			},
			_init: function _init() {
				var oEl = $(this),
				    sel = this.getElementsByTagName("select")[0];

				if (sel) {
					$(this).addClass("btn-select")[pluginName]("_select", sel);
				}
				return oEl;
			},
			_select: function _select(sel) {
				var update = function update(oEl, sel) {
					var opts = $(sel).find("option");
					var label = document.createElement("span");
					var el;
					var children;
					var found = false;

					label.setAttribute("aria-hidden", "true");
					label.innerHTML = "&#160;";

					opts.each(function () {
						var opt = this;
						if (opt.selected) {
							label.innerHTML = opt.text;
						}
					});

					children = oEl.childNodes;
					if (opts.length > 0) {
						for (var i = 0, l = children.length; i < l; i++) {
							el = children[i];

							if (el && el.nodeName.toUpperCase() === "SPAN") {
								oEl.replaceChild(label, el);
								found = true;
							}
						}

						if (!found) {
							oEl.insertBefore(label, oEl.firstChild);
						}
					}
				};

				update(this, sel);
				$(this).on("change refresh", function () {
					update(this, sel);
				});
			}
		};

		// Collection method.
		$.fn[pluginName] = function (arrg, a, b, c) {
			return this.each(function () {

				// if it's a method
				if (arrg && typeof arrg === "string") {
					return $.fn[pluginName].prototype[arrg].call(this, a, b, c);
				}

				// don't re-init
				if ($(this).data(pluginName + "active")) {
					return $(this);
				}

				$(this).data(pluginName + "active", true);

				$.fn[pluginName].prototype._create.call(this);
			});
		};

		// add methods
		$.extend($.fn[pluginName].prototype, methods);
	})();
	(function () {

		var ColumnToggle = function ColumnToggle(element) {

			this.$table = $(element);

			if (!this.$table.length) {
				return;
			}

			this.classes = {
				columnToggleTable: 'tablesaw-columntoggle',
				columnBtnContain: 'tablesaw-columntoggle-btnwrap tablesaw-advance',
				columnBtn: 'tablesaw-columntoggle-btn tablesaw-nav-btn down',
				popup: 'tablesaw-columntoggle-popup',
				priorityPrefix: 'tablesaw-priority-',
				// TODO duplicate class, also in tables.js
				toolbar: 'tablesaw-bar'
			};

			// Expose headers and allHeaders properties on the widget
			// headers references the THs within the first TR in the table
			this.headers = this.$table.find("tr").eq(0).find("th");

			this.$table.data('tablesaw-coltoggle', this);
		};

		ColumnToggle.prototype.init = function () {

			if (!this.$table.length) {
				return;
			}

			var tableId,
			    id,
			    $menuButton,
			    $popup,
			    $menu,
			    $btnContain,
			    self = this;

			this.$table.addClass(this.classes.columnToggleTable);

			tableId = this.$table.attr("id");
			id = tableId + "-popup";
			$btnContain = $("<div class='" + this.classes.columnBtnContain + "'></div>");
			$menuButton = $("<a href='#" + id + "' class='btn btn-micro " + this.classes.columnBtn + "' data-popup-link>" + "<span>" + Tablesaw.i18n.columnBtnText + "</span></a>");
			$popup = $("<div class='dialog-table-coltoggle " + this.classes.popup + "' id='" + id + "'></div>");
			$menu = $("<div class='btn-group'></div>");

			var hasNonPersistentHeaders = false;
			$(this.headers).not("td").each(function () {
				var $this = $(this),
				    priority = $this.attr("data-tablesaw-priority"),
				    $cells = self.$getCells(this);

				if (priority && priority !== "persist") {
					$cells.addClass(self.classes.priorityPrefix + priority);

					$("<label><input type='checkbox' checked>" + $this.text() + "</label>").appendTo($menu).children(0).data("tablesaw-header", this);

					hasNonPersistentHeaders = true;
				}
			});

			if (!hasNonPersistentHeaders) {
				$menu.append('<label>' + Tablesaw.i18n.columnsDialogError + '</label>');
			}

			$menu.appendTo($popup);

			// bind change event listeners to inputs - TODO: move to a private method?
			$menu.find('input[type="checkbox"]').on("change", function (e) {
				var checked = e.target.checked;

				var $cells = self.$getCellsFromCheckbox(e.target);

				$cells[!checked ? "addClass" : "removeClass"]("tablesaw-cell-hidden");
				$cells[checked ? "addClass" : "removeClass"]("tablesaw-cell-visible");

				self.$table.trigger('tablesawcolumns');
			});

			$menuButton.appendTo($btnContain);
			$btnContain.appendTo(this.$table.prev().filter('.' + this.classes.toolbar));

			function closePopup(event) {
				// Click came from inside the popup, ignore.
				if (event && $(event.target).closest("." + self.classes.popup).length) {
					return;
				}

				$(document).off('click.' + tableId);
				$menuButton.removeClass('up').addClass('down');
				$btnContain.removeClass('visible');
			}

			var closeTimeout;
			function openPopup() {
				$btnContain.addClass('visible');
				$menuButton.removeClass('down').addClass('up');

				$(document).off('click.' + tableId, closePopup);

				window.clearTimeout(closeTimeout);
				closeTimeout = window.setTimeout(function () {
					$(document).on('click.' + tableId, closePopup);
				}, 15);
			}

			$menuButton.on("click.tablesaw", function (event) {
				event.preventDefault();

				if (!$btnContain.is(".visible")) {
					openPopup();
				} else {
					closePopup();
				}
			});

			$popup.appendTo($btnContain);

			this.$menu = $menu;

			$(window).on("resize." + tableId, function () {
				self.refreshToggle();
			});

			this.refreshToggle();
		};

		ColumnToggle.prototype.$getCells = function (th) {
			return $(th).add(th.cells);
		};

		ColumnToggle.prototype.$getCellsFromCheckbox = function (checkbox) {
			var th = $(checkbox).data("tablesaw-header");
			return this.$getCells(th);
		};

		ColumnToggle.prototype.refreshToggle = function () {
			var self = this;
			this.$menu.find("input").each(function () {
				this.checked = self.$getCellsFromCheckbox(this).eq(0).css("display") === "table-cell";
			});
		};

		ColumnToggle.prototype.refreshPriority = function () {
			var self = this;
			$(this.headers).not("td").each(function () {
				var $this = $(this),
				    priority = $this.attr("data-tablesaw-priority"),
				    $cells = $this.add(this.cells);

				if (priority && priority !== "persist") {
					$cells.addClass(self.classes.priorityPrefix + priority);
				}
			});
		};

		ColumnToggle.prototype.destroy = function () {
			this.$table.removeClass(this.classes.columnToggleTable);
			this.$table.find('th, td').each(function () {
				var $cell = $(this);
				$cell.removeClass('tablesaw-cell-hidden').removeClass('tablesaw-cell-visible');

				this.className = this.className.replace(/\bui\-table\-priority\-\d\b/g, '');
			});
		};

		// on tablecreate, init
		$(document).on("tablesawcreate", function (e, tablesaw) {

			if (tablesaw.mode === 'columntoggle') {
				var table = new ColumnToggle(tablesaw.table);
				table.init();
			}
		});

		$(document).on("tablesawdestroy", function (e, tablesaw) {
			if (tablesaw.mode === 'columntoggle') {
				$(tablesaw.table).data('tablesaw-coltoggle').destroy();
			}
		});
	})();
	;(function () {
		function getSortValue(cell) {
			var text = [];

			$(cell.childNodes).each(function () {
				var $el = $(this);
				if ($el.is('input, select')) {
					text.push($el.val());
				} else if ($el.is('.tablesaw-cell-label')) {} else {
					text.push(($el.text() || '').replace(/^\s+|\s+$/g, ''));
				}
			});

			return text.join('');
		}

		var pluginName = "tablesaw-sortable",
		    initSelector = "table[data-" + pluginName + "]",
		    sortableSwitchSelector = "[data-" + pluginName + "-switch]",
		    attrs = {
			defaultCol: "data-tablesaw-sortable-default-col",
			numericCol: "data-tablesaw-sortable-numeric"
		},
		    classes = {
			head: pluginName + "-head",
			ascend: pluginName + "-ascending",
			descend: pluginName + "-descending",
			switcher: pluginName + "-switch",
			tableToolbar: 'tablesaw-toolbar',
			sortButton: pluginName + "-btn"
		},
		    methods = {
			_create: function _create(o) {
				return $(this).each(function () {
					var init = $(this).data(pluginName + "-init");
					if (init) {
						return false;
					}
					$(this).data(pluginName + "-init", true).trigger("beforecreate." + pluginName)[pluginName]("_init", o).trigger("create." + pluginName);
				});
			},
			_init: function _init() {
				var el = $(this),
				    heads,
				    $switcher;

				var addClassToTable = function addClassToTable() {
					el.addClass(pluginName);
				},
				    addClassToHeads = function addClassToHeads(h) {
					$.each(h, function (i, v) {
						$(v).addClass(classes.head);
					});
				},
				    makeHeadsActionable = function makeHeadsActionable(h, fn) {
					$.each(h, function (i, v) {
						var b = $("<button class='" + classes.sortButton + "'/>");
						b.on("click", { col: v }, fn);
						$(v).wrapInner(b);
						b.append("<span class='tablesaw-sortable-arrow'>");
					});
				},
				    clearOthers = function clearOthers(sibs) {
					$.each(sibs, function (i, v) {
						var col = $(v);
						col.removeAttr(attrs.defaultCol);
						col.removeClass(classes.ascend);
						col.removeClass(classes.descend);
					});
				},
				    headsOnAction = function headsOnAction(e) {
					if ($(e.target).is('a[href]')) {
						return;
					}

					e.stopPropagation();
					var head = $(this).parent(),
					    v = e.data.col,
					    newSortValue = heads.index(head[0]);

					clearOthers(head.siblings());
					if (head.is("." + classes.descend) || !head.is("." + classes.ascend)) {
						el[pluginName]("sortBy", v, true);
						newSortValue += '_asc';
					} else {
						el[pluginName]("sortBy", v);
						newSortValue += '_desc';
					}
					if ($switcher) {
						$switcher.find('select').val(newSortValue).trigger('refresh');
					}

					e.preventDefault();
				},
				    handleDefault = function handleDefault(heads) {
					$.each(heads, function (idx, el) {
						var $el = $(el);
						if ($el.is("[" + attrs.defaultCol + "]")) {
							if (!$el.is("." + classes.descend)) {
								$el.addClass(classes.ascend);
							}
						}
					});
				},
				    addSwitcher = function addSwitcher(heads) {
					$switcher = $('<div>').addClass(classes.switcher).addClass(classes.tableToolbar);

					var html = ['<label>' + Tablesaw.i18n.sort + ':'];

					html.push('<span class="btn"><select>');
					heads.each(function (j) {
						var $t = $(this);
						var isDefaultCol = $t.is("[" + attrs.defaultCol + "]");
						var isDescending = $t.is("." + classes.descend);

						var hasNumericAttribute = $t.is('[' + attrs.numericCol + ']');
						var numericCount = 0;
						// Check only the first four rows to see if the column is numbers.
						var numericCountMax = 5;
						$(this.cells.slice(0, numericCountMax)).each(function () {
							if (!isNaN(parseInt(getSortValue(this), 10))) {
								numericCount++;
							}
						});
						var isNumeric = numericCount === numericCountMax;
						if (!hasNumericAttribute) {
							$t.attr(attrs.numericCol, isNumeric ? "" : "false");
						}

						html.push('<option' + (isDefaultCol && !isDescending ? ' selected' : '') + ' value="' + j + '_asc">' + $t.text() + ' ' + (isNumeric ? '&#x2191;' : '(A-Z)') + '</option>');
						html.push('<option' + (isDefaultCol && isDescending ? ' selected' : '') + ' value="' + j + '_desc">' + $t.text() + ' ' + (isNumeric ? '&#x2193;' : '(Z-A)') + '</option>');
					});
					html.push('</select></span></label>');

					$switcher.html(html.join(''));

					var $toolbar = el.prev().filter('.tablesaw-bar'),
					    $firstChild = $toolbar.children().eq(0);

					if ($firstChild.length) {
						$switcher.insertBefore($firstChild);
					} else {
						$switcher.appendTo($toolbar);
					}
					$switcher.find('.btn').tablesawbtn();
					$switcher.find('select').on('change', function () {
						var val = $(this).val().split('_'),
						    head = heads.eq(val[0]);

						clearOthers(head.siblings());
						el[pluginName]('sortBy', head.get(0), val[1] === 'asc');
					});
				};

				addClassToTable();
				heads = el.find("thead th[data-" + pluginName + "-col]");
				addClassToHeads(heads);
				makeHeadsActionable(heads, headsOnAction);
				handleDefault(heads);

				if (el.is(sortableSwitchSelector)) {
					addSwitcher(heads, el.find('tbody tr:nth-child(-n+3)'));
				}
			},
			getColumnNumber: function getColumnNumber(col) {
				return $(col).prevAll().length;
			},
			getTableRows: function getTableRows() {
				return $(this).find("tbody tr");
			},
			sortRows: function sortRows(rows, colNum, ascending, col) {
				var cells, fn, sorted;
				var getCells = function getCells(rows) {
					var cells = [];
					$.each(rows, function (i, r) {
						var element = $(r).children().get(colNum);
						cells.push({
							element: element,
							cell: getSortValue(element),
							rowNum: i
						});
					});
					return cells;
				},
				    getSortFxn = function getSortFxn(ascending, forceNumeric) {
					var fn,
					    regex = /[^\-\+\d\.]/g;
					if (ascending) {
						fn = function fn(a, b) {
							if (forceNumeric) {
								return parseFloat(a.cell.replace(regex, '')) - parseFloat(b.cell.replace(regex, ''));
							} else {
								return a.cell.toLowerCase() > b.cell.toLowerCase() ? 1 : -1;
							}
						};
					} else {
						fn = function fn(a, b) {
							if (forceNumeric) {
								return parseFloat(b.cell.replace(regex, '')) - parseFloat(a.cell.replace(regex, ''));
							} else {
								return a.cell.toLowerCase() < b.cell.toLowerCase() ? 1 : -1;
							}
						};
					}
					return fn;
				},
				    applyToRows = function applyToRows(sorted, rows) {
					var newRows = [],
					    i,
					    l,
					    cur;
					for (i = 0, l = sorted.length; i < l; i++) {
						cur = sorted[i].rowNum;
						newRows.push(rows[cur]);
					}
					return newRows;
				};

				cells = getCells(rows);
				var customFn = $(col).data('tablesaw-sort');
				fn = (customFn && typeof customFn === "function" ? customFn(ascending) : false) || getSortFxn(ascending, $(col).is('[' + attrs.numericCol + ']') && !$(col).is('[' + attrs.numericCol + '="false"]'));

				sorted = cells.sort(fn);
				rows = applyToRows(sorted, rows);
				return rows;
			},
			replaceTableRows: function replaceTableRows(rows) {
				var el = $(this),
				    body = el.find("tbody");

				for (var j = 0, k = rows.length; j < k; j++) {
					body.append(rows[j]);
				}
			},
			makeColDefault: function makeColDefault(col, a) {
				var c = $(col);
				c.attr(attrs.defaultCol, "true");
				if (a) {
					c.removeClass(classes.descend);
					c.addClass(classes.ascend);
				} else {
					c.removeClass(classes.ascend);
					c.addClass(classes.descend);
				}
			},
			sortBy: function sortBy(col, ascending) {
				var el = $(this),
				    colNum,
				    rows;

				colNum = el[pluginName]("getColumnNumber", col);
				rows = el[pluginName]("getTableRows");
				rows = el[pluginName]("sortRows", rows, colNum, ascending, col);
				el[pluginName]("replaceTableRows", rows);
				el[pluginName]("makeColDefault", col, ascending);
				el.trigger("tablesaw-sorted");
			}
		};

		// Collection method.
		$.fn[pluginName] = function (arrg) {
			var args = Array.prototype.slice.call(arguments, 1),
			    returnVal;

			// if it's a method
			if (arrg && typeof arrg === "string") {
				returnVal = $.fn[pluginName].prototype[arrg].apply(this[0], args);
				return typeof returnVal !== "undefined" ? returnVal : $(this);
			}
			// check init
			if (!$(this).data(pluginName + "-active")) {
				$(this).data(pluginName + "-active", true);
				$.fn[pluginName].prototype._create.call(this, arrg);
			}
			return $(this);
		};
		// add methods
		$.extend($.fn[pluginName].prototype, methods);

		$(document).on("tablesawcreate", function (e, Tablesaw) {
			if (Tablesaw.$table.is(initSelector)) {
				Tablesaw.$table[pluginName]();
			}
		});
	})();

	(function () {

		function getSwipeConfig() {
			return $.extend({
				horizontalThreshold: 15,
				verticalThreshold: 30
			}, typeof TablesawConfig !== "undefined" ? TablesawConfig.swipe : {});
		}

		var classes = {
			// TODO duplicate class, also in tables.js
			toolbar: "tablesaw-bar",
			hideBtn: "disabled",
			persistWidths: "tablesaw-fix-persist",
			allColumnsVisible: 'tablesaw-all-cols-visible'
		};
		var attrs = {
			disableTouchEvents: "data-tablesaw-no-touch"
		};

		function createSwipeTable(tbl, $table) {

			var $btns = $("<div class='tablesaw-advance'></div>");
			var $prevBtn = $("<a href='#' class='tablesaw-nav-btn btn btn-micro left' title='Previous Column'></a>").appendTo($btns);
			var $nextBtn = $("<a href='#' class='tablesaw-nav-btn btn btn-micro right' title='Next Column'></a>").appendTo($btns);

			var $headerCells = tbl._getPrimaryHeaders();
			var $headerCellsNoPersist = $headerCells.not('[data-tablesaw-priority="persist"]');
			var headerWidths = [];
			var $head = $(document.head || 'head');
			var tableId = $table.attr('id');

			if (!$headerCells.length) {
				throw new Error("tablesaw swipe: no header cells found. Are you using <th> inside of <thead>?");
			}

			$table.addClass("tablesaw-swipe");

			// Calculate initial widths
			$headerCells.each(function () {
				var width = this.offsetWidth;
				headerWidths.push(width);
			});

			$btns.appendTo($table.prev().filter('.tablesaw-bar'));

			if (!tableId) {
				tableId = 'tableswipe-' + Math.round(Math.random() * 10000);
				$table.attr('id', tableId);
			}

			function $getCells(headerCell) {
				return $(headerCell.cells).add(headerCell);
			}

			function showColumn(headerCell) {
				$getCells(headerCell).removeClass('tablesaw-cell-hidden');
			}

			function hideColumn(headerCell) {
				$getCells(headerCell).addClass('tablesaw-cell-hidden');
			}

			function persistColumn(headerCell) {
				$getCells(headerCell).addClass('tablesaw-cell-persist');
			}

			function isPersistent(headerCell) {
				return $(headerCell).is('[data-tablesaw-priority="persist"]');
			}

			function unmaintainWidths() {
				$table.removeClass(classes.persistWidths);
				$('#' + tableId + '-persist').remove();
			}

			function maintainWidths() {
				var prefix = '#' + tableId + '.tablesaw-swipe ',
				    styles = [],
				    tableWidth = $table.width(),
				    hash = [],
				    newHash;

				// save persistent column widths (as long as they take up less than 75% of table width)
				$headerCells.each(function (index) {
					var width;
					if (isPersistent(this)) {
						width = this.offsetWidth;

						if (width < tableWidth * 0.75) {
							hash.push(index + '-' + width);
							styles.push(prefix + ' .tablesaw-cell-persist:nth-child(' + (index + 1) + ') { width: ' + width + 'px; }');
						}
					}
				});
				newHash = hash.join('_');

				if (styles.length) {
					$table.addClass(classes.persistWidths);
					var $style = $('#' + tableId + '-persist');
					// If style element not yet added OR if the widths have changed
					if (!$style.length || $style.data('tablesaw-hash') !== newHash) {
						// Remove existing
						$style.remove();

						$('<style>' + styles.join("\n") + '</style>').attr('id', tableId + '-persist').data('tablesaw-hash', newHash).appendTo($head);
					}
				}
			}

			function getNext() {
				var next = [],
				    checkFound;

				$headerCellsNoPersist.each(function (i) {
					var $t = $(this),
					    isHidden = $t.css("display") === "none" || $t.is(".tablesaw-cell-hidden");

					if (!isHidden && !checkFound) {
						checkFound = true;
						next[0] = i;
					} else if (isHidden && checkFound) {
						next[1] = i;

						return false;
					}
				});

				return next;
			}

			function getPrev() {
				var next = getNext();
				return [next[1] - 1, next[0] - 1];
			}

			function nextpair(fwd) {
				return fwd ? getNext() : getPrev();
			}

			function canAdvance(pair) {
				return pair[1] > -1 && pair[1] < $headerCellsNoPersist.length;
			}

			function matchesMedia() {
				var matchMedia = $table.attr("data-tablesaw-swipe-media");
				return !matchMedia || "matchMedia" in win && win.matchMedia(matchMedia).matches;
			}

			function fakeBreakpoints() {
				if (!matchesMedia()) {
					return;
				}

				var containerWidth = $table.parent().width(),
				    persist = [],
				    sum = 0,
				    sums = [],
				    visibleNonPersistantCount = $headerCells.length;

				$headerCells.each(function (index) {
					var $t = $(this),
					    isPersist = $t.is('[data-tablesaw-priority="persist"]');

					persist.push(isPersist);
					sum += headerWidths[index];
					sums.push(sum);

					// is persistent or is hidden
					if (isPersist || sum > containerWidth) {
						visibleNonPersistantCount--;
					}
				});

				// We need at least one column to swipe.
				var needsNonPersistentColumn = visibleNonPersistantCount === 0;

				$headerCells.each(function (index) {
					if (persist[index]) {

						// for visual box-shadow
						persistColumn(this);
						return;
					}

					if (sums[index] <= containerWidth || needsNonPersistentColumn) {
						needsNonPersistentColumn = false;
						showColumn(this);
					} else {
						hideColumn(this);
					}
				});

				unmaintainWidths();
				$table.trigger('tablesawcolumns');
			}

			function advance(fwd) {
				var pair = nextpair(fwd);
				if (canAdvance(pair)) {
					if (isNaN(pair[0])) {
						if (fwd) {
							pair[0] = 0;
						} else {
							pair[0] = $headerCellsNoPersist.length - 1;
						}
					}

					maintainWidths();

					hideColumn($headerCellsNoPersist.get(pair[0]));
					showColumn($headerCellsNoPersist.get(pair[1]));

					$table.trigger('tablesawcolumns');
				}
			}

			$prevBtn.add($nextBtn).on("click", function (e) {
				advance(!!$(e.target).closest($nextBtn).length);
				e.preventDefault();
			});

			function getCoord(event, key) {
				return (event.touches || event.originalEvent.touches)[0][key];
			}

			if (!$table.is("[" + attrs.disableTouchEvents + "]")) {

				$table.on("touchstart.swipetoggle", function (e) {
					var originX = getCoord(e, 'pageX'),
					    originY = getCoord(e, 'pageY'),
					    x,
					    y;

					$(win).off("resize", fakeBreakpoints);

					$(this).on("touchmove", function (e) {
						x = getCoord(e, 'pageX');
						y = getCoord(e, 'pageY');
						var cfg = getSwipeConfig();
						if (Math.abs(x - originX) > cfg.horizontalThreshold && Math.abs(y - originY) < cfg.verticalThreshold) {
							e.preventDefault();
						}
					}).on("touchend.swipetoggle", function () {
						var cfg = getSwipeConfig();
						if (Math.abs(y - originY) < cfg.verticalThreshold) {
							if (x - originX < -1 * cfg.horizontalThreshold) {
								advance(true);
							}
							if (x - originX > cfg.horizontalThreshold) {
								advance(false);
							}
						}

						window.setTimeout(function () {
							$(win).on("resize", fakeBreakpoints);
						}, 300);
						$(this).off("touchmove touchend");
					});
				});
			}

			$table.on("tablesawcolumns.swipetoggle", function () {
				var canGoPrev = canAdvance(getPrev());
				var canGoNext = canAdvance(getNext());
				$prevBtn[canGoPrev ? "removeClass" : "addClass"](classes.hideBtn);
				$nextBtn[canGoNext ? "removeClass" : "addClass"](classes.hideBtn);

				$prevBtn.closest("." + classes.toolbar)[!canGoPrev && !canGoNext ? 'addClass' : 'removeClass'](classes.allColumnsVisible);
			}).on("tablesawnext.swipetoggle", function () {
				advance(true);
			}).on("tablesawprev.swipetoggle", function () {
				advance(false);
			}).on("tablesawdestroy.swipetoggle", function () {
				var $t = $(this);

				$t.removeClass('tablesaw-swipe');
				$t.prev().filter('.tablesaw-bar').find('.tablesaw-advance').remove();
				$(win).off("resize", fakeBreakpoints);

				$t.off(".swipetoggle");
			}).on("tablesawrefresh", function () {
				// manual refresh
				headerWidths = [];
				$headerCells.each(function () {
					var width = this.offsetWidth;
					headerWidths.push(width);
				});

				fakeBreakpoints();
			});

			fakeBreakpoints();
			$(win).on("resize", fakeBreakpoints);
		}

		// on tablecreate, init
		$(document).on("tablesawcreate", function (e, tablesaw) {
			if (tablesaw.mode === 'swipe') {
				createSwipeTable(tablesaw, tablesaw.$table);
			}
		});
	})();

	;(function () {

		var MiniMap = {
			attr: {
				init: 'data-tablesaw-minimap'
			}
		};

		function createMiniMap($table) {

			var $btns = $('<div class="tablesaw-advance minimap">'),
			    $dotNav = $('<ul class="tablesaw-advance-dots">').appendTo($btns),
			    hideDot = 'tablesaw-advance-dots-hide',
			    $headerCells = $table.find('thead th');

			// populate dots
			$headerCells.each(function () {
				$dotNav.append('<li><i></i></li>');
			});

			$btns.appendTo($table.prev().filter('.tablesaw-bar'));

			function showMinimap($table) {
				var mq = $table.attr(MiniMap.attr.init);
				return !mq || win.matchMedia && win.matchMedia(mq).matches;
			}

			function showHideNav() {
				if (!showMinimap($table)) {
					$btns.css("display", "none");
					return;
				}
				$btns.css("display", "block");

				// show/hide dots
				var dots = $dotNav.find("li").removeClass(hideDot);
				$table.find("thead th").each(function (i) {
					if ($(this).css("display") === "none") {
						dots.eq(i).addClass(hideDot);
					}
				});
			}

			// run on init and resize
			showHideNav();
			$(win).on("resize", showHideNav);

			$table.on("tablesawcolumns.minimap", function () {
				showHideNav();
			}).on("tablesawdestroy.minimap", function () {
				var $t = $(this);

				$t.prev().filter('.tablesaw-bar').find('.tablesaw-advance').remove();
				$(win).off("resize", showHideNav);

				$t.off(".minimap");
			});
		}

		// on tablecreate, init
		$(document).on("tablesawcreate", function (e, tablesaw) {

			if ((tablesaw.mode === 'swipe' || tablesaw.mode === 'columntoggle') && tablesaw.$table.is('[ ' + MiniMap.attr.init + ']')) {
				createMiniMap(tablesaw.$table);
			}
		});
	})();

	;(function () {

		var S = {
			selectors: {
				init: 'table[data-tablesaw-mode-switch]'
			},
			attributes: {
				excludeMode: 'data-tablesaw-mode-exclude'
			},
			classes: {
				main: 'tablesaw-modeswitch',
				toolbar: 'tablesaw-toolbar'
			},
			modes: ['stack', 'swipe', 'columntoggle'],
			init: function init(table) {
				var $table = $(table),
				    ignoreMode = $table.attr(S.attributes.excludeMode),
				    $toolbar = $table.prev().filter('.tablesaw-bar'),
				    modeVal = '',
				    $switcher = $('<div>').addClass(S.classes.main + ' ' + S.classes.toolbar);

				var html = ['<label>' + Tablesaw.i18n.columns + ':'],
				    dataMode = $table.attr('data-tablesaw-mode'),
				    isSelected;

				html.push('<span class="btn"><select>');
				for (var j = 0, k = S.modes.length; j < k; j++) {
					if (ignoreMode && ignoreMode.toLowerCase() === S.modes[j]) {
						continue;
					}

					isSelected = dataMode === S.modes[j];

					if (isSelected) {
						modeVal = S.modes[j];
					}

					html.push('<option' + (isSelected ? ' selected' : '') + ' value="' + S.modes[j] + '">' + Tablesaw.i18n.modes[j] + '</option>');
				}
				html.push('</select></span></label>');

				$switcher.html(html.join(''));

				var $otherToolbarItems = $toolbar.find('.tablesaw-advance').eq(0);
				if ($otherToolbarItems.length) {
					$switcher.insertBefore($otherToolbarItems);
				} else {
					$switcher.appendTo($toolbar);
				}

				$switcher.find('.btn').tablesawbtn();
				$switcher.find('select').on('change', S.onModeChange);
			},
			onModeChange: function onModeChange() {
				var $t = $(this),
				    $switcher = $t.closest('.' + S.classes.main),
				    $table = $t.closest('.tablesaw-bar').next().eq(0),
				    val = $t.val();

				$switcher.remove();
				$table.data('tablesaw').destroy();

				$table.attr('data-tablesaw-mode', val);
				$table.tablesaw();
			}
		};

		$(win.document).on("tablesawcreate", function (e, Tablesaw) {
			if (Tablesaw.$table.is(S.selectors.init)) {
				S.init(Tablesaw.table);
			}
		});
	})();
});

/***/ })

});
//# sourceMappingURL=4.chunk.js.map