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
import Home from './pages/Home';
import caseStudyAlMahfza from './pages/case-study-al-mahfza';
import caseStudyAviya from './pages/case-study-aviya';
import caseStudyHartalega from './pages/case-study-hartalega';
import caseStudyLarovie from './pages/case-study-larovie';
import caseStudyMenovia from './pages/case-study-menovia';
import caseStudyVascular from './pages/case-study-vascular';
import solutionsAcceleratorSupport from './pages/solutions-accelerator-support';
import solutionsAiSaasMvpSprint from './pages/solutions-ai-saas-mvp-sprint';
import solutionsAppRelaunch from './pages/solutions-app-relaunch';
import solutionsClinicGrowth from './pages/solutions-clinic-growth';
import solutionsDtcGrowth from './pages/solutions-dtc-growth';
import solutionsEnterpriseInnovation from './pages/solutions-enterprise-innovation';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "case-study-al-mahfza": caseStudyAlMahfza,
    "case-study-aviya": caseStudyAviya,
    "case-study-hartalega": caseStudyHartalega,
    "case-study-larovie": caseStudyLarovie,
    "case-study-menovia": caseStudyMenovia,
    "case-study-vascular": caseStudyVascular,
    "solutions-accelerator-support": solutionsAcceleratorSupport,
    "solutions-ai-saas-mvp-sprint": solutionsAiSaasMvpSprint,
    "solutions-app-relaunch": solutionsAppRelaunch,
    "solutions-clinic-growth": solutionsClinicGrowth,
    "solutions-dtc-growth": solutionsDtcGrowth,
    "solutions-enterprise-innovation": solutionsEnterpriseInnovation,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};