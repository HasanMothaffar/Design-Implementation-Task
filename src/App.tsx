import AboutUs from "./components/about";
import Hero from "./components/Hero";
import Navigation from "./components/navigation";
import Packages from "./components/packages";
import Services from "./components/services";

function App() {
    return (
        <>
            <Navigation />
            <Hero />
            <Services />
            <Packages />
            <AboutUs />
        </>
    );
}

export default App;
