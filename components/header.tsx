"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/theme-toggle";

const navItems = [
	{ name: "Home", path: "/" },
	{ name: "About", path: "/about" },
	{ name: "Work", path: "/work" },
	{ name: "Contact", path: "/contact" },
];

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={cn(
				"fixed top-0 w-full z-50 transition-all duration-300",
				scrolled
					? "bg-background/80 backdrop-blur-md py-4 shadow-md"
					: "bg-transparent py-6"
			)}
		>
			<div className="container mx-auto px-4 flex justify-between items-center">
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
				>
					<Link href="/" className="text-2xl font-bold">
						<span className="text-primary">Portfolio</span>
					</Link>
				</motion.div>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex space-x-8 items-center">
					{navItems.map((item, index) => (
						<motion.div
							key={item.name}
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<Link
								href={item.path}
								className={cn(
									"text-lg font-medium relative hover:text-primary transition-colors",
									pathname === item.path
										? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary"
										: "text-foreground"
								)}
							>
								{item.name}
							</Link>
						</motion.div>
					))}
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: navItems.length * 0.1 }}
					>
						<ThemeToggle />
					</motion.div>
				</nav>

				{/* Mobile Menu Button */}
				<div className="flex items-center md:hidden">
					{/* <ThemeToggle /> */}
					<motion.button
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5 }}
						className="ml-4"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
					>
						{mobileMenuOpen ? (
							<X className="h-6 w-6" />
						) : (
							<Menu className="h-6 w-6" />
						)}
					</motion.button>
				</div>

				{/* Mobile Navigation */}
				{mobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
						className="absolute top-full left-0 right-0 bg-background shadow-lg md:hidden"
					>
						<div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
							{navItems.map((item, index) => (
								<motion.div
									key={item.name}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.3, delay: index * 0.1 }}
								>
									<Link
										href={item.path}
										className={cn(
											"block py-2 text-lg font-medium hover:text-primary transition-colors",
											pathname === item.path
												? "text-primary"
												: "text-foreground"
										)}
										onClick={() => setMobileMenuOpen(false)}
									>
										{item.name}
									</Link>
								</motion.div>
							))}
						</div>
					</motion.div>
				)}
			</div>
		</header>
	);
}
