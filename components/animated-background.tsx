"use client";

import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		let particles: Particle[] = [];
		let animationFrameId: number;

		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			initParticles();
		};

		class Particle {
			x: number;
			y: number;
			size: number;
			speedX: number;
			speedY: number;
			color: string;

			constructor() {
				this.x = Math.random() * canvas.width;
				this.y = Math.random() * canvas.height;
				this.size = Math.random() * 5 + 1;
				this.speedX = Math.random() * 3 - 1.5;
				this.speedY = Math.random() * 3 - 1.5;

				// Check if dark mode is active
				const isDarkMode = document.documentElement.classList.contains("dark");
				this.color = isDarkMode
					? `hsla(240, 10%, 70%, ${Math.random() * 0.2})`
					: `hsla(240, 10%, 30%, ${Math.random() * 0.2})`;
			}

			update() {
				this.x += this.speedX;
				this.y += this.speedY;

				if (this.x > canvas.width) this.x = 0;
				else if (this.x < 0) this.x = canvas.width;

				if (this.y > canvas.height) this.y = 0;
				else if (this.y < 0) this.y = canvas.height;
			}

			draw() {
				if (!ctx) return;
				ctx.fillStyle = this.color;
				ctx.beginPath();
				ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
				ctx.fill();
			}
		}

		function initParticles() {
			particles = [];
			const numberOfParticles =
				Math.floor((canvas.width * canvas.height) / 15000) * 2;

			for (let i = 0; i < numberOfParticles; i++) {
				particles.push(new Particle());
			}
		}

		function animate() {
			if (!ctx) return;
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			for (let i = 0; i < particles.length; i++) {
				particles[i].update();
				particles[i].draw();

				// Connect particles with lines if they're close enough
				for (let j = i; j < particles.length; j++) {
					const dx = particles[i].x - particles[j].x;
					const dy = particles[i].y - particles[j].y;
					const distance = Math.sqrt(dx * dx + dy * dy);

					if (distance < 100) {
						// Check if dark mode is active
						const isDarkMode =
							document.documentElement.classList.contains("dark");
						ctx.beginPath();
						ctx.strokeStyle = isDarkMode
							? `rgba(200, 200, 255, ${0.1 * (1 - distance / 100)})`
							: `rgba(100, 100, 150, ${0.1 * (1 - distance / 100)})`;
						ctx.lineWidth = 0.5;
						ctx.moveTo(particles[i].x, particles[i].y);
						ctx.lineTo(particles[j].x, particles[j].y);
						ctx.stroke();
					}
				}
			}

			animationFrameId = requestAnimationFrame(animate);
		}

		// Listen for theme changes
		const observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				if (mutation.attributeName === "class") {
					// Reinitialize particles when theme changes
					initParticles();
				}
			});
		});

		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ["class"],
		});

		window.addEventListener("resize", resizeCanvas);
		resizeCanvas();
		animate();

		return () => {
			window.removeEventListener("resize", resizeCanvas);
			cancelAnimationFrame(animationFrameId);
			observer.disconnect();
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			className="fixed top-0 left-0 w-full h-full -z-10 opacity-50"
		/>
	);
}
