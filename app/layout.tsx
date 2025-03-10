import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import PageTransition from "@/components/page-transition";
import CursorFollower from "@/components/cursor-follower";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

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
			<Head>
				<title>Amit Haritwal</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<body className={inter.className}>
				<CursorFollower />
				<Header />
				<PageTransition>
					<main>{children}</main>
				</PageTransition>
				<Footer />
			</body>
		</html>
	);
}
