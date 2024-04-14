import type { Metadata } from "next";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider as JotaiProvider } from "jotai";

import Menu from "../_components/Menu";

import "./../_styles/globals.css";

export const metadata: Metadata = {
	title: "IoT",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<body className="min-h-[100vh]">
				<JotaiProvider>
					<ChakraProvider>
						<Menu />
						<main className="ml-[15%] mr-20 py-10 h-full ">{children}</main>
					</ChakraProvider>
				</JotaiProvider>
			</body>
		</html>
	);
}
