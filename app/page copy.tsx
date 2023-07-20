"use client";
import Link from "next/link";
import React from "react";
import { Github, Mail, Twitter } from "lucide-react";
import { Navigation } from "./components/homenav";
import Particles from "./components/particles";
import profileImage from '../public/me.jpg'; // Import your profile image
import { Card } from './components/card';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <Navigation />
      <div className="container mx-auto px-8">
        <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />

        <div className="flex flex-col items-center justify-center h-full">
          <h3 className="my-8 sm:my-16 animate-fade-in text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-300">Hello, I'm</h3>
          <h1 className="z-10 text-4xl sm:text-6xl md:text-9xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:whitespace-nowrap bg-clip-text">
            Sarath Tharayil
          </h1>
          <p className="my-8 sm:my-16 animate-fade-in text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-300">Welcome to my place on the internet!</p>
        </div>
      </div>
    </div>
  );
}


