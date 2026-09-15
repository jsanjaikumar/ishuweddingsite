import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Countdown from "./components/Countdown";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Venue from "./components/Venue";
import RSVP from "./components/RSVP";
import Footer from "./components/Footer";
import PageAtmosphere from "./components/PageAtmosphere";

export default function App() {
  return (
    <div className="relative isolate min-h-screen">
      <PageAtmosphere />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Story />
        <Countdown />
        <Events />
        <Gallery />
        <Venue />
        <RSVP />
        <Footer />
      </div>
    </div>
  );
}
