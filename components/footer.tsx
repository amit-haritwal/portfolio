"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-muted py-12">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div>
						<motion.h3
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							viewport={{ once: true }}
							className="text-xl font-bold mb-4"
						>
							<span className="text-primary">Portfolio</span>
						</motion.h3>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.1 }}
							viewport={{ once: true }}
							className="text-muted-foreground"
						>
							Full stack developer specializing in modern web technologies and
							creating exceptional digital experiences.
						</motion.p>
					</div>

					<div>
						<motion.h4
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							viewport={{ once: true }}
							className="text-lg font-semibold mb-4"
						>
							Quick Links
						</motion.h4>
						<motion.ul
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.1 }}
							viewport={{ once: true }}
							className="space-y-2"
						>
							<li>
								<Link
									href="/"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									href="/about"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									About
								</Link>
							</li>
							<li>
								<Link
									href="/work"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									Work
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									Contact
								</Link>
							</li>
						</motion.ul>
					</div>

					<div>
						<motion.h4
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							viewport={{ once: true }}
							className="text-lg font-semibold mb-4"
						>
							Connect
						</motion.h4>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.1 }}
							viewport={{ once: true }}
							className="flex space-x-4"
						>
							<Link
								href="https://github.com/amit-haritwal"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-primary transition-colors"
							>
								<Github className="h-5 w-5" />
								<span className="sr-only">GitHub</span>
							</Link>
							<Link
								href="https://www.linkedin.com/in/amit-haritwal-54822217a/"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-primary transition-colors"
							>
								<Linkedin className="h-5 w-5" />
								<span className="sr-only">LinkedIn</span>
							</Link>
							<Link
								href="https://twitter.com/amit-haritwal"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-primary transition-colors"
							>
								<Twitter className="h-5 w-5" />
								<span className="sr-only">Twitter</span>
							</Link>
							<Link
								href="mailto:amitharital02@gmail.com"
								className="hover:text-primary transition-colors"
							>
								<Mail className="h-5 w-5" />
								<span className="sr-only">Email</span>
							</Link>
						</motion.div>
					</div>
				</div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					viewport={{ once: true }}
					className="border-t border-border mt-8 pt-8 text-center text-muted-foreground"
				>
					<p>&copy; {currentYear} Portfolio. All rights reserved.</p>
				</motion.div>
			</div>
		</footer>
	);
}
