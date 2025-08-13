"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, MessageCircle, Calendar, Users, Zap } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import ScrollReveal from "@/components/scroll-reveal";
import TextAnimation from "@/components/text-animation";
import ClientOnly from "@/components/client-only";
import AnimatedBackground from "@/components/animated-background";
import FloatingIcons from "@/components/floating-icons";

export default function ContactPage() {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormState((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate form submission
		setTimeout(() => {
			setIsSubmitting(false);
			setIsSubmitted(true);
			setFormState({
				name: "",
				email: "",
				subject: "",
				message: "",
			});

			// Reset success message after 5 seconds
			setTimeout(() => {
				setIsSubmitted(false);
			}, 5000);
		}, 1500);
	};

	const contactMethods = [
		{
			icon: Mail,
			title: "Email",
			value: "amit.haritwal@example.com",
			description: "Send me an email anytime",
		},
		{
			icon: Phone,
			title: "Phone",
			value: "+1 (555) 123-4567",
			description: "Let's talk directly",
		},
		{
			icon: MapPin,
			title: "Location",
			value: "San Francisco, CA",
			description: "Available for remote work",
		},
	];

	const collaborationTypes = [
		{
			icon: MessageCircle,
			title: "Real-time Collaboration",
			description: "Seamless multi-user editing and synchronized workflows",
		},
		{
			icon: Calendar,
			title: "Project Planning",
			description: "Collaborative planning sessions with real-time document sharing",
		},
		{
			icon: Users,
			title: "Team Integration",
			description: "Integrating collaborative features into existing team workflows",
		},
		{
			icon: Zap,
			title: "Rapid Prototyping",
			description: "Quick iterations with real-time collaborative development",
		},
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
			{/* Animated background with ClientOnly wrapper */}
			<ClientOnly>
				<AnimatedBackground />
				<FloatingIcons count={5} />
			</ClientOnly>

			<div className="pt-32 container mx-auto px-4 max-w-5xl">
				{/* Hero Section */}
			

				{/* Contact Methods Section */}
				<ScrollReveal>
					<section className="pb-16 md:pb-24">
						<div className="text-center mb-12">
							<h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Methods</h2>
							<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
								Choose your preferred way to reach out and start the conversation
							</p>
						</div>

						<div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
							{contactMethods.map((method, index) => (
								<motion.div
									key={method.title}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1 }}
									className="h-full"
								>
									<div className="bg-card/50 backdrop-blur-sm border rounded-xl p-6 h-full text-center hover:shadow-lg transition-all duration-300 hover:border-primary/50">
										<div className="w-12 h-12 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
											<method.icon className="w-6 h-6 text-white" />
										</div>
										<h3 className="text-lg font-semibold mb-3">{method.title}</h3>
										<p className="text-primary font-medium mb-2">{method.value}</p>
										<p className="text-muted-foreground text-sm">{method.description}</p>
									</div>
								</motion.div>
							))}
						</div>
					</section>
				</ScrollReveal>

				{/* Contact Form and Collaboration Info */}
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
					{/* Contact Form */}
					<ScrollReveal>
						<div className="bg-card/50 backdrop-blur-sm border rounded-xl p-8">
							<h2 className="text-2xl font-bold mb-6">Send a Message</h2>

							{isSubmitted ? (
								<motion.div
									initial={{ opacity: 0, scale: 0.95 }}
									animate={{ opacity: 1, scale: 1 }}
									className="text-center py-12"
								>
									<div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
										<Send className="w-8 h-8 text-white" />
									</div>
									<h3 className="text-xl font-bold mb-2">Message Sent!</h3>
									<p className="text-muted-foreground">
										Thank you for reaching out. I'll get back to you soon.
									</p>
								</motion.div>
							) : (
								<form onSubmit={handleSubmit} className="space-y-6">
									<div className="grid sm:grid-cols-2 gap-6">
										<div className="space-y-2">
											<Label htmlFor="name">Name</Label>
											<Input
												id="name"
												name="name"
												type="text"
												value={formState.name}
												onChange={handleChange}
												required
												className="bg-background/50"
											/>
										</div>
										<div className="space-y-2">
											<Label htmlFor="email">Email</Label>
											<Input
												id="email"
												name="email"
												type="email"
												value={formState.email}
												onChange={handleChange}
												required
												className="bg-background/50"
											/>
										</div>
									</div>
									<div className="space-y-2">
										<Label htmlFor="subject">Subject</Label>
										<Input
											id="subject"
											name="subject"
											type="text"
											value={formState.subject}
											onChange={handleChange}
											required
											className="bg-background/50"
										/>
									</div>
									<div className="space-y-2">
										<Label htmlFor="message">Message</Label>
										<Textarea
											id="message"
											name="message"
											value={formState.message}
											onChange={handleChange}
											required
											rows={6}
											className="bg-background/50 resize-none"
											placeholder="Tell me about your project and how we can collaborate..."
										/>
									</div>
									<Button
										type="submit"
										size="lg"
										disabled={isSubmitting}
										className="w-full group"
									>
										{isSubmitting ? (
											"Sending..."
										) : (
											<>
												Send Message
												<Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
											</>
										)}
									</Button>
								</form>
							)}
						</div>
					</ScrollReveal>

					{/* Collaboration Types */}
					<ScrollReveal>
						<div>
							<h2 className="text-2xl font-bold mb-6">Collaboration Opportunities</h2>
							<p className="text-muted-foreground mb-8">
								Discover how we can work together using modern collaborative technologies
							</p>

							<div className="space-y-6">
								{collaborationTypes.map((collab, index) => (
									<motion.div
										key={collab.title}
										initial={{ opacity: 0, x: 20 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{ delay: index * 0.1 }}
									>
										<div className="bg-card/50 backdrop-blur-sm border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50">
											<div className="flex items-start gap-4">
												<div className="w-10 h-10 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
													<collab.icon className="w-5 h-5 text-white" />
												</div>
												<div>
													<h3 className="font-semibold mb-2">{collab.title}</h3>
													<p className="text-muted-foreground text-sm leading-relaxed">
														{collab.description}
													</p>
												</div>
											</div>
										</div>
									</motion.div>
								))}
							</div>
						</div>
					</ScrollReveal>
				</div>

				{/* Collaboration Section */}
				<ScrollReveal>
					<section className="py-16 md:py-24">
						<div className="bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-8 md:p-12 border text-center">
							<div className="max-w-3xl mx-auto">
								<div className="flex justify-center mb-6">
									<Badge variant="secondary" className="text-sm px-4 py-2">
										Collaborative Technology
									</Badge>
								</div>
								<h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
									Let's Build Together
								</h2>
								<p className="text-muted-foreground text-lg leading-relaxed mb-8">
									Ready to implement cutting-edge collaborative features? I specialize in integrating 
									modern technology for real-time multi-user editing, synchronized workflows, and 
									seamless team collaboration in modern web applications.
								</p>
								<div className="flex flex-wrap justify-center gap-3 mb-8">
									<Badge variant="outline">Real-time Editing</Badge>
									<Badge variant="outline">Team Synchronization</Badge>
									<Badge variant="outline">Collaborative Workflows</Badge>
									<Badge variant="outline">Modern Integration</Badge>
								</div>
								<div className="flex flex-col sm:flex-row gap-4 justify-center">
									<Button asChild size="lg" className="group">
										<a href="mailto:amit.haritwal@example.com">
											Start Collaborating
											<Mail className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
										</a>
									</Button>
									<Button variant="outline" size="lg" asChild>
										<a href="/work">View Projects</a>
									</Button>
								</div>
							</div>
						</div>
					</section>
				</ScrollReveal>
			</div>
		</div>
	);
}
