import CaseStudyAlMahfza from './pages/CaseStudyAlMahfza';
import CaseStudyAviya from './pages/CaseStudyAviya';
import CaseStudyHartalega from './pages/CaseStudyHartalega';
import CaseStudyLarovie from './pages/CaseStudyLarovie';
import CaseStudyMenovia from './pages/CaseStudyMenovia';
import CaseStudyVascular from './pages/CaseStudyVascular';
import Home from './pages/Home';
import __Layout from './Layout.jsx';


export const PAGES = {
    "CaseStudyAlMahfza": CaseStudyAlMahfza,
    "CaseStudyAviya": CaseStudyAviya,
    "CaseStudyHartalega": CaseStudyHartalega,
    "CaseStudyLarovie": CaseStudyLarovie,
    "CaseStudyMenovia": CaseStudyMenovia,
    "CaseStudyVascular": CaseStudyVascular,
    "Home": Home,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};