import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import City from "./pages/City";
import OfferDetail from "./pages/OfferDetail";

function App() {
  return (
    <Router>
      <div className="main-wrapper min-h-screen bg-background text-foreground">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/city/:name" element={<City />} />
          <Route path="/offer/:id" element={<OfferDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
