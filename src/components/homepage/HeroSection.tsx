import React from "react";
import GuidesAndSamples from './GuidesAndSamples';

export default function HeroSection() {
  return (
    <div className="noise-bg-faded no-underline-links px-4 pt-8 lg:py-0 h-screen overflow-y-auto">
      <section className="flex flex-col items-center justify-center py-32">
        <h2 className="font-jakarta text-7xl font-bold">
          Arteii   -   Ben
        </h2>
        <p className="text-center text-text-400">
          i do things
        </p>
      </section>
      <GuidesAndSamples />
    </div>
  );
}
