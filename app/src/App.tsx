import Cards from "./components/cards";
import Hero from "./components/hero";
import SearchBar from "./components/search-bar";

export default function App() {
  return (
    <div className="space-y-16">
      <Hero />
      <SearchBar />
      <Cards />
    </div>
  );
}
