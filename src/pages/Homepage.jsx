import React from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills"
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Homepage() {
    return (
        <React.Fragment>
        <header className="header-container">
            <Navbar />
            <Home />
        </header>
        <main className="main-container">
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
        </main>
        <footer className="footer-container">
            <Footer />
        </footer>
    </React.Fragment>
    )
}

export default Homepage;