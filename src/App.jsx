import React from 'react'
// import App from './App'
import './App.css';
import Home from './components/001home/home';
import Nav from './components/00 nav/nav'
import About from './components/02 about/about'
import Contact from './components/02.5 contact works/contact'
import Experience from './components/002.6 experience/experience'
import Servises from './components/002.7 services/servises'
import Testimonials from './components/03 testimonials/testimonials'
import Footer from './components/05 footer/footer'
// buttons are => home , about, contact , menu/footer
const App = () => {
    return (
        (
            <>
                <Nav />
                <Home />
                <About />
                <Contact />
                <Experience />
                <Servises />
                <Testimonials />
                <Footer />
            </>
        )
    )
}

export default App