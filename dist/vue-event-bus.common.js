/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) // removed by dead control flow
{ var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// ./src/vue-event-bus.js
class VueEventBus {

    constructor() {
        this.bus = new Map();
    }

    fire(events, ...data) {
        this.wrapper(
            events,
            () => this.emit(events, ...data),
            value => this.emit(value, ...data)
        );
    }

    listen(events, callback) {
        this.wrapper(
            events,
            () => this.on(events, callback),
            value => this.on(value, callback)
        );
    }

    unlisten(events, callback) {
        this.wrapper(
            events,
            () => this.off(events, callback),
            value => this.off(value, callback)
        );
    }

    emit(event, ...data) {
        const callbacks = this.bus.get(event);
        if (callbacks) {
            callbacks.forEach(callback => callback(...data));
        }
    }

    on(event, callback) {
        if (!this.bus.has(event)) {
            this.bus.set(event, []);
        }
        this.bus.get(event).push(callback);
    }

    off(event, callback) {
        const callbacks = this.bus.get(event);
        if (callbacks) {
            if (callback) {
                const index = callbacks.indexOf(callback);
                if (index > -1) {
                    callbacks.splice(index, 1);
                }
            } else {
                this.bus.delete(event);
            }
        }
    }

    wrapper(events, ifNotArray, otherwise) {
        if (!Array.isArray(events)) {
            ifNotArray();
            return;
        }

        for (const value of events) {
            otherwise(value);
        }
    }

}
;// ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (VueEventBus);


module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=vue-event-bus.common.js.map