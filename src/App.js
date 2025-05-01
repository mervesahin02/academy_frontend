import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import ImpactSection from "./components/ourTeams/ImpactSection";
import CareerGuide from "./components/Career/CareerGuide";
import Category from "./components/Category/Category";
import Events from "./components/Events/EventSection";
import NewsSection from "./components/NewsS/NewsSection";
import Communication from "./components/communication/Communication";
import Footer from "./components/NavBar/Footer";
import NewEducation from "./components/NewEducation/NewEducation";
import PopularEducation from './components/PopularEducation/PopularEducation';
import FeaturedEducation from './components/FeaturedEducation/FeaturedEducation';
import HeaderBar from "./components/Header/HeaderBar";

// Yan bileşenler (Side Components)
import ScrollIndicator from "./components/SideNavBar/ScrollIndicator";
import SocialMediaIcons from "./components/SideNavBar/SocialMediaIcons";
import ScrollToTopButton from "./components/SideNavBar/ScrollToTopButton";
import SupportButton from "./components/SideNavBar/SupportButton";

// Global stil
import "./styles/global.css";

// Sayfalar
import AboutPage from "./pages/SubPages/AboutPage/AboutPage";
import NewsPage from "./pages/SubPages/NewsPage/NewsPage";
import EventsPage from "./pages/SubPages/EventsPage/EventsPage";
import SSSPage from "./pages/SubPages/SSSPage/SSSPage";
import ExamplePage from "./pages/SubPages/ExamplePage/ExamplePage";


import TogethernessPage from "./pages/SubPages/TogethernessPage/TogethernessPage";
import UsefulLinksPage from "./pages/SubPages/UsefulLinksPage/UsefulLinksPage";
import SecurityPage from "./pages/SubPages/SecurityPage/SecurityPage";
import CookiePolicyPage from "./pages/SubPages/CookiePolicyPage/CookiePolicyPage";
import CommunicationPage from "./pages/SubPages/CommunicationPage/CommunicationPage";
// 🔁 Alt bileşen: sayfa içeriğini koşullu render eder
function AppContent() {
    const location = useLocation();

    return (
        <>
            <ScrollIndicator />
            <Header />
            <HeaderBar />

            {/* Sayfa yönlendirmeleri */}
            <Routes>
                <Route path="/hakkimizda" element={<AboutPage />} />
                <Route path="/haberler" element={<NewsPage />} />
                <Route path="/etkinlikler" element={<EventsPage />} />
                <Route path="/sss" element={<SSSPage />} />
                <Route path="/gonulluluk" element={<ExamplePage />} />
                <Route path="/is-birliklerimiz" element={<TogethernessPage />} />
                <Route path="/faydali-linkler" element={<UsefulLinksPage />} />
                <Route path="/gizlilik-politikasi" element={<SecurityPage />} />
                <Route path="/cerez-politikasi" element={< CookiePolicyPage />} />
                <Route path="/iletisim" element={< CommunicationPage />} />
            </Routes>

            {/* Sadece anasayfa için bu içerikler */}
            {location.pathname === "/" && (
                <>
                    <Banner />
                    <ImpactSection />
                    <CareerGuide />
                    <Category />
                    <NewEducation />
                    <PopularEducation />
                    <FeaturedEducation />
                    <Events />
                    <NewsSection />

                </>
            )}

            <Footer />
            <SocialMediaIcons />
            <SupportButton />
        </>
    );
}

// 🔁 Ana uygulama: Router ve ThemeProvider sarmalayıcı
function App() {
    return (
        <ThemeProvider>
            <Router>
                <AppContent />
            </Router>
        </ThemeProvider>
    );
}

export default App;
