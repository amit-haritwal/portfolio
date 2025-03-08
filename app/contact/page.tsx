"use client";

import type React from "react";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import ScrollReveal from "@/components/scroll-reveal";
import TextAnimation from "@/components/text-animation";

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

	return (
		<div className="pt-32 pb-16">
			<div className="container mx-auto px-4">
				<section className="mb-16">
					<TextAnimation
						text="Get In Touch"
						type="reveal"
						className="text-4xl md:text-5xl font-bold mb-6 text-center"
					/>

					<ScrollReveal direction="up" delay={0.2}>
						<p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
							Have a project in mind or want to discuss a potential
							collaboration? I'd love to hear from you. Fill out the form below
							or reach out directly.
						</p>
					</ScrollReveal>
				</section>

				{/* Contact Section */}
				<section>
					<div className="grid md:grid-cols-2 gap-12">
						{/* Contact Information */}
						<ScrollReveal direction="left">
							<h2 className="text-2xl font-bold mb-6">Contact Information</h2>

							<div className="space-y-8">
								<motion.div
									className="flex items-start"
									whileHover={{ x: 10 }}
									transition={{ type: "spring", stiffness: 400 }}
								>
									<motion.div
										className="bg-primary/10 p-3 rounded-full mr-4"
										animate={{
											scale: [1, 1.2, 1],
											rotate: [0, 10, 0],
										}}
										transition={{
											repeat: Number.POSITIVE_INFINITY,
											duration: 3,
											ease: "easeInOut",
										}}
									>
										<Mail className="h-6 w-6 text-primary" />
									</motion.div>
									<div>
										<h3 className="text-lg font-semibold">Email</h3>
										<p className="text-muted-foreground">
											amitharital02@gmail.com
										</p>
									</div>
								</motion.div>

								<motion.div
									className="flex items-start"
									whileHover={{ x: 10 }}
									transition={{ type: "spring", stiffness: 400 }}
								>
									<motion.div
										className="bg-primary/10 p-3 rounded-full mr-4"
										animate={{
											scale: [1, 1.2, 1],
											rotate: [0, -10, 0],
										}}
										transition={{
											repeat: Number.POSITIVE_INFINITY,
											duration: 3,
											ease: "easeInOut",
											delay: 0.5,
										}}
									>
										<Phone className="h-6 w-6 text-primary" />
									</motion.div>
									<div>
										<h3 className="text-lg font-semibold">Phone</h3>
										<p className="text-muted-foreground">+1 (659) 279-1984</p>
										<p className="text-muted-foreground">Mon-Fri</p>
									</div>
								</motion.div>

								<motion.div
									className="flex items-start"
									whileHover={{ x: 10 }}
									transition={{ type: "spring", stiffness: 400 }}
								>
									<motion.div
										className="bg-primary/10 p-3 rounded-full mr-4"
										animate={{
											scale: [1, 1.2, 1],
											rotate: [0, 10, 0],
										}}
										transition={{
											repeat: Number.POSITIVE_INFINITY,
											duration: 3,
											ease: "easeInOut",
											delay: 1,
										}}
									>
										<MapPin className="h-6 w-6 text-primary" />
									</motion.div>
									<div>
										<h3 className="text-lg font-semibold">Location</h3>
										<p className="text-muted-foreground">Birmingham, AL</p>
										<p className="text-muted-foreground">United States</p>
									</div>
								</motion.div>
							</div>

							<div className="mt-12">
								<h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
								<div className="flex space-x-4">
									<motion.a
										href="https://github.com/amit-haritwal"
										target="_blank"
										rel="noopener noreferrer"
										className="bg-secondary p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
										whileHover={{ y: -5, rotate: 5 }}
										whileTap={{ scale: 0.9 }}
									>
										<svg
											className="h-5 w-5"
											fill="currentColor"
											viewBox="0 0 24 24"
											aria-hidden="true"
										>
											<path
												fillRule="evenodd"
												d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
												clipRule="evenodd"
											/>
										</svg>
										<span className="sr-only">GitHub</span>
									</motion.a>
									<motion.a
										href="https://www.linkedin.com/in/amit-haritwal-54822217a/"
										target="_blank"
										rel="noopener noreferrer"
										className="bg-secondary p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
										whileHover={{ y: -5, rotate: -5 }}
										whileTap={{ scale: 0.9 }}
									>
										<svg
											className="h-5 w-5"
											fill="currentColor"
											viewBox="0 0 24 24"
											aria-hidden="true"
										>
											<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
										</svg>
										<span className="sr-only">LinkedIn</span>
									</motion.a>
									<motion.a
										href="https://twitter.com/amit-haritwal"
										target="_blank"
										rel="noopener noreferrer"
										className="bg-secondary p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
										whileHover={{ y: -5, rotate: 5 }}
										whileTap={{ scale: 0.9 }}
									>
										<svg
											className="h-5 w-5"
											fill="currentColor"
											viewBox="0 0 24 24"
											aria-hidden="true"
										>
											<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
										</svg>
										<span className="sr-only">Twitter</span>
									</motion.a>
								</div>
							</div>
						</ScrollReveal>

						{/* Contact Form */}
						<ScrollReveal direction="right">
							<h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>

							{isSubmitted ? (
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6"
								>
									<p className="font-medium">Thank you for your message!</p>
									<p>I'll get back to you as soon as possible.</p>
								</motion.div>
							) : (
								<form onSubmit={handleSubmit} className="space-y-6">
									<div className="grid md:grid-cols-2 gap-6">
										<motion.div
											className="space-y-2"
											initial={{ opacity: 0, x: -20 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ delay: 0.1 }}
										>
											<Label htmlFor="name">Your Name</Label>
											<Input
												id="name"
												name="name"
												value={formState.name}
												onChange={handleChange}
												placeholder="John Doe"
												required
											/>
										</motion.div>
										<motion.div
											className="space-y-2"
											initial={{ opacity: 0, x: 20 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ delay: 0.2 }}
										>
											<Label htmlFor="email">Your Email</Label>
											<Input
												id="email"
												name="email"
												type="email"
												value={formState.email}
												onChange={handleChange}
												placeholder="john@example.com"
												required
											/>
										</motion.div>
									</div>

									<motion.div
										className="space-y-2"
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.3 }}
									>
										<Label htmlFor="subject">Subject</Label>
										<Input
											id="subject"
											name="subject"
											value={formState.subject}
											onChange={handleChange}
											placeholder="Project Inquiry"
											required
										/>
									</motion.div>

									<motion.div
										className="space-y-2"
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.4 }}
									>
										<Label htmlFor="message">Message</Label>
										<Textarea
											id="message"
											name="message"
											value={formState.message}
											onChange={handleChange}
											placeholder="Tell me about your project..."
											rows={6}
											required
										/>
									</motion.div>

									<motion.div
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.5 }}
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
									>
										<Button
											type="submit"
											size="lg"
											disabled={isSubmitting}
											className="w-full"
										>
											{isSubmitting ? (
												<>
													<svg
														className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
													>
														<circle
															className="opacity-25"
															cx="12"
															cy="12"
															r="10"
															stroke="currentColor"
															strokeWidth="4"
														></circle>
														<path
															className="opacity-75"
															fill="currentColor"
															d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
														></path>
													</svg>
													Sending...
												</>
											) : (
												<>
													Send Message <Send className="ml-2 h-4 w-4" />
												</>
											)}
										</Button>
									</motion.div>
								</form>
							)}
						</ScrollReveal>
					</div>
				</section>

				{/* Map Section - Placeholder */}
				<section className="mt-20">
					<ScrollReveal>
						<motion.div
							className="bg-muted rounded-lg overflow-hidden h-96 relative"
							whileHover={{ scale: 1.02 }}
							transition={{ type: "spring", stiffness: 300 }}
						>
							<motion.div
								className="absolute inset-0 flex items-center justify-center"
								animate={{
									scale: [1, 1.1, 1],
									opacity: [0.7, 1, 0.7],
								}}
								transition={{
									repeat: Number.POSITIVE_INFINITY,
									duration: 3,
									ease: "easeInOut",
								}}
							>
								<MapPin className="h-12 w-12 text-primary animate-bounce" />
								<span className="sr-only">Map location</span>
							</motion.div>
							<motion.div
								className="absolute bottom-4 left-4 bg-background p-4 rounded-lg shadow-lg"
								initial={{ x: -100, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ delay: 0.5, type: "spring" }}
							>
								<h3 className="font-semibold">Office</h3>
								<p className="text-muted-foreground">
									Birmingham, AL, United States
								</p>
							</motion.div>
						</motion.div>
					</ScrollReveal>
				</section>

				{/* FAQ Section */}
				<section className="mt-20">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
						className="text-3xl font-bold mb-12 text-center"
					>
						Frequently Asked Questions
					</motion.h2>

					<div className="grid md:grid-cols-2 gap-8">
						{[
							{
								question: "What services do you offer?",
								answer:
									"I offer full stack development services including frontend development, backend development, database design, and deployment. I specialize in React, Next.js, Node.js, and related technologies.",
							},
							{
								question: "How much do you charge for a project?",
								answer:
									"Project costs vary depending on complexity, timeline, and specific requirements. I offer competitive rates and can work on hourly, fixed-price, or retainer arrangements. Contact me for a custom quote.",
							},
							{
								question: "What is your typical project timeline?",
								answer:
									"Timeline depends on project scope and complexity. A simple website might take 2-4 weeks, while a complex web application could take 2-3 months or more. I'll provide a detailed timeline during our initial consultation.",
							},
							{
								question: "Do you offer maintenance after project completion?",
								answer:
									"Yes, I offer ongoing maintenance and support services to ensure your application continues to run smoothly. I can also implement new features and updates as needed.",
							},
						].map((faq, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="bg-card border rounded-lg p-6 hover:shadow-md transition-shadow"
							>
								<h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
								<p className="text-muted-foreground">{faq.answer}</p>
							</motion.div>
						))}
					</div>
				</section>
			</div>
		</div>
	);
}
