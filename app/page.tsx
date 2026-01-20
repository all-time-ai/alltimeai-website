import AcademicIdentity from "./components/AcademicIdentity";
import Hero from "./components/Hero";
import Kavach from "./components/Kavach";
import LeadershipTeam from "./components/LeadershipTeam";
import UpcomingProducts from "./components/UpcomingProducts";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start" >
      <Hero />
      <Kavach />
      <AcademicIdentity />
      <UpcomingProducts />
      <LeadershipTeam />
    </div>
  );
}
