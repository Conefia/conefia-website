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
 *   import Home from '@/components/client/pages/Home';
 *   import Settings from './pages/Settings';
 *   import __Layout from '@/components/client/Layout';
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
// import AdminBlog from '@/components/client/pages/AdminBlog';
import BlogPost from '@/components/client/pages/BlogPost';
import Home from '@/components/client/pages/Home';
// import aiSaasMvpLaunch from '@/components/server/pages/ai-saas-mvp-launch';
// import alMahfzaFintechApp from '@/components/client/pages/al-mahfza-fintech-app';
import appRelaunchRetention from '@/components/server/pages/app-relaunch-retention';
// import aviyaDigitalHealthApp from '@/components/client/pages/aviya-digital-health-app';
import blog from '@/components/client/pages/blog';
import book from '@/components/client/pages/book';
import clinicGrowthSystem from '@/components/server/pages/clinic-growth-system';
import corporateInnovation from '@/components/server/pages/corporate-innovation';
import hartalegaAiPlatform from '@/components/client/pages/hartalega-ai-platform';
import larovieBeautyEcommerce from '@/components/client/pages/larovie-beauty-ecommerce';
import menoviaAiFemtechApp from '@/components/client/pages/menovia-ai-femtech-app';
import shopifyGrowthSystem from '@/components/server/pages/shopify-growth-system';
import startupAcceleratorSupport from '@/components/server/pages/startup-accelerator-support';
import vascularimClinicGrowth from '@/components/client/pages/vascularim-clinic-growth';
// import About from '@/components/client/pages/About';
import __Layout from '@/components/client/Layout';


export const PAGES = {
    // "AdminBlog": AdminBlog, // Migrated to Server Component
    "BlogPost": BlogPost,
    "Home": Home,
    // "ai-saas-mvp-launch": aiSaasMvpLaunch, // Migrated to Server Component
    // "al-mahfza-fintech-app": alMahfzaFintechApp, // Migrated to Server Component
    "app-relaunch-retention": appRelaunchRetention,
    // "aviya-digital-health-app": aviyaDigitalHealthApp, // Migrated to Server Component
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
    // "About": About, // Migrated to Server Component
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};