import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import PromoSection from "./components/PromoSection";
import Results from "./components/Results";
import Services from "./components/Services";
import Testimonials from "./components/Testimonals";
import Our from "./components/Our";

function App() {
  return (
    <>
      <NavBar />
      <PromoSection />
      <Results />
      <About />
      <Services />
      <Our />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
