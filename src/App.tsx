import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/portfolio/Sidebar";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Tech from "./pages/tech";
import Timeline from "./pages/timeline";
import Recognition from "./pages/recognition";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground">
        <div className="md:flex">
          <Sidebar />

          <main className="flex-1 md:ml-72 min-h-screen">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/tech" element={<Tech />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/recognition" element={<Recognition />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}