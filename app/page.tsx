"use client";
import Link from "next/link";
import React from "react";
import { Github, Instagram, Mail, Twitter } from "lucide-react";
import { Navigation } from "./components/homenav";
import Particles from "./components/particles";
import profileImage from '../public/me.jpg'; // Import your profile image
import { Card } from './components/card';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <Navigation />
      <div className="z-10 w-full max-w-xl px-5 xl:px-0 animate-fade-in">
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
      <a
      href="https://twitter.com/SarathTharayil"
      target="_blank"
      rel="noreferrer"
      className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
    >
      <p className="text-sm font-semibold text-[#1d9bf0]">
        Myself
      </p>
    </a>
    <h1
      className="mt-8 animate-fade-up bg-gradient-to-br from-white to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent  drop-shadow-sm md:text-7xl md:leading-[5rem]"
      style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
    >
      Sarath Tharayil
    </h1>
    <p
      className="mt-3 animate-fade-up text-center text-gray-500 md:text-xl"
      style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
    >
        I'm a designer, developer, and data science student at The University of Sheffield.
    </p>
    <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <a
            className="overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
            href="https://www.twitter.com/SarathTharayil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="h-5 w-5 text-[#1d9bf0]" />
          </a>
          <a
            className="overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
            href="https://www.github.com/SarathTharayil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-5 w-5 text-[#1d9bf0]" />
          </a>
          <a
            className="overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
            href="https://www.instagram.com/Sarath_Tharayil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="h-5 w-5 text-[#1d9bf0]" />
          </a>
          </div>
    </div>
    </div>
  );
}