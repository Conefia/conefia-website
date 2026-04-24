/**
 * pages.config.js - Page routing configuration
 *
 * All pages use React.lazy() for automatic code-splitting.
 * Vite will emit each page as a separate chunk loaded only when visited.
 * The <Suspense> boundary in App.jsx handles the loading state.
 */
import { lazy } from 'react';
import __Layout from './Layout.jsx';

const About                    = lazy(() => import('./pages/About'));
const AdminBlog                = lazy(() => import('./pages/AdminBlog'));
const BlogPost                 = lazy(() => import('./pages/BlogPost'));
const Home                     = lazy(() => import('./pages/Home'));
const alMahfzaFintechApp       = lazy(() => import('./pages/al-mahfza-fintech-app'));
const appRelaunchRetention     = lazy(() => import('./pages/app-relaunch-retention'));
const aviyaDigitalHealthApp    = lazy(() => import('./pages/aviya-digital-health-app'));
const blog                     = lazy(() => import('./pages/blog'));
const book                     = lazy(() => import('./pages/book'));
const clinicGrowthSystem       = lazy(() => import('./pages/clinic-growth-system'));
const corporateInnovation      = lazy(() => import('./pages/corporate-innovation'));
const hartalegaAiPlatform      = lazy(() => import('./pages/hartalega-ai-platform'));
const larovieBeautyEcommerce   = lazy(() => import('./pages/larovie-beauty-ecommerce'));
const menoviaAiFemtechApp      = lazy(() => import('./pages/menovia-ai-femtech-app'));
const shopifyGrowthSystem      = lazy(() => import('./pages/shopify-growth-system'));
const startupAcceleratorSupport = lazy(() => import('./pages/startup-accelerator-support'));
const vascularimClinicGrowth   = lazy(() => import('./pages/vascularim-clinic-growth'));
const aiSaasMvpLaunch          = lazy(() => import('./pages/ai-saas-mvp-launch'));
const Privacy                  = lazy(() => import('./pages/Privacy'));
const Terms                    = lazy(() => import('./pages/Terms'));
const Cookies                  = lazy(() => import('./pages/Cookies'));
const IPPolicy                 = lazy(() => import('./pages/IPPolicy'));
const CopyrightPolicy          = lazy(() => import('./pages/CopyrightPolicy'));
const Legal                    = lazy(() => import('./pages/Legal'));
const AcceptableUsePolicy      = lazy(() => import('./pages/AcceptableUsePolicy'));
const AiNotice                 = lazy(() => import('./pages/AiNotice'));
const MarketingDisclosure      = lazy(() => import('./pages/MarketingDisclosure'));
const SubmissionConfidentiality = lazy(() => import('./pages/SubmissionConfidentiality'));

export const PAGES = {
    "About":                        About,
    "AdminBlog":                    AdminBlog,
    "BlogPost":                     BlogPost,
    "Home":                         Home,
    "al-mahfza-fintech-app":        alMahfzaFintechApp,
    "app-relaunch-retention":       appRelaunchRetention,
    "aviya-digital-health-app":     aviyaDigitalHealthApp,
    "blog":                         blog,
    "book":                         book,
    "clinic-growth-system":         clinicGrowthSystem,
    "corporate-innovation":         corporateInnovation,
    "hartalega-ai-platform":        hartalegaAiPlatform,
    "larovie-beauty-ecommerce":     larovieBeautyEcommerce,
    "menovia-ai-femtech-app":       menoviaAiFemtechApp,
    "shopify-growth-system":        shopifyGrowthSystem,
    "startup-accelerator-support":  startupAcceleratorSupport,
    "vascularim-clinic-growth":     vascularimClinicGrowth,
    "ai-saas-mvp-launch":           aiSaasMvpLaunch,
    "privacy":                      Privacy,
    "terms":                        Terms,
    "cookies":                      Cookies,
    "ip-policy":                    IPPolicy,
    "copyright-policy":             CopyrightPolicy,
    "legal":                        Legal,
    "acceptable-use":               AcceptableUsePolicy,
    "ai-notice":                    AiNotice,
    "marketing-disclosure":         MarketingDisclosure,
    "submission-confidentiality":   SubmissionConfidentiality,
};

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};