import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Main from './components/Main';
import MovieList from './components/MovieList';

function App() {
  return (
    <Router>
    <div className="App">
      <Link to="/movie">영화목록</Link>

      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/movie" element={<MovieList/>}/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
