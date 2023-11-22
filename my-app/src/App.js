import './App.css';
import HomeSection from './Components/Home';
import Navbar from './Components/Navbar';
import OtherNewsSection from './Components/OtherNewsSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeSection/>
      <OtherNewsSection/>
    </div>
  );
}

export default App;
