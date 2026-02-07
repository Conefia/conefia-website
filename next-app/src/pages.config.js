/**
 * pages.config.js - Page routing configuration
 * 
 * Adapted for Next.js migration.
 */
import AdminBlog from '@/components/pages/AdminBlog';
import Blog from '@/components/pages/Blog';
import BlogPost from '@/components/pages/BlogPost';
import Home from '@/components/pages/Home';
import aiSaasMvpLaunch from '@/components/pages/ai-saas-mvp-launch';
import alMahfzaFintechApp from '@/components/pages/al-mahfza-fintech-app';
import appRelaunchRetention from '@/components/pages/app-relaunch-retention';
import aviyaDigitalHealthApp from '@/components/pages/aviya-digital-health-app';
import clinicGrowthSystem from '@/components/pages/clinic-growth-system';
import corporateInnovation from '@/components/pages/corporate-innovation';
import hartalegaAiPlatform from '@/components/pages/hartalega-ai-platform';
import larovieBeautyEcommerce from '@/components/pages/larovie-beauty-ecommerce';
import menoviaAiFemtechApp from '@/components/pages/menovia-ai-femtech-app';
import shopifyGrowthSystem from '@/components/pages/shopify-growth-system';
import startupAcceleratorSupport from '@/components/pages/startup-accelerator-support';
import vascularimClinicGrowth from '@/components/pages/vascularim-clinic-growth';
// Layout is now handled by Next.js app/layout.tsx, but we keep the export for compatibility check if needed
// import __Layout from './Layout.jsx'; 


export const PAGES = {
    "AdminBlog": AdminBlog,
    "Blog": Blog,
    "BlogPost": BlogPost,
    "Home": Home,
    "ai-saas-mvp-launch": aiSaasMvpLaunch,
    "al-mahfza-fintech-app": alMahfzaFintechApp,
    "app-relaunch-retention": appRelaunchRetention,
    "aviya-digital-health-app": aviyaDigitalHealthApp,
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
    // Layout: __Layout,
};
