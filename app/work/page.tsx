"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github, Filter, Code, Brain, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "@/components/scroll-reveal";
import AnimatedCard from "@/components/animated-card";
import ThreeDCard from "@/components/3d-card";
import TextAnimation from "@/components/text-animation";
import ClientOnly from "@/components/client-only";
import AnimatedBackground from "@/components/animated-background";
import FloatingIcons from "@/components/floating-icons";

const projects = [
	// AI / Machine Learning Projects
	{
		id: 1,
		title: "CloudMCP",
		description:
			"This system acts as a bridge between AI Agents and multi-cloud environments (AWS, GCP, Azure), enabling standardized communication, orchestration, and deployment. By leveraging the MCP protocol, the server supports agent-driven automation, while the RESTful API layer ensures seamless integration with web frontends (Next.js) and administrator tooling.",
		image: "/projectImages/mcp.webp",
		tags: ["Python", "Flask", "MCP", "MongoDB", "Vercel", "AWS", "GCP", "Azure"],
		liveUrl: "https://github.com/amit-haritwal/Cloud_MCP_Backend",
		category: "ai-ml",
	},
	{
		id: 2,
		title: "ZanzarRotery",
		description:
			"this a ticket booking platform for a envent called zanzar rotery which is a lottery event held in zanzibar every year. The platform allows users to book tickets for the event and also provides an admin panel for managing the event.",
		image: "/projectImages/zanzar.png",
		tags: ["Next.js", "Mode.js", "MongoDB", "Vercel", "AWS"],
		liveUrl: "https://zanzarrotary.com/",
		category: "web-app",
	},
	{
		id: 3,
		title: "MelodyMatch",
		description:
			"Shazam-like real-time audio recognition system using FFT and peak detection. Deployed on Vercel with Flask backend. Can identify songs and retrieve timestamps where specific lyrics occur.",
		image: "/projectImages/music-app.png",
		tags: ["Python", "Flask", "FFT", "MongoDB", "Vercel", "Audio Processing"],
		liveUrl: "https://melodymatch.vercel.app",
		category: "ai-ml",
	},
	{
		id: 4,
		title: "Speaker Diarization Model",
		description:
			"Trained from scratch using VoxCeleb1 dataset. Includes custom feature extraction, embeddings, and clustering. Uses minimal libraries and LoRA fine-tuning.",
		image: "/projectImages/speech-dialiation.avif?height=400&width=600",
		tags: ["Python", "PyTorch", "VoxCeleb1", "LoRA", "Deep Learning", "NLP"],
		liveUrl: "https://github.com/vijay0019/FDS_final_project",
		category: "ai-ml",
	},
	{
		id: 5,
		title: "Playlist Generation AI",
		description:
			"Neural network trained on 1,000 playlists (66,000 songs). Generates playlists from a set of 100 seeder songs. Designed without playlist IDs for seed songs.",
		image: "/projectImages/playlist-rec.jpeg?height=400&width=600",
		tags: ["Python", "Neural Networks", "Machine Learning", "Music AI"],
		liveUrl: "https://github.com/amit-haritwal/spotify-frontend",
		category: "ai-ml",
	},
	{
		id: 6,
		title: "Deep Learning Mail Labeling System",
		description:
			"Classifies emails by assigning a one- or two-word description (not fixed categories). Planned conversion into a browser extension for public use.",
		image: "/projectImages/label-gen.avif?height=400&width=600",
		tags: ["Python", "Deep Learning", "NLP", "Email Classification", "Browser Extension"],
		liveUrl: "https://github.com/amit-haritwal/EmailLabelingBackend",
		category: "ai-ml",
	},
	
	// Web & App Development Projects
	{
		id: 7,
		title: "Thread Cut",
		description:
			"Built with Next.js & Firebase. Custom order placement & retrieval system with speech dilation. Five-member team project focused on specialized components.",
		image: "/projectImages/threadCut.jpg?height=400&width=600",
		tags: ["Next.js", "Firebase", "Team Project", "E-commerce"],
		liveUrl: "https://thread-cut.com",
		category: "web-app",
	},
	{
		id: 8,
		title: "Travel Planner AI Website",
		description:
			"Generates complete car/bike trip itineraries with food stops, photo spots, and attractions. Uses Firebase for storage & Next.js for frontend. Results are location-specific and generated using deep learning.",
		image: "/projectImages/Ai-planner.webp?height=400&width=600",
		tags: ["Next.js", "Firebase", "AI", "Travel Planning", "Deep Learning"],
		liveUrl: "https://github.com/amit-haritwal/tripad-ai",
		category: "web-app",
	},
	{
		id: 9,
		title: "Pi Sequence Search Website",
		description:
			"Searches for an 8-digit sequence within the first 10 billion digits of Pi. Uses indexed storage for ultra-fast retrieval. Features animations & interactive background for better UX.",
		image: "/projectImages/pi-gererater.webp?height=400&width=600",
		tags: ["Next.js", "Indexed Storage", "Mathematics", "Animation", "Search"],
		liveUrl: "https://pi-finder.vercel.app/",
		category: "web-app",
	},
	{
		id: 10,
		title: "Portfolio Website",
		description:
			"Modern Next.js portfolio website built with Framer animations. Responsive, modern design with interactive UI and smooth transitions.",
		image: "/projectImages/portfolio.png?height=400&width=600",
		tags: ["Next.js", "Framer Motion", "Tailwind CSS", "Responsive Design"],
		liveUrl: "https://amit-haritwal.vercel.app",
		category: "web-app",
	},
	{
		id: 11,
		title: "Hotel Website (SkyInn)",
		description:
			"Created a MERN Stack hotel booking and food ordering platform supporting 500+ concurrent users, with Socket.io for real-time updates and Redux ensuring 25% improved data consistency.",
		image: "/projectImages/skyInn.jpg?height=400&width=600",
		tags: ["React", "Node.js", "Socket.io", "PostgreSQL", "Redux"],
		liveUrl: "https://hotel-sky-inn-front-end-amit-haritwal.vercel.app/",
		category: "web-app",
	},
	{
		id: 12,
		title: "Salon Port",
		description:
			"A dashboard for tracking salons, expenses, and investments with data visualization and comprehensive business analytics.",
		image: "/projectImages/salon.jpg?height=400&width=600",
		tags: ["Flask", "SCSS", "MongoDB", "Data Visualization"],
		liveUrl: "https://github.com/amit-haritwal/SalonPort",
		category: "web-app",
	},

	// Computer Vision / OCR Projects
	{
		id: 13,
		title: "Publix Bill Scanner",
		description:
			"Captures bill images, runs OCR, and extracts itemized data. Displays extracted info in a local web app for easy expense tracking.",
		image: "/projectImages/publix-bill-scanner.webp?height=400&width=600",
		tags: ["Python", "OCR", "Computer Vision", "OpenCV", "Flask"],
		liveUrl: "https://github.com/amit-haritwal",
		category: "cv-ocr",
	},

	// Systems & Tools
	{
		id: 14,
		title: "Custom Version Control System",
		description:
			"Git-like version control system implementing add, merge, commit, and push features. Built from scratch to understand Git internals and distributed version control.",
		image: "/projectImages/git-version.png?height=400&width=600",
		tags: ["Python", "Git", "Version Control", "System Design", "Data Structures"],
		liveUrl: "https://github.com/amit-haritwal",
		category: "systems",
	},
];

