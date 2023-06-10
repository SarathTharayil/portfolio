"use client";
import Link from "next/link";
import React from "react";
import { Github, Mail, Twitter } from "lucide-react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const navigation = [
	{ name: "Back", href: "/" },
	{ name: "About", href: "/about" },
	{ name: "Contact", href: "/contact" },
];

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			<nav className="my-16 animate-fade-in">
			
				<h2 className="text-sm text-zinc-500">
				<Link href={"/"}>
				Back
				</Link>
				</h2>
			
			</nav>
			<h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
				Hello!
			</h1>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-center animate-fade-in">
				<h2 className="text-sm text-zinc-500 ">
					Hi, my name is Sarath Tharayil, I'm a designer, developer and data science student
					 at{" "}
					<Link
						target="_blank"
						href="https://www.sheffield.ac.uk/"
						className="underline duration-500 hover:text-zinc-300"
					>
						The University of Sheffield
					</Link>
				</h2>
			</div>
		</div>
	);
}
