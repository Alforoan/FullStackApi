import React from "react";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import FeaturedCards from "../components/FeaturedCards";

function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedCards />
      <Contact />
    </main>
  );
}

export default HomePage;
