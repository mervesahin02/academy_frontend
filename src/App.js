import React from "react";
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


function App() {
    return (
        <ThemeProvider>
            <ScrollIndicator />

            <Header />
            <HeaderBar />
            <Banner />
            <Category />

            <NewEducation />
            <PopularEducation />
            <FeaturedEducation />

            <Events />
            <ImpactSection />
            <CareerGuide />

            <NewsSection />

            <Communication />
            <Footer />

            <SupportButton />
        </ThemeProvider>
    );
}

export default App;
