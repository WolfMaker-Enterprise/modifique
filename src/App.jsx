import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import PromoSection from "./components/PromoSection";
import Results from "./components/Results";
import Services from "./components/Services";
import Testimonials from "./components/Testimonals";


function App() {
  
  return (
    <div>

      <NavBar />
      <PromoSection />
      <Results />
      <About />
      <Services />
      <Testimonials />  
      <ContactForm />
      <Footer />
    </div>

  );
}

export default App;