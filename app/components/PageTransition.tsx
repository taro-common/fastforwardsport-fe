"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

type PositionedElement = {
	element: HTMLElement;
	top: number;
	left: number;
};

const ROW_TOLERANCE = 14;

export default function PageTransition({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const container = containerRef.current;

		if (!container) return;

		const sections = Array.from(container.querySelectorAll<HTMLElement>("section"));

		if (sections.length === 0) return;

		sections.forEach((section) => {
			section.classList.add("ff-section");
		});

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (!entry.isIntersecting) return;

					const section = entry.target as HTMLElement;
					section.classList.add("ff-section-visible");

					const candidates = Array.from(
						section.querySelectorAll<HTMLElement>(
							"h1, h2, h3, p, li, .grid > *, .flex > *, a.inline-block, button, [data-animate-item]",
						),
					).filter((el) => {
						if (el.closest("[data-no-animate='true']")) return false;
						if (el.classList.contains("ff-item")) return false;
						if (el.offsetParent === null) return false;
						return true;
					});

					const unique = Array.from(new Set(candidates));

					const withPosition: PositionedElement[] = unique.map((element) => {
						const rect = element.getBoundingClientRect();
						return {
							element,
							top: Math.round(rect.top),
							left: Math.round(rect.left),
						};
					});

					withPosition.sort((a, b) => {
						const topDiff = Math.abs(a.top - b.top);
						if (topDiff > ROW_TOLERANCE) return a.top - b.top;
						return a.left - b.left;
					});

					withPosition.forEach(({ element }, index) => {
						element.classList.add("ff-item");
						element.style.setProperty("--ff-item-delay", `${index * 45}ms`);
					});

					requestAnimationFrame(() => {
						withPosition.forEach(({ element }) => {
							element.classList.add("ff-item-visible");
						});
					});

					observer.unobserve(section);
				});
			},
			{
				threshold: 0.2,
				rootMargin: "0px 0px -8% 0px",
			},
		);

		sections.forEach((section) => observer.observe(section));

		return () => observer.disconnect();
	}, [pathname]);

	return <div ref={containerRef}>{children}</div>;
}

