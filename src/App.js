import { Routes, Route, BrowserRouter } from "react-router"
import Home from "./components/home"
import AboutUs from "./components/aboutUs"
import Services from "./components/services"
import Contact from "./components/contact"
import Gallery from "./components/gallery"
import Footer from "./components/footer"

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/gallery" element={<Gallery />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div >
    )
}

export default App