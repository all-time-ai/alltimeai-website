import AcademicIdentity from "./components/AcademicIdentity";
import Capabilities from "./components/Capabilities";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Kavach from "./components/Kavach";
import LeadershipTeam from "./components/LeadershipTeam";
import TechnicalServices from "./components/TechnicalServices";
import UpcomingProducts from "./components/UpcomingProducts";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <Header />
      <main className="w-full">
        <Hero />
        <Capabilities />
        <Kavach />
        <AcademicIdentity />
        <UpcomingProducts />
        <LeadershipTeam />
        <TechnicalServices />
      </main>
      <Footer />
    </div>
  );
}
