"use client";

import { motion } from "framer-motion";
import {
	ArrowRight,
	Award,
	BookOpen,
	Briefcase,
	GraduationCap,
	Globe,
	Code2,
	Zap,
	Heart,
	Star,
	Sparkles,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "@/components/scroll-reveal";
import ParallaxSection from "@/components/parallax-section";
import AnimatedCounter from "@/components/animated-counter";
import TextAnimation from "@/components/text-animation";

export default function AboutPage() {
	return (
		<div className=" pb-16 min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
			<div className="container mx-auto px-4">
				{/* Hero Section */}
				<section className="mb-24">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center mb-16"
					>
						<TextAnimation
							text="About Me"
							type="wave"
							className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent"
						/>
						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.5, duration: 0.8 }}
							className="text-xl text-muted-foreground max-w-2xl mx-auto"
						>
							Passionate developer crafting exceptional digital experiences with cutting-edge technologies
						</motion.p>
					</motion.div>

					<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="lg:w-1/3 flex-shrink-0"
						>
							<div className="relative group max-w-sm mx-auto">
								<div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
								<div className="relative w-64 h-64 lg:w-80 lg:h-80 mx-auto overflow-hidden rounded-full border-4 border-background bg-background">
									<Image
										src="/profile.jpg?height=320&width=320"
										alt="Amit Haritwal - Full Stack Developer"
										width={320}
										height={320}
										className="object-cover transition-transform group-hover:scale-110 duration-500 w-full h-full"
									/>
								</div>
								<motion.div
									className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-primary p-3 lg:p-4 rounded-full shadow-2xl"
									animate={{
										y: [0, -8, 0],
										rotate: [0, 5, 0],
									}}
									transition={{
										repeat: Number.POSITIVE_INFINITY,
										duration: 4,
										ease: "easeInOut",
									}}
								>
									<Code2 className="w-6 h-6 lg:w-8 lg:h-8 text-primary-foreground" />
								</motion.div>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}
							className="lg:w-2/3 space-y-6 max-w-none"
						>
							<div className="bg-card/50 backdrop-blur-sm border rounded-xl p-6 lg:p-8 shadow-xl">
								<motion.h2 
									className="text-2xl lg:text-3xl font-bold mb-6 flex items-center gap-3"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 0.6 }}
								>
									<Sparkles className="w-6 h-6 lg:w-8 lg:h-8 text-primary flex-shrink-0" />
									Amit Haritwal
								</motion.h2>
								
								<div className="flex flex-wrap gap-2 mb-6">
									{["Full Stack Developer", "UI/UX Enthusiast", "AI/ML Explorer", "Open Source Contributor"].map((title, index) => (
										<motion.div
											key={title}
											initial={{ opacity: 0, scale: 0.8 }}
											animate={{ opacity: 1, scale: 1 }}
											transition={{ delay: 0.8 + index * 0.1 }}
										>
											<Badge variant="secondary" className="text-xs lg:text-sm px-2 py-1">
												{title}
											</Badge>
										</motion.div>
									))}
								</div>

								<motion.div 
									className="space-y-4 text-muted-foreground"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 1 }}
								>
									<p className="leading-relaxed text-sm lg:text-base">
										Hello! I'm a passionate full stack developer with over 5 years of experience building modern web applications. I specialize in creating responsive, user-friendly interfaces and robust backend systems using cutting-edge technologies.
									</p>
									<p className="leading-relaxed text-sm lg:text-base">
										My journey began when I built my first website at 18, and since then I've worked with startups and established companies to deliver high-quality digital products. I'm particularly excited about working with modern reactive text processing libraries that enable real-time collaborative editing and dynamic content rendering.
									</p>
									<p className="leading-relaxed text-sm lg:text-base">
										Currently pursuing my Master's in Computer Science at UAB, I'm constantly exploring new technologies like AI/ML, advanced React patterns, and modern DevOps practices.
									</p>
								</motion.div>

								<motion.div 
									className="flex flex-col sm:flex-row gap-4 mt-8"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 1.2 }}
								>
									<Button asChild size="lg" className="group">
										<Link href="/contact">
											Get in Touch 
											<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
										</Link>
									</Button>
									<Button variant="outline" size="lg" asChild>
										<a href="/resume.pdf" download>
											Download Resume
										</a>
									</Button>
								</motion.div>
							</div>
						</motion.div>
					</div>
				</section>

				{/* Skills Section */}
				<section className="mb-24">
					<ScrollReveal>
						<div className="text-center mb-16">
							<h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
								Technical Expertise
							</h2>
							<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
								Specialized in modern technologies and cutting-edge tools to build exceptional digital experiences
							</p>
						</div>
					</ScrollReveal>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
						{[
							{
								title: "Frontend Development",
								icon: <Code2 className="w-6 h-6" />,
								skills: [
									"React & Next.js",
									"TypeScript",
									"Tailwind CSS",
									"Framer Motion",
									"Redux Toolkit",
									"React Query",
								],
								color: "from-blue-500 to-cyan-500",
							},
							{
								title: "Backend Development",
								icon: <Zap className="w-6 h-6" />,
								skills: [
									"Node.js & Express",
									"NestJS",
									"GraphQL",
									"REST APIs",
									"WebSockets",
									"Microservices",
								],
								color: "from-green-500 to-emerald-500",
							},
							{
								title: "Database & DevOps",
								icon: <Globe className="w-6 h-6" />,
								skills: [
									"MongoDB",
									"PostgreSQL",
									"Redis",
									"Docker",
									"AWS & GCP",
									"CI/CD Pipelines",
								],
								color: "from-purple-500 to-pink-500",
							},
							{
								title: "Specialized Tools",
								icon: <Sparkles className="w-6 h-6" />,
								skills: [
									"Reactive Text Processing",
									"AI/ML Integration",
									"Firebase",
									"Vercel",
									"Three.js",
									"WebRTC",
								],
								color: "from-orange-500 to-red-500",
							},
						].map((category, index) => (
							<ScrollReveal
								key={category.title}
								delay={index * 0.15}
							>
								<motion.div
									whileHover={{ y: -5 }}
									className="group relative bg-card/50 backdrop-blur-sm border rounded-xl p-5 hover:shadow-lg transition-all duration-300 h-full flex flex-col"
								>
									{/* Gradient background */}
									<div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl`}></div>
									
									{/* Icon with gradient */}
									<div className={`relative inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} text-white mb-4 shadow-md flex-shrink-0`}>
										{category.icon}
									</div>
									
									<h3 className="relative text-lg font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
										{category.title}
									</h3>
									
									<ul className="relative space-y-2 flex-1">
										{category.skills.map((skill, skillIndex) => (
											<li
												key={skill}
												className="flex items-center text-sm"
											>
												<div
													className={`w-1.5 h-1.5 rounded-full mr-2 bg-gradient-to-r ${category.color} flex-shrink-0`}
												></div>
												<span className="text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
													{skill}
												</span>
											</li>
										))}
									</ul>
								</motion.div>
							</ScrollReveal>
						))}
					</div>
				</section>

				{/* Stats Section */}
				<ParallaxSection className="mb-24 py-16 relative overflow-hidden">
					{/* Background gradient */}
					<div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10"></div>
					
					<div className="container mx-auto px-4 relative z-10">
						<ScrollReveal>
							<div className="text-center mb-12">
								<h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
									Achievement Highlights
								</h2>
								<p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
									Numbers that reflect my journey and commitment to excellence
								</p>
							</div>
						</ScrollReveal>

						<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center max-w-4xl mx-auto">
							{[
								{ value: 5, label: "Years Experience", suffix: "+", icon: <Award className="w-6 h-6" /> },
								{ value: 25, label: "Projects Completed", suffix: "+", icon: <Code2 className="w-6 h-6" /> },
								{ value: 15, label: "Happy Clients", suffix: "+", icon: <Heart className="w-6 h-6" /> },
								{ value: 500, label: "Coffee Cups", suffix: "+", icon: <Zap className="w-6 h-6" /> },
							].map((stat, index) => (
								<ScrollReveal key={stat.label} delay={index * 0.1}>
									<motion.div 
										className="bg-card/50 backdrop-blur-sm border rounded-xl p-4 md:p-6 hover:bg-card/70 transition-all duration-300"
										whileHover={{ y: -5 }}
									>
										<div className="text-primary mb-3 flex justify-center">
											{stat.icon}
										</div>
										<AnimatedCounter
											end={stat.value}
											className="text-2xl md:text-3xl font-bold text-foreground mb-1 block"
											suffix={stat.suffix}
										/>
										<p className="text-muted-foreground text-xs md:text-sm font-medium">{stat.label}</p>
									</motion.div>
								</ScrollReveal>
							))}
						</div>
					</div>
				</ParallaxSection>

				{/* Experience Section */}
				<section className="mb-24">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
							Professional Journey
						</h2>
						<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
							My career evolution through meaningful experiences and continuous learning
						</p>
					</motion.div>

					<div className="grid lg:grid-cols-2 gap-12">
						{/* Work Experience */}
						<div className="space-y-8">
							<div className="flex items-center mb-8">
								<div className="w-10 h-10 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center mr-3 shadow-lg">
									<Briefcase className="w-5 h-5 text-white" />
								</div>
								<h3 className="text-2xl font-bold">Work Experience</h3>
							</div>

							<div className="space-y-6">
								{[
									{
										title: "Senior Full Stack Developer",
										company: "Dell Technologies",
										period: "Jan 2026 - Present",
										description: `
												• Developing enterprise-scale frontend applications using React.js, Next.js, TypeScript, HTML5, CSS3, and Tailwind, contributing to scalable customer-facing platforms.
												• Building reusable UI components and design-system-aligned modules to ensure consistency and faster feature delivery across applications.
												• Integrating REST and GraphQL APIs with backend microservices to enable dynamic, data-driven user interfaces.
												• Implementing state management solutions (Redux Toolkit, React Query, Context API) to improve application scalability and maintainability.
												• Applying frontend performance optimization techniques such as code splitting, lazy loading, and bundle optimization to enhance application responsiveness.
												• Writing unit and integration tests using Jest and React Testing Library to maintain code quality and application stability.
												• Collaborating in Agile/Scrum environments with product managers, UX designers, and backend teams to deliver new features and enhancements.
											`,
										skills: ["React", "Next.js", "Node.js", "Collaboration Tools", "CI/CD"],
									},
									{
										title: "Full Stack Developer",
										company: "CueTech Systems",
										period: "Jan 2020 - May 2024",
										description: `
														• Developed responsive enterprise web applications using React.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, and Bootstrap/Tailwind, improving UI performance and usability across desktop and mobile devices.
														• Built reusable component libraries and scalable frontend architecture, reducing development time for new features by standardizing UI modules.
														• Integrated RESTful APIs and backend microservices (Node.js/Express) to enable dynamic data rendering and real-time user interactions.
														• Implemented state management solutions (Redux, Context API) to improve application scalability and maintainability across multi-module platforms.
														• Optimized application performance through lazy loading, code splitting, caching strategies, and bundle optimization, significantly improving page load times and Core Web Vitals.
														• Collaborated with cross-functional Agile teams to translate business requirements into user-centric frontend features, accelerating sprint delivery timelines.
														• Developed unit and integration tests using Jest and React Testing Library, improving application stability and reducing production defects.
														• Participated in CI/CD deployment workflows using Git, Jenkins, and Docker, enabling faster and more reliable application releases.
												`,
										skills: ["React", "Express", "MongoDB", "Real-time Features"],
									},
								].map((job, index) => (
									<motion.div
										key={job.title}
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.5, delay: index * 0.1 }}
										viewport={{ once: true }}
										className="relative"
									>
										<div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-primary to-purple-600 rounded-full"></div>
										<div className="absolute -left-1 top-2 w-3 h-3 bg-primary rounded-full border-2 border-background shadow-sm"></div>
										
										<div className="ml-6 bg-card/50 backdrop-blur-sm border rounded-lg p-4 hover:shadow-lg transition-all duration-300">
											<h4 className="text-lg font-semibold mb-1">{job.title}</h4>
											<p className="text-primary font-medium mb-1 text-sm">{job.company}</p>
											<p className="text-xs text-muted-foreground mb-3">{job.period}</p>
											<p className="text-muted-foreground mb-3 text-sm leading-relaxed">{job.description}</p>
											<div className="flex flex-wrap gap-1">
												{job.skills.map((skill) => (
													<Badge key={skill} variant="secondary" className="text-xs px-2 py-0.5">
														{skill}
													</Badge>
												))}
											</div>
										</div>
									</motion.div>
								))}
							</div>
						</div>

						{/* Education */}
						<div className="space-y-8">
							<div className="flex items-center mb-8">
								<div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3 shadow-lg">
									<GraduationCap className="w-5 h-5 text-white" />
								</div>
								<h3 className="text-2xl font-bold">Education</h3>
							</div>

							<div className="space-y-6">
								{[
									{
										degree: "Master's in Computer Science",
										institution: "University of Alabama at Birmingham",
										period: "2024 - 2026",
										description: "Specialized in Web Technologies, Software Engineering, and Advanced Data Structures. Research focus on collaborative text editing systems and real-time synchronization.",
									},
									{
										degree: "Bachelor's in Computer Science",
										institution: "Poornima College of Engineering",
										period: "2018 - 2022",
										description: "Focused on programming fundamentals, data structures, and algorithms. Participated in coding competitions and built several collaborative editing projects using modern web technologies.",
									},
									{
										degree: "Online Certifications",
										institution: "Various Platforms",
										period: "2016 - Present",
										description: "Continuously learning through platforms like Coursera, Udemy, and freeCodeCamp. Certified in React, Node.js, and specialized training in modern web development.",
									},
								].map((edu, index) => (
									<motion.div
										key={edu.degree}
										initial={{ opacity: 0, x: 20 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.5, delay: index * 0.1 }}
										viewport={{ once: true }}
										className="relative"
									>
										<div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-green-500 to-emerald-600 rounded-full"></div>
										<div className="absolute -left-1 top-2 w-3 h-3 bg-green-500 rounded-full border-2 border-background shadow-sm"></div>
										
										<div className="ml-6 bg-card/50 backdrop-blur-sm border rounded-lg p-4 hover:shadow-lg transition-all duration-300">
											<h4 className="text-lg font-semibold mb-1">{edu.degree}</h4>
											<p className="text-green-600 font-medium mb-1 text-sm">{edu.institution}</p>
											<p className="text-xs text-muted-foreground mb-3">{edu.period}</p>
											<p className="text-muted-foreground text-sm leading-relaxed">{edu.description}</p>
										</div>
									</motion.div>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* Personal Interests */}
				<section>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
							Beyond the Code
						</h2>
						<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
							Exploring life beyond development to stay inspired and creative
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
						{[
							{
								icon: <BookOpen className="w-8 h-8" />,
								title: "Reading & Research",
								description: "I enjoy reading books on technology, science fiction, and personal development. Currently researching advanced collaborative editing algorithms and modern optimization techniques.",
								color: "from-blue-500 to-cyan-500",
							},
							{
								icon: <Globe className="w-8 h-8" />,
								title: "Traveling & Culture",
								description: "Exploring new places and experiencing different cultures broadens my perspective and brings fresh ideas to my development work.",
								color: "from-green-500 to-emerald-500",
							},
							{
								icon: <Heart className="w-8 h-8" />,
								title: "Open Source",
								description: "I contribute to open source projects, especially those related to collaborative editing and modern web implementations. Believe in giving back to the developer community.",
								color: "from-purple-500 to-pink-500",
							},
						].map((interest, index) => (
							<motion.div
								key={interest.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true }}
								whileHover={{ y: -5 }}
								className="group relative bg-card/50 backdrop-blur-sm border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 h-full flex flex-col"
							>
								{/* Gradient background */}
								<div className={`absolute inset-0 bg-gradient-to-br ${interest.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl`}></div>
								
								{/* Icon with gradient */}
								<div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br ${interest.color} text-white mb-4 shadow-lg mx-auto flex-shrink-0`}>
									{interest.icon}
								</div>
								
								<h3 className="relative text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
									{interest.title}
								</h3>
								<p className="relative text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300 text-sm flex-1">
									{interest.description}
								</p>
							</motion.div>
						))}
					</div>

					{/* Call to action */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						viewport={{ once: true }}
						className="text-center mt-12"
					>
						<div className="bg-gradient-to-r from-primary/5 via-purple-500/5 to-pink-500/5 border border-primary/20 rounded-xl p-6 max-w-3xl mx-auto">
							<h3 className="text-xl md:text-2xl font-bold mb-3">Let's Build Something Amazing Together</h3>
							<p className="text-muted-foreground mb-6 text-sm md:text-base leading-relaxed">
								Ready to collaborate on your next project? Whether it's implementing collaborative features or building a complete web application, I'm here to help bring your vision to life.
							</p>
							<div className="flex flex-col sm:flex-row gap-3 justify-center">
								<Button asChild size="lg" className="group">
									<Link href="/contact">
										Start a Conversation
										<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
									</Link>
								</Button>
								<Button variant="outline" size="lg" asChild>
									<Link href="/work">
										View My Work
									</Link>
								</Button>
							</div>
						</div>
					</motion.div>
				</section>
			</div>
		</div>
	);
}
