import { Header } from "./components/Header";
import { Hero } from "./sections/Hero";
import { Work } from "./sections/Work";

function App() {
  return (
    <div id="top" className="relative min-h-screen overflow-x-hidden">
      <Header />

      <main>
        <Hero />
        <Work />
      </main>
    </div>
  );
}

export default App;
