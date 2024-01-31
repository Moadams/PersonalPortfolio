
import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <div className='container'
      >
        <Hero />

      </div>
    </div>
  );
}

export default App;
