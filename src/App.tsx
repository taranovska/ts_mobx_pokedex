import { QueryClient, QueryClientProvider } from "react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Pokedex from "./Pokedex";
import PokemonDetails from "./Pokedex/PokemonDetails";

const queryCLient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryCLient}>
      <Router>
        <Routes>
          <Route path="/details/:name" element={<PokemonDetails />} />
          <Route path="/" element={<Pokedex />} />
        </Routes>
      </Router>{" "}
    </QueryClientProvider>
  );
};

export default App;
