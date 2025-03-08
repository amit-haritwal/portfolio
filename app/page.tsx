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

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen">
			<AnimatedBackground />
			<FloatingIcons count={12} />

			<section className="pt-32 pb-16 md:pt-40 md:pb-24">
				<div className="container mx-auto px-4">
					<div className="flex flex-col md:flex-row items-center">
						<div className="md:w-1/2 mb-12 md:mb-0">
							<TextAnimation
								text="Full Stack Developer"
								type="reveal"
								className="text-4xl md:text-6xl font-bold mb-2"
							/>
							<TextAnimation
								text="Building Digital Experiences"
								type="typing"
								className="text-4xl md:text-6xl font-bold text-primary mb-6"
								delay={1}
							/>

							<motion.p
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.2 }}
								className="text-xl text-muted-foreground mb-8 max-w-lg"
							>
								I create modern, responsive web applications with cutting-edge
								technologies and exceptional user experiences.
							</motion.p>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.4 }}
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
						</div>

						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.7 }}
							className="md:w-1/2 w-full"
						>
							<div className="relative">
								<div className="w-full h-80 md:h-96 bg-gradient-to-br from-primary/20 to-secondary rounded-lg flex items-center justify-center">
									<motion.div
										animate={{
											rotate: [0, 10, 0, -10, 0],
											y: [0, -10, 0, 10, 0],
										}}
										transition={{
											repeat: Number.POSITIVE_INFINITY,
											duration: 8,
											ease: "easeInOut",
										}}
									>
										<Code className="w-32 h-32 text-primary" />
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

			<section className="py-16 bg-muted">
				<div className="container mx-auto px-4">
					<ScrollReveal>
						<h2 className="text-3xl font-bold text-center mb-6">
							My Tech Stack
						</h2>
						<p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
							I work with a variety of technologies to build modern, scalable,
							and robust applications.
						</p>
					</ScrollReveal>

					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
						{[
							{
								name: "React",
								icon: "/tech-logos/react.svg",
								color: "#61DAFB",
								category: "Frontend",
							},
							{
								name: "Next.js",
								icon: "/tech-logos/next.svg",
								color: "#000000",
								category: "Frontend",
							},
							{
								name: "TypeScript",
								icon: "/tech-logos/typescript.svg",
								color: "#3178C6",
								category: "Language",
							},
							{
								name: "JavaScript",
								icon: "/tech-logos/javascript.svg",
								color: "#F7DF1E",
								category: "Language",
							},
							{
								name: "Node.js",
								icon: "/tech-logos/nodejs.svg",
								color: "#339933",
								category: "Backend",
							},
							{
								name: "Express",
								icon: "/tech-logos/express.svg",
								color: "#000000",
								category: "Backend",
							},
							{
								name: "MongoDB",
								icon: "/tech-logos/mongodb.svg",
								color: "#47A248",
								category: "Database",
							},
							{
								name: "PostgreSQL",
								icon: "/tech-logos/postgresql.svg",
								color: "#336791",
								category: "Database",
							},
							{
								name: "Tailwind CSS",
								icon: "/tech-logos/tailwindcss.svg",
								color: "#06B6D4",
								category: "Frontend",
							},
							{
								name: "Docker",
								icon: "/tech-logos/docker.svg",
								color: "#2496ED",
								category: "DevOps",
							},
							{
								name: "AWS",
								icon: "/tech-logos/aws.svg",
								color: "#FF9900",
								category: "Cloud",
							},
							{
								name: "Framer",
								icon: "/tech-logos/framer.svg",
								color: "#2496ED",
								category: "Frontend",
							},
						].map((tech, index) => (
							<ScrollReveal
								key={tech.name}
								delay={index * 0.05}
								direction={index % 2 === 0 ? "left" : "right"}
							>
								<motion.div
									whileHover={{
										y: -5,
										boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
									}}
									className="bg-card border rounded-lg p-6 flex flex-col items-center justify-center transition-all"
								>
									<div className="w-16 h-16 mb-4 flex items-center justify-center">
										<Image
											src={tech.icon || "/placeholder.svg"}
											alt={tech.name}
											width={48}
											height={48}
											className="object-contain"
										/>
									</div>
									<h3 className="text-lg font-semibold text-center">
										{tech.name}
									</h3>
									<span className="text-xs text-muted-foreground mt-1 px-2 py-1 bg-secondary rounded-full">
										{tech.category}
									</span>
								</motion.div>
							</ScrollReveal>
						))}
					</div>
				</div>
			</section>

			<section className="py-16">
				<div className="container mx-auto px-4">
					<ScrollReveal>
						<motion.div className="text-center mb-16">
							<h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
							<p className="text-muted-foreground max-w-2xl mx-auto">
								Check out some of my recent work. These projects showcase my
								skills and expertise in full stack development.
							</p>
						</motion.div>
					</ScrollReveal>

					<div className="grid md:grid-cols-2 gap-8">
						{[
							{
								title: "Thread Cut",
								description:
									"A full-featured online store with payment processing, user authentication, and inventory management.",
								tags: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
							},
							{
								title: "Hotel Website",
								description:
									"Created a MERN Stack hotel booking and food ordering platform supporting 500+ concurrent users, with Socket.io for real-time updates and Redux ensuring 25% improved data consistency.",
								tags: ["React", "Node.js", "Socket.io", "PostgreSQL"],
							},
						].map((project, index) => (
							<ThreeDCard
								key={project.title}
								className="bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-shadow h-full"
							>
								<div className="h-64 bg-muted flex items-center justify-center">
									<Code className="h-16 w-16 text-muted-foreground" />
								</div>
								<div className="p-6">
									<h3 className="text-xl font-bold mb-2">{project.title}</h3>
									<p className="text-muted-foreground mb-4">
										{project.description}
									</p>
									<div className="flex flex-wrap gap-2 mb-4">
										{project.tags.map((tag) => (
											<span
												key={tag}
												className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
											>
												{tag}
											</span>
										))}
									</div>
									<Button variant="outline" size="sm" asChild>
										<Link href="/work">
											View Details <ArrowRight className="ml-2 h-4 w-4" />
										</Link>
									</Button>
								</div>
							</ThreeDCard>
						))}
					</div>

					<ScrollReveal direction="up" delay={0.4}>
						<div className="text-center mt-12">
							<Button asChild>
								<Link href="/work">
									View All Projects <ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</Button>
						</div>
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
