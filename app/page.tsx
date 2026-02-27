"use client"

import AcademicIdentity from "./components/AcademicIdentity";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Kavach from "./components/Kavach";
import LeadershipTeam from "./components/LeadershipTeam";
import TechnicalServices from "./components/TechnicalServices";
import ThemeToggle from "./components/ThemeToggle";
import UpcomingProducts from "./components/UpcomingProducts";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start" >
      {/* <ThemeToggle /> */}
      <Header />
      <Hero />
      <Kavach />
      <AcademicIdentity />
      <UpcomingProducts />
      <LeadershipTeam />
      <TechnicalServices />
      <Footer />
    </div>
  );
}
