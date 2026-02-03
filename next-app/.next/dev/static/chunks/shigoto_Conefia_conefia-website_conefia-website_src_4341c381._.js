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
"[project]/shigoto/Conefia/conefia-website/conefia-website/src/utils/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createPageUrl",
    ()=>createPageUrl
]);
function createPageUrl(pageName) {
    return '/' + pageName.replace(/ /g, '-');
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ProblemSolution.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProblemSolution
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/next-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/next-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/node_modules/lucide-react/dist/esm/icons/circle-help.js [app-client] (ecmascript) <export default as HelpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$src$2f$api$2f$base44Client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/src/api/base44Client.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/next-app/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/src/utils/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$src$2f$components$2f$data$2f$personas$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/data/personas.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$src$2f$components$2f$context$2f$PersonaContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/context/PersonaContext.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
const SOLUTION_STYLES = [
    {
        gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
        iconBg: 'from-violet-400 to-purple-500',
        glow: 'shadow-violet-500/50'
    },
    {
        gradient: 'from-blue-500 via-cyan-500 to-teal-500',
        iconBg: 'from-blue-400 to-cyan-500',
        glow: 'shadow-cyan-500/50'
    },
    {
        gradient: 'from-emerald-500 via-green-500 to-lime-500',
        iconBg: 'from-emerald-400 to-green-500',
        glow: 'shadow-emerald-500/50'
    },
    {
        gradient: 'from-orange-500 via-amber-500 to-yellow-400',
        iconBg: 'from-orange-400 to-yellow-500',
        glow: 'shadow-amber-500/50'
    }
];
function ProblemSolution({ reduceMotion }) {
    _s();
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-50px"
    });
    const { selectedPersona, selectedPersonaId, setSelectedPersonaId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$src$2f$components$2f$context$2f$PersonaContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePersona"])();
    __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "ProblemSolution.useEffect": ()=>{
            const hash = window.location.hash;
            if (hash && hash.startsWith('#track=')) {
                const trackId = hash.replace('#track=', '');
                const personaExists = __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$src$2f$components$2f$data$2f$personas$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PERSONAS"].find({
                    "ProblemSolution.useEffect.personaExists": (p)=>p.id === trackId
                }["ProblemSolution.useEffect.personaExists"]);
                if (personaExists) {
                    setSelectedPersonaId(trackId);
                }
            }
        }
    }["ProblemSolution.useEffect"], [
        setSelectedPersonaId
    ]);
    const handlePersonaClick = (e, id)=>{
        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
        e.preventDefault();
        setSelectedPersonaId(id);
        window.history.replaceState(null, null, `#track=${id}`);
        __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$src$2f$api$2f$base44Client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["base44"].analytics.track({
            eventName: "persona_select",
            properties: {
                persona: id
            }
        });
    };
    const handleCtaClick = (ctaType)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$src$2f$api$2f$base44Client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["base44"].analytics.track({
            eventName: "cta_click",
            properties: {
                persona: selectedPersona.id,
                cta_type: ctaType,
                destination: selectedPersona.destination
            }
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "track-selector",
        ref: ref,
        className: "py-16 md:py-24 relative overflow-hidden bg-[#F4F4F5]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white to-transparent opacity-50"
            }, void 0, false, {
                fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ProblemSolution.jsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        animate: isInView ? {
                            opacity: 1,
                            y: 0
                        } : {
                            opacity: 0,
                            y: 30
                        },
                        transition: {
                            duration: reduceMotion ? 0 : 0.7
                        },
                        className: "text-center mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-[#1a1a1a]/8 text-[#1a1a1a]/70 mb-6 px-4 py-2 text-sm font-semibold rounded-full inline-block uppercase tracking-wider",
                                children: "Choose your track"
                            }, void 0, false, {
                                fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ProblemSolution.jsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl md:text-5xl font-extrabold text-[#1a1a1a] mb-6 leading-tight",
                                children: "What are you building right now?"
                            }, void 0, false, {
                                fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ProblemSolution.jsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg md:text-xl text-[#1a1a1a]/80 font-medium max-w-3xl mx-auto",
                                children: "Pick your track and we’ll show the biggest bottleneck we typically see — plus the plan to fix it."
                            }, void 0, false, {
                                fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ProblemSolution.jsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ProblemSolution.jsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
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
                            duration: 0.5,
                            delay: 0.2
                        },
                        className: "flex flex-wrap justify-center gap-2 mb-16",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$src$2f$components$2f$data$2f$personas$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PERSONAS"].map((persona)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPageUrl"])(persona.destination),
                                onClick: (e)=>handlePersonaClick(e, persona.id),
                                className: `px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 border inline-block cursor-pointer no-underline ${selectedPersonaId === persona.id ? 'bg-[#1a1a1a] text-white border-[#1a1a1a] shadow-lg scale-105' : 'bg-white text-[#1a1a1a]/70 border-gray-200 hover:border-[#1a1a1a]/30 hover:bg-gray-50'}`,
                                children: persona.label
                            }, persona.id, false, {
                                fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ProblemSolution.jsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ProblemSolution.jsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        mode: "wait",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                y: -20
                            },
                            transition: {
                                duration: 0.3
                            },
                            className: "grid lg:grid-cols-2 gap-8 lg:gap-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-3xl p-8 md:p-10 h-full border border-red-100 shadow-xl shadow-red-900/5 relative overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent opacity-30"
                                            }, void 0, false, {
                                                fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ProblemSolution.jsx",
                                                lineNumber: 114,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 text-sm font-bold mb-6 border border-red-100 shadow-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ProblemSolution.jsx",
                                                                lineNumber: 118,
                                                                columnNumber: 21
                                                            }, this),
                                                            "The Problem"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ProblemSolution.jsx",
                                                        lineNumber: 117,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-6 leading-tight",
                                                        children: selectedPersona.problemTitle
                                                    }, void 0, false, {
                                                        fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ProblemSolution.jsx",
                                                        lineNumber: 121,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "space-y-5",
                                                        children: selectedPersona.problems.map((problem, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].li, {
                                                                initial: {
                                                                    opacity: 0,
                                                                    x: -20
                                                                },
                                                                animate: {
                                                                    opacity: 1,
                                                                    x: 0
                                                                },
                                                                transition: {
                                                                    delay: 0.1 + index * 0.05
                                                                },
                                                                className: "flex items-start gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-6 h-6 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0 mt-1",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                            className: "w-4 h-4 text-red-600"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ProblemSolution.jsx",
                                                                            lineNumber: 134,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ProblemSolution.jsx",
                                                                        lineNumber: 133,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[#1a1a1a] font-semibold leading-relaxed",
                                                                        children: problem
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ProblemSolution.jsx",
                                                                        lineNumber: 136,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, index, true, {
                                                                fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ProblemSolution.jsx",
                                                                lineNumber: 126,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ProblemSolution.jsx",
                                                        lineNumber: 124,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ProblemSolution.jsx",
                                                lineNumber: 116,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ProblemSolution.jsx",
                                        lineNumber: 113,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ProblemSolution.jsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 opacity-15 blur-3xl bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#DBFE01] via-emerald-400 to-cyan-400"
                                        }, void 0, false, {
                                            fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ProblemSolution.jsx",
                                            lineNumber: 147,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative bg-white rounded-3xl p-8 md:p-10 h-full border border-[#DBFE01] shadow-2xl shadow-[#DBFE01]/10 overflow-hidden ring-1 ring-[#DBFE01]/20",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-4 right-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                        className: "w-6 h-6 text-[#DBFE01]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ProblemSolution.jsx",
                                                        lineNumber: 152,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ProblemSolution.jsx",
                                                    lineNumber: 151,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#DBFE01]/20 text-[#1a1a1a] text-sm font-bold mb-6 border border-[#DBFE01]/30 shadow-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ProblemSolution.jsx",
                                                            lineNumber: 156,
                                                            columnNumber: 19
                                                        }, this),
                                                        "The Solution"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ProblemSolution.jsx",
                                                    lineNumber: 155,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-6 leading-tight",
                                                    children: selectedPersona.solutionTitle
                                                }, void 0, false, {
                                                    fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ProblemSolution.jsx",
                                                    lineNumber: 159,
                                                    columnNumber: 17
                                                }, this),
                                                selectedPersona.solutionSubtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[#1a1a1a]/80 font-medium mb-8 -mt-4 text-lg border-l-4 border-[#DBFE01] pl-4 italic",
                                                    children: [
                                                        '"',
                                                        selectedPersona.solutionSubtitle,
                                                        '"'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ProblemSolution.jsx",
                                                    lineNumber: 164,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-4",
                                                    children: selectedPersona.solutions.map((solution, index)=>{
                                                        const styleData = SOLUTION_STYLES[index % SOLUTION_STYLES.length];
                                                        const Icon = solution.icon || __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"];
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                            initial: {
                                                                opacity: 0,
                                                                scale: 0.9
                                                            },
                                                            animate: {
                                                                opacity: 1,
                                                                scale: 1
                                                            },
                                                            transition: {
                                                                delay: 0.2 + index * 0.05
                                                            },
                                                            className: "group relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `absolute inset-0 bg-gradient-to-br ${styleData.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ProblemSolution.jsx",
                                                                    lineNumber: 181,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 group-hover:border-gray-200 group-hover:shadow-lg transition-all duration-300 h-full",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: `w-10 h-10 rounded-lg bg-gradient-to-br ${styleData.iconBg} flex items-center justify-center mb-3 shadow-md ${styleData.glow}`,
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                                                className: "w-5 h-5 text-white"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ProblemSolution.jsx",
                                                                                lineNumber: 185,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ProblemSolution.jsx",
                                                                            lineNumber: 184,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "font-bold text-[#1a1a1a] text-sm mb-1 leading-tight",
                                                                            children: solution.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ProblemSolution.jsx",
                                                                            lineNumber: 188,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-[#1a1a1a]/70 font-medium leading-snug",
                                                                            children: solution.desc
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ProblemSolution.jsx",
                                                                            lineNumber: 191,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ProblemSolution.jsx",
                                                                    lineNumber: 183,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, index, true, {
                                                            fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ProblemSolution.jsx",
                                                            lineNumber: 174,
                                                            columnNumber: 23
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ProblemSolution.jsx",
                                                    lineNumber: 169,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-10 flex flex-col sm:flex-row gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPageUrl"])(selectedPersona.destination),
                                                            onClick: ()=>handleCtaClick('primary'),
                                                            className: "btn-primary px-8 py-4 rounded-full text-sm font-bold flex items-center justify-center gap-2 text-center shadow-lg shadow-[#DBFE01]/20",
                                                            children: [
                                                                selectedPersona.primaryCta,
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ProblemSolution.jsx",
                                                                    lineNumber: 206,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ProblemSolution.jsx",
                                                            lineNumber: 200,
                                                            columnNumber: 19
                                                        }, this),
                                                        selectedPersona.secondaryCta && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPageUrl"])(selectedPersona.destination),
                                                            onClick: ()=>handleCtaClick('secondary'),
                                                            className: "px-8 py-4 rounded-full text-sm font-bold flex items-center justify-center gap-2 text-center border border-gray-200 bg-white text-[#1a1a1a] hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 shadow-sm hover:shadow-md",
                                                            children: selectedPersona.secondaryCta
                                                        }, void 0, false, {
                                                            fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ProblemSolution.jsx",
                                                            lineNumber: 209,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ProblemSolution.jsx",
                                                    lineNumber: 199,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ProblemSolution.jsx",
                                            lineNumber: 149,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ProblemSolution.jsx",
                                    lineNumber: 145,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, selectedPersona.id, true, {
                            fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ProblemSolution.jsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ProblemSolution.jsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ProblemSolution.jsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/shigoto/Conefia/conefia-website/conefia-website/src/components/landing/ProblemSolution.jsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_s(ProblemSolution, "GG1ro9FGXQ//JRkBjNZKhtu9KHk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"],
        __TURBOPACK__imported__module__$5b$project$5d2f$shigoto$2f$Conefia$2f$conefia$2d$website$2f$conefia$2d$website$2f$src$2f$components$2f$context$2f$PersonaContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePersona"]
    ];
});
_c = ProblemSolution;
var _c;
__turbopack_context__.k.register(_c, "ProblemSolution");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=shigoto_Conefia_conefia-website_conefia-website_src_4341c381._.js.map