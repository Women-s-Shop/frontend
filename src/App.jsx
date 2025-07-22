import { BrowserRouter as Router } from "react-router-dom";
import { SiteHeader } from "./components/Header";
import { SiteFooter } from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <SiteHeader />
        <main className="flex-1 flex items-center justify-center p-4 md:p-6">
          <h1 className="text-4xl font-bold text-center text-gray-800">Welcome to Classic Threads</h1>
        </main>
        <SiteFooter />
      </div>
    </Router>
  );
}

export default App;
