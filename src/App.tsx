import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Investments from "./pages/Investments";
import Portfolio from "./pages/Portfolio";
import Settings from "./pages/Settings";
import { GlobalStyle } from "./styles";
import AppLayout from "./Layouts/AppLayout";
import Planning from "./pages/Planning";

function App() {
  return (
    <Router>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Páginas com sidebar */}
        <Route path="/app" element={<AppLayout />}>

          <Route path="dashboard" element={<Dashboard />} />
          <Route path="investments" element={<Investments />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="Planning" element={<Planning />} />
          <Route path="settings" element={<Settings />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
