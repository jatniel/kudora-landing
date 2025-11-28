import { Hero } from "./components/Hero";
import { Header } from "./components/Header";
import { Overview } from "./components/Overview";
import { WhyKudora } from "./components/WhyKudora";
import { NetworkStatus } from "./components/NetworkStatus";
import { EcosystemVision } from "./components/EcosystemVision";
import { Roadmap } from "./components/Roadmap";
import { TokenUtility } from "./components/TokenUtility";
import { CallToAction } from "./components/CallToAction";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#0F0F12]">
      <Header />
      <Hero />
      <EcosystemVision />
      <Roadmap />
      <TokenUtility />
      <Overview />
      <WhyKudora />
      <NetworkStatus />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
