
import './App.css';
import Banner1 from './Components/Banner/Banner1';
import MainBanner from './Components/Banner/MainBanner';
import Slide from './Components/Banner/Slide';
import Favorites from './Components/Favorites/Favorites';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <MainBanner/>
      <Favorites/>
      <Banner1 />
      <Slide />
    </>
  );
}

export default App;
