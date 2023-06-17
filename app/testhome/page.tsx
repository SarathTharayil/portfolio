"use client";
import Link from "next/link";
import React from "react";
import { Github, Mail, Twitter } from "lucide-react";
import { Navigation } from "../components/homenav";
import Particles from "../components/particles";
import profileImage from '../public/me.jpg'; // Import your profile image
import { Card } from '../components/card';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <Navigation />
      <div className="container mx-auto px-8">
        <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />

        <div className="flex h-full">
          <div className="w-2/4 flex items-end justify-end">
            {/* Image container */}
            <div className="w-2/4 flex items-end">
              <img className="w-auto h-auto mb-8 animate-fade-in flex items-end" src="/me.jpg" alt="Profile" />
            </div>
          </div>
          <div className="w-1/4 flex flex-col items-start justify-center"></div>
          <div className="w-3/4 flex flex-col items-start justify-center">
            {/* Text container */}
            <h2 className="my-8 sm:my-16 animate-fade-in text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300">Hello, I'm</h2>
            <h1 className="z-10 text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:whitespace-nowrap bg-clip-text">
              Sarath Tharayil
            </h1>
            <p className="my-8 sm:my-16 animate-fade-in text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300">Welcome to my place on the internet</p>
          </div>
        </div>
      </div>
    </div>
  );
}

