import Home from './pages/Home';
import CaseStudyVascular from './pages/CaseStudyVascular';
import CaseStudyLarovie from './pages/CaseStudyLarovie';
import CaseStudyAlMahfza from './pages/CaseStudyAlMahfza';
import CaseStudyHartalega from './pages/CaseStudyHartalega';
import CaseStudyAviya from './pages/CaseStudyAviya';
import CaseStudyMenovia from './pages/CaseStudyMenovia';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "CaseStudyVascular": CaseStudyVascular,
    "CaseStudyLarovie": CaseStudyLarovie,
    "CaseStudyAlMahfza": CaseStudyAlMahfza,
    "CaseStudyHartalega": CaseStudyHartalega,
    "CaseStudyAviya": CaseStudyAviya,
    "CaseStudyMenovia": CaseStudyMenovia,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};