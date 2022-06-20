import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import About from './components/pages/About';

function App() {
  return (
    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Navbar />
        <main className='container mx-auto px-3 pb-12 text-primary-content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/notfound' element={<NotFound />} />
            <Route path='/*' element={<NotFound />} />
            {/* Catch all got all other options */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
