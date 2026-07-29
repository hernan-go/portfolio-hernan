import { Header } from "./components/Header";
import { NotFound } from "./pages/NotFound";
import { Hero } from "./sections/Hero";
import { Work } from "./sections/Work";
import Profile  from "./sections/Profile";
import { Contact } from "./sections/Contact";

function App() {
  const isHomePage =
    window.location.pathname === "/" ||
    window.location.pathname === "/index.html";

  if (!isHomePage) {
    return <NotFound />;
  }
  return (
    <div id="top" className="relative min-h-screen overflow-x-hidden">
      <Header />

      <main>
        <Hero />
        <Work />
        <Profile />
        <Contact />
      </main>
    </div>
  );
}

export default App;
