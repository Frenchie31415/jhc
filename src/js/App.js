import '../css/App.css';
import Landing from './Landing.js';
import FaceBook from './FaceBook.js';
import About from './About.js';
import Gallery from './Gallery.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className="App">
      <Landing/>
      <FaceBook/>
      <About/>
      <Gallery/>
      <Footer/>
    </div>
  );
}

export default App;
