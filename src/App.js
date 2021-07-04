
import Footer from './Components/Footer/Footer';
import Package from './Components/Package/Package';
import Faqs from './Components/Faqs/Faqs';
import Headers from './Components/Headers/Headers';
import TopBanner from './Components/TopBanner/TopBanner';
import SecondPart from './Components/SecondPart/SecondPart';
import ThirdPart from './Components/ThirdPart/ThirdPart';
import FourthPart from './Components/FourthPart/FourthPart';
import Review from './Components/Review/Review';
import TrekMap from './Components/TrekMap/TrekMap';
import TrekPolicies from './Components/TrekPolicies/TrekPolicies';
import './App.css';

function App() {
  return (
   <>
    <Headers />
    <TopBanner />
    <SecondPart />
    <ThirdPart />
    <FourthPart />
    <Review />
    <Package />
    <TrekMap />
    <TrekPolicies />
    <Faqs />
    <Footer />
   </>
  );
}

export default App;
