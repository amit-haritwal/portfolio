"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/scroll-reveal";
import AnimatedCard from "@/components/animated-card";
import TextAnimation from "@/components/text-animation";

const projects = [
	{
		id: 1,
		title: "Thread Cut",
		description:
			"A full-featured online store with payment processing, user authentication, and inventory management.",
		image: "/placeholder.svg?height=400&width=600",
		tags: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
		githubUrl: "https://github.com",
		liveUrl: "https://thread-cut.com",
	},
	{
		id: 2,
		title: "Hotel Website",
		description:
			"Created a MERN Stack hotel booking and food ordering platform supporting 500+ concurrent users, with Socket.io for real-time updates and Redux ensuring 25% improved data consistency.",
		image: "/placeholder.svg?height=400&width=600",
		tags: ["React", "Node.js", "Socket.io", "PostgreSQL"],
		githubUrl: "https://github.com",
		liveUrl: "https://hotel-sky-inn-front-end-amit-haritwal.vercel.app/",
	},
	{
		id: 3,
		title: "Salon Port",
		description:
			"A dashboard for tracking salons, expenses, and investments with data visualization.",
		image: "/placeholder.svg?height=400&width=600",
		tags: ["Flask", "SCSS", "MongoDB"],
		githubUrl: "https://github.com/amit-haritwal/SalonPort",
		liveUrl: "https://github.com/amit-haritwal/SalonPort",
	},
	// {
	// 	id: 4,
	// 	title: "Social Media Platform",
	// 	description:
	// 		"A social networking platform with user profiles, posts, comments, and real-time notifications.",
	// 	image: "/placeholder.svg?height=400&width=600",
	// 	tags: ["Next.js", "GraphQL", "PostgreSQL", "Redis"],
	// 	githubUrl: "https://github.com",
	// 	liveUrl: "https://example.com",
	// },
	// {
	// 	id: 5,
	// 	title: "Weather Application",
	// 	description:
	// 		"A weather forecast application with location detection and interactive maps.",
	// 	image: "/placeholder.svg?height=400&width=600",
	// 	tags: ["React", "OpenWeatherAPI", "Mapbox", "Tailwind CSS"],
	// 	githubUrl: "https://github.com",
	// 	liveUrl: "https://example.com",
	// },
	// {
	// 	id: 6,
	// 	title: "Content Management System",
	// 	description:
	// 		"A custom CMS for managing blog posts, pages, and media with a user-friendly interface.",
	// 	image: "/placeholder.svg?height=400&width=600",
	// 	tags: ["Next.js", "Prisma", "PostgreSQL", "AWS S3"],
	// 	githubUrl: "https://github.com",
	// 	liveUrl: "https://example.com",
	// },
];

export default function WorkPage() {
	return (
		<div className="pt-32 pb-16">
			<div className="container mx-auto px-4">
				<section className="mb-16">
					<TextAnimation
						text="My Work"
						type="reveal"
						className="text-4xl md:text-5xl font-bold mb-6 text-center"
					/>

					<ScrollReveal direction="up" delay={0.2}>
						<p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-12">
							Explore my portfolio of projects that showcase my skills and
							expertise in full stack development. Each project represents a
							unique challenge and solution.
						</p>
					</ScrollReveal>

					{/* Filter Buttons - Could be made functional with state */}
					<ScrollReveal direction="up" delay={0.4}>
						<div className="flex flex-wrap justify-center gap-4 mb-12">
							<Button variant="default">All Projects</Button>
							<Button variant="outline">Next.js</Button>
							<Button variant="outline">React.js</Button>
							<Button variant="outline">Flask</Button>
							<Button variant="outline">Html</Button>
						</div>
					</ScrollReveal>
				</section>

				<section>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{projects.map((project, index) => (
							<ScrollReveal
								key={project.id}
								delay={index * 0.1}
								direction={
									index % 3 === 0 ? "left" : index % 3 === 2 ? "right" : "up"
								}
							>
								<AnimatedCard
									hoverEffect="tilt"
									className="bg-card border rounded-lg overflow-hidden group"
								>
									<div className="relative h-64 overflow-hidden">
										<Image
											src={project.image || "/placeholder.svg"}
											alt={project.title}
											width={600}
											height={400}
											className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
										/>
										<motion.div
											className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4"
											initial={{ opacity: 0 }}
											whileHover={{ opacity: 1 }}
											transition={{ duration: 0.3 }}
										>
											<motion.div
												initial={{ scale: 0 }}
												whileHover={{ scale: 1 }}
												transition={{ delay: 0.1 }}
											>
												<Button size="sm" variant="secondary" asChild>
													<a
														href={project.githubUrl}
														target="_blank"
														rel="noopener noreferrer"
													>
														<Github className="mr-2 h-4 w-4" /> Code
													</a>
												</Button>
											</motion.div>
											<motion.div
												initial={{ scale: 0 }}
												whileHover={{ scale: 1 }}
												transition={{ delay: 0.2 }}
											>
												<Button size="sm" variant="secondary" asChild>
													<a
														href={project.liveUrl}
														target="_blank"
														rel="noopener noreferrer"
													>
														<ExternalLink className="mr-2 h-4 w-4" /> Live Demo
													</a>
												</Button>
											</motion.div>
										</motion.div>
									</div>
									<div className="p-6">
										<h3 className="text-xl font-bold mb-2">{project.title}</h3>
										<p className="text-muted-foreground mb-4">
											{project.description}
										</p>
										<div className="flex flex-wrap gap-2 mb-4">
											{project.tags.map((tag) => (
												<motion.span
													key={tag}
													className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
													whileHover={{
														scale: 1.05,
														backgroundColor: "var(--primary)",
													}}
												>
													{tag}
												</motion.span>
											))}
										</div>
										<Button variant="outline" size="sm" asChild>
											<Link target="_" href={project.liveUrl}>
												<motion.span
													className="flex items-center"
													whileHover={{ x: 5 }}
													transition={{ type: "spring", stiffness: 400 }}
												>
													View Details <ArrowRight className="ml-2 h-4 w-4" />
												</motion.span>
											</Link>
										</Button>
									</div>
								</AnimatedCard>
							</ScrollReveal>
						))}
					</div>
				</section>

				{/* Call to Action */}
				<section className="mt-20">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
						className="bg-muted rounded-lg p-8 md:p-12 text-center"
					>
						<h2 className="text-2xl md:text-3xl font-bold mb-4">
							Interested in working together?
						</h2>
						<p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
							I'm always open to discussing new projects, creative ideas or
							opportunities to be part of your vision.
						</p>
						<Button size="lg" asChild>
							<Link href="/contact">
								Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
					</motion.div>
				</section>
			</div>
		</div>
	);
}
