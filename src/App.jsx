import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/global.css";

function HomePage() {
  return (
    <main className="flex-1 flex items-center justify-center p-4 md:p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800">
        Welcome to Women’s Shop
      </h1>
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Келешекте басқа беттер осында қосылады */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
