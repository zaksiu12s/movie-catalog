import Header from "./components/Head/Header";
import Footer from "./components/Head/Footer";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import MovieDetails from "./components/pages/MovieDetails";
import SearchPage from "./components/pages/SearchPage";

function App() {
  return (
    <div className="min-h-[100svh] flex flex-col justify-between bg-gray-800">
      <Header />
      <BrowserRouter>
        <main className="p-6 text-center w-full">
          <Routes>
            <Route path="/movie-catalog" element={<Home />} />
            <Route path="/movie-catalog/about" element={<About />} />
            <Route path="/movie-catalog/movie-details/:id" element={<MovieDetails />} />
            <Route path="/movie-catalog/search-page" element={<SearchPage />} />
          </Routes>
        </main>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
