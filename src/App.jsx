import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/common/WhatsAppButton";
import ScrollToTop from "./components/common/ScrollToTop";
import WeddingStationery from "./components/common/WeddingStationery";
import WeddingItineraryHamper from "./components/common/WeddingItineraryHamper";
import ShagunEnvelopes from "./components/common/ShagunEnvelopes";
// Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Gallery from "./pages/Gallery";
import EInvitations from "./pages/EInvitations";
import Videos from "./pages/Videos";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-luxury-ivory">
        <ScrollToTop />
        <Navbar />
        <AnimatePresence mode="wait">
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route
                path="/weddingstationary"
                element={<WeddingStationery />}
              />
              <Route path="wedhamper" element={<WeddingItineraryHamper />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/e-invitations" element={<EInvitations />} />
              <Route path="/envelopes" element={<ShagunEnvelopes />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/about" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </AnimatePresence>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
