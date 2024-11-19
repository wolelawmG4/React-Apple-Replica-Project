import "./commonResource/css/bootstrap.css";
import "./commonResource/css/styles.css";
// import "./commonResource/js/bootstrap";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Alert from "./Components/Alert/Alert";
import SecondSection from "./Components/SecondSection/SecondSection";
import FirstSection from "./Components/FirstSection/FirstSection";
import ThirdSection from "./Components/ThirdSection/ThirdSection";
import FourthSection from "./Components/FourthSection/FourthSection";
import FifthSection from "./Components/FifthSection/FifthSection";
import SixthSection from "./Components/SixthSection/SixthSection";
import YoutubeVideos from "./Components/YoutubeVideos/YoutubeVideos";
import SingleProduct from "./Components/SingleProduct/SingleProduct";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import Iphone from "./Components/Iphone/Iphone";
import MacPage from "./Components/MacPage/MacPage";
import IpadPage from "./Components/IpadPage/Ipad";
import WatchPage from "./Components/WatchPage/watchPage";
import TvPage from "./Components/TvPage/tvPage";
import MusicPAge from "./Components/MusicPage/MusicPage";
import SupportPage from "./Components/SupportPage/SupportPage";
import SearchPage from "./Components/SearchPage/SearchPage";
import CartPage from "./Components/CartPage/CartPage";

import { Route, Routes } from "react-router-dom";
import Sharedpages from "./Components/sharedPages/Sharedpages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Sharedpages />}>
          <Route path="iphone" element={<Iphone />} />
          <Route
            path="/"
            element={
              <>
                <Alert />
                <FirstSection />
                <SecondSection />
                <ThirdSection />
                <FourthSection />
                <FifthSection />
                <SixthSection />
                {/* { <YoutubeVideos />} */}
              </>
            }
          />
          <Route path="iphone/:productName" element={<SingleProduct />} />
          <Route path="Mac" element={<MacPage />} />
          <Route path="ipad" element={<IpadPage />} />
          <Route path="watch" element={<WatchPage />} />
          <Route path="tv" element={<TvPage />} />
          <Route path="Music" element={<MusicPAge />} />
          <Route path="Support" element={<SupportPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
