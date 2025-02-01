import Header from './components/header/Haeder';
import HeroSection from "./components/hero-section/HeroSection";
import Stack from "./components/stack/Stack";
import './App.scss';
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div className="app">
            <Header/>
            <HeroSection/>
            <Stack/>
            <About/>
            <Projects/>
            <Footer/>
        </div>
    );
}

export default App;
