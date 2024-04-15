import Navbar from "./components/Navbar";
import FrontPage from "./components/FrontPage";
import Content from "./components/Content";
import Carousel from "./components/Carousel";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Trading from "./components/Trading";
import Feature from "./components/Feature";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<> <FrontPage /> <Content/> <Carousel/>  </>} />
          <Route path="/trading" element={<> <Trading /> <Feature/> </>} />
          <Route path="/content" element={<Content />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

