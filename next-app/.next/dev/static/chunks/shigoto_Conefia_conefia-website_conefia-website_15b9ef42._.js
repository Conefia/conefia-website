(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/bind.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>bind
]);
'use strict';
function bind(fn, thisArg) {
    return function wrap() {
        return fn.apply(thisArg, arguments);
    };
}
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/next-app/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$bind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/bind.js [app-client] (ecmascript)");
'use strict';
;
// utils is a library of generic helper functions non-specific to axios
const { toString } = Object.prototype;
const { getPrototypeOf } = Object;
const { iterator, toStringTag } = Symbol;
const kindOf = ((cache)=>(thing)=>{
        const str = toString.call(thing);
        return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
    })(Object.create(null));
const kindOfTest = (type)=>{
    type = type.toLowerCase();
    return (thing)=>kindOf(thing) === type;
};
const typeOfTest = (type)=>(thing)=>typeof thing === type;
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */ const { isArray } = Array;
/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */ const isUndefined = typeOfTest('undefined');
/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */ function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */ const isArrayBuffer = kindOfTest('ArrayBuffer');
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */ function isArrayBufferView(val) {
    let result;
    if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
        result = ArrayBuffer.isView(val);
    } else {
        result = val && val.buffer && isArrayBuffer(val.buffer);
    }
    return result;
}
/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */ const isString = typeOfTest('string');
/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */ const isFunction = typeOfTest('function');
/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */ const isNumber = typeOfTest('number');
/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */ const isObject = (thing)=>thing !== null && typeof thing === 'object';
/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */ const isBoolean = (thing)=>thing === true || thing === false;
/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */ const isPlainObject = (val)=>{
    if (kindOf(val) !== 'object') {
        return false;
    }
    const prototype = getPrototypeOf(val);
    return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(toStringTag in val) && !(iterator in val);
};
/**
 * Determine if a value is an empty object (safely handles Buffers)
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an empty object, otherwise false
 */ const isEmptyObject = (val)=>{
    // Early return for non-objects or Buffers to prevent RangeError
    if (!isObject(val) || isBuffer(val)) {
        return false;
    }
    try {
        return Object.keys(val).length === 0 && Object.getPrototypeOf(val) === Object.prototype;
    } catch (e) {
        // Fallback for any other objects that might cause RangeError with Object.keys()
        return false;
    }
};
/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */ const isDate = kindOfTest('Date');
/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */ const isFile = kindOfTest('File');
/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */ const isBlob = kindOfTest('Blob');
/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */ const isFileList = kindOfTest('FileList');
/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */ const isStream = (val)=>isObject(val) && isFunction(val.pipe);
/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */ const isFormData = (thing)=>{
    let kind;
    return thing && (typeof FormData === 'function' && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === 'formdata' || kind === 'object' && isFunction(thing.toString) && thing.toString() === '[object FormData]'));
};
/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */ const isURLSearchParams = kindOfTest('URLSearchParams');
const [isReadableStream, isRequest, isResponse, isHeaders] = [
    'ReadableStream',
    'Request',
    'Response',
    'Headers'
].map(kindOfTest);
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */ const trim = (str)=>str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */ function forEach(obj, fn, { allOwnKeys = false } = {}) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === 'undefined') {
        return;
    }
    let i;
    let l;
    // Force an array if not already something iterable
    if (typeof obj !== 'object') {
        /*eslint no-param-reassign:0*/ obj = [
            obj
        ];
    }
    if (isArray(obj)) {
        // Iterate over array values
        for(i = 0, l = obj.length; i < l; i++){
            fn.call(null, obj[i], i, obj);
        }
    } else {
        // Buffer check
        if (isBuffer(obj)) {
            return;
        }
        // Iterate over object keys
        const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
        const len = keys.length;
        let key;
        for(i = 0; i < len; i++){
            key = keys[i];
            fn.call(null, obj[key], key, obj);
        }
    }
}
function findKey(obj, key) {
    if (isBuffer(obj)) {
        return null;
    }
    key = key.toLowerCase();
    const keys = Object.keys(obj);
    let i = keys.length;
    let _key;
    while(i-- > 0){
        _key = keys[i];
        if (key === _key.toLowerCase()) {
            return _key;
        }
    }
    return null;
}
const _global = (()=>{
    /*eslint no-undef:0*/ if (typeof globalThis !== "undefined") return globalThis;
    return typeof self !== "undefined" ? self : typeof window !== 'undefined' ? window : /*TURBOPACK member replacement*/ __turbopack_context__.g;
})();
const isContextDefined = (context)=>!isUndefined(context) && context !== _global;
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */ function merge() {
    const { caseless, skipUndefined } = isContextDefined(this) && this || {};
    const result = {};
    const assignValue = (val, key)=>{
        const targetKey = caseless && findKey(result, key) || key;
        if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
            result[targetKey] = merge(result[targetKey], val);
        } else if (isPlainObject(val)) {
            result[targetKey] = merge({}, val);
        } else if (isArray(val)) {
            result[targetKey] = val.slice();
        } else if (!skipUndefined || !isUndefined(val)) {
            result[targetKey] = val;
        }
    };
    for(let i = 0, l = arguments.length; i < l; i++){
        arguments[i] && forEach(arguments[i], assignValue);
    }
    return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */ const extend = (a, b, thisArg, { allOwnKeys } = {})=>{
    forEach(b, (val, key)=>{
        if (thisArg && isFunction(val)) {
            a[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$bind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(val, thisArg);
        } else {
            a[key] = val;
        }
    }, {
        allOwnKeys
    });
    return a;
};
/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */ const stripBOM = (content)=>{
    if (content.charCodeAt(0) === 0xFEFF) {
        content = content.slice(1);
    }
    return content;
};
/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */ const inherits = (constructor, superConstructor, props, descriptors)=>{
    constructor.prototype = Object.create(superConstructor.prototype, descriptors);
    constructor.prototype.constructor = constructor;
    Object.defineProperty(constructor, 'super', {
        value: superConstructor.prototype
    });
    props && Object.assign(constructor.prototype, props);
};
/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */ const toFlatObject = (sourceObj, destObj, filter, propFilter)=>{
    let props;
    let i;
    let prop;
    const merged = {};
    destObj = destObj || {};
    // eslint-disable-next-line no-eq-null,eqeqeq
    if (sourceObj == null) return destObj;
    do {
        props = Object.getOwnPropertyNames(sourceObj);
        i = props.length;
        while(i-- > 0){
            prop = props[i];
            if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
                destObj[prop] = sourceObj[prop];
                merged[prop] = true;
            }
        }
        sourceObj = filter !== false && getPrototypeOf(sourceObj);
    }while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype)
    return destObj;
};
/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */ const endsWith = (str, searchString, position)=>{
    str = String(str);
    if (position === undefined || position > str.length) {
        position = str.length;
    }
    position -= searchString.length;
    const lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
};
/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */ const toArray = (thing)=>{
    if (!thing) return null;
    if (isArray(thing)) return thing;
    let i = thing.length;
    if (!isNumber(i)) return null;
    const arr = new Array(i);
    while(i-- > 0){
        arr[i] = thing[i];
    }
    return arr;
};
/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */ // eslint-disable-next-line func-names
const isTypedArray = ((TypedArray)=>{
    // eslint-disable-next-line func-names
    return (thing)=>{
        return TypedArray && thing instanceof TypedArray;
    };
})(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));
/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */ const forEachEntry = (obj, fn)=>{
    const generator = obj && obj[iterator];
    const _iterator = generator.call(obj);
    let result;
    while((result = _iterator.next()) && !result.done){
        const pair = result.value;
        fn.call(obj, pair[0], pair[1]);
    }
};
/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */ const matchAll = (regExp, str)=>{
    let matches;
    const arr = [];
    while((matches = regExp.exec(str)) !== null){
        arr.push(matches);
    }
    return arr;
};
/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */ const isHTMLForm = kindOfTest('HTMLFormElement');
const toCamelCase = (str)=>{
    return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
        return p1.toUpperCase() + p2;
    });
};
/* Creating a function that will check if an object has a property. */ const hasOwnProperty = (({ hasOwnProperty })=>(obj, prop)=>hasOwnProperty.call(obj, prop))(Object.prototype);
/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */ const isRegExp = kindOfTest('RegExp');
const reduceDescriptors = (obj, reducer)=>{
    const descriptors = Object.getOwnPropertyDescriptors(obj);
    const reducedDescriptors = {};
    forEach(descriptors, (descriptor, name)=>{
        let ret;
        if ((ret = reducer(descriptor, name, obj)) !== false) {
            reducedDescriptors[name] = ret || descriptor;
        }
    });
    Object.defineProperties(obj, reducedDescriptors);
};
/**
 * Makes all methods read-only
 * @param {Object} obj
 */ const freezeMethods = (obj)=>{
    reduceDescriptors(obj, (descriptor, name)=>{
        // skip restricted props in strict mode
        if (isFunction(obj) && [
            'arguments',
            'caller',
            'callee'
        ].indexOf(name) !== -1) {
            return false;
        }
        const value = obj[name];
        if (!isFunction(value)) return;
        descriptor.enumerable = false;
        if ('writable' in descriptor) {
            descriptor.writable = false;
            return;
        }
        if (!descriptor.set) {
            descriptor.set = ()=>{
                throw Error('Can not rewrite read-only method \'' + name + '\'');
            };
        }
    });
};
const toObjectSet = (arrayOrString, delimiter)=>{
    const obj = {};
    const define = (arr)=>{
        arr.forEach((value)=>{
            obj[value] = true;
        });
    };
    isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
    return obj;
};
const noop = ()=>{};
const toFiniteNumber = (value, defaultValue)=>{
    return value != null && Number.isFinite(value = +value) ? value : defaultValue;
};
/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */ function isSpecCompliantForm(thing) {
    return !!(thing && isFunction(thing.append) && thing[toStringTag] === 'FormData' && thing[iterator]);
}
const toJSONObject = (obj)=>{
    const stack = new Array(10);
    const visit = (source, i)=>{
        if (isObject(source)) {
            if (stack.indexOf(source) >= 0) {
                return;
            }
            //Buffer check
            if (isBuffer(source)) {
                return source;
            }
            if (!('toJSON' in source)) {
                stack[i] = source;
                const target = isArray(source) ? [] : {};
                forEach(source, (value, key)=>{
                    const reducedValue = visit(value, i + 1);
                    !isUndefined(reducedValue) && (target[key] = reducedValue);
                });
                stack[i] = undefined;
                return target;
            }
        }
        return source;
    };
    return visit(obj, 0);
};
const isAsyncFn = kindOfTest('AsyncFunction');
const isThenable = (thing)=>thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
// original code
// https://github.com/DigitalBrainJS/AxiosPromise/blob/16deab13710ec09779922131f3fa5954320f83ab/lib/utils.js#L11-L34
const _setImmediate = ((setImmediateSupported, postMessageSupported)=>{
    if (setImmediateSupported) {
        return setImmediate;
    }
    return postMessageSupported ? ((token, callbacks)=>{
        _global.addEventListener("message", ({ source, data })=>{
            if (source === _global && data === token) {
                callbacks.length && callbacks.shift()();
            }
        }, false);
        return (cb)=>{
            callbacks.push(cb);
            _global.postMessage(token, "*");
        };
    })(`axios@${Math.random()}`, []) : (cb)=>setTimeout(cb);
})(typeof setImmediate === 'function', isFunction(_global.postMessage));
const asap = typeof queueMicrotask !== 'undefined' ? queueMicrotask.bind(_global) : typeof __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== 'undefined' && __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick || _setImmediate;
// *********************
const isIterable = (thing)=>thing != null && isFunction(thing[iterator]);
const __TURBOPACK__default__export__ = {
    isArray,
    isArrayBuffer,
    isBuffer,
    isFormData,
    isArrayBufferView,
    isString,
    isNumber,
    isBoolean,
    isObject,
    isPlainObject,
    isEmptyObject,
    isReadableStream,
    isRequest,
    isResponse,
    isHeaders,
    isUndefined,
    isDate,
    isFile,
    isBlob,
    isRegExp,
    isFunction,
    isStream,
    isURLSearchParams,
    isTypedArray,
    isFileList,
    forEach,
    merge,
    extend,
    trim,
    stripBOM,
    inherits,
    toFlatObject,
    kindOf,
    kindOfTest,
    endsWith,
    toArray,
    forEachEntry,
    matchAll,
    isHTMLForm,
    hasOwnProperty,
    hasOwnProp: hasOwnProperty,
    reduceDescriptors,
    freezeMethods,
    toObjectSet,
    toCamelCase,
    noop,
    toFiniteNumber,
    findKey,
    global: _global,
    isContextDefined,
    isSpecCompliantForm,
    toJSONObject,
    isAsyncFn,
    isThenable,
    setImmediate: _setImmediate,
    asap,
    isIterable
};
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/next-app/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

(function() {
    var e = {
        675: function(e, r) {
            "use strict";
            r.byteLength = byteLength;
            r.toByteArray = toByteArray;
            r.fromByteArray = fromByteArray;
            var t = [];
            var f = [];
            var n = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
            var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            for(var o = 0, u = i.length; o < u; ++o){
                t[o] = i[o];
                f[i.charCodeAt(o)] = o;
            }
            f["-".charCodeAt(0)] = 62;
            f["_".charCodeAt(0)] = 63;
            function getLens(e) {
                var r = e.length;
                if (r % 4 > 0) {
                    throw new Error("Invalid string. Length must be a multiple of 4");
                }
                var t = e.indexOf("=");
                if (t === -1) t = r;
                var f = t === r ? 0 : 4 - t % 4;
                return [
                    t,
                    f
                ];
            }
            function byteLength(e) {
                var r = getLens(e);
                var t = r[0];
                var f = r[1];
                return (t + f) * 3 / 4 - f;
            }
            function _byteLength(e, r, t) {
                return (r + t) * 3 / 4 - t;
            }
            function toByteArray(e) {
                var r;
                var t = getLens(e);
                var i = t[0];
                var o = t[1];
                var u = new n(_byteLength(e, i, o));
                var a = 0;
                var s = o > 0 ? i - 4 : i;
                var h;
                for(h = 0; h < s; h += 4){
                    r = f[e.charCodeAt(h)] << 18 | f[e.charCodeAt(h + 1)] << 12 | f[e.charCodeAt(h + 2)] << 6 | f[e.charCodeAt(h + 3)];
                    u[a++] = r >> 16 & 255;
                    u[a++] = r >> 8 & 255;
                    u[a++] = r & 255;
                }
                if (o === 2) {
                    r = f[e.charCodeAt(h)] << 2 | f[e.charCodeAt(h + 1)] >> 4;
                    u[a++] = r & 255;
                }
                if (o === 1) {
                    r = f[e.charCodeAt(h)] << 10 | f[e.charCodeAt(h + 1)] << 4 | f[e.charCodeAt(h + 2)] >> 2;
                    u[a++] = r >> 8 & 255;
                    u[a++] = r & 255;
                }
                return u;
            }
            function tripletToBase64(e) {
                return t[e >> 18 & 63] + t[e >> 12 & 63] + t[e >> 6 & 63] + t[e & 63];
            }
            function encodeChunk(e, r, t) {
                var f;
                var n = [];
                for(var i = r; i < t; i += 3){
                    f = (e[i] << 16 & 16711680) + (e[i + 1] << 8 & 65280) + (e[i + 2] & 255);
                    n.push(tripletToBase64(f));
                }
                return n.join("");
            }
            function fromByteArray(e) {
                var r;
                var f = e.length;
                var n = f % 3;
                var i = [];
                var o = 16383;
                for(var u = 0, a = f - n; u < a; u += o){
                    i.push(encodeChunk(e, u, u + o > a ? a : u + o));
                }
                if (n === 1) {
                    r = e[f - 1];
                    i.push(t[r >> 2] + t[r << 4 & 63] + "==");
                } else if (n === 2) {
                    r = (e[f - 2] << 8) + e[f - 1];
                    i.push(t[r >> 10] + t[r >> 4 & 63] + t[r << 2 & 63] + "=");
                }
                return i.join("");
            }
        },
        72: function(e, r, t) {
            "use strict";
            /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ var f = t(675);
            var n = t(783);
            var i = typeof Symbol === "function" && typeof Symbol.for === "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
            r.Buffer = Buffer;
            r.SlowBuffer = SlowBuffer;
            r.INSPECT_MAX_BYTES = 50;
            var o = 2147483647;
            r.kMaxLength = o;
            Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
            if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
                console.error("This browser lacks typed array (Uint8Array) support which is required by " + "`buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
            }
            function typedArraySupport() {
                try {
                    var e = new Uint8Array(1);
                    var r = {
                        foo: function() {
                            return 42;
                        }
                    };
                    Object.setPrototypeOf(r, Uint8Array.prototype);
                    Object.setPrototypeOf(e, r);
                    return e.foo() === 42;
                } catch (e) {
                    return false;
                }
            }
            Object.defineProperty(Buffer.prototype, "parent", {
                enumerable: true,
                get: function() {
                    if (!Buffer.isBuffer(this)) return undefined;
                    return this.buffer;
                }
            });
            Object.defineProperty(Buffer.prototype, "offset", {
                enumerable: true,
                get: function() {
                    if (!Buffer.isBuffer(this)) return undefined;
                    return this.byteOffset;
                }
            });
            function createBuffer(e) {
                if (e > o) {
                    throw new RangeError('The value "' + e + '" is invalid for option "size"');
                }
                var r = new Uint8Array(e);
                Object.setPrototypeOf(r, Buffer.prototype);
                return r;
            }
            function Buffer(e, r, t) {
                if (typeof e === "number") {
                    if (typeof r === "string") {
                        throw new TypeError('The "string" argument must be of type string. Received type number');
                    }
                    return allocUnsafe(e);
                }
                return from(e, r, t);
            }
            Buffer.poolSize = 8192;
            function from(e, r, t) {
                if (typeof e === "string") {
                    return fromString(e, r);
                }
                if (ArrayBuffer.isView(e)) {
                    return fromArrayLike(e);
                }
                if (e == null) {
                    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, " + "or Array-like Object. Received type " + typeof e);
                }
                if (isInstance(e, ArrayBuffer) || e && isInstance(e.buffer, ArrayBuffer)) {
                    return fromArrayBuffer(e, r, t);
                }
                if (typeof SharedArrayBuffer !== "undefined" && (isInstance(e, SharedArrayBuffer) || e && isInstance(e.buffer, SharedArrayBuffer))) {
                    return fromArrayBuffer(e, r, t);
                }
                if (typeof e === "number") {
                    throw new TypeError('The "value" argument must not be of type number. Received type number');
                }
                var f = e.valueOf && e.valueOf();
                if (f != null && f !== e) {
                    return Buffer.from(f, r, t);
                }
                var n = fromObject(e);
                if (n) return n;
                if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] === "function") {
                    return Buffer.from(e[Symbol.toPrimitive]("string"), r, t);
                }
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, " + "or Array-like Object. Received type " + typeof e);
            }
            Buffer.from = function(e, r, t) {
                return from(e, r, t);
            };
            Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
            Object.setPrototypeOf(Buffer, Uint8Array);
            function assertSize(e) {
                if (typeof e !== "number") {
                    throw new TypeError('"size" argument must be of type number');
                } else if (e < 0) {
                    throw new RangeError('The value "' + e + '" is invalid for option "size"');
                }
            }
            function alloc(e, r, t) {
                assertSize(e);
                if (e <= 0) {
                    return createBuffer(e);
                }
                if (r !== undefined) {
                    return typeof t === "string" ? createBuffer(e).fill(r, t) : createBuffer(e).fill(r);
                }
                return createBuffer(e);
            }
            Buffer.alloc = function(e, r, t) {
                return alloc(e, r, t);
            };
            function allocUnsafe(e) {
                assertSize(e);
                return createBuffer(e < 0 ? 0 : checked(e) | 0);
            }
            Buffer.allocUnsafe = function(e) {
                return allocUnsafe(e);
            };
            Buffer.allocUnsafeSlow = function(e) {
                return allocUnsafe(e);
            };
            function fromString(e, r) {
                if (typeof r !== "string" || r === "") {
                    r = "utf8";
                }
                if (!Buffer.isEncoding(r)) {
                    throw new TypeError("Unknown encoding: " + r);
                }
                var t = byteLength(e, r) | 0;
                var f = createBuffer(t);
                var n = f.write(e, r);
                if (n !== t) {
                    f = f.slice(0, n);
                }
                return f;
            }
            function fromArrayLike(e) {
                var r = e.length < 0 ? 0 : checked(e.length) | 0;
                var t = createBuffer(r);
                for(var f = 0; f < r; f += 1){
                    t[f] = e[f] & 255;
                }
                return t;
            }
            function fromArrayBuffer(e, r, t) {
                if (r < 0 || e.byteLength < r) {
                    throw new RangeError('"offset" is outside of buffer bounds');
                }
                if (e.byteLength < r + (t || 0)) {
                    throw new RangeError('"length" is outside of buffer bounds');
                }
                var f;
                if (r === undefined && t === undefined) {
                    f = new Uint8Array(e);
                } else if (t === undefined) {
                    f = new Uint8Array(e, r);
                } else {
                    f = new Uint8Array(e, r, t);
                }
                Object.setPrototypeOf(f, Buffer.prototype);
                return f;
            }
            function fromObject(e) {
                if (Buffer.isBuffer(e)) {
                    var r = checked(e.length) | 0;
                    var t = createBuffer(r);
                    if (t.length === 0) {
                        return t;
                    }
                    e.copy(t, 0, 0, r);
                    return t;
                }
                if (e.length !== undefined) {
                    if (typeof e.length !== "number" || numberIsNaN(e.length)) {
                        return createBuffer(0);
                    }
                    return fromArrayLike(e);
                }
                if (e.type === "Buffer" && Array.isArray(e.data)) {
                    return fromArrayLike(e.data);
                }
            }
            function checked(e) {
                if (e >= o) {
                    throw new RangeError("Attempt to allocate Buffer larger than maximum " + "size: 0x" + o.toString(16) + " bytes");
                }
                return e | 0;
            }
            function SlowBuffer(e) {
                if (+e != e) {
                    e = 0;
                }
                return Buffer.alloc(+e);
            }
            Buffer.isBuffer = function isBuffer(e) {
                return e != null && e._isBuffer === true && e !== Buffer.prototype;
            };
            Buffer.compare = function compare(e, r) {
                if (isInstance(e, Uint8Array)) e = Buffer.from(e, e.offset, e.byteLength);
                if (isInstance(r, Uint8Array)) r = Buffer.from(r, r.offset, r.byteLength);
                if (!Buffer.isBuffer(e) || !Buffer.isBuffer(r)) {
                    throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                }
                if (e === r) return 0;
                var t = e.length;
                var f = r.length;
                for(var n = 0, i = Math.min(t, f); n < i; ++n){
                    if (e[n] !== r[n]) {
                        t = e[n];
                        f = r[n];
                        break;
                    }
                }
                if (t < f) return -1;
                if (f < t) return 1;
                return 0;
            };
            Buffer.isEncoding = function isEncoding(e) {
                switch(String(e).toLowerCase()){
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return true;
                    default:
                        return false;
                }
            };
            Buffer.concat = function concat(e, r) {
                if (!Array.isArray(e)) {
                    throw new TypeError('"list" argument must be an Array of Buffers');
                }
                if (e.length === 0) {
                    return Buffer.alloc(0);
                }
                var t;
                if (r === undefined) {
                    r = 0;
                    for(t = 0; t < e.length; ++t){
                        r += e[t].length;
                    }
                }
                var f = Buffer.allocUnsafe(r);
                var n = 0;
                for(t = 0; t < e.length; ++t){
                    var i = e[t];
                    if (isInstance(i, Uint8Array)) {
                        i = Buffer.from(i);
                    }
                    if (!Buffer.isBuffer(i)) {
                        throw new TypeError('"list" argument must be an Array of Buffers');
                    }
                    i.copy(f, n);
                    n += i.length;
                }
                return f;
            };
            function byteLength(e, r) {
                if (Buffer.isBuffer(e)) {
                    return e.length;
                }
                if (ArrayBuffer.isView(e) || isInstance(e, ArrayBuffer)) {
                    return e.byteLength;
                }
                if (typeof e !== "string") {
                    throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' + "Received type " + typeof e);
                }
                var t = e.length;
                var f = arguments.length > 2 && arguments[2] === true;
                if (!f && t === 0) return 0;
                var n = false;
                for(;;){
                    switch(r){
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return t;
                        case "utf8":
                        case "utf-8":
                            return utf8ToBytes(e).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return t * 2;
                        case "hex":
                            return t >>> 1;
                        case "base64":
                            return base64ToBytes(e).length;
                        default:
                            if (n) {
                                return f ? -1 : utf8ToBytes(e).length;
                            }
                            r = ("" + r).toLowerCase();
                            n = true;
                    }
                }
            }
            Buffer.byteLength = byteLength;
            function slowToString(e, r, t) {
                var f = false;
                if (r === undefined || r < 0) {
                    r = 0;
                }
                if (r > this.length) {
                    return "";
                }
                if (t === undefined || t > this.length) {
                    t = this.length;
                }
                if (t <= 0) {
                    return "";
                }
                t >>>= 0;
                r >>>= 0;
                if (t <= r) {
                    return "";
                }
                if (!e) e = "utf8";
                while(true){
                    switch(e){
                        case "hex":
                            return hexSlice(this, r, t);
                        case "utf8":
                        case "utf-8":
                            return utf8Slice(this, r, t);
                        case "ascii":
                            return asciiSlice(this, r, t);
                        case "latin1":
                        case "binary":
                            return latin1Slice(this, r, t);
                        case "base64":
                            return base64Slice(this, r, t);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return utf16leSlice(this, r, t);
                        default:
                            if (f) throw new TypeError("Unknown encoding: " + e);
                            e = (e + "").toLowerCase();
                            f = true;
                    }
                }
            }
            Buffer.prototype._isBuffer = true;
            function swap(e, r, t) {
                var f = e[r];
                e[r] = e[t];
                e[t] = f;
            }
            Buffer.prototype.swap16 = function swap16() {
                var e = this.length;
                if (e % 2 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 16-bits");
                }
                for(var r = 0; r < e; r += 2){
                    swap(this, r, r + 1);
                }
                return this;
            };
            Buffer.prototype.swap32 = function swap32() {
                var e = this.length;
                if (e % 4 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 32-bits");
                }
                for(var r = 0; r < e; r += 4){
                    swap(this, r, r + 3);
                    swap(this, r + 1, r + 2);
                }
                return this;
            };
            Buffer.prototype.swap64 = function swap64() {
                var e = this.length;
                if (e % 8 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 64-bits");
                }
                for(var r = 0; r < e; r += 8){
                    swap(this, r, r + 7);
                    swap(this, r + 1, r + 6);
                    swap(this, r + 2, r + 5);
                    swap(this, r + 3, r + 4);
                }
                return this;
            };
            Buffer.prototype.toString = function toString() {
                var e = this.length;
                if (e === 0) return "";
                if (arguments.length === 0) return utf8Slice(this, 0, e);
                return slowToString.apply(this, arguments);
            };
            Buffer.prototype.toLocaleString = Buffer.prototype.toString;
            Buffer.prototype.equals = function equals(e) {
                if (!Buffer.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                if (this === e) return true;
                return Buffer.compare(this, e) === 0;
            };
            Buffer.prototype.inspect = function inspect() {
                var e = "";
                var t = r.INSPECT_MAX_BYTES;
                e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim();
                if (this.length > t) e += " ... ";
                return "<Buffer " + e + ">";
            };
            if (i) {
                Buffer.prototype[i] = Buffer.prototype.inspect;
            }
            Buffer.prototype.compare = function compare(e, r, t, f, n) {
                if (isInstance(e, Uint8Array)) {
                    e = Buffer.from(e, e.offset, e.byteLength);
                }
                if (!Buffer.isBuffer(e)) {
                    throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. ' + "Received type " + typeof e);
                }
                if (r === undefined) {
                    r = 0;
                }
                if (t === undefined) {
                    t = e ? e.length : 0;
                }
                if (f === undefined) {
                    f = 0;
                }
                if (n === undefined) {
                    n = this.length;
                }
                if (r < 0 || t > e.length || f < 0 || n > this.length) {
                    throw new RangeError("out of range index");
                }
                if (f >= n && r >= t) {
                    return 0;
                }
                if (f >= n) {
                    return -1;
                }
                if (r >= t) {
                    return 1;
                }
                r >>>= 0;
                t >>>= 0;
                f >>>= 0;
                n >>>= 0;
                if (this === e) return 0;
                var i = n - f;
                var o = t - r;
                var u = Math.min(i, o);
                var a = this.slice(f, n);
                var s = e.slice(r, t);
                for(var h = 0; h < u; ++h){
                    if (a[h] !== s[h]) {
                        i = a[h];
                        o = s[h];
                        break;
                    }
                }
                if (i < o) return -1;
                if (o < i) return 1;
                return 0;
            };
            function bidirectionalIndexOf(e, r, t, f, n) {
                if (e.length === 0) return -1;
                if (typeof t === "string") {
                    f = t;
                    t = 0;
                } else if (t > 2147483647) {
                    t = 2147483647;
                } else if (t < -2147483648) {
                    t = -2147483648;
                }
                t = +t;
                if (numberIsNaN(t)) {
                    t = n ? 0 : e.length - 1;
                }
                if (t < 0) t = e.length + t;
                if (t >= e.length) {
                    if (n) return -1;
                    else t = e.length - 1;
                } else if (t < 0) {
                    if (n) t = 0;
                    else return -1;
                }
                if (typeof r === "string") {
                    r = Buffer.from(r, f);
                }
                if (Buffer.isBuffer(r)) {
                    if (r.length === 0) {
                        return -1;
                    }
                    return arrayIndexOf(e, r, t, f, n);
                } else if (typeof r === "number") {
                    r = r & 255;
                    if (typeof Uint8Array.prototype.indexOf === "function") {
                        if (n) {
                            return Uint8Array.prototype.indexOf.call(e, r, t);
                        } else {
                            return Uint8Array.prototype.lastIndexOf.call(e, r, t);
                        }
                    }
                    return arrayIndexOf(e, [
                        r
                    ], t, f, n);
                }
                throw new TypeError("val must be string, number or Buffer");
            }
            function arrayIndexOf(e, r, t, f, n) {
                var i = 1;
                var o = e.length;
                var u = r.length;
                if (f !== undefined) {
                    f = String(f).toLowerCase();
                    if (f === "ucs2" || f === "ucs-2" || f === "utf16le" || f === "utf-16le") {
                        if (e.length < 2 || r.length < 2) {
                            return -1;
                        }
                        i = 2;
                        o /= 2;
                        u /= 2;
                        t /= 2;
                    }
                }
                function read(e, r) {
                    if (i === 1) {
                        return e[r];
                    } else {
                        return e.readUInt16BE(r * i);
                    }
                }
                var a;
                if (n) {
                    var s = -1;
                    for(a = t; a < o; a++){
                        if (read(e, a) === read(r, s === -1 ? 0 : a - s)) {
                            if (s === -1) s = a;
                            if (a - s + 1 === u) return s * i;
                        } else {
                            if (s !== -1) a -= a - s;
                            s = -1;
                        }
                    }
                } else {
                    if (t + u > o) t = o - u;
                    for(a = t; a >= 0; a--){
                        var h = true;
                        for(var c = 0; c < u; c++){
                            if (read(e, a + c) !== read(r, c)) {
                                h = false;
                                break;
                            }
                        }
                        if (h) return a;
                    }
                }
                return -1;
            }
            Buffer.prototype.includes = function includes(e, r, t) {
                return this.indexOf(e, r, t) !== -1;
            };
            Buffer.prototype.indexOf = function indexOf(e, r, t) {
                return bidirectionalIndexOf(this, e, r, t, true);
            };
            Buffer.prototype.lastIndexOf = function lastIndexOf(e, r, t) {
                return bidirectionalIndexOf(this, e, r, t, false);
            };
            function hexWrite(e, r, t, f) {
                t = Number(t) || 0;
                var n = e.length - t;
                if (!f) {
                    f = n;
                } else {
                    f = Number(f);
                    if (f > n) {
                        f = n;
                    }
                }
                var i = r.length;
                if (f > i / 2) {
                    f = i / 2;
                }
                for(var o = 0; o < f; ++o){
                    var u = parseInt(r.substr(o * 2, 2), 16);
                    if (numberIsNaN(u)) return o;
                    e[t + o] = u;
                }
                return o;
            }
            function utf8Write(e, r, t, f) {
                return blitBuffer(utf8ToBytes(r, e.length - t), e, t, f);
            }
            function asciiWrite(e, r, t, f) {
                return blitBuffer(asciiToBytes(r), e, t, f);
            }
            function latin1Write(e, r, t, f) {
                return asciiWrite(e, r, t, f);
            }
            function base64Write(e, r, t, f) {
                return blitBuffer(base64ToBytes(r), e, t, f);
            }
            function ucs2Write(e, r, t, f) {
                return blitBuffer(utf16leToBytes(r, e.length - t), e, t, f);
            }
            Buffer.prototype.write = function write(e, r, t, f) {
                if (r === undefined) {
                    f = "utf8";
                    t = this.length;
                    r = 0;
                } else if (t === undefined && typeof r === "string") {
                    f = r;
                    t = this.length;
                    r = 0;
                } else if (isFinite(r)) {
                    r = r >>> 0;
                    if (isFinite(t)) {
                        t = t >>> 0;
                        if (f === undefined) f = "utf8";
                    } else {
                        f = t;
                        t = undefined;
                    }
                } else {
                    throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                }
                var n = this.length - r;
                if (t === undefined || t > n) t = n;
                if (e.length > 0 && (t < 0 || r < 0) || r > this.length) {
                    throw new RangeError("Attempt to write outside buffer bounds");
                }
                if (!f) f = "utf8";
                var i = false;
                for(;;){
                    switch(f){
                        case "hex":
                            return hexWrite(this, e, r, t);
                        case "utf8":
                        case "utf-8":
                            return utf8Write(this, e, r, t);
                        case "ascii":
                            return asciiWrite(this, e, r, t);
                        case "latin1":
                        case "binary":
                            return latin1Write(this, e, r, t);
                        case "base64":
                            return base64Write(this, e, r, t);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return ucs2Write(this, e, r, t);
                        default:
                            if (i) throw new TypeError("Unknown encoding: " + f);
                            f = ("" + f).toLowerCase();
                            i = true;
                    }
                }
            };
            Buffer.prototype.toJSON = function toJSON() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                };
            };
            function base64Slice(e, r, t) {
                if (r === 0 && t === e.length) {
                    return f.fromByteArray(e);
                } else {
                    return f.fromByteArray(e.slice(r, t));
                }
            }
            function utf8Slice(e, r, t) {
                t = Math.min(e.length, t);
                var f = [];
                var n = r;
                while(n < t){
                    var i = e[n];
                    var o = null;
                    var u = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1;
                    if (n + u <= t) {
                        var a, s, h, c;
                        switch(u){
                            case 1:
                                if (i < 128) {
                                    o = i;
                                }
                                break;
                            case 2:
                                a = e[n + 1];
                                if ((a & 192) === 128) {
                                    c = (i & 31) << 6 | a & 63;
                                    if (c > 127) {
                                        o = c;
                                    }
                                }
                                break;
                            case 3:
                                a = e[n + 1];
                                s = e[n + 2];
                                if ((a & 192) === 128 && (s & 192) === 128) {
                                    c = (i & 15) << 12 | (a & 63) << 6 | s & 63;
                                    if (c > 2047 && (c < 55296 || c > 57343)) {
                                        o = c;
                                    }
                                }
                                break;
                            case 4:
                                a = e[n + 1];
                                s = e[n + 2];
                                h = e[n + 3];
                                if ((a & 192) === 128 && (s & 192) === 128 && (h & 192) === 128) {
                                    c = (i & 15) << 18 | (a & 63) << 12 | (s & 63) << 6 | h & 63;
                                    if (c > 65535 && c < 1114112) {
                                        o = c;
                                    }
                                }
                        }
                    }
                    if (o === null) {
                        o = 65533;
                        u = 1;
                    } else if (o > 65535) {
                        o -= 65536;
                        f.push(o >>> 10 & 1023 | 55296);
                        o = 56320 | o & 1023;
                    }
                    f.push(o);
                    n += u;
                }
                return decodeCodePointsArray(f);
            }
            var u = 4096;
            function decodeCodePointsArray(e) {
                var r = e.length;
                if (r <= u) {
                    return String.fromCharCode.apply(String, e);
                }
                var t = "";
                var f = 0;
                while(f < r){
                    t += String.fromCharCode.apply(String, e.slice(f, f += u));
                }
                return t;
            }
            function asciiSlice(e, r, t) {
                var f = "";
                t = Math.min(e.length, t);
                for(var n = r; n < t; ++n){
                    f += String.fromCharCode(e[n] & 127);
                }
                return f;
            }
            function latin1Slice(e, r, t) {
                var f = "";
                t = Math.min(e.length, t);
                for(var n = r; n < t; ++n){
                    f += String.fromCharCode(e[n]);
                }
                return f;
            }
            function hexSlice(e, r, t) {
                var f = e.length;
                if (!r || r < 0) r = 0;
                if (!t || t < 0 || t > f) t = f;
                var n = "";
                for(var i = r; i < t; ++i){
                    n += s[e[i]];
                }
                return n;
            }
            function utf16leSlice(e, r, t) {
                var f = e.slice(r, t);
                var n = "";
                for(var i = 0; i < f.length; i += 2){
                    n += String.fromCharCode(f[i] + f[i + 1] * 256);
                }
                return n;
            }
            Buffer.prototype.slice = function slice(e, r) {
                var t = this.length;
                e = ~~e;
                r = r === undefined ? t : ~~r;
                if (e < 0) {
                    e += t;
                    if (e < 0) e = 0;
                } else if (e > t) {
                    e = t;
                }
                if (r < 0) {
                    r += t;
                    if (r < 0) r = 0;
                } else if (r > t) {
                    r = t;
                }
                if (r < e) r = e;
                var f = this.subarray(e, r);
                Object.setPrototypeOf(f, Buffer.prototype);
                return f;
            };
            function checkOffset(e, r, t) {
                if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
                if (e + r > t) throw new RangeError("Trying to access beyond buffer length");
            }
            Buffer.prototype.readUIntLE = function readUIntLE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = this[e];
                var n = 1;
                var i = 0;
                while(++i < r && (n *= 256)){
                    f += this[e + i] * n;
                }
                return f;
            };
            Buffer.prototype.readUIntBE = function readUIntBE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) {
                    checkOffset(e, r, this.length);
                }
                var f = this[e + --r];
                var n = 1;
                while(r > 0 && (n *= 256)){
                    f += this[e + --r] * n;
                }
                return f;
            };
            Buffer.prototype.readUInt8 = function readUInt8(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 1, this.length);
                return this[e];
            };
            Buffer.prototype.readUInt16LE = function readUInt16LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                return this[e] | this[e + 1] << 8;
            };
            Buffer.prototype.readUInt16BE = function readUInt16BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                return this[e] << 8 | this[e + 1];
            };
            Buffer.prototype.readUInt32LE = function readUInt32LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
            };
            Buffer.prototype.readUInt32BE = function readUInt32BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
            };
            Buffer.prototype.readIntLE = function readIntLE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = this[e];
                var n = 1;
                var i = 0;
                while(++i < r && (n *= 256)){
                    f += this[e + i] * n;
                }
                n *= 128;
                if (f >= n) f -= Math.pow(2, 8 * r);
                return f;
            };
            Buffer.prototype.readIntBE = function readIntBE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = r;
                var n = 1;
                var i = this[e + --f];
                while(f > 0 && (n *= 256)){
                    i += this[e + --f] * n;
                }
                n *= 128;
                if (i >= n) i -= Math.pow(2, 8 * r);
                return i;
            };
            Buffer.prototype.readInt8 = function readInt8(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 1, this.length);
                if (!(this[e] & 128)) return this[e];
                return (255 - this[e] + 1) * -1;
            };
            Buffer.prototype.readInt16LE = function readInt16LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                var t = this[e] | this[e + 1] << 8;
                return t & 32768 ? t | 4294901760 : t;
            };
            Buffer.prototype.readInt16BE = function readInt16BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                var t = this[e + 1] | this[e] << 8;
                return t & 32768 ? t | 4294901760 : t;
            };
            Buffer.prototype.readInt32LE = function readInt32LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
            };
            Buffer.prototype.readInt32BE = function readInt32BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
            };
            Buffer.prototype.readFloatLE = function readFloatLE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return n.read(this, e, true, 23, 4);
            };
            Buffer.prototype.readFloatBE = function readFloatBE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return n.read(this, e, false, 23, 4);
            };
            Buffer.prototype.readDoubleLE = function readDoubleLE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 8, this.length);
                return n.read(this, e, true, 52, 8);
            };
            Buffer.prototype.readDoubleBE = function readDoubleBE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 8, this.length);
                return n.read(this, e, false, 52, 8);
            };
            function checkInt(e, r, t, f, n, i) {
                if (!Buffer.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (r > n || r < i) throw new RangeError('"value" argument is out of bounds');
                if (t + f > e.length) throw new RangeError("Index out of range");
            }
            Buffer.prototype.writeUIntLE = function writeUIntLE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                t = t >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t) - 1;
                    checkInt(this, e, r, t, n, 0);
                }
                var i = 1;
                var o = 0;
                this[r] = e & 255;
                while(++o < t && (i *= 256)){
                    this[r + o] = e / i & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeUIntBE = function writeUIntBE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                t = t >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t) - 1;
                    checkInt(this, e, r, t, n, 0);
                }
                var i = t - 1;
                var o = 1;
                this[r + i] = e & 255;
                while(--i >= 0 && (o *= 256)){
                    this[r + i] = e / o & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeUInt8 = function writeUInt8(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 1, 255, 0);
                this[r] = e & 255;
                return r + 1;
            };
            Buffer.prototype.writeUInt16LE = function writeUInt16LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 65535, 0);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                return r + 2;
            };
            Buffer.prototype.writeUInt16BE = function writeUInt16BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 65535, 0);
                this[r] = e >>> 8;
                this[r + 1] = e & 255;
                return r + 2;
            };
            Buffer.prototype.writeUInt32LE = function writeUInt32LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 4294967295, 0);
                this[r + 3] = e >>> 24;
                this[r + 2] = e >>> 16;
                this[r + 1] = e >>> 8;
                this[r] = e & 255;
                return r + 4;
            };
            Buffer.prototype.writeUInt32BE = function writeUInt32BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 4294967295, 0);
                this[r] = e >>> 24;
                this[r + 1] = e >>> 16;
                this[r + 2] = e >>> 8;
                this[r + 3] = e & 255;
                return r + 4;
            };
            Buffer.prototype.writeIntLE = function writeIntLE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t - 1);
                    checkInt(this, e, r, t, n - 1, -n);
                }
                var i = 0;
                var o = 1;
                var u = 0;
                this[r] = e & 255;
                while(++i < t && (o *= 256)){
                    if (e < 0 && u === 0 && this[r + i - 1] !== 0) {
                        u = 1;
                    }
                    this[r + i] = (e / o >> 0) - u & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeIntBE = function writeIntBE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t - 1);
                    checkInt(this, e, r, t, n - 1, -n);
                }
                var i = t - 1;
                var o = 1;
                var u = 0;
                this[r + i] = e & 255;
                while(--i >= 0 && (o *= 256)){
                    if (e < 0 && u === 0 && this[r + i + 1] !== 0) {
                        u = 1;
                    }
                    this[r + i] = (e / o >> 0) - u & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeInt8 = function writeInt8(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 1, 127, -128);
                if (e < 0) e = 255 + e + 1;
                this[r] = e & 255;
                return r + 1;
            };
            Buffer.prototype.writeInt16LE = function writeInt16LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 32767, -32768);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                return r + 2;
            };
            Buffer.prototype.writeInt16BE = function writeInt16BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 32767, -32768);
                this[r] = e >>> 8;
                this[r + 1] = e & 255;
                return r + 2;
            };
            Buffer.prototype.writeInt32LE = function writeInt32LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 2147483647, -2147483648);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                this[r + 2] = e >>> 16;
                this[r + 3] = e >>> 24;
                return r + 4;
            };
            Buffer.prototype.writeInt32BE = function writeInt32BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 2147483647, -2147483648);
                if (e < 0) e = 4294967295 + e + 1;
                this[r] = e >>> 24;
                this[r + 1] = e >>> 16;
                this[r + 2] = e >>> 8;
                this[r + 3] = e & 255;
                return r + 4;
            };
            function checkIEEE754(e, r, t, f, n, i) {
                if (t + f > e.length) throw new RangeError("Index out of range");
                if (t < 0) throw new RangeError("Index out of range");
            }
            function writeFloat(e, r, t, f, i) {
                r = +r;
                t = t >>> 0;
                if (!i) {
                    checkIEEE754(e, r, t, 4, 34028234663852886e22, -34028234663852886e22);
                }
                n.write(e, r, t, f, 23, 4);
                return t + 4;
            }
            Buffer.prototype.writeFloatLE = function writeFloatLE(e, r, t) {
                return writeFloat(this, e, r, true, t);
            };
            Buffer.prototype.writeFloatBE = function writeFloatBE(e, r, t) {
                return writeFloat(this, e, r, false, t);
            };
            function writeDouble(e, r, t, f, i) {
                r = +r;
                t = t >>> 0;
                if (!i) {
                    checkIEEE754(e, r, t, 8, 17976931348623157e292, -17976931348623157e292);
                }
                n.write(e, r, t, f, 52, 8);
                return t + 8;
            }
            Buffer.prototype.writeDoubleLE = function writeDoubleLE(e, r, t) {
                return writeDouble(this, e, r, true, t);
            };
            Buffer.prototype.writeDoubleBE = function writeDoubleBE(e, r, t) {
                return writeDouble(this, e, r, false, t);
            };
            Buffer.prototype.copy = function copy(e, r, t, f) {
                if (!Buffer.isBuffer(e)) throw new TypeError("argument should be a Buffer");
                if (!t) t = 0;
                if (!f && f !== 0) f = this.length;
                if (r >= e.length) r = e.length;
                if (!r) r = 0;
                if (f > 0 && f < t) f = t;
                if (f === t) return 0;
                if (e.length === 0 || this.length === 0) return 0;
                if (r < 0) {
                    throw new RangeError("targetStart out of bounds");
                }
                if (t < 0 || t >= this.length) throw new RangeError("Index out of range");
                if (f < 0) throw new RangeError("sourceEnd out of bounds");
                if (f > this.length) f = this.length;
                if (e.length - r < f - t) {
                    f = e.length - r + t;
                }
                var n = f - t;
                if (this === e && typeof Uint8Array.prototype.copyWithin === "function") {
                    this.copyWithin(r, t, f);
                } else if (this === e && t < r && r < f) {
                    for(var i = n - 1; i >= 0; --i){
                        e[i + r] = this[i + t];
                    }
                } else {
                    Uint8Array.prototype.set.call(e, this.subarray(t, f), r);
                }
                return n;
            };
            Buffer.prototype.fill = function fill(e, r, t, f) {
                if (typeof e === "string") {
                    if (typeof r === "string") {
                        f = r;
                        r = 0;
                        t = this.length;
                    } else if (typeof t === "string") {
                        f = t;
                        t = this.length;
                    }
                    if (f !== undefined && typeof f !== "string") {
                        throw new TypeError("encoding must be a string");
                    }
                    if (typeof f === "string" && !Buffer.isEncoding(f)) {
                        throw new TypeError("Unknown encoding: " + f);
                    }
                    if (e.length === 1) {
                        var n = e.charCodeAt(0);
                        if (f === "utf8" && n < 128 || f === "latin1") {
                            e = n;
                        }
                    }
                } else if (typeof e === "number") {
                    e = e & 255;
                } else if (typeof e === "boolean") {
                    e = Number(e);
                }
                if (r < 0 || this.length < r || this.length < t) {
                    throw new RangeError("Out of range index");
                }
                if (t <= r) {
                    return this;
                }
                r = r >>> 0;
                t = t === undefined ? this.length : t >>> 0;
                if (!e) e = 0;
                var i;
                if (typeof e === "number") {
                    for(i = r; i < t; ++i){
                        this[i] = e;
                    }
                } else {
                    var o = Buffer.isBuffer(e) ? e : Buffer.from(e, f);
                    var u = o.length;
                    if (u === 0) {
                        throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                    }
                    for(i = 0; i < t - r; ++i){
                        this[i + r] = o[i % u];
                    }
                }
                return this;
            };
            var a = /[^+/0-9A-Za-z-_]/g;
            function base64clean(e) {
                e = e.split("=")[0];
                e = e.trim().replace(a, "");
                if (e.length < 2) return "";
                while(e.length % 4 !== 0){
                    e = e + "=";
                }
                return e;
            }
            function utf8ToBytes(e, r) {
                r = r || Infinity;
                var t;
                var f = e.length;
                var n = null;
                var i = [];
                for(var o = 0; o < f; ++o){
                    t = e.charCodeAt(o);
                    if (t > 55295 && t < 57344) {
                        if (!n) {
                            if (t > 56319) {
                                if ((r -= 3) > -1) i.push(239, 191, 189);
                                continue;
                            } else if (o + 1 === f) {
                                if ((r -= 3) > -1) i.push(239, 191, 189);
                                continue;
                            }
                            n = t;
                            continue;
                        }
                        if (t < 56320) {
                            if ((r -= 3) > -1) i.push(239, 191, 189);
                            n = t;
                            continue;
                        }
                        t = (n - 55296 << 10 | t - 56320) + 65536;
                    } else if (n) {
                        if ((r -= 3) > -1) i.push(239, 191, 189);
                    }
                    n = null;
                    if (t < 128) {
                        if ((r -= 1) < 0) break;
                        i.push(t);
                    } else if (t < 2048) {
                        if ((r -= 2) < 0) break;
                        i.push(t >> 6 | 192, t & 63 | 128);
                    } else if (t < 65536) {
                        if ((r -= 3) < 0) break;
                        i.push(t >> 12 | 224, t >> 6 & 63 | 128, t & 63 | 128);
                    } else if (t < 1114112) {
                        if ((r -= 4) < 0) break;
                        i.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, t & 63 | 128);
                    } else {
                        throw new Error("Invalid code point");
                    }
                }
                return i;
            }
            function asciiToBytes(e) {
                var r = [];
                for(var t = 0; t < e.length; ++t){
                    r.push(e.charCodeAt(t) & 255);
                }
                return r;
            }
            function utf16leToBytes(e, r) {
                var t, f, n;
                var i = [];
                for(var o = 0; o < e.length; ++o){
                    if ((r -= 2) < 0) break;
                    t = e.charCodeAt(o);
                    f = t >> 8;
                    n = t % 256;
                    i.push(n);
                    i.push(f);
                }
                return i;
            }
            function base64ToBytes(e) {
                return f.toByteArray(base64clean(e));
            }
            function blitBuffer(e, r, t, f) {
                for(var n = 0; n < f; ++n){
                    if (n + t >= r.length || n >= e.length) break;
                    r[n + t] = e[n];
                }
                return n;
            }
            function isInstance(e, r) {
                return e instanceof r || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === r.name;
            }
            function numberIsNaN(e) {
                return e !== e;
            }
            var s = function() {
                var e = "0123456789abcdef";
                var r = new Array(256);
                for(var t = 0; t < 16; ++t){
                    var f = t * 16;
                    for(var n = 0; n < 16; ++n){
                        r[f + n] = e[t] + e[n];
                    }
                }
                return r;
            }();
        },
        783: function(e, r) {
            /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ r.read = function(e, r, t, f, n) {
                var i, o;
                var u = n * 8 - f - 1;
                var a = (1 << u) - 1;
                var s = a >> 1;
                var h = -7;
                var c = t ? n - 1 : 0;
                var l = t ? -1 : 1;
                var p = e[r + c];
                c += l;
                i = p & (1 << -h) - 1;
                p >>= -h;
                h += u;
                for(; h > 0; i = i * 256 + e[r + c], c += l, h -= 8){}
                o = i & (1 << -h) - 1;
                i >>= -h;
                h += f;
                for(; h > 0; o = o * 256 + e[r + c], c += l, h -= 8){}
                if (i === 0) {
                    i = 1 - s;
                } else if (i === a) {
                    return o ? NaN : (p ? -1 : 1) * Infinity;
                } else {
                    o = o + Math.pow(2, f);
                    i = i - s;
                }
                return (p ? -1 : 1) * o * Math.pow(2, i - f);
            };
            r.write = function(e, r, t, f, n, i) {
                var o, u, a;
                var s = i * 8 - n - 1;
                var h = (1 << s) - 1;
                var c = h >> 1;
                var l = n === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
                var p = f ? 0 : i - 1;
                var y = f ? 1 : -1;
                var g = r < 0 || r === 0 && 1 / r < 0 ? 1 : 0;
                r = Math.abs(r);
                if (isNaN(r) || r === Infinity) {
                    u = isNaN(r) ? 1 : 0;
                    o = h;
                } else {
                    o = Math.floor(Math.log(r) / Math.LN2);
                    if (r * (a = Math.pow(2, -o)) < 1) {
                        o--;
                        a *= 2;
                    }
                    if (o + c >= 1) {
                        r += l / a;
                    } else {
                        r += l * Math.pow(2, 1 - c);
                    }
                    if (r * a >= 2) {
                        o++;
                        a /= 2;
                    }
                    if (o + c >= h) {
                        u = 0;
                        o = h;
                    } else if (o + c >= 1) {
                        u = (r * a - 1) * Math.pow(2, n);
                        o = o + c;
                    } else {
                        u = r * Math.pow(2, c - 1) * Math.pow(2, n);
                        o = 0;
                    }
                }
                for(; n >= 8; e[t + p] = u & 255, p += y, u /= 256, n -= 8){}
                o = o << n | u;
                s += n;
                for(; s > 0; e[t + p] = o & 255, p += y, o /= 256, s -= 8){}
                e[t + p - y] |= g * 128;
            };
        }
    };
    var r = {};
    function __nccwpck_require__(t) {
        var f = r[t];
        if (f !== undefined) {
            return f.exports;
        }
        var n = r[t] = {
            exports: {}
        };
        var i = true;
        try {
            e[t](n, n.exports, __nccwpck_require__);
            i = false;
        } finally{
            if (i) delete r[t];
        }
        return n.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/shigoto/Conefia/conefia-website/conefia-website/next-app/node_modules/next/dist/compiled/buffer") + "/";
    var t = __nccwpck_require__(72);
    module.exports = t;
})();
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/core/AxiosError.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
'use strict';
;
/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */ function AxiosError(message, code, config, request, response) {
    Error.call(this);
    if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
    } else {
        this.stack = new Error().stack;
    }
    this.message = message;
    this.name = 'AxiosError';
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    if (response) {
        this.response = response;
        this.status = response.status ? response.status : null;
    }
}
__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].inherits(AxiosError, Error, {
    toJSON: function toJSON() {
        return {
            // Standard
            message: this.message,
            name: this.name,
            // Microsoft
            description: this.description,
            number: this.number,
            // Mozilla
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            // Axios
            config: __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].toJSONObject(this.config),
            code: this.code,
            status: this.status
        };
    }
});
const prototype = AxiosError.prototype;
const descriptors = {};
[
    'ERR_BAD_OPTION_VALUE',
    'ERR_BAD_OPTION',
    'ECONNABORTED',
    'ETIMEDOUT',
    'ERR_NETWORK',
    'ERR_FR_TOO_MANY_REDIRECTS',
    'ERR_DEPRECATED',
    'ERR_BAD_RESPONSE',
    'ERR_BAD_REQUEST',
    'ERR_CANCELED',
    'ERR_NOT_SUPPORT',
    'ERR_INVALID_URL'
].forEach((code)=>{
    descriptors[code] = {
        value: code
    };
});
Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype, 'isAxiosError', {
    value: true
});
// eslint-disable-next-line func-names
AxiosError.from = (error, code, config, request, response, customProps)=>{
    const axiosError = Object.create(prototype);
    __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].toFlatObject(error, axiosError, function filter(obj) {
        return obj !== Error.prototype;
    }, (prop)=>{
        return prop !== 'isAxiosError';
    });
    const msg = error && error.message ? error.message : 'Error';
    // Prefer explicit code; otherwise copy the low-level error's code (e.g. ECONNREFUSED)
    const errCode = code == null && error ? error.code : code;
    AxiosError.call(axiosError, msg, errCode, config, request, response);
    // Chain the original error on the standard field; non-enumerable to avoid JSON noise
    if (error && axiosError.cause == null) {
        Object.defineProperty(axiosError, 'cause', {
            value: error,
            configurable: true
        });
    }
    axiosError.name = error && error.name || 'Error';
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
};
const __TURBOPACK__default__export__ = AxiosError;
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/null.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// eslint-disable-next-line strict
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = null;
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/toFormData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/next-app/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/core/AxiosError.js [app-client] (ecmascript)");
// temporary hotfix to avoid circular references until AxiosURLSearchParams is refactored
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$null$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/null.js [app-client] (ecmascript)");
'use strict';
;
;
;
/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */ function isVisitable(thing) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isPlainObject(thing) || __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isArray(thing);
}
/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */ function removeBrackets(key) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].endsWith(key, '[]') ? key.slice(0, -2) : key;
}
/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */ function renderKey(path, key, dots) {
    if (!path) return key;
    return path.concat(key).map(function each(token, i) {
        // eslint-disable-next-line no-param-reassign
        token = removeBrackets(token);
        return !dots && i ? '[' + token + ']' : token;
    }).join(dots ? '.' : '');
}
/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */ function isFlatArray(arr) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isArray(arr) && !arr.some(isVisitable);
}
const predicates = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].toFlatObject(__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, null, function filter(prop) {
    return /^is[A-Z]/.test(prop);
});
/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/ /**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */ function toFormData(obj, formData, options) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isObject(obj)) {
        throw new TypeError('target must be an object');
    }
    // eslint-disable-next-line no-param-reassign
    formData = formData || new (__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$null$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] || FormData)();
    // eslint-disable-next-line no-param-reassign
    options = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].toFlatObject(options, {
        metaTokens: true,
        dots: false,
        indexes: false
    }, false, function defined(option, source) {
        // eslint-disable-next-line no-eq-null,eqeqeq
        return !__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isUndefined(source[option]);
    });
    const metaTokens = options.metaTokens;
    // eslint-disable-next-line no-use-before-define
    const visitor = options.visitor || defaultVisitor;
    const dots = options.dots;
    const indexes = options.indexes;
    const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
    const useBlob = _Blob && __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isSpecCompliantForm(formData);
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isFunction(visitor)) {
        throw new TypeError('visitor must be a function');
    }
    function convertValue(value) {
        if (value === null) return '';
        if (__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isDate(value)) {
            return value.toISOString();
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isBoolean(value)) {
            return value.toString();
        }
        if (!useBlob && __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isBlob(value)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]('Blob is not supported. Use a Buffer instead.');
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isArrayBuffer(value) || __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isTypedArray(value)) {
            return useBlob && typeof Blob === 'function' ? new Blob([
                value
            ]) : __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(value);
        }
        return value;
    }
    /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */ function defaultVisitor(value, key, path) {
        let arr = value;
        if (value && !path && typeof value === 'object') {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].endsWith(key, '{}')) {
                // eslint-disable-next-line no-param-reassign
                key = metaTokens ? key : key.slice(0, -2);
                // eslint-disable-next-line no-param-reassign
                value = JSON.stringify(value);
            } else if (__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isArray(value) && isFlatArray(value) || (__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isFileList(value) || __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].endsWith(key, '[]')) && (arr = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].toArray(value))) {
                // eslint-disable-next-line no-param-reassign
                key = removeBrackets(key);
                arr.forEach(function each(el, index) {
                    !(__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isUndefined(el) || el === null) && formData.append(// eslint-disable-next-line no-nested-ternary
                    indexes === true ? renderKey([
                        key
                    ], index, dots) : indexes === null ? key : key + '[]', convertValue(el));
                });
                return false;
            }
        }
        if (isVisitable(value)) {
            return true;
        }
        formData.append(renderKey(path, key, dots), convertValue(value));
        return false;
    }
    const stack = [];
    const exposedHelpers = Object.assign(predicates, {
        defaultVisitor,
        convertValue,
        isVisitable
    });
    function build(value, path) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isUndefined(value)) return;
        if (stack.indexOf(value) !== -1) {
            throw Error('Circular reference detected in ' + path.join('.'));
        }
        stack.push(value);
        __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forEach(value, function each(el, key) {
            const result = !(__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isUndefined(el) || el === null) && visitor.call(formData, el, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isString(key) ? key.trim() : key, path, exposedHelpers);
            if (result === true) {
                build(el, path ? path.concat(key) : [
                    key
                ]);
            }
        });
        stack.pop();
    }
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isObject(obj)) {
        throw new TypeError('data must be an object');
    }
    build(obj);
    return formData;
}
const __TURBOPACK__default__export__ = toFormData;
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/AxiosURLSearchParams.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$toFormData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/toFormData.js [app-client] (ecmascript)");
'use strict';
;
/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */ function encode(str) {
    const charMap = {
        '!': '%21',
        "'": '%27',
        '(': '%28',
        ')': '%29',
        '~': '%7E',
        '%20': '+',
        '%00': '\x00'
    };
    return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
        return charMap[match];
    });
}
/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */ function AxiosURLSearchParams(params, options) {
    this._pairs = [];
    params && (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$toFormData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(params, this, options);
}
const prototype = AxiosURLSearchParams.prototype;
prototype.append = function append(name, value) {
    this._pairs.push([
        name,
        value
    ]);
};
prototype.toString = function toString(encoder) {
    const _encode = encoder ? function(value) {
        return encoder.call(this, value, encode);
    } : encode;
    return this._pairs.map(function each(pair) {
        return _encode(pair[0]) + '=' + _encode(pair[1]);
    }, '').join('&');
};
const __TURBOPACK__default__export__ = AxiosURLSearchParams;
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/buildURL.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>buildURL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$AxiosURLSearchParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/AxiosURLSearchParams.js [app-client] (ecmascript)");
'use strict';
;
;
/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */ function encode(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+');
}
function buildURL(url, params, options) {
    /*eslint no-param-reassign:0*/ if (!params) {
        return url;
    }
    const _encode = options && options.encode || encode;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isFunction(options)) {
        options = {
            serialize: options
        };
    }
    const serializeFn = options && options.serialize;
    let serializedParams;
    if (serializeFn) {
        serializedParams = serializeFn(params, options);
    } else {
        serializedParams = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isURLSearchParams(params) ? params.toString() : new __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$AxiosURLSearchParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](params, options).toString(_encode);
    }
    if (serializedParams) {
        const hashmarkIndex = url.indexOf("#");
        if (hashmarkIndex !== -1) {
            url = url.slice(0, hashmarkIndex);
        }
        url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
    }
    return url;
}
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/core/InterceptorManager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
'use strict';
;
class InterceptorManager {
    constructor(){
        this.handlers = [];
    }
    /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */ use(fulfilled, rejected, options) {
        this.handlers.push({
            fulfilled,
            rejected,
            synchronous: options ? options.synchronous : false,
            runWhen: options ? options.runWhen : null
        });
        return this.handlers.length - 1;
    }
    /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */ eject(id) {
        if (this.handlers[id]) {
            this.handlers[id] = null;
        }
    }
    /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */ clear() {
        if (this.handlers) {
            this.handlers = [];
        }
    }
    /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */ forEach(fn) {
        __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forEach(this.handlers, function forEachHandler(h) {
            if (h !== null) {
                fn(h);
            }
        });
    }
}
const __TURBOPACK__default__export__ = InterceptorManager;
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/defaults/transitional.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
'use strict';
const __TURBOPACK__default__export__ = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
};
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/platform/browser/classes/URLSearchParams.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$AxiosURLSearchParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/AxiosURLSearchParams.js [app-client] (ecmascript)");
'use strict';
;
const __TURBOPACK__default__export__ = typeof URLSearchParams !== 'undefined' ? URLSearchParams : __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$AxiosURLSearchParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/platform/browser/classes/FormData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
'use strict';
const __TURBOPACK__default__export__ = typeof FormData !== 'undefined' ? FormData : null;
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/platform/browser/classes/Blob.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
'use strict';
const __TURBOPACK__default__export__ = typeof Blob !== 'undefined' ? Blob : null;
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/platform/browser/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$browser$2f$classes$2f$URLSearchParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/platform/browser/classes/URLSearchParams.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$browser$2f$classes$2f$FormData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/platform/browser/classes/FormData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$browser$2f$classes$2f$Blob$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/platform/browser/classes/Blob.js [app-client] (ecmascript)");
;
;
;
const __TURBOPACK__default__export__ = {
    isBrowser: true,
    classes: {
        URLSearchParams: __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$browser$2f$classes$2f$URLSearchParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        FormData: __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$browser$2f$classes$2f$FormData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        Blob: __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$browser$2f$classes$2f$Blob$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    },
    protocols: [
        'http',
        'https',
        'file',
        'blob',
        'url',
        'data'
    ]
};
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/platform/common/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasBrowserEnv",
    ()=>hasBrowserEnv,
    "hasStandardBrowserEnv",
    ()=>hasStandardBrowserEnv,
    "hasStandardBrowserWebWorkerEnv",
    ()=>hasStandardBrowserWebWorkerEnv,
    "navigator",
    ()=>_navigator,
    "origin",
    ()=>origin
]);
const hasBrowserEnv = typeof window !== 'undefined' && typeof document !== 'undefined';
const _navigator = typeof navigator === 'object' && navigator || undefined;
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */ const hasStandardBrowserEnv = hasBrowserEnv && (!_navigator || [
    'ReactNative',
    'NativeScript',
    'NS'
].indexOf(_navigator.product) < 0);
/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */ const hasStandardBrowserWebWorkerEnv = (()=>{
    return typeof WorkerGlobalScope !== 'undefined' && // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope && typeof self.importScripts === 'function';
})();
const origin = hasBrowserEnv && window.location.href || 'http://localhost';
;
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/platform/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/platform/browser/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/platform/common/utils.js [app-client] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$common$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
    ...__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
};
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/toURLEncodedForm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>toURLEncodedForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$toFormData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/toFormData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/platform/index.js [app-client] (ecmascript)");
'use strict';
;
;
;
function toURLEncodedForm(data, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$toFormData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(data, new __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].classes.URLSearchParams(), {
        visitor: function(value, key, path, helpers) {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isNode && __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isBuffer(value)) {
                this.append(key, value.toString('base64'));
                return false;
            }
            return helpers.defaultVisitor.apply(this, arguments);
        },
        ...options
    });
}
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/formDataToJSON.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
'use strict';
;
/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */ function parsePropPath(name) {
    // foo[x][y][z]
    // foo.x.y.z
    // foo-x-y-z
    // foo x y z
    return __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].matchAll(/\w+|\[(\w*)]/g, name).map((match)=>{
        return match[0] === '[]' ? '' : match[1] || match[0];
    });
}
/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */ function arrayToObject(arr) {
    const obj = {};
    const keys = Object.keys(arr);
    let i;
    const len = keys.length;
    let key;
    for(i = 0; i < len; i++){
        key = keys[i];
        obj[key] = arr[key];
    }
    return obj;
}
/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */ function formDataToJSON(formData) {
    function buildPath(path, value, target, index) {
        let name = path[index++];
        if (name === '__proto__') return true;
        const isNumericKey = Number.isFinite(+name);
        const isLast = index >= path.length;
        name = !name && __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isArray(target) ? target.length : name;
        if (isLast) {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hasOwnProp(target, name)) {
                target[name] = [
                    target[name],
                    value
                ];
            } else {
                target[name] = value;
            }
            return !isNumericKey;
        }
        if (!target[name] || !__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isObject(target[name])) {
            target[name] = [];
        }
        const result = buildPath(path, value, target[name], index);
        if (result && __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isArray(target[name])) {
            target[name] = arrayToObject(target[name]);
        }
        return !isNumericKey;
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isFormData(formData) && __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isFunction(formData.entries)) {
        const obj = {};
        __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forEachEntry(formData, (name, value)=>{
            buildPath(parsePropPath(name), value, obj, 0);
        });
        return obj;
    }
    return null;
}
const __TURBOPACK__default__export__ = formDataToJSON;
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/defaults/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/core/AxiosError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$defaults$2f$transitional$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/defaults/transitional.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$toFormData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/toFormData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$toURLEncodedForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/toURLEncodedForm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/platform/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$formDataToJSON$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/formDataToJSON.js [app-client] (ecmascript)");
'use strict';
;
;
;
;
;
;
;
/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */ function stringifySafely(rawValue, parser, encoder) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isString(rawValue)) {
        try {
            (parser || JSON.parse)(rawValue);
            return __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].trim(rawValue);
        } catch (e) {
            if (e.name !== 'SyntaxError') {
                throw e;
            }
        }
    }
    return (encoder || JSON.stringify)(rawValue);
}
const defaults = {
    transitional: __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$defaults$2f$transitional$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    adapter: [
        'xhr',
        'http',
        'fetch'
    ],
    transformRequest: [
        function transformRequest(data, headers) {
            const contentType = headers.getContentType() || '';
            const hasJSONContentType = contentType.indexOf('application/json') > -1;
            const isObjectPayload = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isObject(data);
            if (isObjectPayload && __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isHTMLForm(data)) {
                data = new FormData(data);
            }
            const isFormData = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isFormData(data);
            if (isFormData) {
                return hasJSONContentType ? JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$formDataToJSON$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(data)) : data;
            }
            if (__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isArrayBuffer(data) || __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isBuffer(data) || __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isStream(data) || __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isFile(data) || __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isBlob(data) || __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isReadableStream(data)) {
                return data;
            }
            if (__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isArrayBufferView(data)) {
                return data.buffer;
            }
            if (__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isURLSearchParams(data)) {
                headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
                return data.toString();
            }
            let isFileList;
            if (isObjectPayload) {
                if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$toURLEncodedForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(data, this.formSerializer).toString();
                }
                if ((isFileList = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
                    const _FormData = this.env && this.env.FormData;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$toFormData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(isFileList ? {
                        'files[]': data
                    } : data, _FormData && new _FormData(), this.formSerializer);
                }
            }
            if (isObjectPayload || hasJSONContentType) {
                headers.setContentType('application/json', false);
                return stringifySafely(data);
            }
            return data;
        }
    ],
    transformResponse: [
        function transformResponse(data) {
            const transitional = this.transitional || defaults.transitional;
            const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
            const JSONRequested = this.responseType === 'json';
            if (__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isResponse(data) || __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isReadableStream(data)) {
                return data;
            }
            if (data && __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
                const silentJSONParsing = transitional && transitional.silentJSONParsing;
                const strictJSONParsing = !silentJSONParsing && JSONRequested;
                try {
                    return JSON.parse(data, this.parseReviver);
                } catch (e) {
                    if (strictJSONParsing) {
                        if (e.name === 'SyntaxError') {
                            throw __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from(e, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ERR_BAD_RESPONSE, this, null, this.response);
                        }
                        throw e;
                    }
                }
            }
            return data;
        }
    ],
    /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */ timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].classes.FormData,
        Blob: __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].classes.Blob
    },
    validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
    },
    headers: {
        common: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': undefined
        }
    }
};
__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forEach([
    'delete',
    'get',
    'head',
    'post',
    'put',
    'patch'
], (method)=>{
    defaults.headers[method] = {};
});
const __TURBOPACK__default__export__ = defaults;
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/parseHeaders.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
'use strict';
;
// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent'
]);
const __TURBOPACK__default__export__ = (rawHeaders)=>{
    const parsed = {};
    let key;
    let val;
    let i;
    rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
        i = line.indexOf(':');
        key = line.substring(0, i).trim().toLowerCase();
        val = line.substring(i + 1).trim();
        if (!key || parsed[key] && ignoreDuplicateOf[key]) {
            return;
        }
        if (key === 'set-cookie') {
            if (parsed[key]) {
                parsed[key].push(val);
            } else {
                parsed[key] = [
                    val
                ];
            }
        } else {
            parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
        }
    });
    return parsed;
};
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/core/AxiosHeaders.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$parseHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/parseHeaders.js [app-client] (ecmascript)");
'use strict';
;
;
const $internals = Symbol('internals');
function normalizeHeader(header) {
    return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
    if (value === false || value == null) {
        return value;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isArray(value) ? value.map(normalizeValue) : String(value);
}
function parseTokens(str) {
    const tokens = Object.create(null);
    const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let match;
    while(match = tokensRE.exec(str)){
        tokens[match[1]] = match[2];
    }
    return tokens;
}
const isValidHeaderName = (str)=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isFunction(filter)) {
        return filter.call(this, value, header);
    }
    if (isHeaderNameFilter) {
        value = header;
    }
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isString(value)) return;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isString(filter)) {
        return value.indexOf(filter) !== -1;
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isRegExp(filter)) {
        return filter.test(value);
    }
}
function formatHeader(header) {
    return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str)=>{
        return char.toUpperCase() + str;
    });
}
function buildAccessors(obj, header) {
    const accessorName = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].toCamelCase(' ' + header);
    [
        'get',
        'set',
        'has'
    ].forEach((methodName)=>{
        Object.defineProperty(obj, methodName + accessorName, {
            value: function(arg1, arg2, arg3) {
                return this[methodName].call(this, header, arg1, arg2, arg3);
            },
            configurable: true
        });
    });
}
class AxiosHeaders {
    constructor(headers){
        headers && this.set(headers);
    }
    set(header, valueOrRewrite, rewrite) {
        const self = this;
        function setHeader(_value, _header, _rewrite) {
            const lHeader = normalizeHeader(_header);
            if (!lHeader) {
                throw new Error('header name must be a non-empty string');
            }
            const key = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].findKey(self, lHeader);
            if (!key || self[key] === undefined || _rewrite === true || _rewrite === undefined && self[key] !== false) {
                self[key || _header] = normalizeValue(_value);
            }
        }
        const setHeaders = (headers, _rewrite)=>__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forEach(headers, (_value, _header)=>setHeader(_value, _header, _rewrite));
        if (__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isPlainObject(header) || header instanceof this.constructor) {
            setHeaders(header, valueOrRewrite);
        } else if (__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
            setHeaders((0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$parseHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(header), valueOrRewrite);
        } else if (__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isObject(header) && __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isIterable(header)) {
            let obj = {}, dest, key;
            for (const entry of header){
                if (!__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isArray(entry)) {
                    throw TypeError('Object iterator must return a key-value pair');
                }
                obj[key = entry[0]] = (dest = obj[key]) ? __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isArray(dest) ? [
                    ...dest,
                    entry[1]
                ] : [
                    dest,
                    entry[1]
                ] : entry[1];
            }
            setHeaders(obj, valueOrRewrite);
        } else {
            header != null && setHeader(valueOrRewrite, header, rewrite);
        }
        return this;
    }
    get(header, parser) {
        header = normalizeHeader(header);
        if (header) {
            const key = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].findKey(this, header);
            if (key) {
                const value = this[key];
                if (!parser) {
                    return value;
                }
                if (parser === true) {
                    return parseTokens(value);
                }
                if (__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isFunction(parser)) {
                    return parser.call(this, value, key);
                }
                if (__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isRegExp(parser)) {
                    return parser.exec(value);
                }
                throw new TypeError('parser must be boolean|regexp|function');
            }
        }
    }
    has(header, matcher) {
        header = normalizeHeader(header);
        if (header) {
            const key = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].findKey(this, header);
            return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
        }
        return false;
    }
    delete(header, matcher) {
        const self = this;
        let deleted = false;
        function deleteHeader(_header) {
            _header = normalizeHeader(_header);
            if (_header) {
                const key = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].findKey(self, _header);
                if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
                    delete self[key];
                    deleted = true;
                }
            }
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isArray(header)) {
            header.forEach(deleteHeader);
        } else {
            deleteHeader(header);
        }
        return deleted;
    }
    clear(matcher) {
        const keys = Object.keys(this);
        let i = keys.length;
        let deleted = false;
        while(i--){
            const key = keys[i];
            if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
                delete this[key];
                deleted = true;
            }
        }
        return deleted;
    }
    normalize(format) {
        const self = this;
        const headers = {};
        __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forEach(this, (value, header)=>{
            const key = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].findKey(headers, header);
            if (key) {
                self[key] = normalizeValue(value);
                delete self[header];
                return;
            }
            const normalized = format ? formatHeader(header) : String(header).trim();
            if (normalized !== header) {
                delete self[header];
            }
            self[normalized] = normalizeValue(value);
            headers[normalized] = true;
        });
        return this;
    }
    concat(...targets) {
        return this.constructor.concat(this, ...targets);
    }
    toJSON(asStrings) {
        const obj = Object.create(null);
        __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forEach(this, (value, header)=>{
            value != null && value !== false && (obj[header] = asStrings && __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isArray(value) ? value.join(', ') : value);
        });
        return obj;
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
        return Object.entries(this.toJSON()).map(([header, value])=>header + ': ' + value).join('\n');
    }
    getSetCookie() {
        return this.get("set-cookie") || [];
    }
    get [Symbol.toStringTag]() {
        return 'AxiosHeaders';
    }
    static from(thing) {
        return thing instanceof this ? thing : new this(thing);
    }
    static concat(first, ...targets) {
        const computed = new this(first);
        targets.forEach((target)=>computed.set(target));
        return computed;
    }
    static accessor(header) {
        const internals = this[$internals] = this[$internals] = {
            accessors: {}
        };
        const accessors = internals.accessors;
        const prototype = this.prototype;
        function defineAccessor(_header) {
            const lHeader = normalizeHeader(_header);
            if (!accessors[lHeader]) {
                buildAccessors(prototype, _header);
                accessors[lHeader] = true;
            }
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
        return this;
    }
}
AxiosHeaders.accessor([
    'Content-Type',
    'Content-Length',
    'Accept',
    'Accept-Encoding',
    'User-Agent',
    'Authorization'
]);
// reserved names hotfix
__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].reduceDescriptors(AxiosHeaders.prototype, ({ value }, key)=>{
    let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
    return {
        get: ()=>value,
        set (headerValue) {
            this[mapped] = headerValue;
        }
    };
});
__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].freezeMethods(AxiosHeaders);
const __TURBOPACK__default__export__ = AxiosHeaders;
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/core/transformData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>transformData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$defaults$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/defaults/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/core/AxiosHeaders.js [app-client] (ecmascript)");
'use strict';
;
;
;
function transformData(fns, response) {
    const config = this || __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$defaults$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
    const context = response || config;
    const headers = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from(context.headers);
    let data = context.data;
    __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forEach(fns, function transform(fn) {
        data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
    });
    headers.normalize();
    return data;
}
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/cancel/isCancel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>isCancel
]);
'use strict';
function isCancel(value) {
    return !!(value && value.__CANCEL__);
}
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/cancel/CanceledError.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/core/AxiosError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
'use strict';
;
;
/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */ function CanceledError(message, config, request) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].call(this, message == null ? 'canceled' : message, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ERR_CANCELED, config, request);
    this.name = 'CanceledError';
}
__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].inherits(CanceledError, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
    __CANCEL__: true
});
const __TURBOPACK__default__export__ = CanceledError;
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/core/settle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>settle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/core/AxiosError.js [app-client] (ecmascript)");
'use strict';
;
function settle(resolve, reject, response) {
    const validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) {
        resolve(response);
    } else {
        reject(new __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]('Request failed with status code ' + response.status, [
            __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ERR_BAD_REQUEST,
            __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ERR_BAD_RESPONSE
        ][Math.floor(response.status / 100) - 4], response.config, response.request, response));
    }
}
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/parseProtocol.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>parseProtocol
]);
'use strict';
function parseProtocol(url) {
    const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || '';
}
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/speedometer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
'use strict';
/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */ function speedometer(samplesCount, min) {
    samplesCount = samplesCount || 10;
    const bytes = new Array(samplesCount);
    const timestamps = new Array(samplesCount);
    let head = 0;
    let tail = 0;
    let firstSampleTS;
    min = min !== undefined ? min : 1000;
    return function push(chunkLength) {
        const now = Date.now();
        const startedAt = timestamps[tail];
        if (!firstSampleTS) {
            firstSampleTS = now;
        }
        bytes[head] = chunkLength;
        timestamps[head] = now;
        let i = tail;
        let bytesCount = 0;
        while(i !== head){
            bytesCount += bytes[i++];
            i = i % samplesCount;
        }
        head = (head + 1) % samplesCount;
        if (head === tail) {
            tail = (tail + 1) % samplesCount;
        }
        if (now - firstSampleTS < min) {
            return;
        }
        const passed = startedAt && now - startedAt;
        return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
    };
}
const __TURBOPACK__default__export__ = speedometer;
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/throttle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
/**
 * Throttle decorator
 * @param {Function} fn
 * @param {Number} freq
 * @return {Function}
 */ function throttle(fn, freq) {
    let timestamp = 0;
    let threshold = 1000 / freq;
    let lastArgs;
    let timer;
    const invoke = (args, now = Date.now())=>{
        timestamp = now;
        lastArgs = null;
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        fn(...args);
    };
    const throttled = (...args)=>{
        const now = Date.now();
        const passed = now - timestamp;
        if (passed >= threshold) {
            invoke(args, now);
        } else {
            lastArgs = args;
            if (!timer) {
                timer = setTimeout(()=>{
                    timer = null;
                    invoke(lastArgs);
                }, threshold - passed);
            }
        }
    };
    const flush = ()=>lastArgs && invoke(lastArgs);
    return [
        throttled,
        flush
    ];
}
const __TURBOPACK__default__export__ = throttle;
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/progressEventReducer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "asyncDecorator",
    ()=>asyncDecorator,
    "progressEventDecorator",
    ()=>progressEventDecorator,
    "progressEventReducer",
    ()=>progressEventReducer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$speedometer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/speedometer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$throttle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/throttle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
;
;
;
const progressEventReducer = (listener, isDownloadStream, freq = 3)=>{
    let bytesNotified = 0;
    const _speedometer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$speedometer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(50, 250);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$throttle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((e)=>{
        const loaded = e.loaded;
        const total = e.lengthComputable ? e.total : undefined;
        const progressBytes = loaded - bytesNotified;
        const rate = _speedometer(progressBytes);
        const inRange = loaded <= total;
        bytesNotified = loaded;
        const data = {
            loaded,
            total,
            progress: total ? loaded / total : undefined,
            bytes: progressBytes,
            rate: rate ? rate : undefined,
            estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
            event: e,
            lengthComputable: total != null,
            [isDownloadStream ? 'download' : 'upload']: true
        };
        listener(data);
    }, freq);
};
const progressEventDecorator = (total, throttled)=>{
    const lengthComputable = total != null;
    return [
        (loaded)=>throttled[0]({
                lengthComputable,
                total,
                loaded
            }),
        throttled[1]
    ];
};
const asyncDecorator = (fn)=>(...args)=>__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].asap(()=>fn(...args));
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/isURLSameOrigin.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/platform/index.js [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hasStandardBrowserEnv ? ((origin, isMSIE)=>(url)=>{
        url = new URL(url, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].origin);
        return origin.protocol === url.protocol && origin.host === url.host && (isMSIE || origin.port === url.port);
    })(new URL(__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].origin), __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].navigator && /(msie|trident)/i.test(__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].navigator.userAgent)) : ()=>true;
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/cookies.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/platform/index.js [app-client] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hasStandardBrowserEnv ? // Standard browser envs support document.cookie
{
    write (name, value, expires, path, domain, secure) {
        const cookie = [
            name + '=' + encodeURIComponent(value)
        ];
        __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isNumber(expires) && cookie.push('expires=' + new Date(expires).toGMTString());
        __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isString(path) && cookie.push('path=' + path);
        __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isString(domain) && cookie.push('domain=' + domain);
        secure === true && cookie.push('secure');
        document.cookie = cookie.join('; ');
    },
    read (name) {
        const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return match ? decodeURIComponent(match[3]) : null;
    },
    remove (name) {
        this.write(name, '', Date.now() - 86400000);
    }
} : // Non-standard browser env (web workers, react-native) lack needed support.
{
    write () {},
    read () {
        return null;
    },
    remove () {}
};
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/isAbsoluteURL.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>isAbsoluteURL
]);
'use strict';
function isAbsoluteURL(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/combineURLs.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>combineURLs
]);
'use strict';
function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/?\/$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
}
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/core/buildFullPath.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>buildFullPath
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$isAbsoluteURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/isAbsoluteURL.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$combineURLs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/combineURLs.js [app-client] (ecmascript)");
'use strict';
;
;
function buildFullPath(baseURL, requestedURL, allowAbsoluteUrls) {
    let isRelativeUrl = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$isAbsoluteURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(requestedURL);
    if (baseURL && (isRelativeUrl || allowAbsoluteUrls == false)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$combineURLs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(baseURL, requestedURL);
    }
    return requestedURL;
}
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/core/mergeConfig.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>mergeConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/core/AxiosHeaders.js [app-client] (ecmascript)");
'use strict';
;
;
const headersToObject = (thing)=>thing instanceof __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] ? {
        ...thing
    } : thing;
function mergeConfig(config1, config2) {
    // eslint-disable-next-line no-param-reassign
    config2 = config2 || {};
    const config = {};
    function getMergedValue(target, source, prop, caseless) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isPlainObject(target) && __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isPlainObject(source)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].merge.call({
                caseless
            }, target, source);
        } else if (__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isPlainObject(source)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].merge({}, source);
        } else if (__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isArray(source)) {
            return source.slice();
        }
        return source;
    }
    // eslint-disable-next-line consistent-return
    function mergeDeepProperties(a, b, prop, caseless) {
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isUndefined(b)) {
            return getMergedValue(a, b, prop, caseless);
        } else if (!__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isUndefined(a)) {
            return getMergedValue(undefined, a, prop, caseless);
        }
    }
    // eslint-disable-next-line consistent-return
    function valueFromConfig2(a, b) {
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isUndefined(b)) {
            return getMergedValue(undefined, b);
        }
    }
    // eslint-disable-next-line consistent-return
    function defaultToConfig2(a, b) {
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isUndefined(b)) {
            return getMergedValue(undefined, b);
        } else if (!__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isUndefined(a)) {
            return getMergedValue(undefined, a);
        }
    }
    // eslint-disable-next-line consistent-return
    function mergeDirectKeys(a, b, prop) {
        if (prop in config2) {
            return getMergedValue(a, b);
        } else if (prop in config1) {
            return getMergedValue(undefined, a);
        }
    }
    const mergeMap = {
        url: valueFromConfig2,
        method: valueFromConfig2,
        data: valueFromConfig2,
        baseURL: defaultToConfig2,
        transformRequest: defaultToConfig2,
        transformResponse: defaultToConfig2,
        paramsSerializer: defaultToConfig2,
        timeout: defaultToConfig2,
        timeoutMessage: defaultToConfig2,
        withCredentials: defaultToConfig2,
        withXSRFToken: defaultToConfig2,
        adapter: defaultToConfig2,
        responseType: defaultToConfig2,
        xsrfCookieName: defaultToConfig2,
        xsrfHeaderName: defaultToConfig2,
        onUploadProgress: defaultToConfig2,
        onDownloadProgress: defaultToConfig2,
        decompress: defaultToConfig2,
        maxContentLength: defaultToConfig2,
        maxBodyLength: defaultToConfig2,
        beforeRedirect: defaultToConfig2,
        transport: defaultToConfig2,
        httpAgent: defaultToConfig2,
        httpsAgent: defaultToConfig2,
        cancelToken: defaultToConfig2,
        socketPath: defaultToConfig2,
        responseEncoding: defaultToConfig2,
        validateStatus: mergeDirectKeys,
        headers: (a, b, prop)=>mergeDeepProperties(headersToObject(a), headersToObject(b), prop, true)
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forEach(Object.keys({
        ...config1,
        ...config2
    }), function computeConfigValue(prop) {
        const merge = mergeMap[prop] || mergeDeepProperties;
        const configValue = merge(config1[prop], config2[prop], prop);
        __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
}
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/resolveConfig.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/platform/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$isURLSameOrigin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/isURLSameOrigin.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$cookies$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/cookies.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$buildFullPath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/core/buildFullPath.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$mergeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/core/mergeConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/core/AxiosHeaders.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$buildURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/buildURL.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const __TURBOPACK__default__export__ = (config)=>{
    const newConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$mergeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, config);
    let { data, withXSRFToken, xsrfHeaderName, xsrfCookieName, headers, auth } = newConfig;
    newConfig.headers = headers = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from(headers);
    newConfig.url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$buildURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$buildFullPath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(newConfig.baseURL, newConfig.url, newConfig.allowAbsoluteUrls), config.params, config.paramsSerializer);
    // HTTP basic authentication
    if (auth) {
        headers.set('Authorization', 'Basic ' + btoa((auth.username || '') + ':' + (auth.password ? unescape(encodeURIComponent(auth.password)) : '')));
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isFormData(data)) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hasStandardBrowserEnv || __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hasStandardBrowserWebWorkerEnv) {
            headers.setContentType(undefined); // browser handles it
        } else if (__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isFunction(data.getHeaders)) {
            // Node.js FormData (like form-data package)
            const formHeaders = data.getHeaders();
            // Only set safe headers to avoid overwriting security headers
            const allowedHeaders = [
                'content-type',
                'content-length'
            ];
            Object.entries(formHeaders).forEach(([key, val])=>{
                if (allowedHeaders.includes(key.toLowerCase())) {
                    headers.set(key, val);
                }
            });
        }
    }
    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hasStandardBrowserEnv) {
        withXSRFToken && __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));
        if (withXSRFToken || withXSRFToken !== false && (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$isURLSameOrigin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(newConfig.url)) {
            // Add xsrf header
            const xsrfValue = xsrfHeaderName && xsrfCookieName && __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$cookies$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].read(xsrfCookieName);
            if (xsrfValue) {
                headers.set(xsrfHeaderName, xsrfValue);
            }
        }
    }
    return newConfig;
};
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/adapters/xhr.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$settle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/core/settle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$defaults$2f$transitional$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/defaults/transitional.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/core/AxiosError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$CanceledError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/cancel/CanceledError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$parseProtocol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/parseProtocol.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/platform/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/core/AxiosHeaders.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$progressEventReducer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/progressEventReducer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$resolveConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/resolveConfig.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';
const __TURBOPACK__default__export__ = isXHRAdapterSupported && function(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
        const _config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$resolveConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(config);
        let requestData = _config.data;
        const requestHeaders = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from(_config.headers).normalize();
        let { responseType, onUploadProgress, onDownloadProgress } = _config;
        let onCanceled;
        let uploadThrottled, downloadThrottled;
        let flushUpload, flushDownload;
        function done() {
            flushUpload && flushUpload(); // flush events
            flushDownload && flushDownload(); // flush events
            _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);
            _config.signal && _config.signal.removeEventListener('abort', onCanceled);
        }
        let request = new XMLHttpRequest();
        request.open(_config.method.toUpperCase(), _config.url, true);
        // Set the request timeout in MS
        request.timeout = _config.timeout;
        function onloadend() {
            if (!request) {
                return;
            }
            // Prepare the response
            const responseHeaders = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from('getAllResponseHeaders' in request && request.getAllResponseHeaders());
            const responseData = !responseType || responseType === 'text' || responseType === 'json' ? request.responseText : request.response;
            const response = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config,
                request
            };
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$settle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(function _resolve(value) {
                resolve(value);
                done();
            }, function _reject(err) {
                reject(err);
                done();
            }, response);
            // Clean up request
            request = null;
        }
        if ('onloadend' in request) {
            // Use onloadend if available
            request.onloadend = onloadend;
        } else {
            // Listen for ready state to emulate onloadend
            request.onreadystatechange = function handleLoad() {
                if (!request || request.readyState !== 4) {
                    return;
                }
                // The request errored out and we didn't get a response, this will be
                // handled by onerror instead
                // With one exception: request that using file: protocol, most browsers
                // will return status as 0 even though it's a successful request
                if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
                    return;
                }
                // readystate handler is calling before onerror or ontimeout handlers,
                // so we should call onloadend on the next 'tick'
                setTimeout(onloadend);
            };
        }
        // Handle browser request cancellation (as opposed to a manual cancellation)
        request.onabort = function handleAbort() {
            if (!request) {
                return;
            }
            reject(new __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]('Request aborted', __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ECONNABORTED, config, request));
            // Clean up request
            request = null;
        };
        // Handle low level network errors
        request.onerror = function handleError(event) {
            // Browsers deliver a ProgressEvent in XHR onerror
            // (message may be empty; when present, surface it)
            // See https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/error_event
            const msg = event && event.message ? event.message : 'Network Error';
            const err = new __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](msg, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ERR_NETWORK, config, request);
            // attach the underlying event for consumers who want details
            err.event = event || null;
            reject(err);
            request = null;
        };
        // Handle timeout
        request.ontimeout = function handleTimeout() {
            let timeoutErrorMessage = _config.timeout ? 'timeout of ' + _config.timeout + 'ms exceeded' : 'timeout exceeded';
            const transitional = _config.transitional || __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$defaults$2f$transitional$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
            if (_config.timeoutErrorMessage) {
                timeoutErrorMessage = _config.timeoutErrorMessage;
            }
            reject(new __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](timeoutErrorMessage, transitional.clarifyTimeoutError ? __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ETIMEDOUT : __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ECONNABORTED, config, request));
            // Clean up request
            request = null;
        };
        // Remove Content-Type if data is undefined
        requestData === undefined && requestHeaders.setContentType(null);
        // Add headers to the request
        if ('setRequestHeader' in request) {
            __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
                request.setRequestHeader(key, val);
            });
        }
        // Add withCredentials to request if needed
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isUndefined(_config.withCredentials)) {
            request.withCredentials = !!_config.withCredentials;
        }
        // Add responseType to request if needed
        if (responseType && responseType !== 'json') {
            request.responseType = _config.responseType;
        }
        // Handle progress if needed
        if (onDownloadProgress) {
            [downloadThrottled, flushDownload] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$progressEventReducer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progressEventReducer"])(onDownloadProgress, true);
            request.addEventListener('progress', downloadThrottled);
        }
        // Not all browsers support upload events
        if (onUploadProgress && request.upload) {
            [uploadThrottled, flushUpload] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$progressEventReducer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progressEventReducer"])(onUploadProgress);
            request.upload.addEventListener('progress', uploadThrottled);
            request.upload.addEventListener('loadend', flushUpload);
        }
        if (_config.cancelToken || _config.signal) {
            // Handle cancellation
            // eslint-disable-next-line func-names
            onCanceled = (cancel)=>{
                if (!request) {
                    return;
                }
                reject(!cancel || cancel.type ? new __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$CanceledError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](null, config, request) : cancel);
                request.abort();
                request = null;
            };
            _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
            if (_config.signal) {
                _config.signal.aborted ? onCanceled() : _config.signal.addEventListener('abort', onCanceled);
            }
        }
        const protocol = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$parseProtocol$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_config.url);
        if (protocol && __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].protocols.indexOf(protocol) === -1) {
            reject(new __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]('Unsupported protocol ' + protocol + ':', __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ERR_BAD_REQUEST, config));
            return;
        }
        // Send the request
        request.send(requestData || null);
    });
};
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/composeSignals.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$CanceledError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/cancel/CanceledError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/core/AxiosError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
;
;
;
const composeSignals = (signals, timeout)=>{
    const { length } = signals = signals ? signals.filter(Boolean) : [];
    if (timeout || length) {
        let controller = new AbortController();
        let aborted;
        const onabort = function(reason) {
            if (!aborted) {
                aborted = true;
                unsubscribe();
                const err = reason instanceof Error ? reason : this.reason;
                controller.abort(err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] ? err : new __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$CanceledError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](err instanceof Error ? err.message : err));
            }
        };
        let timer = timeout && setTimeout(()=>{
            timer = null;
            onabort(new __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](`timeout ${timeout} of ms exceeded`, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ETIMEDOUT));
        }, timeout);
        const unsubscribe = ()=>{
            if (signals) {
                timer && clearTimeout(timer);
                timer = null;
                signals.forEach((signal)=>{
                    signal.unsubscribe ? signal.unsubscribe(onabort) : signal.removeEventListener('abort', onabort);
                });
                signals = null;
            }
        };
        signals.forEach((signal)=>signal.addEventListener('abort', onabort));
        const { signal } = controller;
        signal.unsubscribe = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].asap(unsubscribe);
        return signal;
    }
};
const __TURBOPACK__default__export__ = composeSignals;
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/trackStream.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "readBytes",
    ()=>readBytes,
    "streamChunk",
    ()=>streamChunk,
    "trackStream",
    ()=>trackStream
]);
const streamChunk = function*(chunk, chunkSize) {
    let len = chunk.byteLength;
    if (!chunkSize || len < chunkSize) {
        yield chunk;
        return;
    }
    let pos = 0;
    let end;
    while(pos < len){
        end = pos + chunkSize;
        yield chunk.slice(pos, end);
        pos = end;
    }
};
const readBytes = async function*(iterable, chunkSize) {
    for await (const chunk of readStream(iterable)){
        yield* streamChunk(chunk, chunkSize);
    }
};
const readStream = async function*(stream) {
    if (stream[Symbol.asyncIterator]) {
        yield* stream;
        return;
    }
    const reader = stream.getReader();
    try {
        for(;;){
            const { done, value } = await reader.read();
            if (done) {
                break;
            }
            yield value;
        }
    } finally{
        await reader.cancel();
    }
};
const trackStream = (stream, chunkSize, onProgress, onFinish)=>{
    const iterator = readBytes(stream, chunkSize);
    let bytes = 0;
    let done;
    let _onFinish = (e)=>{
        if (!done) {
            done = true;
            onFinish && onFinish(e);
        }
    };
    return new ReadableStream({
        async pull (controller) {
            try {
                const { done, value } = await iterator.next();
                if (done) {
                    _onFinish();
                    controller.close();
                    return;
                }
                let len = value.byteLength;
                if (onProgress) {
                    let loadedBytes = bytes += len;
                    onProgress(loadedBytes);
                }
                controller.enqueue(new Uint8Array(value));
            } catch (err) {
                _onFinish(err);
                throw err;
            }
        },
        cancel (reason) {
            _onFinish(reason);
            return iterator.return();
        }
    }, {
        highWaterMark: 2
    });
};
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/adapters/fetch.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getFetch",
    ()=>getFetch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/platform/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/core/AxiosError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$composeSignals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/composeSignals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$trackStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/trackStream.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/core/AxiosHeaders.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$progressEventReducer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/progressEventReducer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$resolveConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/resolveConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$settle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/core/settle.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
const DEFAULT_CHUNK_SIZE = 64 * 1024;
const { isFunction } = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const globalFetchAPI = (({ Request, Response })=>({
        Request,
        Response
    }))(__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].global);
const { ReadableStream, TextEncoder } = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].global;
const test = (fn, ...args)=>{
    try {
        return !!fn(...args);
    } catch (e) {
        return false;
    }
};
const factory = (env)=>{
    env = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].merge.call({
        skipUndefined: true
    }, globalFetchAPI, env);
    const { fetch: envFetch, Request, Response } = env;
    const isFetchSupported = envFetch ? isFunction(envFetch) : typeof fetch === 'function';
    const isRequestSupported = isFunction(Request);
    const isResponseSupported = isFunction(Response);
    if (!isFetchSupported) {
        return false;
    }
    const isReadableStreamSupported = isFetchSupported && isFunction(ReadableStream);
    const encodeText = isFetchSupported && (typeof TextEncoder === 'function' ? ((encoder)=>(str)=>encoder.encode(str))(new TextEncoder()) : async (str)=>new Uint8Array(await new Request(str).arrayBuffer()));
    const supportsRequestStream = isRequestSupported && isReadableStreamSupported && test(()=>{
        let duplexAccessed = false;
        const hasContentType = new Request(__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].origin, {
            body: new ReadableStream(),
            method: 'POST',
            get duplex () {
                duplexAccessed = true;
                return 'half';
            }
        }).headers.has('Content-Type');
        return duplexAccessed && !hasContentType;
    });
    const supportsResponseStream = isResponseSupported && isReadableStreamSupported && test(()=>__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isReadableStream(new Response('').body));
    const resolvers = {
        stream: supportsResponseStream && ((res)=>res.body)
    };
    isFetchSupported && (()=>{
        [
            'text',
            'arrayBuffer',
            'blob',
            'formData',
            'stream'
        ].forEach((type)=>{
            !resolvers[type] && (resolvers[type] = (res, config)=>{
                let method = res && res[type];
                if (method) {
                    return method.call(res);
                }
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](`Response type '${type}' is not supported`, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ERR_NOT_SUPPORT, config);
            });
        });
    })();
    const getBodyLength = async (body)=>{
        if (body == null) {
            return 0;
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isBlob(body)) {
            return body.size;
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isSpecCompliantForm(body)) {
            const _request = new Request(__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].origin, {
                method: 'POST',
                body
            });
            return (await _request.arrayBuffer()).byteLength;
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isArrayBufferView(body) || __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isArrayBuffer(body)) {
            return body.byteLength;
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isURLSearchParams(body)) {
            body = body + '';
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isString(body)) {
            return (await encodeText(body)).byteLength;
        }
    };
    const resolveBodyLength = async (headers, body)=>{
        const length = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].toFiniteNumber(headers.getContentLength());
        return length == null ? getBodyLength(body) : length;
    };
    return async (config)=>{
        let { url, method, data, signal, cancelToken, timeout, onDownloadProgress, onUploadProgress, responseType, headers, withCredentials = 'same-origin', fetchOptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$resolveConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(config);
        let _fetch = envFetch || fetch;
        responseType = responseType ? (responseType + '').toLowerCase() : 'text';
        let composedSignal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$composeSignals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])([
            signal,
            cancelToken && cancelToken.toAbortSignal()
        ], timeout);
        let request = null;
        const unsubscribe = composedSignal && composedSignal.unsubscribe && (()=>{
            composedSignal.unsubscribe();
        });
        let requestContentLength;
        try {
            if (onUploadProgress && supportsRequestStream && method !== 'get' && method !== 'head' && (requestContentLength = await resolveBodyLength(headers, data)) !== 0) {
                let _request = new Request(url, {
                    method: 'POST',
                    body: data,
                    duplex: "half"
                });
                let contentTypeHeader;
                if (__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isFormData(data) && (contentTypeHeader = _request.headers.get('content-type'))) {
                    headers.setContentType(contentTypeHeader);
                }
                if (_request.body) {
                    const [onProgress, flush] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$progressEventReducer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progressEventDecorator"])(requestContentLength, (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$progressEventReducer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progressEventReducer"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$progressEventReducer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asyncDecorator"])(onUploadProgress)));
                    data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$trackStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackStream"])(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush);
                }
            }
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isString(withCredentials)) {
                withCredentials = withCredentials ? 'include' : 'omit';
            }
            // Cloudflare Workers throws when credentials are defined
            // see https://github.com/cloudflare/workerd/issues/902
            const isCredentialsSupported = isRequestSupported && "credentials" in Request.prototype;
            const resolvedOptions = {
                ...fetchOptions,
                signal: composedSignal,
                method: method.toUpperCase(),
                headers: headers.normalize().toJSON(),
                body: data,
                duplex: "half",
                credentials: isCredentialsSupported ? withCredentials : undefined
            };
            request = isRequestSupported && new Request(url, resolvedOptions);
            let response = await (isRequestSupported ? _fetch(request, fetchOptions) : _fetch(url, resolvedOptions));
            const isStreamResponse = supportsResponseStream && (responseType === 'stream' || responseType === 'response');
            if (supportsResponseStream && (onDownloadProgress || isStreamResponse && unsubscribe)) {
                const options = {};
                [
                    'status',
                    'statusText',
                    'headers'
                ].forEach((prop)=>{
                    options[prop] = response[prop];
                });
                const responseContentLength = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].toFiniteNumber(response.headers.get('content-length'));
                const [onProgress, flush] = onDownloadProgress && (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$progressEventReducer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progressEventDecorator"])(responseContentLength, (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$progressEventReducer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progressEventReducer"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$progressEventReducer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asyncDecorator"])(onDownloadProgress), true)) || [];
                response = new Response((0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$trackStream$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackStream"])(response.body, DEFAULT_CHUNK_SIZE, onProgress, ()=>{
                    flush && flush();
                    unsubscribe && unsubscribe();
                }), options);
            }
            responseType = responseType || 'text';
            let responseData = await resolvers[__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].findKey(resolvers, responseType) || 'text'](response, config);
            !isStreamResponse && unsubscribe && unsubscribe();
            return await new Promise((resolve, reject)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$settle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(resolve, reject, {
                    data: responseData,
                    headers: __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from(response.headers),
                    status: response.status,
                    statusText: response.statusText,
                    config,
                    request
                });
            });
        } catch (err) {
            unsubscribe && unsubscribe();
            if (err && err.name === 'TypeError' && /Load failed|fetch/i.test(err.message)) {
                throw Object.assign(new __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]('Network Error', __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ERR_NETWORK, config, request), {
                    cause: err.cause || err
                });
            }
            throw __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from(err, err && err.code, config, request);
        }
    };
};
const seedCache = new Map();
const getFetch = (config)=>{
    let env = config ? config.env : {};
    const { fetch: fetch1, Request, Response } = env;
    const seeds = [
        Request,
        Response,
        fetch1
    ];
    let len = seeds.length, i = len, seed, target, map = seedCache;
    while(i--){
        seed = seeds[i];
        target = map.get(seed);
        target === undefined && map.set(seed, target = i ? new Map() : factory(env));
        map = target;
    }
    return target;
};
const adapter = getFetch();
const __TURBOPACK__default__export__ = adapter;
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/adapters/adapters.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$null$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/null.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$adapters$2f$xhr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/adapters/xhr.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$adapters$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/adapters/fetch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/core/AxiosError.js [app-client] (ecmascript)");
;
;
;
;
;
const knownAdapters = {
    http: __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$null$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    xhr: __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$adapters$2f$xhr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    fetch: {
        get: __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$adapters$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFetch"]
    }
};
__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forEach(knownAdapters, (fn, value)=>{
    if (fn) {
        try {
            Object.defineProperty(fn, 'name', {
                value
            });
        } catch (e) {
        // eslint-disable-next-line no-empty
        }
        Object.defineProperty(fn, 'adapterName', {
            value
        });
    }
});
const renderReason = (reason)=>`- ${reason}`;
const isResolvedHandle = (adapter)=>__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isFunction(adapter) || adapter === null || adapter === false;
const __TURBOPACK__default__export__ = {
    getAdapter: (adapters, config)=>{
        adapters = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isArray(adapters) ? adapters : [
            adapters
        ];
        const { length } = adapters;
        let nameOrAdapter;
        let adapter;
        const rejectedReasons = {};
        for(let i = 0; i < length; i++){
            nameOrAdapter = adapters[i];
            let id;
            adapter = nameOrAdapter;
            if (!isResolvedHandle(nameOrAdapter)) {
                adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
                if (adapter === undefined) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](`Unknown adapter '${id}'`);
                }
            }
            if (adapter && (__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isFunction(adapter) || (adapter = adapter.get(config)))) {
                break;
            }
            rejectedReasons[id || '#' + i] = adapter;
        }
        if (!adapter) {
            const reasons = Object.entries(rejectedReasons).map(([id, state])=>`adapter ${id} ` + (state === false ? 'is not supported by the environment' : 'is not available in the build'));
            let s = length ? reasons.length > 1 ? 'since :\n' + reasons.map(renderReason).join('\n') : ' ' + renderReason(reasons[0]) : 'as no adapter specified';
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](`There is no suitable adapter to dispatch the request ` + s, 'ERR_NOT_SUPPORT');
        }
        return adapter;
    },
    adapters: knownAdapters
};
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/core/dispatchRequest.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>dispatchRequest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$transformData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/core/transformData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$isCancel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/cancel/isCancel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$defaults$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/defaults/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$CanceledError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/cancel/CanceledError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/core/AxiosHeaders.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$adapters$2f$adapters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/adapters/adapters.js [app-client] (ecmascript)");
'use strict';
;
;
;
;
;
;
/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */ function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
        config.cancelToken.throwIfRequested();
    }
    if (config.signal && config.signal.aborted) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$CanceledError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](null, config);
    }
}
function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    config.headers = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from(config.headers);
    // Transform request data
    config.data = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$transformData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].call(config, config.transformRequest);
    if ([
        'post',
        'put',
        'patch'
    ].indexOf(config.method) !== -1) {
        config.headers.setContentType('application/x-www-form-urlencoded', false);
    }
    const adapter = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$adapters$2f$adapters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getAdapter(config.adapter || __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$defaults$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].adapter, config);
    return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);
        // Transform response data
        response.data = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$transformData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].call(config, config.transformResponse, response);
        response.headers = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from(response.headers);
        return response;
    }, function onAdapterRejection(reason) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$isCancel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(reason)) {
            throwIfCancellationRequested(config);
            // Transform response data
            if (reason && reason.response) {
                reason.response.data = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$transformData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].call(config, config.transformResponse, reason.response);
                reason.response.headers = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].from(reason.response.headers);
            }
        }
        return Promise.reject(reason);
    });
}
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/env/data.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VERSION",
    ()=>VERSION
]);
const VERSION = "1.12.2";
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/validator.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$env$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/env/data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/core/AxiosError.js [app-client] (ecmascript)");
'use strict';
;
;
const validators = {};
// eslint-disable-next-line func-names
[
    'object',
    'boolean',
    'number',
    'function',
    'string',
    'symbol'
].forEach((type, i)=>{
    validators[type] = function validator(thing) {
        return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
    };
});
const deprecatedWarnings = {};
/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */ validators.transitional = function transitional(validator, version, message) {
    function formatMessage(opt, desc) {
        return '[Axios v' + __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$env$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VERSION"] + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
    }
    // eslint-disable-next-line func-names
    return (value, opt, opts)=>{
        if (validator === false) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')), __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ERR_DEPRECATED);
        }
        if (version && !deprecatedWarnings[opt]) {
            deprecatedWarnings[opt] = true;
            // eslint-disable-next-line no-console
            console.warn(formatMessage(opt, ' has been deprecated since v' + version + ' and will be removed in the near future'));
        }
        return validator ? validator(value, opt, opts) : true;
    };
};
validators.spelling = function spelling(correctSpelling) {
    return (value, opt)=>{
        // eslint-disable-next-line no-console
        console.warn(`${opt} is likely a misspelling of ${correctSpelling}`);
        return true;
    };
};
/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */ function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== 'object') {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]('options must be an object', __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ERR_BAD_OPTION_VALUE);
    }
    const keys = Object.keys(options);
    let i = keys.length;
    while(i-- > 0){
        const opt = keys[i];
        const validator = schema[opt];
        if (validator) {
            const value = options[opt];
            const result = value === undefined || validator(value, opt, options);
            if (result !== true) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]('option ' + opt + ' must be ' + result, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ERR_BAD_OPTION_VALUE);
            }
            continue;
        }
        if (allowUnknown !== true) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]('Unknown option ' + opt, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ERR_BAD_OPTION);
        }
    }
}
const __TURBOPACK__default__export__ = {
    assertOptions,
    validators
};
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/core/Axios.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$buildURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/buildURL.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$InterceptorManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/core/InterceptorManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$dispatchRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/core/dispatchRequest.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$mergeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/core/mergeConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$buildFullPath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/core/buildFullPath.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$validator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/validator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/core/AxiosHeaders.js [app-client] (ecmascript)");
'use strict';
;
;
;
;
;
;
;
;
const validators = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$validator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */ class Axios {
    constructor(instanceConfig){
        this.defaults = instanceConfig || {};
        this.interceptors = {
            request: new __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$InterceptorManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](),
            response: new __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$InterceptorManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]()
        };
    }
    /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */ async request(configOrUrl, config) {
        try {
            return await this._request(configOrUrl, config);
        } catch (err) {
            if (err instanceof Error) {
                let dummy = {};
                Error.captureStackTrace ? Error.captureStackTrace(dummy) : dummy = new Error();
                // slice off the Error: ... line
                const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, '') : '';
                try {
                    if (!err.stack) {
                        err.stack = stack;
                    // match without the 2 top stack lines
                    } else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ''))) {
                        err.stack += '\n' + stack;
                    }
                } catch (e) {
                // ignore the case where "stack" is an un-writable property
                }
            }
            throw err;
        }
    }
    _request(configOrUrl, config) {
        /*eslint no-param-reassign:0*/ // Allow for axios('example/url'[, config]) a la fetch API
        if (typeof configOrUrl === 'string') {
            config = config || {};
            config.url = configOrUrl;
        } else {
            config = configOrUrl || {};
        }
        config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$mergeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this.defaults, config);
        const { transitional, paramsSerializer, headers } = config;
        if (transitional !== undefined) {
            __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$validator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].assertOptions(transitional, {
                silentJSONParsing: validators.transitional(validators.boolean),
                forcedJSONParsing: validators.transitional(validators.boolean),
                clarifyTimeoutError: validators.transitional(validators.boolean)
            }, false);
        }
        if (paramsSerializer != null) {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isFunction(paramsSerializer)) {
                config.paramsSerializer = {
                    serialize: paramsSerializer
                };
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$validator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].assertOptions(paramsSerializer, {
                    encode: validators.function,
                    serialize: validators.function
                }, true);
            }
        }
        // Set config.allowAbsoluteUrls
        if (config.allowAbsoluteUrls !== undefined) {
        // do nothing
        } else if (this.defaults.allowAbsoluteUrls !== undefined) {
            config.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls;
        } else {
            config.allowAbsoluteUrls = true;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$validator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].assertOptions(config, {
            baseUrl: validators.spelling('baseURL'),
            withXsrfToken: validators.spelling('withXSRFToken')
        }, true);
        // Set config.method
        config.method = (config.method || this.defaults.method || 'get').toLowerCase();
        // Flatten headers
        let contextHeaders = headers && __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].merge(headers.common, headers[config.method]);
        headers && __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forEach([
            'delete',
            'get',
            'head',
            'post',
            'put',
            'patch',
            'common'
        ], (method)=>{
            delete headers[method];
        });
        config.headers = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].concat(contextHeaders, headers);
        // filter out skipped interceptors
        const requestInterceptorChain = [];
        let synchronousRequestInterceptors = true;
        this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
            if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
                return;
            }
            synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
            requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
        });
        const responseInterceptorChain = [];
        this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
            responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
        });
        let promise;
        let i = 0;
        let len;
        if (!synchronousRequestInterceptors) {
            const chain = [
                __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$dispatchRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].bind(this),
                undefined
            ];
            chain.unshift(...requestInterceptorChain);
            chain.push(...responseInterceptorChain);
            len = chain.length;
            promise = Promise.resolve(config);
            while(i < len){
                promise = promise.then(chain[i++], chain[i++]);
            }
            return promise;
        }
        len = requestInterceptorChain.length;
        let newConfig = config;
        while(i < len){
            const onFulfilled = requestInterceptorChain[i++];
            const onRejected = requestInterceptorChain[i++];
            try {
                newConfig = onFulfilled(newConfig);
            } catch (error) {
                onRejected.call(this, error);
                break;
            }
        }
        try {
            promise = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$dispatchRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].call(this, newConfig);
        } catch (error) {
            return Promise.reject(error);
        }
        i = 0;
        len = responseInterceptorChain.length;
        while(i < len){
            promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
        }
        return promise;
    }
    getUri(config) {
        config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$mergeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(this.defaults, config);
        const fullPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$buildFullPath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(config.baseURL, config.url, config.allowAbsoluteUrls);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$buildURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(fullPath, config.params, config.paramsSerializer);
    }
}
// Provide aliases for supported request methods
__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forEach([
    'delete',
    'get',
    'head',
    'options'
], function forEachMethodNoData(method) {
    /*eslint func-names:0*/ Axios.prototype[method] = function(url, config) {
        return this.request((0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$mergeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(config || {}, {
            method,
            url,
            data: (config || {}).data
        }));
    };
});
__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forEach([
    'post',
    'put',
    'patch'
], function forEachMethodWithData(method) {
    /*eslint func-names:0*/ function generateHTTPMethod(isForm) {
        return function httpMethod(url, data, config) {
            return this.request((0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$mergeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(config || {}, {
                method,
                headers: isForm ? {
                    'Content-Type': 'multipart/form-data'
                } : {},
                url,
                data
            }));
        };
    }
    Axios.prototype[method] = generateHTTPMethod();
    Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});
const __TURBOPACK__default__export__ = Axios;
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/cancel/CancelToken.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$CanceledError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/cancel/CanceledError.js [app-client] (ecmascript)");
'use strict';
;
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */ class CancelToken {
    constructor(executor){
        if (typeof executor !== 'function') {
            throw new TypeError('executor must be a function.');
        }
        let resolvePromise;
        this.promise = new Promise(function promiseExecutor(resolve) {
            resolvePromise = resolve;
        });
        const token = this;
        // eslint-disable-next-line func-names
        this.promise.then((cancel)=>{
            if (!token._listeners) return;
            let i = token._listeners.length;
            while(i-- > 0){
                token._listeners[i](cancel);
            }
            token._listeners = null;
        });
        // eslint-disable-next-line func-names
        this.promise.then = (onfulfilled)=>{
            let _resolve;
            // eslint-disable-next-line func-names
            const promise = new Promise((resolve)=>{
                token.subscribe(resolve);
                _resolve = resolve;
            }).then(onfulfilled);
            promise.cancel = function reject() {
                token.unsubscribe(_resolve);
            };
            return promise;
        };
        executor(function cancel(message, config, request) {
            if (token.reason) {
                // Cancellation has already been requested
                return;
            }
            token.reason = new __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$CanceledError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](message, config, request);
            resolvePromise(token.reason);
        });
    }
    /**
   * Throws a `CanceledError` if cancellation has been requested.
   */ throwIfRequested() {
        if (this.reason) {
            throw this.reason;
        }
    }
    /**
   * Subscribe to the cancel signal
   */ subscribe(listener) {
        if (this.reason) {
            listener(this.reason);
            return;
        }
        if (this._listeners) {
            this._listeners.push(listener);
        } else {
            this._listeners = [
                listener
            ];
        }
    }
    /**
   * Unsubscribe from the cancel signal
   */ unsubscribe(listener) {
        if (!this._listeners) {
            return;
        }
        const index = this._listeners.indexOf(listener);
        if (index !== -1) {
            this._listeners.splice(index, 1);
        }
    }
    toAbortSignal() {
        const controller = new AbortController();
        const abort = (err)=>{
            controller.abort(err);
        };
        this.subscribe(abort);
        controller.signal.unsubscribe = ()=>this.unsubscribe(abort);
        return controller.signal;
    }
    /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */ static source() {
        let cancel;
        const token = new CancelToken(function executor(c) {
            cancel = c;
        });
        return {
            token,
            cancel
        };
    }
}
const __TURBOPACK__default__export__ = CancelToken;
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/spread.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>spread
]);
'use strict';
function spread(callback) {
    return function wrap(arr) {
        return callback.apply(null, arr);
    };
}
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/isAxiosError.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>isAxiosError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
'use strict';
;
function isAxiosError(payload) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isObject(payload) && payload.isAxiosError === true;
}
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/HttpStatusCode.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const HttpStatusCode = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(HttpStatusCode).forEach(([key, value])=>{
    HttpStatusCode[value] = key;
});
const __TURBOPACK__default__export__ = HttpStatusCode;
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/axios.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$bind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/bind.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$Axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/core/Axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$mergeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/core/mergeConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$defaults$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/defaults/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$formDataToJSON$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/formDataToJSON.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$CanceledError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/cancel/CanceledError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$CancelToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/cancel/CancelToken.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$isCancel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/cancel/isCancel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$env$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/env/data.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$toFormData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/toFormData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/core/AxiosError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$isAxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/isAxiosError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/core/AxiosHeaders.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$adapters$2f$adapters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/adapters/adapters.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$HttpStatusCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/helpers/HttpStatusCode.js [app-client] (ecmascript)");
'use strict';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */ function createInstance(defaultConfig) {
    const context = new __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$Axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](defaultConfig);
    const instance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$bind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$Axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].prototype.request, context);
    // Copy axios.prototype to instance
    __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].extend(instance, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$Axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].prototype, context, {
        allOwnKeys: true
    });
    // Copy context to instance
    __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].extend(instance, context, null, {
        allOwnKeys: true
    });
    // Factory for creating new instances
    instance.create = function create(instanceConfig) {
        return createInstance((0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$mergeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(defaultConfig, instanceConfig));
    };
    return instance;
}
// Create the default instance to be exported
const axios = createInstance(__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$defaults$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
// Expose Axios class to allow class inheritance
axios.Axios = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$Axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
// Expose Cancel & CancelToken
axios.CanceledError = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$CanceledError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
axios.CancelToken = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$CancelToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
axios.isCancel = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$isCancel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
axios.VERSION = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$env$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VERSION"];
axios.toFormData = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$toFormData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
// Expose AxiosError class
axios.AxiosError = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;
// Expose all/spread
axios.all = function all(promises) {
    return Promise.all(promises);
};
axios.spread = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
// Expose isAxiosError
axios.isAxiosError = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$isAxiosError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
// Expose mergeConfig
axios.mergeConfig = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$mergeConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
axios.AxiosHeaders = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
axios.formToJSON = (thing)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$formDataToJSON$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isHTMLForm(thing) ? new FormData(thing) : thing);
axios.getAdapter = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$adapters$2f$adapters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getAdapter;
axios.HttpStatusCode = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$HttpStatusCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
axios.default = axios;
const __TURBOPACK__default__export__ = axios;
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/utils/common.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateUuid",
    ()=>generateUuid,
    "isInIFrame",
    ()=>isInIFrame,
    "isNode",
    ()=>isNode
]);
const isNode = typeof window === "undefined";
const isInIFrame = !isNode && window.self !== window.top;
const generateUuid = ()=>{
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/uuid/dist/native.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const __TURBOPACK__default__export__ = {
    randomUUID
};
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/uuid/dist/rng.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>rng
]);
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
    if (!getRandomValues) {
        if (typeof crypto === 'undefined' || !crypto.getRandomValues) {
            throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
        }
        getRandomValues = crypto.getRandomValues.bind(crypto);
    }
    return getRandomValues(rnds8);
}
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/uuid/dist/regex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/uuid/dist/validate.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$uuid$2f$dist$2f$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/uuid/dist/regex.js [app-client] (ecmascript)");
;
function validate(uuid) {
    return typeof uuid === 'string' && __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$uuid$2f$dist$2f$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].test(uuid);
}
const __TURBOPACK__default__export__ = validate;
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/uuid/dist/stringify.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "unsafeStringify",
    ()=>unsafeStringify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$uuid$2f$dist$2f$validate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/uuid/dist/validate.js [app-client] (ecmascript)");
;
const byteToHex = [];
for(let i = 0; i < 256; ++i){
    byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
    return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$uuid$2f$dist$2f$validate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(uuid)) {
        throw TypeError('Stringified UUID is invalid');
    }
    return uuid;
}
const __TURBOPACK__default__export__ = stringify;
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/uuid/dist/v4.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$uuid$2f$dist$2f$native$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/uuid/dist/native.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$uuid$2f$dist$2f$rng$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/uuid/dist/rng.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$uuid$2f$dist$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/uuid/dist/stringify.js [app-client] (ecmascript)");
;
;
;
function _v4(options, buf, offset) {
    options = options || {};
    const rnds = options.random ?? options.rng?.() ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$uuid$2f$dist$2f$rng$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    if (rnds.length < 16) {
        throw new Error('Random bytes length must be >= 16');
    }
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80;
    if (buf) {
        offset = offset || 0;
        if (offset < 0 || offset + 16 > buf.length) {
            throw new RangeError(`UUID byte range ${offset}:${offset + 15} is out of buffer bounds`);
        }
        for(let i = 0; i < 16; ++i){
            buf[offset + i] = rnds[i];
        }
        return buf;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$uuid$2f$dist$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unsafeStringify"])(rnds);
}
function v4(options, buf, offset) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$uuid$2f$dist$2f$native$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].randomUUID && !buf && !options) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$uuid$2f$dist$2f$native$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].randomUUID();
    }
    return _v4(options, buf, offset);
}
const __TURBOPACK__default__export__ = v4;
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/uuid/dist/v4.js [app-client] (ecmascript) <export default as v4>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "v4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/uuid/dist/v4.js [app-client] (ecmascript)");
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/utils/axios-client.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Base44Error",
    ()=>Base44Error,
    "createAxiosClient",
    ()=>createAxiosClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/next-app/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$utils$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/utils/common.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/uuid/dist/v4.js [app-client] (ecmascript) <export default as v4>");
;
;
;
class Base44Error extends Error {
    /**
     * Creates a new Base44Error instance.
     *
     * @param message - Human-readable error message
     * @param status - HTTP status code
     * @param code - Error code from the API
     * @param data - Full response data from the server
     * @param originalError - Original axios error object
     * @internal
     */ constructor(message, status, code, data, originalError){
        super(message);
        this.name = "Base44Error";
        this.status = status;
        this.code = code;
        this.data = data;
        this.originalError = originalError;
    }
    /**
     * Serializes the error to a JSON-safe object.
     *
     * Useful for logging or sending error information to external services
     * without circular reference issues.
     *
     * @returns JSON-safe representation of the error.
     *
     * @example
     * ```typescript
     * try {
     *   await client.entities.Todo.get('invalid-id');
     * } catch (error) {
     *   if (error instanceof Base44Error) {
     *     const json = error.toJSON();
     *     console.log(json);
     *     // {
     *     //   name: "Base44Error",
     *     //   message: "Not found",
     *     //   status: 404,
     *     //   code: "NOT_FOUND",
     *     //   data: { ... }
     *     // }
     *   }
     * }
     * ```
     */ toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            code: this.code,
            data: this.data
        };
    }
}
/**
 * Safely logs error information without circular references.
 *
 * @param prefix - Prefix for the log message
 * @param error - The error to log
 * @internal
 */ function safeErrorLog(prefix, error) {
    if (error instanceof Base44Error) {
        console.error(`${prefix} ${error.status}: ${error.message}`);
        if (error.data) {
            try {
                console.error("Error data:", JSON.stringify(error.data, null, 2));
            } catch (e) {
                console.error("Error data: [Cannot stringify error data]");
            }
        }
    } else {
        console.error(`${prefix} ${error instanceof Error ? error.message : String(error)}`);
    }
}
function createAxiosClient({ baseURL, headers = {}, token, interceptResponses = true, onError }) {
    const client = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
        baseURL,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            ...headers
        }
    });
    // Add token to requests if available
    if (token) {
        client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    // Add origin URL in browser environment
    client.interceptors.request.use({
        "createAxiosClient.use": (config)=>{
            if (typeof window !== "undefined") {
                config.headers.set("X-Origin-URL", window.location.href);
            }
            const requestId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
            config.requestId = requestId;
            if (__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$utils$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInIFrame"]) {
                try {
                    window.parent.postMessage({
                        type: "api-request-start",
                        requestId,
                        data: {
                            url: baseURL + config.url,
                            method: config.method,
                            body: config.data instanceof FormData ? "[FormData object]" : config.data
                        }
                    }, "*");
                } catch (_a) {
                /* skip the logging */ }
            }
            return config;
        }
    }["createAxiosClient.use"]);
    // Handle responses
    if (interceptResponses) {
        client.interceptors.response.use({
            "createAxiosClient.use": (response)=>{
                var _a;
                const requestId = (_a = response.config) === null || _a === void 0 ? void 0 : _a.requestId;
                try {
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$utils$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInIFrame"] && requestId) {
                        window.parent.postMessage({
                            type: "api-request-end",
                            requestId,
                            data: {
                                statusCode: response.status,
                                response: response.data
                            }
                        }, "*");
                    }
                } catch (_b) {
                /* do nothing */ }
                return response.data;
            }
        }["createAxiosClient.use"], {
            "createAxiosClient.use": (error)=>{
                var _a, _b, _c, _d, _e, _f, _g, _h;
                const message = ((_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || ((_d = (_c = error.response) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.detail) || error.message;
                const base44Error = new Base44Error(message, (_e = error.response) === null || _e === void 0 ? void 0 : _e.status, (_g = (_f = error.response) === null || _f === void 0 ? void 0 : _f.data) === null || _g === void 0 ? void 0 : _g.code, (_h = error.response) === null || _h === void 0 ? void 0 : _h.data, error);
                // Log errors in development
                if ("TURBOPACK compile-time truthy", 1) {
                    safeErrorLog("[Base44 SDK Error]", base44Error);
                }
                onError === null || onError === void 0 ? void 0 : onError(base44Error);
                return Promise.reject(base44Error);
            }
        }["createAxiosClient.use"]);
    }
    return client;
}
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/modules/entities.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Creates the entities module for the Base44 SDK.
 *
 * @param config - Configuration object containing axios, appId, and getSocket
 * @returns Entities module with dynamic entity access
 * @internal
 */ __turbopack_context__.s([
    "createEntitiesModule",
    ()=>createEntitiesModule
]);
function createEntitiesModule(config) {
    const { axios, appId, getSocket } = config;
    // Using Proxy to dynamically handle entity names
    return new Proxy({}, {
        get (target, entityName) {
            // Don't create handlers for internal properties
            if (typeof entityName !== "string" || entityName === "then" || entityName.startsWith("_")) {
                return undefined;
            }
            // Create entity handler
            return createEntityHandler(axios, appId, entityName, getSocket);
        }
    });
}
/**
 * Parses the realtime message data and extracts event information.
 * @internal
 */ function parseRealtimeMessage(dataStr) {
    var _a;
    try {
        const parsed = JSON.parse(dataStr);
        return {
            type: parsed.type,
            data: parsed.data,
            id: parsed.id || ((_a = parsed.data) === null || _a === void 0 ? void 0 : _a.id),
            timestamp: parsed.timestamp || new Date().toISOString()
        };
    } catch (error) {
        console.warn("[Base44 SDK] Failed to parse realtime message:", error);
        return null;
    }
}
/**
 * Creates a handler for a specific entity.
 *
 * @param axios - Axios instance
 * @param appId - Application ID
 * @param entityName - Entity name
 * @param getSocket - Function to get the socket instance
 * @returns Entity handler with CRUD methods
 * @internal
 */ function createEntityHandler(axios, appId, entityName, getSocket) {
    const baseURL = `/apps/${appId}/entities/${entityName}`;
    return {
        // List entities with optional pagination and sorting
        async list (sort, limit, skip, fields) {
            const params = {};
            if (sort) params.sort = sort;
            if (limit) params.limit = limit;
            if (skip) params.skip = skip;
            if (fields) params.fields = Array.isArray(fields) ? fields.join(",") : fields;
            return axios.get(baseURL, {
                params
            });
        },
        // Filter entities based on query
        async filter (query, sort, limit, skip, fields) {
            const params = {
                q: JSON.stringify(query)
            };
            if (sort) params.sort = sort;
            if (limit) params.limit = limit;
            if (skip) params.skip = skip;
            if (fields) params.fields = Array.isArray(fields) ? fields.join(",") : fields;
            return axios.get(baseURL, {
                params
            });
        },
        // Get entity by ID
        async get (id) {
            return axios.get(`${baseURL}/${id}`);
        },
        // Create new entity
        async create (data) {
            return axios.post(baseURL, data);
        },
        // Update entity by ID
        async update (id, data) {
            return axios.put(`${baseURL}/${id}`, data);
        },
        // Delete entity by ID
        async delete (id) {
            return axios.delete(`${baseURL}/${id}`);
        },
        // Delete multiple entities based on query
        async deleteMany (query) {
            return axios.delete(baseURL, {
                data: query
            });
        },
        // Create multiple entities in a single request
        async bulkCreate (data) {
            return axios.post(`${baseURL}/bulk`, data);
        },
        // Import entities from a file
        async importEntities (file) {
            const formData = new FormData();
            formData.append("file", file, file.name);
            return axios.post(`${baseURL}/import`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
        },
        // Subscribe to realtime updates
        subscribe (callback) {
            const room = `entities:${appId}:${entityName}`;
            // Get the socket and subscribe to the room
            const socket = getSocket();
            const unsubscribe = socket.subscribeToRoom(room, {
                update_model: (msg)=>{
                    const event = parseRealtimeMessage(msg.data);
                    if (!event) {
                        return;
                    }
                    try {
                        callback(event);
                    } catch (error) {
                        console.error("[Base44 SDK] Subscription callback error:", error);
                    }
                }
            });
            return unsubscribe;
        }
    };
}
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/modules/custom-integrations.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Creates the custom integrations module for the Base44 SDK.
 *
 * @param axios - Axios instance for making HTTP requests
 * @param appId - Application ID
 * @returns Custom integrations module with `call()` method
 * @internal
 */ __turbopack_context__.s([
    "createCustomIntegrationsModule",
    ()=>createCustomIntegrationsModule
]);
function createCustomIntegrationsModule(axios, appId) {
    return {
        async call (slug, operationId, params) {
            // Validate required parameters
            if (!(slug === null || slug === void 0 ? void 0 : slug.trim())) {
                throw new Error("Integration slug is required and cannot be empty");
            }
            if (!(operationId === null || operationId === void 0 ? void 0 : operationId.trim())) {
                throw new Error("Operation ID is required and cannot be empty");
            }
            // Convert camelCase to snake_case for Python backend
            const { pathParams, queryParams, ...rest } = params !== null && params !== void 0 ? params : {};
            const body = {
                ...rest,
                ...pathParams && {
                    path_params: pathParams
                },
                ...queryParams && {
                    query_params: queryParams
                }
            };
            // Make the API call
            const response = await axios.post(`/apps/${appId}/integrations/custom/${slug}/${operationId}`, body);
            // The axios interceptor extracts response.data, so we get the payload directly
            return response;
        }
    };
}
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/modules/integrations.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createIntegrationsModule",
    ()=>createIntegrationsModule
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$modules$2f$custom$2d$integrations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/modules/custom-integrations.js [app-client] (ecmascript)");
;
function createIntegrationsModule(axios, appId) {
    // Create the custom integrations module once
    const customModule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$modules$2f$custom$2d$integrations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCustomIntegrationsModule"])(axios, appId);
    return new Proxy({}, {
        get (target, packageName) {
            // Skip internal properties
            if (typeof packageName !== "string" || packageName === "then" || packageName.startsWith("_")) {
                return undefined;
            }
            // Handle 'custom' specially - return the custom integrations module
            if (packageName === "custom") {
                return customModule;
            }
            // Create a proxy for integration endpoints
            return new Proxy({}, {
                get (target, endpointName) {
                    // Skip internal properties
                    if (typeof endpointName !== "string" || endpointName === "then" || endpointName.startsWith("_")) {
                        return undefined;
                    }
                    // Return a function that calls the integration endpoint
                    // This allows: client.integrations.PackageName.EndpointName(data)
                    return async (data)=>{
                        // Validate input
                        if (typeof data === "string") {
                            throw new Error(`Integration ${endpointName} must receive an object with named parameters, received: ${data}`);
                        }
                        let formData;
                        let contentType;
                        // Handle file uploads with FormData
                        if (data instanceof FormData || data && Object.values(data).some((value)=>value instanceof File)) {
                            formData = new FormData();
                            Object.keys(data).forEach((key)=>{
                                if (data[key] instanceof File) {
                                    formData.append(key, data[key], data[key].name);
                                } else if (typeof data[key] === "object" && data[key] !== null) {
                                    formData.append(key, JSON.stringify(data[key]));
                                } else {
                                    formData.append(key, data[key]);
                                }
                            });
                            contentType = "multipart/form-data";
                        } else {
                            formData = data;
                            contentType = "application/json";
                        }
                        // For Core package
                        if (packageName === "Core") {
                            return axios.post(`/apps/${appId}/integration-endpoints/Core/${endpointName}`, formData || data, {
                                headers: {
                                    "Content-Type": contentType
                                }
                            });
                        }
                        // For other packages
                        return axios.post(`/apps/${appId}/integration-endpoints/installable/${packageName}/integration-endpoints/${endpointName}`, formData || data, {
                            headers: {
                                "Content-Type": contentType
                            }
                        });
                    };
                }
            });
        }
    });
}
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/modules/auth.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Creates the auth module for the Base44 SDK.
 *
 * @param axios - Axios instance for API requests
 * @param functionsAxiosClient - Axios instance for functions API requests
 * @param appId - Application ID
 * @param options - Configuration options including server URLs
 * @returns Auth module with authentication and user management methods
 * @internal
 */ __turbopack_context__.s([
    "createAuthModule",
    ()=>createAuthModule
]);
function createAuthModule(axios, functionsAxiosClient, appId, options) {
    return {
        // Get current user information
        async me () {
            return axios.get(`/apps/${appId}/entities/User/me`);
        },
        // Update current user data
        async updateMe (data) {
            return axios.put(`/apps/${appId}/entities/User/me`, data);
        },
        // Redirects the user to the app's login page
        redirectToLogin (nextUrl) {
            var _a;
            // This function only works in a browser environment
            if (typeof window === "undefined") {
                throw new Error("Login method can only be used in a browser environment");
            }
            // If nextUrl is not provided, use the current URL
            const redirectUrl = nextUrl ? new URL(nextUrl, window.location.origin).toString() : window.location.href;
            // Build the login URL
            const loginUrl = `${(_a = options.appBaseUrl) !== null && _a !== void 0 ? _a : ""}/login?from_url=${encodeURIComponent(redirectUrl)}`;
            // Redirect to the login page
            window.location.href = loginUrl;
        },
        // Redirects the user to a provider's login page
        loginWithProvider (provider, fromUrl = "/") {
            // Build the full redirect URL
            const redirectUrl = new URL(fromUrl, window.location.origin).toString();
            // Build the provider login URL (google is the default, so no provider path needed)
            const providerPath = provider === "google" ? "" : `/${provider}`;
            const loginUrl = `${options.serverUrl}/api/apps/auth${providerPath}/login?app_id=${appId}&from_url=${encodeURIComponent(redirectUrl)}`;
            // Redirect to the provider login page
            window.location.href = loginUrl;
        },
        // Logout the current user
        // Removes the token from localStorage and optionally redirects to a URL or reloads the page
        logout (redirectUrl) {
            // Remove token from axios headers
            delete axios.defaults.headers.common["Authorization"];
            // Remove token from localStorage
            if (typeof window !== "undefined" && window.localStorage) {
                try {
                    window.localStorage.removeItem("base44_access_token");
                    // Remove "token" that is set by the built-in SDK of platform version 2
                    window.localStorage.removeItem("token");
                } catch (e) {
                    console.error("Failed to remove token from localStorage:", e);
                }
            }
            // Redirect if a URL is provided
            if (typeof window !== "undefined") {
                if (redirectUrl) {
                    window.location.href = redirectUrl;
                } else {
                    window.location.reload();
                }
            }
        },
        // Set authentication token
        setToken (token, saveToStorage = true) {
            if (!token) return;
            // handle token change for axios clients
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            functionsAxiosClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            // Save token to localStorage if requested
            if (saveToStorage && typeof window !== "undefined" && window.localStorage) {
                try {
                    window.localStorage.setItem("base44_access_token", token);
                    // Set "token" that is set by the built-in SDK of platform version 2
                    window.localStorage.setItem("token", token);
                } catch (e) {
                    console.error("Failed to save token to localStorage:", e);
                }
            }
        },
        // Login using username and password
        async loginViaEmailPassword (email, password, turnstileToken) {
            var _a;
            try {
                const response = await axios.post(`/apps/${appId}/auth/login`, {
                    email,
                    password,
                    ...turnstileToken && {
                        turnstile_token: turnstileToken
                    }
                });
                const { access_token, user } = response;
                if (access_token) {
                    this.setToken(access_token);
                }
                return {
                    access_token,
                    user
                };
            } catch (error) {
                // Handle authentication errors and cleanup
                if (((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) === 401) {
                    await this.logout();
                }
                throw error;
            }
        },
        // Verify if the current token is valid
        async isAuthenticated () {
            try {
                await this.me();
                return true;
            } catch (error) {
                return false;
            }
        },
        // Invite a user to the app
        inviteUser (userEmail, role) {
            return axios.post(`/apps/${appId}/users/invite-user`, {
                user_email: userEmail,
                role
            });
        },
        // Register a new user account
        register (payload) {
            return axios.post(`/apps/${appId}/auth/register`, payload);
        },
        // Verify an OTP (One-time password) code
        verifyOtp ({ email, otpCode }) {
            return axios.post(`/apps/${appId}/auth/verify-otp`, {
                email,
                otp_code: otpCode
            });
        },
        // Resend an OTP code to the user's email
        resendOtp (email) {
            return axios.post(`/apps/${appId}/auth/resend-otp`, {
                email
            });
        },
        // Request a password reset
        resetPasswordRequest (email) {
            return axios.post(`/apps/${appId}/auth/reset-password-request`, {
                email
            });
        },
        // Reset password using a reset token
        resetPassword ({ resetToken, newPassword }) {
            return axios.post(`/apps/${appId}/auth/reset-password`, {
                reset_token: resetToken,
                new_password: newPassword
            });
        },
        // Change the user's password
        changePassword ({ userId, currentPassword, newPassword }) {
            return axios.post(`/apps/${appId}/auth/change-password`, {
                user_id: userId,
                current_password: currentPassword,
                new_password: newPassword
            });
        }
    };
}
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/modules/sso.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Creates the SSO module for the Base44 SDK.
 *
 * @param axios - Axios instance
 * @param appId - Application ID
 * @param userToken - User authentication token
 * @returns SSO module with authentication methods
 * @internal
 */ __turbopack_context__.s([
    "createSsoModule",
    ()=>createSsoModule
]);
function createSsoModule(axios, appId, userToken) {
    return {
        // Get SSO access token for a specific user
        async getAccessToken (userid) {
            const url = `/apps/${appId}/auth/sso/accesstoken/${userid}`;
            // Prepare headers with both tokens if available
            const headers = {};
            if (userToken) {
                headers["on-behalf-of"] = `Bearer ${userToken}`;
            }
            return axios.get(url, {
                headers
            });
        }
    };
}
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/modules/connectors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Creates the Connectors module for the Base44 SDK.
 *
 * @param axios - Axios instance (should be service role client)
 * @param appId - Application ID
 * @returns Connectors module with methods to retrieve OAuth tokens
 * @internal
 */ __turbopack_context__.s([
    "createConnectorsModule",
    ()=>createConnectorsModule
]);
function createConnectorsModule(axios, appId) {
    return {
        // Retrieve an OAuth access token for a specific external integration type
        // @ts-expect-error Return type mismatch with interface - implementation returns object, interface expects string
        async getAccessToken (integrationType) {
            if (!integrationType || typeof integrationType !== "string") {
                throw new Error("Integration type is required and must be a string");
            }
            const response = await axios.get(`/apps/${appId}/external-auth/tokens/${integrationType}`);
            // @ts-expect-error
            return response.access_token;
        }
    };
}
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/utils/auth-utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Retrieves an access token from URL parameters or local storage.
 *
 * Low-level utility for manually retrieving tokens. In most cases, the Base44 client handles
 * token management automatically. This function is useful for custom authentication flows or when you need direct access to stored tokens. Requires a browser environment and can't be used in the backend.
 *
 * @internal
 *
 * @param options - Configuration options for token retrieval.
 * @returns The access token string if found, null otherwise.
 *
 * @example
 * ```typescript
 * // Get access token from URL or local storage
 * const token = getAccessToken();
 *
 * if (token) {
 *   console.log('User is authenticated');
 * } else {
 *   console.log('No token found, redirect to login');
 * }
 * ```
 * @example
 * ```typescript
 * // Get access token from custom local storage key
 * const token = getAccessToken({ storageKey: 'my_app_token' });
 * ```
 * @example
 * ```typescript
 * // Get access token from URL but don't save or remove it
 * const token = getAccessToken({
 *   saveToStorage: false,
 *   removeFromUrl: false
 * });
 * ```
 */ __turbopack_context__.s([
    "getAccessToken",
    ()=>getAccessToken,
    "getLoginUrl",
    ()=>getLoginUrl,
    "removeAccessToken",
    ()=>removeAccessToken,
    "saveAccessToken",
    ()=>saveAccessToken
]);
function getAccessToken(options = {}) {
    const { storageKey = "base44_access_token", paramName = "access_token", saveToStorage = true, removeFromUrl = true } = options;
    let token = null;
    // Try to get token from URL parameters
    if (typeof window !== "undefined" && window.location) {
        try {
            const urlParams = new URLSearchParams(window.location.search);
            token = urlParams.get(paramName);
            // If token found in URL
            if (token) {
                // Save token to local storage if requested
                if (saveToStorage) {
                    saveAccessToken(token, {
                        storageKey
                    });
                }
                // Remove token from URL for security if requested
                if (removeFromUrl) {
                    urlParams.delete(paramName);
                    const newUrl = `${window.location.pathname}${urlParams.toString() ? `?${urlParams.toString()}` : ""}${window.location.hash}`;
                    window.history.replaceState({}, document.title, newUrl);
                }
                return token;
            }
        } catch (e) {
            console.error("Error retrieving token from URL:", e);
        }
    }
    // If no token in URL, try local storage
    if (typeof window !== "undefined" && window.localStorage) {
        try {
            token = window.localStorage.getItem(storageKey);
            return token;
        } catch (e) {
            console.error("Error retrieving token from local storage:", e);
        }
    }
    return null;
}
function saveAccessToken(token, options) {
    const { storageKey = "base44_access_token" } = options;
    if (typeof window === "undefined" || !window.localStorage || !token) {
        return false;
    }
    try {
        window.localStorage.setItem(storageKey, token);
        // Set "token" that is set by the built-in SDK of platform version 2
        window.localStorage.setItem("token", token);
        return true;
    } catch (e) {
        console.error("Error saving token to local storage:", e);
        return false;
    }
}
function removeAccessToken(options) {
    const { storageKey = "base44_access_token" } = options;
    if (typeof window === "undefined" || !window.localStorage) {
        return false;
    }
    try {
        window.localStorage.removeItem(storageKey);
        return true;
    } catch (e) {
        console.error("Error removing token from local storage:", e);
        return false;
    }
}
function getLoginUrl(nextUrl, options) {
    const { serverUrl, appId, loginPath = "/login" } = options;
    if (!serverUrl || !appId) {
        throw new Error("serverUrl and appId are required to construct login URL");
    }
    const encodedRedirectUrl = encodeURIComponent(nextUrl || (typeof window !== "undefined" ? window.location.href : ""));
    return `${serverUrl}${loginPath}?from_url=${encodedRedirectUrl}&app_id=${appId}`;
}
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/modules/functions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Creates the functions module for the Base44 SDK.
 *
 * @param axios - Axios instance
 * @param appId - Application ID
 * @returns Functions module with methods to invoke custom backend functions
 * @internal
 */ __turbopack_context__.s([
    "createFunctionsModule",
    ()=>createFunctionsModule
]);
function createFunctionsModule(axios, appId) {
    return {
        // Invoke a custom backend function by name
        async invoke (functionName, data) {
            // Validate input
            if (typeof data === "string") {
                throw new Error(`Function ${functionName} must receive an object with named parameters, received: ${data}`);
            }
            let formData;
            let contentType;
            // Handle file uploads with FormData
            if (data instanceof FormData || data && Object.values(data).some((value)=>value instanceof File)) {
                formData = new FormData();
                Object.keys(data).forEach((key)=>{
                    if (data[key] instanceof File) {
                        formData.append(key, data[key], data[key].name);
                    } else if (typeof data[key] === "object" && data[key] !== null) {
                        formData.append(key, JSON.stringify(data[key]));
                    } else {
                        formData.append(key, data[key]);
                    }
                });
                contentType = "multipart/form-data";
            } else {
                formData = data;
                contentType = "application/json";
            }
            return axios.post(`/apps/${appId}/functions/${functionName}`, formData || data, {
                headers: {
                    "Content-Type": contentType
                }
            });
        }
    };
}
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/modules/agents.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createAgentsModule",
    ()=>createAgentsModule
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$utils$2f$auth$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/utils/auth-utils.js [app-client] (ecmascript)");
;
function createAgentsModule({ axios, getSocket, appId, serverUrl, token }) {
    const baseURL = `/apps/${appId}/agents`;
    // Track active conversations
    const currentConversations = {};
    const getConversations = ()=>{
        return axios.get(`${baseURL}/conversations`);
    };
    const getConversation = (conversationId)=>{
        return axios.get(`${baseURL}/conversations/${conversationId}`);
    };
    const listConversations = (filterParams)=>{
        return axios.get(`${baseURL}/conversations`, {
            params: filterParams
        });
    };
    const createConversation = (conversation)=>{
        return axios.post(`${baseURL}/conversations`, conversation);
    };
    const addMessage = async (conversation, message)=>{
        return axios.post(`${baseURL}/conversations/v2/${conversation.id}/messages`, message);
    };
    const subscribeToConversation = (conversationId, onUpdate)=>{
        const room = `/agent-conversations/${conversationId}`;
        const socket = getSocket();
        // Store the promise for initial conversation state
        const conversationPromise = getConversation(conversationId).then((conv)=>{
            currentConversations[conversationId] = conv;
            return conv;
        });
        return socket.subscribeToRoom(room, {
            connect: ()=>{},
            update_model: async ({ data: jsonStr })=>{
                const data = JSON.parse(jsonStr);
                if (data._message) {
                    // Wait for initial conversation to be loaded
                    await conversationPromise;
                    const message = data._message;
                    // Update shared conversation state
                    const currentConversation = currentConversations[conversationId];
                    if (currentConversation) {
                        const messages = currentConversation.messages || [];
                        const existingIndex = messages.findIndex((m)=>m.id === message.id);
                        const updatedMessages = existingIndex !== -1 ? messages.map((m, i)=>i === existingIndex ? message : m) : [
                            ...messages,
                            message
                        ];
                        currentConversations[conversationId] = {
                            ...currentConversation,
                            messages: updatedMessages
                        };
                        onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(currentConversations[conversationId]);
                    }
                }
            }
        });
    };
    const getWhatsAppConnectURL = (agentName)=>{
        const baseUrl = `${serverUrl}/api/apps/${appId}/agents/${encodeURIComponent(agentName)}/whatsapp`;
        const accessToken = token !== null && token !== void 0 ? token : (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$utils$2f$auth$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAccessToken"])();
        if (accessToken) {
            return `${baseUrl}?token=${accessToken}`;
        } else {
            // No token - URL will redirect to login automatically
            return baseUrl;
        }
    };
    return {
        getConversations,
        getConversation,
        listConversations,
        createConversation,
        addMessage,
        subscribeToConversation,
        getWhatsAppConnectURL
    };
}
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/modules/app-logs.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Creates the app logs module for the Base44 SDK.
 *
 * @param axios - Axios instance
 * @param appId - Application ID
 * @returns App logs module with methods for tracking and analyzing app usage
 * @internal
 */ __turbopack_context__.s([
    "createAppLogsModule",
    ()=>createAppLogsModule
]);
function createAppLogsModule(axios, appId) {
    const baseURL = `/app-logs/${appId}`;
    return {
        // Log user activity in the app
        async logUserInApp (pageName) {
            await axios.post(`${baseURL}/log-user-in-app/${pageName}`);
        },
        // Fetch app logs with optional parameters
        async fetchLogs (params = {}) {
            const response = await axios.get(baseURL, {
                params
            });
            return response;
        },
        // Get app statistics
        async getStats (params = {}) {
            const response = await axios.get(`${baseURL}/stats`, {
                params
            });
            return response;
        }
    };
}
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/modules/users.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Creates the users module for the Base44 SDK
 * @param {AxiosInstance} axios - Axios instance
 * @param {string} appId - Application ID
 * @returns {Object} Users module
 */ __turbopack_context__.s([
    "createUsersModule",
    ()=>createUsersModule
]);
function createUsersModule(axios, appId) {
    return {
        /**
         * Invite a user to the application
         * @param {string} user_email - User's email address
         * @param {'user'|'admin'} role - User's role (user or admin)
         * @returns {Promise<any>}
         */ async inviteUser (user_email, role) {
            if (role !== "user" && role !== "admin") {
                throw new Error(`Invalid role: "${role}". Role must be either "user" or "admin".`);
            }
            const response = await axios.post(`/apps/${appId}/runtime/users/invite-user`, {
                user_email,
                role
            });
            return response;
        }
    };
}
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-parser/build/esm/commons.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ERROR_PACKET",
    ()=>ERROR_PACKET,
    "PACKET_TYPES",
    ()=>PACKET_TYPES,
    "PACKET_TYPES_REVERSE",
    ()=>PACKET_TYPES_REVERSE
]);
const PACKET_TYPES = Object.create(null); // no Map = no polyfill
PACKET_TYPES["open"] = "0";
PACKET_TYPES["close"] = "1";
PACKET_TYPES["ping"] = "2";
PACKET_TYPES["pong"] = "3";
PACKET_TYPES["message"] = "4";
PACKET_TYPES["upgrade"] = "5";
PACKET_TYPES["noop"] = "6";
const PACKET_TYPES_REVERSE = Object.create(null);
Object.keys(PACKET_TYPES).forEach((key)=>{
    PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
});
const ERROR_PACKET = {
    type: "error",
    data: "parser error"
};
;
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-parser/build/esm/encodePacket.browser.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "encodePacket",
    ()=>encodePacket,
    "encodePacketToBinary",
    ()=>encodePacketToBinary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$commons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-parser/build/esm/commons.js [app-client] (ecmascript)");
;
const withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
const withNativeArrayBuffer = typeof ArrayBuffer === "function";
// ArrayBuffer.isView method is not defined in IE10
const isView = (obj)=>{
    return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
};
const encodePacket = ({ type, data }, supportsBinary, callback)=>{
    if (withNativeBlob && data instanceof Blob) {
        if (supportsBinary) {
            return callback(data);
        } else {
            return encodeBlobAsBase64(data, callback);
        }
    } else if (withNativeArrayBuffer && (data instanceof ArrayBuffer || isView(data))) {
        if (supportsBinary) {
            return callback(data);
        } else {
            return encodeBlobAsBase64(new Blob([
                data
            ]), callback);
        }
    }
    // plain string
    return callback(__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$commons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PACKET_TYPES"][type] + (data || ""));
};
const encodeBlobAsBase64 = (data, callback)=>{
    const fileReader = new FileReader();
    fileReader.onload = function() {
        const content = fileReader.result.split(",")[1];
        callback("b" + (content || ""));
    };
    return fileReader.readAsDataURL(data);
};
function toArray(data) {
    if (data instanceof Uint8Array) {
        return data;
    } else if (data instanceof ArrayBuffer) {
        return new Uint8Array(data);
    } else {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
    }
}
let TEXT_ENCODER;
function encodePacketToBinary(packet, callback) {
    if (withNativeBlob && packet.data instanceof Blob) {
        return packet.data.arrayBuffer().then(toArray).then(callback);
    } else if (withNativeArrayBuffer && (packet.data instanceof ArrayBuffer || isView(packet.data))) {
        return callback(toArray(packet.data));
    }
    encodePacket(packet, false, (encoded)=>{
        if (!TEXT_ENCODER) {
            TEXT_ENCODER = new TextEncoder();
        }
        callback(TEXT_ENCODER.encode(encoded));
    });
}
;
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-parser/build/esm/contrib/base64-arraybuffer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decode",
    ()=>decode,
    "encode",
    ()=>encode
]);
// imported from https://github.com/socketio/base64-arraybuffer
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
// Use a lookup table to find the index.
const lookup = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
for(let i = 0; i < chars.length; i++){
    lookup[chars.charCodeAt(i)] = i;
}
const encode = (arraybuffer)=>{
    let bytes = new Uint8Array(arraybuffer), i, len = bytes.length, base64 = '';
    for(i = 0; i < len; i += 3){
        base64 += chars[bytes[i] >> 2];
        base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
        base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
        base64 += chars[bytes[i + 2] & 63];
    }
    if (len % 3 === 2) {
        base64 = base64.substring(0, base64.length - 1) + '=';
    } else if (len % 3 === 1) {
        base64 = base64.substring(0, base64.length - 2) + '==';
    }
    return base64;
};
const decode = (base64)=>{
    let bufferLength = base64.length * 0.75, len = base64.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
    if (base64[base64.length - 1] === '=') {
        bufferLength--;
        if (base64[base64.length - 2] === '=') {
            bufferLength--;
        }
    }
    const arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
    for(i = 0; i < len; i += 4){
        encoded1 = lookup[base64.charCodeAt(i)];
        encoded2 = lookup[base64.charCodeAt(i + 1)];
        encoded3 = lookup[base64.charCodeAt(i + 2)];
        encoded4 = lookup[base64.charCodeAt(i + 3)];
        bytes[p++] = encoded1 << 2 | encoded2 >> 4;
        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }
    return arraybuffer;
};
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-parser/build/esm/decodePacket.browser.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decodePacket",
    ()=>decodePacket
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$commons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-parser/build/esm/commons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$contrib$2f$base64$2d$arraybuffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-parser/build/esm/contrib/base64-arraybuffer.js [app-client] (ecmascript)");
;
;
const withNativeArrayBuffer = typeof ArrayBuffer === "function";
const decodePacket = (encodedPacket, binaryType)=>{
    if (typeof encodedPacket !== "string") {
        return {
            type: "message",
            data: mapBinary(encodedPacket, binaryType)
        };
    }
    const type = encodedPacket.charAt(0);
    if (type === "b") {
        return {
            type: "message",
            data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
        };
    }
    const packetType = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$commons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PACKET_TYPES_REVERSE"][type];
    if (!packetType) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$commons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERROR_PACKET"];
    }
    return encodedPacket.length > 1 ? {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$commons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PACKET_TYPES_REVERSE"][type],
        data: encodedPacket.substring(1)
    } : {
        type: __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$commons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PACKET_TYPES_REVERSE"][type]
    };
};
const decodeBase64Packet = (data, binaryType)=>{
    if (withNativeArrayBuffer) {
        const decoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$contrib$2f$base64$2d$arraybuffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decode"])(data);
        return mapBinary(decoded, binaryType);
    } else {
        return {
            base64: true,
            data
        }; // fallback for old browsers
    }
};
const mapBinary = (data, binaryType)=>{
    switch(binaryType){
        case "blob":
            if (data instanceof Blob) {
                // from WebSocket + binaryType "blob"
                return data;
            } else {
                // from HTTP long-polling or WebTransport
                return new Blob([
                    data
                ]);
            }
        case "arraybuffer":
        default:
            if (data instanceof ArrayBuffer) {
                // from HTTP long-polling (base64) or WebSocket + binaryType "arraybuffer"
                return data;
            } else {
                // from WebTransport (Uint8Array)
                return data.buffer;
            }
    }
};
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-parser/build/esm/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createPacketDecoderStream",
    ()=>createPacketDecoderStream,
    "createPacketEncoderStream",
    ()=>createPacketEncoderStream,
    "decodePayload",
    ()=>decodePayload,
    "encodePayload",
    ()=>encodePayload,
    "protocol",
    ()=>protocol
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$encodePacket$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-parser/build/esm/encodePacket.browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$decodePacket$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-parser/build/esm/decodePacket.browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$commons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-parser/build/esm/commons.js [app-client] (ecmascript)");
;
;
;
const SEPARATOR = String.fromCharCode(30); // see https://en.wikipedia.org/wiki/Delimiter#ASCII_delimited_text
const encodePayload = (packets, callback)=>{
    // some packets may be added to the array while encoding, so the initial length must be saved
    const length = packets.length;
    const encodedPackets = new Array(length);
    let count = 0;
    packets.forEach((packet, i)=>{
        // force base64 encoding for binary packets
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$encodePacket$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodePacket"])(packet, false, (encodedPacket)=>{
            encodedPackets[i] = encodedPacket;
            if (++count === length) {
                callback(encodedPackets.join(SEPARATOR));
            }
        });
    });
};
const decodePayload = (encodedPayload, binaryType)=>{
    const encodedPackets = encodedPayload.split(SEPARATOR);
    const packets = [];
    for(let i = 0; i < encodedPackets.length; i++){
        const decodedPacket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$decodePacket$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodePacket"])(encodedPackets[i], binaryType);
        packets.push(decodedPacket);
        if (decodedPacket.type === "error") {
            break;
        }
    }
    return packets;
};
function createPacketEncoderStream() {
    return new TransformStream({
        transform (packet, controller) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$encodePacket$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodePacketToBinary"])(packet, (encodedPacket)=>{
                const payloadLength = encodedPacket.length;
                let header;
                // inspired by the WebSocket format: https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#decoding_payload_length
                if (payloadLength < 126) {
                    header = new Uint8Array(1);
                    new DataView(header.buffer).setUint8(0, payloadLength);
                } else if (payloadLength < 65536) {
                    header = new Uint8Array(3);
                    const view = new DataView(header.buffer);
                    view.setUint8(0, 126);
                    view.setUint16(1, payloadLength);
                } else {
                    header = new Uint8Array(9);
                    const view = new DataView(header.buffer);
                    view.setUint8(0, 127);
                    view.setBigUint64(1, BigInt(payloadLength));
                }
                // first bit indicates whether the payload is plain text (0) or binary (1)
                if (packet.data && typeof packet.data !== "string") {
                    header[0] |= 0x80;
                }
                controller.enqueue(header);
                controller.enqueue(encodedPacket);
            });
        }
    });
}
let TEXT_DECODER;
function totalLength(chunks) {
    return chunks.reduce((acc, chunk)=>acc + chunk.length, 0);
}
function concatChunks(chunks, size) {
    if (chunks[0].length === size) {
        return chunks.shift();
    }
    const buffer = new Uint8Array(size);
    let j = 0;
    for(let i = 0; i < size; i++){
        buffer[i] = chunks[0][j++];
        if (j === chunks[0].length) {
            chunks.shift();
            j = 0;
        }
    }
    if (chunks.length && j < chunks[0].length) {
        chunks[0] = chunks[0].slice(j);
    }
    return buffer;
}
function createPacketDecoderStream(maxPayload, binaryType) {
    if (!TEXT_DECODER) {
        TEXT_DECODER = new TextDecoder();
    }
    const chunks = [];
    let state = 0 /* State.READ_HEADER */ ;
    let expectedLength = -1;
    let isBinary = false;
    return new TransformStream({
        transform (chunk, controller) {
            chunks.push(chunk);
            while(true){
                if (state === 0 /* State.READ_HEADER */ ) {
                    if (totalLength(chunks) < 1) {
                        break;
                    }
                    const header = concatChunks(chunks, 1);
                    isBinary = (header[0] & 0x80) === 0x80;
                    expectedLength = header[0] & 0x7f;
                    if (expectedLength < 126) {
                        state = 3 /* State.READ_PAYLOAD */ ;
                    } else if (expectedLength === 126) {
                        state = 1 /* State.READ_EXTENDED_LENGTH_16 */ ;
                    } else {
                        state = 2 /* State.READ_EXTENDED_LENGTH_64 */ ;
                    }
                } else if (state === 1 /* State.READ_EXTENDED_LENGTH_16 */ ) {
                    if (totalLength(chunks) < 2) {
                        break;
                    }
                    const headerArray = concatChunks(chunks, 2);
                    expectedLength = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length).getUint16(0);
                    state = 3 /* State.READ_PAYLOAD */ ;
                } else if (state === 2 /* State.READ_EXTENDED_LENGTH_64 */ ) {
                    if (totalLength(chunks) < 8) {
                        break;
                    }
                    const headerArray = concatChunks(chunks, 8);
                    const view = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length);
                    const n = view.getUint32(0);
                    if (n > Math.pow(2, 53 - 32) - 1) {
                        // the maximum safe integer in JavaScript is 2^53 - 1
                        controller.enqueue(__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$commons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERROR_PACKET"]);
                        break;
                    }
                    expectedLength = n * Math.pow(2, 32) + view.getUint32(4);
                    state = 3 /* State.READ_PAYLOAD */ ;
                } else {
                    if (totalLength(chunks) < expectedLength) {
                        break;
                    }
                    const data = concatChunks(chunks, expectedLength);
                    controller.enqueue((0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$decodePacket$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodePacket"])(isBinary ? data : TEXT_DECODER.decode(data), binaryType));
                    state = 0 /* State.READ_HEADER */ ;
                }
                if (expectedLength === 0 || expectedLength > maxPayload) {
                    controller.enqueue(__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$commons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERROR_PACKET"]);
                    break;
                }
            }
        }
    });
}
const protocol = 4;
;
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@socket.io/component-emitter/lib/esm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */ __turbopack_context__.s([
    "Emitter",
    ()=>Emitter
]);
function Emitter(obj) {
    if (obj) return mixin(obj);
}
/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */ function mixin(obj) {
    for(var key in Emitter.prototype){
        obj[key] = Emitter.prototype[key];
    }
    return obj;
}
/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */ Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn) {
    this._callbacks = this._callbacks || {};
    (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
    return this;
};
/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */ Emitter.prototype.once = function(event, fn) {
    function on() {
        this.off(event, on);
        fn.apply(this, arguments);
    }
    on.fn = fn;
    this.on(event, on);
    return this;
};
/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */ Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, fn) {
    this._callbacks = this._callbacks || {};
    // all
    if (0 == arguments.length) {
        this._callbacks = {};
        return this;
    }
    // specific event
    var callbacks = this._callbacks['$' + event];
    if (!callbacks) return this;
    // remove all handlers
    if (1 == arguments.length) {
        delete this._callbacks['$' + event];
        return this;
    }
    // remove specific handler
    var cb;
    for(var i = 0; i < callbacks.length; i++){
        cb = callbacks[i];
        if (cb === fn || cb.fn === fn) {
            callbacks.splice(i, 1);
            break;
        }
    }
    // Remove event specific arrays for event types that no
    // one is subscribed for to avoid memory leak.
    if (callbacks.length === 0) {
        delete this._callbacks['$' + event];
    }
    return this;
};
/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */ Emitter.prototype.emit = function(event) {
    this._callbacks = this._callbacks || {};
    var args = new Array(arguments.length - 1), callbacks = this._callbacks['$' + event];
    for(var i = 1; i < arguments.length; i++){
        args[i - 1] = arguments[i];
    }
    if (callbacks) {
        callbacks = callbacks.slice(0);
        for(var i = 0, len = callbacks.length; i < len; ++i){
            callbacks[i].apply(this, args);
        }
    }
    return this;
};
// alias used for reserved events (protected method)
Emitter.prototype.emitReserved = Emitter.prototype.emit;
/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */ Emitter.prototype.listeners = function(event) {
    this._callbacks = this._callbacks || {};
    return this._callbacks['$' + event] || [];
};
/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */ Emitter.prototype.hasListeners = function(event) {
    return !!this.listeners(event).length;
};
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-client/build/esm/globals.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createCookieJar",
    ()=>createCookieJar,
    "defaultBinaryType",
    ()=>defaultBinaryType,
    "globalThisShim",
    ()=>globalThisShim,
    "nextTick",
    ()=>nextTick
]);
const nextTick = (()=>{
    const isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
    if (isPromiseAvailable) {
        return (cb)=>Promise.resolve().then(cb);
    } else {
        return (cb, setTimeoutFn)=>setTimeoutFn(cb, 0);
    }
})();
const globalThisShim = (()=>{
    if (typeof self !== "undefined") {
        return self;
    } else if (typeof window !== "undefined") {
        return window;
    } else {
        return Function("return this")();
    }
})();
const defaultBinaryType = "arraybuffer";
function createCookieJar() {}
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-client/build/esm/util.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "byteLength",
    ()=>byteLength,
    "installTimerFunctions",
    ()=>installTimerFunctions,
    "pick",
    ()=>pick,
    "randomString",
    ()=>randomString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-client/build/esm/globals.js [app-client] (ecmascript)");
;
function pick(obj, ...attr) {
    return attr.reduce((acc, k)=>{
        if (obj.hasOwnProperty(k)) {
            acc[k] = obj[k];
        }
        return acc;
    }, {});
}
// Keep a reference to the real timeout functions so they can be used when overridden
const NATIVE_SET_TIMEOUT = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThisShim"].setTimeout;
const NATIVE_CLEAR_TIMEOUT = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThisShim"].clearTimeout;
function installTimerFunctions(obj, opts) {
    if (opts.useNativeTimers) {
        obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThisShim"]);
        obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThisShim"]);
    } else {
        obj.setTimeoutFn = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThisShim"].setTimeout.bind(__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThisShim"]);
        obj.clearTimeoutFn = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThisShim"].clearTimeout.bind(__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThisShim"]);
    }
}
// base64 encoded buffers are about 33% bigger (https://en.wikipedia.org/wiki/Base64)
const BASE64_OVERHEAD = 1.33;
function byteLength(obj) {
    if (typeof obj === "string") {
        return utf8Length(obj);
    }
    // arraybuffer or blob
    return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
}
function utf8Length(str) {
    let c = 0, length = 0;
    for(let i = 0, l = str.length; i < l; i++){
        c = str.charCodeAt(i);
        if (c < 0x80) {
            length += 1;
        } else if (c < 0x800) {
            length += 2;
        } else if (c < 0xd800 || c >= 0xe000) {
            length += 3;
        } else {
            i++;
            length += 4;
        }
    }
    return length;
}
function randomString() {
    return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-client/build/esm/contrib/parseqs.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// imported from https://github.com/galkn/querystring
/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */ __turbopack_context__.s([
    "decode",
    ()=>decode,
    "encode",
    ()=>encode
]);
function encode(obj) {
    let str = '';
    for(let i in obj){
        if (obj.hasOwnProperty(i)) {
            if (str.length) str += '&';
            str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
        }
    }
    return str;
}
function decode(qs) {
    let qry = {};
    let pairs = qs.split('&');
    for(let i = 0, l = pairs.length; i < l; i++){
        let pair = pairs[i].split('=');
        qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }
    return qry;
}
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-client/build/esm/transport.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Transport",
    ()=>Transport,
    "TransportError",
    ()=>TransportError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-parser/build/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$decodePacket$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-parser/build/esm/decodePacket.browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$socket$2e$io$2f$component$2d$emitter$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@socket.io/component-emitter/lib/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-client/build/esm/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$contrib$2f$parseqs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-client/build/esm/contrib/parseqs.js [app-client] (ecmascript)");
;
;
;
;
class TransportError extends Error {
    constructor(reason, description, context){
        super(reason);
        this.description = description;
        this.context = context;
        this.type = "TransportError";
    }
}
class Transport extends __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$socket$2e$io$2f$component$2d$emitter$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"] {
    /**
     * Transport abstract constructor.
     *
     * @param {Object} opts - options
     * @protected
     */ constructor(opts){
        super();
        this.writable = false;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["installTimerFunctions"])(this, opts);
        this.opts = opts;
        this.query = opts.query;
        this.socket = opts.socket;
        this.supportsBinary = !opts.forceBase64;
    }
    /**
     * Emits an error.
     *
     * @param {String} reason
     * @param description
     * @param context - the error context
     * @return {Transport} for chaining
     * @protected
     */ onError(reason, description, context) {
        super.emitReserved("error", new TransportError(reason, description, context));
        return this;
    }
    /**
     * Opens the transport.
     */ open() {
        this.readyState = "opening";
        this.doOpen();
        return this;
    }
    /**
     * Closes the transport.
     */ close() {
        if (this.readyState === "opening" || this.readyState === "open") {
            this.doClose();
            this.onClose();
        }
        return this;
    }
    /**
     * Sends multiple packets.
     *
     * @param {Array} packets
     */ send(packets) {
        if (this.readyState === "open") {
            this.write(packets);
        } else {
        // this might happen if the transport was silently closed in the beforeunload event handler
        }
    }
    /**
     * Called upon open
     *
     * @protected
     */ onOpen() {
        this.readyState = "open";
        this.writable = true;
        super.emitReserved("open");
    }
    /**
     * Called with data.
     *
     * @param {String} data
     * @protected
     */ onData(data) {
        const packet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$decodePacket$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodePacket"])(data, this.socket.binaryType);
        this.onPacket(packet);
    }
    /**
     * Called with a decoded packet.
     *
     * @protected
     */ onPacket(packet) {
        super.emitReserved("packet", packet);
    }
    /**
     * Called upon close.
     *
     * @protected
     */ onClose(details) {
        this.readyState = "closed";
        super.emitReserved("close", details);
    }
    /**
     * Pauses the transport, in order not to lose packets during an upgrade.
     *
     * @param onPause
     */ pause(onPause) {}
    createUri(schema, query = {}) {
        return schema + "://" + this._hostname() + this._port() + this.opts.path + this._query(query);
    }
    _hostname() {
        const hostname = this.opts.hostname;
        return hostname.indexOf(":") === -1 ? hostname : "[" + hostname + "]";
    }
    _port() {
        if (this.opts.port && (this.opts.secure && Number(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80)) {
            return ":" + this.opts.port;
        } else {
            return "";
        }
    }
    _query(query) {
        const encodedQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$contrib$2f$parseqs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encode"])(query);
        return encodedQuery.length ? "?" + encodedQuery : "";
    }
}
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-client/build/esm/transports/polling.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Polling",
    ()=>Polling
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$transport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-client/build/esm/transport.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-client/build/esm/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-parser/build/esm/index.js [app-client] (ecmascript) <locals>");
;
;
;
class Polling extends __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$transport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transport"] {
    constructor(){
        super(...arguments);
        this._polling = false;
    }
    get name() {
        return "polling";
    }
    /**
     * Opens the socket (triggers polling). We write a PING message to determine
     * when the transport is open.
     *
     * @protected
     */ doOpen() {
        this._poll();
    }
    /**
     * Pauses polling.
     *
     * @param {Function} onPause - callback upon buffers are flushed and transport is paused
     * @package
     */ pause(onPause) {
        this.readyState = "pausing";
        const pause = ()=>{
            this.readyState = "paused";
            onPause();
        };
        if (this._polling || !this.writable) {
            let total = 0;
            if (this._polling) {
                total++;
                this.once("pollComplete", function() {
                    --total || pause();
                });
            }
            if (!this.writable) {
                total++;
                this.once("drain", function() {
                    --total || pause();
                });
            }
        } else {
            pause();
        }
    }
    /**
     * Starts polling cycle.
     *
     * @private
     */ _poll() {
        this._polling = true;
        this.doPoll();
        this.emitReserved("poll");
    }
    /**
     * Overloads onData to detect payloads.
     *
     * @protected
     */ onData(data) {
        const callback = (packet)=>{
            // if its the first message we consider the transport open
            if ("opening" === this.readyState && packet.type === "open") {
                this.onOpen();
            }
            // if its a close packet, we close the ongoing requests
            if ("close" === packet.type) {
                this.onClose({
                    description: "transport closed by the server"
                });
                return false;
            }
            // otherwise bypass onData and handle the message
            this.onPacket(packet);
        };
        // decode payload
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["decodePayload"])(data, this.socket.binaryType).forEach(callback);
        // if an event did not trigger closing
        if ("closed" !== this.readyState) {
            // if we got data we're not polling
            this._polling = false;
            this.emitReserved("pollComplete");
            if ("open" === this.readyState) {
                this._poll();
            } else {}
        }
    }
    /**
     * For polling, send a close packet.
     *
     * @protected
     */ doClose() {
        const close = ()=>{
            this.write([
                {
                    type: "close"
                }
            ]);
        };
        if ("open" === this.readyState) {
            close();
        } else {
            // in case we're trying to close while
            // handshaking is in progress (GH-164)
            this.once("open", close);
        }
    }
    /**
     * Writes a packets payload.
     *
     * @param {Array} packets - data packets
     * @protected
     */ write(packets) {
        this.writable = false;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["encodePayload"])(packets, (data)=>{
            this.doWrite(data, ()=>{
                this.writable = true;
                this.emitReserved("drain");
            });
        });
    }
    /**
     * Generates uri for connection.
     *
     * @private
     */ uri() {
        const schema = this.opts.secure ? "https" : "http";
        const query = this.query || {};
        // cache busting is forced
        if (false !== this.opts.timestampRequests) {
            query[this.opts.timestampParam] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomString"])();
        }
        if (!this.supportsBinary && !query.sid) {
            query.b64 = 1;
        }
        return this.createUri(schema, query);
    }
}
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-client/build/esm/contrib/has-cors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasCORS",
    ()=>hasCORS
]);
// imported from https://github.com/component/has-cors
let value = false;
try {
    value = typeof XMLHttpRequest !== 'undefined' && 'withCredentials' in new XMLHttpRequest();
} catch (err) {
// if XMLHttp support is disabled in IE then it will throw
// when trying to create
}
const hasCORS = value;
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-client/build/esm/transports/polling-xhr.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseXHR",
    ()=>BaseXHR,
    "Request",
    ()=>Request,
    "XHR",
    ()=>XHR
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$transports$2f$polling$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-client/build/esm/transports/polling.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$socket$2e$io$2f$component$2d$emitter$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@socket.io/component-emitter/lib/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-client/build/esm/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-client/build/esm/globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$contrib$2f$has$2d$cors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-client/build/esm/contrib/has-cors.js [app-client] (ecmascript)");
;
;
;
;
;
function empty() {}
class BaseXHR extends __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$transports$2f$polling$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Polling"] {
    /**
     * XHR Polling constructor.
     *
     * @param {Object} opts
     * @package
     */ constructor(opts){
        super(opts);
        if (typeof location !== "undefined") {
            const isSSL = "https:" === location.protocol;
            let port = location.port;
            // some user agents have empty `location.port`
            if (!port) {
                port = isSSL ? "443" : "80";
            }
            this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
        }
    }
    /**
     * Sends data.
     *
     * @param {String} data to send.
     * @param {Function} called upon flush.
     * @private
     */ doWrite(data, fn) {
        const req = this.request({
            method: "POST",
            data: data
        });
        req.on("success", fn);
        req.on("error", (xhrStatus, context)=>{
            this.onError("xhr post error", xhrStatus, context);
        });
    }
    /**
     * Starts a poll cycle.
     *
     * @private
     */ doPoll() {
        const req = this.request();
        req.on("data", this.onData.bind(this));
        req.on("error", (xhrStatus, context)=>{
            this.onError("xhr poll error", xhrStatus, context);
        });
        this.pollXhr = req;
    }
}
class Request extends __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$socket$2e$io$2f$component$2d$emitter$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"] {
    /**
     * Request constructor
     *
     * @param {Object} options
     * @package
     */ constructor(createRequest, uri, opts){
        super();
        this.createRequest = createRequest;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["installTimerFunctions"])(this, opts);
        this._opts = opts;
        this._method = opts.method || "GET";
        this._uri = uri;
        this._data = undefined !== opts.data ? opts.data : null;
        this._create();
    }
    /**
     * Creates the XHR object and sends the request.
     *
     * @private
     */ _create() {
        var _a;
        const opts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pick"])(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
        opts.xdomain = !!this._opts.xd;
        const xhr = this._xhr = this.createRequest(opts);
        try {
            xhr.open(this._method, this._uri, true);
            try {
                if (this._opts.extraHeaders) {
                    // @ts-ignore
                    xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
                    for(let i in this._opts.extraHeaders){
                        if (this._opts.extraHeaders.hasOwnProperty(i)) {
                            xhr.setRequestHeader(i, this._opts.extraHeaders[i]);
                        }
                    }
                }
            } catch (e) {}
            if ("POST" === this._method) {
                try {
                    xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
                } catch (e) {}
            }
            try {
                xhr.setRequestHeader("Accept", "*/*");
            } catch (e) {}
            (_a = this._opts.cookieJar) === null || _a === void 0 ? void 0 : _a.addCookies(xhr);
            // ie6 check
            if ("withCredentials" in xhr) {
                xhr.withCredentials = this._opts.withCredentials;
            }
            if (this._opts.requestTimeout) {
                xhr.timeout = this._opts.requestTimeout;
            }
            xhr.onreadystatechange = ()=>{
                var _a;
                if (xhr.readyState === 3) {
                    (_a = this._opts.cookieJar) === null || _a === void 0 ? void 0 : _a.parseCookies(// @ts-ignore
                    xhr.getResponseHeader("set-cookie"));
                }
                if (4 !== xhr.readyState) return;
                if (200 === xhr.status || 1223 === xhr.status) {
                    this._onLoad();
                } else {
                    // make sure the `error` event handler that's user-set
                    // does not throw in the same tick and gets caught here
                    this.setTimeoutFn(()=>{
                        this._onError(typeof xhr.status === "number" ? xhr.status : 0);
                    }, 0);
                }
            };
            xhr.send(this._data);
        } catch (e) {
            // Need to defer since .create() is called directly from the constructor
            // and thus the 'error' event can only be only bound *after* this exception
            // occurs.  Therefore, also, we cannot throw here at all.
            this.setTimeoutFn(()=>{
                this._onError(e);
            }, 0);
            return;
        }
        if (typeof document !== "undefined") {
            this._index = Request.requestsCount++;
            Request.requests[this._index] = this;
        }
    }
    /**
     * Called upon error.
     *
     * @private
     */ _onError(err) {
        this.emitReserved("error", err, this._xhr);
        this._cleanup(true);
    }
    /**
     * Cleans up house.
     *
     * @private
     */ _cleanup(fromError) {
        if ("undefined" === typeof this._xhr || null === this._xhr) {
            return;
        }
        this._xhr.onreadystatechange = empty;
        if (fromError) {
            try {
                this._xhr.abort();
            } catch (e) {}
        }
        if (typeof document !== "undefined") {
            delete Request.requests[this._index];
        }
        this._xhr = null;
    }
    /**
     * Called upon load.
     *
     * @private
     */ _onLoad() {
        const data = this._xhr.responseText;
        if (data !== null) {
            this.emitReserved("data", data);
            this.emitReserved("success");
            this._cleanup();
        }
    }
    /**
     * Aborts the request.
     *
     * @package
     */ abort() {
        this._cleanup();
    }
}
Request.requestsCount = 0;
Request.requests = {};
/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */ if (typeof document !== "undefined") {
    // @ts-ignore
    if (typeof attachEvent === "function") {
        // @ts-ignore
        attachEvent("onunload", unloadHandler);
    } else if (typeof addEventListener === "function") {
        const terminationEvent = "onpagehide" in __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThisShim"] ? "pagehide" : "unload";
        addEventListener(terminationEvent, unloadHandler, false);
    }
}
function unloadHandler() {
    for(let i in Request.requests){
        if (Request.requests.hasOwnProperty(i)) {
            Request.requests[i].abort();
        }
    }
}
const hasXHR2 = function() {
    const xhr = newRequest({
        xdomain: false
    });
    return xhr && xhr.responseType !== null;
}();
class XHR extends BaseXHR {
    constructor(opts){
        super(opts);
        const forceBase64 = opts && opts.forceBase64;
        this.supportsBinary = hasXHR2 && !forceBase64;
    }
    request(opts = {}) {
        Object.assign(opts, {
            xd: this.xd
        }, this.opts);
        return new Request(newRequest, this.uri(), opts);
    }
}
function newRequest(opts) {
    const xdomain = opts.xdomain;
    // XMLHttpRequest can be disabled on IE
    try {
        if ("undefined" !== typeof XMLHttpRequest && (!xdomain || __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$contrib$2f$has$2d$cors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasCORS"])) {
            return new XMLHttpRequest();
        }
    } catch (e) {}
    if (!xdomain) {
        try {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThisShim"][[
                "Active"
            ].concat("Object").join("X")]("Microsoft.XMLHTTP");
        } catch (e) {}
    }
}
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-client/build/esm/transports/websocket.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseWS",
    ()=>BaseWS,
    "WS",
    ()=>WS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$transport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-client/build/esm/transport.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-client/build/esm/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-parser/build/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$encodePacket$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-parser/build/esm/encodePacket.browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-client/build/esm/globals.js [app-client] (ecmascript)");
;
;
;
;
// detect ReactNative environment
const isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
class BaseWS extends __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$transport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transport"] {
    get name() {
        return "websocket";
    }
    doOpen() {
        const uri = this.uri();
        const protocols = this.opts.protocols;
        // React Native only supports the 'headers' option, and will print a warning if anything else is passed
        const opts = isReactNative ? {} : (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pick"])(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
        if (this.opts.extraHeaders) {
            opts.headers = this.opts.extraHeaders;
        }
        try {
            this.ws = this.createSocket(uri, protocols, opts);
        } catch (err) {
            return this.emitReserved("error", err);
        }
        this.ws.binaryType = this.socket.binaryType;
        this.addEventListeners();
    }
    /**
     * Adds event listeners to the socket
     *
     * @private
     */ addEventListeners() {
        this.ws.onopen = ()=>{
            if (this.opts.autoUnref) {
                this.ws._socket.unref();
            }
            this.onOpen();
        };
        this.ws.onclose = (closeEvent)=>this.onClose({
                description: "websocket connection closed",
                context: closeEvent
            });
        this.ws.onmessage = (ev)=>this.onData(ev.data);
        this.ws.onerror = (e)=>this.onError("websocket error", e);
    }
    write(packets) {
        this.writable = false;
        // encodePacket efficient as it uses WS framing
        // no need for encodePayload
        for(let i = 0; i < packets.length; i++){
            const packet = packets[i];
            const lastPacket = i === packets.length - 1;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$encodePacket$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodePacket"])(packet, this.supportsBinary, (data)=>{
                // Sometimes the websocket has already been closed but the browser didn't
                // have a chance of informing us about it yet, in that case send will
                // throw an error
                try {
                    this.doWrite(packet, data);
                } catch (e) {}
                if (lastPacket) {
                    // fake drain
                    // defer to next tick to allow Socket to clear writeBuffer
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextTick"])(()=>{
                        this.writable = true;
                        this.emitReserved("drain");
                    }, this.setTimeoutFn);
                }
            });
        }
    }
    doClose() {
        if (typeof this.ws !== "undefined") {
            this.ws.onerror = ()=>{};
            this.ws.close();
            this.ws = null;
        }
    }
    /**
     * Generates uri for connection.
     *
     * @private
     */ uri() {
        const schema = this.opts.secure ? "wss" : "ws";
        const query = this.query || {};
        // append timestamp to URI
        if (this.opts.timestampRequests) {
            query[this.opts.timestampParam] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomString"])();
        }
        // communicate binary support capabilities
        if (!this.supportsBinary) {
            query.b64 = 1;
        }
        return this.createUri(schema, query);
    }
}
const WebSocketCtor = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThisShim"].WebSocket || __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalThisShim"].MozWebSocket;
class WS extends BaseWS {
    createSocket(uri, protocols, opts) {
        return !isReactNative ? protocols ? new WebSocketCtor(uri, protocols) : new WebSocketCtor(uri) : new WebSocketCtor(uri, protocols, opts);
    }
    doWrite(_packet, data) {
        this.ws.send(data);
    }
}
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-client/build/esm/transports/webtransport.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WT",
    ()=>WT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$transport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-client/build/esm/transport.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-client/build/esm/globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-parser/build/esm/index.js [app-client] (ecmascript) <locals>");
;
;
;
class WT extends __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$transport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transport"] {
    get name() {
        return "webtransport";
    }
    doOpen() {
        try {
            // @ts-ignore
            this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
        } catch (err) {
            return this.emitReserved("error", err);
        }
        this._transport.closed.then(()=>{
            this.onClose();
        }).catch((err)=>{
            this.onError("webtransport error", err);
        });
        // note: we could have used async/await, but that would require some additional polyfills
        this._transport.ready.then(()=>{
            this._transport.createBidirectionalStream().then((stream)=>{
                const decoderStream = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createPacketDecoderStream"])(Number.MAX_SAFE_INTEGER, this.socket.binaryType);
                const reader = stream.readable.pipeThrough(decoderStream).getReader();
                const encoderStream = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createPacketEncoderStream"])();
                encoderStream.readable.pipeTo(stream.writable);
                this._writer = encoderStream.writable.getWriter();
                const read = ()=>{
                    reader.read().then(({ done, value })=>{
                        if (done) {
                            return;
                        }
                        this.onPacket(value);
                        read();
                    }).catch((err)=>{});
                };
                read();
                const packet = {
                    type: "open"
                };
                if (this.query.sid) {
                    packet.data = `{"sid":"${this.query.sid}"}`;
                }
                this._writer.write(packet).then(()=>this.onOpen());
            });
        });
    }
    write(packets) {
        this.writable = false;
        for(let i = 0; i < packets.length; i++){
            const packet = packets[i];
            const lastPacket = i === packets.length - 1;
            this._writer.write(packet).then(()=>{
                if (lastPacket) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextTick"])(()=>{
                        this.writable = true;
                        this.emitReserved("drain");
                    }, this.setTimeoutFn);
                }
            });
        }
    }
    doClose() {
        var _a;
        (_a = this._transport) === null || _a === void 0 ? void 0 : _a.close();
    }
}
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-client/build/esm/transports/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "transports",
    ()=>transports
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$transports$2f$polling$2d$xhr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-client/build/esm/transports/polling-xhr.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$transports$2f$websocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-client/build/esm/transports/websocket.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$transports$2f$webtransport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-client/build/esm/transports/webtransport.js [app-client] (ecmascript)");
;
;
;
const transports = {
    websocket: __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$transports$2f$websocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WS"],
    webtransport: __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$transports$2f$webtransport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WT"],
    polling: __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$transports$2f$polling$2d$xhr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XHR"]
};
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-client/build/esm/contrib/parseuri.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parse",
    ()=>parse
]);
// imported from https://github.com/galkn/parseuri
/**
 * Parses a URI
 *
 * Note: we could also have used the built-in URL object, but it isn't supported on all platforms.
 *
 * See:
 * - https://developer.mozilla.org/en-US/docs/Web/API/URL
 * - https://caniuse.com/url
 * - https://www.rfc-editor.org/rfc/rfc3986#appendix-B
 *
 * History of the parse() method:
 * - first commit: https://github.com/socketio/socket.io-client/commit/4ee1d5d94b3906a9c052b459f1a818b15f38f91c
 * - export into its own module: https://github.com/socketio/engine.io-client/commit/de2c561e4564efeb78f1bdb1ba39ef81b2822cb3
 * - reimport: https://github.com/socketio/engine.io-client/commit/df32277c3f6d622eec5ed09f493cae3f3391d242
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */ const re = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
const parts = [
    'source',
    'protocol',
    'authority',
    'userInfo',
    'user',
    'password',
    'host',
    'port',
    'relative',
    'path',
    'directory',
    'file',
    'query',
    'anchor'
];
function parse(str) {
    if (str.length > 8000) {
        throw "URI too long";
    }
    const src = str, b = str.indexOf('['), e = str.indexOf(']');
    if (b != -1 && e != -1) {
        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
    }
    let m = re.exec(str || ''), uri = {}, i = 14;
    while(i--){
        uri[parts[i]] = m[i] || '';
    }
    if (b != -1 && e != -1) {
        uri.source = src;
        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
        uri.ipv6uri = true;
    }
    uri.pathNames = pathNames(uri, uri['path']);
    uri.queryKey = queryKey(uri, uri['query']);
    return uri;
}
function pathNames(obj, path) {
    const regx = /\/{2,9}/g, names = path.replace(regx, "/").split("/");
    if (path.slice(0, 1) == '/' || path.length === 0) {
        names.splice(0, 1);
    }
    if (path.slice(-1) == '/') {
        names.splice(names.length - 1, 1);
    }
    return names;
}
function queryKey(uri, query) {
    const data = {};
    query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function($0, $1, $2) {
        if ($1) {
            data[$1] = $2;
        }
    });
    return data;
}
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-client/build/esm/socket.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Socket",
    ()=>Socket,
    "SocketWithUpgrade",
    ()=>SocketWithUpgrade,
    "SocketWithoutUpgrade",
    ()=>SocketWithoutUpgrade
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$transports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-client/build/esm/transports/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-client/build/esm/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$contrib$2f$parseqs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-client/build/esm/contrib/parseqs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$contrib$2f$parseuri$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-client/build/esm/contrib/parseuri.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$socket$2e$io$2f$component$2d$emitter$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@socket.io/component-emitter/lib/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-parser/build/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-client/build/esm/globals.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const withEventListeners = typeof addEventListener === "function" && typeof removeEventListener === "function";
const OFFLINE_EVENT_LISTENERS = [];
if (withEventListeners) {
    // within a ServiceWorker, any event handler for the 'offline' event must be added on the initial evaluation of the
    // script, so we create one single event listener here which will forward the event to the socket instances
    addEventListener("offline", ()=>{
        OFFLINE_EVENT_LISTENERS.forEach((listener)=>listener());
    }, false);
}
class SocketWithoutUpgrade extends __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$socket$2e$io$2f$component$2d$emitter$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"] {
    /**
     * Socket constructor.
     *
     * @param {String|Object} uri - uri or options
     * @param {Object} opts - options
     */ constructor(uri, opts){
        super();
        this.binaryType = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultBinaryType"];
        this.writeBuffer = [];
        this._prevBufferLen = 0;
        this._pingInterval = -1;
        this._pingTimeout = -1;
        this._maxPayload = -1;
        /**
         * The expiration timestamp of the {@link _pingTimeoutTimer} object is tracked, in case the timer is throttled and the
         * callback is not fired on time. This can happen for example when a laptop is suspended or when a phone is locked.
         */ this._pingTimeoutTime = Infinity;
        if (uri && "object" === typeof uri) {
            opts = uri;
            uri = null;
        }
        if (uri) {
            const parsedUri = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$contrib$2f$parseuri$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(uri);
            opts.hostname = parsedUri.host;
            opts.secure = parsedUri.protocol === "https" || parsedUri.protocol === "wss";
            opts.port = parsedUri.port;
            if (parsedUri.query) opts.query = parsedUri.query;
        } else if (opts.host) {
            opts.hostname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$contrib$2f$parseuri$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(opts.host).host;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["installTimerFunctions"])(this, opts);
        this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;
        if (opts.hostname && !opts.port) {
            // if no port is specified manually, use the protocol default
            opts.port = this.secure ? "443" : "80";
        }
        this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
        this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? "443" : "80");
        this.transports = [];
        this._transportsByName = {};
        opts.transports.forEach((t)=>{
            const transportName = t.prototype.name;
            this.transports.push(transportName);
            this._transportsByName[transportName] = t;
        });
        this.opts = Object.assign({
            path: "/engine.io",
            agent: false,
            withCredentials: false,
            upgrade: true,
            timestampParam: "t",
            rememberUpgrade: false,
            addTrailingSlash: true,
            rejectUnauthorized: true,
            perMessageDeflate: {
                threshold: 1024
            },
            transportOptions: {},
            closeOnBeforeunload: false
        }, opts);
        this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : "");
        if (typeof this.opts.query === "string") {
            this.opts.query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$contrib$2f$parseqs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decode"])(this.opts.query);
        }
        if (withEventListeners) {
            if (this.opts.closeOnBeforeunload) {
                // Firefox closes the connection when the "beforeunload" event is emitted but not Chrome. This event listener
                // ensures every browser behaves the same (no "disconnect" event at the Socket.IO level when the page is
                // closed/reloaded)
                this._beforeunloadEventListener = ()=>{
                    if (this.transport) {
                        // silently close the transport
                        this.transport.removeAllListeners();
                        this.transport.close();
                    }
                };
                addEventListener("beforeunload", this._beforeunloadEventListener, false);
            }
            if (this.hostname !== "localhost") {
                this._offlineEventListener = ()=>{
                    this._onClose("transport close", {
                        description: "network connection lost"
                    });
                };
                OFFLINE_EVENT_LISTENERS.push(this._offlineEventListener);
            }
        }
        if (this.opts.withCredentials) {
            this._cookieJar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCookieJar"])();
        }
        this._open();
    }
    /**
     * Creates transport of the given type.
     *
     * @param {String} name - transport name
     * @return {Transport}
     * @private
     */ createTransport(name) {
        const query = Object.assign({}, this.opts.query);
        // append engine.io protocol identifier
        query.EIO = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["protocol"];
        // transport name
        query.transport = name;
        // session id if we already have one
        if (this.id) query.sid = this.id;
        const opts = Object.assign({}, this.opts, {
            query,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port
        }, this.opts.transportOptions[name]);
        return new this._transportsByName[name](opts);
    }
    /**
     * Initializes transport to use and starts probe.
     *
     * @private
     */ _open() {
        if (this.transports.length === 0) {
            // Emit error on next tick so it can be listened to
            this.setTimeoutFn(()=>{
                this.emitReserved("error", "No transports available");
            }, 0);
            return;
        }
        const transportName = this.opts.rememberUpgrade && SocketWithoutUpgrade.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
        this.readyState = "opening";
        const transport = this.createTransport(transportName);
        transport.open();
        this.setTransport(transport);
    }
    /**
     * Sets the current transport. Disables the existing one (if any).
     *
     * @private
     */ setTransport(transport) {
        if (this.transport) {
            this.transport.removeAllListeners();
        }
        // set up transport
        this.transport = transport;
        // set up transport listeners
        transport.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", (reason)=>this._onClose("transport close", reason));
    }
    /**
     * Called when connection is deemed open.
     *
     * @private
     */ onOpen() {
        this.readyState = "open";
        SocketWithoutUpgrade.priorWebsocketSuccess = "websocket" === this.transport.name;
        this.emitReserved("open");
        this.flush();
    }
    /**
     * Handles a packet.
     *
     * @private
     */ _onPacket(packet) {
        if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
            this.emitReserved("packet", packet);
            // Socket is live - any packet counts
            this.emitReserved("heartbeat");
            switch(packet.type){
                case "open":
                    this.onHandshake(JSON.parse(packet.data));
                    break;
                case "ping":
                    this._sendPacket("pong");
                    this.emitReserved("ping");
                    this.emitReserved("pong");
                    this._resetPingTimeout();
                    break;
                case "error":
                    const err = new Error("server error");
                    // @ts-ignore
                    err.code = packet.data;
                    this._onError(err);
                    break;
                case "message":
                    this.emitReserved("data", packet.data);
                    this.emitReserved("message", packet.data);
                    break;
            }
        } else {}
    }
    /**
     * Called upon handshake completion.
     *
     * @param {Object} data - handshake obj
     * @private
     */ onHandshake(data) {
        this.emitReserved("handshake", data);
        this.id = data.sid;
        this.transport.query.sid = data.sid;
        this._pingInterval = data.pingInterval;
        this._pingTimeout = data.pingTimeout;
        this._maxPayload = data.maxPayload;
        this.onOpen();
        // In case open handler closes socket
        if ("closed" === this.readyState) return;
        this._resetPingTimeout();
    }
    /**
     * Sets and resets ping timeout timer based on server pings.
     *
     * @private
     */ _resetPingTimeout() {
        this.clearTimeoutFn(this._pingTimeoutTimer);
        const delay = this._pingInterval + this._pingTimeout;
        this._pingTimeoutTime = Date.now() + delay;
        this._pingTimeoutTimer = this.setTimeoutFn(()=>{
            this._onClose("ping timeout");
        }, delay);
        if (this.opts.autoUnref) {
            this._pingTimeoutTimer.unref();
        }
    }
    /**
     * Called on `drain` event
     *
     * @private
     */ _onDrain() {
        this.writeBuffer.splice(0, this._prevBufferLen);
        // setting prevBufferLen = 0 is very important
        // for example, when upgrading, upgrade packet is sent over,
        // and a nonzero prevBufferLen could cause problems on `drain`
        this._prevBufferLen = 0;
        if (0 === this.writeBuffer.length) {
            this.emitReserved("drain");
        } else {
            this.flush();
        }
    }
    /**
     * Flush write buffers.
     *
     * @private
     */ flush() {
        if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
            const packets = this._getWritablePackets();
            this.transport.send(packets);
            // keep track of current length of writeBuffer
            // splice writeBuffer and callbackBuffer on `drain`
            this._prevBufferLen = packets.length;
            this.emitReserved("flush");
        }
    }
    /**
     * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
     * long-polling)
     *
     * @private
     */ _getWritablePackets() {
        const shouldCheckPayloadSize = this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;
        if (!shouldCheckPayloadSize) {
            return this.writeBuffer;
        }
        let payloadSize = 1; // first packet type
        for(let i = 0; i < this.writeBuffer.length; i++){
            const data = this.writeBuffer[i].data;
            if (data) {
                payloadSize += (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["byteLength"])(data);
            }
            if (i > 0 && payloadSize > this._maxPayload) {
                return this.writeBuffer.slice(0, i);
            }
            payloadSize += 2; // separator + packet type
        }
        return this.writeBuffer;
    }
    /**
     * Checks whether the heartbeat timer has expired but the socket has not yet been notified.
     *
     * Note: this method is private for now because it does not really fit the WebSocket API, but if we put it in the
     * `write()` method then the message would not be buffered by the Socket.IO client.
     *
     * @return {boolean}
     * @private
     */ /* private */ _hasPingExpired() {
        if (!this._pingTimeoutTime) return true;
        const hasExpired = Date.now() > this._pingTimeoutTime;
        if (hasExpired) {
            this._pingTimeoutTime = 0;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextTick"])(()=>{
                this._onClose("ping timeout");
            }, this.setTimeoutFn);
        }
        return hasExpired;
    }
    /**
     * Sends a message.
     *
     * @param {String} msg - message.
     * @param {Object} options.
     * @param {Function} fn - callback function.
     * @return {Socket} for chaining.
     */ write(msg, options, fn) {
        this._sendPacket("message", msg, options, fn);
        return this;
    }
    /**
     * Sends a message. Alias of {@link Socket#write}.
     *
     * @param {String} msg - message.
     * @param {Object} options.
     * @param {Function} fn - callback function.
     * @return {Socket} for chaining.
     */ send(msg, options, fn) {
        this._sendPacket("message", msg, options, fn);
        return this;
    }
    /**
     * Sends a packet.
     *
     * @param {String} type: packet type.
     * @param {String} data.
     * @param {Object} options.
     * @param {Function} fn - callback function.
     * @private
     */ _sendPacket(type, data, options, fn) {
        if ("function" === typeof data) {
            fn = data;
            data = undefined;
        }
        if ("function" === typeof options) {
            fn = options;
            options = null;
        }
        if ("closing" === this.readyState || "closed" === this.readyState) {
            return;
        }
        options = options || {};
        options.compress = false !== options.compress;
        const packet = {
            type: type,
            data: data,
            options: options
        };
        this.emitReserved("packetCreate", packet);
        this.writeBuffer.push(packet);
        if (fn) this.once("flush", fn);
        this.flush();
    }
    /**
     * Closes the connection.
     */ close() {
        const close = ()=>{
            this._onClose("forced close");
            this.transport.close();
        };
        const cleanupAndClose = ()=>{
            this.off("upgrade", cleanupAndClose);
            this.off("upgradeError", cleanupAndClose);
            close();
        };
        const waitForUpgrade = ()=>{
            // wait for upgrade to finish since we can't send packets while pausing a transport
            this.once("upgrade", cleanupAndClose);
            this.once("upgradeError", cleanupAndClose);
        };
        if ("opening" === this.readyState || "open" === this.readyState) {
            this.readyState = "closing";
            if (this.writeBuffer.length) {
                this.once("drain", ()=>{
                    if (this.upgrading) {
                        waitForUpgrade();
                    } else {
                        close();
                    }
                });
            } else if (this.upgrading) {
                waitForUpgrade();
            } else {
                close();
            }
        }
        return this;
    }
    /**
     * Called upon transport error
     *
     * @private
     */ _onError(err) {
        SocketWithoutUpgrade.priorWebsocketSuccess = false;
        if (this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening") {
            this.transports.shift();
            return this._open();
        }
        this.emitReserved("error", err);
        this._onClose("transport error", err);
    }
    /**
     * Called upon transport close.
     *
     * @private
     */ _onClose(reason, description) {
        if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
            // clear timers
            this.clearTimeoutFn(this._pingTimeoutTimer);
            // stop event from firing again for transport
            this.transport.removeAllListeners("close");
            // ensure transport won't stay open
            this.transport.close();
            // ignore further transport communication
            this.transport.removeAllListeners();
            if (withEventListeners) {
                if (this._beforeunloadEventListener) {
                    removeEventListener("beforeunload", this._beforeunloadEventListener, false);
                }
                if (this._offlineEventListener) {
                    const i = OFFLINE_EVENT_LISTENERS.indexOf(this._offlineEventListener);
                    if (i !== -1) {
                        OFFLINE_EVENT_LISTENERS.splice(i, 1);
                    }
                }
            }
            // set ready state
            this.readyState = "closed";
            // clear session id
            this.id = null;
            // emit close event
            this.emitReserved("close", reason, description);
            // clean buffers after, so users can still
            // grab the buffers on `close` event
            this.writeBuffer = [];
            this._prevBufferLen = 0;
        }
    }
}
SocketWithoutUpgrade.protocol = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$parser$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["protocol"];
class SocketWithUpgrade extends SocketWithoutUpgrade {
    constructor(){
        super(...arguments);
        this._upgrades = [];
    }
    onOpen() {
        super.onOpen();
        if ("open" === this.readyState && this.opts.upgrade) {
            for(let i = 0; i < this._upgrades.length; i++){
                this._probe(this._upgrades[i]);
            }
        }
    }
    /**
     * Probes a transport.
     *
     * @param {String} name - transport name
     * @private
     */ _probe(name) {
        let transport = this.createTransport(name);
        let failed = false;
        SocketWithoutUpgrade.priorWebsocketSuccess = false;
        const onTransportOpen = ()=>{
            if (failed) return;
            transport.send([
                {
                    type: "ping",
                    data: "probe"
                }
            ]);
            transport.once("packet", (msg)=>{
                if (failed) return;
                if ("pong" === msg.type && "probe" === msg.data) {
                    this.upgrading = true;
                    this.emitReserved("upgrading", transport);
                    if (!transport) return;
                    SocketWithoutUpgrade.priorWebsocketSuccess = "websocket" === transport.name;
                    this.transport.pause(()=>{
                        if (failed) return;
                        if ("closed" === this.readyState) return;
                        cleanup();
                        this.setTransport(transport);
                        transport.send([
                            {
                                type: "upgrade"
                            }
                        ]);
                        this.emitReserved("upgrade", transport);
                        transport = null;
                        this.upgrading = false;
                        this.flush();
                    });
                } else {
                    const err = new Error("probe error");
                    // @ts-ignore
                    err.transport = transport.name;
                    this.emitReserved("upgradeError", err);
                }
            });
        };
        function freezeTransport() {
            if (failed) return;
            // Any callback called by transport should be ignored since now
            failed = true;
            cleanup();
            transport.close();
            transport = null;
        }
        // Handle any error that happens while probing
        const onerror = (err)=>{
            const error = new Error("probe error: " + err);
            // @ts-ignore
            error.transport = transport.name;
            freezeTransport();
            this.emitReserved("upgradeError", error);
        };
        function onTransportClose() {
            onerror("transport closed");
        }
        // When the socket is closed while we're probing
        function onclose() {
            onerror("socket closed");
        }
        // When the socket is upgraded while we're probing
        function onupgrade(to) {
            if (transport && to.name !== transport.name) {
                freezeTransport();
            }
        }
        // Remove all listeners on the transport and on self
        const cleanup = ()=>{
            transport.removeListener("open", onTransportOpen);
            transport.removeListener("error", onerror);
            transport.removeListener("close", onTransportClose);
            this.off("close", onclose);
            this.off("upgrading", onupgrade);
        };
        transport.once("open", onTransportOpen);
        transport.once("error", onerror);
        transport.once("close", onTransportClose);
        this.once("close", onclose);
        this.once("upgrading", onupgrade);
        if (this._upgrades.indexOf("webtransport") !== -1 && name !== "webtransport") {
            // favor WebTransport
            this.setTimeoutFn(()=>{
                if (!failed) {
                    transport.open();
                }
            }, 200);
        } else {
            transport.open();
        }
    }
    onHandshake(data) {
        this._upgrades = this._filterUpgrades(data.upgrades);
        super.onHandshake(data);
    }
    /**
     * Filters upgrades, returning only those matching client transports.
     *
     * @param {Array} upgrades - server upgrades
     * @private
     */ _filterUpgrades(upgrades) {
        const filteredUpgrades = [];
        for(let i = 0; i < upgrades.length; i++){
            if (~this.transports.indexOf(upgrades[i])) filteredUpgrades.push(upgrades[i]);
        }
        return filteredUpgrades;
    }
}
class Socket extends SocketWithUpgrade {
    constructor(uri, opts = {}){
        const o = typeof uri === "object" ? uri : opts;
        if (!o.transports || o.transports && typeof o.transports[0] === "string") {
            o.transports = (o.transports || [
                "polling",
                "websocket",
                "webtransport"
            ]).map((transportName)=>__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$transports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transports"][transportName]).filter((t)=>!!t);
        }
        super(uri, o);
    }
}
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-client/build/esm/transports/polling-fetch.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Fetch",
    ()=>Fetch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$transports$2f$polling$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-client/build/esm/transports/polling.js [app-client] (ecmascript)");
;
class Fetch extends __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$transports$2f$polling$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Polling"] {
    doPoll() {
        this._fetch().then((res)=>{
            if (!res.ok) {
                return this.onError("fetch read error", res.status, res);
            }
            res.text().then((data)=>this.onData(data));
        }).catch((err)=>{
            this.onError("fetch read error", err);
        });
    }
    doWrite(data, callback) {
        this._fetch(data).then((res)=>{
            if (!res.ok) {
                return this.onError("fetch write error", res.status, res);
            }
            callback();
        }).catch((err)=>{
            this.onError("fetch write error", err);
        });
    }
    _fetch(data) {
        var _a;
        const isPost = data !== undefined;
        const headers = new Headers(this.opts.extraHeaders);
        if (isPost) {
            headers.set("content-type", "text/plain;charset=UTF-8");
        }
        (_a = this.socket._cookieJar) === null || _a === void 0 ? void 0 : _a.appendCookies(headers);
        return fetch(this.uri(), {
            method: isPost ? "POST" : "GET",
            body: isPost ? data : null,
            headers,
            credentials: this.opts.withCredentials ? "include" : "omit"
        }).then((res)=>{
            var _a;
            // @ts-ignore getSetCookie() was added in Node.js v19.7.0
            (_a = this.socket._cookieJar) === null || _a === void 0 ? void 0 : _a.parseCookies(res.headers.getSetCookie());
            return res;
        });
    }
}
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-client/build/esm/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "protocol",
    ()=>protocol
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$socket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-client/build/esm/socket.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$transport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-client/build/esm/transport.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$transports$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-client/build/esm/transports/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-client/build/esm/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$contrib$2f$parseuri$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-client/build/esm/contrib/parseuri.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-client/build/esm/globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$transports$2f$polling$2d$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-client/build/esm/transports/polling-fetch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$transports$2f$polling$2d$xhr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-client/build/esm/transports/polling-xhr.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$transports$2f$websocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-client/build/esm/transports/websocket.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$transports$2f$webtransport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-client/build/esm/transports/webtransport.js [app-client] (ecmascript)");
;
;
;
const protocol = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$socket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Socket"].protocol;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/socket.io-client/build/esm/url.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "url",
    ()=>url
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-client/build/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$contrib$2f$parseuri$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-client/build/esm/contrib/parseuri.js [app-client] (ecmascript)");
;
function url(uri, path = "", loc) {
    let obj = uri;
    // default to window.location
    loc = loc || typeof location !== "undefined" && location;
    if (null == uri) uri = loc.protocol + "//" + loc.host;
    // relative path support
    if (typeof uri === "string") {
        if ("/" === uri.charAt(0)) {
            if ("/" === uri.charAt(1)) {
                uri = loc.protocol + uri;
            } else {
                uri = loc.host + uri;
            }
        }
        if (!/^(https?|wss?):\/\//.test(uri)) {
            if ("undefined" !== typeof loc) {
                uri = loc.protocol + "//" + uri;
            } else {
                uri = "https://" + uri;
            }
        }
        // parse
        obj = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$contrib$2f$parseuri$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(uri);
    }
    // make sure we treat `localhost:80` and `localhost` equally
    if (!obj.port) {
        if (/^(http|ws)$/.test(obj.protocol)) {
            obj.port = "80";
        } else if (/^(http|ws)s$/.test(obj.protocol)) {
            obj.port = "443";
        }
    }
    obj.path = obj.path || "/";
    const ipv6 = obj.host.indexOf(":") !== -1;
    const host = ipv6 ? "[" + obj.host + "]" : obj.host;
    // define unique id
    obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
    // define href
    obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
    return obj;
}
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/socket.io-parser/build/esm/is-binary.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasBinary",
    ()=>hasBinary,
    "isBinary",
    ()=>isBinary
]);
const withNativeArrayBuffer = typeof ArrayBuffer === "function";
const isView = (obj)=>{
    return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
};
const toString = Object.prototype.toString;
const withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
const withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
function isBinary(obj) {
    return withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)) || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File;
}
function hasBinary(obj, toJSON) {
    if (!obj || typeof obj !== "object") {
        return false;
    }
    if (Array.isArray(obj)) {
        for(let i = 0, l = obj.length; i < l; i++){
            if (hasBinary(obj[i])) {
                return true;
            }
        }
        return false;
    }
    if (isBinary(obj)) {
        return true;
    }
    if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
        return hasBinary(obj.toJSON(), true);
    }
    for(const key in obj){
        if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
            return true;
        }
    }
    return false;
}
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/socket.io-parser/build/esm/binary.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deconstructPacket",
    ()=>deconstructPacket,
    "reconstructPacket",
    ()=>reconstructPacket
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$socket$2e$io$2d$parser$2f$build$2f$esm$2f$is$2d$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/socket.io-parser/build/esm/is-binary.js [app-client] (ecmascript)");
;
function deconstructPacket(packet) {
    const buffers = [];
    const packetData = packet.data;
    const pack = packet;
    pack.data = _deconstructPacket(packetData, buffers);
    pack.attachments = buffers.length; // number of binary 'attachments'
    return {
        packet: pack,
        buffers: buffers
    };
}
function _deconstructPacket(data, buffers) {
    if (!data) return data;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$socket$2e$io$2d$parser$2f$build$2f$esm$2f$is$2d$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBinary"])(data)) {
        const placeholder = {
            _placeholder: true,
            num: buffers.length
        };
        buffers.push(data);
        return placeholder;
    } else if (Array.isArray(data)) {
        const newData = new Array(data.length);
        for(let i = 0; i < data.length; i++){
            newData[i] = _deconstructPacket(data[i], buffers);
        }
        return newData;
    } else if (typeof data === "object" && !(data instanceof Date)) {
        const newData = {};
        for(const key in data){
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                newData[key] = _deconstructPacket(data[key], buffers);
            }
        }
        return newData;
    }
    return data;
}
function reconstructPacket(packet, buffers) {
    packet.data = _reconstructPacket(packet.data, buffers);
    delete packet.attachments; // no longer useful
    return packet;
}
function _reconstructPacket(data, buffers) {
    if (!data) return data;
    if (data && data._placeholder === true) {
        const isIndexValid = typeof data.num === "number" && data.num >= 0 && data.num < buffers.length;
        if (isIndexValid) {
            return buffers[data.num]; // appropriate buffer (should be natural order anyway)
        } else {
            throw new Error("illegal attachments");
        }
    } else if (Array.isArray(data)) {
        for(let i = 0; i < data.length; i++){
            data[i] = _reconstructPacket(data[i], buffers);
        }
    } else if (typeof data === "object") {
        for(const key in data){
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                data[key] = _reconstructPacket(data[key], buffers);
            }
        }
    }
    return data;
}
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/socket.io-parser/build/esm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Decoder",
    ()=>Decoder,
    "Encoder",
    ()=>Encoder,
    "PacketType",
    ()=>PacketType,
    "protocol",
    ()=>protocol
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$socket$2e$io$2f$component$2d$emitter$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@socket.io/component-emitter/lib/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$socket$2e$io$2d$parser$2f$build$2f$esm$2f$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/socket.io-parser/build/esm/binary.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$socket$2e$io$2d$parser$2f$build$2f$esm$2f$is$2d$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/socket.io-parser/build/esm/is-binary.js [app-client] (ecmascript)");
;
;
;
/**
 * These strings must not be used as event names, as they have a special meaning.
 */ const RESERVED_EVENTS = [
    "connect",
    "connect_error",
    "disconnect",
    "disconnecting",
    "newListener",
    "removeListener"
];
const protocol = 5;
var PacketType;
(function(PacketType) {
    PacketType[PacketType["CONNECT"] = 0] = "CONNECT";
    PacketType[PacketType["DISCONNECT"] = 1] = "DISCONNECT";
    PacketType[PacketType["EVENT"] = 2] = "EVENT";
    PacketType[PacketType["ACK"] = 3] = "ACK";
    PacketType[PacketType["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
    PacketType[PacketType["BINARY_EVENT"] = 5] = "BINARY_EVENT";
    PacketType[PacketType["BINARY_ACK"] = 6] = "BINARY_ACK";
})(PacketType || (PacketType = {}));
class Encoder {
    /**
     * Encoder constructor
     *
     * @param {function} replacer - custom replacer to pass down to JSON.parse
     */ constructor(replacer){
        this.replacer = replacer;
    }
    /**
     * Encode a packet as a single string if non-binary, or as a
     * buffer sequence, depending on packet type.
     *
     * @param {Object} obj - packet object
     */ encode(obj) {
        if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$socket$2e$io$2d$parser$2f$build$2f$esm$2f$is$2d$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasBinary"])(obj)) {
                return this.encodeAsBinary({
                    type: obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK,
                    nsp: obj.nsp,
                    data: obj.data,
                    id: obj.id
                });
            }
        }
        return [
            this.encodeAsString(obj)
        ];
    }
    /**
     * Encode packet as string.
     */ encodeAsString(obj) {
        // first is type
        let str = "" + obj.type;
        // attachments if we have them
        if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) {
            str += obj.attachments + "-";
        }
        // if we have a namespace other than `/`
        // we append it followed by a comma `,`
        if (obj.nsp && "/" !== obj.nsp) {
            str += obj.nsp + ",";
        }
        // immediately followed by the id
        if (null != obj.id) {
            str += obj.id;
        }
        // json data
        if (null != obj.data) {
            str += JSON.stringify(obj.data, this.replacer);
        }
        return str;
    }
    /**
     * Encode packet as 'buffer sequence' by removing blobs, and
     * deconstructing packet into object with placeholders and
     * a list of buffers.
     */ encodeAsBinary(obj) {
        const deconstruction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$socket$2e$io$2d$parser$2f$build$2f$esm$2f$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deconstructPacket"])(obj);
        const pack = this.encodeAsString(deconstruction.packet);
        const buffers = deconstruction.buffers;
        buffers.unshift(pack); // add packet info to beginning of data list
        return buffers; // write all the buffers
    }
}
// see https://stackoverflow.com/questions/8511281/check-if-a-value-is-an-object-in-javascript
function isObject(value) {
    return Object.prototype.toString.call(value) === "[object Object]";
}
class Decoder extends __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$socket$2e$io$2f$component$2d$emitter$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"] {
    /**
     * Decoder constructor
     *
     * @param {function} reviver - custom reviver to pass down to JSON.stringify
     */ constructor(reviver){
        super();
        this.reviver = reviver;
    }
    /**
     * Decodes an encoded packet string into packet JSON.
     *
     * @param {String} obj - encoded packet
     */ add(obj) {
        let packet;
        if (typeof obj === "string") {
            if (this.reconstructor) {
                throw new Error("got plaintext data when reconstructing a packet");
            }
            packet = this.decodeString(obj);
            const isBinaryEvent = packet.type === PacketType.BINARY_EVENT;
            if (isBinaryEvent || packet.type === PacketType.BINARY_ACK) {
                packet.type = isBinaryEvent ? PacketType.EVENT : PacketType.ACK;
                // binary packet's json
                this.reconstructor = new BinaryReconstructor(packet);
                // no attachments, labeled binary but no binary data to follow
                if (packet.attachments === 0) {
                    super.emitReserved("decoded", packet);
                }
            } else {
                // non-binary full packet
                super.emitReserved("decoded", packet);
            }
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$socket$2e$io$2d$parser$2f$build$2f$esm$2f$is$2d$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBinary"])(obj) || obj.base64) {
            // raw binary data
            if (!this.reconstructor) {
                throw new Error("got binary data when not reconstructing a packet");
            } else {
                packet = this.reconstructor.takeBinaryData(obj);
                if (packet) {
                    // received final buffer
                    this.reconstructor = null;
                    super.emitReserved("decoded", packet);
                }
            }
        } else {
            throw new Error("Unknown type: " + obj);
        }
    }
    /**
     * Decode a packet String (JSON data)
     *
     * @param {String} str
     * @return {Object} packet
     */ decodeString(str) {
        let i = 0;
        // look up type
        const p = {
            type: Number(str.charAt(0))
        };
        if (PacketType[p.type] === undefined) {
            throw new Error("unknown packet type " + p.type);
        }
        // look up attachments if type binary
        if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
            const start = i + 1;
            while(str.charAt(++i) !== "-" && i != str.length){}
            const buf = str.substring(start, i);
            if (buf != Number(buf) || str.charAt(i) !== "-") {
                throw new Error("Illegal attachments");
            }
            p.attachments = Number(buf);
        }
        // look up namespace (if any)
        if ("/" === str.charAt(i + 1)) {
            const start = i + 1;
            while(++i){
                const c = str.charAt(i);
                if ("," === c) break;
                if (i === str.length) break;
            }
            p.nsp = str.substring(start, i);
        } else {
            p.nsp = "/";
        }
        // look up id
        const next = str.charAt(i + 1);
        if ("" !== next && Number(next) == next) {
            const start = i + 1;
            while(++i){
                const c = str.charAt(i);
                if (null == c || Number(c) != c) {
                    --i;
                    break;
                }
                if (i === str.length) break;
            }
            p.id = Number(str.substring(start, i + 1));
        }
        // look up json data
        if (str.charAt(++i)) {
            const payload = this.tryParse(str.substr(i));
            if (Decoder.isPayloadValid(p.type, payload)) {
                p.data = payload;
            } else {
                throw new Error("invalid payload");
            }
        }
        return p;
    }
    tryParse(str) {
        try {
            return JSON.parse(str, this.reviver);
        } catch (e) {
            return false;
        }
    }
    static isPayloadValid(type, payload) {
        switch(type){
            case PacketType.CONNECT:
                return isObject(payload);
            case PacketType.DISCONNECT:
                return payload === undefined;
            case PacketType.CONNECT_ERROR:
                return typeof payload === "string" || isObject(payload);
            case PacketType.EVENT:
            case PacketType.BINARY_EVENT:
                return Array.isArray(payload) && (typeof payload[0] === "number" || typeof payload[0] === "string" && RESERVED_EVENTS.indexOf(payload[0]) === -1);
            case PacketType.ACK:
            case PacketType.BINARY_ACK:
                return Array.isArray(payload);
        }
    }
    /**
     * Deallocates a parser's resources
     */ destroy() {
        if (this.reconstructor) {
            this.reconstructor.finishedReconstruction();
            this.reconstructor = null;
        }
    }
}
/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 */ class BinaryReconstructor {
    constructor(packet){
        this.packet = packet;
        this.buffers = [];
        this.reconPack = packet;
    }
    /**
     * Method to be called when binary data received from connection
     * after a BINARY_EVENT packet.
     *
     * @param {Buffer | ArrayBuffer} binData - the raw binary data received
     * @return {null | Object} returns null if more binary data is expected or
     *   a reconstructed packet object if all buffers have been received.
     */ takeBinaryData(binData) {
        this.buffers.push(binData);
        if (this.buffers.length === this.reconPack.attachments) {
            // done with buffer list
            const packet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$socket$2e$io$2d$parser$2f$build$2f$esm$2f$binary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reconstructPacket"])(this.reconPack, this.buffers);
            this.finishedReconstruction();
            return packet;
        }
        return null;
    }
    /**
     * Cleans up binary packet reconstruction variables.
     */ finishedReconstruction() {
        this.reconPack = null;
        this.buffers = [];
    }
}
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/socket.io-client/build/esm/on.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "on",
    ()=>on
]);
function on(obj, ev, fn) {
    obj.on(ev, fn);
    return function subDestroy() {
        obj.off(ev, fn);
    };
}
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/socket.io-client/build/esm/socket.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Socket",
    ()=>Socket
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$socket$2e$io$2d$parser$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/socket.io-parser/build/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$on$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/socket.io-client/build/esm/on.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$socket$2e$io$2f$component$2d$emitter$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@socket.io/component-emitter/lib/esm/index.js [app-client] (ecmascript)");
;
;
;
/**
 * Internal events.
 * These events can't be emitted by the user.
 */ const RESERVED_EVENTS = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
    newListener: 1,
    removeListener: 1
});
class Socket extends __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$socket$2e$io$2f$component$2d$emitter$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"] {
    /**
     * `Socket` constructor.
     */ constructor(io, nsp, opts){
        super();
        /**
         * Whether the socket is currently connected to the server.
         *
         * @example
         * const socket = io();
         *
         * socket.on("connect", () => {
         *   console.log(socket.connected); // true
         * });
         *
         * socket.on("disconnect", () => {
         *   console.log(socket.connected); // false
         * });
         */ this.connected = false;
        /**
         * Whether the connection state was recovered after a temporary disconnection. In that case, any missed packets will
         * be transmitted by the server.
         */ this.recovered = false;
        /**
         * Buffer for packets received before the CONNECT packet
         */ this.receiveBuffer = [];
        /**
         * Buffer for packets that will be sent once the socket is connected
         */ this.sendBuffer = [];
        /**
         * The queue of packets to be sent with retry in case of failure.
         *
         * Packets are sent one by one, each waiting for the server acknowledgement, in order to guarantee the delivery order.
         * @private
         */ this._queue = [];
        /**
         * A sequence to generate the ID of the {@link QueuedPacket}.
         * @private
         */ this._queueSeq = 0;
        this.ids = 0;
        /**
         * A map containing acknowledgement handlers.
         *
         * The `withError` attribute is used to differentiate handlers that accept an error as first argument:
         *
         * - `socket.emit("test", (err, value) => { ... })` with `ackTimeout` option
         * - `socket.timeout(5000).emit("test", (err, value) => { ... })`
         * - `const value = await socket.emitWithAck("test")`
         *
         * From those that don't:
         *
         * - `socket.emit("test", (value) => { ... });`
         *
         * In the first case, the handlers will be called with an error when:
         *
         * - the timeout is reached
         * - the socket gets disconnected
         *
         * In the second case, the handlers will be simply discarded upon disconnection, since the client will never receive
         * an acknowledgement from the server.
         *
         * @private
         */ this.acks = {};
        this.flags = {};
        this.io = io;
        this.nsp = nsp;
        if (opts && opts.auth) {
            this.auth = opts.auth;
        }
        this._opts = Object.assign({}, opts);
        if (this.io._autoConnect) this.open();
    }
    /**
     * Whether the socket is currently disconnected
     *
     * @example
     * const socket = io();
     *
     * socket.on("connect", () => {
     *   console.log(socket.disconnected); // false
     * });
     *
     * socket.on("disconnect", () => {
     *   console.log(socket.disconnected); // true
     * });
     */ get disconnected() {
        return !this.connected;
    }
    /**
     * Subscribe to open, close and packet events
     *
     * @private
     */ subEvents() {
        if (this.subs) return;
        const io = this.io;
        this.subs = [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$on$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["on"])(io, "open", this.onopen.bind(this)),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$on$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["on"])(io, "packet", this.onpacket.bind(this)),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$on$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["on"])(io, "error", this.onerror.bind(this)),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$on$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["on"])(io, "close", this.onclose.bind(this))
        ];
    }
    /**
     * Whether the Socket will try to reconnect when its Manager connects or reconnects.
     *
     * @example
     * const socket = io();
     *
     * console.log(socket.active); // true
     *
     * socket.on("disconnect", (reason) => {
     *   if (reason === "io server disconnect") {
     *     // the disconnection was initiated by the server, you need to manually reconnect
     *     console.log(socket.active); // false
     *   }
     *   // else the socket will automatically try to reconnect
     *   console.log(socket.active); // true
     * });
     */ get active() {
        return !!this.subs;
    }
    /**
     * "Opens" the socket.
     *
     * @example
     * const socket = io({
     *   autoConnect: false
     * });
     *
     * socket.connect();
     */ connect() {
        if (this.connected) return this;
        this.subEvents();
        if (!this.io["_reconnecting"]) this.io.open(); // ensure open
        if ("open" === this.io._readyState) this.onopen();
        return this;
    }
    /**
     * Alias for {@link connect()}.
     */ open() {
        return this.connect();
    }
    /**
     * Sends a `message` event.
     *
     * This method mimics the WebSocket.send() method.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
     *
     * @example
     * socket.send("hello");
     *
     * // this is equivalent to
     * socket.emit("message", "hello");
     *
     * @return self
     */ send(...args) {
        args.unshift("message");
        this.emit.apply(this, args);
        return this;
    }
    /**
     * Override `emit`.
     * If the event is in `events`, it's emitted normally.
     *
     * @example
     * socket.emit("hello", "world");
     *
     * // all serializable datastructures are supported (no need to call JSON.stringify)
     * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
     *
     * // with an acknowledgement from the server
     * socket.emit("hello", "world", (val) => {
     *   // ...
     * });
     *
     * @return self
     */ emit(ev, ...args) {
        var _a, _b, _c;
        if (RESERVED_EVENTS.hasOwnProperty(ev)) {
            throw new Error('"' + ev.toString() + '" is a reserved event name');
        }
        args.unshift(ev);
        if (this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) {
            this._addToQueue(args);
            return this;
        }
        const packet = {
            type: __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$socket$2e$io$2d$parser$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PacketType"].EVENT,
            data: args
        };
        packet.options = {};
        packet.options.compress = this.flags.compress !== false;
        // event ack callback
        if ("function" === typeof args[args.length - 1]) {
            const id = this.ids++;
            const ack = args.pop();
            this._registerAckCallback(id, ack);
            packet.id = id;
        }
        const isTransportWritable = (_b = (_a = this.io.engine) === null || _a === void 0 ? void 0 : _a.transport) === null || _b === void 0 ? void 0 : _b.writable;
        const isConnected = this.connected && !((_c = this.io.engine) === null || _c === void 0 ? void 0 : _c._hasPingExpired());
        const discardPacket = this.flags.volatile && !isTransportWritable;
        if (discardPacket) {} else if (isConnected) {
            this.notifyOutgoingListeners(packet);
            this.packet(packet);
        } else {
            this.sendBuffer.push(packet);
        }
        this.flags = {};
        return this;
    }
    /**
     * @private
     */ _registerAckCallback(id, ack) {
        var _a;
        const timeout = (_a = this.flags.timeout) !== null && _a !== void 0 ? _a : this._opts.ackTimeout;
        if (timeout === undefined) {
            this.acks[id] = ack;
            return;
        }
        // @ts-ignore
        const timer = this.io.setTimeoutFn(()=>{
            delete this.acks[id];
            for(let i = 0; i < this.sendBuffer.length; i++){
                if (this.sendBuffer[i].id === id) {
                    this.sendBuffer.splice(i, 1);
                }
            }
            ack.call(this, new Error("operation has timed out"));
        }, timeout);
        const fn = (...args)=>{
            // @ts-ignore
            this.io.clearTimeoutFn(timer);
            ack.apply(this, args);
        };
        fn.withError = true;
        this.acks[id] = fn;
    }
    /**
     * Emits an event and waits for an acknowledgement
     *
     * @example
     * // without timeout
     * const response = await socket.emitWithAck("hello", "world");
     *
     * // with a specific timeout
     * try {
     *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
     * } catch (err) {
     *   // the server did not acknowledge the event in the given delay
     * }
     *
     * @return a Promise that will be fulfilled when the server acknowledges the event
     */ emitWithAck(ev, ...args) {
        return new Promise((resolve, reject)=>{
            const fn = (arg1, arg2)=>{
                return arg1 ? reject(arg1) : resolve(arg2);
            };
            fn.withError = true;
            args.push(fn);
            this.emit(ev, ...args);
        });
    }
    /**
     * Add the packet to the queue.
     * @param args
     * @private
     */ _addToQueue(args) {
        let ack;
        if (typeof args[args.length - 1] === "function") {
            ack = args.pop();
        }
        const packet = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: false,
            args,
            flags: Object.assign({
                fromQueue: true
            }, this.flags)
        };
        args.push((err, ...responseArgs)=>{
            if (packet !== this._queue[0]) {
                // the packet has already been acknowledged
                return;
            }
            const hasError = err !== null;
            if (hasError) {
                if (packet.tryCount > this._opts.retries) {
                    this._queue.shift();
                    if (ack) {
                        ack(err);
                    }
                }
            } else {
                this._queue.shift();
                if (ack) {
                    ack(null, ...responseArgs);
                }
            }
            packet.pending = false;
            return this._drainQueue();
        });
        this._queue.push(packet);
        this._drainQueue();
    }
    /**
     * Send the first packet of the queue, and wait for an acknowledgement from the server.
     * @param force - whether to resend a packet that has not been acknowledged yet
     *
     * @private
     */ _drainQueue(force = false) {
        if (!this.connected || this._queue.length === 0) {
            return;
        }
        const packet = this._queue[0];
        if (packet.pending && !force) {
            return;
        }
        packet.pending = true;
        packet.tryCount++;
        this.flags = packet.flags;
        this.emit.apply(this, packet.args);
    }
    /**
     * Sends a packet.
     *
     * @param packet
     * @private
     */ packet(packet) {
        packet.nsp = this.nsp;
        this.io._packet(packet);
    }
    /**
     * Called upon engine `open`.
     *
     * @private
     */ onopen() {
        if (typeof this.auth == "function") {
            this.auth((data)=>{
                this._sendConnectPacket(data);
            });
        } else {
            this._sendConnectPacket(this.auth);
        }
    }
    /**
     * Sends a CONNECT packet to initiate the Socket.IO session.
     *
     * @param data
     * @private
     */ _sendConnectPacket(data) {
        this.packet({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$socket$2e$io$2d$parser$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PacketType"].CONNECT,
            data: this._pid ? Object.assign({
                pid: this._pid,
                offset: this._lastOffset
            }, data) : data
        });
    }
    /**
     * Called upon engine or manager `error`.
     *
     * @param err
     * @private
     */ onerror(err) {
        if (!this.connected) {
            this.emitReserved("connect_error", err);
        }
    }
    /**
     * Called upon engine `close`.
     *
     * @param reason
     * @param description
     * @private
     */ onclose(reason, description) {
        this.connected = false;
        delete this.id;
        this.emitReserved("disconnect", reason, description);
        this._clearAcks();
    }
    /**
     * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
     * the server.
     *
     * @private
     */ _clearAcks() {
        Object.keys(this.acks).forEach((id)=>{
            const isBuffered = this.sendBuffer.some((packet)=>String(packet.id) === id);
            if (!isBuffered) {
                // note: handlers that do not accept an error as first argument are ignored here
                const ack = this.acks[id];
                delete this.acks[id];
                if (ack.withError) {
                    ack.call(this, new Error("socket has been disconnected"));
                }
            }
        });
    }
    /**
     * Called with socket packet.
     *
     * @param packet
     * @private
     */ onpacket(packet) {
        const sameNamespace = packet.nsp === this.nsp;
        if (!sameNamespace) return;
        switch(packet.type){
            case __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$socket$2e$io$2d$parser$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PacketType"].CONNECT:
                if (packet.data && packet.data.sid) {
                    this.onconnect(packet.data.sid, packet.data.pid);
                } else {
                    this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                }
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$socket$2e$io$2d$parser$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PacketType"].EVENT:
            case __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$socket$2e$io$2d$parser$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PacketType"].BINARY_EVENT:
                this.onevent(packet);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$socket$2e$io$2d$parser$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PacketType"].ACK:
            case __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$socket$2e$io$2d$parser$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PacketType"].BINARY_ACK:
                this.onack(packet);
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$socket$2e$io$2d$parser$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PacketType"].DISCONNECT:
                this.ondisconnect();
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$socket$2e$io$2d$parser$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PacketType"].CONNECT_ERROR:
                this.destroy();
                const err = new Error(packet.data.message);
                // @ts-ignore
                err.data = packet.data.data;
                this.emitReserved("connect_error", err);
                break;
        }
    }
    /**
     * Called upon a server event.
     *
     * @param packet
     * @private
     */ onevent(packet) {
        const args = packet.data || [];
        if (null != packet.id) {
            args.push(this.ack(packet.id));
        }
        if (this.connected) {
            this.emitEvent(args);
        } else {
            this.receiveBuffer.push(Object.freeze(args));
        }
    }
    emitEvent(args) {
        if (this._anyListeners && this._anyListeners.length) {
            const listeners = this._anyListeners.slice();
            for (const listener of listeners){
                listener.apply(this, args);
            }
        }
        super.emit.apply(this, args);
        if (this._pid && args.length && typeof args[args.length - 1] === "string") {
            this._lastOffset = args[args.length - 1];
        }
    }
    /**
     * Produces an ack callback to emit with an event.
     *
     * @private
     */ ack(id) {
        const self = this;
        let sent = false;
        return function(...args) {
            // prevent double callbacks
            if (sent) return;
            sent = true;
            self.packet({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$socket$2e$io$2d$parser$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PacketType"].ACK,
                id: id,
                data: args
            });
        };
    }
    /**
     * Called upon a server acknowledgement.
     *
     * @param packet
     * @private
     */ onack(packet) {
        const ack = this.acks[packet.id];
        if (typeof ack !== "function") {
            return;
        }
        delete this.acks[packet.id];
        // @ts-ignore FIXME ack is incorrectly inferred as 'never'
        if (ack.withError) {
            packet.data.unshift(null);
        }
        // @ts-ignore
        ack.apply(this, packet.data);
    }
    /**
     * Called upon server connect.
     *
     * @private
     */ onconnect(id, pid) {
        this.id = id;
        this.recovered = pid && this._pid === pid;
        this._pid = pid; // defined only if connection state recovery is enabled
        this.connected = true;
        this.emitBuffered();
        this.emitReserved("connect");
        this._drainQueue(true);
    }
    /**
     * Emit buffered events (received and emitted).
     *
     * @private
     */ emitBuffered() {
        this.receiveBuffer.forEach((args)=>this.emitEvent(args));
        this.receiveBuffer = [];
        this.sendBuffer.forEach((packet)=>{
            this.notifyOutgoingListeners(packet);
            this.packet(packet);
        });
        this.sendBuffer = [];
    }
    /**
     * Called upon server disconnect.
     *
     * @private
     */ ondisconnect() {
        this.destroy();
        this.onclose("io server disconnect");
    }
    /**
     * Called upon forced client/server side disconnections,
     * this method ensures the manager stops tracking us and
     * that reconnections don't get triggered for this.
     *
     * @private
     */ destroy() {
        if (this.subs) {
            // clean subscriptions to avoid reconnections
            this.subs.forEach((subDestroy)=>subDestroy());
            this.subs = undefined;
        }
        this.io["_destroy"](this);
    }
    /**
     * Disconnects the socket manually. In that case, the socket will not try to reconnect.
     *
     * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
     *
     * @example
     * const socket = io();
     *
     * socket.on("disconnect", (reason) => {
     *   // console.log(reason); prints "io client disconnect"
     * });
     *
     * socket.disconnect();
     *
     * @return self
     */ disconnect() {
        if (this.connected) {
            this.packet({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$socket$2e$io$2d$parser$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PacketType"].DISCONNECT
            });
        }
        // remove socket from pool
        this.destroy();
        if (this.connected) {
            // fire events
            this.onclose("io client disconnect");
        }
        return this;
    }
    /**
     * Alias for {@link disconnect()}.
     *
     * @return self
     */ close() {
        return this.disconnect();
    }
    /**
     * Sets the compress flag.
     *
     * @example
     * socket.compress(false).emit("hello");
     *
     * @param compress - if `true`, compresses the sending data
     * @return self
     */ compress(compress) {
        this.flags.compress = compress;
        return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
     * ready to send messages.
     *
     * @example
     * socket.volatile.emit("hello"); // the server may or may not receive it
     *
     * @returns self
     */ get volatile() {
        this.flags.volatile = true;
        return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
     * given number of milliseconds have elapsed without an acknowledgement from the server:
     *
     * @example
     * socket.timeout(5000).emit("my-event", (err) => {
     *   if (err) {
     *     // the server did not acknowledge the event in the given delay
     *   }
     * });
     *
     * @returns self
     */ timeout(timeout) {
        this.flags.timeout = timeout;
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * @example
     * socket.onAny((event, ...args) => {
     *   console.log(`got ${event}`);
     * });
     *
     * @param listener
     */ onAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.push(listener);
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * @example
     * socket.prependAny((event, ...args) => {
     *   console.log(`got event ${event}`);
     * });
     *
     * @param listener
     */ prependAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.unshift(listener);
        return this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @example
     * const catchAllListener = (event, ...args) => {
     *   console.log(`got event ${event}`);
     * }
     *
     * socket.onAny(catchAllListener);
     *
     * // remove a specific listener
     * socket.offAny(catchAllListener);
     *
     * // or remove all listeners
     * socket.offAny();
     *
     * @param listener
     */ offAny(listener) {
        if (!this._anyListeners) {
            return this;
        }
        if (listener) {
            const listeners = this._anyListeners;
            for(let i = 0; i < listeners.length; i++){
                if (listener === listeners[i]) {
                    listeners.splice(i, 1);
                    return this;
                }
            }
        } else {
            this._anyListeners = [];
        }
        return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     */ listenersAny() {
        return this._anyListeners || [];
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * Note: acknowledgements sent to the server are not included.
     *
     * @example
     * socket.onAnyOutgoing((event, ...args) => {
     *   console.log(`sent event ${event}`);
     * });
     *
     * @param listener
     */ onAnyOutgoing(listener) {
        this._anyOutgoingListeners = this._anyOutgoingListeners || [];
        this._anyOutgoingListeners.push(listener);
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * Note: acknowledgements sent to the server are not included.
     *
     * @example
     * socket.prependAnyOutgoing((event, ...args) => {
     *   console.log(`sent event ${event}`);
     * });
     *
     * @param listener
     */ prependAnyOutgoing(listener) {
        this._anyOutgoingListeners = this._anyOutgoingListeners || [];
        this._anyOutgoingListeners.unshift(listener);
        return this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @example
     * const catchAllListener = (event, ...args) => {
     *   console.log(`sent event ${event}`);
     * }
     *
     * socket.onAnyOutgoing(catchAllListener);
     *
     * // remove a specific listener
     * socket.offAnyOutgoing(catchAllListener);
     *
     * // or remove all listeners
     * socket.offAnyOutgoing();
     *
     * @param [listener] - the catch-all listener (optional)
     */ offAnyOutgoing(listener) {
        if (!this._anyOutgoingListeners) {
            return this;
        }
        if (listener) {
            const listeners = this._anyOutgoingListeners;
            for(let i = 0; i < listeners.length; i++){
                if (listener === listeners[i]) {
                    listeners.splice(i, 1);
                    return this;
                }
            }
        } else {
            this._anyOutgoingListeners = [];
        }
        return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     */ listenersAnyOutgoing() {
        return this._anyOutgoingListeners || [];
    }
    /**
     * Notify the listeners for each packet sent
     *
     * @param packet
     *
     * @private
     */ notifyOutgoingListeners(packet) {
        if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const listeners = this._anyOutgoingListeners.slice();
            for (const listener of listeners){
                listener.apply(this, packet.data);
            }
        }
    }
}
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/socket.io-client/build/esm/contrib/backo2.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */ __turbopack_context__.s([
    "Backoff",
    ()=>Backoff
]);
function Backoff(opts) {
    opts = opts || {};
    this.ms = opts.min || 100;
    this.max = opts.max || 10000;
    this.factor = opts.factor || 2;
    this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
    this.attempts = 0;
}
/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */ Backoff.prototype.duration = function() {
    var ms = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
        var rand = Math.random();
        var deviation = Math.floor(rand * this.jitter * ms);
        ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
    }
    return Math.min(ms, this.max) | 0;
};
/**
 * Reset the number of attempts.
 *
 * @api public
 */ Backoff.prototype.reset = function() {
    this.attempts = 0;
};
/**
 * Set the minimum duration
 *
 * @api public
 */ Backoff.prototype.setMin = function(min) {
    this.ms = min;
};
/**
 * Set the maximum duration
 *
 * @api public
 */ Backoff.prototype.setMax = function(max) {
    this.max = max;
};
/**
 * Set the jitter
 *
 * @api public
 */ Backoff.prototype.setJitter = function(jitter) {
    this.jitter = jitter;
};
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/socket.io-client/build/esm/manager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Manager",
    ()=>Manager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-client/build/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$socket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-client/build/esm/socket.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-client/build/esm/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-client/build/esm/globals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$socket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/socket.io-client/build/esm/socket.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$socket$2e$io$2d$parser$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/socket.io-parser/build/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$on$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/socket.io-client/build/esm/on.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$contrib$2f$backo2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/socket.io-client/build/esm/contrib/backo2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$socket$2e$io$2f$component$2d$emitter$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@socket.io/component-emitter/lib/esm/index.js [app-client] (ecmascript)");
;
;
;
;
;
;
class Manager extends __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$socket$2e$io$2f$component$2d$emitter$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Emitter"] {
    constructor(uri, opts){
        var _a;
        super();
        this.nsps = {};
        this.subs = [];
        if (uri && "object" === typeof uri) {
            opts = uri;
            uri = undefined;
        }
        opts = opts || {};
        opts.path = opts.path || "/socket.io";
        this.opts = opts;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["installTimerFunctions"])(this, opts);
        this.reconnection(opts.reconnection !== false);
        this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
        this.reconnectionDelay(opts.reconnectionDelay || 1000);
        this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
        this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
        this.backoff = new __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$contrib$2f$backo2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Backoff"]({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor()
        });
        this.timeout(null == opts.timeout ? 20000 : opts.timeout);
        this._readyState = "closed";
        this.uri = uri;
        const _parser = opts.parser || __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$socket$2e$io$2d$parser$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__;
        this.encoder = new _parser.Encoder();
        this.decoder = new _parser.Decoder();
        this._autoConnect = opts.autoConnect !== false;
        if (this._autoConnect) this.open();
    }
    reconnection(v) {
        if (!arguments.length) return this._reconnection;
        this._reconnection = !!v;
        if (!v) {
            this.skipReconnect = true;
        }
        return this;
    }
    reconnectionAttempts(v) {
        if (v === undefined) return this._reconnectionAttempts;
        this._reconnectionAttempts = v;
        return this;
    }
    reconnectionDelay(v) {
        var _a;
        if (v === undefined) return this._reconnectionDelay;
        this._reconnectionDelay = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
        return this;
    }
    randomizationFactor(v) {
        var _a;
        if (v === undefined) return this._randomizationFactor;
        this._randomizationFactor = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
        return this;
    }
    reconnectionDelayMax(v) {
        var _a;
        if (v === undefined) return this._reconnectionDelayMax;
        this._reconnectionDelayMax = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
        return this;
    }
    timeout(v) {
        if (!arguments.length) return this._timeout;
        this._timeout = v;
        return this;
    }
    /**
     * Starts trying to reconnect if reconnection is enabled and we have not
     * started reconnecting yet
     *
     * @private
     */ maybeReconnectOnOpen() {
        // Only try to reconnect if it's the first time we're connecting
        if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
            // keeps reconnection from firing twice for the same reconnection loop
            this.reconnect();
        }
    }
    /**
     * Sets the current transport `socket`.
     *
     * @param {Function} fn - optional, callback
     * @return self
     * @public
     */ open(fn) {
        if (~this._readyState.indexOf("open")) return this;
        this.engine = new __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$socket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Socket"](this.uri, this.opts);
        const socket = this.engine;
        const self = this;
        this._readyState = "opening";
        this.skipReconnect = false;
        // emit `open`
        const openSubDestroy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$on$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["on"])(socket, "open", function() {
            self.onopen();
            fn && fn();
        });
        const onError = (err)=>{
            this.cleanup();
            this._readyState = "closed";
            this.emitReserved("error", err);
            if (fn) {
                fn(err);
            } else {
                // Only do this if there is no fn to handle the error
                this.maybeReconnectOnOpen();
            }
        };
        // emit `error`
        const errorSub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$on$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["on"])(socket, "error", onError);
        if (false !== this._timeout) {
            const timeout = this._timeout;
            // set timer
            const timer = this.setTimeoutFn(()=>{
                openSubDestroy();
                onError(new Error("timeout"));
                socket.close();
            }, timeout);
            if (this.opts.autoUnref) {
                timer.unref();
            }
            this.subs.push(()=>{
                this.clearTimeoutFn(timer);
            });
        }
        this.subs.push(openSubDestroy);
        this.subs.push(errorSub);
        return this;
    }
    /**
     * Alias for open()
     *
     * @return self
     * @public
     */ connect(fn) {
        return this.open(fn);
    }
    /**
     * Called upon transport open.
     *
     * @private
     */ onopen() {
        // clear old subs
        this.cleanup();
        // mark as open
        this._readyState = "open";
        this.emitReserved("open");
        // add new subs
        const socket = this.engine;
        this.subs.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$on$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["on"])(socket, "ping", this.onping.bind(this)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$on$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["on"])(socket, "data", this.ondata.bind(this)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$on$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["on"])(socket, "error", this.onerror.bind(this)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$on$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["on"])(socket, "close", this.onclose.bind(this)), // @ts-ignore
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$on$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["on"])(this.decoder, "decoded", this.ondecoded.bind(this)));
    }
    /**
     * Called upon a ping.
     *
     * @private
     */ onping() {
        this.emitReserved("ping");
    }
    /**
     * Called with data.
     *
     * @private
     */ ondata(data) {
        try {
            this.decoder.add(data);
        } catch (e) {
            this.onclose("parse error", e);
        }
    }
    /**
     * Called when parser fully decodes a packet.
     *
     * @private
     */ ondecoded(packet) {
        // the nextTick call prevents an exception in a user-provided event listener from triggering a disconnection due to a "parse error"
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$globals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextTick"])(()=>{
            this.emitReserved("packet", packet);
        }, this.setTimeoutFn);
    }
    /**
     * Called upon socket error.
     *
     * @private
     */ onerror(err) {
        this.emitReserved("error", err);
    }
    /**
     * Creates a new socket for the given `nsp`.
     *
     * @return {Socket}
     * @public
     */ socket(nsp, opts) {
        let socket = this.nsps[nsp];
        if (!socket) {
            socket = new __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$socket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Socket"](this, nsp, opts);
            this.nsps[nsp] = socket;
        } else if (this._autoConnect && !socket.active) {
            socket.connect();
        }
        return socket;
    }
    /**
     * Called upon a socket close.
     *
     * @param socket
     * @private
     */ _destroy(socket) {
        const nsps = Object.keys(this.nsps);
        for (const nsp of nsps){
            const socket = this.nsps[nsp];
            if (socket.active) {
                return;
            }
        }
        this._close();
    }
    /**
     * Writes a packet.
     *
     * @param packet
     * @private
     */ _packet(packet) {
        const encodedPackets = this.encoder.encode(packet);
        for(let i = 0; i < encodedPackets.length; i++){
            this.engine.write(encodedPackets[i], packet.options);
        }
    }
    /**
     * Clean up transport subscriptions and packet buffer.
     *
     * @private
     */ cleanup() {
        this.subs.forEach((subDestroy)=>subDestroy());
        this.subs.length = 0;
        this.decoder.destroy();
    }
    /**
     * Close the current socket.
     *
     * @private
     */ _close() {
        this.skipReconnect = true;
        this._reconnecting = false;
        this.onclose("forced close");
    }
    /**
     * Alias for close()
     *
     * @private
     */ disconnect() {
        return this._close();
    }
    /**
     * Called when:
     *
     * - the low-level engine is closed
     * - the parser encountered a badly formatted packet
     * - all sockets are disconnected
     *
     * @private
     */ onclose(reason, description) {
        var _a;
        this.cleanup();
        (_a = this.engine) === null || _a === void 0 ? void 0 : _a.close();
        this.backoff.reset();
        this._readyState = "closed";
        this.emitReserved("close", reason, description);
        if (this._reconnection && !this.skipReconnect) {
            this.reconnect();
        }
    }
    /**
     * Attempt a reconnection.
     *
     * @private
     */ reconnect() {
        if (this._reconnecting || this.skipReconnect) return this;
        const self = this;
        if (this.backoff.attempts >= this._reconnectionAttempts) {
            this.backoff.reset();
            this.emitReserved("reconnect_failed");
            this._reconnecting = false;
        } else {
            const delay = this.backoff.duration();
            this._reconnecting = true;
            const timer = this.setTimeoutFn(()=>{
                if (self.skipReconnect) return;
                this.emitReserved("reconnect_attempt", self.backoff.attempts);
                // check again for the case socket closed in above events
                if (self.skipReconnect) return;
                self.open((err)=>{
                    if (err) {
                        self._reconnecting = false;
                        self.reconnect();
                        this.emitReserved("reconnect_error", err);
                    } else {
                        self.onreconnect();
                    }
                });
            }, delay);
            if (this.opts.autoUnref) {
                timer.unref();
            }
            this.subs.push(()=>{
                this.clearTimeoutFn(timer);
            });
        }
    }
    /**
     * Called upon successful reconnect.
     *
     * @private
     */ onreconnect() {
        const attempt = this.backoff.attempts;
        this._reconnecting = false;
        this.backoff.reset();
        this.emitReserved("reconnect", attempt);
    }
}
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "connect",
    ()=>lookup,
    "default",
    ()=>lookup,
    "io",
    ()=>lookup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/socket.io-client/build/esm/url.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$manager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/socket.io-client/build/esm/manager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$socket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/socket.io-client/build/esm/socket.js [app-client] (ecmascript)");
/**
 * Protocol version.
 *
 * @public
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$socket$2e$io$2d$parser$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/socket.io-parser/build/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$engine$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/engine.io-client/build/esm/index.js [app-client] (ecmascript) <locals>");
;
;
;
/**
 * Managers cache.
 */ const cache = {};
function lookup(uri, opts) {
    if (typeof uri === "object") {
        opts = uri;
        uri = undefined;
    }
    opts = opts || {};
    const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$url$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["url"])(uri, opts.path || "/socket.io");
    const source = parsed.source;
    const id = parsed.id;
    const path = parsed.path;
    const sameNamespace = cache[id] && path in cache[id]["nsps"];
    const newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
    let io;
    if (newConnection) {
        io = new __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$manager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Manager"](source, opts);
    } else {
        if (!cache[id]) {
            cache[id] = new __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$manager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Manager"](source, opts);
        }
        io = cache[id];
    }
    if (parsed.query && !opts.query) {
        opts.query = parsed.queryKey;
    }
    return io.socket(parsed.path, opts);
}
// so that "lookup" can be used both as a function (e.g. `io(...)`) and as a
// namespace (e.g. `io.connect(...)`), for backward compatibility
Object.assign(lookup, {
    Manager: __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$manager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Manager"],
    Socket: __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$socket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Socket"],
    io: lookup,
    connect: lookup
});
;
;
;
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/utils/socket-utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RoomsSocket",
    ()=>RoomsSocket
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$utils$2f$auth$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/utils/auth-utils.js [app-client] (ecmascript)");
;
;
function initializeSocket(config, handlers) {
    var _a;
    const socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["io"])(config.serverUrl, {
        path: config.mountPath,
        transports: config.transports,
        query: {
            app_id: config.appId,
            token: (_a = config.token) !== null && _a !== void 0 ? _a : (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$utils$2f$auth$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAccessToken"])()
        }
    });
    socket.on("connect", async ()=>{
        var _a;
        console.log("connect", socket.id);
        return (_a = handlers.connect) === null || _a === void 0 ? void 0 : _a.call(handlers);
    });
    socket.on("update_model", async (msg)=>{
        var _a;
        return (_a = handlers.update_model) === null || _a === void 0 ? void 0 : _a.call(handlers, msg);
    });
    socket.on("error", async (error)=>{
        var _a;
        return (_a = handlers.error) === null || _a === void 0 ? void 0 : _a.call(handlers, error);
    });
    socket.on("connect_error", async (error)=>{
        var _a;
        console.error("connect_error", error);
        return (_a = handlers.error) === null || _a === void 0 ? void 0 : _a.call(handlers, error);
    });
    return socket;
}
function RoomsSocket({ config }) {
    let currentConfig = {
        ...config
    };
    const roomsToListeners = {};
    const handlers = {
        connect: async ()=>{
            const promises = [];
            Object.keys(roomsToListeners).forEach((room)=>{
                joinRoom(room);
                const listeners = getListeners(room);
                listeners === null || listeners === void 0 ? void 0 : listeners.forEach(({ connect })=>{
                    const promise = async ()=>connect === null || connect === void 0 ? void 0 : connect();
                    promises.push(promise());
                });
            });
            await Promise.all(promises);
        },
        update_model: async (msg)=>{
            const listeners = getListeners(msg.room);
            const promises = listeners.map((listener)=>{
                var _a;
                return (_a = listener.update_model) === null || _a === void 0 ? void 0 : _a.call(listener, msg);
            });
            await Promise.all(promises);
        },
        error: async (error)=>{
            console.error("error", error);
            const promises = Object.values(roomsToListeners).flat().map((listener)=>{
                var _a;
                return (_a = listener.error) === null || _a === void 0 ? void 0 : _a.call(listener, error);
            });
            await Promise.all(promises);
        }
    };
    let socket = initializeSocket(config, handlers);
    function cleanup() {
        disconnect();
    }
    function disconnect() {
        if (socket) {
            socket.disconnect();
        }
    }
    function updateConfig(config) {
        cleanup();
        currentConfig = {
            ...currentConfig,
            ...config
        };
        socket = initializeSocket(currentConfig, handlers);
    }
    function joinRoom(room) {
        socket.emit("join", room);
    }
    function leaveRoom(room) {
        socket.emit("leave", room);
    }
    async function updateModel(room, data) {
        var _a;
        const dataStr = JSON.stringify(data);
        return (_a = handlers.update_model) === null || _a === void 0 ? void 0 : _a.call(handlers, {
            room,
            data: dataStr
        });
    }
    function getListeners(room) {
        return roomsToListeners[room];
    }
    const subscribeToRoom = (room, handlers)=>{
        if (!roomsToListeners[room]) {
            joinRoom(room);
            roomsToListeners[room] = [];
        }
        roomsToListeners[room].push(handlers);
        return ()=>{
            var _a, _b;
            roomsToListeners[room] = (_b = (_a = roomsToListeners[room]) === null || _a === void 0 ? void 0 : _a.filter((listener)=>listener !== handlers)) !== null && _b !== void 0 ? _b : [];
            if (roomsToListeners[room].length === 0) {
                leaveRoom(room);
            }
        };
    };
    return {
        socket,
        subscribeToRoom,
        updateConfig,
        updateModel,
        disconnect
    };
}
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/utils/sharedInstance.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSharedInstance",
    ()=>getSharedInstance
]);
const windowObj = typeof window !== "undefined" ? window : {
    base44SharedInstances: {}
};
function getSharedInstance(name, factory) {
    if (!windowObj.base44SharedInstances) {
        windowObj.base44SharedInstances = {};
    }
    if (!windowObj.base44SharedInstances[name]) {
        windowObj.base44SharedInstances[name] = {
            instance: factory()
        };
    }
    return windowObj.base44SharedInstances[name].instance;
}
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/modules/analytics.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ANALYTICS_CONFIG_ENABLE_URL_PARAM_KEY",
    ()=>ANALYTICS_CONFIG_ENABLE_URL_PARAM_KEY,
    "ANALYTICS_INITIALIZATION_EVENT_NAME",
    ()=>ANALYTICS_INITIALIZATION_EVENT_NAME,
    "ANALYTICS_SESSION_DURATION_EVENT_NAME",
    ()=>ANALYTICS_SESSION_DURATION_EVENT_NAME,
    "ANALYTICS_SESSION_ID_LOCAL_STORAGE_KEY",
    ()=>ANALYTICS_SESSION_ID_LOCAL_STORAGE_KEY,
    "USER_HEARTBEAT_EVENT_NAME",
    ()=>USER_HEARTBEAT_EVENT_NAME,
    "createAnalyticsModule",
    ()=>createAnalyticsModule,
    "getAnalyticsConfigFromUrlParams",
    ()=>getAnalyticsConfigFromUrlParams,
    "getAnalyticsSessionId",
    ()=>getAnalyticsSessionId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$utils$2f$sharedInstance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/utils/sharedInstance.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$utils$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/utils/common.js [app-client] (ecmascript)");
;
;
const USER_HEARTBEAT_EVENT_NAME = "__user_heartbeat_event__";
const ANALYTICS_INITIALIZATION_EVENT_NAME = "__initialization_event__";
const ANALYTICS_SESSION_DURATION_EVENT_NAME = "__session_duration_event__";
const ANALYTICS_CONFIG_ENABLE_URL_PARAM_KEY = "analytics-enable";
const ANALYTICS_SESSION_ID_LOCAL_STORAGE_KEY = "base44_analytics_session_id";
const defaultConfiguration = {
    // default to enabled //
    enabled: true,
    maxQueueSize: 1000,
    throttleTime: 1000,
    batchSize: 30,
    heartBeatInterval: 60 * 1000
};
///////////////////////////////////////////////
//// shared queue for analytics events     ////
///////////////////////////////////////////////
const ANALYTICS_SHARED_STATE_NAME = "analytics";
// shared state//
const analyticsSharedState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$utils$2f$sharedInstance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSharedInstance"])(ANALYTICS_SHARED_STATE_NAME, ()=>({
        requestsQueue: [],
        isProcessing: false,
        isHeartBeatProcessing: false,
        wasInitializationTracked: false,
        sessionContext: null,
        sessionStartTime: null,
        config: {
            ...defaultConfiguration,
            ...getAnalyticsConfigFromUrlParams()
        }
    }));
const createAnalyticsModule = ({ axiosClient, serverUrl, appId, userAuthModule })=>{
    var _a;
    // prevent overflow of events //
    const { maxQueueSize, throttleTime, batchSize } = analyticsSharedState.config;
    if (!((_a = analyticsSharedState.config) === null || _a === void 0 ? void 0 : _a.enabled)) {
        return {
            track: ()=>{},
            cleanup: ()=>{}
        };
    }
    let clearHeartBeatProcessor = undefined;
    const trackBatchUrl = `${serverUrl}/api/apps/${appId}/analytics/track/batch`;
    const batchRequestFallback = async (events)=>{
        await axiosClient.request({
            method: "POST",
            url: `/apps/${appId}/analytics/track/batch`,
            data: {
                events
            }
        });
    };
    // currently disabled, until fully tested  //
    const beaconRequest = (events)=>{
        try {
            const beaconPayload = JSON.stringify({
                events
            });
            const blob = new Blob([
                beaconPayload
            ], {
                type: "application/json"
            });
            return typeof navigator === "undefined" || beaconPayload.length > 60000 || !navigator.sendBeacon(trackBatchUrl, blob);
        } catch (_a) {
            return false;
        }
    };
    const flush = async (eventsData, options = {})=>{
        if (eventsData.length === 0) return;
        const sessionContext_ = await getSessionContext(userAuthModule);
        const events = eventsData.map(transformEventDataToApiRequestData(sessionContext_));
        try {
            if (!options.isBeacon || !beaconRequest(events)) {
                await batchRequestFallback(events);
            }
        } catch (_a) {
        // do nothing
        }
    };
    const startProcessing = ()=>{
        startAnalyticsProcessor(flush, {
            throttleTime,
            batchSize
        });
    };
    const track = (params)=>{
        if (analyticsSharedState.requestsQueue.length >= maxQueueSize) {
            return;
        }
        const intrinsicData = getEventIntrinsicData();
        analyticsSharedState.requestsQueue.push({
            ...params,
            ...intrinsicData
        });
        startProcessing();
    };
    const onDocVisible = ()=>{
        startAnalyticsProcessor(flush, {
            throttleTime,
            batchSize
        });
        clearHeartBeatProcessor = startHeartBeatProcessor(track);
        setSessionDurationTimerStart();
    };
    const onDocHidden = ()=>{
        stopAnalyticsProcessor();
        clearHeartBeatProcessor === null || clearHeartBeatProcessor === void 0 ? void 0 : clearHeartBeatProcessor();
        trackSessionDurationEvent(track);
        //  flush entire queue on visibility change and hope for the best //
        const eventsData = analyticsSharedState.requestsQueue.splice(0);
        flush(eventsData, {
            isBeacon: true
        });
    };
    const onVisibilityChange = ()=>{
        if (typeof window === "undefined") return;
        if (document.visibilityState === "hidden") {
            onDocHidden();
        } else if (document.visibilityState === "visible") {
            onDocVisible();
        }
    };
    const cleanup = ()=>{
        stopAnalyticsProcessor();
        clearHeartBeatProcessor === null || clearHeartBeatProcessor === void 0 ? void 0 : clearHeartBeatProcessor();
        if (typeof window !== "undefined") {
            window.removeEventListener("visibilitychange", onVisibilityChange);
        }
    };
    // start the flusing process ///
    startProcessing();
    // start the heart beat processor //
    clearHeartBeatProcessor = startHeartBeatProcessor(track);
    // track the referrer event //
    trackInitializationEvent(track);
    // start the visibility change listener //
    if (typeof window !== "undefined") {
        window.addEventListener("visibilitychange", onVisibilityChange);
    }
    return {
        track,
        cleanup
    };
};
function stopAnalyticsProcessor() {
    analyticsSharedState.isProcessing = false;
}
async function startAnalyticsProcessor(handleTrack, options) {
    if (analyticsSharedState.isProcessing) {
        // only one instance of the analytics processor can be running at a time //
        return;
    }
    analyticsSharedState.isProcessing = true;
    const { throttleTime = 1000, batchSize = 30 } = options !== null && options !== void 0 ? options : {};
    while(analyticsSharedState.isProcessing && analyticsSharedState.requestsQueue.length > 0){
        const requests = analyticsSharedState.requestsQueue.splice(0, batchSize);
        requests.length && await handleTrack(requests);
        await new Promise((resolve)=>setTimeout(resolve, throttleTime));
    }
    analyticsSharedState.isProcessing = false;
}
function startHeartBeatProcessor(track) {
    var _a;
    if (analyticsSharedState.isHeartBeatProcessing || ((_a = analyticsSharedState.config.heartBeatInterval) !== null && _a !== void 0 ? _a : 0) < 10) {
        return ()=>{};
    }
    analyticsSharedState.isHeartBeatProcessing = true;
    const interval = setInterval(()=>{
        track({
            eventName: USER_HEARTBEAT_EVENT_NAME
        });
    }, analyticsSharedState.config.heartBeatInterval);
    return ()=>{
        clearInterval(interval);
        analyticsSharedState.isHeartBeatProcessing = false;
    };
}
function trackInitializationEvent(track) {
    if (typeof window === "undefined" || analyticsSharedState.wasInitializationTracked) {
        return;
    }
    analyticsSharedState.wasInitializationTracked = true;
    track({
        eventName: ANALYTICS_INITIALIZATION_EVENT_NAME,
        properties: {
            referrer: document === null || document === void 0 ? void 0 : document.referrer
        }
    });
}
function setSessionDurationTimerStart() {
    if (typeof window === "undefined" || analyticsSharedState.sessionStartTime !== null) {
        return;
    }
    analyticsSharedState.sessionStartTime = new Date().toISOString();
}
function trackSessionDurationEvent(track) {
    if (typeof window === "undefined" || analyticsSharedState.sessionStartTime === null) return;
    const sessionDuration = new Date().getTime() - new Date(analyticsSharedState.sessionStartTime).getTime();
    analyticsSharedState.sessionStartTime = null;
    track({
        eventName: ANALYTICS_SESSION_DURATION_EVENT_NAME,
        properties: {
            sessionDuration
        }
    });
}
function getEventIntrinsicData() {
    return {
        timestamp: new Date().toISOString(),
        pageUrl: typeof window !== "undefined" ? window.location.pathname : null
    };
}
function transformEventDataToApiRequestData(sessionContext) {
    return (eventData)=>({
            event_name: eventData.eventName,
            properties: eventData.properties,
            timestamp: eventData.timestamp,
            page_url: eventData.pageUrl,
            ...sessionContext
        });
}
let sessionContextPromise = null;
async function getSessionContext(userAuthModule) {
    if (!analyticsSharedState.sessionContext) {
        if (!sessionContextPromise) {
            const sessionId = getAnalyticsSessionId();
            sessionContextPromise = userAuthModule.me().then((user)=>({
                    user_id: user.id,
                    session_id: sessionId
                })).catch(()=>({
                    user_id: null,
                    session_id: sessionId
                }));
        }
        analyticsSharedState.sessionContext = await sessionContextPromise;
    }
    return analyticsSharedState.sessionContext;
}
function getAnalyticsConfigFromUrlParams() {
    if (typeof window === "undefined") return undefined;
    const urlParams = new URLSearchParams(window.location.search);
    const analyticsEnable = urlParams.get(ANALYTICS_CONFIG_ENABLE_URL_PARAM_KEY);
    // if the url param is not set, return undefined //
    if (analyticsEnable == null || !analyticsEnable.length) return undefined;
    // remove the url param from the url //
    const newUrlParams = new URLSearchParams(window.location.search);
    newUrlParams.delete(ANALYTICS_CONFIG_ENABLE_URL_PARAM_KEY);
    const newUrl = window.location.pathname + (newUrlParams.toString() ? "?" + newUrlParams.toString() : "");
    window.history.replaceState({}, "", newUrl);
    // return the config object //
    return {
        enabled: analyticsEnable === "true"
    };
}
function getAnalyticsSessionId() {
    if (typeof window === "undefined") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$utils$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateUuid"])();
    }
    try {
        const sessionId = localStorage.getItem(ANALYTICS_SESSION_ID_LOCAL_STORAGE_KEY);
        if (!sessionId) {
            const newSessionId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$utils$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateUuid"])();
            localStorage.setItem(ANALYTICS_SESSION_ID_LOCAL_STORAGE_KEY, newSessionId);
            return newSessionId;
        }
        return sessionId;
    } catch (_a) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$utils$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateUuid"])();
    }
}
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/client.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient,
    "createClientFromRequest",
    ()=>createClientFromRequest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$utils$2f$axios$2d$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/utils/axios-client.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$modules$2f$entities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/modules/entities.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$modules$2f$integrations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/modules/integrations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$modules$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/modules/auth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$modules$2f$sso$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/modules/sso.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$modules$2f$connectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/modules/connectors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$utils$2f$auth$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/utils/auth-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$modules$2f$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/modules/functions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$modules$2f$agents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/modules/agents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$modules$2f$app$2d$logs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/modules/app-logs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$modules$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/modules/users.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$utils$2f$socket$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/utils/socket-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$modules$2f$analytics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/modules/analytics.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
function createClient(config) {
    const { serverUrl = "https://base44.app", appId, token, serviceToken, requiresAuth = false, appBaseUrl, options, functionsVersion, headers: optionalHeaders } = config;
    const socketConfig = {
        serverUrl,
        mountPath: "/ws-user-apps/socket.io/",
        transports: [
            "websocket"
        ],
        appId,
        token
    };
    let socket = null;
    const getSocket = ()=>{
        if (!socket) {
            socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$utils$2f$socket$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomsSocket"])({
                config: socketConfig
            });
        }
        return socket;
    };
    const headers = {
        ...optionalHeaders,
        "X-App-Id": String(appId)
    };
    const functionHeaders = functionsVersion ? {
        ...headers,
        "Base44-Functions-Version": functionsVersion
    } : headers;
    const axiosClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$utils$2f$axios$2d$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAxiosClient"])({
        baseURL: `${serverUrl}/api`,
        headers,
        token,
        onError: options === null || options === void 0 ? void 0 : options.onError
    });
    const functionsAxiosClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$utils$2f$axios$2d$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAxiosClient"])({
        baseURL: `${serverUrl}/api`,
        headers: functionHeaders,
        token,
        interceptResponses: false,
        onError: options === null || options === void 0 ? void 0 : options.onError
    });
    const serviceRoleAxiosClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$utils$2f$axios$2d$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAxiosClient"])({
        baseURL: `${serverUrl}/api`,
        headers,
        token: serviceToken,
        onError: options === null || options === void 0 ? void 0 : options.onError
    });
    const serviceRoleFunctionsAxiosClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$utils$2f$axios$2d$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAxiosClient"])({
        baseURL: `${serverUrl}/api`,
        headers: functionHeaders,
        token: serviceToken,
        interceptResponses: false
    });
    const userAuthModule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$modules$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAuthModule"])(axiosClient, functionsAxiosClient, appId, {
        appBaseUrl,
        serverUrl
    });
    const userModules = {
        entities: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$modules$2f$entities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEntitiesModule"])({
            axios: axiosClient,
            appId,
            getSocket
        }),
        integrations: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$modules$2f$integrations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createIntegrationsModule"])(axiosClient, appId),
        auth: userAuthModule,
        functions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$modules$2f$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFunctionsModule"])(functionsAxiosClient, appId),
        agents: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$modules$2f$agents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAgentsModule"])({
            axios: axiosClient,
            getSocket,
            appId,
            serverUrl,
            token
        }),
        appLogs: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$modules$2f$app$2d$logs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAppLogsModule"])(axiosClient, appId),
        users: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$modules$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createUsersModule"])(axiosClient, appId),
        analytics: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$modules$2f$analytics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAnalyticsModule"])({
            axiosClient,
            serverUrl,
            appId,
            userAuthModule
        }),
        cleanup: ()=>{
            userModules.analytics.cleanup();
            if (socket) {
                socket.disconnect();
            }
        }
    };
    const serviceRoleModules = {
        entities: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$modules$2f$entities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEntitiesModule"])({
            axios: serviceRoleAxiosClient,
            appId,
            getSocket
        }),
        integrations: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$modules$2f$integrations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createIntegrationsModule"])(serviceRoleAxiosClient, appId),
        sso: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$modules$2f$sso$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSsoModule"])(serviceRoleAxiosClient, appId, token),
        connectors: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$modules$2f$connectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createConnectorsModule"])(serviceRoleAxiosClient, appId),
        functions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$modules$2f$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFunctionsModule"])(serviceRoleFunctionsAxiosClient, appId),
        agents: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$modules$2f$agents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAgentsModule"])({
            axios: serviceRoleAxiosClient,
            getSocket,
            appId,
            serverUrl,
            token
        }),
        appLogs: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$modules$2f$app$2d$logs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAppLogsModule"])(serviceRoleAxiosClient, appId),
        cleanup: ()=>{
            if (socket) {
                socket.disconnect();
            }
        }
    };
    // Always try to get token from localStorage or URL parameters
    if (typeof window !== "undefined") {
        // Get token from URL or localStorage
        const accessToken = token || (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$utils$2f$auth$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAccessToken"])();
        if (accessToken) {
            userModules.auth.setToken(accessToken);
        }
    }
    // If authentication is required, verify token and redirect to login if needed
    if (requiresAuth && typeof window !== "undefined") {
        // We perform this check asynchronously to not block client creation
        setTimeout(async ()=>{
            try {
                const isAuthenticated = await userModules.auth.isAuthenticated();
                if (!isAuthenticated) {
                    userModules.auth.redirectToLogin(window.location.href);
                }
            } catch (error) {
                console.error("Authentication check failed:", error);
                userModules.auth.redirectToLogin(window.location.href);
            }
        }, 0);
    }
    // Assemble and return the client
    const client = {
        ...userModules,
        /**
         * Sets a new authentication token for all subsequent requests.
         *
         * @param newToken - The new authentication token
         *
         * @example
         * ```typescript
         * // Update token after login
         * const { access_token } = await base44.auth.loginViaEmailPassword(
         *   'user@example.com',
         *   'password'
         * );
         * base44.setToken(access_token);
         * ```
         */ setToken (newToken) {
            userModules.auth.setToken(newToken);
            if (socket) {
                socket.updateConfig({
                    token: newToken
                });
            }
            socketConfig.token = newToken;
        },
        /**
         * Gets the current client configuration.
         *
         * @internal
         */ getConfig () {
            return {
                serverUrl,
                appId,
                requiresAuth
            };
        },
        /**
         * Provides access to service role modules.
         *
         * Service role authentication provides elevated permissions for server-side operations. Unlike user authentication, which is scoped to a specific user's permissions, service role authentication has access to the data and operations available to the app's admin.
         *
         * @throws {Error} When accessed without providing a serviceToken during client creation.
         *
         * @example
         * ```typescript
         * const base44 = createClient({
         *   appId: 'my-app-id',
         *   serviceToken: 'service-role-token'
         * });
         *
         * // Also access a module with elevated permissions
         * const allUsers = await base44.asServiceRole.entities.User.list();
         * ```
         */ get asServiceRole () {
            if (!serviceToken) {
                throw new Error("Service token is required to use asServiceRole. Please provide a serviceToken when creating the client.");
            }
            return serviceRoleModules;
        }
    };
    return client;
}
function createClientFromRequest(request) {
    const authHeader = request.headers.get("Authorization");
    const serviceRoleAuthHeader = request.headers.get("Base44-Service-Authorization");
    const appId = request.headers.get("Base44-App-Id");
    const serverUrlHeader = request.headers.get("Base44-Api-Url");
    const functionsVersion = request.headers.get("Base44-Functions-Version");
    const stateHeader = request.headers.get("Base44-State");
    if (!appId) {
        throw new Error("Base44-App-Id header is required, but is was not found on the request");
    }
    // Validate authorization header formats
    let serviceRoleToken;
    let userToken;
    if (serviceRoleAuthHeader !== null) {
        if (serviceRoleAuthHeader === "" || !serviceRoleAuthHeader.startsWith("Bearer ") || serviceRoleAuthHeader.split(" ").length !== 2) {
            throw new Error('Invalid authorization header format. Expected "Bearer <token>"');
        }
        serviceRoleToken = serviceRoleAuthHeader.split(" ")[1];
    }
    if (authHeader !== null) {
        if (authHeader === "" || !authHeader.startsWith("Bearer ") || authHeader.split(" ").length !== 2) {
            throw new Error('Invalid authorization header format. Expected "Bearer <token>"');
        }
        userToken = authHeader.split(" ")[1];
    }
    // Prepare additional headers to propagate
    const additionalHeaders = {};
    if (stateHeader) {
        additionalHeaders["Base44-State"] = stateHeader;
    }
    return createClient({
        serverUrl: serverUrlHeader || "https://base44.app",
        appId,
        token: userToken,
        serviceToken: serviceRoleToken,
        functionsVersion: functionsVersion !== null && functionsVersion !== void 0 ? functionsVersion : undefined,
        headers: additionalHeaders
    });
}
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/modules/app.types.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/modules/agents.types.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/modules/connectors.types.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/modules/analytics.types.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/modules/types.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$modules$2f$app$2e$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/modules/app.types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$modules$2f$agents$2e$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/modules/agents.types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$modules$2f$connectors$2e$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/modules/connectors.types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$modules$2f$analytics$2e$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/modules/analytics.types.js [app-client] (ecmascript)");
;
;
;
;
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/types.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$modules$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/modules/types.js [app-client] (ecmascript) <locals>");
;
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/client.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$utils$2f$axios$2d$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/utils/axios-client.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$utils$2f$auth$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/utils/auth-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/types.js [app-client] (ecmascript) <locals>");
;
;
;
;
;
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/embla-carousel-reactive-utils/esm/embla-carousel-reactive-utils.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "areOptionsEqual",
    ()=>areOptionsEqual,
    "arePluginsEqual",
    ()=>arePluginsEqual,
    "canUseDOM",
    ()=>canUseDOM,
    "sortAndMapPluginToOptions",
    ()=>sortAndMapPluginToOptions
]);
function isObject(subject) {
    return Object.prototype.toString.call(subject) === '[object Object]';
}
function isRecord(subject) {
    return isObject(subject) || Array.isArray(subject);
}
function canUseDOM() {
    return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}
function areOptionsEqual(optionsA, optionsB) {
    const optionsAKeys = Object.keys(optionsA);
    const optionsBKeys = Object.keys(optionsB);
    if (optionsAKeys.length !== optionsBKeys.length) return false;
    const breakpointsA = JSON.stringify(Object.keys(optionsA.breakpoints || {}));
    const breakpointsB = JSON.stringify(Object.keys(optionsB.breakpoints || {}));
    if (breakpointsA !== breakpointsB) return false;
    return optionsAKeys.every((key)=>{
        const valueA = optionsA[key];
        const valueB = optionsB[key];
        if (typeof valueA === 'function') return `${valueA}` === `${valueB}`;
        if (!isRecord(valueA) || !isRecord(valueB)) return valueA === valueB;
        return areOptionsEqual(valueA, valueB);
    });
}
function sortAndMapPluginToOptions(plugins) {
    return plugins.concat().sort((a, b)=>a.name > b.name ? 1 : -1).map((plugin)=>plugin.options);
}
function arePluginsEqual(pluginsA, pluginsB) {
    if (pluginsA.length !== pluginsB.length) return false;
    const optionsA = sortAndMapPluginToOptions(pluginsA);
    const optionsB = sortAndMapPluginToOptions(pluginsB);
    return optionsA.every((optionA, index)=>{
        const optionB = optionsB[index];
        return areOptionsEqual(optionA, optionB);
    });
}
;
 //# sourceMappingURL=embla-carousel-reactive-utils.esm.js.map
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/embla-carousel/esm/embla-carousel.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EmblaCarousel
]);
function isNumber(subject) {
    return typeof subject === 'number';
}
function isString(subject) {
    return typeof subject === 'string';
}
function isBoolean(subject) {
    return typeof subject === 'boolean';
}
function isObject(subject) {
    return Object.prototype.toString.call(subject) === '[object Object]';
}
function mathAbs(n) {
    return Math.abs(n);
}
function mathSign(n) {
    return Math.sign(n);
}
function deltaAbs(valueB, valueA) {
    return mathAbs(valueB - valueA);
}
function factorAbs(valueB, valueA) {
    if (valueB === 0 || valueA === 0) return 0;
    if (mathAbs(valueB) <= mathAbs(valueA)) return 0;
    const diff = deltaAbs(mathAbs(valueB), mathAbs(valueA));
    return mathAbs(diff / valueB);
}
function roundToTwoDecimals(num) {
    return Math.round(num * 100) / 100;
}
function arrayKeys(array) {
    return objectKeys(array).map(Number);
}
function arrayLast(array) {
    return array[arrayLastIndex(array)];
}
function arrayLastIndex(array) {
    return Math.max(0, array.length - 1);
}
function arrayIsLastIndex(array, index) {
    return index === arrayLastIndex(array);
}
function arrayFromNumber(n, startAt = 0) {
    return Array.from(Array(n), (_, i)=>startAt + i);
}
function objectKeys(object) {
    return Object.keys(object);
}
function objectsMergeDeep(objectA, objectB) {
    return [
        objectA,
        objectB
    ].reduce((mergedObjects, currentObject)=>{
        objectKeys(currentObject).forEach((key)=>{
            const valueA = mergedObjects[key];
            const valueB = currentObject[key];
            const areObjects = isObject(valueA) && isObject(valueB);
            mergedObjects[key] = areObjects ? objectsMergeDeep(valueA, valueB) : valueB;
        });
        return mergedObjects;
    }, {});
}
function isMouseEvent(evt, ownerWindow) {
    return typeof ownerWindow.MouseEvent !== 'undefined' && evt instanceof ownerWindow.MouseEvent;
}
function Alignment(align, viewSize) {
    const predefined = {
        start,
        center,
        end
    };
    function start() {
        return 0;
    }
    function center(n) {
        return end(n) / 2;
    }
    function end(n) {
        return viewSize - n;
    }
    function measure(n, index) {
        if (isString(align)) return predefined[align](n);
        return align(viewSize, n, index);
    }
    const self = {
        measure
    };
    return self;
}
function EventStore() {
    let listeners = [];
    function add(node, type, handler, options = {
        passive: true
    }) {
        let removeListener;
        if ('addEventListener' in node) {
            node.addEventListener(type, handler, options);
            removeListener = ()=>node.removeEventListener(type, handler, options);
        } else {
            const legacyMediaQueryList = node;
            legacyMediaQueryList.addListener(handler);
            removeListener = ()=>legacyMediaQueryList.removeListener(handler);
        }
        listeners.push(removeListener);
        return self;
    }
    function clear() {
        listeners = listeners.filter((remove)=>remove());
    }
    const self = {
        add,
        clear
    };
    return self;
}
function Animations(ownerDocument, ownerWindow, update, render) {
    const documentVisibleHandler = EventStore();
    const fixedTimeStep = 1000 / 60;
    let lastTimeStamp = null;
    let accumulatedTime = 0;
    let animationId = 0;
    function init() {
        documentVisibleHandler.add(ownerDocument, 'visibilitychange', ()=>{
            if (ownerDocument.hidden) reset();
        });
    }
    function destroy() {
        stop();
        documentVisibleHandler.clear();
    }
    function animate(timeStamp) {
        if (!animationId) return;
        if (!lastTimeStamp) {
            lastTimeStamp = timeStamp;
            update();
            update();
        }
        const timeElapsed = timeStamp - lastTimeStamp;
        lastTimeStamp = timeStamp;
        accumulatedTime += timeElapsed;
        while(accumulatedTime >= fixedTimeStep){
            update();
            accumulatedTime -= fixedTimeStep;
        }
        const alpha = accumulatedTime / fixedTimeStep;
        render(alpha);
        if (animationId) {
            animationId = ownerWindow.requestAnimationFrame(animate);
        }
    }
    function start() {
        if (animationId) return;
        animationId = ownerWindow.requestAnimationFrame(animate);
    }
    function stop() {
        ownerWindow.cancelAnimationFrame(animationId);
        lastTimeStamp = null;
        accumulatedTime = 0;
        animationId = 0;
    }
    function reset() {
        lastTimeStamp = null;
        accumulatedTime = 0;
    }
    const self = {
        init,
        destroy,
        start,
        stop,
        update,
        render
    };
    return self;
}
function Axis(axis, contentDirection) {
    const isRightToLeft = contentDirection === 'rtl';
    const isVertical = axis === 'y';
    const scroll = isVertical ? 'y' : 'x';
    const cross = isVertical ? 'x' : 'y';
    const sign = !isVertical && isRightToLeft ? -1 : 1;
    const startEdge = getStartEdge();
    const endEdge = getEndEdge();
    function measureSize(nodeRect) {
        const { height, width } = nodeRect;
        return isVertical ? height : width;
    }
    function getStartEdge() {
        if (isVertical) return 'top';
        return isRightToLeft ? 'right' : 'left';
    }
    function getEndEdge() {
        if (isVertical) return 'bottom';
        return isRightToLeft ? 'left' : 'right';
    }
    function direction(n) {
        return n * sign;
    }
    const self = {
        scroll,
        cross,
        startEdge,
        endEdge,
        measureSize,
        direction
    };
    return self;
}
function Limit(min = 0, max = 0) {
    const length = mathAbs(min - max);
    function reachedMin(n) {
        return n < min;
    }
    function reachedMax(n) {
        return n > max;
    }
    function reachedAny(n) {
        return reachedMin(n) || reachedMax(n);
    }
    function constrain(n) {
        if (!reachedAny(n)) return n;
        return reachedMin(n) ? min : max;
    }
    function removeOffset(n) {
        if (!length) return n;
        return n - length * Math.ceil((n - max) / length);
    }
    const self = {
        length,
        max,
        min,
        constrain,
        reachedAny,
        reachedMax,
        reachedMin,
        removeOffset
    };
    return self;
}
function Counter(max, start, loop) {
    const { constrain } = Limit(0, max);
    const loopEnd = max + 1;
    let counter = withinLimit(start);
    function withinLimit(n) {
        return !loop ? constrain(n) : mathAbs((loopEnd + n) % loopEnd);
    }
    function get() {
        return counter;
    }
    function set(n) {
        counter = withinLimit(n);
        return self;
    }
    function add(n) {
        return clone().set(get() + n);
    }
    function clone() {
        return Counter(max, get(), loop);
    }
    const self = {
        get,
        set,
        add,
        clone
    };
    return self;
}
function DragHandler(axis, rootNode, ownerDocument, ownerWindow, target, dragTracker, location, animation, scrollTo, scrollBody, scrollTarget, index, eventHandler, percentOfView, dragFree, dragThreshold, skipSnaps, baseFriction, watchDrag) {
    const { cross: crossAxis, direction } = axis;
    const focusNodes = [
        'INPUT',
        'SELECT',
        'TEXTAREA'
    ];
    const nonPassiveEvent = {
        passive: false
    };
    const initEvents = EventStore();
    const dragEvents = EventStore();
    const goToNextThreshold = Limit(50, 225).constrain(percentOfView.measure(20));
    const snapForceBoost = {
        mouse: 300,
        touch: 400
    };
    const freeForceBoost = {
        mouse: 500,
        touch: 600
    };
    const baseSpeed = dragFree ? 43 : 25;
    let isMoving = false;
    let startScroll = 0;
    let startCross = 0;
    let pointerIsDown = false;
    let preventScroll = false;
    let preventClick = false;
    let isMouse = false;
    function init(emblaApi) {
        if (!watchDrag) return;
        function downIfAllowed(evt) {
            if (isBoolean(watchDrag) || watchDrag(emblaApi, evt)) down(evt);
        }
        const node = rootNode;
        initEvents.add(node, 'dragstart', (evt)=>evt.preventDefault(), nonPassiveEvent).add(node, 'touchmove', ()=>undefined, nonPassiveEvent).add(node, 'touchend', ()=>undefined).add(node, 'touchstart', downIfAllowed).add(node, 'mousedown', downIfAllowed).add(node, 'touchcancel', up).add(node, 'contextmenu', up).add(node, 'click', click, true);
    }
    function destroy() {
        initEvents.clear();
        dragEvents.clear();
    }
    function addDragEvents() {
        const node = isMouse ? ownerDocument : rootNode;
        dragEvents.add(node, 'touchmove', move, nonPassiveEvent).add(node, 'touchend', up).add(node, 'mousemove', move, nonPassiveEvent).add(node, 'mouseup', up);
    }
    function isFocusNode(node) {
        const nodeName = node.nodeName || '';
        return focusNodes.includes(nodeName);
    }
    function forceBoost() {
        const boost = dragFree ? freeForceBoost : snapForceBoost;
        const type = isMouse ? 'mouse' : 'touch';
        return boost[type];
    }
    function allowedForce(force, targetChanged) {
        const next = index.add(mathSign(force) * -1);
        const baseForce = scrollTarget.byDistance(force, !dragFree).distance;
        if (dragFree || mathAbs(force) < goToNextThreshold) return baseForce;
        if (skipSnaps && targetChanged) return baseForce * 0.5;
        return scrollTarget.byIndex(next.get(), 0).distance;
    }
    function down(evt) {
        const isMouseEvt = isMouseEvent(evt, ownerWindow);
        isMouse = isMouseEvt;
        preventClick = dragFree && isMouseEvt && !evt.buttons && isMoving;
        isMoving = deltaAbs(target.get(), location.get()) >= 2;
        if (isMouseEvt && evt.button !== 0) return;
        if (isFocusNode(evt.target)) return;
        pointerIsDown = true;
        dragTracker.pointerDown(evt);
        scrollBody.useFriction(0).useDuration(0);
        target.set(location);
        addDragEvents();
        startScroll = dragTracker.readPoint(evt);
        startCross = dragTracker.readPoint(evt, crossAxis);
        eventHandler.emit('pointerDown');
    }
    function move(evt) {
        const isTouchEvt = !isMouseEvent(evt, ownerWindow);
        if (isTouchEvt && evt.touches.length >= 2) return up(evt);
        const lastScroll = dragTracker.readPoint(evt);
        const lastCross = dragTracker.readPoint(evt, crossAxis);
        const diffScroll = deltaAbs(lastScroll, startScroll);
        const diffCross = deltaAbs(lastCross, startCross);
        if (!preventScroll && !isMouse) {
            if (!evt.cancelable) return up(evt);
            preventScroll = diffScroll > diffCross;
            if (!preventScroll) return up(evt);
        }
        const diff = dragTracker.pointerMove(evt);
        if (diffScroll > dragThreshold) preventClick = true;
        scrollBody.useFriction(0.3).useDuration(0.75);
        animation.start();
        target.add(direction(diff));
        evt.preventDefault();
    }
    function up(evt) {
        const currentLocation = scrollTarget.byDistance(0, false);
        const targetChanged = currentLocation.index !== index.get();
        const rawForce = dragTracker.pointerUp(evt) * forceBoost();
        const force = allowedForce(direction(rawForce), targetChanged);
        const forceFactor = factorAbs(rawForce, force);
        const speed = baseSpeed - 10 * forceFactor;
        const friction = baseFriction + forceFactor / 50;
        preventScroll = false;
        pointerIsDown = false;
        dragEvents.clear();
        scrollBody.useDuration(speed).useFriction(friction);
        scrollTo.distance(force, !dragFree);
        isMouse = false;
        eventHandler.emit('pointerUp');
    }
    function click(evt) {
        if (preventClick) {
            evt.stopPropagation();
            evt.preventDefault();
            preventClick = false;
        }
    }
    function pointerDown() {
        return pointerIsDown;
    }
    const self = {
        init,
        destroy,
        pointerDown
    };
    return self;
}
function DragTracker(axis, ownerWindow) {
    const logInterval = 170;
    let startEvent;
    let lastEvent;
    function readTime(evt) {
        return evt.timeStamp;
    }
    function readPoint(evt, evtAxis) {
        const property = evtAxis || axis.scroll;
        const coord = `client${property === 'x' ? 'X' : 'Y'}`;
        return (isMouseEvent(evt, ownerWindow) ? evt : evt.touches[0])[coord];
    }
    function pointerDown(evt) {
        startEvent = evt;
        lastEvent = evt;
        return readPoint(evt);
    }
    function pointerMove(evt) {
        const diff = readPoint(evt) - readPoint(lastEvent);
        const expired = readTime(evt) - readTime(startEvent) > logInterval;
        lastEvent = evt;
        if (expired) startEvent = evt;
        return diff;
    }
    function pointerUp(evt) {
        if (!startEvent || !lastEvent) return 0;
        const diffDrag = readPoint(lastEvent) - readPoint(startEvent);
        const diffTime = readTime(evt) - readTime(startEvent);
        const expired = readTime(evt) - readTime(lastEvent) > logInterval;
        const force = diffDrag / diffTime;
        const isFlick = diffTime && !expired && mathAbs(force) > 0.1;
        return isFlick ? force : 0;
    }
    const self = {
        pointerDown,
        pointerMove,
        pointerUp,
        readPoint
    };
    return self;
}
function NodeRects() {
    function measure(node) {
        const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = node;
        const offset = {
            top: offsetTop,
            right: offsetLeft + offsetWidth,
            bottom: offsetTop + offsetHeight,
            left: offsetLeft,
            width: offsetWidth,
            height: offsetHeight
        };
        return offset;
    }
    const self = {
        measure
    };
    return self;
}
function PercentOfView(viewSize) {
    function measure(n) {
        return viewSize * (n / 100);
    }
    const self = {
        measure
    };
    return self;
}
function ResizeHandler(container, eventHandler, ownerWindow, slides, axis, watchResize, nodeRects) {
    const observeNodes = [
        container
    ].concat(slides);
    let resizeObserver;
    let containerSize;
    let slideSizes = [];
    let destroyed = false;
    function readSize(node) {
        return axis.measureSize(nodeRects.measure(node));
    }
    function init(emblaApi) {
        if (!watchResize) return;
        containerSize = readSize(container);
        slideSizes = slides.map(readSize);
        function defaultCallback(entries) {
            for (const entry of entries){
                if (destroyed) return;
                const isContainer = entry.target === container;
                const slideIndex = slides.indexOf(entry.target);
                const lastSize = isContainer ? containerSize : slideSizes[slideIndex];
                const newSize = readSize(isContainer ? container : slides[slideIndex]);
                const diffSize = mathAbs(newSize - lastSize);
                if (diffSize >= 0.5) {
                    emblaApi.reInit();
                    eventHandler.emit('resize');
                    break;
                }
            }
        }
        resizeObserver = new ResizeObserver((entries)=>{
            if (isBoolean(watchResize) || watchResize(emblaApi, entries)) {
                defaultCallback(entries);
            }
        });
        ownerWindow.requestAnimationFrame(()=>{
            observeNodes.forEach((node)=>resizeObserver.observe(node));
        });
    }
    function destroy() {
        destroyed = true;
        if (resizeObserver) resizeObserver.disconnect();
    }
    const self = {
        init,
        destroy
    };
    return self;
}
function ScrollBody(location, offsetLocation, previousLocation, target, baseDuration, baseFriction) {
    let scrollVelocity = 0;
    let scrollDirection = 0;
    let scrollDuration = baseDuration;
    let scrollFriction = baseFriction;
    let rawLocation = location.get();
    let rawLocationPrevious = 0;
    function seek() {
        const displacement = target.get() - location.get();
        const isInstant = !scrollDuration;
        let scrollDistance = 0;
        if (isInstant) {
            scrollVelocity = 0;
            previousLocation.set(target);
            location.set(target);
            scrollDistance = displacement;
        } else {
            previousLocation.set(location);
            scrollVelocity += displacement / scrollDuration;
            scrollVelocity *= scrollFriction;
            rawLocation += scrollVelocity;
            location.add(scrollVelocity);
            scrollDistance = rawLocation - rawLocationPrevious;
        }
        scrollDirection = mathSign(scrollDistance);
        rawLocationPrevious = rawLocation;
        return self;
    }
    function settled() {
        const diff = target.get() - offsetLocation.get();
        return mathAbs(diff) < 0.001;
    }
    function duration() {
        return scrollDuration;
    }
    function direction() {
        return scrollDirection;
    }
    function velocity() {
        return scrollVelocity;
    }
    function useBaseDuration() {
        return useDuration(baseDuration);
    }
    function useBaseFriction() {
        return useFriction(baseFriction);
    }
    function useDuration(n) {
        scrollDuration = n;
        return self;
    }
    function useFriction(n) {
        scrollFriction = n;
        return self;
    }
    const self = {
        direction,
        duration,
        velocity,
        seek,
        settled,
        useBaseFriction,
        useBaseDuration,
        useFriction,
        useDuration
    };
    return self;
}
function ScrollBounds(limit, location, target, scrollBody, percentOfView) {
    const pullBackThreshold = percentOfView.measure(10);
    const edgeOffsetTolerance = percentOfView.measure(50);
    const frictionLimit = Limit(0.1, 0.99);
    let disabled = false;
    function shouldConstrain() {
        if (disabled) return false;
        if (!limit.reachedAny(target.get())) return false;
        if (!limit.reachedAny(location.get())) return false;
        return true;
    }
    function constrain(pointerDown) {
        if (!shouldConstrain()) return;
        const edge = limit.reachedMin(location.get()) ? 'min' : 'max';
        const diffToEdge = mathAbs(limit[edge] - location.get());
        const diffToTarget = target.get() - location.get();
        const friction = frictionLimit.constrain(diffToEdge / edgeOffsetTolerance);
        target.subtract(diffToTarget * friction);
        if (!pointerDown && mathAbs(diffToTarget) < pullBackThreshold) {
            target.set(limit.constrain(target.get()));
            scrollBody.useDuration(25).useBaseFriction();
        }
    }
    function toggleActive(active) {
        disabled = !active;
    }
    const self = {
        shouldConstrain,
        constrain,
        toggleActive
    };
    return self;
}
function ScrollContain(viewSize, contentSize, snapsAligned, containScroll, pixelTolerance) {
    const scrollBounds = Limit(-contentSize + viewSize, 0);
    const snapsBounded = measureBounded();
    const scrollContainLimit = findScrollContainLimit();
    const snapsContained = measureContained();
    function usePixelTolerance(bound, snap) {
        return deltaAbs(bound, snap) <= 1;
    }
    function findScrollContainLimit() {
        const startSnap = snapsBounded[0];
        const endSnap = arrayLast(snapsBounded);
        const min = snapsBounded.lastIndexOf(startSnap);
        const max = snapsBounded.indexOf(endSnap) + 1;
        return Limit(min, max);
    }
    function measureBounded() {
        return snapsAligned.map((snapAligned, index)=>{
            const { min, max } = scrollBounds;
            const snap = scrollBounds.constrain(snapAligned);
            const isFirst = !index;
            const isLast = arrayIsLastIndex(snapsAligned, index);
            if (isFirst) return max;
            if (isLast) return min;
            if (usePixelTolerance(min, snap)) return min;
            if (usePixelTolerance(max, snap)) return max;
            return snap;
        }).map((scrollBound)=>parseFloat(scrollBound.toFixed(3)));
    }
    function measureContained() {
        if (contentSize <= viewSize + pixelTolerance) return [
            scrollBounds.max
        ];
        if (containScroll === 'keepSnaps') return snapsBounded;
        const { min, max } = scrollContainLimit;
        return snapsBounded.slice(min, max);
    }
    const self = {
        snapsContained,
        scrollContainLimit
    };
    return self;
}
function ScrollLimit(contentSize, scrollSnaps, loop) {
    const max = scrollSnaps[0];
    const min = loop ? max - contentSize : arrayLast(scrollSnaps);
    const limit = Limit(min, max);
    const self = {
        limit
    };
    return self;
}
function ScrollLooper(contentSize, limit, location, vectors) {
    const jointSafety = 0.1;
    const min = limit.min + jointSafety;
    const max = limit.max + jointSafety;
    const { reachedMin, reachedMax } = Limit(min, max);
    function shouldLoop(direction) {
        if (direction === 1) return reachedMax(location.get());
        if (direction === -1) return reachedMin(location.get());
        return false;
    }
    function loop(direction) {
        if (!shouldLoop(direction)) return;
        const loopDistance = contentSize * (direction * -1);
        vectors.forEach((v)=>v.add(loopDistance));
    }
    const self = {
        loop
    };
    return self;
}
function ScrollProgress(limit) {
    const { max, length } = limit;
    function get(n) {
        const currentLocation = n - max;
        return length ? currentLocation / -length : 0;
    }
    const self = {
        get
    };
    return self;
}
function ScrollSnaps(axis, alignment, containerRect, slideRects, slidesToScroll) {
    const { startEdge, endEdge } = axis;
    const { groupSlides } = slidesToScroll;
    const alignments = measureSizes().map(alignment.measure);
    const snaps = measureUnaligned();
    const snapsAligned = measureAligned();
    function measureSizes() {
        return groupSlides(slideRects).map((rects)=>arrayLast(rects)[endEdge] - rects[0][startEdge]).map(mathAbs);
    }
    function measureUnaligned() {
        return slideRects.map((rect)=>containerRect[startEdge] - rect[startEdge]).map((snap)=>-mathAbs(snap));
    }
    function measureAligned() {
        return groupSlides(snaps).map((g)=>g[0]).map((snap, index)=>snap + alignments[index]);
    }
    const self = {
        snaps,
        snapsAligned
    };
    return self;
}
function SlideRegistry(containSnaps, containScroll, scrollSnaps, scrollContainLimit, slidesToScroll, slideIndexes) {
    const { groupSlides } = slidesToScroll;
    const { min, max } = scrollContainLimit;
    const slideRegistry = createSlideRegistry();
    function createSlideRegistry() {
        const groupedSlideIndexes = groupSlides(slideIndexes);
        const doNotContain = !containSnaps || containScroll === 'keepSnaps';
        if (scrollSnaps.length === 1) return [
            slideIndexes
        ];
        if (doNotContain) return groupedSlideIndexes;
        return groupedSlideIndexes.slice(min, max).map((group, index, groups)=>{
            const isFirst = !index;
            const isLast = arrayIsLastIndex(groups, index);
            if (isFirst) {
                const range = arrayLast(groups[0]) + 1;
                return arrayFromNumber(range);
            }
            if (isLast) {
                const range = arrayLastIndex(slideIndexes) - arrayLast(groups)[0] + 1;
                return arrayFromNumber(range, arrayLast(groups)[0]);
            }
            return group;
        });
    }
    const self = {
        slideRegistry
    };
    return self;
}
function ScrollTarget(loop, scrollSnaps, contentSize, limit, targetVector) {
    const { reachedAny, removeOffset, constrain } = limit;
    function minDistance(distances) {
        return distances.concat().sort((a, b)=>mathAbs(a) - mathAbs(b))[0];
    }
    function findTargetSnap(target) {
        const distance = loop ? removeOffset(target) : constrain(target);
        const ascDiffsToSnaps = scrollSnaps.map((snap, index)=>({
                diff: shortcut(snap - distance, 0),
                index
            })).sort((d1, d2)=>mathAbs(d1.diff) - mathAbs(d2.diff));
        const { index } = ascDiffsToSnaps[0];
        return {
            index,
            distance
        };
    }
    function shortcut(target, direction) {
        const targets = [
            target,
            target + contentSize,
            target - contentSize
        ];
        if (!loop) return target;
        if (!direction) return minDistance(targets);
        const matchingTargets = targets.filter((t)=>mathSign(t) === direction);
        if (matchingTargets.length) return minDistance(matchingTargets);
        return arrayLast(targets) - contentSize;
    }
    function byIndex(index, direction) {
        const diffToSnap = scrollSnaps[index] - targetVector.get();
        const distance = shortcut(diffToSnap, direction);
        return {
            index,
            distance
        };
    }
    function byDistance(distance, snap) {
        const target = targetVector.get() + distance;
        const { index, distance: targetSnapDistance } = findTargetSnap(target);
        const reachedBound = !loop && reachedAny(target);
        if (!snap || reachedBound) return {
            index,
            distance
        };
        const diffToSnap = scrollSnaps[index] - targetSnapDistance;
        const snapDistance = distance + shortcut(diffToSnap, 0);
        return {
            index,
            distance: snapDistance
        };
    }
    const self = {
        byDistance,
        byIndex,
        shortcut
    };
    return self;
}
function ScrollTo(animation, indexCurrent, indexPrevious, scrollBody, scrollTarget, targetVector, eventHandler) {
    function scrollTo(target) {
        const distanceDiff = target.distance;
        const indexDiff = target.index !== indexCurrent.get();
        targetVector.add(distanceDiff);
        if (distanceDiff) {
            if (scrollBody.duration()) {
                animation.start();
            } else {
                animation.update();
                animation.render(1);
                animation.update();
            }
        }
        if (indexDiff) {
            indexPrevious.set(indexCurrent.get());
            indexCurrent.set(target.index);
            eventHandler.emit('select');
        }
    }
    function distance(n, snap) {
        const target = scrollTarget.byDistance(n, snap);
        scrollTo(target);
    }
    function index(n, direction) {
        const targetIndex = indexCurrent.clone().set(n);
        const target = scrollTarget.byIndex(targetIndex.get(), direction);
        scrollTo(target);
    }
    const self = {
        distance,
        index
    };
    return self;
}
function SlideFocus(root, slides, slideRegistry, scrollTo, scrollBody, eventStore, eventHandler, watchFocus) {
    const focusListenerOptions = {
        passive: true,
        capture: true
    };
    let lastTabPressTime = 0;
    function init(emblaApi) {
        if (!watchFocus) return;
        function defaultCallback(index) {
            const nowTime = new Date().getTime();
            const diffTime = nowTime - lastTabPressTime;
            if (diffTime > 10) return;
            eventHandler.emit('slideFocusStart');
            root.scrollLeft = 0;
            const group = slideRegistry.findIndex((group)=>group.includes(index));
            if (!isNumber(group)) return;
            scrollBody.useDuration(0);
            scrollTo.index(group, 0);
            eventHandler.emit('slideFocus');
        }
        eventStore.add(document, 'keydown', registerTabPress, false);
        slides.forEach((slide, slideIndex)=>{
            eventStore.add(slide, 'focus', (evt)=>{
                if (isBoolean(watchFocus) || watchFocus(emblaApi, evt)) {
                    defaultCallback(slideIndex);
                }
            }, focusListenerOptions);
        });
    }
    function registerTabPress(event) {
        if (event.code === 'Tab') lastTabPressTime = new Date().getTime();
    }
    const self = {
        init
    };
    return self;
}
function Vector1D(initialValue) {
    let value = initialValue;
    function get() {
        return value;
    }
    function set(n) {
        value = normalizeInput(n);
    }
    function add(n) {
        value += normalizeInput(n);
    }
    function subtract(n) {
        value -= normalizeInput(n);
    }
    function normalizeInput(n) {
        return isNumber(n) ? n : n.get();
    }
    const self = {
        get,
        set,
        add,
        subtract
    };
    return self;
}
function Translate(axis, container) {
    const translate = axis.scroll === 'x' ? x : y;
    const containerStyle = container.style;
    let previousTarget = null;
    let disabled = false;
    function x(n) {
        return `translate3d(${n}px,0px,0px)`;
    }
    function y(n) {
        return `translate3d(0px,${n}px,0px)`;
    }
    function to(target) {
        if (disabled) return;
        const newTarget = roundToTwoDecimals(axis.direction(target));
        if (newTarget === previousTarget) return;
        containerStyle.transform = translate(newTarget);
        previousTarget = newTarget;
    }
    function toggleActive(active) {
        disabled = !active;
    }
    function clear() {
        if (disabled) return;
        containerStyle.transform = '';
        if (!container.getAttribute('style')) container.removeAttribute('style');
    }
    const self = {
        clear,
        to,
        toggleActive
    };
    return self;
}
function SlideLooper(axis, viewSize, contentSize, slideSizes, slideSizesWithGaps, snaps, scrollSnaps, location, slides) {
    const roundingSafety = 0.5;
    const ascItems = arrayKeys(slideSizesWithGaps);
    const descItems = arrayKeys(slideSizesWithGaps).reverse();
    const loopPoints = startPoints().concat(endPoints());
    function removeSlideSizes(indexes, from) {
        return indexes.reduce((a, i)=>{
            return a - slideSizesWithGaps[i];
        }, from);
    }
    function slidesInGap(indexes, gap) {
        return indexes.reduce((a, i)=>{
            const remainingGap = removeSlideSizes(a, gap);
            return remainingGap > 0 ? a.concat([
                i
            ]) : a;
        }, []);
    }
    function findSlideBounds(offset) {
        return snaps.map((snap, index)=>({
                start: snap - slideSizes[index] + roundingSafety + offset,
                end: snap + viewSize - roundingSafety + offset
            }));
    }
    function findLoopPoints(indexes, offset, isEndEdge) {
        const slideBounds = findSlideBounds(offset);
        return indexes.map((index)=>{
            const initial = isEndEdge ? 0 : -contentSize;
            const altered = isEndEdge ? contentSize : 0;
            const boundEdge = isEndEdge ? 'end' : 'start';
            const loopPoint = slideBounds[index][boundEdge];
            return {
                index,
                loopPoint,
                slideLocation: Vector1D(-1),
                translate: Translate(axis, slides[index]),
                target: ()=>location.get() > loopPoint ? initial : altered
            };
        });
    }
    function startPoints() {
        const gap = scrollSnaps[0];
        const indexes = slidesInGap(descItems, gap);
        return findLoopPoints(indexes, contentSize, false);
    }
    function endPoints() {
        const gap = viewSize - scrollSnaps[0] - 1;
        const indexes = slidesInGap(ascItems, gap);
        return findLoopPoints(indexes, -contentSize, true);
    }
    function canLoop() {
        return loopPoints.every(({ index })=>{
            const otherIndexes = ascItems.filter((i)=>i !== index);
            return removeSlideSizes(otherIndexes, viewSize) <= 0.1;
        });
    }
    function loop() {
        loopPoints.forEach((loopPoint)=>{
            const { target, translate, slideLocation } = loopPoint;
            const shiftLocation = target();
            if (shiftLocation === slideLocation.get()) return;
            translate.to(shiftLocation);
            slideLocation.set(shiftLocation);
        });
    }
    function clear() {
        loopPoints.forEach((loopPoint)=>loopPoint.translate.clear());
    }
    const self = {
        canLoop,
        clear,
        loop,
        loopPoints
    };
    return self;
}
function SlidesHandler(container, eventHandler, watchSlides) {
    let mutationObserver;
    let destroyed = false;
    function init(emblaApi) {
        if (!watchSlides) return;
        function defaultCallback(mutations) {
            for (const mutation of mutations){
                if (mutation.type === 'childList') {
                    emblaApi.reInit();
                    eventHandler.emit('slidesChanged');
                    break;
                }
            }
        }
        mutationObserver = new MutationObserver((mutations)=>{
            if (destroyed) return;
            if (isBoolean(watchSlides) || watchSlides(emblaApi, mutations)) {
                defaultCallback(mutations);
            }
        });
        mutationObserver.observe(container, {
            childList: true
        });
    }
    function destroy() {
        if (mutationObserver) mutationObserver.disconnect();
        destroyed = true;
    }
    const self = {
        init,
        destroy
    };
    return self;
}
function SlidesInView(container, slides, eventHandler, threshold) {
    const intersectionEntryMap = {};
    let inViewCache = null;
    let notInViewCache = null;
    let intersectionObserver;
    let destroyed = false;
    function init() {
        intersectionObserver = new IntersectionObserver((entries)=>{
            if (destroyed) return;
            entries.forEach((entry)=>{
                const index = slides.indexOf(entry.target);
                intersectionEntryMap[index] = entry;
            });
            inViewCache = null;
            notInViewCache = null;
            eventHandler.emit('slidesInView');
        }, {
            root: container.parentElement,
            threshold
        });
        slides.forEach((slide)=>intersectionObserver.observe(slide));
    }
    function destroy() {
        if (intersectionObserver) intersectionObserver.disconnect();
        destroyed = true;
    }
    function createInViewList(inView) {
        return objectKeys(intersectionEntryMap).reduce((list, slideIndex)=>{
            const index = parseInt(slideIndex);
            const { isIntersecting } = intersectionEntryMap[index];
            const inViewMatch = inView && isIntersecting;
            const notInViewMatch = !inView && !isIntersecting;
            if (inViewMatch || notInViewMatch) list.push(index);
            return list;
        }, []);
    }
    function get(inView = true) {
        if (inView && inViewCache) return inViewCache;
        if (!inView && notInViewCache) return notInViewCache;
        const slideIndexes = createInViewList(inView);
        if (inView) inViewCache = slideIndexes;
        if (!inView) notInViewCache = slideIndexes;
        return slideIndexes;
    }
    const self = {
        init,
        destroy,
        get
    };
    return self;
}
function SlideSizes(axis, containerRect, slideRects, slides, readEdgeGap, ownerWindow) {
    const { measureSize, startEdge, endEdge } = axis;
    const withEdgeGap = slideRects[0] && readEdgeGap;
    const startGap = measureStartGap();
    const endGap = measureEndGap();
    const slideSizes = slideRects.map(measureSize);
    const slideSizesWithGaps = measureWithGaps();
    function measureStartGap() {
        if (!withEdgeGap) return 0;
        const slideRect = slideRects[0];
        return mathAbs(containerRect[startEdge] - slideRect[startEdge]);
    }
    function measureEndGap() {
        if (!withEdgeGap) return 0;
        const style = ownerWindow.getComputedStyle(arrayLast(slides));
        return parseFloat(style.getPropertyValue(`margin-${endEdge}`));
    }
    function measureWithGaps() {
        return slideRects.map((rect, index, rects)=>{
            const isFirst = !index;
            const isLast = arrayIsLastIndex(rects, index);
            if (isFirst) return slideSizes[index] + startGap;
            if (isLast) return slideSizes[index] + endGap;
            return rects[index + 1][startEdge] - rect[startEdge];
        }).map(mathAbs);
    }
    const self = {
        slideSizes,
        slideSizesWithGaps,
        startGap,
        endGap
    };
    return self;
}
function SlidesToScroll(axis, viewSize, slidesToScroll, loop, containerRect, slideRects, startGap, endGap, pixelTolerance) {
    const { startEdge, endEdge, direction } = axis;
    const groupByNumber = isNumber(slidesToScroll);
    function byNumber(array, groupSize) {
        return arrayKeys(array).filter((i)=>i % groupSize === 0).map((i)=>array.slice(i, i + groupSize));
    }
    function bySize(array) {
        if (!array.length) return [];
        return arrayKeys(array).reduce((groups, rectB, index)=>{
            const rectA = arrayLast(groups) || 0;
            const isFirst = rectA === 0;
            const isLast = rectB === arrayLastIndex(array);
            const edgeA = containerRect[startEdge] - slideRects[rectA][startEdge];
            const edgeB = containerRect[startEdge] - slideRects[rectB][endEdge];
            const gapA = !loop && isFirst ? direction(startGap) : 0;
            const gapB = !loop && isLast ? direction(endGap) : 0;
            const chunkSize = mathAbs(edgeB - gapB - (edgeA + gapA));
            if (index && chunkSize > viewSize + pixelTolerance) groups.push(rectB);
            if (isLast) groups.push(array.length);
            return groups;
        }, []).map((currentSize, index, groups)=>{
            const previousSize = Math.max(groups[index - 1] || 0);
            return array.slice(previousSize, currentSize);
        });
    }
    function groupSlides(array) {
        return groupByNumber ? byNumber(array, slidesToScroll) : bySize(array);
    }
    const self = {
        groupSlides
    };
    return self;
}
function Engine(root, container, slides, ownerDocument, ownerWindow, options, eventHandler) {
    // Options
    const { align, axis: scrollAxis, direction, startIndex, loop, duration, dragFree, dragThreshold, inViewThreshold, slidesToScroll: groupSlides, skipSnaps, containScroll, watchResize, watchSlides, watchDrag, watchFocus } = options;
    // Measurements
    const pixelTolerance = 2;
    const nodeRects = NodeRects();
    const containerRect = nodeRects.measure(container);
    const slideRects = slides.map(nodeRects.measure);
    const axis = Axis(scrollAxis, direction);
    const viewSize = axis.measureSize(containerRect);
    const percentOfView = PercentOfView(viewSize);
    const alignment = Alignment(align, viewSize);
    const containSnaps = !loop && !!containScroll;
    const readEdgeGap = loop || !!containScroll;
    const { slideSizes, slideSizesWithGaps, startGap, endGap } = SlideSizes(axis, containerRect, slideRects, slides, readEdgeGap, ownerWindow);
    const slidesToScroll = SlidesToScroll(axis, viewSize, groupSlides, loop, containerRect, slideRects, startGap, endGap, pixelTolerance);
    const { snaps, snapsAligned } = ScrollSnaps(axis, alignment, containerRect, slideRects, slidesToScroll);
    const contentSize = -arrayLast(snaps) + arrayLast(slideSizesWithGaps);
    const { snapsContained, scrollContainLimit } = ScrollContain(viewSize, contentSize, snapsAligned, containScroll, pixelTolerance);
    const scrollSnaps = containSnaps ? snapsContained : snapsAligned;
    const { limit } = ScrollLimit(contentSize, scrollSnaps, loop);
    // Indexes
    const index = Counter(arrayLastIndex(scrollSnaps), startIndex, loop);
    const indexPrevious = index.clone();
    const slideIndexes = arrayKeys(slides);
    // Animation
    const update = ({ dragHandler, scrollBody, scrollBounds, options: { loop } })=>{
        if (!loop) scrollBounds.constrain(dragHandler.pointerDown());
        scrollBody.seek();
    };
    const render = ({ scrollBody, translate, location, offsetLocation, previousLocation, scrollLooper, slideLooper, dragHandler, animation, eventHandler, scrollBounds, options: { loop } }, alpha)=>{
        const shouldSettle = scrollBody.settled();
        const withinBounds = !scrollBounds.shouldConstrain();
        const hasSettled = loop ? shouldSettle : shouldSettle && withinBounds;
        const hasSettledAndIdle = hasSettled && !dragHandler.pointerDown();
        if (hasSettledAndIdle) animation.stop();
        const interpolatedLocation = location.get() * alpha + previousLocation.get() * (1 - alpha);
        offsetLocation.set(interpolatedLocation);
        if (loop) {
            scrollLooper.loop(scrollBody.direction());
            slideLooper.loop();
        }
        translate.to(offsetLocation.get());
        if (hasSettledAndIdle) eventHandler.emit('settle');
        if (!hasSettled) eventHandler.emit('scroll');
    };
    const animation = Animations(ownerDocument, ownerWindow, ()=>update(engine), (alpha)=>render(engine, alpha));
    // Shared
    const friction = 0.68;
    const startLocation = scrollSnaps[index.get()];
    const location = Vector1D(startLocation);
    const previousLocation = Vector1D(startLocation);
    const offsetLocation = Vector1D(startLocation);
    const target = Vector1D(startLocation);
    const scrollBody = ScrollBody(location, offsetLocation, previousLocation, target, duration, friction);
    const scrollTarget = ScrollTarget(loop, scrollSnaps, contentSize, limit, target);
    const scrollTo = ScrollTo(animation, index, indexPrevious, scrollBody, scrollTarget, target, eventHandler);
    const scrollProgress = ScrollProgress(limit);
    const eventStore = EventStore();
    const slidesInView = SlidesInView(container, slides, eventHandler, inViewThreshold);
    const { slideRegistry } = SlideRegistry(containSnaps, containScroll, scrollSnaps, scrollContainLimit, slidesToScroll, slideIndexes);
    const slideFocus = SlideFocus(root, slides, slideRegistry, scrollTo, scrollBody, eventStore, eventHandler, watchFocus);
    // Engine
    const engine = {
        ownerDocument,
        ownerWindow,
        eventHandler,
        containerRect,
        slideRects,
        animation,
        axis,
        dragHandler: DragHandler(axis, root, ownerDocument, ownerWindow, target, DragTracker(axis, ownerWindow), location, animation, scrollTo, scrollBody, scrollTarget, index, eventHandler, percentOfView, dragFree, dragThreshold, skipSnaps, friction, watchDrag),
        eventStore,
        percentOfView,
        index,
        indexPrevious,
        limit,
        location,
        offsetLocation,
        previousLocation,
        options,
        resizeHandler: ResizeHandler(container, eventHandler, ownerWindow, slides, axis, watchResize, nodeRects),
        scrollBody,
        scrollBounds: ScrollBounds(limit, offsetLocation, target, scrollBody, percentOfView),
        scrollLooper: ScrollLooper(contentSize, limit, offsetLocation, [
            location,
            offsetLocation,
            previousLocation,
            target
        ]),
        scrollProgress,
        scrollSnapList: scrollSnaps.map(scrollProgress.get),
        scrollSnaps,
        scrollTarget,
        scrollTo,
        slideLooper: SlideLooper(axis, viewSize, contentSize, slideSizes, slideSizesWithGaps, snaps, scrollSnaps, offsetLocation, slides),
        slideFocus,
        slidesHandler: SlidesHandler(container, eventHandler, watchSlides),
        slidesInView,
        slideIndexes,
        slideRegistry,
        slidesToScroll,
        target,
        translate: Translate(axis, container)
    };
    return engine;
}
function EventHandler() {
    let listeners = {};
    let api;
    function init(emblaApi) {
        api = emblaApi;
    }
    function getListeners(evt) {
        return listeners[evt] || [];
    }
    function emit(evt) {
        getListeners(evt).forEach((e)=>e(api, evt));
        return self;
    }
    function on(evt, cb) {
        listeners[evt] = getListeners(evt).concat([
            cb
        ]);
        return self;
    }
    function off(evt, cb) {
        listeners[evt] = getListeners(evt).filter((e)=>e !== cb);
        return self;
    }
    function clear() {
        listeners = {};
    }
    const self = {
        init,
        emit,
        off,
        on,
        clear
    };
    return self;
}
const defaultOptions = {
    align: 'center',
    axis: 'x',
    container: null,
    slides: null,
    containScroll: 'trimSnaps',
    direction: 'ltr',
    slidesToScroll: 1,
    inViewThreshold: 0,
    breakpoints: {},
    dragFree: false,
    dragThreshold: 10,
    loop: false,
    skipSnaps: false,
    duration: 25,
    startIndex: 0,
    active: true,
    watchDrag: true,
    watchResize: true,
    watchSlides: true,
    watchFocus: true
};
function OptionsHandler(ownerWindow) {
    function mergeOptions(optionsA, optionsB) {
        return objectsMergeDeep(optionsA, optionsB || {});
    }
    function optionsAtMedia(options) {
        const optionsAtMedia = options.breakpoints || {};
        const matchedMediaOptions = objectKeys(optionsAtMedia).filter((media)=>ownerWindow.matchMedia(media).matches).map((media)=>optionsAtMedia[media]).reduce((a, mediaOption)=>mergeOptions(a, mediaOption), {});
        return mergeOptions(options, matchedMediaOptions);
    }
    function optionsMediaQueries(optionsList) {
        return optionsList.map((options)=>objectKeys(options.breakpoints || {})).reduce((acc, mediaQueries)=>acc.concat(mediaQueries), []).map(ownerWindow.matchMedia);
    }
    const self = {
        mergeOptions,
        optionsAtMedia,
        optionsMediaQueries
    };
    return self;
}
function PluginsHandler(optionsHandler) {
    let activePlugins = [];
    function init(emblaApi, plugins) {
        activePlugins = plugins.filter(({ options })=>optionsHandler.optionsAtMedia(options).active !== false);
        activePlugins.forEach((plugin)=>plugin.init(emblaApi, optionsHandler));
        return plugins.reduce((map, plugin)=>Object.assign(map, {
                [plugin.name]: plugin
            }), {});
    }
    function destroy() {
        activePlugins = activePlugins.filter((plugin)=>plugin.destroy());
    }
    const self = {
        init,
        destroy
    };
    return self;
}
function EmblaCarousel(root, userOptions, userPlugins) {
    const ownerDocument = root.ownerDocument;
    const ownerWindow = ownerDocument.defaultView;
    const optionsHandler = OptionsHandler(ownerWindow);
    const pluginsHandler = PluginsHandler(optionsHandler);
    const mediaHandlers = EventStore();
    const eventHandler = EventHandler();
    const { mergeOptions, optionsAtMedia, optionsMediaQueries } = optionsHandler;
    const { on, off, emit } = eventHandler;
    const reInit = reActivate;
    let destroyed = false;
    let engine;
    let optionsBase = mergeOptions(defaultOptions, EmblaCarousel.globalOptions);
    let options = mergeOptions(optionsBase);
    let pluginList = [];
    let pluginApis;
    let container;
    let slides;
    function storeElements() {
        const { container: userContainer, slides: userSlides } = options;
        const customContainer = isString(userContainer) ? root.querySelector(userContainer) : userContainer;
        container = customContainer || root.children[0];
        const customSlides = isString(userSlides) ? container.querySelectorAll(userSlides) : userSlides;
        slides = [].slice.call(customSlides || container.children);
    }
    function createEngine(options) {
        const engine = Engine(root, container, slides, ownerDocument, ownerWindow, options, eventHandler);
        if (options.loop && !engine.slideLooper.canLoop()) {
            const optionsWithoutLoop = Object.assign({}, options, {
                loop: false
            });
            return createEngine(optionsWithoutLoop);
        }
        return engine;
    }
    function activate(withOptions, withPlugins) {
        if (destroyed) return;
        optionsBase = mergeOptions(optionsBase, withOptions);
        options = optionsAtMedia(optionsBase);
        pluginList = withPlugins || pluginList;
        storeElements();
        engine = createEngine(options);
        optionsMediaQueries([
            optionsBase,
            ...pluginList.map(({ options })=>options)
        ]).forEach((query)=>mediaHandlers.add(query, 'change', reActivate));
        if (!options.active) return;
        engine.translate.to(engine.location.get());
        engine.animation.init();
        engine.slidesInView.init();
        engine.slideFocus.init(self);
        engine.eventHandler.init(self);
        engine.resizeHandler.init(self);
        engine.slidesHandler.init(self);
        if (engine.options.loop) engine.slideLooper.loop();
        if (container.offsetParent && slides.length) engine.dragHandler.init(self);
        pluginApis = pluginsHandler.init(self, pluginList);
    }
    function reActivate(withOptions, withPlugins) {
        const startIndex = selectedScrollSnap();
        deActivate();
        activate(mergeOptions({
            startIndex
        }, withOptions), withPlugins);
        eventHandler.emit('reInit');
    }
    function deActivate() {
        engine.dragHandler.destroy();
        engine.eventStore.clear();
        engine.translate.clear();
        engine.slideLooper.clear();
        engine.resizeHandler.destroy();
        engine.slidesHandler.destroy();
        engine.slidesInView.destroy();
        engine.animation.destroy();
        pluginsHandler.destroy();
        mediaHandlers.clear();
    }
    function destroy() {
        if (destroyed) return;
        destroyed = true;
        mediaHandlers.clear();
        deActivate();
        eventHandler.emit('destroy');
        eventHandler.clear();
    }
    function scrollTo(index, jump, direction) {
        if (!options.active || destroyed) return;
        engine.scrollBody.useBaseFriction().useDuration(jump === true ? 0 : options.duration);
        engine.scrollTo.index(index, direction || 0);
    }
    function scrollNext(jump) {
        const next = engine.index.add(1).get();
        scrollTo(next, jump, -1);
    }
    function scrollPrev(jump) {
        const prev = engine.index.add(-1).get();
        scrollTo(prev, jump, 1);
    }
    function canScrollNext() {
        const next = engine.index.add(1).get();
        return next !== selectedScrollSnap();
    }
    function canScrollPrev() {
        const prev = engine.index.add(-1).get();
        return prev !== selectedScrollSnap();
    }
    function scrollSnapList() {
        return engine.scrollSnapList;
    }
    function scrollProgress() {
        return engine.scrollProgress.get(engine.offsetLocation.get());
    }
    function selectedScrollSnap() {
        return engine.index.get();
    }
    function previousScrollSnap() {
        return engine.indexPrevious.get();
    }
    function slidesInView() {
        return engine.slidesInView.get();
    }
    function slidesNotInView() {
        return engine.slidesInView.get(false);
    }
    function plugins() {
        return pluginApis;
    }
    function internalEngine() {
        return engine;
    }
    function rootNode() {
        return root;
    }
    function containerNode() {
        return container;
    }
    function slideNodes() {
        return slides;
    }
    const self = {
        canScrollNext,
        canScrollPrev,
        containerNode,
        internalEngine,
        destroy,
        off,
        on,
        emit,
        plugins,
        previousScrollSnap,
        reInit,
        rootNode,
        scrollNext,
        scrollPrev,
        scrollProgress,
        scrollSnapList,
        scrollTo,
        selectedScrollSnap,
        slideNodes,
        slidesInView,
        slidesNotInView
    };
    activate(userOptions, userPlugins);
    setTimeout(()=>eventHandler.emit('init'), 0);
    return self;
}
EmblaCarousel.globalOptions = undefined;
;
 //# sourceMappingURL=embla-carousel.esm.js.map
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useEmblaCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/next-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$embla$2d$carousel$2d$reactive$2d$utils$2f$esm$2f$embla$2d$carousel$2d$reactive$2d$utils$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/embla-carousel-reactive-utils/esm/embla-carousel-reactive-utils.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$embla$2d$carousel$2f$esm$2f$embla$2d$carousel$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/embla-carousel/esm/embla-carousel.esm.js [app-client] (ecmascript)");
;
;
;
function useEmblaCarousel(options = {}, plugins = []) {
    const storedOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(options);
    const storedPlugins = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(plugins);
    const [emblaApi, setEmblaApi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [viewport, setViewport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const reInit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useEmblaCarousel.useCallback[reInit]": ()=>{
            if (emblaApi) emblaApi.reInit(storedOptions.current, storedPlugins.current);
        }
    }["useEmblaCarousel.useCallback[reInit]"], [
        emblaApi
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useEmblaCarousel.useEffect": ()=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$embla$2d$carousel$2d$reactive$2d$utils$2f$esm$2f$embla$2d$carousel$2d$reactive$2d$utils$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["areOptionsEqual"])(storedOptions.current, options)) return;
            storedOptions.current = options;
            reInit();
        }
    }["useEmblaCarousel.useEffect"], [
        options,
        reInit
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useEmblaCarousel.useEffect": ()=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$embla$2d$carousel$2d$reactive$2d$utils$2f$esm$2f$embla$2d$carousel$2d$reactive$2d$utils$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arePluginsEqual"])(storedPlugins.current, plugins)) return;
            storedPlugins.current = plugins;
            reInit();
        }
    }["useEmblaCarousel.useEffect"], [
        plugins,
        reInit
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useEmblaCarousel.useEffect": ()=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$embla$2d$carousel$2d$reactive$2d$utils$2f$esm$2f$embla$2d$carousel$2d$reactive$2d$utils$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canUseDOM"])() && viewport) {
                __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$embla$2d$carousel$2f$esm$2f$embla$2d$carousel$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].globalOptions = useEmblaCarousel.globalOptions;
                const newEmblaApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$embla$2d$carousel$2f$esm$2f$embla$2d$carousel$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(viewport, storedOptions.current, storedPlugins.current);
                setEmblaApi(newEmblaApi);
                return ({
                    "useEmblaCarousel.useEffect": ()=>newEmblaApi.destroy()
                })["useEmblaCarousel.useEffect"];
            } else {
                setEmblaApi(undefined);
            }
        }
    }["useEmblaCarousel.useEffect"], [
        viewport,
        setEmblaApi
    ]);
    return [
        setViewport,
        emblaApi
    ];
}
useEmblaCarousel.globalOptions = undefined;
;
 //# sourceMappingURL=embla-carousel-react.esm.js.map
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/embla-carousel-autoplay/esm/embla-carousel-autoplay.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Autoplay
]);
const defaultOptions = {
    active: true,
    breakpoints: {},
    delay: 4000,
    jump: false,
    playOnInit: true,
    stopOnFocusIn: true,
    stopOnInteraction: true,
    stopOnMouseEnter: false,
    stopOnLastSnap: false,
    rootNode: null
};
function normalizeDelay(emblaApi, delay) {
    const scrollSnaps = emblaApi.scrollSnapList();
    if (typeof delay === 'number') {
        return scrollSnaps.map(()=>delay);
    }
    return delay(scrollSnaps, emblaApi);
}
function getAutoplayRootNode(emblaApi, rootNode) {
    const emblaRootNode = emblaApi.rootNode();
    return rootNode && rootNode(emblaRootNode) || emblaRootNode;
}
function Autoplay(userOptions = {}) {
    let options;
    let emblaApi;
    let destroyed;
    let delay;
    let timerStartTime = null;
    let timerId = 0;
    let autoplayActive = false;
    let mouseIsOver = false;
    let playOnDocumentVisible = false;
    let jump = false;
    function init(emblaApiInstance, optionsHandler) {
        emblaApi = emblaApiInstance;
        const { mergeOptions, optionsAtMedia } = optionsHandler;
        const optionsBase = mergeOptions(defaultOptions, Autoplay.globalOptions);
        const allOptions = mergeOptions(optionsBase, userOptions);
        options = optionsAtMedia(allOptions);
        if (emblaApi.scrollSnapList().length <= 1) return;
        jump = options.jump;
        destroyed = false;
        delay = normalizeDelay(emblaApi, options.delay);
        const { eventStore, ownerDocument } = emblaApi.internalEngine();
        const isDraggable = !!emblaApi.internalEngine().options.watchDrag;
        const root = getAutoplayRootNode(emblaApi, options.rootNode);
        eventStore.add(ownerDocument, 'visibilitychange', visibilityChange);
        if (isDraggable) {
            emblaApi.on('pointerDown', pointerDown);
        }
        if (isDraggable && !options.stopOnInteraction) {
            emblaApi.on('pointerUp', pointerUp);
        }
        if (options.stopOnMouseEnter) {
            eventStore.add(root, 'mouseenter', mouseEnter);
        }
        if (options.stopOnMouseEnter && !options.stopOnInteraction) {
            eventStore.add(root, 'mouseleave', mouseLeave);
        }
        if (options.stopOnFocusIn) {
            emblaApi.on('slideFocusStart', stopAutoplay);
        }
        if (options.stopOnFocusIn && !options.stopOnInteraction) {
            eventStore.add(emblaApi.containerNode(), 'focusout', startAutoplay);
        }
        if (options.playOnInit) startAutoplay();
    }
    function destroy() {
        emblaApi.off('pointerDown', pointerDown).off('pointerUp', pointerUp).off('slideFocusStart', stopAutoplay);
        stopAutoplay();
        destroyed = true;
        autoplayActive = false;
    }
    function setTimer() {
        const { ownerWindow } = emblaApi.internalEngine();
        ownerWindow.clearTimeout(timerId);
        timerId = ownerWindow.setTimeout(next, delay[emblaApi.selectedScrollSnap()]);
        timerStartTime = new Date().getTime();
        emblaApi.emit('autoplay:timerset');
    }
    function clearTimer() {
        const { ownerWindow } = emblaApi.internalEngine();
        ownerWindow.clearTimeout(timerId);
        timerId = 0;
        timerStartTime = null;
        emblaApi.emit('autoplay:timerstopped');
    }
    function startAutoplay() {
        if (destroyed) return;
        if (documentIsHidden()) {
            playOnDocumentVisible = true;
            return;
        }
        if (!autoplayActive) emblaApi.emit('autoplay:play');
        setTimer();
        autoplayActive = true;
    }
    function stopAutoplay() {
        if (destroyed) return;
        if (autoplayActive) emblaApi.emit('autoplay:stop');
        clearTimer();
        autoplayActive = false;
    }
    function visibilityChange() {
        if (documentIsHidden()) {
            playOnDocumentVisible = autoplayActive;
            return stopAutoplay();
        }
        if (playOnDocumentVisible) startAutoplay();
    }
    function documentIsHidden() {
        const { ownerDocument } = emblaApi.internalEngine();
        return ownerDocument.visibilityState === 'hidden';
    }
    function pointerDown() {
        if (!mouseIsOver) stopAutoplay();
    }
    function pointerUp() {
        if (!mouseIsOver) startAutoplay();
    }
    function mouseEnter() {
        mouseIsOver = true;
        stopAutoplay();
    }
    function mouseLeave() {
        mouseIsOver = false;
        startAutoplay();
    }
    function play(jumpOverride) {
        if (typeof jumpOverride !== 'undefined') jump = jumpOverride;
        startAutoplay();
    }
    function stop() {
        if (autoplayActive) stopAutoplay();
    }
    function reset() {
        if (autoplayActive) startAutoplay();
    }
    function isPlaying() {
        return autoplayActive;
    }
    function next() {
        const { index } = emblaApi.internalEngine();
        const nextIndex = index.clone().add(1).get();
        const lastIndex = emblaApi.scrollSnapList().length - 1;
        const kill = options.stopOnLastSnap && nextIndex === lastIndex;
        if (emblaApi.canScrollNext()) {
            emblaApi.scrollNext(jump);
        } else {
            emblaApi.scrollTo(0, jump);
        }
        emblaApi.emit('autoplay:select');
        if (kill) return stopAutoplay();
        startAutoplay();
    }
    function timeUntilNext() {
        if (!timerStartTime) return null;
        const currentDelay = delay[emblaApi.selectedScrollSnap()];
        const timePastSinceStart = new Date().getTime() - timerStartTime;
        return currentDelay - timePastSinceStart;
    }
    const self = {
        name: 'autoplay',
        options: userOptions,
        init,
        destroy,
        play,
        stop,
        reset,
        isPlaying,
        timeUntilNext
    };
    return self;
}
Autoplay.globalOptions = undefined;
;
 //# sourceMappingURL=embla-carousel-autoplay.esm.js.map
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/lucide-react/dist/esm/icons/quote.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Quote
]);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
            key: "rib7q0"
        }
    ],
    [
        "path",
        {
            d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
            key: "1ymkrd"
        }
    ]
];
const Quote = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Quote", __iconNode);
;
 //# sourceMappingURL=quote.js.map
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/lucide-react/dist/esm/icons/quote.js [app-client] (ecmascript) <export default as Quote>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Quote",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/lucide-react/dist/esm/icons/quote.js [app-client] (ecmascript)");
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ChevronLeft
]);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m15 18-6-6 6-6",
            key: "1wnfg3"
        }
    ]
];
const ChevronLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("ChevronLeft", __iconNode);
;
 //# sourceMappingURL=chevron-left.js.map
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronLeft",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript)");
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ChevronRight
]);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m9 18 6-6-6-6",
            key: "mthhwq"
        }
    ]
];
const ChevronRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("ChevronRight", __iconNode);
;
 //# sourceMappingURL=chevron-right.js.map
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=shigoto_Conefia_conefia-website_conefia-website_15b9ef42._.js.map