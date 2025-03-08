"use client";

import { motion } from "framer-motion";
import {
	ArrowRight,
	Award,
	BookOpen,
	Briefcase,
	GraduationCap,
	Globe,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/scroll-reveal";
import ParallaxSection from "@/components/parallax-section";
import AnimatedCounter from "@/components/animated-counter";
import TextAnimation from "@/components/text-animation";

export default function AboutPage() {
	return (
		<div className="pt-32 pb-16">
			<div className="container mx-auto px-4">
				<section className="mb-20">
					<TextAnimation
						text="Amit Haritwal"
						type="wave"
						className="text-4xl md:text-5xl font-bold mb-6 text-center"
					/>

					<div className="flex flex-col md:flex-row items-center gap-12">
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.7 }}
							className="md:w-1/3"
						>
							<div className="relative">
								<div className="w-64 h-64 mx-auto overflow-hidden rounded-full border-4 border-primary">
									<Image
										src="/profile.jpg?height=256&width=256"
										alt="Developer Portrait"
										width={256}
										height={256}
										className="object-cover"
									/>
								</div>
								<motion.div
									className="absolute -bottom-4 -right-4 bg-background p-3 rounded-full shadow-lg"
									animate={{
										y: [0, -10, 0],
										rotate: [0, 10, 0],
									}}
									transition={{
										repeat: Number.POSITIVE_INFINITY,
										duration: 5,
										ease: "easeInOut",
									}}
								>
									<Award className="w-8 h-8 text-primary" />
								</motion.div>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.7 }}
							className="md:w-2/3"
						>
							<h2 className="text-2xl font-bold mb-4">
								Full Stack Developer & UI/UX Enthusiast
							</h2>
							<p className="text-muted-foreground mb-6">
								Hello! I'm a passionate full stack developer with over 5 years
								of experience building modern web applications. I specialize in
								creating responsive, user-friendly interfaces and robust backend
								systems.
							</p>
							<p className="text-muted-foreground mb-6">
								My journey in web development began when I built my first
								website at the age of 18. Since then, I've worked with startups
								and established companies to deliver high-quality digital
								products that solve real-world problems.
							</p>
							<div className="flex flex-wrap gap-4">
								<Button asChild>
									<Link href="/contact">
										Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
									</Link>
								</Button>
								<Button variant="outline" asChild>
									<a href="/resume.pdf" download>
										Download Resume
									</a>
								</Button>
							</div>
						</motion.div>
					</div>
				</section>

				{/* Skills Section */}
				<section className="mb-20">
					<ScrollReveal>
						<h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>
					</ScrollReveal>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{[
							{
								title: "Frontend Development",
								skills: [
									"React",
									"Next.js",
									"TypeScript",
									"Tailwind CSS",
									"Framer Motion",
									"Redux",
								],
							},
							{
								title: "Backend Development",
								skills: [
									"Node.js",
									"Express",
									"NestJS",
									"GraphQL",
									"REST API",
									"WebSockets",
								],
							},
							{
								title: "Database & DevOps",
								skills: [
									"MongoDB",
									"PostgreSQL",
									"Redis",
									"Docker",
									"AWS",
									"CI/CD",
								],
							},
						].map((category, index) => (
							<ScrollReveal
								key={category.title}
								delay={index * 0.2}
								direction={index % 2 === 0 ? "left" : "right"}
							>
								<motion.div
									whileHover={{ y: -10 }}
									className="bg-card border rounded-lg p-6 hover:shadow-md transition-shadow"
								>
									<h3 className="text-xl font-bold mb-4">{category.title}</h3>
									<ul className="space-y-2">
										{category.skills.map((skill, skillIndex) => (
											<motion.li
												key={skill}
												className="flex items-center"
												initial={{ opacity: 0, x: -20 }}
												animate={{ opacity: 1, x: 0 }}
												transition={{ delay: 0.5 + skillIndex * 0.1 }}
											>
												<motion.div
													className="w-2 h-2 bg-primary rounded-full mr-2"
													animate={{ scale: [1, 1.5, 1] }}
													transition={{
														duration: 1,
														repeat: Number.POSITIVE_INFINITY,
														repeatDelay: 1,
													}}
												></motion.div>
												{skill}
											</motion.li>
										))}
									</ul>
								</motion.div>
							</ScrollReveal>
						))}
					</div>
				</section>

				{/* Stats Section */}
				<ParallaxSection className="mb-20 py-16 bg-muted rounded-lg">
					<div className="container mx-auto px-4">
						<ScrollReveal>
							<h2 className="text-3xl font-bold mb-12 text-center">
								By the Numbers
							</h2>
						</ScrollReveal>

						<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
							{[
								{ value: 5, label: "Years Experience" },
								{ value: 10, label: "Projects Completed" },
								{ value: 4, label: "Happy Clients" },
								{ value: 20, label: "Coffee Cups" },
							].map((stat, index) => (
								<ScrollReveal key={stat.label} delay={index * 0.1}>
									<div className="p-4">
										<AnimatedCounter
											end={stat.value}
											className="text-4xl md:text-5xl font-bold text-primary mb-2"
											suffix={stat.label === "Coffee Cups" ? "+" : ""}
										/>
										<p className="text-muted-foreground">{stat.label}</p>
									</div>
								</ScrollReveal>
							))}
						</div>
					</div>
				</ParallaxSection>

				{/* Experience Section */}
				<section className="mb-20">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
						className="text-3xl font-bold mb-12 text-center"
					>
						Experience & Education
					</motion.h2>

					<div className="grid md:grid-cols-2 gap-12">
						<div>
							<div className="flex items-center mb-8">
								<Briefcase className="w-6 h-6 mr-2 text-primary" />
								<h3 className="text-2xl font-bold">Work Experience</h3>
							</div>

							<div className="space-y-8">
								<motion.div
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5 }}
									viewport={{ once: true }}
									className="border-l-2 border-primary pl-6 relative"
								>
									<div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
									<h4 className="text-xl font-semibold">
										Senior Full Stack Developer
									</h4>
									<p className="text-muted-foreground">
										Global Lancers | September 2023 - June 2024
									</p>
									<p className="mt-2">
										Led development of multiple web applications using React,
										Next.js, and Node.js. Implemented CI/CD pipelines and
										mentored junior developers.
									</p>
								</motion.div>

								<motion.div
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5, delay: 0.2 }}
									viewport={{ once: true }}
									className="border-l-2 border-primary pl-6 relative"
								>
									<div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
									<h4 className="text-xl font-semibold">
										Full Stack Developer
									</h4>
									<p className="text-muted-foreground">
										Imonology | March 2023 - May 2023
									</p>
									<p className="mt-2">
										Developed and maintained client websites and web
										applications. Worked with React, Express, and MongoDB to
										create scalable solutions.
									</p>
								</motion.div>

								<motion.div
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5, delay: 0.4 }}
									viewport={{ once: true }}
									className="border-l-2 border-primary pl-6 relative"
								>
									<div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
									<h4 className="text-xl font-semibold">Frontend Developer</h4>
									<p className="text-muted-foreground">
										Appykan | August 2022 - August 2023
									</p>
									<p className="mt-2">
										Built responsive user interfaces using React and CSS.
										Collaborated with designers to implement pixel-perfect
										designs.
									</p>
								</motion.div>
							</div>
						</div>

						<div>
							<div className="flex items-center mb-8">
								<GraduationCap className="w-6 h-6 mr-2 text-primary" />
								<h3 className="text-2xl font-bold">Education</h3>
							</div>

							<div className="space-y-8">
								<motion.div
									initial={{ opacity: 0, x: 20 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5 }}
									viewport={{ once: true }}
									className="border-l-2 border-primary pl-6 relative"
								>
									<div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
									<h4 className="text-xl font-semibold">
										Master's in Computer Science
									</h4>
									<p className="text-muted-foreground">
										University of Alabama at Birmingham | 2024 - 2026
									</p>
									<p className="mt-2">
										Specialized in Web Technologies and Software Engineering.
									</p>
								</motion.div>

								<motion.div
									initial={{ opacity: 0, x: 20 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5, delay: 0.2 }}
									viewport={{ once: true }}
									className="border-l-2 border-primary pl-6 relative"
								>
									<div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
									<h4 className="text-xl font-semibold">
										Bachelor's in Computer Science
									</h4>
									<p className="text-muted-foreground">
										Poornima College of Engineering | 2018 - 2022
									</p>
									<p className="mt-2">
										Focused on programming fundamentals, data structures, and
										algorithms. Participated in coding competitions.
									</p>
								</motion.div>

								<motion.div
									initial={{ opacity: 0, x: 20 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5, delay: 0.4 }}
									viewport={{ once: true }}
									className="border-l-2 border-primary pl-6 relative"
								>
									<div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
									<h4 className="text-xl font-semibold">
										Online Certifications
									</h4>
									<p className="text-muted-foreground">
										Various Platforms | 2016 - Present
									</p>
									<p className="mt-2">
										Continuously learning through platforms like Coursera,
										Udemy, and freeCodeCamp. Certified in React, and Node.js.
									</p>
								</motion.div>
							</div>
						</div>
					</div>
				</section>

				{/* Personal Interests */}
				<section>
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
						className="text-3xl font-bold mb-12 text-center"
					>
						When I'm Not Coding
					</motion.h2>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{[
							{
								icon: <BookOpen className="w-10 h-10 text-primary" />,
								title: "Reading",
								description:
									"I enjoy reading books on technology, science fiction, and personal development.",
							},
							{
								icon: <Globe className="w-10 h-10 text-primary" />,
								title: "Traveling",
								description:
									"Exploring new places and experiencing different cultures broadens my perspective.",
							},
							{
								icon: <Award className="w-10 h-10 text-primary" />,
								title: "Open Source",
								description:
									"I contribute to open source projects and believe in giving back to the community.",
							},
						].map((interest, index) => (
							<motion.div
								key={interest.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.2 }}
								viewport={{ once: true }}
								className="bg-card border rounded-lg p-6 text-center hover:shadow-md transition-shadow"
							>
								<div className="flex justify-center mb-4">{interest.icon}</div>
								<h3 className="text-xl font-semibold mb-2">{interest.title}</h3>
								<p className="text-muted-foreground">{interest.description}</p>
							</motion.div>
						))}
					</div>
				</section>
			</div>
		</div>
	);
}
