import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LaunchScreen from '../components/LaunchScreen'
import MovieList from '../components/MovieList'
import './App.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LaunchScreen />} />
        <Route path='/MovieList' element={<MovieList />} />
      </Routes>
    </Router>
  )
}

export default App
