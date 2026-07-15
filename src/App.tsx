import { Header } from "./components/Header";
import { Hero } from "./sections/Hero";
import { Work } from "./sections/Work";
import { Contact } from "./sections/Contact";

function App() {
  return (
    <div id="top" className="relative min-h-screen overflow-x-hidden">
      <Header />

      <main>
        <Hero />
        <Work />
        <Contact />
      </main>
    </div>
  );
}

export default App;
