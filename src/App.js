import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import FeaturedCourses from "./components/FeaturedCourses/FeaturedCourses";
import NewCourses from "./components/NewCourses/NewCourses";
import Events from "./components/Events/Events";
import Footer from "./components/NavBar/Footer";

// Yeni eklenen bileşenler
import ScrollIndicator from "./components/SideNavBar/ScrollIndicator";
import SocialMediaIcons from "./components/SideNavBar/SocialMediaIcons";
import ImpactSection from "./components/ourTeams/ImpactSection"; // ourTeams klasörüne eklenen bileşen

import "./styles/global.css";

function App() {
    return (
        <ThemeProvider>
            {/* Sayfa Kaydırma Göstergesi */}
            <ScrollIndicator />

            {/* Sayfa İçeriği */}
            <Header />
            <Banner />
            <ImpactSection />
            <FeaturedCourses />
            <NewCourses />
            <Events />
            <Footer />

            {/* Sağ taraftaki sosyal medya ikonları */}
            <SocialMediaIcons />
        </ThemeProvider>
    );
}

export default App;
