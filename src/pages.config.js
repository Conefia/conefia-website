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
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Home from './pages/Home';
import aiSaasMvpLaunch from './pages/ai-saas-mvp-launch';
import appRelaunchRetention from './pages/app-relaunch-retention';
import clinicGrowthSystem from './pages/clinic-growth-system';
import corporateInnovation from './pages/corporate-innovation';
import shopifyGrowthSystem from './pages/shopify-growth-system';
import startupAcceleratorSupport from './pages/startup-accelerator-support';
import alMahfza from './pages/al-mahfza';
import aviya from './pages/aviya';
import hartalega from './pages/hartalega';
import larovie from './pages/larovie';
import menovia from './pages/menovia';
import vascular from './pages/vascular';
import aviyaDigitalHealthApp from './pages/aviya-digital-health-app';
import larovieBeautyEcommerce from './pages/larovie-beauty-ecommerce';
import __Layout from './Layout.jsx';


export const PAGES = {
    "AdminBlog": AdminBlog,
    "Blog": Blog,
    "BlogPost": BlogPost,
    "Home": Home,
    "ai-saas-mvp-launch": aiSaasMvpLaunch,
    "app-relaunch-retention": appRelaunchRetention,
    "clinic-growth-system": clinicGrowthSystem,
    "corporate-innovation": corporateInnovation,
    "shopify-growth-system": shopifyGrowthSystem,
    "startup-accelerator-support": startupAcceleratorSupport,
    "al-mahfza": alMahfza,
    "aviya": aviya,
    "hartalega": hartalega,
    "larovie": larovie,
    "menovia": menovia,
    "vascular": vascular,
    "aviya-digital-health-app": aviyaDigitalHealthApp,
    "larovie-beauty-ecommerce": larovieBeautyEcommerce,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};