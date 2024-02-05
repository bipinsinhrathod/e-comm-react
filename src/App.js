
import "./App.css";
import Banner1 from "./Components/Banner/Banner1";
import MainBanner from "./Components/Banner/MainBanner";
import Slide from "./Components/Banner/Slide";
import Favorites from "./Components/Favorites/Favorites";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Recommend from "./Components/Recommends/Recommend";



function App() {
  return (
    <>
    

      <Navbar />
      <MainBanner />
      <Favorites />
      <Banner1 />
      <Slide />
      <Recommend/>
      <Footer /> 

    </>
  );
}

export default App;
