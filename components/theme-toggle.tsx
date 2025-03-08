"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
	const [isDarkMode, setIsDarkMode] = useState(false);

	// Initialize theme from localStorage or system preference
	useEffect(() => {
		// Check if user has a theme preference in localStorage
		const storedTheme = localStorage.getItem("theme");

		if (storedTheme === "dark") {
			setIsDarkMode(true);
			document.documentElement.classList.add("dark");
		} else if (storedTheme === "light") {
			setIsDarkMode(false);
			document.documentElement.classList.remove("dark");
		} else {
			// Check system preference
			const prefersDark = window.matchMedia(
				"(prefers-color-scheme: dark)"
			).matches;
			setIsDarkMode(prefersDark);
			if (prefersDark) {
				document.documentElement.classList.add("dark");
			}
		}
	}, []);

	const toggleTheme = () => {
		if (isDarkMode) {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		} else {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		}
		setIsDarkMode(!isDarkMode);
	};

	return (
		<Button
			variant="ghost"
			size="icon"
			onClick={toggleTheme}
			aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
		>
			{isDarkMode ? (
				<Sun className="h-5 w-5 transition-all" />
			) : (
				<Moon className="h-5 w-5 transition-all" />
			)}
		</Button>
	);
}
