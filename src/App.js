import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import FeaturedCourses from "./components/FeaturedCourses/FeaturedCourses";
import NewCourses from "./components/NewCourses/NewCourses"; // Yeni Eklenen Komponent
import Events from "./components/Events/Events"; // Etkinlikler bileşeni
import Footer from "./components/NavBar/Footer";

import "./styles/global.css";

function App() {
    return (
        <ThemeProvider>
            <Header />
            <Banner />
            <FeaturedCourses />
            <NewCourses />
            <Events />
            <Footer />
        </ThemeProvider>
    );
}

export default App;