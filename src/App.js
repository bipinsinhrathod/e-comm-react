
import "./App.css";
import Banner1 from "./Components/Banner/Banner1";
import NewBanner from "./Components/Banner/NewBanner";
import OfferBanner from "./Components/Banner/OfferBanner";
import OffersForWomen from "./Components/Banner/Offers";
import Swiper2 from "./Components/Banner/Swiper2";
// import Favorites from "./Components/Favorites/Favorites";
import Footer from "./Components/Footer/Footer";
import NewsLetter from "./Components/Footer/NewsLetter";
import Navbar from "./Components/Navbar/Navbar";
import Recommend from "./Components/Recommends/Recommend";
import Stores from "./Stores/Stores";



function App() {
  return (
    <>
    
      <Navbar />
      <NewBanner/>
      {/* <Favorites /> */}
      <Banner1 />
      <Swiper2/>
      <OfferBanner/>
      {/* <OffersForWomen/> */}
      <Recommend/>
      <Stores/>
      <NewsLetter/>
      <Footer /> 
      
    

    </>
  );
}

export default App;
