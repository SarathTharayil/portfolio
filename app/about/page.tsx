"use client";
import Link from "next/link";
import React from "react";
import { Github, Mail, Twitter } from "lucide-react";
import { Navigation } from "../components/nav";
import Particles from "../components/particles";
import profileImage from '../public/me.jpg'; // Import your profile image
import { Card } from './card';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <Navigation />
      <div className="container mx-auto px-8">
        <Card>
          <div className="flex items-center">
            <img className="w-40 h-auto rounded-full mr-8" src="/me.jpg" alt="Profile" />
            <div className="text-white">
              <header className="text-2xl font-bold mb-4">About me!</header>
              
              <p className="text-lg">
                Hi, my name is Sarath Tharayil. I'm a designer, developer, and data science student at The University of Sheffield.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