export default function WorkPage() {
	const [activeFilter, setActiveFilter] = useState("all");
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const filteredProjects = projects.filter(project => {
		if (activeFilter === "all") return true;
		return project.category === activeFilter;
	});

	const filterButtons = [
		{ id: "all", label: "All Projects" },
		{ id: "ai-ml", label: "AI / ML" },
		{ id: "web-app", label: "Web & Apps" },
		{ id: "cv-ocr", label: "Computer Vision" },
		{ id: "systems", label: "Systems & Tools" },
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
			{/* Animated background with ClientOnly wrapper */}
			<ClientOnly>
				<AnimatedBackground />
				<FloatingIcons count={6} />
			</ClientOnly>

			<div className="container ">
				{/* Hero Section */}
				<section className="pt-32 pb-16 md:pt-40 md:pb-24">
					<div className="text-center">
						<ClientOnly fallback={
							<h1 className="text-4xl md:text-5xl font-bold mb-6">My Work</h1>
						}>
							<TextAnimation
								text="My Work"
								type="reveal"
								className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent"
							/>
						</ClientOnly>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed"
						>
							Explore my portfolio of projects spanning AI/ML, web development, computer vision, and systems programming.
							Each project showcases innovative solutions with cutting-edge technologies for collaborative features.
						</motion.p>

						{/* Project Statistics */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.3 }}
							className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-3xl mx-auto mb-12"
						>
							<div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4 hover:shadow-lg transition-all duration-300">
								<div className="text-2xl md:text-3xl font-bold text-primary">{projects.length}</div>
								<div className="text-sm text-muted-foreground">Total Projects</div>
							</div>
							<div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4 hover:shadow-lg transition-all duration-300">
								<div className="text-2xl md:text-3xl font-bold text-green-500">{projects.filter(p => p.category === 'ai-ml').length}</div>
								<div className="text-sm text-muted-foreground">AI/ML Projects</div>
							</div>
							<div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4 hover:shadow-lg transition-all duration-300">
								<div className="text-2xl md:text-3xl font-bold text-blue-500">{projects.filter(p => p.category === 'web-app').length}</div>
								<div className="text-sm text-muted-foreground">Web Apps</div>
							</div>
							<div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4 hover:shadow-lg transition-all duration-300">
								<div className="text-2xl md:text-3xl font-bold text-purple-500">{Array.from(new Set(projects.flatMap(p => p.tags))).length}</div>
								<div className="text-sm text-muted-foreground">Technologies</div>
							</div>
							<div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4 hover:shadow-lg transition-all duration-300">
								<div className="text-2xl md:text-3xl font-bold text-red-500">500k +</div>
								<div className="text-sm text-muted-foreground">Lines of Code</div>
							</div>
						</motion.div>

						{/* Search Bar */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.35 }}
							className="max-w-md mx-auto mb-8"
						>
							<div className="relative">
								<input
									type="text"
									placeholder="Search projects..."
									className="w-full px-4 py-3 pl-10 pr-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
									onChange={(e) => {
										// You can implement search functionality here
										console.log('Search:', e.target.value);
									}}
								/>
								<Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
							</div>
						</motion.div>

						{/* Enhanced Filter Buttons with Icons */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.4 }}
							className="flex flex-wrap justify-center gap-4 mb-8"
						>
							{filterButtons.map((filter, index) => {
								const getFilterIcon = (id: string) => {
									switch(id) {
										case 'ai-ml': return <Brain className="h-4 w-4" />;
										case 'web-app': return <Globe className="h-4 w-4" />;
										case 'cv-ocr': return <Code className="h-4 w-4" />;
										case 'systems': return <Code className="h-4 w-4" />;
										default: return <Filter className="h-4 w-4" />;
									}
								};

								return (
									<motion.div
										key={filter.id}
										initial={{ opacity: 0, scale: 0.8 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ delay: 0.5 + index * 0.1 }}
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
									>
										<Button
											variant={activeFilter === filter.id ? "default" : "outline"}
											onClick={() => setActiveFilter(filter.id)}
											className={`rounded-full px-6 py-2.5 transition-all duration-300 flex items-center gap-2 ${
												activeFilter === filter.id 
													? "bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg" 
													: "hover:bg-primary/10 hover:border-primary/50"
											}`}
										>
											{getFilterIcon(filter.id)}
											{filter.label}
										</Button>
									</motion.div>
								);
							})}
						</motion.div>

						{/* Active Filter Results Counter */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.3 }}
							className="mb-16"
						>
							<div className="inline-flex items-center gap-2 bg-muted/50 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-muted-foreground">
								<span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
								Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
								{activeFilter !== 'all' && (
									<span>
										in <span className="text-primary font-medium">
											{filterButtons.find(f => f.id === activeFilter)?.label}
										</span>
									</span>
								)}
							</div>
						</motion.div>
					</div>
				</section>

				{/* Projects Section */}
				<ScrollReveal>
					<section className="pb-16">
						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
							{filteredProjects.map((project, index) => (
								<motion.div
									key={project.id}
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.6, delay: index * 0.1 }}
									whileHover={{ y: -8 }}
									className="group"
								>
									<ThreeDCard className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-primary/30 transition-all duration-500 h-full">
										{/* Project Image */}
										<div className="relative h-48 md:h-56 overflow-hidden">
											<div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-600/10 opacity-80 z-10" />
											<Image
												src={project.image}
												alt={project.title}
												className="object-cover transition-transform duration-700 group-hover:scale-110"
												fill
												sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
											/>
											{/* Project Category Badge */}
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
														transition={{ duration: 0.3, delay: 0.1 * tagIndex }}
														viewport={{ once: true }}
														className="bg-secondary/80 text-secondary-foreground px-3 py-1.5 rounded-full text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
													>
														{tag}
													</motion.span>
												))}
											</div>

											{/* Action Button */}
											<div className="pt-2">
												<div className="flex gap-3">
													<Button 
														variant="ghost" 
														size="sm" 
														asChild
														className="group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-300 p-0 h-auto flex-1"
													>
														<Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3">
															<ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
															<span className="font-medium">Live Demo</span>
														</Link>
													</Button>
													{/* <Button 
														variant="outline" 
														size="sm" 
														asChild
														className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
													>
														<Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-3">
															<Github className="h-4 w-4" />
														</Link>
													</Button> */}
												</div>
											</div>
										</div>
									</ThreeDCard>
								</motion.div>
							))}
						</div>
					</section>
				</ScrollReveal>

				{/* Enhanced Integration Section */}
				<ScrollReveal>
					<section className="py-16 md:py-24">
						<motion.div 
							className="relative"
							whileHover={{ scale: 1.02 }}
							transition={{ duration: 0.3 }}
						>
							<div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 border border-primary/20 backdrop-blur-sm text-center">
								<div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-600/5 rounded-3xl blur-xl" />
								<div className="relative z-10 max-w-3xl mx-auto">
									<motion.div
										initial={{ opacity: 0, scale: 0.9 }}
										whileInView={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.6 }}
										viewport={{ once: true }}
										className="inline-block mb-4"
									>
										<Badge variant="secondary" className="text-sm px-4 py-2 bg-gradient-to-r from-primary/20 to-purple-600/20 border-primary/30">
											Collaborative Development
										</Badge>
									</motion.div>
									<h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
										Enhanced with Modern Tech
									</h2>
									<p className="text-muted-foreground text-lg leading-relaxed mb-8">
										Many of these projects integrate modern technology for collaborative features, 
										enabling real-time multi-user interactions, synchronized content editing, 
										and seamless team workflows in modern web applications.
									</p>
									<div className="flex flex-wrap justify-center gap-3 mb-8">
										{["Real-time Collaboration", "Multi-user Editing", "Synchronized Updates", "Team Workflows"].map((feature, index) => (
											<motion.div
												key={feature}
												initial={{ opacity: 0, y: 10 }}
												whileInView={{ opacity: 1, y: 0 }}
												transition={{ duration: 0.3, delay: index * 0.1 }}
												viewport={{ once: true }}
											>
												<Badge variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default">
													{feature}
												</Badge>
											</motion.div>
										))}
									</div>
									<Button 
										asChild 
										size="lg" 
										className="group bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
									>
										<Link href="/contact">
											Let's Collaborate
											<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
										</Link>
									</Button>
								</div>
							</div>
						</motion.div>
					</section>
				</ScrollReveal>
			</div>
		</div>
	);
}
