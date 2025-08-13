import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import PageTransition from "@/components/page-transition";
import CursorFollower from "@/components/cursor-follower";
import ClientOnly from "@/components/client-only";
import HydrationDebugger from "@/components/hydration-debugger";

const inter = Inter({ 
	subsets: ["latin"],
	display: 'swap', // Improve font loading
});

export const metadata: Metadata = {
	title: "Amit Haritwal",
	description: "Amit's Portfolio website",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link rel="icon" href="/favicon.ico" />
				{/* Preload critical resources */}
				<link rel="preload" href="/profile.jpg" as="image" />
			</head>
			<body className={inter.className} suppressHydrationWarning>
				<HydrationDebugger />
				<ClientOnly>
					<CursorFollower />
				</ClientOnly>
				<Header />
				<PageTransition>
					<main className="min-h-screen">{children}</main>
				</PageTransition>
				<Footer />
			</body>
		</html>
	);
}
