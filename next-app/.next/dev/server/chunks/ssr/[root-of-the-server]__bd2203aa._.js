module.exports = [
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/src/lib/app-params.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "appParams",
    ()=>appParams
]);
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("shigoto/Conefia/conefia-website/conefia-website/src/lib/app-params.js")}`;
    }
};
const isNode = ("TURBOPACK compile-time value", "undefined") === 'undefined';
class MemoryStorage {
    constructor(){
        this.store = new Map();
    }
    getItem(key) {
        return this.store.get(key) || null;
    }
    setItem(key, value) {
        this.store.set(key, String(value));
    }
    removeItem(key) {
        this.store.delete(key);
    }
    clear() {
        this.store.clear();
    }
}
const storage = ("TURBOPACK compile-time truthy", 1) ? new MemoryStorage() : "TURBOPACK unreachable";
const toSnakeCase = (str)=>{
    return str.replace(/([A-Z])/g, '_$1').toLowerCase();
};
const getAppParamValue = (paramName, { defaultValue = undefined, removeFromUrl = false } = {})=>{
    if ("TURBOPACK compile-time truthy", 1) {
        return defaultValue;
    }
    //TURBOPACK unreachable
    ;
    const storageKey = undefined;
    const urlParams = undefined;
    const searchParam = undefined;
    const storedValue = undefined;
};
const getAppParams = ()=>{
    if (getAppParamValue("clear_access_token") === 'true') {
        storage.removeItem('base44_access_token');
        storage.removeItem('token');
    }
    return {
        appId: "693107181477744640",
        // appId: getAppParamValue("app_id", { defaultValue: getEnv("VITE_BASE44_APP_ID") }),
        token: getAppParamValue("access_token", {
            removeFromUrl: true
        }),
        fromUrl: getAppParamValue("from_url", {
            defaultValue: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : undefined
        }),
        functionsVersion: getAppParamValue("functions_version", {
            defaultValue: getEnv("VITE_BASE44_FUNCTIONS_VERSION")
        }),
        appBaseUrl: getAppParamValue("app_base_url", {
            defaultValue: getEnv("VITE_BASE44_APP_BASE_URL")
        })
    };
};
const getEnv = (key)=>{
    // Try process.env first (Next.js/Node)
    // @ts-ignore
    if (typeof process !== 'undefined' && process.env && process.env[key]) {
        // @ts-ignore
        return process.env[key];
    }
    // Try import.meta.env (Vite)
    try {
        // @ts-ignore
        if (("TURBOPACK compile-time value", "object") !== 'undefined' && __TURBOPACK__import$2e$meta__.env && __TURBOPACK__import$2e$meta__.env[key]) {
            // @ts-ignore
            return __TURBOPACK__import$2e$meta__.env[key];
        }
    } catch (e) {
    // Ignore
    }
    return undefined;
};
const appParams = {
    ...getAppParams()
};
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/src/api/base44Client.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "base44",
    ()=>base44
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/client.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$src$2f$lib$2f$app$2d$params$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/src/lib/app-params.js [app-ssr] (ecmascript)");
;
;
const { appId, token, functionsVersion, appBaseUrl } = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$src$2f$lib$2f$app$2d$params$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["appParams"];
const base44 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])({
    appId,
    token,
    functionsVersion,
    serverUrl: '',
    requiresAuth: false,
    appBaseUrl
});
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/src/lib/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "isIframe",
    ()=>isIframe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
const isIframe = window.self !== window.top;
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/ui/input.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/next-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/next-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/src/lib/utils.js [app-ssr] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](/** @param {React.InputHTMLAttributes<HTMLInputElement>} props */ ({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/ui/input.jsx",
        lineNumber: 7,
        columnNumber: 6
    }, ("TURBOPACK compile-time value", void 0));
});
Input.displayName = "Input";
;
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/ui/textarea.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Textarea",
    ()=>Textarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/next-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/next-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/src/lib/utils.js [app-ssr] (ecmascript)");
;
;
;
const Textarea = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](/** @param {React.TextareaHTMLAttributes<HTMLTextAreaElement>} props */ ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/ui/textarea.jsx",
        lineNumber: 7,
        columnNumber: 6
    }, ("TURBOPACK compile-time value", void 0));
});
Textarea.displayName = "Textarea";
;
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/ui/button.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/next-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/next-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/src/lib/utils.js [app-ssr] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "h-9 w-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](/** @param {React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link", size?: "default" | "sm" | "lg" | "icon", asChild?: boolean }} props */ ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/ui/button.jsx",
        lineNumber: 40,
        columnNumber: 6
    }, ("TURBOPACK compile-time value", void 0));
});
Button.displayName = "Button";
;
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ContactSection.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/next-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/next-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$src$2f$api$2f$base44Client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/src/api/base44Client.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/ui/input.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$src$2f$components$2f$ui$2f$textarea$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/ui/textarea.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/ui/button.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$src$2f$components$2f$context$2f$PersonaContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/context/PersonaContext.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
function ContactSection({ reduceMotion }) {
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-50px"
    });
    const { selectedPersona } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$src$2f$components$2f$context$2f$PersonaContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePersona"])();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        project: ''
    });
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$src$2f$api$2f$base44Client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["base44"].integrations.Core.SendEmail({
                to: 'info@conefia.com',
                subject: `New Roadmap Call Request: ${formData.name}`,
                body: `Name: ${formData.name}\nEmail: ${formData.email}\nProject: ${formData.project}`
            });
            setSubmitted(true);
        } catch (error) {
            console.error("Failed to send email:", error);
            // Fallback to showing success anyway for UX, or handle error appropriately
            setSubmitted(true);
        }
    };
    const trustItems = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
            text: 'MVP: 8–12 Weeks'
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
            text: 'Weekly Demos'
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
            text: 'Privacy First'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        id: "contact",
        className: "py-16 md:py-24 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-b from-[#FAFAFA] to-white"
            }, void 0, false, {
                fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ContactSection.jsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-[#DBFE01] opacity-[0.06] blur-[120px]"
            }, void 0, false, {
                fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ContactSection.jsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid lg:grid-cols-2 gap-12 lg:gap-20 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                x: -40
                            },
                            animate: isInView ? {
                                opacity: 1,
                                x: 0
                            } : {
                                opacity: 0,
                                x: -40
                            },
                            transition: {
                                duration: reduceMotion ? 0 : 0.7
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-block px-4 py-1.5 rounded-full bg-[#DBFE01]/20 text-[#2F2F2F] text-sm font-medium mb-4",
                                    children: "Get Started"
                                }, void 0, false, {
                                    fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ContactSection.jsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl md:text-4xl font-bold text-[#2F2F2F] mb-4 leading-tight",
                                    children: [
                                        "Ready to ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "gradient-text",
                                            children: "launch"
                                        }, void 0, false, {
                                            fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ContactSection.jsx",
                                            lineNumber: 62,
                                            columnNumber: 24
                                        }, this),
                                        "?"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ContactSection.jsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg text-[#2F2F2F]/80 mb-8 leading-relaxed font-medium",
                                    children: "Book a roadmap call and let's discuss how we can take your idea from concept to market. No commitment, just a conversation about what's possible."
                                }, void 0, false, {
                                    fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ContactSection.jsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-4 mb-8",
                                    children: trustItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-[#2F2F2F]/5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                    className: "w-5 h-5 text-[#1a1a1a]"
                                                }, void 0, false, {
                                                    fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ContactSection.jsx",
                                                    lineNumber: 76,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-[#2F2F2F]/90 font-semibold",
                                                    children: item.text
                                                }, void 0, false, {
                                                    fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ContactSection.jsx",
                                                    lineNumber: 77,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ContactSection.jsx",
                                            lineNumber: 72,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ContactSection.jsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ContactSection.jsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                x: 40
                            },
                            animate: isInView ? {
                                opacity: 1,
                                x: 0
                            } : {
                                opacity: 0,
                                x: 40
                            },
                            transition: {
                                duration: reduceMotion ? 0 : 0.7,
                                delay: reduceMotion ? 0 : 0.2
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "glass-card rounded-3xl p-8 md:p-10 shadow-2xl shadow-black/5",
                                    children: !submitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleSubmit,
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-[#2F2F2F] mb-2",
                                                        children: "Your name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ContactSection.jsx",
                                                        lineNumber: 95,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                        type: "text",
                                                        placeholder: "John Smith",
                                                        value: formData.name,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                name: e.target.value
                                                            }),
                                                        className: "h-12 rounded-xl border-[#2F2F2F]/10 focus:border-[#DBFE01] focus:ring-[#DBFE01]/20",
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ContactSection.jsx",
                                                        lineNumber: 98,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ContactSection.jsx",
                                                lineNumber: 94,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-[#2F2F2F] mb-2",
                                                        children: "Email address"
                                                    }, void 0, false, {
                                                        fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ContactSection.jsx",
                                                        lineNumber: 109,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                        type: "email",
                                                        placeholder: "john@company.com",
                                                        value: formData.email,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                email: e.target.value
                                                            }),
                                                        className: "h-12 rounded-xl border-[#2F2F2F]/10 focus:border-[#DBFE01] focus:ring-[#DBFE01]/20",
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ContactSection.jsx",
                                                        lineNumber: 112,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ContactSection.jsx",
                                                lineNumber: 108,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-[#2F2F2F] mb-2",
                                                        children: selectedPersona.footerFormPrompt || "What are you building?"
                                                    }, void 0, false, {
                                                        fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ContactSection.jsx",
                                                        lineNumber: 123,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$src$2f$components$2f$ui$2f$textarea$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Textarea"], {
                                                        placeholder: "Tell us about your idea or project...",
                                                        value: formData.project,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                project: e.target.value
                                                            }),
                                                        className: "min-h-[120px] rounded-xl border-[#2F2F2F]/10 focus:border-[#DBFE01] focus:ring-[#DBFE01]/20 resize-none",
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ContactSection.jsx",
                                                        lineNumber: 126,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ContactSection.jsx",
                                                lineNumber: 122,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                type: "submit",
                                                className: "w-full h-14 rounded-xl bg-[#DBFE01] hover:bg-[#c8e600] text-[#2F2F2F] font-semibold text-base transition-all hover:shadow-lg hover:shadow-[#DBFE01]/30",
                                                children: [
                                                    selectedPersona.footerFormButton || "Book roadmap call",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        className: "w-5 h-5 ml-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ContactSection.jsx",
                                                        lineNumber: 140,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ContactSection.jsx",
                                                lineNumber: 135,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-center text-xs text-[#2F2F2F]/40",
                                                children: "No spam, ever. We'll respond within 24 hours."
                                            }, void 0, false, {
                                                fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ContactSection.jsx",
                                                lineNumber: 143,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ContactSection.jsx",
                                        lineNumber: 93,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            scale: 0.9
                                        },
                                        animate: {
                                            opacity: 1,
                                            scale: 1
                                        },
                                        className: "text-center py-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-16 h-16 rounded-full bg-[#DBFE01] flex items-center justify-center mx-auto mb-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                    className: "w-8 h-8 text-[#2F2F2F]"
                                                }, void 0, false, {
                                                    fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ContactSection.jsx",
                                                    lineNumber: 154,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ContactSection.jsx",
                                                lineNumber: 153,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-bold text-[#2F2F2F] mb-2",
                                                children: "You're in!"
                                            }, void 0, false, {
                                                fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ContactSection.jsx",
                                                lineNumber: 156,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[#2F2F2F]/60 mb-6",
                                                children: "We'll reach out within 24 hours to schedule your roadmap call."
                                            }, void 0, false, {
                                                fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ContactSection.jsx",
                                                lineNumber: 157,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ContactSection.jsx",
                                        lineNumber: 148,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ContactSection.jsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center gap-6 mt-6 text-sm text-[#2F2F2F]/50",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "mailto:info@conefia.com",
                                        className: "flex items-center gap-2 hover:text-[#2F2F2F] transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ContactSection.jsx",
                                                lineNumber: 171,
                                                columnNumber: 17
                                            }, this),
                                            "Email us"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ContactSection.jsx",
                                        lineNumber: 167,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ContactSection.jsx",
                                    lineNumber: 166,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ContactSection.jsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ContactSection.jsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ContactSection.jsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ContactSection.jsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__bd2203aa._.js.map