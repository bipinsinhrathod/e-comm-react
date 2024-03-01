
import "./App.css";
import Banner1 from "./Components/Banner/Banner1";
// import MainBanner from "./Components/Banner/MainBanner";
import NewBanner from "./Components/Banner/NewBanner";
import Swiper2 from "./Components/Banner/Swiper2";
import Favorites from "./Components/Favorites/Favorites";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Recommend from "./Components/Recommends/Recommend";



function App() {
  return (
    <>
    

      <Navbar />
      <NewBanner/>
      {/* <MainBanner /> */}
      <Favorites />
      <Banner1 />
      <Swiper2/>
      <Recommend/>
      <Footer /> 
    

    </>
  );
}

export default App;
