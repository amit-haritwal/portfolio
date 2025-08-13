"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Database, Globe, Server } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import TextAnimation from "@/components/text-animation";
import ScrollReveal from "@/components/scroll-reveal";
import AnimatedCard from "@/components/animated-card";
import AnimatedBackground from "@/components/animated-background";
import ThreeDCard from "@/components/3d-card";
import FloatingIcons from "@/components/floating-icons";
import Image from "next/image";
import ClientOnly from "@/components/client-only";
import {
	SiPython,
	SiCplusplus,
	SiMysql,
	SiGnubash,
	SiTypescript,
	SiJavascript,
	SiFlask,
	SiPandas,
	SiNumpy,
	SiOpencv,
	SiPytorch,
	SiTensorflow,
	SiScikitlearn,
	SiFirebase,
	SiReact,
	SiNextdotjs,
	SiTailwindcss,
	SiFramer,
	SiStripe,
	SiMongodb,
	SiPostgresql,
	SiGooglecloud,
	SiAmazon,
	SiVercel,
	SiDocker,
	SiGit,
	SiOverleaf,
	SiNodedotjs,
} from "react-icons/si";
import { DiDatabase } from "react-icons/di";
import { FaPython, FaJava, FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt, FaProjectDiagram, FaChartLine, FaTools, FaMicrophone, FaLanguage, FaThumbsUp, FaEye, FaBrain, FaVideo } from "react-icons/fa";

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen">
			{/* Restore animated background with ClientOnly wrapper */}
			<ClientOnly>
				<AnimatedBackground />
				<FloatingIcons count={8} />
			</ClientOnly>

			<section className="pt-32 pb-16 md:pt-40 md:pb-24">
				<div className="container mx-auto px-4">
					<div className="flex flex-col md:flex-row items-center">
						<div className="md:w-1/2 mb-12 md:mb-0">
							<ClientOnly fallback={
								<h1 className="text-4xl md:text-6xl font-bold mb-2">Full Stack Developer</h1>
							}>
								<TextAnimation
									text="Full Stack Developer"
									type="reveal"
									className="text-4xl md:text-6xl font-bold mb-2"
								/>
							</ClientOnly>
							
							<ClientOnly fallback={
								<h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">Building Digital Experiences</h2>
							}>
								<TextAnimation
									text="Building Digital Experiences"
									type="typing"
									className="text-4xl md:text-6xl font-bold text-primary mb-6"
									delay={1}
								/>
							</ClientOnly>

							<motion.p
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3, delay: 0.2 }}
								className="text-xl text-muted-foreground mb-8 max-w-lg"
							>
								I create modern, responsive web applications with cutting-edge
								technologies and exceptional user experiences.
							</motion.p>

							<ClientOnly fallback={
								<div className="flex flex-wrap gap-4">
									<Button asChild size="lg">
										<Link href="/work">View My Work</Link>
									</Button>
									<Button variant="outline" size="lg" asChild>
										<Link href="/contact">Contact Me</Link>
									</Button>
								</div>
							}>
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3, delay: 0.4 }}
									className="flex flex-wrap gap-4"
								>
									<Button asChild size="lg">
										<Link href="/work">
											View My Work <ArrowRight className="ml-2 h-4 w-4" />
										</Link>
									</Button>
									<Button variant="outline" size="lg" asChild>
										<Link href="/contact">Contact Me</Link>
									</Button>
								</motion.div>
							</ClientOnly>
						</div>

						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5 }}
							className="md:w-1/2 w-full"
						>
							<div className="relative">
								<div className="w-full h-80 md:h-96 bg-gradient-to-br from-primary/20 to-secondary rounded-lg flex items-center justify-center overflow-hidden relative group">
									{/* Background Tech Logos Pattern */}
									<div className="absolute inset-0 opacity-5 pointer-events-none">
										<div className="grid grid-cols-8 gap-4 h-full w-full p-4">
											{[SiReact, SiNextdotjs, SiTypescript, SiPython, SiNodedotjs, SiMongodb, 
											  SiTailwindcss, SiFirebase, SiDocker, SiPostgresql, SiStripe, SiGit,
											  SiPytorch, SiTensorflow, SiGooglecloud, SiAmazon, SiFlask, SiFramer].map((Icon, index) => (
												<motion.div
													key={index}
													className="flex items-center justify-center"
													animate={{
														opacity: [0.1, 0.3, 0.1],
														scale: [0.8, 1.2, 0.8],
													}}
													transition={{
														repeat: Number.POSITIVE_INFINITY,
														duration: 8,
														delay: index * 0.3,
														ease: "easeInOut",
													}}
												>
													<Icon size={20} color="#666" />
												</motion.div>
											))}
										</div>
									</div>

									{/* Interactive 3D Tech Cube */}
									<motion.div
										className="relative cursor-grab active:cursor-grabbing z-10"
										style={{ perspective: "1000px" }}
										animate={{
											rotateY: [0, 360],
										}}
										transition={{
											repeat: Number.POSITIVE_INFINITY,
											duration: 15,
											ease: "linear",
										}}
										whileHover={{
											scale: 1.1,
											rotateX: 15,
										}}
										whileTap={{
											scale: 0.95,
										}}
										drag
										dragConstraints={{
											left: -50,
											right: 50,
											top: -50,
											bottom: 50,
										}}
										dragElastic={0.8}
										onDrag={() => {
											// Add bounce effect when dragging
										}}
									>
										<motion.div 
											className="relative w-32 h-32 md:w-40 md:h-40" 
											style={{ transformStyle: "preserve-3d" }}
											whileHover={{
												rotateY: [0, 90, 180, 270, 360],
											}}
											transition={{
												duration: 2,
												ease: "easeInOut",
											}}
										>
											{/* Front face - React */}
											<motion.div 
												className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-300/30 rounded-lg flex items-center justify-center hover:border-blue-400/50 transition-colors" 
												style={{ transform: "translateZ(80px)" }}
												whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.1)" }}
											>
												<motion.div
													animate={{ rotate: 360 }}
													transition={{
														repeat: Number.POSITIVE_INFINITY,
														duration: 8,
														ease: "linear",
													}}
												>
													<SiReact size={48} color="#61DAFB" />
												</motion.div>
											</motion.div>
											{/* Back face - Next.js */}
											<motion.div 
												className="absolute inset-0 bg-gradient-to-br from-gray-800/20 to-black/20 backdrop-blur-sm border border-gray-300/30 rounded-lg flex items-center justify-center hover:border-gray-400/50 transition-colors" 
												style={{ transform: "translateZ(-80px) rotateY(180deg)" }}
												whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
											>
												<SiNextdotjs size={48} color="#000000" />
											</motion.div>
											{/* Right face - TypeScript */}
											<motion.div 
												className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-sm border border-blue-300/30 rounded-lg flex items-center justify-center hover:border-blue-400/50 transition-colors" 
												style={{ transform: "rotateY(90deg) translateZ(80px)" }}
												whileHover={{ backgroundColor: "rgba(49, 120, 198, 0.1)" }}
											>
												<SiTypescript size={48} color="#3178C6" />
											</motion.div>
											{/* Left face - Python */}
											<motion.div 
												className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-blue-600/20 backdrop-blur-sm border border-yellow-300/30 rounded-lg flex items-center justify-center hover:border-yellow-400/50 transition-colors" 
												style={{ transform: "rotateY(-90deg) translateZ(80px)" }}
												whileHover={{ backgroundColor: "rgba(55, 118, 171, 0.1)" }}
											>
												<SiPython size={48} color="#3776AB" />
											</motion.div>
											{/* Top face - Node.js */}
											<motion.div 
												className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-green-700/20 backdrop-blur-sm border border-green-300/30 rounded-lg flex items-center justify-center hover:border-green-400/50 transition-colors" 
												style={{ transform: "rotateX(90deg) translateZ(80px)" }}
												whileHover={{ backgroundColor: "rgba(51, 153, 51, 0.1)" }}
											>
												<SiNodedotjs size={48} color="#339933" />
											</motion.div>
											{/* Bottom face - MongoDB */}
											<motion.div 
												className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-green-600/20 backdrop-blur-sm border border-green-300/30 rounded-lg flex items-center justify-center hover:border-green-400/50 transition-colors" 
												style={{ transform: "rotateX(-90deg) translateZ(80px)" }}
												whileHover={{ backgroundColor: "rgba(71, 162, 72, 0.1)" }}
											>
												<SiMongodb size={48} color="#47A248" />
											</motion.div>
										</motion.div>
									</motion.div>

									{/* Enhanced Draggable & Bouncy Floating Tech Orbs */}
									{/* Row 1 - Top floating icons */}
									<motion.div
										className="absolute top-4 left-8 cursor-grab active:cursor-grabbing z-20"
										animate={{
											y: [0, -25, 0],
											rotate: [0, 360],
											scale: [1, 1.1, 1],
										}}
										transition={{
											repeat: Number.POSITIVE_INFINITY,
											duration: 8,
											ease: "easeInOut",
										}}
										whileHover={{ scale: 1.3, rotate: 0 }}
										whileTap={{ 
											scale: 0.8,
											rotate: 180,
											transition: { type: "spring", stiffness: 500, damping: 15 }
										}}
										drag
										dragConstraints={{
											left: -100,
											right: 100,
											top: -50,
											bottom: 100,
										}}
										dragElastic={0.9}
										dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
									>
										<div className="w-14 h-14 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-cyan-300/40 hover:border-cyan-400/60 transition-all cursor-pointer">
											<SiTailwindcss size={28} color="#06B6D4" />
										</div>
									</motion.div>

									<motion.div
										className="absolute top-8 right-12 cursor-grab active:cursor-grabbing z-20"
										animate={{
											y: [0, -15, 0],
											x: [0, 10, 0],
											rotate: [0, -360],
										}}
										transition={{
											repeat: Number.POSITIVE_INFINITY,
											duration: 10,
											ease: "easeInOut",
											delay: 0.5,
										}}
										whileHover={{ scale: 1.3, rotate: 0 }}
										whileTap={{ 
											scale: 0.7,
											rotate: -180,
											y: -20,
											transition: { type: "spring", stiffness: 400, damping: 12 }
										}}
										drag
										dragConstraints={{
											left: -120,
											right: 50,
											top: -40,
											bottom: 120,
										}}
										dragElastic={0.8}
										dragTransition={{ bounceStiffness: 500, bounceDamping: 8 }}
									>
										<div className="w-12 h-12 bg-gradient-to-br from-orange-400/30 to-red-500/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-orange-300/40 hover:border-orange-400/60 transition-all cursor-pointer">
											<SiFlask size={24} color="#F0F0F0" />
										</div>
									</motion.div>

									<motion.div
										className="absolute top-16 left-4 cursor-grab active:cursor-grabbing z-20"
										animate={{
											y: [0, 20, 0],
											x: [0, -8, 0],
											scale: [1, 1.2, 1],
										}}
										transition={{
											repeat: Number.POSITIVE_INFINITY,
											duration: 9,
											ease: "easeInOut",
											delay: 1,
										}}
										whileHover={{ scale: 1.4, rotate: 180 }}
										whileTap={{ 
											scale: 0.6,
											rotate: 360,
											x: -15,
											transition: { type: "spring", stiffness: 600, damping: 10 }
										}}
										drag
										dragConstraints={{
											left: -80,
											right: 150,
											top: -60,
											bottom: 100,
										}}
										dragElastic={1.0}
										dragTransition={{ bounceStiffness: 700, bounceDamping: 12 }}
									>
										<div className="w-16 h-16 bg-gradient-to-br from-purple-400/30 to-pink-500/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-purple-300/40 hover:border-purple-400/60 transition-all cursor-pointer">
											<SiFramer size={32} color="#0055FF" />
										</div>
									</motion.div>

									{/* Row 2 - Middle floating icons */}
									<motion.div
										className="absolute top-1/2 left-2 cursor-grab active:cursor-grabbing z-20"
										animate={{
											x: [0, -20, 0],
											y: [0, 15, 0],
											rotate: [0, 180, 360],
										}}
										transition={{
											repeat: Number.POSITIVE_INFINITY,
											duration: 12,
											ease: "easeInOut",
											delay: 1.5,
										}}
										whileHover={{ scale: 1.3, rotate: 0 }}
										whileTap={{ 
											scale: 0.75,
											rotate: 270,
											x: -25,
											transition: { type: "spring", stiffness: 550, damping: 14 }
										}}
										drag
										dragConstraints={{
											left: -60,
											right: 180,
											top: -80,
											bottom: 80,
										}}
										dragElastic={0.9}
										dragTransition={{ bounceStiffness: 650, bounceDamping: 11 }}
									>
										<div className="w-14 h-14 bg-gradient-to-br from-orange-400/30 to-red-600/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-orange-300/40 hover:border-orange-400/60 transition-all cursor-pointer">
											<SiPytorch size={28} color="#EE4C2C" />
										</div>
									</motion.div>

									<motion.div
										className="absolute top-1/2 right-4 cursor-grab active:cursor-grabbing z-20"
										animate={{
											x: [0, 20, 0],
											y: [0, -12, 0],
											scale: [1, 1.15, 1],
										}}
										transition={{
											repeat: Number.POSITIVE_INFINITY,
											duration: 7,
											ease: "easeInOut",
											delay: 2,
										}}
										whileHover={{ scale: 1.4, rotate: 360 }}
										whileTap={{ 
											scale: 0.8,
											rotate: 450,
											x: 25,
											transition: { type: "spring", stiffness: 500, damping: 13 }
										}}
										drag
										dragConstraints={{
											left: -180,
											right: 60,
											top: -90,
											bottom: 90,
										}}
										dragElastic={0.85}
										dragTransition={{ bounceStiffness: 600, bounceDamping: 9 }}
									>
										<div className="w-13 h-13 bg-gradient-to-br from-yellow-400/30 to-orange-500/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-yellow-300/40 hover:border-yellow-400/60 transition-all cursor-pointer">
											<SiFirebase size={26} color="#FFCA28" />
										</div>
									</motion.div>

									<motion.div
										className="absolute top-2/3 left-12 cursor-grab active:cursor-grabbing z-20"
										animate={{
											y: [0, -18, 0],
											rotate: [0, 270],
											scale: [1, 1.1, 1],
										}}
										transition={{
											repeat: Number.POSITIVE_INFINITY,
											duration: 11,
											ease: "easeInOut",
											delay: 0.8,
										}}
										whileHover={{ scale: 1.3, rotate: 0 }}
										whileTap={{ 
											scale: 0.7,
											rotate: 540,
											y: -30,
											transition: { type: "spring", stiffness: 700, damping: 15 }
										}}
										drag
										dragConstraints={{
											left: -120,
											right: 120,
											top: -100,
											bottom: 60,
										}}
										dragElastic={0.95}
										dragTransition={{ bounceStiffness: 650, bounceDamping: 10 }}
									>
										<div className="w-12 h-12 bg-gradient-to-br from-blue-400/30 to-indigo-500/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-300/40 hover:border-blue-400/60 transition-all cursor-pointer">
											<SiDocker size={24} color="#2496ED" />
										</div>
									</motion.div>

									{/* Row 3 - Bottom floating icons */}
									<motion.div
										className="absolute bottom-8 left-6 cursor-grab active:cursor-grabbing z-20"
										animate={{
											y: [0, 20, 0],
											x: [0, 8, 0],
											rotate: [0, -180, -360],
										}}
										transition={{
											repeat: Number.POSITIVE_INFINITY,
											duration: 13,
											ease: "easeInOut",
											delay: 2.5,
										}}
										whileHover={{ scale: 1.3, rotate: 0 }}
										whileTap={{ 
											scale: 0.75,
											rotate: -270,
											y: 30,
											transition: { type: "spring", stiffness: 600, damping: 12 }
										}}
										drag
										dragConstraints={{
											left: -100,
											right: 140,
											top: -120,
											bottom: 40,
										}}
										dragElastic={0.9}
										dragTransition={{ bounceStiffness: 550, bounceDamping: 8 }}
									>
										<div className="w-15 h-15 bg-gradient-to-br from-green-400/30 to-emerald-500/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-green-300/40 hover:border-green-400/60 transition-all cursor-pointer">
											<SiPostgresql size={30} color="#336791" />
										</div>
									</motion.div>

									<motion.div
										className="absolute bottom-12 right-8 cursor-grab active:cursor-grabbing z-20"
										animate={{
											y: [0, -22, 0],
											x: [0, -5, 0],
											scale: [1, 1.25, 1],
										}}
										transition={{
											repeat: Number.POSITIVE_INFINITY,
											duration: 6,
											ease: "easeInOut",
											delay: 3,
										}}
										whileHover={{ scale: 1.4, rotate: 180 }}
										whileTap={{ 
											scale: 0.6,
											rotate: 720,
											y: -35,
											transition: { type: "spring", stiffness: 800, damping: 16 }
										}}
										drag
										dragConstraints={{
											left: -160,
											right: 80,
											top: -100,
											bottom: 50,
										}}
										dragElastic={1.0}
										dragTransition={{ bounceStiffness: 700, bounceDamping: 12 }}
									>
										<div className="w-14 h-14 bg-gradient-to-br from-indigo-400/30 to-purple-600/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-indigo-300/40 hover:border-indigo-400/60 transition-all cursor-pointer">
											<SiStripe size={28} color="#635BFF" />
										</div>
									</motion.div>

									<motion.div
										className="absolute bottom-4 right-20 cursor-grab active:cursor-grabbing z-20"
										animate={{
											y: [0, 15, 0],
											rotate: [0, 90, 180, 270, 360],
										}}
										transition={{
											repeat: Number.POSITIVE_INFINITY,
											duration: 14,
											ease: "easeInOut",
											delay: 1.2,
										}}
										whileHover={{ scale: 1.3, rotate: 0 }}
										whileTap={{ 
											scale: 0.8,
											rotate: 630,
											y: 20,
											transition: { type: "spring", stiffness: 650, damping: 14 }
										}}
										drag
										dragConstraints={{
											left: -140,
											right: 60,
											top: -80,
											bottom: 30,
										}}
										dragElastic={0.8}
										dragTransition={{ bounceStiffness: 600, bounceDamping: 11 }}
									>
										<div className="w-10 h-10 bg-gradient-to-br from-gray-400/30 to-gray-600/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-300/40 hover:border-gray-400/60 transition-all cursor-pointer">
											<SiGit size={20} color="#F05032" />
										</div>
									</motion.div>

									{/* Additional Interactive Corner Icons */}
									<motion.div
										className="absolute top-12 right-4 cursor-grab active:cursor-grabbing z-20"
										animate={{
											scale: [1, 1.3, 1],
											rotate: [0, 120, 240, 360],
										}}
										transition={{
											repeat: Number.POSITIVE_INFINITY,
											duration: 8,
											ease: "easeInOut",
											delay: 2.8,
										}}
										whileHover={{ scale: 1.5, rotate: 0 }}
										whileTap={{ 
											scale: 0.7,
											rotate: 480,
											transition: { type: "spring", stiffness: 750, damping: 18 }
										}}
										drag
										dragConstraints={{
											left: -150,
											right: 50,
											top: -50,
											bottom: 100,
										}}
										dragElastic={0.9}
										dragTransition={{ bounceStiffness: 680, bounceDamping: 13 }}
									>
										<div className="w-11 h-11 bg-gradient-to-br from-teal-400/30 to-cyan-500/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-teal-300/40 hover:border-teal-400/60 transition-all cursor-pointer">
											<SiTensorflow size={22} color="#FF6F00" />
										</div>
									</motion.div>

									<motion.div
										className="absolute bottom-16 left-20 cursor-grab active:cursor-grabbing z-20"
										animate={{
											y: [0, -10, 0],
											x: [0, 12, 0],
											rotate: [0, -90, -180, -270, -360],
										}}
										transition={{
											repeat: Number.POSITIVE_INFINITY,
											duration: 15,
											ease: "easeInOut",
											delay: 0.3,
										}}
										whileHover={{ scale: 1.3, rotate: 0 }}
										whileTap={{ 
											scale: 0.75,
											rotate: -540,
											x: 15,
											transition: { type: "spring", stiffness: 600, damping: 12 }
										}}
										drag
										dragConstraints={{
											left: -80,
											right: 120,
											top: -80,
											bottom: 60,
										}}
										dragElastic={0.95}
										dragTransition={{ bounceStiffness: 620, bounceDamping: 10 }}
									>
										<div className="w-12 h-12 bg-gradient-to-br from-blue-500/30 to-purple-600/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-300/40 hover:border-blue-400/60 transition-all cursor-pointer">
											<SiGooglecloud size={24} color="#4285F4" />
										</div>
									</motion.div>

									<motion.div
										className="absolute top-6 left-16 cursor-grab active:cursor-grabbing z-20"
										animate={{
											y: [0, 8, 0],
											x: [0, -6, 0],
											scale: [1, 1.2, 1],
										}}
										transition={{
											repeat: Number.POSITIVE_INFINITY,
											duration: 10,
											ease: "easeInOut",
											delay: 4,
										}}
										whileHover={{ scale: 1.4, rotate: 360 }}
										whileTap={{ 
											scale: 0.8,
											rotate: 450,
											x: -10,
											transition: { type: "spring", stiffness: 550, damping: 15 }
										}}
										drag
										dragConstraints={{
											left: -60,
											right: 120,
											top: -30,
											bottom: 120,
										}}
										dragElastic={0.85}
										dragTransition={{ bounceStiffness: 580, bounceDamping: 9 }}
									>
										<div className="w-10 h-10 bg-gradient-to-br from-orange-500/30 to-yellow-500/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-orange-300/40 hover:border-orange-400/60 transition-all cursor-pointer">
											<SiAmazon size={20} color="#FF9900" />
										</div>
									</motion.div>
								</div>

								{/* Floating tech icons */}
								<motion.div
									className="absolute -top-5 -left-5 bg-background p-4 rounded-full shadow-lg"
									animate={{
										y: [0, 15, 0],
										rotate: [0, 10, 0],
									}}
									transition={{
										repeat: Number.POSITIVE_INFINITY,
										duration: 5,
										ease: "easeInOut",
									}}
								>
									<Globe className="w-10 h-10 text-primary" />
								</motion.div>

								<motion.div
									className="absolute -bottom-5 -right-5 bg-background p-4 rounded-full shadow-lg"
									animate={{
										y: [0, -15, 0],
										rotate: [0, -10, 0],
									}}
									transition={{
										repeat: Number.POSITIVE_INFINITY,
										duration: 6,
										ease: "easeInOut",
										delay: 1,
									}}
								>
									<Database className="w-10 h-10 text-primary" />
								</motion.div>

								<motion.div
									className="absolute top-1/2 -right-8 bg-background p-4 rounded-full shadow-lg"
									animate={{
										x: [0, 15, 0],
										rotate: [0, 15, 0],
									}}
									transition={{
										repeat: Number.POSITIVE_INFINITY,
										duration: 7,
										ease: "easeInOut",
										delay: 2,
									}}
								>
									<Server className="w-10 h-10 text-primary" />
								</motion.div>

								<motion.div
									className="absolute top-1/4 -left-8 bg-background p-3 rounded-full shadow-lg"
									animate={{
										x: [0, -10, 0],
										y: [0, 10, 0],
									}}
									transition={{
										repeat: Number.POSITIVE_INFINITY,
										duration: 8,
										ease: "easeInOut",
										delay: 0.5,
									}}
								>
									<Code className="w-8 h-8 text-primary" />
								</motion.div>

								<motion.div
									className="absolute bottom-1/4 left-10 bg-background p-3 rounded-full shadow-lg"
									animate={{
										y: [0, -15, 0],
										x: [0, 10, 0],
									}}
									transition={{
										repeat: Number.POSITIVE_INFINITY,
										duration: 9,
										ease: "easeInOut",
										delay: 1.5,
									}}
								>
									<motion.div
										animate={{ rotate: 360 }}
										transition={{
											repeat: Number.POSITIVE_INFINITY,
											duration: 8,
											ease: "linear",
										}}
									>
										<Image
											src="/tech-logos/react.svg"
											alt="React"
											width={32}
											height={32}
										/>
									</motion.div>
								</motion.div>

								<motion.div
									className="absolute top-10 right-10 bg-background p-3 rounded-full shadow-lg"
									animate={{
										scale: [1, 1.2, 1],
										rotate: [0, 10, 0],
									}}
									transition={{
										repeat: Number.POSITIVE_INFINITY,
										duration: 6,
										ease: "easeInOut",
										delay: 2.5,
									}}
								>
									<motion.div
										animate={{ rotate: 360 }}
										transition={{
											repeat: Number.POSITIVE_INFINITY,
											duration: 10,
											ease: "linear",
										}}
									>
										<Image
											src="/tech-logos/typescript.svg"
											alt="TypeScript"
											width={32}
											height={32}
										/>
									</motion.div>
								</motion.div>

								<motion.div
									className="absolute bottom-20 right-20 bg-background p-2 rounded-full shadow-lg"
									animate={{
										y: [0, 10, 0],
										x: [0, -10, 0],
									}}
									transition={{
										repeat: Number.POSITIVE_INFINITY,
										duration: 7,
										ease: "easeInOut",
										delay: 3,
									}}
								>
									<motion.div
										animate={{ rotate: 360 }}
										className=" p-2"
										transition={{
											repeat: Number.POSITIVE_INFINITY,
											duration: 12,
											ease: "linear",
										}}
									>
										<Image
											src="/tech-logos/next.svg"
											alt="Next.js"
											width={28}
											height={28}
										/>
									</motion.div>
								</motion.div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			<section className="py-20 bg-muted/50">
				<div className="container mx-auto px-4">
					<ScrollReveal>
						<div className="text-center mb-16">
							<h2 className="text-4xl font-bold mb-6">
								My Tech Stack
							</h2>
							<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
								I work with a variety of technologies to build modern, scalable,
								and robust applications.
							</p>
						</div>
					</ScrollReveal>

					<div className="space-y-16">
						{/* Programming Languages & Core */}
						<div>
							<ScrollReveal>
								<h3 className="text-2xl font-bold mb-8 text-center">Programming Languages & Core</h3>
							</ScrollReveal>
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
								{[
									{
										name: "Python",
										icon: SiPython,
										color: "#3776AB",
										description: "Data processing, ML model training, backend",
									},
									{
										name: "C/C++",
										icon: SiCplusplus,
										color: "#00599C",
										description: "Low-level experience from certain projects",
									},
									{
										name: "SQL",
										icon: SiMysql,
										color: "#4479A1",
										description: "Complex queries for PostgreSQL/MySQL",
									},
									{
										name: "Bash/Shell",
										icon: SiGnubash,
										color: "#4EAA25",
										description: "Deployment & automation scripts",
									},
									{
										name: "TypeScript",
										icon: SiTypescript,
										color: "#3178C6",
										description: "Typed JavaScript for scalable apps",
									},
									{
										name: "JavaScript",
										icon: SiJavascript,
										color: "#F7DF1E",
										description: "Web development scripting",
									},
								].map((tech, index) => (
									<ScrollReveal key={tech.name} delay={index * 0.1} direction="up">
										<div className="group relative bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-6 text-center hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl overflow-hidden">
											{/* Colorful gradient background */}
											<div 
												className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-300 rounded-2xl"
												style={{
													background: `linear-gradient(135deg, ${tech.color}20, transparent 50%, ${tech.color}10)`
												}}
											/>
											
											{/* Glass reflection effect */}
											<div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-50 rounded-2xl" />
											
											{/* Border highlight */}
											<div 
												className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
												style={{
													border: `1px solid ${tech.color}40`,
													boxShadow: `0 0 20px ${tech.color}20`
												}}
											/>
											
											<div className="relative z-10">
												<div 
													className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-xl backdrop-blur-sm shadow-lg group-hover:shadow-xl transition-all duration-300 border border-white/30"
													style={{
														background: `linear-gradient(135deg, ${tech.color}20, ${tech.color}10, transparent)`
													}}
												>
													<tech.icon size={32} color={tech.color} className="group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
												</div>
												<h4 className="text-lg font-semibold mb-2 text-foreground/90 group-hover:text-foreground transition-colors duration-300">{tech.name}</h4>
												<p className="text-sm text-foreground/70 group-hover:text-foreground/90 transition-colors duration-300">{tech.description}</p>
											</div>
										</div>
									</ScrollReveal>
								))}
							</div>
						</div>

						{/* Frameworks & Libraries */}
						<div>
							<ScrollReveal>
								<h3 className="text-2xl font-bold mb-8 text-center">Frameworks & Libraries</h3>
							</ScrollReveal>
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
								{[
									{ name: "Flask", icon: SiFlask, color: "#F0F0F0", description: "Backend APIs for AI/ML projects like MelodyMatch" },
									{ name: "React", icon: SiReact, color: "#61DAFB", description: "Frontend UI library" },
									{ name: "Next.js", icon: SiNextdotjs, color: "#000000", description: "React framework for SSR & SSG" },
									{ name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", description: "Utility-first CSS framework" },
									{ name: "PyTorch", icon: SiPytorch, color: "#EE4C2C", description: "Deep learning — speaker diarization, playlist AI" },
									{ name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00", description: "Deep learning" },
									{ name: "Pandas", icon: SiPandas, color: "#150458", description: "Data analysis & preprocessing" },
									{ name: "NumPy", icon: SiNumpy, color: "#013243", description: "Numerical computing" },
									{ name: "Firebase", icon: SiFirebase, color: "#FFCA28", description: "Authentication, storage, backend services" },
								].map((tech, index) => (
									<ScrollReveal key={tech.name} delay={index * 0.1} direction="up">
										<div className="group relative bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-6 text-center hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl overflow-hidden">
											{/* Colorful gradient background */}
											<div 
												className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-300 rounded-2xl"
												style={{
													background: `linear-gradient(135deg, ${tech.color}20, transparent 50%, ${tech.color}10)`
												}}
											/>
											
											{/* Glass reflection effect */}
											<div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-50 rounded-2xl" />
											
											{/* Border highlight */}
											<div 
												className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
												style={{
													border: `1px solid ${tech.color}40`,
													boxShadow: `0 0 20px ${tech.color}20`
												}}
											/>
											
											<div className="relative z-10">
												<div 
													className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-xl backdrop-blur-sm shadow-lg group-hover:shadow-xl transition-all duration-300 border border-white/30"
													style={{
														background: `linear-gradient(135deg, ${tech.color}20, ${tech.color}10, transparent)`
													}}
												>
													<tech.icon size={32} color={tech.color} className="group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
												</div>
												<h4 className="text-lg font-semibold mb-2 text-foreground/90 group-hover:text-foreground transition-colors duration-300">{tech.name}</h4>
												<p className="text-sm text-foreground/70 group-hover:text-foreground/90 transition-colors duration-300">{tech.description}</p>
											</div>
										</div>
									</ScrollReveal>
								))}
							</div>
						</div>

							{/* Databases & Storage */}
							<div>
								<ScrollReveal>
									<h3 className="text-2xl font-bold mb-8 text-center">Databases & Storage</h3>
								</ScrollReveal>
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
									{[
										{ name: "MongoDB", icon: SiMongodb, color: "#47A248", description: "NoSQL database" },
										{ name: "PostgreSQL", icon: SiPostgresql, color: "#336791", description: "Relational database" },
										{ name: "Google Cloud Storage", icon: SiGooglecloud, color: "#4285F4", description: "Media storage & retrieval" },
										{ name: "Firebase", icon: SiFirebase, color: "#FFCA28", description: "Realtime DB & authentication" },
										{ name: "IndexedDB", icon: DiDatabase, color: "#F57C00", description: "Browser storage" },
									].map((tech, index) => (
										<ScrollReveal key={tech.name} delay={index * 0.1} direction="up">
											<div className="group relative bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-6 text-center hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl overflow-hidden">
												{/* Colorful gradient background */}
												<div 
													className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-300 rounded-2xl"
													style={{
														background: `linear-gradient(135deg, ${tech.color}20, transparent 50%, ${tech.color}10)`
													}}
												/>
												
												{/* Glass reflection effect */}
												<div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-50 rounded-2xl" />
												
												{/* Border highlight */}
												<div 
													className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
													style={{
														border: `1px solid ${tech.color}40`,
														boxShadow: `0 0 20px ${tech.color}20`
													}}
												/>
												
												<div className="relative z-10">
													<div 
														className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-xl backdrop-blur-sm shadow-lg group-hover:shadow-xl transition-all duration-300 border border-white/30"
														style={{
															background: `linear-gradient(135deg, ${tech.color}20, ${tech.color}10, transparent)`
														}}
													>
														<tech.icon size={32} color={tech.color} className="group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
													</div>
													<h4 className="text-lg font-semibold mb-2 text-foreground/90 group-hover:text-foreground transition-colors duration-300">{tech.name}</h4>
													<p className="text-sm text-foreground/70 group-hover:text-foreground/90 transition-colors duration-300">{tech.description}</p>
												</div>
											</div>
										</ScrollReveal>
									))}
								</div>
							</div>

							{/* Cloud & DevOps */}
							<div>
								<ScrollReveal>
									<h3 className="text-2xl font-bold mb-8 text-center">Cloud & DevOps</h3>
								</ScrollReveal>
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
									{[
										{ name: "Google Cloud Platform", icon: SiGooglecloud, color: "#4285F4", description: "Cloud hosting & APIs" },
										{ name: "AWS", icon: SiAmazon, color: "#FF9900", description: "Server deployment" },
										{ name: "Vercel", icon: SiVercel, color: "#000000", description: "Frontend deployment" },
										{ name: "Docker", icon: SiDocker, color: "#2496ED", description: "Containerization" },
										{ name: "Git", icon: SiGit, color: "#F05032", description: "Version control" },
									].map((tech, index) => (
										<ScrollReveal key={tech.name} delay={index * 0.1} direction="up">
											<div className="group relative bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-6 text-center hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl overflow-hidden">
												{/* Colorful gradient background */}
												<div 
													className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-300 rounded-2xl"
													style={{
														background: `linear-gradient(135deg, ${tech.color}20, transparent 50%, ${tech.color}10)`
													}}
												/>
												
												{/* Glass reflection effect */}
												<div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-50 rounded-2xl" />
												
												{/* Border highlight */}
												<div 
													className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
													style={{
														border: `1px solid ${tech.color}40`,
														boxShadow: `0 0 20px ${tech.color}20`
													}}
												/>
												
												<div className="relative z-10">
													<div 
														className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-xl backdrop-blur-sm shadow-lg group-hover:shadow-xl transition-all duration-300 border border-white/30"
														style={{
															background: `linear-gradient(135deg, ${tech.color}20, ${tech.color}10, transparent)`
														}}
													>
														<tech.icon size={32} color={tech.color} className="group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
													</div>
													<h4 className="text-lg font-semibold mb-2 text-foreground/90 group-hover:text-foreground transition-colors duration-300">{tech.name}</h4>
													<p className="text-sm text-foreground/70 group-hover:text-foreground/90 transition-colors duration-300">{tech.description}</p>
												</div>
											</div>
										</ScrollReveal>
									))}
								</div>
							</div>

							{/* AI/ML & Specialized Skills */}
							<div>
								<ScrollReveal>
									<h3 className="text-2xl font-bold mb-8 text-center">AI/ML & Specialized Skills</h3>
								</ScrollReveal>
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
									{[
										{ name: "Audio Fingerprinting", icon: FaMicrophone, color: "#00B8D9", description: "Shazam-like recognition system" },
										{ name: "Speech Processing", icon: FaMicrophone, color: "#F44336", description: "Speaker diarization & clustering" },
										{ name: "NLP", icon: FaLanguage, color: "#009688", description: "Custom mail labeling" },
										{ name: "Recommendation Systems", icon: FaThumbsUp, color: "#FFC107", description: "Playlist generation AI" },
										{ name: "OCR", icon: FaEye, color: "#607D8B", description: "Bill scanner project" },
										{ name: "Computer Vision", icon: FaEye, color: "#5C3EE8", description: "Image preprocessing" },
										{ name: "LoRA Fine-tuning", icon: FaBrain, color: "#00BFAE", description: "Model adaptation" },
										{ name: "Stripe API", icon: SiStripe, color: "#635BFF", description: "Payment integration" },
										{ name: "Socket.io", icon: FaProjectDiagram, color: "#10B981", description: "Real-time communication" },
									].map((tech, index) => (
										<ScrollReveal key={tech.name} delay={index * 0.1} direction="up">
											<div className="group relative bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-6 text-center hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl overflow-hidden">
												{/* Colorful gradient background */}
												<div 
													className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-300 rounded-2xl"
													style={{
														background: `linear-gradient(135deg, ${tech.color}20, transparent 50%, ${tech.color}10)`
													}}
												/>
												
												{/* Glass reflection effect */}
												<div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-50 rounded-2xl" />
												
												{/* Border highlight */}
												<div 
													className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
													style={{
														border: `1px solid ${tech.color}40`,
														boxShadow: `0 0 20px ${tech.color}20`
													}}
												/>
												
												<div className="relative z-10">
													<div 
														className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-xl backdrop-blur-sm shadow-lg group-hover:shadow-xl transition-all duration-300 border border-white/30"
														style={{
															background: `linear-gradient(135deg, ${tech.color}20, ${tech.color}10, transparent)`
														}}
													>
														<tech.icon size={32} color={tech.color} className="group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
													</div>
													<h4 className="text-lg font-semibold mb-2 text-foreground/90 group-hover:text-foreground transition-colors duration-300">{tech.name}</h4>
													<p className="text-sm text-foreground/70 group-hover:text-foreground/90 transition-colors duration-300">{tech.description}</p>
												</div>
											</div>
										</ScrollReveal>
									))}
								</div>
							</div>
						</div>
				</div>
			</section>

			<section className="py-20 relative overflow-hidden">
				{/* Background gradient */}
				<div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background pointer-events-none" />
				
				<div className="container mx-auto px-4 relative z-10">
					<ScrollReveal>
						<motion.div className="text-center mb-20">
							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.6 }}
								viewport={{ once: true }}
								className="inline-block mb-4"
							>
								<span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent text-sm font-semibold tracking-wide uppercase">
									Portfolio Showcase
								</span>
							</motion.div>
							<h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
								Featured Projects
							</h2>
							<p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
								Dive into my latest creations where innovation meets functionality. 
								Each project represents a unique challenge solved with cutting-edge technology 
								and thoughtful design.
							</p>
						</motion.div>
					</ScrollReveal>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
						{[
							{
								title: "Thread Cut",
								description: "A sophisticated e-commerce platform featuring seamless payment integration, advanced user authentication, real-time inventory management, and mobile-responsive design.",
								tags: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
								image: "/projectImages/threadCut.jpg",
								gradient: "from-blue-500/20 to-purple-600/20",
								accent: "border-blue-500/30",
								delay: 0.1,
							},
							{
								title: "SkyInn Hotel",
								description: "Full-stack hotel booking platform with real-time availability, food ordering system, Socket.io integration for live updates, and Redux state management supporting 500+ concurrent users.",
								tags: ["React", "Node.js", "Socket.io", "PostgreSQL"],
								image: "/projectImages/skyInn.jpg",
								gradient: "from-emerald-500/20 to-teal-600/20",
								accent: "border-emerald-500/30",
								delay: 0.2,
							},
							{
								title: "MelodyMatch",
								description: "AI-powered music recommendation platform with personalized playlist generation, mood-based suggestions, social features, and real-time collaborative listening experiences.",
								tags: ["React", "Python", "TensorFlow", "Spotify API"],
								image: "/placeholder.svg",
								gradient: "from-purple-500/20 to-indigo-600/20",
								accent: "border-purple-500/30",
								delay: 0.3,
							},
						].map((project, index) => (
							<motion.div
								key={project.title}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: project.delay }}
								viewport={{ once: true }}
								whileHover={{ y: -8 }}
								className="group"
							>
								<ThreeDCard className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-primary/30 transition-all duration-500 h-full">
									{/* Project Image */}
									<div className="relative h-48 md:h-56 overflow-hidden">
										<div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80 z-10`} />
										<Image
											src={project.image}
											alt={project.title}
											fill
											className="object-cover transition-transform duration-700 group-hover:scale-110"
											sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
										/>
										{/* Overlay with project number */}
										<div className="absolute top-4 left-4 z-20">
											<div className="w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center text-sm font-bold text-primary">
												{String(index + 1).padStart(2, '0')}
											</div>
										</div>
										{/* Tech stack preview on hover */}
										<div className="absolute bottom-4 left-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
											<div className="flex flex-wrap gap-1">
												{project.tags.slice(0, 2).map((tag) => (
													<span
														key={tag}
														className="bg-background/90 backdrop-blur-sm text-foreground px-2 py-1 rounded-md text-xs font-medium"
													>
														{tag}
													</span>
												))}
												{project.tags.length > 2 && (
													<span className="bg-background/90 backdrop-blur-sm text-foreground px-2 py-1 rounded-md text-xs font-medium">
														+{project.tags.length - 2} more
													</span>
												)}
											</div>
										</div>
									</div>

									{/* Project Content */}
									<div className="p-6 space-y-4">
										<div className="space-y-2">
											<h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-primary group-hover:to-purple-600 transition-all duration-500">
												{project.title}
											</h3>
											<p className="text-muted-foreground text-sm md:text-base leading-relaxed">
												{project.description}
											</p>
										</div>

										{/* Tech Stack */}
										<div className="flex flex-wrap gap-2">
											{project.tags.map((tag, tagIndex) => (
												<motion.span
													key={tag}
													initial={{ opacity: 0, scale: 0.8 }}
													whileInView={{ opacity: 1, scale: 1 }}
													transition={{ duration: 0.3, delay: project.delay + 0.1 * tagIndex }}
													viewport={{ once: true }}
													className="bg-secondary/80 text-secondary-foreground px-3 py-1.5 rounded-full text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
												>
													{tag}
												</motion.span>
											))}
										</div>

										{/* Action Button */}
										<div className="pt-2">
											<Button 
												variant="ghost" 
												size="sm" 
												asChild
												className="group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-300 p-0 h-auto"
											>
												<Link href="/work" className="flex items-center gap-2 p-3">
													<span className="font-medium">Explore Project</span>
													<ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
												</Link>
											</Button>
										</div>
									</div>
								</ThreeDCard>
							</motion.div>
						))}
					</div>

					{/* Enhanced CTA Section */}
					<ScrollReveal direction="up" delay={0.5}>
						<motion.div 
							className="text-center relative"
							whileHover={{ scale: 1.02 }}
							transition={{ duration: 0.3 }}
						>
							<div className="relative p-8 rounded-3xl bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10 border border-primary/20 backdrop-blur-sm">
								<div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-600/5 rounded-3xl blur-xl" />
								<div className="relative z-10">
									<h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
										Ready to See More?
									</h3>
									<p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
										Discover the complete collection of my projects, including detailed case studies, 
										technical deep-dives, and live demos.
									</p>
									<Button 
										asChild 
										size="lg"
										className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
									>
										<Link href="/work" className="flex items-center gap-2">
											<span>View Complete Portfolio</span>
											<ArrowRight className="h-5 w-5" />
										</Link>
									</Button>
								</div>
							</div>
						</motion.div>
					</ScrollReveal>
				</div>
			</section>

			<section className="py-16 bg-primary text-primary-foreground">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
						className="text-center max-w-3xl mx-auto"
					>
						<h2 className="text-3xl font-bold mb-4">
							Ready to Start Your Project?
						</h2>
						<p className="text-primary-foreground/80 mb-8">
							I'm currently available for freelance work and exciting
							opportunities. Let's build something amazing together!
						</p>
						<Button variant="secondary" size="lg" asChild>
							<Link href="/contact">Get in Touch</Link>
						</Button>
					</motion.div>
				</div>
			</section>
		</div>
	);
}
