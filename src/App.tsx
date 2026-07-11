import { Header } from "./components/Header";
import { Hero } from "./sections/Hero";

function App() {
  return (
    <div id="top" className="relative min-h-screen overflow-x-hidden">
      <Header />

      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
