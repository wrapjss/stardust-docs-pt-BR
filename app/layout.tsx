import "./global.css";
import { Analytics } from "@vercel/analytics/next";
import { RootProvider } from "fumadocs-ui/provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

const inter = Inter({
	subsets: ["latin"],
});
export const metadata: Metadata = {
	title: {
		template: "%s | Stardust",
		default: "Stardust",
	},
	description: "Stardust is the platform for streaming isolated, disposable, and secure desktop environments.",
	metadataBase:
		process.env.NODE_ENV === "development"
			? new URL(process.env.LOCAL_URL ?? "http://localhost:3000")
			: new URL("https://stardust.spaceness.team"),
};
export default function Layout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className={inter.className} suppressHydrationWarning>
			<body>
				<RootProvider>{children}</RootProvider>
				<Analytics />
			</body>
		</html>
	);
}
