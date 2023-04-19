import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from './components/movieList/movieList';
import Header from './components/header/header';
import Movie from "./pages/movieDetail/movie";
import Home from './pages/home/home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" element={<Movie />}></Route>
          <Route path="movies/:type" element={<MovieList />}> </Route>
          <Route path="/*" element={<h1>Page not Found!</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
