import AboutUs from "./components/about";
import Features from "./components/features";
import Hero from "./components/Hero";
import Navigation from "./components/navigation";
import Packages from "./components/packages";
import Services from "./components/services";

import "@splidejs/react-splide/css";
import SliderSection from "./components/slider";

function App() {
    return (
        <>
            <Navigation />
            <Hero />
            <main>
                <Services />
                <Packages />
                <AboutUs />
                <SliderSection />
                <Features />
            </main>
        </>
    );
}

export default App;
