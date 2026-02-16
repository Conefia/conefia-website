/**
 * pages.config.js - Page routing configuration
 * 
 * This file is AUTO-GENERATED. Do not add imports or modify PAGES manually.
 * Pages are auto-registered when you create files in the ./pages/ folder.
 * 
 * THE ONLY EDITABLE VALUE: mainPage
 * This controls which page is the landing page (shown when users visit the app).
 * 
 * Example file structure:
 * 
 *   import HomePage from './pages/HomePage';
 *   import Dashboard from './pages/Dashboard';
 *   import Settings from './pages/Settings';
 *   
 *   export const PAGES = {
 *       "HomePage": HomePage,
 *       "Dashboard": Dashboard,
 *       "Settings": Settings,
 *   }
 *   
 *   export const pagesConfig = {
 *       mainPage: "HomePage",
 *       Pages: PAGES,
 *   };
 * 
 * Example with Layout (wraps all pages):
 *
 *   import Home from './pages/Home';
 *   import Settings from './pages/Settings';
 *   import __Layout from './Layout.jsx';
 *
 *   export const PAGES = {
 *       "Home": Home,
 *       "Settings": Settings,
 *   }
 *
 *   export const pagesConfig = {
 *       mainPage: "Home",
 *       Pages: PAGES,
 *       Layout: __Layout,
 *   };
 *
 * To change the main page from HomePage to Dashboard, use find_replace:
 *   Old: mainPage: "HomePage",
 *   New: mainPage: "Dashboard",
 *
 * The mainPage value must match a key in the PAGES object exactly.
 */
import AdminBlog from './pages/AdminBlog';
import BlogPost from './pages/BlogPost';
import Home from './pages/Home';
import aiSaasMvpLaunch from './pages/ai-saas-mvp-launch';
import alMahfzaFintechApp from './pages/al-mahfza-fintech-app';
import appRelaunchRetention from './pages/app-relaunch-retention';
import aviyaDigitalHealthApp from './pages/aviya-digital-health-app';
import blog from './pages/blog';
import book from './pages/book';
import clinicGrowthSystem from './pages/clinic-growth-system';
import corporateInnovation from './pages/corporate-innovation';
import hartalegaAiPlatform from './pages/hartalega-ai-platform';
import larovieBeautyEcommerce from './pages/larovie-beauty-ecommerce';
import menoviaAiFemtechApp from './pages/menovia-ai-femtech-app';
import shopifyGrowthSystem from './pages/shopify-growth-system';
import startupAcceleratorSupport from './pages/startup-accelerator-support';
import vascularimClinicGrowth from './pages/vascularim-clinic-growth';
import __Layout from './Layout.jsx';


export const PAGES = {
    "AdminBlog": AdminBlog,
    "BlogPost": BlogPost,
    "Home": Home,
    "ai-saas-mvp-launch": aiSaasMvpLaunch,
    "al-mahfza-fintech-app": alMahfzaFintechApp,
    "app-relaunch-retention": appRelaunchRetention,
    "aviya-digital-health-app": aviyaDigitalHealthApp,
    "blog": blog,
    "book": book,
    "clinic-growth-system": clinicGrowthSystem,
    "corporate-innovation": corporateInnovation,
    "hartalega-ai-platform": hartalegaAiPlatform,
    "larovie-beauty-ecommerce": larovieBeautyEcommerce,
    "menovia-ai-femtech-app": menoviaAiFemtechApp,
    "shopify-growth-system": shopifyGrowthSystem,
    "startup-accelerator-support": startupAcceleratorSupport,
    "vascularim-clinic-growth": vascularimClinicGrowth,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};