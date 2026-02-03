(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/shigoto/Conefia/conefia-website/conefia-website/src/lib/app-params.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "appParams",
    ()=>appParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/next-app/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("shigoto/Conefia/conefia-website/conefia-website/src/lib/app-params.js")}`;
    }
};
const isNode = ("TURBOPACK compile-time value", "object") === 'undefined';
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
const storage = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : window.localStorage;
const toSnakeCase = (str)=>{
    return str.replace(/([A-Z])/g, '_$1').toLowerCase();
};
const getAppParamValue = (paramName, { defaultValue = undefined, removeFromUrl = false } = {})=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const storageKey = `base44_${toSnakeCase(paramName)}`;
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get(paramName);
    if (removeFromUrl) {
        urlParams.delete(paramName);
        const newUrl = `${window.location.pathname}${urlParams.toString() ? `?${urlParams.toString()}` : ""}${window.location.hash}`;
        window.history.replaceState({}, document.title, newUrl);
    }
    if (searchParam) {
        storage.setItem(storageKey, searchParam);
        return searchParam;
    }
    if (defaultValue) {
        storage.setItem(storageKey, defaultValue);
        return defaultValue;
    }
    const storedValue = storage.getItem(storageKey);
    if (storedValue) {
        return storedValue;
    }
    return null;
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
            defaultValue: ("TURBOPACK compile-time truthy", 1) ? window.location.href : "TURBOPACK unreachable"
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
    if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== 'undefined' && __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env && __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env[key]) {
        // @ts-ignore
        return __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env[key];
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/src/api/base44Client.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "base44",
    ()=>base44
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/@base44/sdk/dist/client.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$src$2f$lib$2f$app$2d$params$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/src/lib/app-params.js [app-client] (ecmascript)");
;
;
const { appId, token, functionsVersion, appBaseUrl } = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$src$2f$lib$2f$app$2d$params$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appParams"];
const base44 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f40$base44$2f$sdk$2f$dist$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])({
    appId,
    token,
    functionsVersion,
    serverUrl: '',
    requiresAuth: false,
    appBaseUrl
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/TestimonialSlider.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TestimonialSlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/next-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/next-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$src$2f$api$2f$base44Client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/src/api/base44Client.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$embla$2d$carousel$2d$autoplay$2f$esm$2f$embla$2d$carousel$2d$autoplay$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/embla-carousel-autoplay/esm/embla-carousel-autoplay.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/lucide-react/dist/esm/icons/quote.js [app-client] (ecmascript) <export default as Quote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$src$2f$components$2f$visual$2f$ContourBackground$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/visual/ContourBackground.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function TestimonialSlider({ reduceMotion, testimonials: propTestimonials, title }) {
    _s();
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-50px"
    });
    const [dbTestimonials, setDbTestimonials] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!propTestimonials);
    const testimonials = propTestimonials || dbTestimonials;
    const [emblaRef, emblaApi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        loop: true,
        align: 'center',
        skipSnaps: false
    }, [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$embla$2d$carousel$2d$autoplay$2f$esm$2f$embla$2d$carousel$2d$autoplay$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            delay: 6000,
            stopOnInteraction: true
        })
    ]);
    const [selectedIndex, setSelectedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TestimonialSlider.useEffect": ()=>{
            if (propTestimonials) {
                setLoading(false);
                return;
            }
            // Fetch testimonials if not provided via props
            const fetchTestimonials = {
                "TestimonialSlider.useEffect.fetchTestimonials": async ()=>{
                    try {
                        const data = await __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$src$2f$api$2f$base44Client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["base44"].entities.Testimonial.list('-created_date', 10);
                        setDbTestimonials(data);
                    } catch (error) {
                        console.error("Failed to fetch testimonials:", error);
                    } finally{
                        setLoading(false);
                    }
                }
            }["TestimonialSlider.useEffect.fetchTestimonials"];
            fetchTestimonials();
        }
    }["TestimonialSlider.useEffect"], [
        propTestimonials
    ]);
    const onSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TestimonialSlider.useCallback[onSelect]": ()=>{
            if (!emblaApi) return;
            setSelectedIndex(emblaApi.selectedScrollSnap());
        }
    }["TestimonialSlider.useCallback[onSelect]"], [
        emblaApi
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TestimonialSlider.useEffect": ()=>{
            if (!emblaApi) return;
            onSelect();
            emblaApi.on('select', onSelect);
            return ({
                "TestimonialSlider.useEffect": ()=>{
                    emblaApi.off('select', onSelect);
                }
            })["TestimonialSlider.useEffect"];
        }
    }["TestimonialSlider.useEffect"], [
        emblaApi,
        onSelect
    ]);
    const scrollPrev = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TestimonialSlider.useCallback[scrollPrev]": ()=>emblaApi && emblaApi.scrollPrev()
    }["TestimonialSlider.useCallback[scrollPrev]"], [
        emblaApi
    ]);
    const scrollNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TestimonialSlider.useCallback[scrollNext]": ()=>emblaApi && emblaApi.scrollNext()
    }["TestimonialSlider.useCallback[scrollNext]"], [
        emblaApi
    ]);
    const scrollTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TestimonialSlider.useCallback[scrollTo]": (index)=>emblaApi && emblaApi.scrollTo(index)
    }["TestimonialSlider.useCallback[scrollTo]"], [
        emblaApi
    ]);
    if (!loading && testimonials.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        className: "py-20 md:py-32 relative overflow-hidden bg-[#0B1020]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-b from-[#0B1020] to-[#121829]"
            }, void 0, false, {
                fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/TestimonialSlider.jsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$src$2f$components$2f$visual$2f$ContourBackground$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "opacity-30"
            }, void 0, false, {
                fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/TestimonialSlider.jsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/TestimonialSlider.jsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#DBFE01]/5 rounded-full blur-[100px] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/TestimonialSlider.jsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: isInView ? {
                            opacity: 1,
                            y: 0
                        } : {
                            opacity: 0,
                            y: 20
                        },
                        transition: {
                            duration: reduceMotion ? 0 : 0.6
                        },
                        className: "text-center mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm font-medium mb-6 backdrop-blur-sm",
                                children: "Client Feedback"
                            }, void 0, false, {
                                fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/TestimonialSlider.jsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/TestimonialSlider.jsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight",
                                children: [
                                    "Trusted by founders ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/TestimonialSlider.jsx",
                                        lineNumber: 89,
                                        columnNumber: 35
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#DBFE01]",
                                        children: "worldwide."
                                    }, void 0, false, {
                                        fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/TestimonialSlider.jsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/TestimonialSlider.jsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/TestimonialSlider.jsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative max-w-5xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-hidden cursor-grab active:cursor-grabbing",
                                ref: emblaRef,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex",
                                    children: loading ? // Skeleton loader
                                    [
                                        1,
                                        2,
                                        3
                                    ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-[0_0_100%] md:flex-[0_0_50%] min-w-0 px-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white/5 border border-white/10 rounded-3xl p-8 h-64 animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/TestimonialSlider.jsx",
                                                lineNumber: 102,
                                                columnNumber: 21
                                            }, this)
                                        }, i, false, {
                                            fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/TestimonialSlider.jsx",
                                            lineNumber: 101,
                                            columnNumber: 19
                                        }, this)) : testimonials.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-[0_0_100%] md:flex-[0_0_100%] lg:flex-[0_0_80%] min-w-0 px-4 pl-4 md:pl-10",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                className: "bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 relative group hover:border-white/20 transition-all duration-300",
                                                initial: {
                                                    opacity: 0,
                                                    scale: 0.95
                                                },
                                                animate: isInView ? {
                                                    opacity: 1,
                                                    scale: 1
                                                } : {
                                                    opacity: 0,
                                                    scale: 0.95
                                                },
                                                transition: {
                                                    duration: 0.5,
                                                    delay: index * 0.1
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__["Quote"], {
                                                        className: "absolute top-8 left-8 w-10 h-10 text-[#DBFE01]/20 rotate-180"
                                                    }, void 0, false, {
                                                        fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/TestimonialSlider.jsx",
                                                        lineNumber: 114,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative z-10 flex flex-col items-center text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-1 mb-6",
                                                                children: [
                                                                    ...Array(item.rating || 5)
                                                                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                        className: "w-5 h-5 fill-[#DBFE01] text-[#DBFE01]"
                                                                    }, i, false, {
                                                                        fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/TestimonialSlider.jsx",
                                                                        lineNumber: 119,
                                                                        columnNumber: 29
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/TestimonialSlider.jsx",
                                                                lineNumber: 117,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                                                                className: "text-xl md:text-2xl font-medium text-white/90 leading-relaxed mb-8",
                                                                children: [
                                                                    '"',
                                                                    item.content,
                                                                    '"'
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/TestimonialSlider.jsx",
                                                                lineNumber: 123,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-4",
                                                                children: [
                                                                    item.image_url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        src: item.image_url,
                                                                        alt: item.client_name,
                                                                        loading: "lazy",
                                                                        width: "48",
                                                                        height: "48",
                                                                        className: "w-12 h-12 rounded-full object-cover border-2 border-white/10"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/TestimonialSlider.jsx",
                                                                        lineNumber: 129,
                                                                        columnNumber: 29
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-12 h-12 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-white font-bold text-lg",
                                                                        children: item.client_name.charAt(0)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/TestimonialSlider.jsx",
                                                                        lineNumber: 138,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-left",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "font-bold text-white text-lg",
                                                                                children: item.client_name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/TestimonialSlider.jsx",
                                                                                lineNumber: 143,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-white/40 text-sm",
                                                                                children: [
                                                                                    item.client_role,
                                                                                    item.client_company && ` at ${item.client_company}`
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/TestimonialSlider.jsx",
                                                                                lineNumber: 144,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/TestimonialSlider.jsx",
                                                                        lineNumber: 142,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/TestimonialSlider.jsx",
                                                                lineNumber: 127,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/TestimonialSlider.jsx",
                                                        lineNumber: 116,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/TestimonialSlider.jsx",
                                                lineNumber: 108,
                                                columnNumber: 21
                                            }, this)
                                        }, item.id, false, {
                                            fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/TestimonialSlider.jsx",
                                            lineNumber: 107,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/TestimonialSlider.jsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/TestimonialSlider.jsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            !loading && testimonials.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: scrollPrev,
                                        className: "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 flex items-center justify-center text-white transition-all hidden md:flex",
                                        "aria-label": "Previous testimonial",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                            className: "w-6 h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/TestimonialSlider.jsx",
                                            lineNumber: 165,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/TestimonialSlider.jsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: scrollNext,
                                        className: "absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 flex items-center justify-center text-white transition-all hidden md:flex",
                                        "aria-label": "Next testimonial",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                            className: "w-6 h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/TestimonialSlider.jsx",
                                            lineNumber: 172,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/TestimonialSlider.jsx",
                                        lineNumber: 167,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-center gap-2 mt-8",
                                        children: testimonials.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>scrollTo(index),
                                                className: `h-1.5 rounded-full transition-all duration-300 ${index === selectedIndex ? 'w-8 bg-[#DBFE01]' : 'w-2 bg-white/10 hover:bg-white/20'}`,
                                                "aria-label": `Go to slide ${index + 1}`
                                            }, index, false, {
                                                fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/TestimonialSlider.jsx",
                                                lineNumber: 177,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/TestimonialSlider.jsx",
                                        lineNumber: 175,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/TestimonialSlider.jsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/TestimonialSlider.jsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/TestimonialSlider.jsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_s(TestimonialSlider, "6tfuw+cvAlXCNutLNFmFL8CxDMQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"],
        __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = TestimonialSlider;
var _c;
__turbopack_context__.k.register(_c, "TestimonialSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=shigoto_Conefia_conefia-website_conefia-website_src_ae31d8a7._.js.map