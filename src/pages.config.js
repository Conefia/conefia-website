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
import aviyaDigitalHealthApp from './pages/aviya-digital-health-app';
import larovieBeautyEcommerce from './pages/larovie-beauty-ecommerce';
import alMahfzaFintechApp from './pages/al-mahfza-fintech-app';
import menoviaAiFemtechApp from './pages/menovia-ai-femtech-app';
import hartalegaAiPlatform from './pages/hartalega-ai-platform';
import vascularimClinicGrowth from './pages/vascularim-clinic-growth';
import solutionsClinicGrowthSystem from './pages/solutions-clinic-growth-system';
import solutionsAiSaasMvpLaunch from './pages/solutions-ai-saas-mvp-launch';
import solutionsAppRelaunchRetention from './pages/solutions-app-relaunch-retention';
import solutionsShopifyGrowthSystem from './pages/solutions-shopify-growth-system';
import solutionsCorporateInnovation from './pages/solutions-corporate-innovation';
import solutionsStartupAcceleratorSupport from './pages/solutions-startup-accelerator-support';
import __Layout from './Layout.jsx';


export const PAGES = {
    "AdminBlog": AdminBlog,
    "Blog": Blog,
    "BlogPost": BlogPost,
    "Home": Home,
    "aviya-digital-health-app": aviyaDigitalHealthApp,
    "larovie-beauty-ecommerce": larovieBeautyEcommerce,
    "al-mahfza-fintech-app": alMahfzaFintechApp,
    "menovia-ai-femtech-app": menoviaAiFemtechApp,
    "hartalega-ai-platform": hartalegaAiPlatform,
    "vascularim-clinic-growth": vascularimClinicGrowth,
    "solutions-clinic-growth-system": solutionsClinicGrowthSystem,
    "solutions-ai-saas-mvp-launch": solutionsAiSaasMvpLaunch,
    "solutions-app-relaunch-retention": solutionsAppRelaunchRetention,
    "solutions-shopify-growth-system": solutionsShopifyGrowthSystem,
    "solutions-corporate-innovation": solutionsCorporateInnovation,
    "solutions-startup-accelerator-support": solutionsStartupAcceleratorSupport,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};