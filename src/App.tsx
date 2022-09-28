import AboutUs from "./components/about";
import Features from "./components/features";
import Hero from "./components/Hero";
import Navbar from "./components/navbar";
import Packages from "./components/packages";
import Services from "./components/services";

// eslint-disable-next-line import/no-unresolved
import "@splidejs/react-splide/css";
import Footer from "./components/Footer";
import SliderSection from "./components/Slider";
import TodoApplication from "./components/todo";

function App() {

    return (
        <>
            <Navbar />
            <Hero />
            <main>
                <Services />
                <Packages />
                <TodoApplication />
                <AboutUs />
                <SliderSection />
                <Features />
            </main>
            <Footer />
        </>
    );
}

export default App;
